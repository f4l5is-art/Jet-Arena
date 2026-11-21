var Bu=Object.create;var _l=Object.defineProperty;var Mu=Object.getOwnPropertyDescriptor;var wu=Object.getOwnPropertyNames;var Du=Object.getPrototypeOf,bu=Object.prototype.hasOwnProperty;var Bl=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var Fu=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of wu(t))!bu.call(i,s)&&s!==e&&_l(i,s,{get:()=>t[s],enumerable:!(n=Mu(t,s))||n.enumerable});return i};var Ml=(i,t,e)=>(e=i!=null?Bu(Du(i)):{},Fu(t||!i||!i.__esModule?_l(e,"default",{value:i,enumerable:!0}):e,i));var tu=Bl((jh,Qh)=>{var Kh=function(){var i=function(A,g){var m=236,B=17,C=A,M=e[g],w=null,v=0,_=null,D=[],S={},R=function(I,W){v=C*4+17,w=function(k){for(var X=new Array(k),Y=0;Y<k;Y+=1){X[Y]=new Array(k);for(var nt=0;nt<k;nt+=1)X[Y][nt]=null}return X}(v),P(0,0),P(v-7,0),P(0,v-7),Z(),z(),K(I,W),C>=7&&O(I),_==null&&(_=xt(C,M,D)),ot(_,W)},P=function(I,W){for(var k=-1;k<=7;k+=1)if(!(I+k<=-1||v<=I+k))for(var X=-1;X<=7;X+=1)W+X<=-1||v<=W+X||(0<=k&&k<=6&&(X==0||X==6)||0<=X&&X<=6&&(k==0||k==6)||2<=k&&k<=4&&2<=X&&X<=4?w[I+k][W+X]=!0:w[I+k][W+X]=!1)},L=function(){for(var I=0,W=0,k=0;k<8;k+=1){R(!0,k);var X=s.getLostPoint(S);(k==0||I>X)&&(I=X,W=k)}return W},z=function(){for(var I=8;I<v-8;I+=1)w[I][6]==null&&(w[I][6]=I%2==0);for(var W=8;W<v-8;W+=1)w[6][W]==null&&(w[6][W]=W%2==0)},Z=function(){for(var I=s.getPatternPosition(C),W=0;W<I.length;W+=1)for(var k=0;k<I.length;k+=1){var X=I[W],Y=I[k];if(w[X][Y]==null)for(var nt=-2;nt<=2;nt+=1)for(var ut=-2;ut<=2;ut+=1)nt==-2||nt==2||ut==-2||ut==2||nt==0&&ut==0?w[X+nt][Y+ut]=!0:w[X+nt][Y+ut]=!1}},O=function(I){for(var W=s.getBCHTypeNumber(C),k=0;k<18;k+=1){var X=!I&&(W>>k&1)==1;w[Math.floor(k/3)][k%3+v-8-3]=X}for(var k=0;k<18;k+=1){var X=!I&&(W>>k&1)==1;w[k%3+v-8-3][Math.floor(k/3)]=X}},K=function(I,W){for(var k=M<<3|W,X=s.getBCHTypeInfo(k),Y=0;Y<15;Y+=1){var nt=!I&&(X>>Y&1)==1;Y<6?w[Y][8]=nt:Y<8?w[Y+1][8]=nt:w[v-15+Y][8]=nt}for(var Y=0;Y<15;Y+=1){var nt=!I&&(X>>Y&1)==1;Y<8?w[8][v-Y-1]=nt:Y<9?w[8][15-Y-1+1]=nt:w[8][15-Y-1]=nt}w[v-8][8]=!I},ot=function(I,W){for(var k=-1,X=v-1,Y=7,nt=0,ut=s.getMaskFunction(W),at=v-1;at>0;at-=2)for(at==6&&(at-=1);;){for(var Tt=0;Tt<2;Tt+=1)if(w[X][at-Tt]==null){var N=!1;nt<I.length&&(N=(I[nt]>>>Y&1)==1);var yt=ut(X,at-Tt);yt&&(N=!N),w[X][at-Tt]=N,Y-=1,Y==-1&&(nt+=1,Y=7)}if(X+=k,X<0||v<=X){X-=k,k=-k;break}}},ht=function(I,W){for(var k=0,X=0,Y=0,nt=new Array(W.length),ut=new Array(W.length),at=0;at<W.length;at+=1){var Tt=W[at].dataCount,N=W[at].totalCount-Tt;X=Math.max(X,Tt),Y=Math.max(Y,N),nt[at]=new Array(Tt);for(var yt=0;yt<nt[at].length;yt+=1)nt[at][yt]=255&I.getBuffer()[yt+k];k+=Tt;var Rt=s.getErrorCorrectPolynomial(N),_t=o(nt[at],Rt.getLength()-1),It=_t.mod(Rt);ut[at]=new Array(Rt.getLength()-1);for(var yt=0;yt<ut[at].length;yt+=1){var qt=yt+It.getLength()-ut[at].length;ut[at][yt]=qt>=0?It.getAt(qt):0}}for(var Pt=0,yt=0;yt<W.length;yt+=1)Pt+=W[yt].totalCount;for(var T=new Array(Pt),b=0,yt=0;yt<X;yt+=1)for(var at=0;at<W.length;at+=1)yt<nt[at].length&&(T[b]=nt[at][yt],b+=1);for(var yt=0;yt<Y;yt+=1)for(var at=0;at<W.length;at+=1)yt<ut[at].length&&(T[b]=ut[at][yt],b+=1);return T},xt=function(I,W,k){for(var X=a.getRSBlocks(I,W),Y=c(),nt=0;nt<k.length;nt+=1){var ut=k[nt];Y.put(ut.getMode(),4),Y.put(ut.getLength(),s.getLengthInBits(ut.getMode(),I)),ut.write(Y)}for(var at=0,nt=0;nt<X.length;nt+=1)at+=X[nt].dataCount;if(Y.getLengthInBits()>at*8)throw"code length overflow. ("+Y.getLengthInBits()+">"+at*8+")";for(Y.getLengthInBits()+4<=at*8&&Y.put(0,4);Y.getLengthInBits()%8!=0;)Y.putBit(!1);for(;!(Y.getLengthInBits()>=at*8||(Y.put(m,8),Y.getLengthInBits()>=at*8));)Y.put(B,8);return ht(Y,X)};S.addData=function(I,W){W=W||"Byte";var k=null;switch(W){case"Numeric":k=l(I);break;case"Alphanumeric":k=x(I);break;case"Byte":k=h(I);break;case"Kanji":k=u(I);break;default:throw"mode:"+W}D.push(k),_=null},S.isDark=function(I,W){if(I<0||v<=I||W<0||v<=W)throw I+","+W;return w[I][W]},S.getModuleCount=function(){return v},S.make=function(){if(C<1){for(var I=1;I<40;I++){for(var W=a.getRSBlocks(I,M),k=c(),X=0;X<D.length;X++){var Y=D[X];k.put(Y.getMode(),4),k.put(Y.getLength(),s.getLengthInBits(Y.getMode(),I)),Y.write(k)}for(var nt=0,X=0;X<W.length;X++)nt+=W[X].dataCount;if(k.getLengthInBits()<=nt*8)break}C=I}R(!1,L())},S.createTableTag=function(I,W){I=I||2,W=typeof W>"u"?I*4:W;var k="";k+='<table style="',k+=" border-width: 0px; border-style: none;",k+=" border-collapse: collapse;",k+=" padding: 0px; margin: "+W+"px;",k+='">',k+="<tbody>";for(var X=0;X<S.getModuleCount();X+=1){k+="<tr>";for(var Y=0;Y<S.getModuleCount();Y+=1)k+='<td style="',k+=" border-width: 0px; border-style: none;",k+=" border-collapse: collapse;",k+=" padding: 0px; margin: 0px;",k+=" width: "+I+"px;",k+=" height: "+I+"px;",k+=" background-color: ",k+=S.isDark(X,Y)?"#000000":"#ffffff",k+=";",k+='"/>';k+="</tr>"}return k+="</tbody>",k+="</table>",k},S.createSvgTag=function(I,W,k,X){var Y={};typeof arguments[0]=="object"&&(Y=arguments[0],I=Y.cellSize,W=Y.margin,k=Y.alt,X=Y.title),I=I||2,W=typeof W>"u"?I*4:W,k=typeof k=="string"?{text:k}:k||{},k.text=k.text||null,k.id=k.text?k.id||"qrcode-description":null,X=typeof X=="string"?{text:X}:X||{},X.text=X.text||null,X.id=X.text?X.id||"qrcode-title":null;var nt=S.getModuleCount()*I+W*2,ut,at,Tt,N,yt="",Rt;for(Rt="l"+I+",0 0,"+I+" -"+I+",0 0,-"+I+"z ",yt+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',yt+=Y.scalable?"":' width="'+nt+'px" height="'+nt+'px"',yt+=' viewBox="0 0 '+nt+" "+nt+'" ',yt+=' preserveAspectRatio="xMinYMin meet"',yt+=X.text||k.text?' role="img" aria-labelledby="'+Wt([X.id,k.id].join(" ").trim())+'"':"",yt+=">",yt+=X.text?'<title id="'+Wt(X.id)+'">'+Wt(X.text)+"</title>":"",yt+=k.text?'<description id="'+Wt(k.id)+'">'+Wt(k.text)+"</description>":"",yt+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',yt+='<path d="',Tt=0;Tt<S.getModuleCount();Tt+=1)for(N=Tt*I+W,ut=0;ut<S.getModuleCount();ut+=1)S.isDark(Tt,ut)&&(at=ut*I+W,yt+="M"+at+","+N+Rt);return yt+='" stroke="transparent" fill="black"/>',yt+="</svg>",yt},S.createDataURL=function(I,W){I=I||2,W=typeof W>"u"?I*4:W;var k=S.getModuleCount()*I+W*2,X=W,Y=k-W;return d(k,k,function(nt,ut){if(X<=nt&&nt<Y&&X<=ut&&ut<Y){var at=Math.floor((nt-X)/I),Tt=Math.floor((ut-X)/I);return S.isDark(Tt,at)?0:1}else return 1})},S.createImgTag=function(I,W,k){I=I||2,W=typeof W>"u"?I*4:W;var X=S.getModuleCount()*I+W*2,Y="";return Y+="<img",Y+=' src="',Y+=S.createDataURL(I,W),Y+='"',Y+=' width="',Y+=X,Y+='"',Y+=' height="',Y+=X,Y+='"',k&&(Y+=' alt="',Y+=Wt(k),Y+='"'),Y+="/>",Y};var Wt=function(I){for(var W="",k=0;k<I.length;k+=1){var X=I.charAt(k);switch(X){case"<":W+="&lt;";break;case">":W+="&gt;";break;case"&":W+="&amp;";break;case'"':W+="&quot;";break;default:W+=X;break}}return W},Q=function(I){var W=1;I=typeof I>"u"?W*2:I;var k=S.getModuleCount()*W+I*2,X=I,Y=k-I,nt,ut,at,Tt,N,yt={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},Rt={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},_t="";for(nt=0;nt<k;nt+=2){for(at=Math.floor((nt-X)/W),Tt=Math.floor((nt+1-X)/W),ut=0;ut<k;ut+=1)N="\u2588",X<=ut&&ut<Y&&X<=nt&&nt<Y&&S.isDark(at,Math.floor((ut-X)/W))&&(N=" "),X<=ut&&ut<Y&&X<=nt+1&&nt+1<Y&&S.isDark(Tt,Math.floor((ut-X)/W))?N+=" ":N+="\u2588",_t+=I<1&&nt+1>=Y?Rt[N]:yt[N];_t+=`
`}return k%2&&I>0?_t.substring(0,_t.length-k-1)+Array(k+1).join("\u2580"):_t.substring(0,_t.length-1)};return S.createASCII=function(I,W){if(I=I||1,I<2)return Q(W);I-=1,W=typeof W>"u"?I*2:W;var k=S.getModuleCount()*I+W*2,X=W,Y=k-W,nt,ut,at,Tt,N=Array(I+1).join("\u2588\u2588"),yt=Array(I+1).join("  "),Rt="",_t="";for(nt=0;nt<k;nt+=1){for(at=Math.floor((nt-X)/I),_t="",ut=0;ut<k;ut+=1)Tt=1,X<=ut&&ut<Y&&X<=nt&&nt<Y&&S.isDark(at,Math.floor((ut-X)/I))&&(Tt=0),_t+=Tt?N:yt;for(at=0;at<I;at+=1)Rt+=_t+`
`}return Rt.substring(0,Rt.length-1)},S.renderTo2dContext=function(I,W){W=W||2;for(var k=S.getModuleCount(),X=0;X<k;X++)for(var Y=0;Y<k;Y++)I.fillStyle=S.isDark(X,Y)?"black":"white",I.fillRect(X*W,Y*W,W,W)},S};i.stringToBytesFuncs={default:function(A){for(var g=[],m=0;m<A.length;m+=1){var B=A.charCodeAt(m);g.push(B&255)}return g}},i.stringToBytes=i.stringToBytesFuncs.default,i.createStringToBytes=function(A,g){var m=function(){for(var C=y(A),M=function(){var z=C.read();if(z==-1)throw"eof";return z},w=0,v={};;){var _=C.read();if(_==-1)break;var D=M(),S=M(),R=M(),P=String.fromCharCode(_<<8|D),L=S<<8|R;v[P]=L,w+=1}if(w!=g)throw w+" != "+g;return v}(),B=63;return function(C){for(var M=[],w=0;w<C.length;w+=1){var v=C.charCodeAt(w);if(v<128)M.push(v);else{var _=m[C.charAt(w)];typeof _=="number"?(_&255)==_?M.push(_):(M.push(_>>>8),M.push(_&255)):M.push(B)}}return M}};var t={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},e={L:1,M:0,Q:3,H:2},n={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s=function(){var A=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],g=1335,m=7973,B=21522,C={},M=function(w){for(var v=0;w!=0;)v+=1,w>>>=1;return v};return C.getBCHTypeInfo=function(w){for(var v=w<<10;M(v)-M(g)>=0;)v^=g<<M(v)-M(g);return(w<<10|v)^B},C.getBCHTypeNumber=function(w){for(var v=w<<12;M(v)-M(m)>=0;)v^=m<<M(v)-M(m);return w<<12|v},C.getPatternPosition=function(w){return A[w-1]},C.getMaskFunction=function(w){switch(w){case n.PATTERN000:return function(v,_){return(v+_)%2==0};case n.PATTERN001:return function(v,_){return v%2==0};case n.PATTERN010:return function(v,_){return _%3==0};case n.PATTERN011:return function(v,_){return(v+_)%3==0};case n.PATTERN100:return function(v,_){return(Math.floor(v/2)+Math.floor(_/3))%2==0};case n.PATTERN101:return function(v,_){return v*_%2+v*_%3==0};case n.PATTERN110:return function(v,_){return(v*_%2+v*_%3)%2==0};case n.PATTERN111:return function(v,_){return(v*_%3+(v+_)%2)%2==0};default:throw"bad maskPattern:"+w}},C.getErrorCorrectPolynomial=function(w){for(var v=o([1],0),_=0;_<w;_+=1)v=v.multiply(o([1,r.gexp(_)],0));return v},C.getLengthInBits=function(w,v){if(1<=v&&v<10)switch(w){case t.MODE_NUMBER:return 10;case t.MODE_ALPHA_NUM:return 9;case t.MODE_8BIT_BYTE:return 8;case t.MODE_KANJI:return 8;default:throw"mode:"+w}else if(v<27)switch(w){case t.MODE_NUMBER:return 12;case t.MODE_ALPHA_NUM:return 11;case t.MODE_8BIT_BYTE:return 16;case t.MODE_KANJI:return 10;default:throw"mode:"+w}else if(v<41)switch(w){case t.MODE_NUMBER:return 14;case t.MODE_ALPHA_NUM:return 13;case t.MODE_8BIT_BYTE:return 16;case t.MODE_KANJI:return 12;default:throw"mode:"+w}else throw"type:"+v},C.getLostPoint=function(w){for(var v=w.getModuleCount(),_=0,D=0;D<v;D+=1)for(var S=0;S<v;S+=1){for(var R=0,P=w.isDark(D,S),L=-1;L<=1;L+=1)if(!(D+L<0||v<=D+L))for(var z=-1;z<=1;z+=1)S+z<0||v<=S+z||L==0&&z==0||P==w.isDark(D+L,S+z)&&(R+=1);R>5&&(_+=3+R-5)}for(var D=0;D<v-1;D+=1)for(var S=0;S<v-1;S+=1){var Z=0;w.isDark(D,S)&&(Z+=1),w.isDark(D+1,S)&&(Z+=1),w.isDark(D,S+1)&&(Z+=1),w.isDark(D+1,S+1)&&(Z+=1),(Z==0||Z==4)&&(_+=3)}for(var D=0;D<v;D+=1)for(var S=0;S<v-6;S+=1)w.isDark(D,S)&&!w.isDark(D,S+1)&&w.isDark(D,S+2)&&w.isDark(D,S+3)&&w.isDark(D,S+4)&&!w.isDark(D,S+5)&&w.isDark(D,S+6)&&(_+=40);for(var S=0;S<v;S+=1)for(var D=0;D<v-6;D+=1)w.isDark(D,S)&&!w.isDark(D+1,S)&&w.isDark(D+2,S)&&w.isDark(D+3,S)&&w.isDark(D+4,S)&&!w.isDark(D+5,S)&&w.isDark(D+6,S)&&(_+=40);for(var O=0,S=0;S<v;S+=1)for(var D=0;D<v;D+=1)w.isDark(D,S)&&(O+=1);var K=Math.abs(100*O/v/v-50)/5;return _+=K*10,_},C}(),r=function(){for(var A=new Array(256),g=new Array(256),m=0;m<8;m+=1)A[m]=1<<m;for(var m=8;m<256;m+=1)A[m]=A[m-4]^A[m-5]^A[m-6]^A[m-8];for(var m=0;m<255;m+=1)g[A[m]]=m;var B={};return B.glog=function(C){if(C<1)throw"glog("+C+")";return g[C]},B.gexp=function(C){for(;C<0;)C+=255;for(;C>=256;)C-=255;return A[C]},B}();function o(A,g){if(typeof A.length>"u")throw A.length+"/"+g;var m=function(){for(var C=0;C<A.length&&A[C]==0;)C+=1;for(var M=new Array(A.length-C+g),w=0;w<A.length-C;w+=1)M[w]=A[w+C];return M}(),B={};return B.getAt=function(C){return m[C]},B.getLength=function(){return m.length},B.multiply=function(C){for(var M=new Array(B.getLength()+C.getLength()-1),w=0;w<B.getLength();w+=1)for(var v=0;v<C.getLength();v+=1)M[w+v]^=r.gexp(r.glog(B.getAt(w))+r.glog(C.getAt(v)));return o(M,0)},B.mod=function(C){if(B.getLength()-C.getLength()<0)return B;for(var M=r.glog(B.getAt(0))-r.glog(C.getAt(0)),w=new Array(B.getLength()),v=0;v<B.getLength();v+=1)w[v]=B.getAt(v);for(var v=0;v<C.getLength();v+=1)w[v]^=r.gexp(r.glog(C.getAt(v))+M);return o(w,0).mod(C)},B}var a=function(){var A=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],g=function(C,M){var w={};return w.totalCount=C,w.dataCount=M,w},m={},B=function(C,M){switch(M){case e.L:return A[(C-1)*4+0];case e.M:return A[(C-1)*4+1];case e.Q:return A[(C-1)*4+2];case e.H:return A[(C-1)*4+3];default:return}};return m.getRSBlocks=function(C,M){var w=B(C,M);if(typeof w>"u")throw"bad rs block @ typeNumber:"+C+"/errorCorrectionLevel:"+M;for(var v=w.length/3,_=[],D=0;D<v;D+=1)for(var S=w[D*3+0],R=w[D*3+1],P=w[D*3+2],L=0;L<S;L+=1)_.push(g(R,P));return _},m}(),c=function(){var A=[],g=0,m={};return m.getBuffer=function(){return A},m.getAt=function(B){var C=Math.floor(B/8);return(A[C]>>>7-B%8&1)==1},m.put=function(B,C){for(var M=0;M<C;M+=1)m.putBit((B>>>C-M-1&1)==1)},m.getLengthInBits=function(){return g},m.putBit=function(B){var C=Math.floor(g/8);A.length<=C&&A.push(0),B&&(A[C]|=128>>>g%8),g+=1},m},l=function(A){var g=t.MODE_NUMBER,m=A,B={};B.getMode=function(){return g},B.getLength=function(w){return m.length},B.write=function(w){for(var v=m,_=0;_+2<v.length;)w.put(C(v.substring(_,_+3)),10),_+=3;_<v.length&&(v.length-_==1?w.put(C(v.substring(_,_+1)),4):v.length-_==2&&w.put(C(v.substring(_,_+2)),7))};var C=function(w){for(var v=0,_=0;_<w.length;_+=1)v=v*10+M(w.charAt(_));return v},M=function(w){if("0"<=w&&w<="9")return w.charCodeAt(0)-48;throw"illegal char :"+w};return B},x=function(A){var g=t.MODE_ALPHA_NUM,m=A,B={};B.getMode=function(){return g},B.getLength=function(M){return m.length},B.write=function(M){for(var w=m,v=0;v+1<w.length;)M.put(C(w.charAt(v))*45+C(w.charAt(v+1)),11),v+=2;v<w.length&&M.put(C(w.charAt(v)),6)};var C=function(M){if("0"<=M&&M<="9")return M.charCodeAt(0)-48;if("A"<=M&&M<="Z")return M.charCodeAt(0)-65+10;switch(M){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+M}};return B},h=function(A){var g=t.MODE_8BIT_BYTE,m=A,B=i.stringToBytes(A),C={};return C.getMode=function(){return g},C.getLength=function(M){return B.length},C.write=function(M){for(var w=0;w<B.length;w+=1)M.put(B[w],8)},C},u=function(A){var g=t.MODE_KANJI,m=A,B=i.stringToBytesFuncs.SJIS;if(!B)throw"sjis not supported.";(function(w,v){var _=B(w);if(_.length!=2||(_[0]<<8|_[1])!=v)throw"sjis not supported."})("\u53CB",38726);var C=B(A),M={};return M.getMode=function(){return g},M.getLength=function(w){return~~(C.length/2)},M.write=function(w){for(var v=C,_=0;_+1<v.length;){var D=(255&v[_])<<8|255&v[_+1];if(33088<=D&&D<=40956)D-=33088;else if(57408<=D&&D<=60351)D-=49472;else throw"illegal char at "+(_+1)+"/"+D;D=(D>>>8&255)*192+(D&255),w.put(D,13),_+=2}if(_<v.length)throw"illegal char at "+(_+1)},M},f=function(){var A=[],g={};return g.writeByte=function(m){A.push(m&255)},g.writeShort=function(m){g.writeByte(m),g.writeByte(m>>>8)},g.writeBytes=function(m,B,C){B=B||0,C=C||m.length;for(var M=0;M<C;M+=1)g.writeByte(m[M+B])},g.writeString=function(m){for(var B=0;B<m.length;B+=1)g.writeByte(m.charCodeAt(B))},g.toByteArray=function(){return A},g.toString=function(){var m="";m+="[";for(var B=0;B<A.length;B+=1)B>0&&(m+=","),m+=A[B];return m+="]",m},g},p=function(){var A=0,g=0,m=0,B="",C={},M=function(v){B+=String.fromCharCode(w(v&63))},w=function(v){if(!(v<0)){if(v<26)return 65+v;if(v<52)return 97+(v-26);if(v<62)return 48+(v-52);if(v==62)return 43;if(v==63)return 47}throw"n:"+v};return C.writeByte=function(v){for(A=A<<8|v&255,g+=8,m+=1;g>=6;)M(A>>>g-6),g-=6},C.flush=function(){if(g>0&&(M(A<<6-g),A=0,g=0),m%3!=0)for(var v=3-m%3,_=0;_<v;_+=1)B+="="},C.toString=function(){return B},C},y=function(A){var g=A,m=0,B=0,C=0,M={};M.read=function(){for(;C<8;){if(m>=g.length){if(C==0)return-1;throw"unexpected end of file./"+C}var v=g.charAt(m);if(m+=1,v=="=")return C=0,-1;if(v.match(/^\s$/))continue;B=B<<6|w(v.charCodeAt(0)),C+=6}var _=B>>>C-8&255;return C-=8,_};var w=function(v){if(65<=v&&v<=90)return v-65;if(97<=v&&v<=122)return v-97+26;if(48<=v&&v<=57)return v-48+52;if(v==43)return 62;if(v==47)return 63;throw"c:"+v};return M},E=function(A,g){var m=A,B=g,C=new Array(A*g),M={};M.setPixel=function(D,S,R){C[S*m+D]=R},M.write=function(D){D.writeString("GIF87a"),D.writeShort(m),D.writeShort(B),D.writeByte(128),D.writeByte(0),D.writeByte(0),D.writeByte(0),D.writeByte(0),D.writeByte(0),D.writeByte(255),D.writeByte(255),D.writeByte(255),D.writeString(","),D.writeShort(0),D.writeShort(0),D.writeShort(m),D.writeShort(B),D.writeByte(0);var S=2,R=v(S);D.writeByte(S);for(var P=0;R.length-P>255;)D.writeByte(255),D.writeBytes(R,P,255),P+=255;D.writeByte(R.length-P),D.writeBytes(R,P,R.length-P),D.writeByte(0),D.writeString(";")};var w=function(D){var S=D,R=0,P=0,L={};return L.write=function(z,Z){if(z>>>Z)throw"length over";for(;R+Z>=8;)S.writeByte(255&(z<<R|P)),Z-=8-R,z>>>=8-R,P=0,R=0;P=z<<R|P,R=R+Z},L.flush=function(){R>0&&S.writeByte(P)},L},v=function(D){for(var S=1<<D,R=(1<<D)+1,P=D+1,L=_(),z=0;z<S;z+=1)L.add(String.fromCharCode(z));L.add(String.fromCharCode(S)),L.add(String.fromCharCode(R));var Z=f(),O=w(Z);O.write(S,P);var K=0,ot=String.fromCharCode(C[K]);for(K+=1;K<C.length;){var ht=String.fromCharCode(C[K]);K+=1,L.contains(ot+ht)?ot=ot+ht:(O.write(L.indexOf(ot),P),L.size()<4095&&(L.size()==1<<P&&(P+=1),L.add(ot+ht)),ot=ht)}return O.write(L.indexOf(ot),P),O.write(R,P),O.flush(),Z.toByteArray()},_=function(){var D={},S=0,R={};return R.add=function(P){if(R.contains(P))throw"dup key:"+P;D[P]=S,S+=1},R.size=function(){return S},R.indexOf=function(P){return D[P]},R.contains=function(P){return typeof D[P]<"u"},R};return M},d=function(A,g,m){for(var B=E(A,g),C=0;C<g;C+=1)for(var M=0;M<A;M+=1)B.setPixel(M,C,m(M,C));var w=f();B.write(w);for(var v=p(),_=w.toByteArray(),D=0;D<_.length;D+=1)v.writeByte(_[D]);return v.flush(),"data:image/gif;base64,"+v};return i}();(function(){Kh.stringToBytesFuncs["UTF-8"]=function(i){function t(e){for(var n=[],s=0;s<e.length;s++){var r=e.charCodeAt(s);r<128?n.push(r):r<2048?n.push(192|r>>6,128|r&63):r<55296||r>=57344?n.push(224|r>>12,128|r>>6&63,128|r&63):(s++,r=65536+((r&1023)<<10|e.charCodeAt(s)&1023),n.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63))}return n}return t(i)}})();(function(i){typeof define=="function"&&define.amd?define([],i):typeof jh=="object"&&(Qh.exports=i())})(function(){return Kh})});var eu=Bl((Ir,el)=>{(function(t,e){typeof Ir=="object"&&typeof el=="object"?el.exports=e():typeof define=="function"&&define.amd?define([],e):typeof Ir=="object"?Ir.jsQR=e():t.jsQR=e()})(typeof self<"u"?self:Ir,function(){return function(i){var t={};function e(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return i[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}return e.m=i,e.c=t,e.d=function(n,s,r){e.o(n,s)||Object.defineProperty(n,s,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(s,"a",s),s},e.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},e.p="",e(e.s=3)}([function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function s(r,o){this.width=o,this.height=r.length/o,this.data=r}return s.createEmpty=function(r,o){return new s(new Uint8ClampedArray(r*o),r)},s.prototype.get=function(r,o){return r<0||r>=this.width||o<0||o>=this.height?!1:!!this.data[o*this.width+r]},s.prototype.set=function(r,o,a){this.data[o*this.width+r]=a?1:0},s.prototype.setRegion=function(r,o,a,c,l){for(var x=o;x<o+c;x++)for(var h=r;h<r+a;h++)this.set(h,x,!!l)},s}();t.BitMatrix=n},function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(2);function s(o,a){return o^a}t.addOrSubtractGF=s;var r=function(){function o(a,c,l){this.primitive=a,this.size=c,this.generatorBase=l,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var x=1,h=0;h<this.size;h++)this.expTable[h]=x,x=x*2,x>=this.size&&(x=(x^this.primitive)&this.size-1);for(var h=0;h<this.size-1;h++)this.logTable[this.expTable[h]]=h;this.zero=new n.default(this,Uint8ClampedArray.from([0])),this.one=new n.default(this,Uint8ClampedArray.from([1]))}return o.prototype.multiply=function(a,c){return a===0||c===0?0:this.expTable[(this.logTable[a]+this.logTable[c])%(this.size-1)]},o.prototype.inverse=function(a){if(a===0)throw new Error("Can't invert 0");return this.expTable[this.size-this.logTable[a]-1]},o.prototype.buildMonomial=function(a,c){if(a<0)throw new Error("Invalid monomial degree less than 0");if(c===0)return this.zero;var l=new Uint8ClampedArray(a+1);return l[0]=c,new n.default(this,l)},o.prototype.log=function(a){if(a===0)throw new Error("Can't take log(0)");return this.logTable[a]},o.prototype.exp=function(a){return this.expTable[a]},o}();t.default=r},function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(1),s=function(){function r(o,a){if(a.length===0)throw new Error("No coefficients.");this.field=o;var c=a.length;if(c>1&&a[0]===0){for(var l=1;l<c&&a[l]===0;)l++;if(l===c)this.coefficients=o.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(c-l);for(var x=0;x<this.coefficients.length;x++)this.coefficients[x]=a[l+x]}}else this.coefficients=a}return r.prototype.degree=function(){return this.coefficients.length-1},r.prototype.isZero=function(){return this.coefficients[0]===0},r.prototype.getCoefficient=function(o){return this.coefficients[this.coefficients.length-1-o]},r.prototype.addOrSubtract=function(o){var a;if(this.isZero())return o;if(o.isZero())return this;var c=this.coefficients,l=o.coefficients;c.length>l.length&&(a=[l,c],c=a[0],l=a[1]);for(var x=new Uint8ClampedArray(l.length),h=l.length-c.length,u=0;u<h;u++)x[u]=l[u];for(var u=h;u<l.length;u++)x[u]=n.addOrSubtractGF(c[u-h],l[u]);return new r(this.field,x)},r.prototype.multiply=function(o){if(o===0)return this.field.zero;if(o===1)return this;for(var a=this.coefficients.length,c=new Uint8ClampedArray(a),l=0;l<a;l++)c[l]=this.field.multiply(this.coefficients[l],o);return new r(this.field,c)},r.prototype.multiplyPoly=function(o){if(this.isZero()||o.isZero())return this.field.zero;for(var a=this.coefficients,c=a.length,l=o.coefficients,x=l.length,h=new Uint8ClampedArray(c+x-1),u=0;u<c;u++)for(var f=a[u],p=0;p<x;p++)h[u+p]=n.addOrSubtractGF(h[u+p],this.field.multiply(f,l[p]));return new r(this.field,h)},r.prototype.multiplyByMonomial=function(o,a){if(o<0)throw new Error("Invalid degree less than 0");if(a===0)return this.field.zero;for(var c=this.coefficients.length,l=new Uint8ClampedArray(c+o),x=0;x<c;x++)l[x]=this.field.multiply(this.coefficients[x],a);return new r(this.field,l)},r.prototype.evaluateAt=function(o){var a=0;if(o===0)return this.getCoefficient(0);var c=this.coefficients.length;if(o===1)return this.coefficients.forEach(function(x){a=n.addOrSubtractGF(a,x)}),a;a=this.coefficients[0];for(var l=1;l<c;l++)a=n.addOrSubtractGF(this.field.multiply(o,a),this.coefficients[l]);return a},r}();t.default=s},function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(4),s=e(5),r=e(11),o=e(12);function a(x){var h=o.locate(x);if(!h)return null;for(var u=0,f=h;u<f.length;u++){var p=f[u],y=r.extract(x,p),E=s.decode(y.matrix);if(E)return{binaryData:E.bytes,data:E.text,chunks:E.chunks,version:E.version,location:{topRightCorner:y.mappingFunction(p.dimension,0),topLeftCorner:y.mappingFunction(0,0),bottomRightCorner:y.mappingFunction(p.dimension,p.dimension),bottomLeftCorner:y.mappingFunction(0,p.dimension),topRightFinderPattern:p.topRight,topLeftFinderPattern:p.topLeft,bottomLeftFinderPattern:p.bottomLeft,bottomRightAlignmentPattern:p.alignmentPattern}}}return null}var c={inversionAttempts:"attemptBoth"};function l(x,h,u,f){f===void 0&&(f={});var p=c;Object.keys(p||{}).forEach(function(B){p[B]=f[B]||p[B]});var y=p.inversionAttempts==="attemptBoth"||p.inversionAttempts==="invertFirst",E=p.inversionAttempts==="onlyInvert"||p.inversionAttempts==="invertFirst",d=n.binarize(x,h,u,y),A=d.binarized,g=d.inverted,m=a(E?g:A);return!m&&(p.inversionAttempts==="attemptBoth"||p.inversionAttempts==="invertFirst")&&(m=a(E?A:g)),m}l.default=l,t.default=l},function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(0),s=8,r=24;function o(l,x,h){return l<x?x:l>h?h:l}var a=function(){function l(x,h){this.width=x,this.data=new Uint8ClampedArray(x*h)}return l.prototype.get=function(x,h){return this.data[h*this.width+x]},l.prototype.set=function(x,h,u){this.data[h*this.width+x]=u},l}();function c(l,x,h,u){if(l.length!==x*h*4)throw new Error("Malformed data passed to binarizer.");for(var f=new a(x,h),p=0;p<x;p++)for(var y=0;y<h;y++){var E=l[(y*x+p)*4+0],d=l[(y*x+p)*4+1],A=l[(y*x+p)*4+2];f.set(p,y,.2126*E+.7152*d+.0722*A)}for(var g=Math.ceil(x/s),m=Math.ceil(h/s),B=new a(g,m),C=0;C<m;C++)for(var M=0;M<g;M++){for(var w=0,v=1/0,_=0,y=0;y<s;y++)for(var p=0;p<s;p++){var D=f.get(M*s+p,C*s+y);w+=D,v=Math.min(v,D),_=Math.max(_,D)}var S=w/Math.pow(s,2);if(_-v<=r&&(S=v/2,C>0&&M>0)){var R=(B.get(M,C-1)+2*B.get(M-1,C)+B.get(M-1,C-1))/4;v<R&&(S=R)}B.set(M,C,S)}var P=n.BitMatrix.createEmpty(x,h),L=null;u&&(L=n.BitMatrix.createEmpty(x,h));for(var C=0;C<m;C++)for(var M=0;M<g;M++){for(var z=o(M,2,g-3),Z=o(C,2,m-3),w=0,O=-2;O<=2;O++)for(var K=-2;K<=2;K++)w+=B.get(z+O,Z+K);for(var ot=w/25,O=0;O<s;O++)for(var K=0;K<s;K++){var p=M*s+O,y=C*s+K,ht=f.get(p,y);P.set(p,y,ht<=ot),u&&L.set(p,y,!(ht<=ot))}}return u?{binarized:P,inverted:L}:{binarized:P}}t.binarize=c},function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(0),s=e(6),r=e(9),o=e(10);function a(A,g){for(var m=A^g,B=0;m;)B++,m&=m-1;return B}function c(A,g){return g<<1|A}var l=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],x=[function(A){return(A.y+A.x)%2===0},function(A){return A.y%2===0},function(A){return A.x%3===0},function(A){return(A.y+A.x)%3===0},function(A){return(Math.floor(A.y/2)+Math.floor(A.x/3))%2===0},function(A){return A.x*A.y%2+A.x*A.y%3===0},function(A){return(A.y*A.x%2+A.y*A.x%3)%2===0},function(A){return((A.y+A.x)%2+A.y*A.x%3)%2===0}];function h(A){var g=17+4*A.versionNumber,m=n.BitMatrix.createEmpty(g,g);m.setRegion(0,0,9,9,!0),m.setRegion(g-8,0,8,9,!0),m.setRegion(0,g-8,9,8,!0);for(var B=0,C=A.alignmentPatternCenters;B<C.length;B++)for(var M=C[B],w=0,v=A.alignmentPatternCenters;w<v.length;w++){var _=v[w];M===6&&_===6||M===6&&_===g-7||M===g-7&&_===6||m.setRegion(M-2,_-2,5,5,!0)}return m.setRegion(6,9,1,g-17,!0),m.setRegion(9,6,g-17,1,!0),A.versionNumber>6&&(m.setRegion(g-11,0,3,6,!0),m.setRegion(0,g-11,6,3,!0)),m}function u(A,g,m){for(var B=x[m.dataMask],C=A.height,M=h(g),w=[],v=0,_=0,D=!0,S=C-1;S>0;S-=2){S===6&&S--;for(var R=0;R<C;R++)for(var P=D?C-1-R:R,L=0;L<2;L++){var z=S-L;if(!M.get(z,P)){_++;var Z=A.get(z,P);B({y:P,x:z})&&(Z=!Z),v=c(Z,v),_===8&&(w.push(v),_=0,v=0)}}D=!D}return w}function f(A){var g=A.height,m=Math.floor((g-17)/4);if(m<=6)return o.VERSIONS[m-1];for(var B=0,C=5;C>=0;C--)for(var M=g-9;M>=g-11;M--)B=c(A.get(M,C),B);for(var w=0,M=5;M>=0;M--)for(var C=g-9;C>=g-11;C--)w=c(A.get(M,C),w);for(var v=1/0,_,D=0,S=o.VERSIONS;D<S.length;D++){var R=S[D];if(R.infoBits===B||R.infoBits===w)return R;var P=a(B,R.infoBits);P<v&&(_=R,v=P),P=a(w,R.infoBits),P<v&&(_=R,v=P)}if(v<=3)return _}function p(A){for(var g=0,m=0;m<=8;m++)m!==6&&(g=c(A.get(m,8),g));for(var B=7;B>=0;B--)B!==6&&(g=c(A.get(8,B),g));for(var C=A.height,M=0,B=C-1;B>=C-7;B--)M=c(A.get(8,B),M);for(var m=C-8;m<C;m++)M=c(A.get(m,8),M);for(var w=1/0,v=null,_=0,D=l;_<D.length;_++){var S=D[_],R=S.bits,P=S.formatInfo;if(R===g||R===M)return P;var L=a(g,R);L<w&&(v=P,w=L),g!==M&&(L=a(M,R),L<w&&(v=P,w=L))}return w<=3?v:null}function y(A,g,m){var B=g.errorCorrectionLevels[m],C=[],M=0;if(B.ecBlocks.forEach(function(Z){for(var O=0;O<Z.numBlocks;O++)C.push({numDataCodewords:Z.dataCodewordsPerBlock,codewords:[]}),M+=Z.dataCodewordsPerBlock+B.ecCodewordsPerBlock}),A.length<M)return null;A=A.slice(0,M);for(var w=B.ecBlocks[0].dataCodewordsPerBlock,v=0;v<w;v++)for(var _=0,D=C;_<D.length;_++){var S=D[_];S.codewords.push(A.shift())}if(B.ecBlocks.length>1)for(var R=B.ecBlocks[0].numBlocks,P=B.ecBlocks[1].numBlocks,v=0;v<P;v++)C[R+v].codewords.push(A.shift());for(;A.length>0;)for(var L=0,z=C;L<z.length;L++){var S=z[L];S.codewords.push(A.shift())}return C}function E(A){var g=f(A);if(!g)return null;var m=p(A);if(!m)return null;var B=u(A,g,m),C=y(B,g,m.errorCorrectionLevel);if(!C)return null;for(var M=C.reduce(function(L,z){return L+z.numDataCodewords},0),w=new Uint8ClampedArray(M),v=0,_=0,D=C;_<D.length;_++){var S=D[_],R=r.decode(S.codewords,S.codewords.length-S.numDataCodewords);if(!R)return null;for(var P=0;P<S.numDataCodewords;P++)w[v++]=R[P]}try{return s.decode(w,g.versionNumber)}catch{return null}}function d(A){if(A==null)return null;var g=E(A);if(g)return g;for(var m=0;m<A.width;m++)for(var B=m+1;B<A.height;B++)A.get(m,B)!==A.get(B,m)&&(A.set(m,B,!A.get(m,B)),A.set(B,m,!A.get(B,m)));return E(A)}t.decode=d},function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(7),s=e(8),r;(function(f){f.Numeric="numeric",f.Alphanumeric="alphanumeric",f.Byte="byte",f.Kanji="kanji",f.ECI="eci"})(r=t.Mode||(t.Mode={}));var o;(function(f){f[f.Terminator=0]="Terminator",f[f.Numeric=1]="Numeric",f[f.Alphanumeric=2]="Alphanumeric",f[f.Byte=4]="Byte",f[f.Kanji=8]="Kanji",f[f.ECI=7]="ECI"})(o||(o={}));function a(f,p){for(var y=[],E="",d=[10,12,14][p],A=f.readBits(d);A>=3;){var g=f.readBits(10);if(g>=1e3)throw new Error("Invalid numeric value above 999");var m=Math.floor(g/100),B=Math.floor(g/10)%10,C=g%10;y.push(48+m,48+B,48+C),E+=m.toString()+B.toString()+C.toString(),A-=3}if(A===2){var g=f.readBits(7);if(g>=100)throw new Error("Invalid numeric value above 99");var m=Math.floor(g/10),B=g%10;y.push(48+m,48+B),E+=m.toString()+B.toString()}else if(A===1){var g=f.readBits(4);if(g>=10)throw new Error("Invalid numeric value above 9");y.push(48+g),E+=g.toString()}return{bytes:y,text:E}}var c=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function l(f,p){for(var y=[],E="",d=[9,11,13][p],A=f.readBits(d);A>=2;){var g=f.readBits(11),m=Math.floor(g/45),B=g%45;y.push(c[m].charCodeAt(0),c[B].charCodeAt(0)),E+=c[m]+c[B],A-=2}if(A===1){var m=f.readBits(6);y.push(c[m].charCodeAt(0)),E+=c[m]}return{bytes:y,text:E}}function x(f,p){for(var y=[],E="",d=[8,16,16][p],A=f.readBits(d),g=0;g<A;g++){var m=f.readBits(8);y.push(m)}try{E+=decodeURIComponent(y.map(function(B){return"%"+("0"+B.toString(16)).substr(-2)}).join(""))}catch{}return{bytes:y,text:E}}function h(f,p){for(var y=[],E="",d=[8,10,12][p],A=f.readBits(d),g=0;g<A;g++){var m=f.readBits(13),B=Math.floor(m/192)<<8|m%192;B<7936?B+=33088:B+=49472,y.push(B>>8,B&255),E+=String.fromCharCode(s.shiftJISTable[B])}return{bytes:y,text:E}}function u(f,p){for(var y,E,d,A,g=new n.BitStream(f),m=p<=9?0:p<=26?1:2,B={text:"",bytes:[],chunks:[],version:p};g.available()>=4;){var C=g.readBits(4);if(C===o.Terminator)return B;if(C===o.ECI)g.readBits(1)===0?B.chunks.push({type:r.ECI,assignmentNumber:g.readBits(7)}):g.readBits(1)===0?B.chunks.push({type:r.ECI,assignmentNumber:g.readBits(14)}):g.readBits(1)===0?B.chunks.push({type:r.ECI,assignmentNumber:g.readBits(21)}):B.chunks.push({type:r.ECI,assignmentNumber:-1});else if(C===o.Numeric){var M=a(g,m);B.text+=M.text,(y=B.bytes).push.apply(y,M.bytes),B.chunks.push({type:r.Numeric,text:M.text})}else if(C===o.Alphanumeric){var w=l(g,m);B.text+=w.text,(E=B.bytes).push.apply(E,w.bytes),B.chunks.push({type:r.Alphanumeric,text:w.text})}else if(C===o.Byte){var v=x(g,m);B.text+=v.text,(d=B.bytes).push.apply(d,v.bytes),B.chunks.push({type:r.Byte,bytes:v.bytes,text:v.text})}else if(C===o.Kanji){var _=h(g,m);B.text+=_.text,(A=B.bytes).push.apply(A,_.bytes),B.chunks.push({type:r.Kanji,bytes:_.bytes,text:_.text})}}if(g.available()===0||g.readBits(g.available())===0)return B}t.decode=u},function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function s(r){this.byteOffset=0,this.bitOffset=0,this.bytes=r}return s.prototype.readBits=function(r){if(r<1||r>32||r>this.available())throw new Error("Cannot read "+r.toString()+" bits");var o=0;if(this.bitOffset>0){var a=8-this.bitOffset,c=r<a?r:a,l=a-c,x=255>>8-c<<l;o=(this.bytes[this.byteOffset]&x)>>l,r-=c,this.bitOffset+=c,this.bitOffset===8&&(this.bitOffset=0,this.byteOffset++)}if(r>0){for(;r>=8;)o=o<<8|this.bytes[this.byteOffset]&255,this.byteOffset++,r-=8;if(r>0){var l=8-r,x=255>>l<<l;o=o<<r|(this.bytes[this.byteOffset]&x)>>l,this.bitOffset+=r}}return o},s.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},s}();t.BitStream=n},function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}},function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(1),s=e(2);function r(l,x,h,u){var f;x.degree()<h.degree()&&(f=[h,x],x=f[0],h=f[1]);for(var p=x,y=h,E=l.zero,d=l.one;y.degree()>=u/2;){var A=p,g=E;if(p=y,E=d,p.isZero())return null;y=A;for(var m=l.zero,B=p.getCoefficient(p.degree()),C=l.inverse(B);y.degree()>=p.degree()&&!y.isZero();){var M=y.degree()-p.degree(),w=l.multiply(y.getCoefficient(y.degree()),C);m=m.addOrSubtract(l.buildMonomial(M,w)),y=y.addOrSubtract(p.multiplyByMonomial(M,w))}if(d=m.multiplyPoly(E).addOrSubtract(g),y.degree()>=p.degree())return null}var v=d.getCoefficient(0);if(v===0)return null;var _=l.inverse(v);return[d.multiply(_),y.multiply(_)]}function o(l,x){var h=x.degree();if(h===1)return[x.getCoefficient(1)];for(var u=new Array(h),f=0,p=1;p<l.size&&f<h;p++)x.evaluateAt(p)===0&&(u[f]=l.inverse(p),f++);return f!==h?null:u}function a(l,x,h){for(var u=h.length,f=new Array(u),p=0;p<u;p++){for(var y=l.inverse(h[p]),E=1,d=0;d<u;d++)p!==d&&(E=l.multiply(E,n.addOrSubtractGF(1,l.multiply(h[d],y))));f[p]=l.multiply(x.evaluateAt(y),l.inverse(E)),l.generatorBase!==0&&(f[p]=l.multiply(f[p],y))}return f}function c(l,x){var h=new Uint8ClampedArray(l.length);h.set(l);for(var u=new n.default(285,256,0),f=new s.default(u,h),p=new Uint8ClampedArray(x),y=!1,E=0;E<x;E++){var d=f.evaluateAt(u.exp(E+u.generatorBase));p[p.length-1-E]=d,d!==0&&(y=!0)}if(!y)return h;var A=new s.default(u,p),g=r(u,u.buildMonomial(x,1),A,x);if(g===null)return null;var m=o(u,g[0]);if(m==null)return null;for(var B=a(u,g[1],m),C=0;C<m.length;C++){var M=h.length-1-u.log(m[C]);if(M<0)return null;h[M]=n.addOrSubtractGF(h[M],B[C])}return h}t.decode=c},function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]},function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(0);function s(c,l,x,h){var u=c.x-l.x+x.x-h.x,f=c.y-l.y+x.y-h.y;if(u===0&&f===0)return{a11:l.x-c.x,a12:l.y-c.y,a13:0,a21:x.x-l.x,a22:x.y-l.y,a23:0,a31:c.x,a32:c.y,a33:1};var p=l.x-x.x,y=h.x-x.x,E=l.y-x.y,d=h.y-x.y,A=p*d-y*E,g=(u*d-y*f)/A,m=(p*f-u*E)/A;return{a11:l.x-c.x+g*l.x,a12:l.y-c.y+g*l.y,a13:g,a21:h.x-c.x+m*h.x,a22:h.y-c.y+m*h.y,a23:m,a31:c.x,a32:c.y,a33:1}}function r(c,l,x,h){var u=s(c,l,x,h);return{a11:u.a22*u.a33-u.a23*u.a32,a12:u.a13*u.a32-u.a12*u.a33,a13:u.a12*u.a23-u.a13*u.a22,a21:u.a23*u.a31-u.a21*u.a33,a22:u.a11*u.a33-u.a13*u.a31,a23:u.a13*u.a21-u.a11*u.a23,a31:u.a21*u.a32-u.a22*u.a31,a32:u.a12*u.a31-u.a11*u.a32,a33:u.a11*u.a22-u.a12*u.a21}}function o(c,l){return{a11:c.a11*l.a11+c.a21*l.a12+c.a31*l.a13,a12:c.a12*l.a11+c.a22*l.a12+c.a32*l.a13,a13:c.a13*l.a11+c.a23*l.a12+c.a33*l.a13,a21:c.a11*l.a21+c.a21*l.a22+c.a31*l.a23,a22:c.a12*l.a21+c.a22*l.a22+c.a32*l.a23,a23:c.a13*l.a21+c.a23*l.a22+c.a33*l.a23,a31:c.a11*l.a31+c.a21*l.a32+c.a31*l.a33,a32:c.a12*l.a31+c.a22*l.a32+c.a32*l.a33,a33:c.a13*l.a31+c.a23*l.a32+c.a33*l.a33}}function a(c,l){for(var x=r({x:3.5,y:3.5},{x:l.dimension-3.5,y:3.5},{x:l.dimension-6.5,y:l.dimension-6.5},{x:3.5,y:l.dimension-3.5}),h=s(l.topLeft,l.topRight,l.alignmentPattern,l.bottomLeft),u=o(h,x),f=n.BitMatrix.createEmpty(l.dimension,l.dimension),p=function(m,B){var C=u.a13*m+u.a23*B+u.a33;return{x:(u.a11*m+u.a21*B+u.a31)/C,y:(u.a12*m+u.a22*B+u.a32)/C}},y=0;y<l.dimension;y++)for(var E=0;E<l.dimension;E++){var d=E+.5,A=y+.5,g=p(d,A);f.set(E,y,c.get(Math.floor(g.x),Math.floor(g.y)))}return{matrix:f,mappingFunction:p}}t.extract=a},function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=4,s=.5,r=1.5,o=function(d,A){return Math.sqrt(Math.pow(A.x-d.x,2)+Math.pow(A.y-d.y,2))};function a(d){return d.reduce(function(A,g){return A+g})}function c(d,A,g){var m,B,C,M,w=o(d,A),v=o(A,g),_=o(d,g),D,S,R;return v>=w&&v>=_?(m=[A,d,g],D=m[0],S=m[1],R=m[2]):_>=v&&_>=w?(B=[d,A,g],D=B[0],S=B[1],R=B[2]):(C=[d,g,A],D=C[0],S=C[1],R=C[2]),(R.x-S.x)*(D.y-S.y)-(R.y-S.y)*(D.x-S.x)<0&&(M=[R,D],D=M[0],R=M[1]),{bottomLeft:D,topLeft:S,topRight:R}}function l(d,A,g,m){var B=(a(h(d,g,m,5))/7+a(h(d,A,m,5))/7+a(h(g,d,m,5))/7+a(h(A,d,m,5))/7)/4;if(B<1)throw new Error("Invalid module size");var C=Math.round(o(d,A)/B),M=Math.round(o(d,g)/B),w=Math.floor((C+M)/2)+7;switch(w%4){case 0:w++;break;case 2:w--;break}return{dimension:w,moduleSize:B}}function x(d,A,g,m){var B=[{x:Math.floor(d.x),y:Math.floor(d.y)}],C=Math.abs(A.y-d.y)>Math.abs(A.x-d.x),M,w,v,_;C?(M=Math.floor(d.y),w=Math.floor(d.x),v=Math.floor(A.y),_=Math.floor(A.x)):(M=Math.floor(d.x),w=Math.floor(d.y),v=Math.floor(A.x),_=Math.floor(A.y));for(var D=Math.abs(v-M),S=Math.abs(_-w),R=Math.floor(-D/2),P=M<v?1:-1,L=w<_?1:-1,z=!0,Z=M,O=w;Z!==v+P;Z+=P){var K=C?O:Z,ot=C?Z:O;if(g.get(K,ot)!==z&&(z=!z,B.push({x:K,y:ot}),B.length===m+1))break;if(R+=S,R>0){if(O===_)break;O+=L,R-=D}}for(var ht=[],xt=0;xt<m;xt++)B[xt]&&B[xt+1]?ht.push(o(B[xt],B[xt+1])):ht.push(0);return ht}function h(d,A,g,m){var B,C=A.y-d.y,M=A.x-d.x,w=x(d,A,g,Math.ceil(m/2)),v=x(d,{x:d.x-M,y:d.y-C},g,Math.ceil(m/2)),_=w.shift()+v.shift()-1;return(B=v.concat(_)).concat.apply(B,w)}function u(d,A){var g=a(d)/a(A),m=0;return A.forEach(function(B,C){m+=Math.pow(d[C]-B*g,2)}),{averageSize:g,error:m}}function f(d,A,g){try{var m=h(d,{x:-1,y:d.y},g,A.length),B=h(d,{x:d.x,y:-1},g,A.length),C={x:Math.max(0,d.x-d.y)-1,y:Math.max(0,d.y-d.x)-1},M=h(d,C,g,A.length),w={x:Math.min(g.width,d.x+d.y)+1,y:Math.min(g.height,d.y+d.x)+1},v=h(d,w,g,A.length),_=u(m,A),D=u(B,A),S=u(M,A),R=u(v,A),P=Math.sqrt(_.error*_.error+D.error*D.error+S.error*S.error+R.error*R.error),L=(_.averageSize+D.averageSize+S.averageSize+R.averageSize)/4,z=(Math.pow(_.averageSize-L,2)+Math.pow(D.averageSize-L,2)+Math.pow(S.averageSize-L,2)+Math.pow(R.averageSize-L,2))/L;return P+z}catch{return 1/0}}function p(d,A){for(var g=Math.round(A.x);d.get(g,Math.round(A.y));)g--;for(var m=Math.round(A.x);d.get(m,Math.round(A.y));)m++;for(var B=(g+m)/2,C=Math.round(A.y);d.get(Math.round(B),C);)C--;for(var M=Math.round(A.y);d.get(Math.round(B),M);)M++;var w=(C+M)/2;return{x:B,y:w}}function y(d){for(var A=[],g=[],m=[],B=[],C=function(K){for(var ot=0,ht=!1,xt=[0,0,0,0,0],Wt=function(I){var W=d.get(I,K);if(W===ht)ot++;else{xt=[xt[1],xt[2],xt[3],xt[4],ot],ot=1,ht=W;var k=a(xt)/7,X=Math.abs(xt[0]-k)<k&&Math.abs(xt[1]-k)<k&&Math.abs(xt[2]-3*k)<3*k&&Math.abs(xt[3]-k)<k&&Math.abs(xt[4]-k)<k&&!W,Y=a(xt.slice(-3))/3,nt=Math.abs(xt[2]-Y)<Y&&Math.abs(xt[3]-Y)<Y&&Math.abs(xt[4]-Y)<Y&&W;if(X){var ut=I-xt[3]-xt[4],at=ut-xt[2],Tt={startX:at,endX:ut,y:K},N=g.filter(function(_t){return at>=_t.bottom.startX&&at<=_t.bottom.endX||ut>=_t.bottom.startX&&at<=_t.bottom.endX||at<=_t.bottom.startX&&ut>=_t.bottom.endX&&xt[2]/(_t.bottom.endX-_t.bottom.startX)<r&&xt[2]/(_t.bottom.endX-_t.bottom.startX)>s});N.length>0?N[0].bottom=Tt:g.push({top:Tt,bottom:Tt})}if(nt){var yt=I-xt[4],Rt=yt-xt[3],Tt={startX:Rt,y:K,endX:yt},N=B.filter(function(qt){return Rt>=qt.bottom.startX&&Rt<=qt.bottom.endX||yt>=qt.bottom.startX&&Rt<=qt.bottom.endX||Rt<=qt.bottom.startX&&yt>=qt.bottom.endX&&xt[2]/(qt.bottom.endX-qt.bottom.startX)<r&&xt[2]/(qt.bottom.endX-qt.bottom.startX)>s});N.length>0?N[0].bottom=Tt:B.push({top:Tt,bottom:Tt})}}},Q=-1;Q<=d.width;Q++)Wt(Q);A.push.apply(A,g.filter(function(I){return I.bottom.y!==K&&I.bottom.y-I.top.y>=2})),g=g.filter(function(I){return I.bottom.y===K}),m.push.apply(m,B.filter(function(I){return I.bottom.y!==K})),B=B.filter(function(I){return I.bottom.y===K})},M=0;M<=d.height;M++)C(M);A.push.apply(A,g.filter(function(K){return K.bottom.y-K.top.y>=2})),m.push.apply(m,B);var w=A.filter(function(K){return K.bottom.y-K.top.y>=2}).map(function(K){var ot=(K.top.startX+K.top.endX+K.bottom.startX+K.bottom.endX)/4,ht=(K.top.y+K.bottom.y+1)/2;if(d.get(Math.round(ot),Math.round(ht))){var xt=[K.top.endX-K.top.startX,K.bottom.endX-K.bottom.startX,K.bottom.y-K.top.y+1],Wt=a(xt)/xt.length,Q=f({x:Math.round(ot),y:Math.round(ht)},[1,1,3,1,1],d);return{score:Q,x:ot,y:ht,size:Wt}}}).filter(function(K){return!!K}).sort(function(K,ot){return K.score-ot.score}).map(function(K,ot,ht){if(ot>n)return null;var xt=ht.filter(function(Q,I){return ot!==I}).map(function(Q){return{x:Q.x,y:Q.y,score:Q.score+Math.pow(Q.size-K.size,2)/K.size,size:Q.size}}).sort(function(Q,I){return Q.score-I.score});if(xt.length<2)return null;var Wt=K.score+xt[0].score+xt[1].score;return{points:[K].concat(xt.slice(0,2)),score:Wt}}).filter(function(K){return!!K}).sort(function(K,ot){return K.score-ot.score});if(w.length===0)return null;var v=c(w[0].points[0],w[0].points[1],w[0].points[2]),_=v.topRight,D=v.topLeft,S=v.bottomLeft,R=E(d,m,_,D,S),P=[];R&&P.push({alignmentPattern:{x:R.alignmentPattern.x,y:R.alignmentPattern.y},bottomLeft:{x:S.x,y:S.y},dimension:R.dimension,topLeft:{x:D.x,y:D.y},topRight:{x:_.x,y:_.y}});var L=p(d,_),z=p(d,D),Z=p(d,S),O=E(d,m,L,z,Z);return O&&P.push({alignmentPattern:{x:O.alignmentPattern.x,y:O.alignmentPattern.y},bottomLeft:{x:Z.x,y:Z.y},topLeft:{x:z.x,y:z.y},topRight:{x:L.x,y:L.y},dimension:O.dimension}),P.length===0?null:P}t.locate=y;function E(d,A,g,m,B){var C,M,w;try{C=l(m,g,B,d),M=C.dimension,w=C.moduleSize}catch{return null}var v={x:g.x-m.x+B.x,y:g.y-m.y+B.y},_=(o(m,B)+o(m,g))/2/w,D=1-3/_,S={x:m.x+D*(v.x-m.x),y:m.y+D*(v.y-m.y)},R=A.map(function(L){var z=(L.top.startX+L.top.endX+L.bottom.startX+L.bottom.endX)/4,Z=(L.top.y+L.bottom.y+1)/2;if(d.get(Math.floor(z),Math.floor(Z))){var O=[L.top.endX-L.top.startX,L.bottom.endX-L.bottom.startX,L.bottom.y-L.top.y+1],K=a(O)/O.length,ot=f({x:Math.floor(z),y:Math.floor(Z)},[1,1,1],d),ht=ot+o({x:z,y:Z},S);return{x:z,y:Z,score:ht}}}).filter(function(L){return!!L}).sort(function(L,z){return L.score-z.score}),P=_>=15&&R.length?R[0]:S;return{alignmentPattern:P,dimension:M}}}]).default})});var Hr=[],tr=[],Su=[],wl=[],_a=90210,ns=()=>(_a=_a*1664525+1013904223>>>0,_a/4294967296);function tn(i,t,e,n,s,r,o="cover",a=!1){Hr.push({x:i,y:t,z:e,w:n,h:s,d:r,kind:o,hide:a,minx:i-n/2,maxx:i+n/2,miny:t,maxy:t+s,minz:e-r/2,maxz:e+r/2})}tn(0,0,0,4.6,15.5,4.6,"lhcore",!0);tn(0,15.5,0,9,.5,9,"gallery");for(let[i,t,e,n]of[[0,-4.35,9,.3],[0,4.35,9,.3],[-4.35,0,.3,8.4],[4.35,0,.3,8.4]])tn(i,16,t,e,1,n,"rail");for(let[i,t,e,n]of[[-22,-14,6,5],[22,-15,5,6],[-20,19,6,5],[21,17,5,6]])tn(i,0,t,e,3,n,"hut"),tn(i,3,t,e+1,.4,n+1,"hutroof");tn(-10,0,-9,5,1.1,.8,"sandbag");tn(10,0,9,5,1.1,.8,"sandbag");tn(9,0,-10,.8,1.1,5,"sandbag");tn(-9,0,10,.8,1.1,5,"sandbag");for(let[i,t,e]of[[-14,3,1.6],[-13,4.6,1.2],[15,-4,1.6],[14,-5.6,1.2],[3,16,1.5],[-4,-17,1.5],[30,3,1.4],[-31,-4,1.4],[28,28,1.6],[-29,27,1.5],[-5,33,1.5],[6,-34,1.5]])tn(i,0,t,e,e*.9,e,"crate");for(let[i,t]of[[-17,12],[17,-12],[24,4],[-25,-5],[8,26],[-9,-26]])tn(i,0,t,.95,1.15,.95,"barrel",!0),tr.push({t:"barrel",x:i,y:0,z:t,c:ns()<.5?0:1});for(let[i,t,e]of[[-30,-22,2.2],[32,-20,2],[-34,14,1.8],[35,12,2.2],[0,28,1.6],[4,-30,1.8],[-14,-33,1.5],[18,32,1.7]])tn(i,0,t,e*1.6,e*1.1,e*1.6,"rock",!0),tr.push({t:"rock",x:i,y:0,z:t,s:e,r:ns()*6});for(let i=0;i<46;i++){let t=ns()*Math.PI*2,e=12+ns()*32,n=Math.cos(t)*e,s=Math.sin(t)*e;Math.hypot(n,s)<11||Hr.some(r=>n>r.minx-3&&n<r.maxx+3&&s>r.minz-3&&s<r.maxz+3)||(tr.push({t:"pine",x:n,y:0,z:s,s:.9+ns()*.7,r:ns()*6}),e<36&&tn(n,0,s,.8,6,.8,"trunk",!0))}tr.push({t:"dock",x:0,y:0,z:41});function Tu(i,t,e){return Math.hypot(i,e)>46-.4?!1:!Hr.some(n=>i-.4-.2<n.maxx&&i+.4+.2>n.minx&&t<n.maxy&&t+1.8>n.miny&&e-.4-.2<n.maxz&&e+.4+.2>n.minz)}for(let i=0;i<12;i++){let t=i/12*Math.PI*2,e=Math.cos(t)*7.5,n=Math.sin(t)*7.5;Tu(e,0,n)&&wl.push([e,0,n])}var er={boxes:Hr,decor:tr,pads:Su,spawns:wl,half:46,radius:46,kind:"island"};var jt=50,is=.4,Ru=1.8,Vr=[],bi=[],Fi=[];function Zt(i,t,e,n,s,r,o="cover",a=!1){let c={x:i,y:t,z:e,w:n,h:s,d:r,kind:o,hide:a,minx:i-n/2,maxx:i+n/2,miny:t,maxy:t+s,minz:e-r/2,maxz:e+r/2};return Vr.push(c),c}var Ba=20261114,pn=()=>(Ba=Ba*1664525+1013904223>>>0,Ba/4294967296);Zt(0,0,-jt-1,jt*2+4,9,2,"wall");Zt(0,0,jt+1,jt*2+4,9,2,"wall");Zt(-jt-1,0,0,2,9,jt*2,"wall");Zt(jt+1,0,0,2,9,jt*2,"wall");Zt(0,6,0,16,.8,16,"deck");for(let i of[-1,1])for(let t of[-1,1])Zt(i*6.5,0,t*6.5,2,6,2,"pillar");Zt(0,0,0,2.4,12,2.4,"pillar");Zt(0,12,0,7,.8,7,"deck");for(let[i,t,e,n]of[[0,-3.1,7,.6],[0,3.1,7,.6],[-3.1,0,.6,5.6],[3.1,0,.6,5.6]])Zt(i,12.8,t,e,1,n,"concrete");Zt(5,6.8,5,4,1.3,1,"cover");Zt(-5,6.8,-5,4,1.3,1,"cover");Zt(-5,6.8,5,1,1.3,4,"cover");Zt(5,6.8,-5,1,1.3,4,"cover");function Dl(i,t,e,n,s,r){if(s===null){Zt(i,0,t,e,n,.6,r);return}let a=4.4,c=3.8,l=i-e/2,x=i+e/2,h=s-a/2,u=s+a/2;Zt((l+h)/2,0,t,h-l,n,.6,r),Zt((u+x)/2,0,t,x-u,n,.6,r),Zt(s,c,t,a,n-c,.6,r)}function bl(i,t,e,n,s,r){if(s===null){Zt(i,0,t,.6,n,e,r);return}let a=4.4,c=3.8,l=t-e/2,x=t+e/2,h=s-a/2,u=s+a/2;Zt(i,0,(l+h)/2,.6,n,h-l,r),Zt(i,0,(u+x)/2,.6,n,x-u,r),Zt(i,c,s,.6,n-c,a,r)}function Pu(i,t,e,n,s,r,o){Dl(i,t-n/2,e+.6,s,o<0?i:null,"brick"),Dl(i,t+n/2,e+.6,s,o>0?i:null,"brick"),bl(i-e/2,t,n-.6,s,r<0?t:null,"brick"),bl(i+e/2,t,n-.6,s,r>0?t:null,"brick"),Zt(i,s,t,e+1.2,.6,n+1.2,"roof"),Fi.push({x:i,z:t,w:e+.6,d:n+.6,m:"concrete"}),Zt(i-e/4-1,s+.6,t-n/2+.4,e/2-3,.9,.5,"concrete"),Zt(i+e/4+1,s+.6,t+n/2-.4,e/2-3,.9,.5,"concrete"),Zt(i-r*3,0,t-o*2.4,2.2,1.4,2.2,"cover"),Zt(i+r*2.5,0,t+o*2.6,3.2,1,1.4,"cover"),Zt(i,0,t,1.4,2.6,5,"concrete")}for(let i of[-1,1])for(let t of[-1,1])Pu(i*31,t*30,18,12,6,-i,-t);for(let i of[-1,1]){let t=i*43;Zt(0,7,t,7,.8,7,"deck");for(let e of[-1,1])for(let n of[-1,1])Zt(e*2.9,0,t+n*2.9,.9,7,.9,"pillar");Zt(0,7.8,t+i*3.1,7,1,.6,"concrete"),Zt(0,0,t-i*5.5,5,1.2,1,"sandbag")}var Un=["container_red","container_blue","container_green","container_orange"];function On(i,t,e,n,s){Zt(i,t,e,n?6.2:2.6,2.6,n?2.6:6.2,s)}On(-42,0,-11,!1,Un[0]);On(-42,0,-4,!1,Un[1]);On(-42,0,3,!1,Un[2]);On(-42,0,10,!1,Un[3]);On(-42,2.6,-7.5,!1,Un[3]);On(-42,2.6,6.5,!1,Un[0]);On(-35,0,-8,!0,Un[2]);On(-35,0,8,!0,Un[1]);On(-32,0,0,!1,Un[0]);Zt(-38.5,0,0,1,1.3,1,"cover");Zt(-30,0,-14,1.6,1.6,1.6,"cover");var Iu=[[40,-12],[44,-6],[37,-2],[43,2],[38,7],[45,11],[34,13],[41,-15],[34,-9],[47,-1]];for(let[i,t]of Iu)Zt(i,0,t,.9,7,.9,"trunk",!0),bi.push({t:"pine",x:i,y:0,z:t,s:1+pn()*.5,r:pn()*6});for(let[i,t,e]of[[36,-5,1.5],[42,5,1.3],[46,-10,1.7],[38,12,1.2]])Zt(i,0,t,e*1.6,e*1.1,e*1.6,"rock",!0),bi.push({t:"rock",x:i,y:0,z:t,s:e,r:pn()*6});Fi.push({x:-32,z:0,w:32,d:6,m:"dirt"},{x:32,z:0,w:32,d:6,m:"dirt"});Fi.push({x:0,z:-32,w:6,d:32,m:"dirt"},{x:0,z:32,w:6,d:32,m:"dirt"});Fi.push({x:-38,z:0,w:16,d:34,m:"dirt"});Fi.push({x:40,z:0,w:18,d:36,m:"forest"});var ku=[[13,8,3,1.6,2,"cover"],[19,14,2.4,1.2,2.4,"cover"],[10,18,4,1,1,"sandbag"],[22,5,1.2,2.2,6,"concrete"],[8,27,1,1.9,6,"concrete"],[20,40,6,1.4,1,"sandbag"],[14,41,2.4,2.4,2.4,"cover"],[4,34,3,1.5,3,"cover"],[46,24,3,2.4,3,"cover"]];for(let i of[-1,1])for(let t of[-1,1])for(let[e,n,s,r,o,a]of ku)Math.abs(e)>28&&Math.abs(n)<16||Zt(i*e,0,t*n,s,r,o,a);for(let[i,t]of[[-16,-3],[-16.2,-1.8],[-15,-2.4],[16,3],[16.2,1.8],[15,2.4],[-3,24],[3,-24],[24,-2],[-24,2]])Zt(i,0,t,.95,1.15,.95,"barrel",!0),bi.push({t:"barrel",x:i,y:0,z:t,c:pn()<.5?0:1});for(let i=0;i<70;i++){let t=i/70*Math.PI*2+pn()*.1,e=jt+6+pn()*26;bi.push({t:"pine",x:Math.cos(t)*e,y:0,z:Math.sin(t)*e,s:1.2+pn()*1.4,r:pn()*6})}for(let i=0;i<14;i++){let t=i/14*Math.PI*2+.2,e=jt+40+pn()*14;bi.push({t:"mount",x:Math.cos(t)*e,y:-2,z:Math.sin(t)*e,s:1+pn()*.8,r:pn()*6})}function Lu(i,t,e){return Math.abs(i)>jt-is||Math.abs(e)>jt-is?!1:!Vr.some(n=>i-is-.2<n.maxx&&i+is+.2>n.minx&&t<n.maxy&&t+Ru>n.miny&&e-is-.2<n.maxz&&e+is+.2>n.minz)}var nr=[];for(let i of[-46,-38,-26,-14,0,14,26,38,46])for(let t of[-46,-38,-26,-14,0,14,26,38,46])nr.push([i,0,t]);nr.push([0,6.8,6.5],[0,6.8,-6.5],[6.5,6.8,0],[-6.5,6.8,0],[0,12.8,1.4]);for(let i of[-1,1])for(let t of[-1,1])nr.push([i*31,6.6,t*26],[i*27,6.6,t*33]);for(let i of[-1,1])nr.push([0,7.8,i*42]);var Fl=nr.filter(([i,t,e])=>Lu(i,t,e)),Nu={boxes:[...Vr],decor:[...bi],pads:[...Fi],spawns:[...Fl],half:jt,radius:0,kind:"arena"},oe={boxes:Vr,decor:bi,pads:Fi,spawns:Fl,half:jt,radius:0,kind:"arena"};function Si(i){let t=i==="island"?er:Nu;if(oe.kind!==t.kind){for(let e of["boxes","decor","pads","spawns"])oe[e].length=0,oe[e].push(...t[e]);oe.half=t.half,oe.radius=t.radius,oe.kind=t.kind}}var Vt=1/60,wn=.4,Pl=1.8,an=1.6,Uu=20,Ou=38,Sl=9,Tl=25,zu=8,Il=7,Rl=20,kl=100,Ti=100,Be=[{name:"Pistol",dmg:18,rate:.28,mag:12,reload:1.1,spread:.018,adsMul:.25,moveSpread:.02,airSpread:.03,bloomPer:.006,bloomMax:.02,pellets:1,range:90,auto:!1,zoom:[1.25]},{name:"SMG",dmg:9,rate:.085,mag:30,reload:1.6,spread:.04,adsMul:.35,moveSpread:.03,airSpread:.04,bloomPer:.008,bloomMax:.05,pellets:1,range:60,auto:!0,zoom:[1.4]},{name:"Shotgun",dmg:9,rate:.85,mag:6,reload:2,spread:.075,adsMul:.6,moveSpread:.02,airSpread:.02,bloomPer:0,bloomMax:0,pellets:8,range:26,auto:!1,zoom:[1.15]},{name:"Sniper",dmg:75,rate:1.2,mag:4,reload:2.3,spread:.09,adsMul:0,moveSpread:.07,airSpread:.1,bloomPer:0,bloomMax:0,pellets:1,range:160,auto:!1,zoom:[4,8]}],Ri=3,ir=70;function Wr(i,t,e,n,s=0){let r=t?i.spread*i.adsMul:i.spread;return r+=i.moveSpread*Math.min(1,e/Il)*(t?.5:1),n&&(r+=i.airSpread),r+s}var Xr=(i,t)=>t?i===Ri?.4:.65:1;function Ll(i,t=0){let e=Be[i].zoom,n=e[Math.min(t,e.length-1)];return 2*Math.atan(Math.tan(ir*Math.PI/360)/n)*180/Math.PI}function Pi(i=0,t=0,e=0){return{x:i,y:t,z:e,vx:0,vy:0,vz:0,kx:0,kz:0,fuel:kl,ground:!1,thrusting:!1}}function Ma(i,t,e,n){return t-wn<i.maxx&&t+wn>i.minx&&e<i.maxy&&e+Pl>i.miny&&n-wn<i.maxz&&n+wn>i.minz}function ss(i,t,e=Vt){let n=Math.sin(t.yaw),s=Math.cos(t.yaw),r=-n*t.mz+s*t.mx,o=-s*t.mz-n*t.mx,a=Math.hypot(r,o);a>1&&(r/=a,o/=a);let c=(i.ground?60:22)*e,l=Il*(t.spd==null?1:t.spd);i.vx+=Math.max(-c,Math.min(c,r*l-i.vx)),i.vz+=Math.max(-c,Math.min(c,o*l-i.vz)),t.jump&&i.ground&&(i.vy=zu),i.thrusting=!!t.jet&&i.fuel>0,i.vy-=Uu*e,i.thrusting?(i.vy+=Ou*e,i.ground&&i.vy<4&&(i.vy=4),i.fuel=Math.max(0,i.fuel-32*e)):i.fuel=Math.min(kl,i.fuel+(i.ground?45:7)*e),i.vy>Sl&&(i.vy=Sl),i.vy<-Tl&&(i.vy=-Tl),i.ground=!1;let x=oe.boxes,h=Math.exp(-5*e);i.kx*=h,i.kz*=h;let u=i.vx+i.kx,f=i.vz+i.kz;i.x+=u*e;for(let p of x)Ma(p,i.x,i.y,i.z)&&(i.x=u>0?p.minx-wn-.001:p.maxx+wn+.001,i.vx=0,i.kx=0);i.y+=i.vy*e;for(let p of x)Ma(p,i.x,i.y,i.z)&&(i.vy<=0?(i.y=p.maxy,i.ground=!0):i.y=p.miny-Pl-.001,i.vy=0);i.z+=f*e;for(let p of x)Ma(p,i.x,i.y,i.z)&&(i.z=f>0?p.minz-wn-.001:p.maxz+wn+.001,i.vz=0,i.kz=0);if(i.y<=0&&(i.y=0,i.vy<0&&(i.vy=0),i.ground=!0),i.y>Rl&&(i.y=Rl,i.vy>0&&(i.vy=0)),oe.radius){let p=oe.radius-wn,y=Math.hypot(i.x,i.z);if(y>p){let E=i.x/y,d=i.z/y;i.x=E*p,i.z=d*p;let A=i.vx*E+i.vz*d;A>0&&(i.vx-=A*E,i.vz-=A*d),i.kx=0,i.kz=0}}else{let p=jt-wn;i.x>p?(i.x=p,i.vx=0):i.x<-p&&(i.x=-p,i.vx=0),i.z>p?(i.z=p,i.vz=0):i.z<-p&&(i.z=-p,i.vz=0)}}function wa(i,t,e,n,s,r,o,a,c,l,x,h,u){let f=0,p=u,y=[i,t,e],E=[n,s,r],d=[o,a,c],A=[l,x,h];for(let g=0;g<3;g++)if(Math.abs(E[g])<1e-9){if(y[g]<d[g]||y[g]>A[g])return-1}else{let m=(d[g]-y[g])/E[g],B=(A[g]-y[g])/E[g];if(m>B){let C=m;m=B,B=C}if(m>f&&(f=m),B<p&&(p=B),f>p)return-1}return f}function mn(i,t,e,n,s,r,o){let a=o;for(let c of oe.boxes){let l=wa(i,t,e,n,s,r,c.minx,c.miny,c.minz,c.maxx,c.maxy,c.maxz,a);l>=0&&l<a&&(a=l)}if(s<-1e-9){let c=-t/s;c>=0&&c<a&&(a=c)}return a}function rs(i,t){let e=Math.cos(t);return[-Math.sin(i)*e,Math.sin(t),-Math.cos(i)*e]}function Da(i,t,e,n,s){let r=t+an,o=rs(n,s),a=-o[0]*3.6+Math.cos(n)*.75,c=-o[1]*3.2+.4,l=-o[2]*3.6-Math.sin(n)*.75,x=Math.hypot(a,c,l),h=mn(i,r,e,a/x,c/x,l/x,x+.6),u=Math.max(.5,Math.min(x,h-.6)),f=(y,E,d)=>oe.boxes.some(A=>y>A.minx-.4&&y<A.maxx+.4&&E>A.miny-.4&&E<A.maxy+.4&&d>A.minz-.4&&d<A.maxz+.4),p=y=>[i+a/x*y,Math.max(.3,r+c/x*y),e+l/x*y];for(;u>.6&&f(...p(u));)u-=.2;return f(...p(u))?[i,r,e,!0]:p(u)}var Hu=1.5,Vu=1.9,Gu=.34,Wu=.19;function Gr(i,t,e,n,s,r,o,a,c,l=0){let x=o,h=null;for(let u of a){if(u.id===c||!u.alive)continue;let f=(u.hw||Gu)+l,p=(u.hw?u.hw*.6:Wu)+l,y=u.bh||Hu,E=u.th||Vu,d=wa(i,t,e,n,s,r,u.x-f,u.y,u.z-f,u.x+f,u.y+y,u.z+f,x);d>=0&&d<x&&(x=d,h={t:d,player:u,head:!1}),d=wa(i,t,e,n,s,r,u.x-p,u.y+y,u.z-p,u.x+p,u.y+E+l,u.z+p,x),d>=0&&d<x&&(x=d,h={t:d,player:u,head:!0})}return h}function ba(i,t,e,n,s,r,o=0){let a=i.x,c=i.y+an,l=i.z,x=rs(e,n),h=a,u=c,f=l;if(!s){let M=Da(i.x,i.y,i.z,e,n);h=M[0],u=M[1],f=M[2]}let p=mn(h,u,f,x[0],x[1],x[2],r+6),y=Gr(h,u,f,x[0],x[1],x[2],p,t,i.id,o);y&&(p=y.t);let E=x,d=h+x[0]*p-a,A=u+x[1]*p-c,g=f+x[2]*p-l,m=Math.hypot(d,A,g);if(m>1.2){let M=[d/m,A/m,g/m];M[0]*x[0]+M[1]*x[1]+M[2]*x[2]>.5&&(E=M)}let B=mn(a,c,l,E[0],E[1],E[2],r),C=Gr(a,c,l,E[0],E[1],E[2],B,t,i.id,o);return{dir:E,hit:C,tWorld:B}}function Nl(i,t,e,n,s,r=!1){return!!ba(i,t,e,n,r,s,.12).hit}var wc="170";var Xu=0,Ul=1,Yu=2;var Gx=1,Dc=2,Xn=3,gi=0,ze=1,Oe=2,pi=0,ws=1,Bo=2,Ol=3,zl=4,qu=5,Hi=100,Zu=101,$u=102,Ju=103,Ku=104,ju=200,Qu=201,td=202,ed=203,c0=204,l0=205,nd=206,id=207,sd=208,rd=209,od=210,ad=211,cd=212,ld=213,xd=214,x0=0,h0=1,u0=2,Ss=3,d0=4,f0=5,p0=6,m0=7,bc=0,hd=1,ud=2,mi=0,dd=1,fd=2,pd=3,md=4,Ed=5,gd=6,Fc=7;var Wx=300,Ts=301,Rs=302,E0=303,g0=304,Yo=306,vi=1e3,Gi=1001,v0=1002,sn=1003,vd=1004;var Yr=1005;var Fn=1006,Fa=1007;var Wi=1008;var $n=1009,Xx=1010,Yx=1011,Er=1012,Sc=1013,Xi=1014,Sn=1015,Br=1016,Tc=1017,Rc=1018,Ps=1020,qx=35902,Zx=1021,$x=1022,An=1023,Jx=1024,Kx=1025,Ds=1026,Is=1027,Pc=1028,Ic=1029,jx=1030,kc=1031;var Lc=1033,vo=33776,Ao=33777,Co=33778,yo=33779,A0=35840,C0=35841,y0=35842,_0=35843,B0=36196,M0=37492,w0=37496,D0=37808,b0=37809,F0=37810,S0=37811,T0=37812,R0=37813,P0=37814,I0=37815,k0=37816,L0=37817,N0=37818,U0=37819,O0=37820,z0=37821,_o=36492,H0=36494,V0=36495,Qx=36283,G0=36284,W0=36285,X0=36286;var Mo=2300,Y0=2301,Sa=2302,Hl=2400,Vl=2401,Gl=2402;var Ad=3200,Cd=3201;var th=0,yd=1,di="",Ie="srgb",Os="srgb-linear",qo="linear",ae="srgb";var os=7680;var Wl=519,_d=512,Bd=513,Md=514,eh=515,wd=516,Dd=517,bd=518,Fd=519,q0=35044;var Xl="300 es",qn=2e3,wo=2001,Ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ta=Math.PI/180,Z0=180/Math.PI;function Ei(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Je(i,t,e){return Math.max(t,Math.min(e,i))}function Sd(i,t){return(i%t+t)%t}function Ra(i,t,e){return(1-e)*i+e*t}function bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Lt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let x=this.elements;return x[0]=t,x[1]=s,x[2]=a,x[3]=e,x[4]=r,x[5]=c,x[6]=n,x[7]=o,x[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],x=n[4],h=n[7],u=n[2],f=n[5],p=n[8],y=s[0],E=s[3],d=s[6],A=s[1],g=s[4],m=s[7],B=s[2],C=s[5],M=s[8];return r[0]=o*y+a*A+c*B,r[3]=o*E+a*g+c*C,r[6]=o*d+a*m+c*M,r[1]=l*y+x*A+h*B,r[4]=l*E+x*g+h*C,r[7]=l*d+x*m+h*M,r[2]=u*y+f*A+p*B,r[5]=u*E+f*g+p*C,r[8]=u*d+f*m+p*M,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],x=t[8];return e*o*x-e*a*l-n*r*x+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],x=t[8],h=x*o-a*l,u=a*c-x*r,f=l*r-o*c,p=e*h+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=h*y,t[1]=(s*l-x*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(x*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Pa.makeScale(t,e)),this}rotate(t){return this.premultiply(Pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Pa=new Gt;function nh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Do(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Td(){let i=Do("canvas");return i.style.display="block",i}var Yl={};function fr(i){i in Yl||(Yl[i]=!0,console.warn(i))}function Rd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Pd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Id(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(i.r=bs(i.r),i.g=bs(i.g),i.b=bs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?qo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ql=[.64,.33,.3,.6,.15,.06],Zl=[.2126,.7152,.0722],$l=[.3127,.329],Jl=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Os]:{primaries:ql,whitePoint:$l,transfer:qo,toXYZ:Jl,fromXYZ:Kl,luminanceCoefficients:Zl,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:ql,whitePoint:$l,transfer:ae,toXYZ:Jl,fromXYZ:Kl,luminanceCoefficients:Zl,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});var as,$0=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{as===void 0&&(as=Do("canvas")),as.width=t.width,as.height=t.height;let n=as.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=as}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Do("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kd=0,bo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Ei(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ia(s[o].image)):r.push(Ia(s[o]))}else r=Ia(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ld=0,Ke=class i extends Ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Gi,s=Gi,r=Fn,o=Wi,a=An,c=$n,l=i.DEFAULT_ANISOTROPY,x=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Ei(),this.name="",this.source=new bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vi:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case v0:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vi:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case v0:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Wx;Ke.DEFAULT_ANISOTROPY=1;var le=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],x=c[4],h=c[8],u=c[1],f=c[5],p=c[9],y=c[2],E=c[6],d=c[10];if(Math.abs(x-u)<.01&&Math.abs(h-y)<.01&&Math.abs(p-E)<.01){if(Math.abs(x+u)<.1&&Math.abs(h+y)<.1&&Math.abs(p+E)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let g=(l+1)/2,m=(f+1)/2,B=(d+1)/2,C=(x+u)/4,M=(h+y)/4,w=(p+E)/4;return g>m&&g>B?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=C/n,r=M/n):m>B?m<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(m),n=C/s,r=w/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=M/r,s=w/r),this.set(n,s,r,e),this}let A=Math.sqrt((E-p)*(E-p)+(h-y)*(h-y)+(u-x)*(u-x));return Math.abs(A)<.001&&(A=1),this.x=(E-p)/A,this.y=(h-y)/A,this.z=(u-x)/A,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},J0=class extends Ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new bo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends J0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fo=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var K0=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],x=n[s+2],h=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=x,t[e+3]=h;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=p,t[e+3]=y;return}if(h!==y||c!==u||l!==f||x!==p){let E=1-a,d=c*u+l*f+x*p+h*y,A=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){let B=Math.sqrt(g),C=Math.atan2(B,d*A);E=Math.sin(E*C)/B,a=Math.sin(a*C)/B}let m=a*A;if(c=c*E+u*m,l=l*E+f*m,x=x*E+p*m,h=h*E+y*m,E===1-a){let B=1/Math.sqrt(c*c+l*l+x*x+h*h);c*=B,l*=B,x*=B,h*=B}}t[e]=c,t[e+1]=l,t[e+2]=x,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],x=n[s+3],h=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+x*h+c*f-l*u,t[e+1]=c*p+x*u+l*h-a*f,t[e+2]=l*p+x*f+a*u-c*h,t[e+3]=x*p-a*h-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),x=a(s/2),h=a(r/2),u=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=u*x*h+l*f*p,this._y=l*f*h-u*x*p,this._z=l*x*p+u*f*h,this._w=l*x*h-u*f*p;break;case"YXZ":this._x=u*x*h+l*f*p,this._y=l*f*h-u*x*p,this._z=l*x*p-u*f*h,this._w=l*x*h+u*f*p;break;case"ZXY":this._x=u*x*h-l*f*p,this._y=l*f*h+u*x*p,this._z=l*x*p+u*f*h,this._w=l*x*h-u*f*p;break;case"ZYX":this._x=u*x*h-l*f*p,this._y=l*f*h+u*x*p,this._z=l*x*p-u*f*h,this._w=l*x*h+u*f*p;break;case"YZX":this._x=u*x*h+l*f*p,this._y=l*f*h+u*x*p,this._z=l*x*p-u*f*h,this._w=l*x*h-u*f*p;break;case"XZY":this._x=u*x*h-l*f*p,this._y=l*f*h-u*x*p,this._z=l*x*p+u*f*h,this._w=l*x*h+u*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],x=e[6],h=e[10],u=n+a+h;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(x-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(x-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+x)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+x)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,x=e._w;return this._x=n*x+o*a+s*l-r*c,this._y=s*x+o*c+r*a-n*l,this._z=r*x+o*l+n*c-s*a,this._w=o*x-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),x=Math.atan2(l,a),h=Math.sin((1-e)*x)/l,u=Math.sin(e*x)/l;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),x=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*x,this.y=n+c*x+a*l-r*h,this.z=s+c*h+r*x-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ka.copy(this).projectOnVector(t),this.sub(ka)}reflect(t){return this.sub(ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ka=new U,jl=new Tn,Kn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),Zr.subVectors(this.max,sr),cs.subVectors(t.a,sr),ls.subVectors(t.b,sr),xs.subVectors(t.c,sr),ai.subVectors(ls,cs),ci.subVectors(xs,ls),Ii.subVectors(cs,xs);let e=[0,-ai.z,ai.y,0,-ci.z,ci.y,0,-Ii.z,Ii.y,ai.z,0,-ai.x,ci.z,0,-ci.x,Ii.z,0,-Ii.x,-ai.y,ai.x,0,-ci.y,ci.x,0,-Ii.y,Ii.x,0];return!La(e,cs,ls,xs,Zr)||(e=[1,0,0,0,1,0,0,0,1],!La(e,cs,ls,xs,Zr))?!1:($r.crossVectors(ai,ci),e=[$r.x,$r.y,$r.z],La(e,cs,ls,xs,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},zn=[new U,new U,new U,new U,new U,new U,new U,new U],En=new U,qr=new Kn,cs=new U,ls=new U,xs=new U,ai=new U,ci=new U,Ii=new U,sr=new U,Zr=new U,$r=new U,ki=new U;function La(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ki.fromArray(i,r);let a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),c=t.dot(ki),l=e.dot(ki),x=n.dot(ki);if(Math.max(-Math.max(c,l,x),Math.min(c,l,x))>a)return!1}return!0}var Nd=new Kn,rr=new U,Na=new U,jn=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Nd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rr.subVectors(t,this.center);let e=rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rr.copy(t.center).add(Na)),this.expandByPoint(rr.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hn=new U,Ua=new U,Jr=new U,li=new U,Oa=new U,Kr=new U,za=new U,j0=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ua.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),li.copy(this.origin).sub(Ua);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Jr),a=li.dot(this.direction),c=-li.dot(Jr),l=li.lengthSq(),x=Math.abs(1-o*o),h,u,f,p;if(x>0)if(h=o*c-a,u=o*a-c,p=r*x,h>=0)if(u>=-p)if(u<=p){let y=1/x;h*=y,u*=y,f=h*(h+o*u+2*a)+u*(o*h+u+2*c)+l}else u=r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*c)+l;else u=-r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*c)+l;else u<=-p?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l):u<=p?(h=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ua).addScaledVector(Jr,u),f}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);let n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,x=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),x>=0?(r=(t.min.y-u.y)*x,o=(t.max.y-u.y)*x):(r=(t.max.y-u.y)*x,o=(t.min.y-u.y)*x),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-u.z)*h,c=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,c=(t.min.z-u.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){Oa.subVectors(e,t),Kr.subVectors(n,t),za.crossVectors(Oa,Kr);let o=this.direction.dot(za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,t);let c=a*this.direction.dot(Kr.crossVectors(li,Kr));if(c<0)return null;let l=a*this.direction.dot(Oa.cross(li));if(l<0||c+l>o)return null;let x=-a*li.dot(za);return x<0?null:this.at(x/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class i{constructor(t,e,n,s,r,o,a,c,l,x,h,u,f,p,y,E){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,x,h,u,f,p,y,E)}set(t,e,n,s,r,o,a,c,l,x,h,u,f,p,y,E){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=x,d[10]=h,d[14]=u,d[3]=f,d[7]=p,d[11]=y,d[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),x=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let u=o*x,f=o*h,p=a*x,y=a*h;e[0]=c*x,e[4]=-c*h,e[8]=l,e[1]=f+p*l,e[5]=u-y*l,e[9]=-a*c,e[2]=y-u*l,e[6]=p+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*x,f=c*h,p=l*x,y=l*h;e[0]=u+y*a,e[4]=p*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*x,e[9]=-a,e[2]=f*a-p,e[6]=y+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*x,f=c*h,p=l*x,y=l*h;e[0]=u-y*a,e[4]=-o*h,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*x,e[9]=y-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*x,f=o*h,p=a*x,y=a*h;e[0]=c*x,e[4]=p*l-f,e[8]=u*l+y,e[1]=c*h,e[5]=y*l+u,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,p=a*c,y=a*l;e[0]=c*x,e[4]=y-u*h,e[8]=p*h+f,e[1]=h,e[5]=o*x,e[9]=-a*x,e[2]=-l*x,e[6]=f*h+p,e[10]=u-y*h}else if(t.order==="XZY"){let u=o*c,f=o*l,p=a*c,y=a*l;e[0]=c*x,e[4]=-h,e[8]=l*x,e[1]=u*h+y,e[5]=o*x,e[9]=f*h-p,e[2]=p*h-f,e[6]=a*x,e[10]=y*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ud,t,Od)}lookAt(t,e,n){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),xi.crossVectors(n,en),xi.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),xi.crossVectors(n,en)),xi.normalize(),jr.crossVectors(en,xi),s[0]=xi.x,s[4]=jr.x,s[8]=en.x,s[1]=xi.y,s[5]=jr.y,s[9]=en.y,s[2]=xi.z,s[6]=jr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],x=n[1],h=n[5],u=n[9],f=n[13],p=n[2],y=n[6],E=n[10],d=n[14],A=n[3],g=n[7],m=n[11],B=n[15],C=s[0],M=s[4],w=s[8],v=s[12],_=s[1],D=s[5],S=s[9],R=s[13],P=s[2],L=s[6],z=s[10],Z=s[14],O=s[3],K=s[7],ot=s[11],ht=s[15];return r[0]=o*C+a*_+c*P+l*O,r[4]=o*M+a*D+c*L+l*K,r[8]=o*w+a*S+c*z+l*ot,r[12]=o*v+a*R+c*Z+l*ht,r[1]=x*C+h*_+u*P+f*O,r[5]=x*M+h*D+u*L+f*K,r[9]=x*w+h*S+u*z+f*ot,r[13]=x*v+h*R+u*Z+f*ht,r[2]=p*C+y*_+E*P+d*O,r[6]=p*M+y*D+E*L+d*K,r[10]=p*w+y*S+E*z+d*ot,r[14]=p*v+y*R+E*Z+d*ht,r[3]=A*C+g*_+m*P+B*O,r[7]=A*M+g*D+m*L+B*K,r[11]=A*w+g*S+m*z+B*ot,r[15]=A*v+g*R+m*Z+B*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],x=t[2],h=t[6],u=t[10],f=t[14],p=t[3],y=t[7],E=t[11],d=t[15];return p*(+r*c*h-s*l*h-r*a*u+n*l*u+s*a*f-n*c*f)+y*(+e*c*f-e*l*u+r*o*u-s*o*f+s*l*x-r*c*x)+E*(+e*l*h-e*a*f-r*o*h+n*o*f+r*a*x-n*l*x)+d*(-s*a*x-e*c*h+e*a*u+s*o*h-n*o*u+n*c*x)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],x=t[8],h=t[9],u=t[10],f=t[11],p=t[12],y=t[13],E=t[14],d=t[15],A=h*E*l-y*u*l+y*c*f-a*E*f-h*c*d+a*u*d,g=p*u*l-x*E*l-p*c*f+o*E*f+x*c*d-o*u*d,m=x*y*l-p*h*l+p*a*f-o*y*f-x*a*d+o*h*d,B=p*h*c-x*y*c-p*a*u+o*y*u+x*a*E-o*h*E,C=e*A+n*g+s*m+r*B;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/C;return t[0]=A*M,t[1]=(y*u*r-h*E*r-y*s*f+n*E*f+h*s*d-n*u*d)*M,t[2]=(a*E*r-y*c*r+y*s*l-n*E*l-a*s*d+n*c*d)*M,t[3]=(h*c*r-a*u*r-h*s*l+n*u*l+a*s*f-n*c*f)*M,t[4]=g*M,t[5]=(x*E*r-p*u*r+p*s*f-e*E*f-x*s*d+e*u*d)*M,t[6]=(p*c*r-o*E*r-p*s*l+e*E*l+o*s*d-e*c*d)*M,t[7]=(o*u*r-x*c*r+x*s*l-e*u*l-o*s*f+e*c*f)*M,t[8]=m*M,t[9]=(p*h*r-x*y*r-p*n*f+e*y*f+x*n*d-e*h*d)*M,t[10]=(o*y*r-p*a*r+p*n*l-e*y*l-o*n*d+e*a*d)*M,t[11]=(x*a*r-o*h*r-x*n*l+e*h*l+o*n*f-e*a*f)*M,t[12]=B*M,t[13]=(x*y*s-p*h*s+p*n*u-e*y*u-x*n*E+e*h*E)*M,t[14]=(p*a*s-o*y*s-p*n*c+e*y*c+o*n*E-e*a*E)*M,t[15]=(o*h*s-x*a*s+x*n*c-e*h*c-o*n*u+e*a*u)*M,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,x=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,x*a+n,x*c-s*o,0,l*c-s*a,x*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,x=o+o,h=a+a,u=r*l,f=r*x,p=r*h,y=o*x,E=o*h,d=a*h,A=c*l,g=c*x,m=c*h,B=n.x,C=n.y,M=n.z;return s[0]=(1-(y+d))*B,s[1]=(f+m)*B,s[2]=(p-g)*B,s[3]=0,s[4]=(f-m)*C,s[5]=(1-(u+d))*C,s[6]=(E+A)*C,s[7]=0,s[8]=(p+g)*M,s[9]=(E-A)*M,s[10]=(1-(u+y))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=hs.set(s[0],s[1],s[2]).length(),o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],gn.copy(this);let l=1/r,x=1/o,h=1/a;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=x,gn.elements[5]*=x,gn.elements[6]*=x,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,e.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=qn){let c=this.elements,l=2*r/(e-t),x=2*r/(n-s),h=(e+t)/(e-t),u=(n+s)/(n-s),f,p;if(a===qn)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===wo)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=x,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=qn){let c=this.elements,l=1/(e-t),x=1/(n-s),h=1/(o-r),u=(e+t)*l,f=(n+s)*x,p,y;if(a===qn)p=(o+r)*h,y=-2*h;else if(a===wo)p=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*x,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hs=new U,gn=new xe,Ud=new U(0,0,0),Od=new U(1,1,1),xi=new U,jr=new U,en=new U,Ql=new xe,tx=new Tn,ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],x=s[9],h=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-x,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-x,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-x,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tx.setFromEuler(this),this.setFromQuaternion(tx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var So=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zd=0,ex=new U,us=new Tn,Vn=new xe,Qr=new U,or=new U,Hd=new U,Vd=new Tn,nx=new U(1,0,0),ix=new U(0,1,0),sx=new U(0,0,1),rx={type:"added"},Gd={type:"removed"},ds={type:"childadded",child:null},Ha={type:"childremoved",child:null},be=class i extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new ln,n=new Tn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Gt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(nx,t)}rotateY(t){return this.rotateOnAxis(ix,t)}rotateZ(t){return this.rotateOnAxis(sx,t)}translateOnAxis(t,e){return ex.copy(t).applyQuaternion(this.quaternion),this.position.add(ex.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nx,t)}translateY(t){return this.translateOnAxis(ix,t)}translateZ(t){return this.translateOnAxis(sx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(or,Qr,this.up):Vn.lookAt(Qr,or,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),us.setFromRotationMatrix(Vn),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rx),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gd),Ha.child=t,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rx),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,Hd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,x=c.length;l<x;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),x=o(t.images),h=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),x.length>0&&(n.images=x),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let c=[];for(let l in a){let x=a[l];delete x.metadata,c.push(x)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};be.DEFAULT_UP=new U(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new U,Gn=new U,Va=new U,Wn=new U,fs=new U,ps=new U,ox=new U,Ga=new U,Wa=new U,Xa=new U,Ya=new le,qa=new le,Za=new le,fi=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Gn.subVectors(n,e),Va.subVectors(t,e);let o=vn.dot(vn),a=vn.dot(Gn),c=vn.dot(Va),l=Gn.dot(Gn),x=Gn.dot(Va),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let u=1/h,f=(l*c-a*x)*u,p=(o*x-a*c)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(o,Wn.y),c.addScaledVector(a,Wn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ya.setScalar(0),qa.setScalar(0),Za.setScalar(0),Ya.fromBufferAttribute(t,e),qa.fromBufferAttribute(t,n),Za.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ya,r.x),o.addScaledVector(qa,r.y),o.addScaledVector(Za,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Gn.subVectors(t,e),vn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),vn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;fs.subVectors(s,n),ps.subVectors(r,n),Ga.subVectors(t,n);let c=fs.dot(Ga),l=ps.dot(Ga);if(c<=0&&l<=0)return e.copy(n);Wa.subVectors(t,s);let x=fs.dot(Wa),h=ps.dot(Wa);if(x>=0&&h<=x)return e.copy(s);let u=c*h-x*l;if(u<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(fs,o);Xa.subVectors(t,r);let f=fs.dot(Xa),p=ps.dot(Xa);if(p>=0&&f<=p)return e.copy(r);let y=f*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(ps,a);let E=x*p-f*h;if(E<=0&&h-x>=0&&f-p>=0)return ox.subVectors(r,s),a=(h-x)/(h-x+(f-p)),e.copy(s).addScaledVector(ox,a);let d=1/(E+y+u);return o=y*d,a=u*d,e.copy(n).addScaledVector(fs,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},to={h:0,s:0,l:0};function $a(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Sd(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$a(o,r,t+1/3),this.g=$a(o,r,t),this.b=$a(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=ih[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return te.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Je(Ue.r*255,0,255))*65536+Math.round(Je(Ue.g*255,0,255))*256+Math.round(Je(Ue.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ue.copy(this),e);let n=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,x=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=x<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=x,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Ie){te.fromWorkingColorSpace(Ue.copy(this),t);let e=Ue.r,n=Ue.g,s=Ue.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(to);let n=Ra(hi.h,to.h,e),s=Ra(hi.s,to.s,e),r=Ra(hi.l,to.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ue=new Ft;Ft.NAMES=ih;var Wd=0,Ci=class extends Ai{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Ei(),this.name="",this.blending=ws,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=c0,this.blendDst=l0,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==c0&&(n.blendSrc=this.blendSrc),this.blendDst!==l0&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ve=class extends Ci{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new U,eo=new Lt,De=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=q0,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==q0&&(t.usage=this.usage),t}};var To=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ro=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}},Xd=0,cn=new xe,Ja=new be,ms=new U,nn=new Kn,ar=new Kn,Re=new U,Me=class i extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nh(t)?Ro:To)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Ja.lookAt(t),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(nn.min,ar.min),nn.expandByPoint(Re),Re.addVectors(nn.max,ar.max),nn.expandByPoint(Re)):(nn.expandByPoint(ar.min),nn.expandByPoint(ar.max))}nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,x=a.count;l<x;l++)Re.fromBufferAttribute(a,l),c&&(ms.fromBufferAttribute(t,l),Re.add(ms)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new U,c[w]=new U;let l=new U,x=new U,h=new U,u=new Lt,f=new Lt,p=new Lt,y=new U,E=new U;function d(w,v,_){l.fromBufferAttribute(n,w),x.fromBufferAttribute(n,v),h.fromBufferAttribute(n,_),u.fromBufferAttribute(r,w),f.fromBufferAttribute(r,v),p.fromBufferAttribute(r,_),x.sub(l),h.sub(l),f.sub(u),p.sub(u);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(y.copy(x).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(D),E.copy(h).multiplyScalar(f.x).addScaledVector(x,-p.x).multiplyScalar(D),a[w].add(y),a[v].add(y),a[_].add(y),c[w].add(E),c[v].add(E),c[_].add(E))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let w=0,v=A.length;w<v;++w){let _=A[w],D=_.start,S=_.count;for(let R=D,P=D+S;R<P;R+=3)d(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let g=new U,m=new U,B=new U,C=new U;function M(w){B.fromBufferAttribute(s,w),C.copy(B);let v=a[w];g.copy(v),g.sub(B.multiplyScalar(B.dot(v))).normalize(),m.crossVectors(C,v);let D=m.dot(c[w])<0?-1:1;o.setXYZW(w,g.x,g.y,g.z,D)}for(let w=0,v=A.length;w<v;++w){let _=A[w],D=_.start,S=_.count;for(let R=D,P=D+S;R<P;R+=3)M(t.getX(R+0)),M(t.getX(R+1)),M(t.getX(R+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,x=new U,h=new U;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),y=t.getX(u+1),E=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,E),x.subVectors(o,r),h.subVectors(s,r),x.cross(h),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,E),a.add(x),c.add(x),l.add(x),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(E,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),x.subVectors(o,r),h.subVectors(s,r),x.cross(h),n.setXYZ(u+0,x.x,x.y,x.z),n.setXYZ(u+1,x.x,x.y,x.z),n.setXYZ(u+2,x.x,x.y,x.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){let l=a.array,x=a.itemSize,h=a.normalized,u=new l.constructor(c.length*x),f=0,p=0;for(let y=0,E=c.length;y<E;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*x;for(let d=0;d<x;d++)u[p++]=l[f++]}return new De(u,x,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let x=0,h=l.length;x<h;x++){let u=l[x],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],x=[];for(let h=0,u=l.length;h<u;h++){let f=l[h];x.push(f.toJSON(t.data))}x.length>0&&(s[c]=x,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let x=s[l];this.setAttribute(l,x.clone(e))}let r=t.morphAttributes;for(let l in r){let x=[],h=r[l];for(let u=0,f=h.length;u<f;u++)x.push(h[u].clone(e));this.morphAttributes[l]=x}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,x=o.length;l<x;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ax=new xe,Li=new j0,no=new jn,cx=new U,io=new U,so=new U,ro=new U,Ka=new U,oo=new U,lx=new U,ao=new U,St=class extends be{constructor(t=new Me,e=new ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let x=a[c],h=r[c];x!==0&&(Ka.fromBufferAttribute(h,t),o?oo.addScaledVector(Ka,x):oo.addScaledVector(Ka.sub(e),x))}e.add(oo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(no.containsPoint(Li.origin)===!1&&(Li.intersectSphere(no,cx)===null||Li.origin.distanceToSquared(cx)>(t.far-t.near)**2))&&(ax.copy(r).invert(),Li.copy(t.ray).applyMatrix4(ax),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,x=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=u.length;p<y;p++){let E=u[p],d=o[E.materialIndex],A=Math.max(E.start,f.start),g=Math.min(a.count,Math.min(E.start+E.count,f.start+f.count));for(let m=A,B=g;m<B;m+=3){let C=a.getX(m),M=a.getX(m+1),w=a.getX(m+2);s=co(this,d,t,n,l,x,h,C,M,w),s&&(s.faceIndex=Math.floor(m/3),s.face.materialIndex=E.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let E=p,d=y;E<d;E+=3){let A=a.getX(E),g=a.getX(E+1),m=a.getX(E+2);s=co(this,o,t,n,l,x,h,A,g,m),s&&(s.faceIndex=Math.floor(E/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,y=u.length;p<y;p++){let E=u[p],d=o[E.materialIndex],A=Math.max(E.start,f.start),g=Math.min(c.count,Math.min(E.start+E.count,f.start+f.count));for(let m=A,B=g;m<B;m+=3){let C=m,M=m+1,w=m+2;s=co(this,d,t,n,l,x,h,C,M,w),s&&(s.faceIndex=Math.floor(m/3),s.face.materialIndex=E.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let E=p,d=y;E<d;E+=3){let A=E,g=E+1,m=E+2;s=co(this,o,t,n,l,x,h,A,g,m),s&&(s.faceIndex=Math.floor(E/3),e.push(s))}}}};function Yd(i,t,e,n,s,r,o,a){let c;if(t.side===ze?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===gi,a),c===null)return null;ao.copy(a),ao.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ao);return l<e.near||l>e.far?null:{distance:l,point:ao.clone(),object:i}}function co(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,io),i.getVertexPosition(c,so),i.getVertexPosition(l,ro);let x=Yd(i,t,e,n,io,so,ro,lx);if(x){let h=new U;fi.getBarycoord(lx,io,so,ro,h),s&&(x.uv=fi.getInterpolatedAttribute(s,a,c,l,h,new Lt)),r&&(x.uv1=fi.getInterpolatedAttribute(r,a,c,l,h,new Lt)),o&&(x.normal=fi.getInterpolatedAttribute(o,a,c,l,h,new U),x.normal.dot(n.direction)>0&&x.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new U,materialIndex:0};fi.getNormal(io,so,ro,u.normal),x.face=u,x.barycoord=h}return x}var Ae=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],x=[],h=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(h,2));function p(y,E,d,A,g,m,B,C,M,w,v){let _=m/M,D=B/w,S=m/2,R=B/2,P=C/2,L=M+1,z=w+1,Z=0,O=0,K=new U;for(let ot=0;ot<z;ot++){let ht=ot*D-R;for(let xt=0;xt<L;xt++){let Wt=xt*_-S;K[y]=Wt*A,K[E]=ht*g,K[d]=P,l.push(K.x,K.y,K.z),K[y]=0,K[E]=0,K[d]=C>0?1:-1,x.push(K.x,K.y,K.z),h.push(xt/M),h.push(1-ot/w),Z+=1}}for(let ot=0;ot<w;ot++)for(let ht=0;ht<M;ht++){let xt=u+ht+L*ot,Wt=u+ht+L*(ot+1),Q=u+(ht+1)+L*(ot+1),I=u+(ht+1)+L*ot;c.push(xt,Wt,I),c.push(Wt,Q,I),O+=6}a.addGroup(f,O,v),f+=O,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ks(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){let t={};for(let e=0;e<i.length;e++){let n=ks(i[e]);for(let s in n)t[s]=n[s]}return t}function qd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Zd={clone:ks,merge:We},$d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends Ci{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Po=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new U,xx=new Lt,hx=new Lt,Fe=class extends Po{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Z0*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Z0*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,xx,hx),e.subVectors(hx,xx)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ta*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Es=-90,gs=1,Q0=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fe(Es,gs,t,e);s.layers=this.layers,this.add(s);let r=new Fe(Es,gs,t,e);r.layers=this.layers,this.add(r);let o=new Fe(Es,gs,t,e);o.layers=this.layers,this.add(o);let a=new Fe(Es,gs,t,e);a.layers=this.layers,this.add(a);let c=new Fe(Es,gs,t,e);c.layers=this.layers,this.add(c);let l=new Fe(Es,gs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,x]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,x),t.setRenderTarget(h,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Io=class extends Ke{constructor(t,e,n,s,r,o,a,c,l,x){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,n,s,r,o,a,c,l,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},tc=class extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Io(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ae(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:pi});r.uniforms.tEquirect.value=e;let o=new St(s,r),a=e.minFilter;return e.minFilter===Wi&&(e.minFilter=Fn),new Q0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ja=new U,Kd=new U,jd=new Gt,Yn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ja.subVectors(n,e).cross(Kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jd.getNormalMatrix(t),s=this.coplanarPoint(ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ni=new jn,lo=new U,gr=class{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],x=s[5],h=s[6],u=s[7],f=s[8],p=s[9],y=s[10],E=s[11],d=s[12],A=s[13],g=s[14],m=s[15];if(n[0].setComponents(c-r,u-l,E-f,m-d).normalize(),n[1].setComponents(c+r,u+l,E+f,m+d).normalize(),n[2].setComponents(c+o,u+x,E+p,m+A).normalize(),n[3].setComponents(c-o,u-x,E-p,m-A).normalize(),n[4].setComponents(c-a,u-h,E-y,m-g).normalize(),e===qn)n[5].setComponents(c+a,u+h,E+y,m+g).normalize();else if(e===wo)n[5].setComponents(a,h,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(lo.x=s.normal.x>0?t.max.x:t.min.x,lo.y=s.normal.y>0?t.max.y:t.min.y,lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Qd(i){let t=new WeakMap;function e(a,c){let l=a.array,x=a.usage,h=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,x),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let x=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,x);else{h.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<h.length;f++){let p=h[u],y=h[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++u,h[u]=y)}h.length=u+1;for(let f=0,p=h.length;f<p;f++){let y=h[f];i.bufferSubData(l,y.start*x.BYTES_PER_ELEMENT,x,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let x=t.get(a);(!x||x.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Qn=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,x=c+1,h=t/a,u=e/c,f=[],p=[],y=[],E=[];for(let d=0;d<x;d++){let A=d*u-o;for(let g=0;g<l;g++){let m=g*h-r;p.push(m,-A,0),y.push(0,0,1),E.push(g/a),E.push(1-d/c)}}for(let d=0;d<c;d++)for(let A=0;A<a;A++){let g=A+l*d,m=A+l*(d+1),B=A+1+l*(d+1),C=A+1+l*d;f.push(g,m,C),f.push(m,B,C)}this.setIndex(f),this.setAttribute("position",new $t(p,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(E,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ef=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,af=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,df=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ff=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$f=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ip=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_p=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Op=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$p=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,em=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,am=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:tf,alphahash_pars_fragment:ef,alphamap_fragment:nf,alphamap_pars_fragment:sf,alphatest_fragment:rf,alphatest_pars_fragment:of,aomap_fragment:af,aomap_pars_fragment:cf,batching_pars_vertex:lf,batching_vertex:xf,begin_vertex:hf,beginnormal_vertex:uf,bsdfs:df,iridescence_fragment:ff,bumpmap_pars_fragment:pf,clipping_planes_fragment:mf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:gf,clipping_planes_vertex:vf,color_fragment:Af,color_pars_fragment:Cf,color_pars_vertex:yf,color_vertex:_f,common:Bf,cube_uv_reflection_fragment:Mf,defaultnormal_vertex:wf,displacementmap_pars_vertex:Df,displacementmap_vertex:bf,emissivemap_fragment:Ff,emissivemap_pars_fragment:Sf,colorspace_fragment:Tf,colorspace_pars_fragment:Rf,envmap_fragment:Pf,envmap_common_pars_fragment:If,envmap_pars_fragment:kf,envmap_pars_vertex:Lf,envmap_physical_pars_fragment:qf,envmap_vertex:Nf,fog_vertex:Uf,fog_pars_vertex:Of,fog_fragment:zf,fog_pars_fragment:Hf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:Gf,lights_lambert_fragment:Wf,lights_lambert_pars_fragment:Xf,lights_pars_begin:Yf,lights_toon_fragment:Zf,lights_toon_pars_fragment:$f,lights_phong_fragment:Jf,lights_phong_pars_fragment:Kf,lights_physical_fragment:jf,lights_physical_pars_fragment:Qf,lights_fragment_begin:tp,lights_fragment_maps:ep,lights_fragment_end:np,logdepthbuf_fragment:ip,logdepthbuf_pars_fragment:sp,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:op,map_fragment:ap,map_pars_fragment:cp,map_particle_fragment:lp,map_particle_pars_fragment:xp,metalnessmap_fragment:hp,metalnessmap_pars_fragment:up,morphinstance_vertex:dp,morphcolor_vertex:fp,morphnormal_vertex:pp,morphtarget_pars_vertex:mp,morphtarget_vertex:Ep,normal_fragment_begin:gp,normal_fragment_maps:vp,normal_pars_fragment:Ap,normal_pars_vertex:Cp,normal_vertex:yp,normalmap_pars_fragment:_p,clearcoat_normal_fragment_begin:Bp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Dp,opaque_fragment:bp,packing:Fp,premultiplied_alpha_fragment:Sp,project_vertex:Tp,dithering_fragment:Rp,dithering_pars_fragment:Pp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:kp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Np,shadowmap_vertex:Up,shadowmask_pars_fragment:Op,skinbase_vertex:zp,skinning_pars_vertex:Hp,skinning_vertex:Vp,skinnormal_vertex:Gp,specularmap_fragment:Wp,specularmap_pars_fragment:Xp,tonemapping_fragment:Yp,tonemapping_pars_fragment:qp,transmission_fragment:Zp,transmission_pars_fragment:$p,uv_pars_fragment:Jp,uv_pars_vertex:Kp,uv_vertex:jp,worldpos_vertex:Qp,background_vert:tm,background_frag:em,backgroundCube_vert:nm,backgroundCube_frag:im,cube_vert:sm,cube_frag:rm,depth_vert:om,depth_frag:am,distanceRGBA_vert:cm,distanceRGBA_frag:lm,equirect_vert:xm,equirect_frag:hm,linedashed_vert:um,linedashed_frag:dm,meshbasic_vert:fm,meshbasic_frag:pm,meshlambert_vert:mm,meshlambert_frag:Em,meshmatcap_vert:gm,meshmatcap_frag:vm,meshnormal_vert:Am,meshnormal_frag:Cm,meshphong_vert:ym,meshphong_frag:_m,meshphysical_vert:Bm,meshphysical_frag:Mm,meshtoon_vert:wm,meshtoon_frag:Dm,points_vert:bm,points_frag:Fm,shadow_vert:Sm,shadow_frag:Tm,sprite_vert:Rm,sprite_frag:Pm},dt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Dn={basic:{uniforms:We([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:We([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:We([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:We([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:We([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:We([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:We([dt.points,dt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:We([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:We([dt.common,dt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:We([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:We([dt.sprite,dt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:We([dt.common,dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:We([dt.lights,dt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Dn.physical={uniforms:We([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var xo={r:0,b:0,g:0},Ui=new ln,Im=new xe;function km(i,t,e,n,s,r,o){let a=new Ft(0),c=r===!0?0:1,l,x,h=null,u=0,f=null;function p(A){let g=A.isScene===!0?A.background:null;return g&&g.isTexture&&(g=(A.backgroundBlurriness>0?e:t).get(g)),g}function y(A){let g=!1,m=p(A);m===null?d(a,c):m&&m.isColor&&(d(m,1),g=!0);let B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(A,g){let m=p(g);m&&(m.isCubeTexture||m.mapping===Yo)?(x===void 0&&(x=new St(new Ae(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ks(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(B,C,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(x)),Ui.copy(g.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),x.material.uniforms.envMap.value=m,x.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(Ui)),x.material.toneMapped=te.getTransfer(m.colorSpace)!==ae,(h!==m||u!==m.version||f!==i.toneMapping)&&(x.material.needsUpdate=!0,h=m,u=m.version,f=i.toneMapping),x.layers.enableAll(),A.unshift(x,x.geometry,x.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new St(new Qn(2,2),new xn({name:"BackgroundMaterial",uniforms:ks(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=m,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=te.getTransfer(m.colorSpace)!==ae,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||u!==m.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=m,u=m.version,f=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function d(A,g){A.getRGB(xo,sh(i)),n.buffers.color.setClear(xo.r,xo.g,xo.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(A,g=1){a.set(A),c=g,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,d(a,c)},render:y,addToRenderList:E}}function Lm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(_,D,S,R,P){let L=!1,z=h(R,S,D);r!==z&&(r=z,l(r.object)),L=f(_,R,S,P),L&&p(_,R,S,P),P!==null&&t.update(P,i.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,m(_,D,S,R),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function x(_){return i.deleteVertexArray(_)}function h(_,D,S){let R=S.wireframe===!0,P=n[_.id];P===void 0&&(P={},n[_.id]=P);let L=P[D.id];L===void 0&&(L={},P[D.id]=L);let z=L[R];return z===void 0&&(z=u(c()),L[R]=z),z}function u(_){let D=[],S=[],R=[];for(let P=0;P<e;P++)D[P]=0,S[P]=0,R[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:S,attributeDivisors:R,object:_,attributes:{},index:null}}function f(_,D,S,R){let P=r.attributes,L=D.attributes,z=0,Z=S.getAttributes();for(let O in Z)if(Z[O].location>=0){let ot=P[O],ht=L[O];if(ht===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor)),ot===void 0||ot.attribute!==ht||ht&&ot.data!==ht.data)return!0;z++}return r.attributesNum!==z||r.index!==R}function p(_,D,S,R){let P={},L=D.attributes,z=0,Z=S.getAttributes();for(let O in Z)if(Z[O].location>=0){let ot=L[O];ot===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor));let ht={};ht.attribute=ot,ot&&ot.data&&(ht.data=ot.data),P[O]=ht,z++}r.attributes=P,r.attributesNum=z,r.index=R}function y(){let _=r.newAttributes;for(let D=0,S=_.length;D<S;D++)_[D]=0}function E(_){d(_,0)}function d(_,D){let S=r.newAttributes,R=r.enabledAttributes,P=r.attributeDivisors;S[_]=1,R[_]===0&&(i.enableVertexAttribArray(_),R[_]=1),P[_]!==D&&(i.vertexAttribDivisor(_,D),P[_]=D)}function A(){let _=r.newAttributes,D=r.enabledAttributes;for(let S=0,R=D.length;S<R;S++)D[S]!==_[S]&&(i.disableVertexAttribArray(S),D[S]=0)}function g(_,D,S,R,P,L,z){z===!0?i.vertexAttribIPointer(_,D,S,P,L):i.vertexAttribPointer(_,D,S,R,P,L)}function m(_,D,S,R){y();let P=R.attributes,L=S.getAttributes(),z=D.defaultAttributeValues;for(let Z in L){let O=L[Z];if(O.location>=0){let K=P[Z];if(K===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(K=_.instanceColor)),K!==void 0){let ot=K.normalized,ht=K.itemSize,xt=t.get(K);if(xt===void 0)continue;let Wt=xt.buffer,Q=xt.type,I=xt.bytesPerElement,W=Q===i.INT||Q===i.UNSIGNED_INT||K.gpuType===Sc;if(K.isInterleavedBufferAttribute){let k=K.data,X=k.stride,Y=K.offset;if(k.isInstancedInterleavedBuffer){for(let nt=0;nt<O.locationSize;nt++)d(O.location+nt,k.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let nt=0;nt<O.locationSize;nt++)E(O.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let nt=0;nt<O.locationSize;nt++)g(O.location+nt,ht/O.locationSize,Q,ot,X*I,(Y+ht/O.locationSize*nt)*I,W)}else{if(K.isInstancedBufferAttribute){for(let k=0;k<O.locationSize;k++)d(O.location+k,K.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let k=0;k<O.locationSize;k++)E(O.location+k);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let k=0;k<O.locationSize;k++)g(O.location+k,ht/O.locationSize,Q,ot,ht*I,ht/O.locationSize*k*I,W)}}else if(z!==void 0){let ot=z[Z];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(O.location,ot);break;case 3:i.vertexAttrib3fv(O.location,ot);break;case 4:i.vertexAttrib4fv(O.location,ot);break;default:i.vertexAttrib1fv(O.location,ot)}}}}A()}function B(){w();for(let _ in n){let D=n[_];for(let S in D){let R=D[S];for(let P in R)x(R[P].object),delete R[P];delete D[S]}delete n[_]}}function C(_){if(n[_.id]===void 0)return;let D=n[_.id];for(let S in D){let R=D[S];for(let P in R)x(R[P].object),delete R[P];delete D[S]}delete n[_.id]}function M(_){for(let D in n){let S=n[D];if(S[_.id]===void 0)continue;let R=S[_.id];for(let P in R)x(R[P].object),delete R[P];delete S[_.id]}}function w(){v(),o=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:v,dispose:B,releaseStatesOfGeometry:C,releaseStatesOfProgram:M,initAttributes:y,enableAttribute:E,disableUnusedAttributes:A}}function Nm(i,t,e){let n;function s(l){n=l}function r(l,x){i.drawArrays(n,l,x),e.update(x,n,1)}function o(l,x,h){h!==0&&(i.drawArraysInstanced(n,l,x,h),e.update(x,n,h))}function a(l,x,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,x,0,h);let f=0;for(let p=0;p<h;p++)f+=x[p];e.update(f,n,1)}function c(l,x,h,u){if(h===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)o(l[p],x[p],u[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,x,0,u,0,h);let p=0;for(let y=0;y<h;y++)p+=x[y]*u[y];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Um(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let M=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(M){return!(M!==An&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){let w=M===Br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==$n&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Sn&&!w)}function c(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",x=c(l);x!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",x,"instead."),l=x);let h=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),E=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),m=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=p>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:E,maxAttributes:d,maxVertexUniforms:A,maxVaryings:g,maxFragmentUniforms:m,vertexTextures:B,maxSamples:C}}function Om(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Yn,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let f=h.length!==0||u||n!==0||s;return s=u,n=h.length,f},this.beginShadows=function(){r=!0,x(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=x(h,u,0)},this.setState=function(h,u,f){let p=h.clippingPlanes,y=h.clipIntersection,E=h.clipShadows,d=i.get(h);if(!s||p===null||p.length===0||r&&!E)r?x(null):l();else{let A=r?0:n,g=A*4,m=d.clippingState||null;c.value=m,m=x(p,u,g,f);for(let B=0;B!==g;++B)m[B]=e[B];d.clippingState=m,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function x(h,u,f,p){let y=h!==null?h.length:0,E=null;if(y!==0){if(E=c.value,p!==!0||E===null){let d=f+y*4,A=u.matrixWorldInverse;a.getNormalMatrix(A),(E===null||E.length<d)&&(E=new Float32Array(d));for(let g=0,m=f;g!==y;++g,m+=4)o.copy(h[g]).applyMatrix4(A,a),o.normal.toArray(E,m),E[m+3]=o.constant}c.value=E,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,E}}function zm(i){let t=new WeakMap;function e(o,a){return a===E0?o.mapping=Ts:a===g0&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===E0||a===g0)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new tc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ko=class extends Po{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=x*this.view.offsetY,c=a-x*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ms=4,ux=[.125,.215,.35,.446,.526,.582],Vi=20,Qa=new ko,dx=new Ft,t0=null,e0=0,n0=0,i0=!1,zi=(1+Math.sqrt(5))/2,vs=1/zi,fx=[new U(-zi,vs,0),new U(zi,vs,0),new U(-vs,0,zi),new U(vs,0,zi),new U(0,zi,-vs),new U(0,zi,vs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Lo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){t0=this._renderer.getRenderTarget(),e0=this._renderer.getActiveCubeFace(),n0=this._renderer.getActiveMipmapLevel(),i0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ex(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(t0,e0,n0),this._renderer.xr.enabled=i0,t.scissorTest=!1,ho(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),t0=this._renderer.getRenderTarget(),e0=this._renderer.getActiveCubeFace(),n0=this._renderer.getActiveMipmapLevel(),i0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Br,format:An,colorSpace:Os,depthBuffer:!1},s=px(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=px(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hm(r)),this._blurMaterial=Vm(r,t,e)}return s}_compileMaterial(t){let e=new St(this._lodPlanes[0],t);this._renderer.compile(e,Qa)}_sceneToCubeUV(t,e,n,s){let a=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],x=this._renderer,h=x.autoClear,u=x.toneMapping;x.getClearColor(dx),x.toneMapping=mi,x.autoClear=!1;let f=new ve({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),p=new St(new Ae,f),y=!1,E=t.background;E?E.isColor&&(f.color.copy(E),t.background=null,y=!0):(f.color.copy(dx),y=!0);for(let d=0;d<6;d++){let A=d%3;A===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):A===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let g=this._cubeSize;ho(s,A*g,d>2?g:0,g,g),x.setRenderTarget(s),y&&x.render(p,a),x.render(t,a)}p.geometry.dispose(),p.material.dispose(),x.toneMapping=u,x.autoClear=h,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ts||t.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ex()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mx());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ho(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Qa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fx[(s-r-1)%fx.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let x=3,h=new St(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),y=r/p,E=isFinite(r)?1+Math.floor(x*y):Vi;E>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Vi}`);let d=[],A=0;for(let M=0;M<Vi;++M){let w=M/y,v=Math.exp(-w*w/2);d.push(v),M===0?A+=v:M<E&&(A+=2*v)}for(let M=0;M<d.length;M++)d[M]=d[M]/A;u.envMap.value=t.texture,u.samples.value=E,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-n;let m=this._sizeLods[s],B=3*m*(s>g-Ms?s-g+Ms:0),C=4*(this._cubeSize-m);ho(e,B,C,3*m,2*m),c.setRenderTarget(e),c.render(h,Qa)}};function Hm(i){let t=[],e=[],n=[],s=i,r=i-Ms+1+ux.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ms?c=ux[o-i+Ms-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),x=-l,h=1+l,u=[x,x,h,x,h,h,x,x,h,h,x,h],f=6,p=6,y=3,E=2,d=1,A=new Float32Array(y*p*f),g=new Float32Array(E*p*f),m=new Float32Array(d*p*f);for(let C=0;C<f;C++){let M=C%3*2/3-1,w=C>2?0:-1,v=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];A.set(v,y*p*C),g.set(u,E*p*C);let _=[C,C,C,C,C,C];m.set(_,d*p*C)}let B=new Me;B.setAttribute("position",new De(A,y)),B.setAttribute("uv",new De(g,E)),B.setAttribute("faceIndex",new De(m,d)),t.push(B),s>Ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function px(i,t,e){let n=new Jn(i,t,e);return n.texture.mapping=Yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vm(i,t,e){let n=new Float32Array(Vi),s=new U(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function mx(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ex(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Nc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===E0||c===g0,x=c===Ts||c===Rs;if(l||x){let h=t.get(a),u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Lo(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return l&&f&&f.height>0||x&&f&&s(f)?(e===null&&(e=new Lo(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let x=0;x<l;x++)a[x]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Wm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&fr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xm(i,t,e,n){let s={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);for(let p in u.morphAttributes){let y=u.morphAttributes[p];for(let E=0,d=y.length;E<d;E++)t.remove(y[E])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(h){let u=h.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let p in f){let y=f[p];for(let E=0,d=y.length;E<d;E++)t.update(y[E],i.ARRAY_BUFFER)}}function l(h){let u=[],f=h.index,p=h.attributes.position,y=0;if(f!==null){let A=f.array;y=f.version;for(let g=0,m=A.length;g<m;g+=3){let B=A[g+0],C=A[g+1],M=A[g+2];u.push(B,C,C,M,M,B)}}else if(p!==void 0){let A=p.array;y=p.version;for(let g=0,m=A.length/3-1;g<m;g+=3){let B=g+0,C=g+1,M=g+2;u.push(B,C,C,M,M,B)}}else return;let E=new(nh(u)?Ro:To)(u,1);E.version=y;let d=r.get(h);d&&t.remove(d),r.set(h,E)}function x(h){let u=r.get(h);if(u){let f=h.index;f!==null&&u.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:x}}function Ym(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,u*o,p),e.update(f,n,p))}function x(u,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let E=0;for(let d=0;d<p;d++)E+=f[d];e.update(E,n,1)}function h(u,f,p,y){if(p===0)return;let E=t.get("WEBGL_multi_draw");if(E===null)for(let d=0;d<u.length;d++)l(u[d]/o,f[d],y[d]);else{E.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,y,0,p);let d=0;for(let A=0;A<p;A++)d+=f[A]*y[A];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=x,this.renderMultiDrawInstances=h}function qm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zm(i,t,e){let n=new WeakMap,s=new le;function r(o,a,c){let l=o.morphTargetInfluences,x=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=x!==void 0?x.length:0,u=n.get(a);if(u===void 0||u.count!==h){let v=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",v)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,E=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],g=0;f===!0&&(g=1),p===!0&&(g=2),y===!0&&(g=3);let m=a.attributes.position.count*g,B=1;m>t.maxTextureSize&&(B=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let C=new Float32Array(m*B*4*h),M=new Fo(C,m,B,h);M.type=Sn,M.needsUpdate=!0;let w=g*4;for(let _=0;_<h;_++){let D=E[_],S=d[_],R=A[_],P=m*B*4*_;for(let L=0;L<D.count;L++){let z=L*w;f===!0&&(s.fromBufferAttribute(D,L),C[P+z+0]=s.x,C[P+z+1]=s.y,C[P+z+2]=s.z,C[P+z+3]=0),p===!0&&(s.fromBufferAttribute(S,L),C[P+z+4]=s.x,C[P+z+5]=s.y,C[P+z+6]=s.z,C[P+z+7]=0),y===!0&&(s.fromBufferAttribute(R,L),C[P+z+8]=s.x,C[P+z+9]=s.y,C[P+z+10]=s.z,C[P+z+11]=R.itemSize===4?s.w:1)}}u={count:h,texture:M,size:new Lt(m,B)},n.set(a,u),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function $m(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,x=c.geometry,h=t.get(c,x);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var No=class extends Ke{constructor(t,e,n,s,r,o,a,c,l,x=Ds){if(x!==Ds&&x!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&x===Ds&&(n=Xi),n===void 0&&x===Is&&(n=Ps),super(null,s,r,o,a,c,x,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},oh=new Ke,gx=new No(1,1),ah=new Fo,ch=new K0,lh=new Io,vx=[],Ax=[],Cx=new Float32Array(16),yx=new Float32Array(9),_x=new Float32Array(4);function zs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=vx[s];if(r===void 0&&(r=new Float32Array(s),vx[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zo(i,t){let e=Ax[t];e===void 0&&(e=new Int32Array(t),Ax[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function tE(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Se(e,n))return;_x.set(n),i.uniformMatrix2fv(this.addr,!1,_x),Te(e,n)}}function eE(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Se(e,n))return;yx.set(n),i.uniformMatrix3fv(this.addr,!1,yx),Te(e,n)}}function nE(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Se(e,n))return;Cx.set(n),i.uniformMatrix4fv(this.addr,!1,Cx),Te(e,n)}}function iE(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sE(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function rE(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function oE(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function aE(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cE(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function lE(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function xE(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function hE(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gx.compareFunction=eh,r=gx):r=oh,e.setTexture2D(t||r,s)}function uE(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ch,s)}function dE(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||lh,s)}function fE(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ah,s)}function pE(i){switch(i){case 5126:return Jm;case 35664:return Km;case 35665:return jm;case 35666:return Qm;case 35674:return tE;case 35675:return eE;case 35676:return nE;case 5124:case 35670:return iE;case 35667:case 35671:return sE;case 35668:case 35672:return rE;case 35669:case 35673:return oE;case 5125:return aE;case 36294:return cE;case 36295:return lE;case 36296:return xE;case 35678:case 36198:case 36298:case 36306:case 35682:return hE;case 35679:case 36299:case 36307:return uE;case 35680:case 36300:case 36308:case 36293:return dE;case 36289:case 36303:case 36311:case 36292:return fE}}function mE(i,t){i.uniform1fv(this.addr,t)}function EE(i,t){let e=zs(t,this.size,2);i.uniform2fv(this.addr,e)}function gE(i,t){let e=zs(t,this.size,3);i.uniform3fv(this.addr,e)}function vE(i,t){let e=zs(t,this.size,4);i.uniform4fv(this.addr,e)}function AE(i,t){let e=zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function CE(i,t){let e=zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yE(i,t){let e=zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _E(i,t){i.uniform1iv(this.addr,t)}function BE(i,t){i.uniform2iv(this.addr,t)}function ME(i,t){i.uniform3iv(this.addr,t)}function wE(i,t){i.uniform4iv(this.addr,t)}function DE(i,t){i.uniform1uiv(this.addr,t)}function bE(i,t){i.uniform2uiv(this.addr,t)}function FE(i,t){i.uniform3uiv(this.addr,t)}function SE(i,t){i.uniform4uiv(this.addr,t)}function TE(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||oh,r[o])}function RE(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ch,r[o])}function PE(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||lh,r[o])}function IE(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ah,r[o])}function kE(i){switch(i){case 5126:return mE;case 35664:return EE;case 35665:return gE;case 35666:return vE;case 35674:return AE;case 35675:return CE;case 35676:return yE;case 5124:case 35670:return _E;case 35667:case 35671:return BE;case 35668:case 35672:return ME;case 35669:case 35673:return wE;case 5125:return DE;case 36294:return bE;case 36295:return FE;case 36296:return SE;case 35678:case 36198:case 36298:case 36306:case 35682:return TE;case 35679:case 36299:case 36307:return RE;case 35680:case 36300:case 36308:case 36293:return PE;case 36289:case 36303:case 36311:case 36292:return IE}}var ec=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pE(e.type)}},nc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kE(e.type)}},ic=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},s0=/(\w+)(\])?(\[|\.)?/g;function Bx(i,t){i.seq.push(t),i.map[t.id]=t}function LE(i,t,e){let n=i.name,s=n.length;for(s0.lastIndex=0;;){let r=s0.exec(n),o=s0.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Bx(e,l===void 0?new ec(a,i,t):new nc(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new ic(a),Bx(e,h)),e=h}}}var Fs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);LE(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Mx(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var NE=37297,UE=0;function OE(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var wx=new Gt;function zE(i){te._getMatrix(wx,te.workingColorSpace,i);let t=`mat3( ${wx.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case qo:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Dx(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+OE(i.getShaderSource(t),o)}else return s}function HE(i,t){let e=zE(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function VE(i,t){let e;switch(t){case dd:e="Linear";break;case fd:e="Reinhard";break;case pd:e="Cineon";break;case md:e="ACESFilmic";break;case gd:e="AgX";break;case Fc:e="Neutral";break;case Ed:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uo=new U;function GE(){te.getLuminanceCoefficients(uo);let i=uo.x.toFixed(4),t=uo.y.toFixed(4),e=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function XE(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function YE(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function pr(i){return i!==""}function bx(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fx(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qE=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(i){return i.replace(qE,$E)}var ZE=new Map;function $E(i,t){let e=Yt[t];if(e===void 0){let n=ZE.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sc(e)}var JE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sx(i){return i.replace(JE,KE)}function KE(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tx(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jE(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gx?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function QE(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case Rs:t="ENVMAP_TYPE_CUBE";break;case Yo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function t1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function e1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bc:t="ENVMAP_BLENDING_MULTIPLY";break;case hd:t="ENVMAP_BLENDING_MIX";break;case ud:t="ENVMAP_BLENDING_ADD";break}return t}function n1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function i1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=jE(e),l=QE(e),x=t1(e),h=e1(e),u=n1(e),f=WE(e),p=XE(r),y=s.createProgram(),E,d,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(E=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(pr).join(`
`),E.length>0&&(E+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(pr).join(`
`),d.length>0&&(d+=`
`)):(E=[Tx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+x:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),d=[Tx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+x:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==mi?VE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,HE("linearToOutputTexel",e.outputColorSpace),GE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),o=sc(o),o=bx(o,e),o=Fx(o,e),a=sc(a),a=bx(a,e),a=Fx(a,e),o=Sx(o),a=Sx(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,E=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,d=["#define varying in",e.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let g=A+E+o,m=A+d+a,B=Mx(s,s.VERTEX_SHADER,g),C=Mx(s,s.FRAGMENT_SHADER,m);s.attachShader(y,B),s.attachShader(y,C),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function M(D){if(i.debug.checkShaderErrors){let S=s.getProgramInfoLog(y).trim(),R=s.getShaderInfoLog(B).trim(),P=s.getShaderInfoLog(C).trim(),L=!0,z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,B,C);else{let Z=Dx(s,B,"vertex"),O=Dx(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+S+`
`+Z+`
`+O)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(R===""||P==="")&&(z=!1);z&&(D.diagnostics={runnable:L,programLog:S,vertexShader:{log:R,prefix:E},fragmentShader:{log:P,prefix:d}})}s.deleteShader(B),s.deleteShader(C),w=new Fs(s,y),v=YE(s,y)}let w;this.getUniforms=function(){return w===void 0&&M(this),w};let v;this.getAttributes=function(){return v===void 0&&M(this),v};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(y,NE)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=UE++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=B,this.fragmentShader=C,this}var s1=0,rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new oc(t),e.set(t,n)),n}},oc=class{constructor(t){this.id=s1++,this.code=t,this.usedTimes=0}};function r1(i,t,e,n,s,r,o){let a=new So,c=new rc,l=new Set,x=[],h=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return l.add(v),v===0?"uv":`uv${v}`}function E(v,_,D,S,R){let P=S.fog,L=R.geometry,z=v.isMeshStandardMaterial?S.environment:null,Z=(v.isMeshStandardMaterial?e:t).get(v.envMap||z),O=Z&&Z.mapping===Yo?Z.image.height:null,K=p[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let ot=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ht=ot!==void 0?ot.length:0,xt=0;L.morphAttributes.position!==void 0&&(xt=1),L.morphAttributes.normal!==void 0&&(xt=2),L.morphAttributes.color!==void 0&&(xt=3);let Wt,Q,I,W;if(K){let re=Dn[K];Wt=re.vertexShader,Q=re.fragmentShader}else Wt=v.vertexShader,Q=v.fragmentShader,c.update(v),I=c.getVertexShaderID(v),W=c.getFragmentShaderID(v);let k=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),Y=R.isInstancedMesh===!0,nt=R.isBatchedMesh===!0,ut=!!v.map,at=!!v.matcap,Tt=!!Z,N=!!v.aoMap,yt=!!v.lightMap,Rt=!!v.bumpMap,_t=!!v.normalMap,It=!!v.displacementMap,qt=!!v.emissiveMap,Pt=!!v.metalnessMap,T=!!v.roughnessMap,b=v.anisotropy>0,q=v.clearcoat>0,it=v.dispersion>0,rt=v.iridescence>0,et=v.sheen>0,Dt=v.transmission>0,pt=b&&!!v.anisotropyMap,vt=q&&!!v.clearcoatMap,Qt=q&&!!v.clearcoatNormalMap,ct=q&&!!v.clearcoatRoughnessMap,At=rt&&!!v.iridescenceMap,kt=rt&&!!v.iridescenceThicknessMap,Nt=et&&!!v.sheenColorMap,Ct=et&&!!v.sheenRoughnessMap,Kt=!!v.specularMap,Xt=!!v.specularColorMap,he=!!v.specularIntensityMap,H=Dt&&!!v.transmissionMap,ft=Dt&&!!v.thicknessMap,tt=!!v.gradientMap,st=!!v.alphaMap,gt=v.alphaTest>0,mt=!!v.alphaHash,zt=!!v.extensions,_e=mi;v.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(_e=i.toneMapping);let Le={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:Wt,fragmentShader:Q,defines:v.defines,customVertexShaderID:I,customFragmentShaderID:W,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:nt,batchingColor:nt&&R._colorsTexture!==null,instancing:Y,instancingColor:Y&&R.instanceColor!==null,instancingMorph:Y&&R.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Os,alphaToCoverage:!!v.alphaToCoverage,map:ut,matcap:at,envMap:Tt,envMapMode:Tt&&Z.mapping,envMapCubeUVHeight:O,aoMap:N,lightMap:yt,bumpMap:Rt,normalMap:_t,displacementMap:u&&It,emissiveMap:qt,normalMapObjectSpace:_t&&v.normalMapType===yd,normalMapTangentSpace:_t&&v.normalMapType===th,metalnessMap:Pt,roughnessMap:T,anisotropy:b,anisotropyMap:pt,clearcoat:q,clearcoatMap:vt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:ct,dispersion:it,iridescence:rt,iridescenceMap:At,iridescenceThicknessMap:kt,sheen:et,sheenColorMap:Nt,sheenRoughnessMap:Ct,specularMap:Kt,specularColorMap:Xt,specularIntensityMap:he,transmission:Dt,transmissionMap:H,thicknessMap:ft,gradientMap:tt,opaque:v.transparent===!1&&v.blending===ws&&v.alphaToCoverage===!1,alphaMap:st,alphaTest:gt,alphaHash:mt,combine:v.combine,mapUv:ut&&y(v.map.channel),aoMapUv:N&&y(v.aoMap.channel),lightMapUv:yt&&y(v.lightMap.channel),bumpMapUv:Rt&&y(v.bumpMap.channel),normalMapUv:_t&&y(v.normalMap.channel),displacementMapUv:It&&y(v.displacementMap.channel),emissiveMapUv:qt&&y(v.emissiveMap.channel),metalnessMapUv:Pt&&y(v.metalnessMap.channel),roughnessMapUv:T&&y(v.roughnessMap.channel),anisotropyMapUv:pt&&y(v.anisotropyMap.channel),clearcoatMapUv:vt&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&y(v.sheenRoughnessMap.channel),specularMapUv:Kt&&y(v.specularMap.channel),specularColorMapUv:Xt&&y(v.specularColorMap.channel),specularIntensityMapUv:he&&y(v.specularIntensityMap.channel),transmissionMapUv:H&&y(v.transmissionMap.channel),thicknessMapUv:ft&&y(v.thicknessMap.channel),alphaMapUv:st&&y(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(_t||b),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!L.attributes.uv&&(ut||st),fog:!!P,useFog:v.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:X,skinning:R.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:xt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:ut&&v.map.isVideoTexture===!0&&te.getTransfer(v.map.colorSpace)===ae,decodeVideoTextureEmissive:qt&&v.emissiveMap.isVideoTexture===!0&&te.getTransfer(v.emissiveMap.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Oe,flipSided:v.side===ze,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:zt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&v.extensions.multiDraw===!0||nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function d(v){let _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)_.push(D),_.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(A(_,v),g(_,v),_.push(i.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function A(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function g(v,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),v.push(a.mask)}function m(v){let _=p[v.type],D;if(_){let S=Dn[_];D=Zd.clone(S.uniforms)}else D=v.uniforms;return D}function B(v,_){let D;for(let S=0,R=x.length;S<R;S++){let P=x[S];if(P.cacheKey===_){D=P,++D.usedTimes;break}}return D===void 0&&(D=new i1(i,_,v,r),x.push(D)),D}function C(v){if(--v.usedTimes===0){let _=x.indexOf(v);x[_]=x[x.length-1],x.pop(),v.destroy()}}function M(v){c.remove(v)}function w(){c.dispose()}return{getParameters:E,getProgramCacheKey:d,getUniforms:m,acquireProgram:B,releaseProgram:C,releaseShaderCache:M,programs:x,dispose:w}}function o1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function a1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Rx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Px(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,u,f,p,y,E){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:u,material:f,groupOrder:p,renderOrder:h.renderOrder,z:y,group:E},i[t]=d):(d.id=h.id,d.object=h,d.geometry=u,d.material=f,d.groupOrder=p,d.renderOrder=h.renderOrder,d.z=y,d.group=E),t++,d}function a(h,u,f,p,y,E){let d=o(h,u,f,p,y,E);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):e.push(d)}function c(h,u,f,p,y,E){let d=o(h,u,f,p,y,E);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):e.unshift(d)}function l(h,u){e.length>1&&e.sort(h||a1),n.length>1&&n.sort(u||Rx),s.length>1&&s.sort(u||Rx)}function x(){for(let h=t,u=i.length;h<u;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:x,sort:l}}function c1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Px,i.set(n,[o])):s>=r.length?(o=new Px,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function l1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ft};break;case"SpotLight":e={position:new U,direction:new U,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function x1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var h1=0;function u1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function d1(i){let t=new l1,e=x1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new xe,o=new xe;function a(l){let x=0,h=0,u=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,p=0,y=0,E=0,d=0,A=0,g=0,m=0,B=0,C=0,M=0;l.sort(u1);for(let v=0,_=l.length;v<_;v++){let D=l[v],S=D.color,R=D.intensity,P=D.distance,L=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)x+=S.r*R,h+=S.g*R,u+=S.b*R;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],R);M++}else if(D.isDirectionalLight){let z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,O=e.get(D);O.shadowIntensity=Z.intensity,O.shadowBias=Z.bias,O.shadowNormalBias=Z.normalBias,O.shadowRadius=Z.radius,O.shadowMapSize=Z.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=L,n.directionalShadowMatrix[f]=D.shadow.matrix,A++}n.directional[f]=z,f++}else if(D.isSpotLight){let z=t.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(S).multiplyScalar(R),z.distance=P,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[y]=z;let Z=D.shadow;if(D.map&&(n.spotLightMap[B]=D.map,B++,Z.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[y]=Z.matrix,D.castShadow){let O=e.get(D);O.shadowIntensity=Z.intensity,O.shadowBias=Z.bias,O.shadowNormalBias=Z.normalBias,O.shadowRadius=Z.radius,O.shadowMapSize=Z.mapSize,n.spotShadow[y]=O,n.spotShadowMap[y]=L,m++}y++}else if(D.isRectAreaLight){let z=t.get(D);z.color.copy(S).multiplyScalar(R),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[E]=z,E++}else if(D.isPointLight){let z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){let Z=D.shadow,O=e.get(D);O.shadowIntensity=Z.intensity,O.shadowBias=Z.bias,O.shadowNormalBias=Z.normalBias,O.shadowRadius=Z.radius,O.shadowMapSize=Z.mapSize,O.shadowCameraNear=Z.camera.near,O.shadowCameraFar=Z.camera.far,n.pointShadow[p]=O,n.pointShadowMap[p]=L,n.pointShadowMatrix[p]=D.shadow.matrix,g++}n.point[p]=z,p++}else if(D.isHemisphereLight){let z=t.get(D);z.skyColor.copy(D.color).multiplyScalar(R),z.groundColor.copy(D.groundColor).multiplyScalar(R),n.hemi[d]=z,d++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=x,n.ambient[1]=h,n.ambient[2]=u;let w=n.hash;(w.directionalLength!==f||w.pointLength!==p||w.spotLength!==y||w.rectAreaLength!==E||w.hemiLength!==d||w.numDirectionalShadows!==A||w.numPointShadows!==g||w.numSpotShadows!==m||w.numSpotMaps!==B||w.numLightProbes!==M)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=E,n.point.length=p,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=m,n.spotShadowMap.length=m,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=m+B-C,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=M,w.directionalLength=f,w.pointLength=p,w.spotLength=y,w.rectAreaLength=E,w.hemiLength=d,w.numDirectionalShadows=A,w.numPointShadows=g,w.numSpotShadows=m,w.numSpotMaps=B,w.numLightProbes=M,n.version=h1++)}function c(l,x){let h=0,u=0,f=0,p=0,y=0,E=x.matrixWorldInverse;for(let d=0,A=l.length;d<A;d++){let g=l[d];if(g.isDirectionalLight){let m=n.directional[h];m.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),m.direction.sub(s),m.direction.transformDirection(E),h++}else if(g.isSpotLight){let m=n.spot[f];m.position.setFromMatrixPosition(g.matrixWorld),m.position.applyMatrix4(E),m.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),m.direction.sub(s),m.direction.transformDirection(E),f++}else if(g.isRectAreaLight){let m=n.rectArea[p];m.position.setFromMatrixPosition(g.matrixWorld),m.position.applyMatrix4(E),o.identity(),r.copy(g.matrixWorld),r.premultiply(E),o.extractRotation(r),m.halfWidth.set(g.width*.5,0,0),m.halfHeight.set(0,g.height*.5,0),m.halfWidth.applyMatrix4(o),m.halfHeight.applyMatrix4(o),p++}else if(g.isPointLight){let m=n.point[u];m.position.setFromMatrixPosition(g.matrixWorld),m.position.applyMatrix4(E),u++}else if(g.isHemisphereLight){let m=n.hemi[y];m.direction.setFromMatrixPosition(g.matrixWorld),m.direction.transformDirection(E),y++}}}return{setup:a,setupView:c,state:n}}function Ix(i){let t=new d1(i),e=[],n=[];function s(x){l.camera=x,e.length=0,n.length=0}function r(x){e.push(x)}function o(x){n.push(x)}function a(){t.setup(e)}function c(x){t.setupView(e,x)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function f1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ix(i),t.set(s,[a])):r>=o.length?(a=new Ix(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ac=class extends Ci{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cc=class extends Ci{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},p1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function E1(i,t,e){let n=new gr,s=new Lt,r=new Lt,o=new le,a=new ac({depthPacking:Cd}),c=new cc,l={},x=e.maxTextureSize,h={[gi]:ze,[ze]:gi,[Oe]:Oe},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:p1,fragmentShader:m1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Me;p.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new St(p,u),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gx;let d=this.type;this.render=function(C,M,w){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||C.length===0)return;let v=i.getRenderTarget(),_=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),S=i.state;S.setBlending(pi),S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);let R=d!==Xn&&this.type===Xn,P=d===Xn&&this.type!==Xn;for(let L=0,z=C.length;L<z;L++){let Z=C[L],O=Z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let K=O.getFrameExtents();if(s.multiply(K),r.copy(O.mapSize),(s.x>x||s.y>x)&&(s.x>x&&(r.x=Math.floor(x/K.x),s.x=r.x*K.x,O.mapSize.x=r.x),s.y>x&&(r.y=Math.floor(x/K.y),s.y=r.y*K.y,O.mapSize.y=r.y)),O.map===null||R===!0||P===!0){let ht=this.type!==Xn?{minFilter:sn,magFilter:sn}:{};O.map!==null&&O.map.dispose(),O.map=new Jn(s.x,s.y,ht),O.map.texture.name=Z.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let ot=O.getViewportCount();for(let ht=0;ht<ot;ht++){let xt=O.getViewport(ht);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),S.viewport(o),O.updateMatrices(Z,ht),n=O.getFrustum(),m(M,w,O.camera,Z,this.type)}O.isPointLightShadow!==!0&&this.type===Xn&&A(O,w),O.needsUpdate=!1}d=this.type,E.needsUpdate=!1,i.setRenderTarget(v,_,D)};function A(C,M){let w=t.update(y);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Jn(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(M,null,w,u,y,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(M,null,w,f,y,null)}function g(C,M,w,v){let _=null,D=w.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)_=D;else if(_=w.isPointLight===!0?c:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){let S=_.uuid,R=M.uuid,P=l[S];P===void 0&&(P={},l[S]=P);let L=P[R];L===void 0&&(L=_.clone(),P[R]=L,M.addEventListener("dispose",B)),_=L}if(_.visible=M.visible,_.wireframe=M.wireframe,v===Xn?_.side=M.shadowSide!==null?M.shadowSide:M.side:_.side=M.shadowSide!==null?M.shadowSide:h[M.side],_.alphaMap=M.alphaMap,_.alphaTest=M.alphaTest,_.map=M.map,_.clipShadows=M.clipShadows,_.clippingPlanes=M.clippingPlanes,_.clipIntersection=M.clipIntersection,_.displacementMap=M.displacementMap,_.displacementScale=M.displacementScale,_.displacementBias=M.displacementBias,_.wireframeLinewidth=M.wireframeLinewidth,_.linewidth=M.linewidth,w.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let S=i.properties.get(_);S.light=w}return _}function m(C,M,w,v,_){if(C.visible===!1)return;if(C.layers.test(M.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===Xn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,C.matrixWorld);let R=t.update(C),P=C.material;if(Array.isArray(P)){let L=R.groups;for(let z=0,Z=L.length;z<Z;z++){let O=L[z],K=P[O.materialIndex];if(K&&K.visible){let ot=g(C,K,v,_);C.onBeforeShadow(i,C,M,w,R,ot,O),i.renderBufferDirect(w,null,R,ot,C,O),C.onAfterShadow(i,C,M,w,R,ot,O)}}}else if(P.visible){let L=g(C,P,v,_);C.onBeforeShadow(i,C,M,w,R,L,null),i.renderBufferDirect(w,null,R,L,C,null),C.onAfterShadow(i,C,M,w,R,L,null)}}let S=C.children;for(let R=0,P=S.length;R<P;R++)m(S[R],M,w,v,_)}function B(C){C.target.removeEventListener("dispose",B);for(let w in l){let v=l[w],_=C.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}var g1={[x0]:h0,[u0]:p0,[d0]:m0,[Ss]:f0,[h0]:x0,[p0]:u0,[m0]:d0,[f0]:Ss};function v1(i,t){function e(){let H=!1,ft=new le,tt=null,st=new le(0,0,0,0);return{setMask:function(gt){tt!==gt&&!H&&(i.colorMask(gt,gt,gt,gt),tt=gt)},setLocked:function(gt){H=gt},setClear:function(gt,mt,zt,_e,Le){Le===!0&&(gt*=_e,mt*=_e,zt*=_e),ft.set(gt,mt,zt,_e),st.equals(ft)===!1&&(i.clearColor(gt,mt,zt,_e),st.copy(ft))},reset:function(){H=!1,tt=null,st.set(-1,0,0,0)}}}function n(){let H=!1,ft=!1,tt=null,st=null,gt=null;return{setReversed:function(mt){if(ft!==mt){let zt=t.get("EXT_clip_control");ft?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);let _e=gt;gt=null,this.setClear(_e)}ft=mt},getReversed:function(){return ft},setTest:function(mt){mt?k(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(mt){tt!==mt&&!H&&(i.depthMask(mt),tt=mt)},setFunc:function(mt){if(ft&&(mt=g1[mt]),st!==mt){switch(mt){case x0:i.depthFunc(i.NEVER);break;case h0:i.depthFunc(i.ALWAYS);break;case u0:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case d0:i.depthFunc(i.EQUAL);break;case f0:i.depthFunc(i.GEQUAL);break;case p0:i.depthFunc(i.GREATER);break;case m0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=mt}},setLocked:function(mt){H=mt},setClear:function(mt){gt!==mt&&(ft&&(mt=1-mt),i.clearDepth(mt),gt=mt)},reset:function(){H=!1,tt=null,st=null,gt=null,ft=!1}}}function s(){let H=!1,ft=null,tt=null,st=null,gt=null,mt=null,zt=null,_e=null,Le=null;return{setTest:function(re){H||(re?k(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(re){ft!==re&&!H&&(i.stencilMask(re),ft=re)},setFunc:function(re,dn,Ln){(tt!==re||st!==dn||gt!==Ln)&&(i.stencilFunc(re,dn,Ln),tt=re,st=dn,gt=Ln)},setOp:function(re,dn,Ln){(mt!==re||zt!==dn||_e!==Ln)&&(i.stencilOp(re,dn,Ln),mt=re,zt=dn,_e=Ln)},setLocked:function(re){H=re},setClear:function(re){Le!==re&&(i.clearStencil(re),Le=re)},reset:function(){H=!1,ft=null,tt=null,st=null,gt=null,mt=null,zt=null,_e=null,Le=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,x={},h={},u=new WeakMap,f=[],p=null,y=!1,E=null,d=null,A=null,g=null,m=null,B=null,C=null,M=new Ft(0,0,0),w=0,v=!1,_=null,D=null,S=null,R=null,P=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Z=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(O)[1]),z=Z>=1):O.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),z=Z>=2);let K=null,ot={},ht=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Wt=new le().fromArray(ht),Q=new le().fromArray(xt);function I(H,ft,tt,st){let gt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(H,mt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<tt;zt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(ft+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return mt}let W={};W[i.TEXTURE_2D]=I(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=I(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=I(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=I(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(i.DEPTH_TEST),o.setFunc(Ss),Rt(!1),_t(Ul),k(i.CULL_FACE),N(pi);function k(H){x[H]!==!0&&(i.enable(H),x[H]=!0)}function X(H){x[H]!==!1&&(i.disable(H),x[H]=!1)}function Y(H,ft){return h[H]!==ft?(i.bindFramebuffer(H,ft),h[H]=ft,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ft),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function nt(H,ft){let tt=f,st=!1;if(H){tt=u.get(ft),tt===void 0&&(tt=[],u.set(ft,tt));let gt=H.textures;if(tt.length!==gt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,zt=gt.length;mt<zt;mt++)tt[mt]=i.COLOR_ATTACHMENT0+mt;tt.length=gt.length,st=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,st=!0);st&&i.drawBuffers(tt)}function ut(H){return p!==H?(i.useProgram(H),p=H,!0):!1}let at={[Hi]:i.FUNC_ADD,[Zu]:i.FUNC_SUBTRACT,[$u]:i.FUNC_REVERSE_SUBTRACT};at[Ju]=i.MIN,at[Ku]=i.MAX;let Tt={[ju]:i.ZERO,[Qu]:i.ONE,[td]:i.SRC_COLOR,[c0]:i.SRC_ALPHA,[od]:i.SRC_ALPHA_SATURATE,[sd]:i.DST_COLOR,[nd]:i.DST_ALPHA,[ed]:i.ONE_MINUS_SRC_COLOR,[l0]:i.ONE_MINUS_SRC_ALPHA,[rd]:i.ONE_MINUS_DST_COLOR,[id]:i.ONE_MINUS_DST_ALPHA,[ad]:i.CONSTANT_COLOR,[cd]:i.ONE_MINUS_CONSTANT_COLOR,[ld]:i.CONSTANT_ALPHA,[xd]:i.ONE_MINUS_CONSTANT_ALPHA};function N(H,ft,tt,st,gt,mt,zt,_e,Le,re){if(H===pi){y===!0&&(X(i.BLEND),y=!1);return}if(y===!1&&(k(i.BLEND),y=!0),H!==qu){if(H!==E||re!==v){if((d!==Hi||m!==Hi)&&(i.blendEquation(i.FUNC_ADD),d=Hi,m=Hi),re)switch(H){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFunc(i.ONE,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}A=null,g=null,B=null,C=null,M.set(0,0,0),w=0,E=H,v=re}return}gt=gt||ft,mt=mt||tt,zt=zt||st,(ft!==d||gt!==m)&&(i.blendEquationSeparate(at[ft],at[gt]),d=ft,m=gt),(tt!==A||st!==g||mt!==B||zt!==C)&&(i.blendFuncSeparate(Tt[tt],Tt[st],Tt[mt],Tt[zt]),A=tt,g=st,B=mt,C=zt),(_e.equals(M)===!1||Le!==w)&&(i.blendColor(_e.r,_e.g,_e.b,Le),M.copy(_e),w=Le),E=H,v=!1}function yt(H,ft){H.side===Oe?X(i.CULL_FACE):k(i.CULL_FACE);let tt=H.side===ze;ft&&(tt=!tt),Rt(tt),H.blending===ws&&H.transparent===!1?N(pi):N(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let st=H.stencilWrite;a.setTest(st),st&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),qt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(H){_!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),_=H)}function _t(H){H!==Xu?(k(i.CULL_FACE),H!==D&&(H===Ul?i.cullFace(i.BACK):H===Yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),D=H}function It(H){H!==S&&(z&&i.lineWidth(H),S=H)}function qt(H,ft,tt){H?(k(i.POLYGON_OFFSET_FILL),(R!==ft||P!==tt)&&(i.polygonOffset(ft,tt),R=ft,P=tt)):X(i.POLYGON_OFFSET_FILL)}function Pt(H){H?k(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function T(H){H===void 0&&(H=i.TEXTURE0+L-1),K!==H&&(i.activeTexture(H),K=H)}function b(H,ft,tt){tt===void 0&&(K===null?tt=i.TEXTURE0+L-1:tt=K);let st=ot[tt];st===void 0&&(st={type:void 0,texture:void 0},ot[tt]=st),(st.type!==H||st.texture!==ft)&&(K!==tt&&(i.activeTexture(tt),K=tt),i.bindTexture(H,ft||W[H]),st.type=H,st.texture=ft)}function q(){let H=ot[K];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function it(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Nt(H){Wt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Wt.copy(H))}function Ct(H){Q.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Q.copy(H))}function Kt(H,ft){let tt=l.get(ft);tt===void 0&&(tt=new WeakMap,l.set(ft,tt));let st=tt.get(H);st===void 0&&(st=i.getUniformBlockIndex(ft,H.name),tt.set(H,st))}function Xt(H,ft){let st=l.get(ft).get(H);c.get(ft)!==st&&(i.uniformBlockBinding(ft,st,H.__bindingPointIndex),c.set(ft,st))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),x={},K=null,ot={},h={},u=new WeakMap,f=[],p=null,y=!1,E=null,d=null,A=null,g=null,m=null,B=null,C=null,M=new Ft(0,0,0),w=0,v=!1,_=null,D=null,S=null,R=null,P=null,Wt.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:X,bindFramebuffer:Y,drawBuffers:nt,useProgram:ut,setBlending:N,setMaterial:yt,setFlipSided:Rt,setCullFace:_t,setLineWidth:It,setPolygonOffset:qt,setScissorTest:Pt,activeTexture:T,bindTexture:b,unbindTexture:q,compressedTexImage2D:it,compressedTexImage3D:rt,texImage2D:At,texImage3D:kt,updateUBOMapping:Kt,uniformBlockBinding:Xt,texStorage2D:Qt,texStorage3D:ct,texSubImage2D:et,texSubImage3D:Dt,compressedTexSubImage2D:pt,compressedTexSubImage3D:vt,scissor:Nt,viewport:Ct,reset:he}}function kx(i,t,e,n){let s=A1(n);switch(e){case Zx:return i*t;case Jx:return i*t;case Kx:return i*t*2;case Pc:return i*t/s.components*s.byteLength;case Ic:return i*t/s.components*s.byteLength;case jx:return i*t*2/s.components*s.byteLength;case kc:return i*t*2/s.components*s.byteLength;case $x:return i*t*3/s.components*s.byteLength;case An:return i*t*4/s.components*s.byteLength;case Lc:return i*t*4/s.components*s.byteLength;case vo:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Co:case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case C0:case _0:return Math.max(i,16)*Math.max(t,8)/4;case A0:case y0:return Math.max(i,8)*Math.max(t,8)/2;case B0:case M0:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case w0:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case D0:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case b0:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case F0:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case S0:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case T0:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case R0:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case P0:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case I0:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case k0:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case L0:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case N0:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case U0:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case O0:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case z0:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _o:case H0:case V0:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qx:case G0:return Math.ceil(i/4)*Math.ceil(t/4)*8;case W0:case X0:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function A1(i){switch(i){case $n:case Xx:return{byteLength:1,components:1};case Er:case Yx:case Br:return{byteLength:2,components:1};case Tc:case Rc:return{byteLength:2,components:4};case Xi:case Sc:case Sn:return{byteLength:4,components:1};case qx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function C1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Lt,x=new WeakMap,h,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,b){return f?new OffscreenCanvas(T,b):Do("canvas")}function y(T,b,q){let it=1,rt=Pt(T);if((rt.width>q||rt.height>q)&&(it=q/Math.max(rt.width,rt.height)),it<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let et=Math.floor(it*rt.width),Dt=Math.floor(it*rt.height);h===void 0&&(h=p(et,Dt));let pt=b?p(et,Dt):h;return pt.width=et,pt.height=Dt,pt.getContext("2d").drawImage(T,0,0,et,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+et+"x"+Dt+")."),pt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),T;return T}function E(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(T,b,q,it,rt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let et=b;if(b===i.RED&&(q===i.FLOAT&&(et=i.R32F),q===i.HALF_FLOAT&&(et=i.R16F),q===i.UNSIGNED_BYTE&&(et=i.R8)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.R8UI),q===i.UNSIGNED_SHORT&&(et=i.R16UI),q===i.UNSIGNED_INT&&(et=i.R32UI),q===i.BYTE&&(et=i.R8I),q===i.SHORT&&(et=i.R16I),q===i.INT&&(et=i.R32I)),b===i.RG&&(q===i.FLOAT&&(et=i.RG32F),q===i.HALF_FLOAT&&(et=i.RG16F),q===i.UNSIGNED_BYTE&&(et=i.RG8)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RG8UI),q===i.UNSIGNED_SHORT&&(et=i.RG16UI),q===i.UNSIGNED_INT&&(et=i.RG32UI),q===i.BYTE&&(et=i.RG8I),q===i.SHORT&&(et=i.RG16I),q===i.INT&&(et=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RGB8UI),q===i.UNSIGNED_SHORT&&(et=i.RGB16UI),q===i.UNSIGNED_INT&&(et=i.RGB32UI),q===i.BYTE&&(et=i.RGB8I),q===i.SHORT&&(et=i.RGB16I),q===i.INT&&(et=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),q===i.UNSIGNED_INT&&(et=i.RGBA32UI),q===i.BYTE&&(et=i.RGBA8I),q===i.SHORT&&(et=i.RGBA16I),q===i.INT&&(et=i.RGBA32I)),b===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),b===i.RGBA){let Dt=rt?qo:te.getTransfer(it);q===i.FLOAT&&(et=i.RGBA32F),q===i.HALF_FLOAT&&(et=i.RGBA16F),q===i.UNSIGNED_BYTE&&(et=Dt===ae?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function m(T,b){let q;return T?b===null||b===Xi||b===Ps?q=i.DEPTH24_STENCIL8:b===Sn?q=i.DEPTH32F_STENCIL8:b===Er&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xi||b===Ps?q=i.DEPTH_COMPONENT24:b===Sn?q=i.DEPTH_COMPONENT32F:b===Er&&(q=i.DEPTH_COMPONENT16),q}function B(T,b){return E(T)===!0||T.isFramebufferTexture&&T.minFilter!==sn&&T.minFilter!==Fn?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function C(T){let b=T.target;b.removeEventListener("dispose",C),w(b),b.isVideoTexture&&x.delete(b)}function M(T){let b=T.target;b.removeEventListener("dispose",M),_(b)}function w(T){let b=n.get(T);if(b.__webglInit===void 0)return;let q=T.source,it=u.get(q);if(it){let rt=it[b.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&v(T),Object.keys(it).length===0&&u.delete(q)}n.remove(T)}function v(T){let b=n.get(T);i.deleteTexture(b.__webglTexture);let q=T.source,it=u.get(q);delete it[b.__cacheKey],o.memory.textures--}function _(T){let b=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(b.__webglFramebuffer[it]))for(let rt=0;rt<b.__webglFramebuffer[it].length;rt++)i.deleteFramebuffer(b.__webglFramebuffer[it][rt]);else i.deleteFramebuffer(b.__webglFramebuffer[it]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[it])}else{if(Array.isArray(b.__webglFramebuffer))for(let it=0;it<b.__webglFramebuffer.length;it++)i.deleteFramebuffer(b.__webglFramebuffer[it]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let it=0;it<b.__webglColorRenderbuffer.length;it++)b.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[it]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let q=T.textures;for(let it=0,rt=q.length;it<rt;it++){let et=n.get(q[it]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(q[it])}n.remove(T)}let D=0;function S(){D=0}function R(){let T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function P(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function L(T,b){let q=n.get(T);if(T.isVideoTexture&&It(T),T.isRenderTargetTexture===!1&&T.version>0&&q.__version!==T.version){let it=T.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(q,T,b);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}function z(T,b){let q=n.get(T);if(T.version>0&&q.__version!==T.version){Q(q,T,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}function Z(T,b){let q=n.get(T);if(T.version>0&&q.__version!==T.version){Q(q,T,b);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}function O(T,b){let q=n.get(T);if(T.version>0&&q.__version!==T.version){I(q,T,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}let K={[vi]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[v0]:i.MIRRORED_REPEAT},ot={[sn]:i.NEAREST,[vd]:i.NEAREST_MIPMAP_NEAREST,[Yr]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},ht={[_d]:i.NEVER,[Fd]:i.ALWAYS,[Bd]:i.LESS,[eh]:i.LEQUAL,[Md]:i.EQUAL,[bd]:i.GEQUAL,[wd]:i.GREATER,[Dd]:i.NOTEQUAL};function xt(T,b){if(b.type===Sn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Fn||b.magFilter===Fa||b.magFilter===Yr||b.magFilter===Wi||b.minFilter===Fn||b.minFilter===Fa||b.minFilter===Yr||b.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,K[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,K[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,K[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ot[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ot[b.minFilter]),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ht[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===sn||b.minFilter!==Yr&&b.minFilter!==Wi||b.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Wt(T,b){let q=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",C));let it=b.source,rt=u.get(it);rt===void 0&&(rt={},u.set(it,rt));let et=P(b);if(et!==T.__cacheKey){rt[et]===void 0&&(rt[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),rt[et].usedTimes++;let Dt=rt[T.__cacheKey];Dt!==void 0&&(rt[T.__cacheKey].usedTimes--,Dt.usedTimes===0&&v(b)),T.__cacheKey=et,T.__webglTexture=rt[et].texture}return q}function Q(T,b,q){let it=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(it=i.TEXTURE_3D);let rt=Wt(T,b),et=b.source;e.bindTexture(it,T.__webglTexture,i.TEXTURE0+q);let Dt=n.get(et);if(et.version!==Dt.__version||rt===!0){e.activeTexture(i.TEXTURE0+q);let pt=te.getPrimaries(te.workingColorSpace),vt=b.colorSpace===di?null:te.getPrimaries(b.colorSpace),Qt=b.colorSpace===di||pt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let ct=y(b.image,!1,s.maxTextureSize);ct=qt(b,ct);let At=r.convert(b.format,b.colorSpace),kt=r.convert(b.type),Nt=g(b.internalFormat,At,kt,b.colorSpace,b.isVideoTexture);xt(it,b);let Ct,Kt=b.mipmaps,Xt=b.isVideoTexture!==!0,he=Dt.__version===void 0||rt===!0,H=et.dataReady,ft=B(b,ct);if(b.isDepthTexture)Nt=m(b.format===Is,b.type),he&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Nt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Nt,ct.width,ct.height,0,At,kt,null));else if(b.isDataTexture)if(Kt.length>0){Xt&&he&&e.texStorage2D(i.TEXTURE_2D,ft,Nt,Kt[0].width,Kt[0].height);for(let tt=0,st=Kt.length;tt<st;tt++)Ct=Kt[tt],Xt?H&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Ct.width,Ct.height,At,kt,Ct.data):e.texImage2D(i.TEXTURE_2D,tt,Nt,Ct.width,Ct.height,0,At,kt,Ct.data);b.generateMipmaps=!1}else Xt?(he&&e.texStorage2D(i.TEXTURE_2D,ft,Nt,ct.width,ct.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,At,kt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,ct.width,ct.height,0,At,kt,ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Xt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Nt,Kt[0].width,Kt[0].height,ct.depth);for(let tt=0,st=Kt.length;tt<st;tt++)if(Ct=Kt[tt],b.format!==An)if(At!==null)if(Xt){if(H)if(b.layerUpdates.size>0){let gt=kx(Ct.width,Ct.height,b.format,b.type);for(let mt of b.layerUpdates){let zt=Ct.data.subarray(mt*gt/Ct.data.BYTES_PER_ELEMENT,(mt+1)*gt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,mt,Ct.width,Ct.height,1,At,zt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Ct.width,Ct.height,ct.depth,At,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Nt,Ct.width,Ct.height,ct.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Ct.width,Ct.height,ct.depth,At,kt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Nt,Ct.width,Ct.height,ct.depth,0,At,kt,Ct.data)}else{Xt&&he&&e.texStorage2D(i.TEXTURE_2D,ft,Nt,Kt[0].width,Kt[0].height);for(let tt=0,st=Kt.length;tt<st;tt++)Ct=Kt[tt],b.format!==An?At!==null?Xt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,Ct.width,Ct.height,At,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Nt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?H&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Ct.width,Ct.height,At,kt,Ct.data):e.texImage2D(i.TEXTURE_2D,tt,Nt,Ct.width,Ct.height,0,At,kt,Ct.data)}else if(b.isDataArrayTexture)if(Xt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Nt,ct.width,ct.height,ct.depth),H)if(b.layerUpdates.size>0){let tt=kx(ct.width,ct.height,b.format,b.type);for(let st of b.layerUpdates){let gt=ct.data.subarray(st*tt/ct.data.BYTES_PER_ELEMENT,(st+1)*tt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ct.width,ct.height,1,At,kt,gt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,At,kt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,ct.width,ct.height,ct.depth,0,At,kt,ct.data);else if(b.isData3DTexture)Xt?(he&&e.texStorage3D(i.TEXTURE_3D,ft,Nt,ct.width,ct.height,ct.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,At,kt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,ct.width,ct.height,ct.depth,0,At,kt,ct.data);else if(b.isFramebufferTexture){if(he)if(Xt)e.texStorage2D(i.TEXTURE_2D,ft,Nt,ct.width,ct.height);else{let tt=ct.width,st=ct.height;for(let gt=0;gt<ft;gt++)e.texImage2D(i.TEXTURE_2D,gt,Nt,tt,st,0,At,kt,null),tt>>=1,st>>=1}}else if(Kt.length>0){if(Xt&&he){let tt=Pt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,ft,Nt,tt.width,tt.height)}for(let tt=0,st=Kt.length;tt<st;tt++)Ct=Kt[tt],Xt?H&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,At,kt,Ct):e.texImage2D(i.TEXTURE_2D,tt,Nt,At,kt,Ct);b.generateMipmaps=!1}else if(Xt){if(he){let tt=Pt(ct);e.texStorage2D(i.TEXTURE_2D,ft,Nt,tt.width,tt.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,kt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Nt,At,kt,ct);E(b)&&d(it),Dt.__version=et.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function I(T,b,q){if(b.image.length!==6)return;let it=Wt(T,b),rt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+q);let et=n.get(rt);if(rt.version!==et.__version||it===!0){e.activeTexture(i.TEXTURE0+q);let Dt=te.getPrimaries(te.workingColorSpace),pt=b.colorSpace===di?null:te.getPrimaries(b.colorSpace),vt=b.colorSpace===di||Dt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Qt=b.isCompressedTexture||b.image[0].isCompressedTexture,ct=b.image[0]&&b.image[0].isDataTexture,At=[];for(let st=0;st<6;st++)!Qt&&!ct?At[st]=y(b.image[st],!0,s.maxCubemapSize):At[st]=ct?b.image[st].image:b.image[st],At[st]=qt(b,At[st]);let kt=At[0],Nt=r.convert(b.format,b.colorSpace),Ct=r.convert(b.type),Kt=g(b.internalFormat,Nt,Ct,b.colorSpace),Xt=b.isVideoTexture!==!0,he=et.__version===void 0||it===!0,H=rt.dataReady,ft=B(b,kt);xt(i.TEXTURE_CUBE_MAP,b);let tt;if(Qt){Xt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Kt,kt.width,kt.height);for(let st=0;st<6;st++){tt=At[st].mipmaps;for(let gt=0;gt<tt.length;gt++){let mt=tt[gt];b.format!==An?Nt!==null?Xt?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt,0,0,mt.width,mt.height,Nt,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt,Kt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt,0,0,mt.width,mt.height,Nt,Ct,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt,Kt,mt.width,mt.height,0,Nt,Ct,mt.data)}}}else{if(tt=b.mipmaps,Xt&&he){tt.length>0&&ft++;let st=Pt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Kt,st.width,st.height)}for(let st=0;st<6;st++)if(ct){Xt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,At[st].width,At[st].height,Nt,Ct,At[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Kt,At[st].width,At[st].height,0,Nt,Ct,At[st].data);for(let gt=0;gt<tt.length;gt++){let zt=tt[gt].image[st].image;Xt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt+1,0,0,zt.width,zt.height,Nt,Ct,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt+1,Kt,zt.width,zt.height,0,Nt,Ct,zt.data)}}else{Xt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Nt,Ct,At[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Kt,Nt,Ct,At[st]);for(let gt=0;gt<tt.length;gt++){let mt=tt[gt];Xt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt+1,0,0,Nt,Ct,mt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,gt+1,Kt,Nt,Ct,mt.image[st])}}}E(b)&&d(i.TEXTURE_CUBE_MAP),et.__version=rt.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function W(T,b,q,it,rt,et){let Dt=r.convert(q.format,q.colorSpace),pt=r.convert(q.type),vt=g(q.internalFormat,Dt,pt,q.colorSpace),Qt=n.get(b),ct=n.get(q);if(ct.__renderTarget=b,!Qt.__hasExternalTextures){let At=Math.max(1,b.width>>et),kt=Math.max(1,b.height>>et);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,et,vt,At,kt,b.depth,0,Dt,pt,null):e.texImage2D(rt,et,vt,At,kt,0,Dt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),_t(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,rt,ct.__webglTexture,0,Rt(b)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,rt,ct.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function k(T,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer){let it=b.depthTexture,rt=it&&it.isDepthTexture?it.type:null,et=m(b.stencilBuffer,rt),Dt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=Rt(b);_t(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,et,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,et,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,et,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,T)}else{let it=b.textures;for(let rt=0;rt<it.length;rt++){let et=it[rt],Dt=r.convert(et.format,et.colorSpace),pt=r.convert(et.type),vt=g(et.internalFormat,Dt,pt,et.colorSpace),Qt=Rt(b);q&&_t(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,vt,b.width,b.height):_t(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,vt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,vt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let it=n.get(b.depthTexture);it.__renderTarget=b,(!it.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),L(b.depthTexture,0);let rt=it.__webglTexture,et=Rt(b);if(b.depthTexture.format===Ds)_t(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(b.depthTexture.format===Is)_t(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Y(T){let b=n.get(T),q=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){let it=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),it){let rt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,it.removeEventListener("dispose",rt)};it.addEventListener("dispose",rt),b.__depthDisposeCallback=rt}b.__boundDepthTexture=it}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");X(b.__webglFramebuffer,T)}else if(q){b.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[it]),b.__webglDepthbuffer[it]===void 0)b.__webglDepthbuffer[it]=i.createRenderbuffer(),k(b.__webglDepthbuffer[it],T,!1);else{let rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),k(b.__webglDepthbuffer,T,!1);else{let it=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(T,b,q){let it=n.get(T);b!==void 0&&W(it.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Y(T)}function ut(T){let b=T.texture,q=n.get(T),it=n.get(b);T.addEventListener("dispose",M);let rt=T.textures,et=T.isWebGLCubeRenderTarget===!0,Dt=rt.length>1;if(Dt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=b.version,o.memory.textures++),et){q.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[pt]=[];for(let vt=0;vt<b.mipmaps.length;vt++)q.__webglFramebuffer[pt][vt]=i.createFramebuffer()}else q.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)q.__webglFramebuffer[pt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let pt=0,vt=rt.length;pt<vt;pt++){let Qt=n.get(rt[pt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&_t(T)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let pt=0;pt<rt.length;pt++){let vt=rt[pt];q.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[pt]);let Qt=r.convert(vt.format,vt.colorSpace),ct=r.convert(vt.type),At=g(vt.internalFormat,Qt,ct,vt.colorSpace,T.isXRRenderTarget===!0),kt=Rt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,At,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,q.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),k(q.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),xt(i.TEXTURE_CUBE_MAP,b);for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)W(q.__webglFramebuffer[pt][vt],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,vt);else W(q.__webglFramebuffer[pt],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);E(b)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let pt=0,vt=rt.length;pt<vt;pt++){let Qt=rt[pt],ct=n.get(Qt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),xt(i.TEXTURE_2D,Qt),W(q.__webglFramebuffer,T,Qt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),E(Qt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,it.__webglTexture),xt(pt,b),b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)W(q.__webglFramebuffer[vt],T,b,i.COLOR_ATTACHMENT0,pt,vt);else W(q.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,pt,0);E(b)&&d(pt),e.unbindTexture()}T.depthBuffer&&Y(T)}function at(T){let b=T.textures;for(let q=0,it=b.length;q<it;q++){let rt=b[q];if(E(rt)){let et=A(T),Dt=n.get(rt).__webglTexture;e.bindTexture(et,Dt),d(et),e.unbindTexture()}}}let Tt=[],N=[];function yt(T){if(T.samples>0){if(_t(T)===!1){let b=T.textures,q=T.width,it=T.height,rt=i.COLOR_BUFFER_BIT,et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(T),pt=b.length>1;if(pt)for(let vt=0;vt<b.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let vt=0;vt<b.length;vt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[vt]);let Qt=n.get(b[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,q,it,0,0,q,it,rt,i.NEAREST),c===!0&&(Tt.length=0,N.length=0,Tt.push(i.COLOR_ATTACHMENT0+vt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Tt.push(et),N.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let vt=0;vt<b.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[vt]);let Qt=n.get(b[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let b=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Rt(T){return Math.min(s.maxSamples,T.samples)}function _t(T){let b=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function It(T){let b=o.render.frame;x.get(T)!==b&&(x.set(T,b),T.update())}function qt(T,b){let q=T.colorSpace,it=T.format,rt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||q!==Os&&q!==di&&(te.getTransfer(q)===ae?(it!==An||rt!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function Pt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=R,this.resetTextureUnits=S,this.setTexture2D=L,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=O,this.rebindTextures=nt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=W,this.useMultisampledRTT=_t}function y1(i,t){function e(n,s=di){let r,o=te.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===Tc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qx)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xx)return i.BYTE;if(n===Yx)return i.SHORT;if(n===Er)return i.UNSIGNED_SHORT;if(n===Sc)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Br)return i.HALF_FLOAT;if(n===Zx)return i.ALPHA;if(n===$x)return i.RGB;if(n===An)return i.RGBA;if(n===Jx)return i.LUMINANCE;if(n===Kx)return i.LUMINANCE_ALPHA;if(n===Ds)return i.DEPTH_COMPONENT;if(n===Is)return i.DEPTH_STENCIL;if(n===Pc)return i.RED;if(n===Ic)return i.RED_INTEGER;if(n===jx)return i.RG;if(n===kc)return i.RG_INTEGER;if(n===Lc)return i.RGBA_INTEGER;if(n===vo||n===Ao||n===Co||n===yo)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===A0||n===C0||n===y0||n===_0)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===A0)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===C0)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===y0)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_0)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===B0||n===M0||n===w0)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===B0||n===M0)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===w0)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===D0||n===b0||n===F0||n===S0||n===T0||n===R0||n===P0||n===I0||n===k0||n===L0||n===N0||n===U0||n===O0||n===z0)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===D0)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===b0)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===F0)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===S0)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===T0)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===R0)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===P0)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===I0)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===k0)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===L0)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===N0)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===U0)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===O0)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===z0)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_o||n===H0||n===V0)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_o)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===H0)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===V0)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qx||n===G0||n===W0||n===X0)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===G0)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===W0)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===X0)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var lc=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},pe=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},_1={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let E=e.getJointPose(y,n),d=this._getHandJoint(l,y);E!==null&&(d.matrix.fromArray(E.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=E.radius),d.visible=E!==null}let x=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=x.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&u>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},B1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xn({vertexShader:B1,fragmentShader:M1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new Qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hc=class extends Ai{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,x=null,h=null,u=null,f=null,p=null,y=new xc,E=e.getContextAttributes(),d=null,A=null,g=[],m=[],B=new Lt,C=null,M=new Fe;M.viewport=new le;let w=new Fe;w.viewport=new le;let v=[M,w],_=new lc,D=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let I=g[Q];return I===void 0&&(I=new mr,g[Q]=I),I.getTargetRaySpace()},this.getControllerGrip=function(Q){let I=g[Q];return I===void 0&&(I=new mr,g[Q]=I),I.getGripSpace()},this.getHand=function(Q){let I=g[Q];return I===void 0&&(I=new mr,g[Q]=I),I.getHandSpace()};function R(Q){let I=m.indexOf(Q.inputSource);if(I===-1)return;let W=g[I];W!==void 0&&(W.update(Q.inputSource,Q.frame,l||o),W.dispatchEvent({type:Q.type,data:Q.inputSource}))}function P(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",L);for(let Q=0;Q<g.length;Q++){let I=m[Q];I!==null&&(m[Q]=null,g[Q].disconnect(I))}D=null,S=null,y.reset(),t.setRenderTarget(d),f=null,u=null,h=null,s=null,A=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",P),s.addEventListener("inputsourceschange",L),E.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){let I={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,I),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new Jn(f.framebufferWidth,f.framebufferHeight,{format:An,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil})}else{let I=null,W=null,k=null;E.depth&&(k=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,I=E.stencil?Is:Ds,W=E.stencil?Ps:Xi);let X={colorFormat:e.RGBA8,depthFormat:k,scaleFactor:r};h=new XRWebGLBinding(s,e),u=h.createProjectionLayer(X),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),A=new Jn(u.textureWidth,u.textureHeight,{format:An,type:$n,depthTexture:new No(u.textureWidth,u.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function L(Q){for(let I=0;I<Q.removed.length;I++){let W=Q.removed[I],k=m.indexOf(W);k>=0&&(m[k]=null,g[k].disconnect(W))}for(let I=0;I<Q.added.length;I++){let W=Q.added[I],k=m.indexOf(W);if(k===-1){for(let Y=0;Y<g.length;Y++)if(Y>=m.length){m.push(W),k=Y;break}else if(m[Y]===null){m[Y]=W,k=Y;break}if(k===-1)break}let X=g[k];X&&X.connect(W)}}let z=new U,Z=new U;function O(Q,I,W){z.setFromMatrixPosition(I.matrixWorld),Z.setFromMatrixPosition(W.matrixWorld);let k=z.distanceTo(Z),X=I.projectionMatrix.elements,Y=W.projectionMatrix.elements,nt=X[14]/(X[10]-1),ut=X[14]/(X[10]+1),at=(X[9]+1)/X[5],Tt=(X[9]-1)/X[5],N=(X[8]-1)/X[0],yt=(Y[8]+1)/Y[0],Rt=nt*N,_t=nt*yt,It=k/(-N+yt),qt=It*-N;if(I.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(qt),Q.translateZ(It),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),X[10]===-1)Q.projectionMatrix.copy(I.projectionMatrix),Q.projectionMatrixInverse.copy(I.projectionMatrixInverse);else{let Pt=nt+It,T=ut+It,b=Rt-qt,q=_t+(k-qt),it=at*ut/T*Pt,rt=Tt*ut/T*Pt;Q.projectionMatrix.makePerspective(b,q,it,rt,Pt,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function K(Q,I){I===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(I.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let I=Q.near,W=Q.far;y.texture!==null&&(y.depthNear>0&&(I=y.depthNear),y.depthFar>0&&(W=y.depthFar)),_.near=w.near=M.near=I,_.far=w.far=M.far=W,(D!==_.near||S!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),D=_.near,S=_.far),M.layers.mask=Q.layers.mask|2,w.layers.mask=Q.layers.mask|4,_.layers.mask=M.layers.mask|w.layers.mask;let k=Q.parent,X=_.cameras;K(_,k);for(let Y=0;Y<X.length;Y++)K(X[Y],k);X.length===2?O(_,M,w):_.projectionMatrix.copy(M.projectionMatrix),ot(Q,_,k)};function ot(Q,I,W){W===null?Q.matrix.copy(I.matrixWorld):(Q.matrix.copy(W.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(I.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(I.projectionMatrix),Q.projectionMatrixInverse.copy(I.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Z0*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Q){c=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let ht=null;function xt(Q,I){if(x=I.getViewerPose(l||o),p=I,x!==null){let W=x.views;f!==null&&(t.setRenderTargetFramebuffer(A,f.framebuffer),t.setRenderTarget(A));let k=!1;W.length!==_.cameras.length&&(_.cameras.length=0,k=!0);for(let Y=0;Y<W.length;Y++){let nt=W[Y],ut=null;if(f!==null)ut=f.getViewport(nt);else{let Tt=h.getViewSubImage(u,nt);ut=Tt.viewport,Y===0&&(t.setRenderTargetTextures(A,Tt.colorTexture,u.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(A))}let at=v[Y];at===void 0&&(at=new Fe,at.layers.enable(Y),at.viewport=new le,v[Y]=at),at.matrix.fromArray(nt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(nt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ut.x,ut.y,ut.width,ut.height),Y===0&&(_.matrix.copy(at.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),k===!0&&_.cameras.push(at)}let X=s.enabledFeatures;if(X&&X.includes("depth-sensing")){let Y=h.getDepthInformation(W[0]);Y&&Y.isValid&&Y.texture&&y.init(t,Y,s.renderState)}}for(let W=0;W<g.length;W++){let k=m[W],X=g[W];k!==null&&X!==void 0&&X.update(k,I,l||o)}ht&&ht(Q,I),I.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:I}),p=null}let Wt=new rh;Wt.setAnimationLoop(xt),this.setAnimationLoop=function(Q){ht=Q},this.dispose=function(){}}},Oi=new ln,w1=new xe;function D1(i,t){function e(E,d){E.matrixAutoUpdate===!0&&E.updateMatrix(),d.value.copy(E.matrix)}function n(E,d){d.color.getRGB(E.fogColor.value,sh(i)),d.isFog?(E.fogNear.value=d.near,E.fogFar.value=d.far):d.isFogExp2&&(E.fogDensity.value=d.density)}function s(E,d,A,g,m){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(E,d):d.isMeshToonMaterial?(r(E,d),h(E,d)):d.isMeshPhongMaterial?(r(E,d),x(E,d)):d.isMeshStandardMaterial?(r(E,d),u(E,d),d.isMeshPhysicalMaterial&&f(E,d,m)):d.isMeshMatcapMaterial?(r(E,d),p(E,d)):d.isMeshDepthMaterial?r(E,d):d.isMeshDistanceMaterial?(r(E,d),y(E,d)):d.isMeshNormalMaterial?r(E,d):d.isLineBasicMaterial?(o(E,d),d.isLineDashedMaterial&&a(E,d)):d.isPointsMaterial?c(E,d,A,g):d.isSpriteMaterial?l(E,d):d.isShadowMaterial?(E.color.value.copy(d.color),E.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(E,d){E.opacity.value=d.opacity,d.color&&E.diffuse.value.copy(d.color),d.emissive&&E.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(E.map.value=d.map,e(d.map,E.mapTransform)),d.alphaMap&&(E.alphaMap.value=d.alphaMap,e(d.alphaMap,E.alphaMapTransform)),d.bumpMap&&(E.bumpMap.value=d.bumpMap,e(d.bumpMap,E.bumpMapTransform),E.bumpScale.value=d.bumpScale,d.side===ze&&(E.bumpScale.value*=-1)),d.normalMap&&(E.normalMap.value=d.normalMap,e(d.normalMap,E.normalMapTransform),E.normalScale.value.copy(d.normalScale),d.side===ze&&E.normalScale.value.negate()),d.displacementMap&&(E.displacementMap.value=d.displacementMap,e(d.displacementMap,E.displacementMapTransform),E.displacementScale.value=d.displacementScale,E.displacementBias.value=d.displacementBias),d.emissiveMap&&(E.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,E.emissiveMapTransform)),d.specularMap&&(E.specularMap.value=d.specularMap,e(d.specularMap,E.specularMapTransform)),d.alphaTest>0&&(E.alphaTest.value=d.alphaTest);let A=t.get(d),g=A.envMap,m=A.envMapRotation;g&&(E.envMap.value=g,Oi.copy(m),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),E.envMapRotation.value.setFromMatrix4(w1.makeRotationFromEuler(Oi)),E.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=d.reflectivity,E.ior.value=d.ior,E.refractionRatio.value=d.refractionRatio),d.lightMap&&(E.lightMap.value=d.lightMap,E.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,E.lightMapTransform)),d.aoMap&&(E.aoMap.value=d.aoMap,E.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,E.aoMapTransform))}function o(E,d){E.diffuse.value.copy(d.color),E.opacity.value=d.opacity,d.map&&(E.map.value=d.map,e(d.map,E.mapTransform))}function a(E,d){E.dashSize.value=d.dashSize,E.totalSize.value=d.dashSize+d.gapSize,E.scale.value=d.scale}function c(E,d,A,g){E.diffuse.value.copy(d.color),E.opacity.value=d.opacity,E.size.value=d.size*A,E.scale.value=g*.5,d.map&&(E.map.value=d.map,e(d.map,E.uvTransform)),d.alphaMap&&(E.alphaMap.value=d.alphaMap,e(d.alphaMap,E.alphaMapTransform)),d.alphaTest>0&&(E.alphaTest.value=d.alphaTest)}function l(E,d){E.diffuse.value.copy(d.color),E.opacity.value=d.opacity,E.rotation.value=d.rotation,d.map&&(E.map.value=d.map,e(d.map,E.mapTransform)),d.alphaMap&&(E.alphaMap.value=d.alphaMap,e(d.alphaMap,E.alphaMapTransform)),d.alphaTest>0&&(E.alphaTest.value=d.alphaTest)}function x(E,d){E.specular.value.copy(d.specular),E.shininess.value=Math.max(d.shininess,1e-4)}function h(E,d){d.gradientMap&&(E.gradientMap.value=d.gradientMap)}function u(E,d){E.metalness.value=d.metalness,d.metalnessMap&&(E.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,E.metalnessMapTransform)),E.roughness.value=d.roughness,d.roughnessMap&&(E.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,E.roughnessMapTransform)),d.envMap&&(E.envMapIntensity.value=d.envMapIntensity)}function f(E,d,A){E.ior.value=d.ior,d.sheen>0&&(E.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),E.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(E.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,E.sheenColorMapTransform)),d.sheenRoughnessMap&&(E.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,E.sheenRoughnessMapTransform))),d.clearcoat>0&&(E.clearcoat.value=d.clearcoat,E.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(E.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,E.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(E.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ze&&E.clearcoatNormalScale.value.negate())),d.dispersion>0&&(E.dispersion.value=d.dispersion),d.iridescence>0&&(E.iridescence.value=d.iridescence,E.iridescenceIOR.value=d.iridescenceIOR,E.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(E.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,E.iridescenceMapTransform)),d.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),d.transmission>0&&(E.transmission.value=d.transmission,E.transmissionSamplerMap.value=A.texture,E.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(E.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,E.transmissionMapTransform)),E.thickness.value=d.thickness,d.thicknessMap&&(E.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=d.attenuationDistance,E.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(E.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(E.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=d.specularIntensity,E.specularColor.value.copy(d.specularColor),d.specularColorMap&&(E.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,E.specularColorMapTransform)),d.specularIntensityMap&&(E.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,E.specularIntensityMapTransform))}function p(E,d){d.matcap&&(E.matcap.value=d.matcap)}function y(E,d){let A=t.get(d).light;E.referencePosition.value.setFromMatrixPosition(A.matrixWorld),E.nearDistance.value=A.shadow.camera.near,E.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function b1(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,g){let m=g.program;n.uniformBlockBinding(A,m)}function l(A,g){let m=s[A.id];m===void 0&&(p(A),m=x(A),s[A.id]=m,A.addEventListener("dispose",E));let B=g.program;n.updateUBOMapping(A,B);let C=t.render.frame;r[A.id]!==C&&(u(A),r[A.id]=C)}function x(A){let g=h();A.__bindingPointIndex=g;let m=i.createBuffer(),B=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,m),i.bufferData(i.UNIFORM_BUFFER,B,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,m),m}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(A){let g=s[A.id],m=A.uniforms,B=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let C=0,M=m.length;C<M;C++){let w=Array.isArray(m[C])?m[C]:[m[C]];for(let v=0,_=w.length;v<_;v++){let D=w[v];if(f(D,C,v,B)===!0){let S=D.__offset,R=Array.isArray(D.value)?D.value:[D.value],P=0;for(let L=0;L<R.length;L++){let z=R[L],Z=y(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,S+P,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,P),P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,S,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(A,g,m,B){let C=A.value,M=g+"_"+m;if(B[M]===void 0)return typeof C=="number"||typeof C=="boolean"?B[M]=C:B[M]=C.clone(),!0;{let w=B[M];if(typeof C=="number"||typeof C=="boolean"){if(w!==C)return B[M]=C,!0}else if(w.equals(C)===!1)return w.copy(C),!0}return!1}function p(A){let g=A.uniforms,m=0,B=16;for(let M=0,w=g.length;M<w;M++){let v=Array.isArray(g[M])?g[M]:[g[M]];for(let _=0,D=v.length;_<D;_++){let S=v[_],R=Array.isArray(S.value)?S.value:[S.value];for(let P=0,L=R.length;P<L;P++){let z=R[P],Z=y(z),O=m%B,K=O%Z.boundary,ot=O+K;m+=K,ot!==0&&B-ot<Z.storage&&(m+=B-ot),S.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=m,m+=Z.storage}}}let C=m%B;return C>0&&(m+=B-C),A.__size=m,A.__cache={},this}function y(A){let g={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(g.boundary=4,g.storage=4):A.isVector2?(g.boundary=8,g.storage=8):A.isVector3||A.isColor?(g.boundary=16,g.storage=12):A.isVector4?(g.boundary=16,g.storage=16):A.isMatrix3?(g.boundary=48,g.storage=48):A.isMatrix4?(g.boundary=64,g.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),g}function E(A){let g=A.target;g.removeEventListener("dispose",E);let m=o.indexOf(g.__bindingPointIndex);o.splice(m,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function d(){for(let A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Uo=class{constructor(t={}){let{canvas:e=Td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),y=new Int32Array(4),E=null,d=null,A=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=mi,this.toneMappingExposure=1;let m=this,B=!1,C=0,M=0,w=null,v=-1,_=null,D=new le,S=new le,R=null,P=new Ft(0),L=0,z=e.width,Z=e.height,O=1,K=null,ot=null,ht=new le(0,0,z,Z),xt=new le(0,0,z,Z),Wt=!1,Q=new gr,I=!1,W=!1,k=new xe,X=new xe,Y=new U,nt=new le,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function Tt(){return w===null?O:1}let N=n;function yt(F,V){return e.getContext(F,V)}try{let F={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:x,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wc}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),N===null){let V="webgl2";if(N=yt(V,F),N===null)throw yt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let Rt,_t,It,qt,Pt,T,b,q,it,rt,et,Dt,pt,vt,Qt,ct,At,kt,Nt,Ct,Kt,Xt,he,H;function ft(){Rt=new Wm(N),Rt.init(),Xt=new y1(N,Rt),_t=new Um(N,Rt,t,Xt),It=new v1(N,Rt),_t.reverseDepthBuffer&&u&&It.buffers.depth.setReversed(!0),qt=new qm(N),Pt=new o1,T=new C1(N,Rt,It,Pt,_t,Xt,qt),b=new zm(m),q=new Gm(m),it=new Qd(N),he=new Lm(N,it),rt=new Xm(N,it,qt,he),et=new $m(N,rt,it,qt),Nt=new Zm(N,_t,T),ct=new Om(Pt),Dt=new r1(m,b,q,Rt,_t,he,ct),pt=new D1(m,Pt),vt=new c1,Qt=new f1(Rt),kt=new km(m,b,q,It,et,f,c),At=new E1(m,et,_t),H=new b1(N,qt,_t,It),Ct=new Nm(N,Rt,qt),Kt=new Ym(N,Rt,qt),qt.programs=Dt.programs,m.capabilities=_t,m.extensions=Rt,m.properties=Pt,m.renderLists=vt,m.shadowMap=At,m.state=It,m.info=qt}ft();let tt=new hc(m,N);this.xr=tt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let F=Rt.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=Rt.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(F){F!==void 0&&(O=F,this.setSize(z,Z,!1))},this.getSize=function(F){return F.set(z,Z)},this.setSize=function(F,V,$=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=F,Z=V,e.width=Math.floor(F*O),e.height=Math.floor(V*O),$===!0&&(e.style.width=F+"px",e.style.height=V+"px"),this.setViewport(0,0,F,V)},this.getDrawingBufferSize=function(F){return F.set(z*O,Z*O).floor()},this.setDrawingBufferSize=function(F,V,$){z=F,Z=V,O=$,e.width=Math.floor(F*$),e.height=Math.floor(V*$),this.setViewport(0,0,F,V)},this.getCurrentViewport=function(F){return F.copy(D)},this.getViewport=function(F){return F.copy(ht)},this.setViewport=function(F,V,$,J){F.isVector4?ht.set(F.x,F.y,F.z,F.w):ht.set(F,V,$,J),It.viewport(D.copy(ht).multiplyScalar(O).round())},this.getScissor=function(F){return F.copy(xt)},this.setScissor=function(F,V,$,J){F.isVector4?xt.set(F.x,F.y,F.z,F.w):xt.set(F,V,$,J),It.scissor(S.copy(xt).multiplyScalar(O).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(F){It.setScissorTest(Wt=F)},this.setOpaqueSort=function(F){K=F},this.setTransparentSort=function(F){ot=F},this.getClearColor=function(F){return F.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(F=!0,V=!0,$=!0){let J=0;if(F){let G=!1;if(w!==null){let lt=w.texture.format;G=lt===Lc||lt===kc||lt===Ic}if(G){let lt=w.texture.type,Et=lt===$n||lt===Xi||lt===Er||lt===Ps||lt===Tc||lt===Rc,Bt=kt.getClearColor(),Mt=kt.getClearAlpha(),Ot=Bt.r,Ht=Bt.g,wt=Bt.b;Et?(p[0]=Ot,p[1]=Ht,p[2]=wt,p[3]=Mt,N.clearBufferuiv(N.COLOR,0,p)):(y[0]=Ot,y[1]=Ht,y[2]=wt,y[3]=Mt,N.clearBufferiv(N.COLOR,0,y))}else J|=N.COLOR_BUFFER_BIT}V&&(J|=N.DEPTH_BUFFER_BIT),$&&(J|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),vt.dispose(),Qt.dispose(),Pt.dispose(),b.dispose(),q.dispose(),et.dispose(),he.dispose(),H.dispose(),Dt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",pl),tt.removeEventListener("sessionend",ml),Di.stop()};function st(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let F=qt.autoReset,V=At.enabled,$=At.autoUpdate,J=At.needsUpdate,G=At.type;ft(),qt.autoReset=F,At.enabled=V,At.autoUpdate=$,At.needsUpdate=J,At.type=G}function mt(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function zt(F){let V=F.target;V.removeEventListener("dispose",zt),_e(V)}function _e(F){Le(F),Pt.remove(F)}function Le(F){let V=Pt.get(F).programs;V!==void 0&&(V.forEach(function($){Dt.releaseProgram($)}),F.isShaderMaterial&&Dt.releaseShaderCache(F))}this.renderBufferDirect=function(F,V,$,J,G,lt){V===null&&(V=ut);let Et=G.isMesh&&G.matrixWorld.determinant()<0,Bt=Cu(F,V,$,J,G);It.setMaterial(J,Et);let Mt=$.index,Ot=1;if(J.wireframe===!0){if(Mt=rt.getWireframeAttribute($),Mt===void 0)return;Ot=2}let Ht=$.drawRange,wt=$.attributes.position,ne=Ht.start*Ot,ue=(Ht.start+Ht.count)*Ot;lt!==null&&(ne=Math.max(ne,lt.start*Ot),ue=Math.min(ue,(lt.start+lt.count)*Ot)),Mt!==null?(ne=Math.max(ne,0),ue=Math.min(ue,Mt.count)):wt!=null&&(ne=Math.max(ne,0),ue=Math.min(ue,wt.count));let de=ue-ne;if(de<0||de===1/0)return;he.setup(G,J,Bt,$,Mt);let $e,ie=Ct;if(Mt!==null&&($e=it.get(Mt),ie=Kt,ie.setIndex($e)),G.isMesh)J.wireframe===!0?(It.setLineWidth(J.wireframeLinewidth*Tt()),ie.setMode(N.LINES)):ie.setMode(N.TRIANGLES);else if(G.isLine){let bt=J.linewidth;bt===void 0&&(bt=1),It.setLineWidth(bt*Tt()),G.isLineSegments?ie.setMode(N.LINES):G.isLineLoop?ie.setMode(N.LINE_LOOP):ie.setMode(N.LINE_STRIP)}else G.isPoints?ie.setMode(N.POINTS):G.isSprite&&ie.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ie.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))ie.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let bt=G._multiDrawStarts,Nn=G._multiDrawCounts,se=G._multiDrawCount,fn=Mt?it.get(Mt).bytesPerElement:1,es=Pt.get(J).currentProgram.getUniforms();for(let Qe=0;Qe<se;Qe++)es.setValue(N,"_gl_DrawID",Qe),ie.render(bt[Qe]/fn,Nn[Qe])}else if(G.isInstancedMesh)ie.renderInstances(ne,de,G.count);else if($.isInstancedBufferGeometry){let bt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Nn=Math.min($.instanceCount,bt);ie.renderInstances(ne,de,Nn)}else ie.render(ne,de)};function re(F,V,$){F.transparent===!0&&F.side===Oe&&F.forceSinglePass===!1?(F.side=ze,F.needsUpdate=!0,zr(F,V,$),F.side=gi,F.needsUpdate=!0,zr(F,V,$),F.side=Oe):zr(F,V,$)}this.compile=function(F,V,$=null){$===null&&($=F),d=Qt.get($),d.init(V),g.push(d),$.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),F!==$&&F.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights();let J=new Set;return F.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let lt=G.material;if(lt)if(Array.isArray(lt))for(let Et=0;Et<lt.length;Et++){let Bt=lt[Et];re(Bt,$,G),J.add(Bt)}else re(lt,$,G),J.add(lt)}),g.pop(),d=null,J},this.compileAsync=function(F,V,$=null){let J=this.compile(F,V,$);return new Promise(G=>{function lt(){if(J.forEach(function(Et){Pt.get(Et).currentProgram.isReady()&&J.delete(Et)}),J.size===0){G(F);return}setTimeout(lt,10)}Rt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let dn=null;function Ln(F){dn&&dn(F)}function pl(){Di.stop()}function ml(){Di.start()}let Di=new rh;Di.setAnimationLoop(Ln),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(F){dn=F,tt.setAnimationLoop(F),F===null?Di.stop():Di.start()},tt.addEventListener("sessionstart",pl),tt.addEventListener("sessionend",ml),this.render=function(F,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(V),V=tt.getCamera()),F.isScene===!0&&F.onBeforeRender(m,F,V,w),d=Qt.get(F,g.length),d.init(V),g.push(d),X.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Q.setFromProjectionMatrix(X),W=this.localClippingEnabled,I=ct.init(this.clippingPlanes,W),E=vt.get(F,A.length),E.init(),A.push(E),tt.enabled===!0&&tt.isPresenting===!0){let lt=m.xr.getDepthSensingMesh();lt!==null&&ya(lt,V,-1/0,m.sortObjects)}ya(F,V,0,m.sortObjects),E.finish(),m.sortObjects===!0&&E.sort(K,ot),at=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,at&&kt.addToRenderList(E,F),this.info.render.frame++,I===!0&&ct.beginShadows();let $=d.state.shadowsArray;At.render($,F,V),I===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=E.opaque,G=E.transmissive;if(d.setupLights(),V.isArrayCamera){let lt=V.cameras;if(G.length>0)for(let Et=0,Bt=lt.length;Et<Bt;Et++){let Mt=lt[Et];gl(J,G,F,Mt)}at&&kt.render(F);for(let Et=0,Bt=lt.length;Et<Bt;Et++){let Mt=lt[Et];El(E,F,Mt,Mt.viewport)}}else G.length>0&&gl(J,G,F,V),at&&kt.render(F),El(E,F,V);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),F.isScene===!0&&F.onAfterRender(m,F,V),he.resetDefaultState(),v=-1,_=null,g.pop(),g.length>0?(d=g[g.length-1],I===!0&&ct.setGlobalState(m.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?E=A[A.length-1]:E=null};function ya(F,V,$,J){if(F.visible===!1)return;if(F.layers.test(V.layers)){if(F.isGroup)$=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(V);else if(F.isLight)d.pushLight(F),F.castShadow&&d.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||Q.intersectsSprite(F)){J&&nt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(X);let Et=et.update(F),Bt=F.material;Bt.visible&&E.push(F,Et,Bt,$,nt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||Q.intersectsObject(F))){let Et=et.update(F),Bt=F.material;if(J&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),nt.copy(F.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),nt.copy(Et.boundingSphere.center)),nt.applyMatrix4(F.matrixWorld).applyMatrix4(X)),Array.isArray(Bt)){let Mt=Et.groups;for(let Ot=0,Ht=Mt.length;Ot<Ht;Ot++){let wt=Mt[Ot],ne=Bt[wt.materialIndex];ne&&ne.visible&&E.push(F,Et,ne,$,nt.z,wt)}}else Bt.visible&&E.push(F,Et,Bt,$,nt.z,null)}}let lt=F.children;for(let Et=0,Bt=lt.length;Et<Bt;Et++)ya(lt[Et],V,$,J)}function El(F,V,$,J){let G=F.opaque,lt=F.transmissive,Et=F.transparent;d.setupLightsView($),I===!0&&ct.setGlobalState(m.clippingPlanes,$),J&&It.viewport(D.copy(J)),G.length>0&&Or(G,V,$),lt.length>0&&Or(lt,V,$),Et.length>0&&Or(Et,V,$),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function gl(F,V,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[J.id]===void 0&&(d.state.transmissionRenderTarget[J.id]=new Jn(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?Br:$n,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let lt=d.state.transmissionRenderTarget[J.id],Et=J.viewport||D;lt.setSize(Et.z,Et.w);let Bt=m.getRenderTarget();m.setRenderTarget(lt),m.getClearColor(P),L=m.getClearAlpha(),L<1&&m.setClearColor(16777215,.5),m.clear(),at&&kt.render($);let Mt=m.toneMapping;m.toneMapping=mi;let Ot=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),d.setupLightsView(J),I===!0&&ct.setGlobalState(m.clippingPlanes,J),Or(F,$,J),T.updateMultisampleRenderTarget(lt),T.updateRenderTargetMipmap(lt),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let wt=0,ne=V.length;wt<ne;wt++){let ue=V[wt],de=ue.object,$e=ue.geometry,ie=ue.material,bt=ue.group;if(ie.side===Oe&&de.layers.test(J.layers)){let Nn=ie.side;ie.side=ze,ie.needsUpdate=!0,vl(de,$,J,$e,ie,bt),ie.side=Nn,ie.needsUpdate=!0,Ht=!0}}Ht===!0&&(T.updateMultisampleRenderTarget(lt),T.updateRenderTargetMipmap(lt))}m.setRenderTarget(Bt),m.setClearColor(P,L),Ot!==void 0&&(J.viewport=Ot),m.toneMapping=Mt}function Or(F,V,$){let J=V.isScene===!0?V.overrideMaterial:null;for(let G=0,lt=F.length;G<lt;G++){let Et=F[G],Bt=Et.object,Mt=Et.geometry,Ot=J===null?Et.material:J,Ht=Et.group;Bt.layers.test($.layers)&&vl(Bt,V,$,Mt,Ot,Ht)}}function vl(F,V,$,J,G,lt){F.onBeforeRender(m,V,$,J,G,lt),F.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),G.onBeforeRender(m,V,$,J,F,lt),G.transparent===!0&&G.side===Oe&&G.forceSinglePass===!1?(G.side=ze,G.needsUpdate=!0,m.renderBufferDirect($,V,J,G,F,lt),G.side=gi,G.needsUpdate=!0,m.renderBufferDirect($,V,J,G,F,lt),G.side=Oe):m.renderBufferDirect($,V,J,G,F,lt),F.onAfterRender(m,V,$,J,G,lt)}function zr(F,V,$){V.isScene!==!0&&(V=ut);let J=Pt.get(F),G=d.state.lights,lt=d.state.shadowsArray,Et=G.state.version,Bt=Dt.getParameters(F,G.state,lt,V,$),Mt=Dt.getProgramCacheKey(Bt),Ot=J.programs;J.environment=F.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(F.isMeshStandardMaterial?q:b).get(F.envMap||J.environment),J.envMapRotation=J.environment!==null&&F.envMap===null?V.environmentRotation:F.envMapRotation,Ot===void 0&&(F.addEventListener("dispose",zt),Ot=new Map,J.programs=Ot);let Ht=Ot.get(Mt);if(Ht!==void 0){if(J.currentProgram===Ht&&J.lightsStateVersion===Et)return Cl(F,Bt),Ht}else Bt.uniforms=Dt.getUniforms(F),F.onBeforeCompile(Bt,m),Ht=Dt.acquireProgram(Bt,Mt),Ot.set(Mt,Ht),J.uniforms=Bt.uniforms;let wt=J.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(wt.clippingPlanes=ct.uniform),Cl(F,Bt),J.needsLights=_u(F),J.lightsStateVersion=Et,J.needsLights&&(wt.ambientLightColor.value=G.state.ambient,wt.lightProbe.value=G.state.probe,wt.directionalLights.value=G.state.directional,wt.directionalLightShadows.value=G.state.directionalShadow,wt.spotLights.value=G.state.spot,wt.spotLightShadows.value=G.state.spotShadow,wt.rectAreaLights.value=G.state.rectArea,wt.ltc_1.value=G.state.rectAreaLTC1,wt.ltc_2.value=G.state.rectAreaLTC2,wt.pointLights.value=G.state.point,wt.pointLightShadows.value=G.state.pointShadow,wt.hemisphereLights.value=G.state.hemi,wt.directionalShadowMap.value=G.state.directionalShadowMap,wt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,wt.spotShadowMap.value=G.state.spotShadowMap,wt.spotLightMatrix.value=G.state.spotLightMatrix,wt.spotLightMap.value=G.state.spotLightMap,wt.pointShadowMap.value=G.state.pointShadowMap,wt.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=Ht,J.uniformsList=null,Ht}function Al(F){if(F.uniformsList===null){let V=F.currentProgram.getUniforms();F.uniformsList=Fs.seqWithValue(V.seq,F.uniforms)}return F.uniformsList}function Cl(F,V){let $=Pt.get(F);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Cu(F,V,$,J,G){V.isScene!==!0&&(V=ut),T.resetTextureUnits();let lt=V.fog,Et=J.isMeshStandardMaterial?V.environment:null,Bt=w===null?m.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Os,Mt=(J.isMeshStandardMaterial?q:b).get(J.envMap||Et),Ot=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ht=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),wt=!!$.morphAttributes.position,ne=!!$.morphAttributes.normal,ue=!!$.morphAttributes.color,de=mi;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(de=m.toneMapping);let $e=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ie=$e!==void 0?$e.length:0,bt=Pt.get(J),Nn=d.state.lights;if(I===!0&&(W===!0||F!==_)){let on=F===_&&J.id===v;ct.setState(J,F,on)}let se=!1;J.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Nn.state.version||bt.outputColorSpace!==Bt||G.isBatchedMesh&&bt.batching===!1||!G.isBatchedMesh&&bt.batching===!0||G.isBatchedMesh&&bt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&bt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&bt.instancing===!1||!G.isInstancedMesh&&bt.instancing===!0||G.isSkinnedMesh&&bt.skinning===!1||!G.isSkinnedMesh&&bt.skinning===!0||G.isInstancedMesh&&bt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&bt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&bt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&bt.instancingMorph===!1&&G.morphTexture!==null||bt.envMap!==Mt||J.fog===!0&&bt.fog!==lt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==ct.numPlanes||bt.numIntersection!==ct.numIntersection)||bt.vertexAlphas!==Ot||bt.vertexTangents!==Ht||bt.morphTargets!==wt||bt.morphNormals!==ne||bt.morphColors!==ue||bt.toneMapping!==de||bt.morphTargetsCount!==ie)&&(se=!0):(se=!0,bt.__version=J.version);let fn=bt.currentProgram;se===!0&&(fn=zr(J,V,G));let es=!1,Qe=!1,js=!1,fe=fn.getUniforms(),Mn=bt.uniforms;if(It.useProgram(fn.program)&&(es=!0,Qe=!0,js=!0),J.id!==v&&(v=J.id,Qe=!0),es||_!==F){It.buffers.depth.getReversed()?(k.copy(F.projectionMatrix),Pd(k),Id(k),fe.setValue(N,"projectionMatrix",k)):fe.setValue(N,"projectionMatrix",F.projectionMatrix),fe.setValue(N,"viewMatrix",F.matrixWorldInverse);let ri=fe.map.cameraPosition;ri!==void 0&&ri.setValue(N,Y.setFromMatrixPosition(F.matrixWorld)),_t.logarithmicDepthBuffer&&fe.setValue(N,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&fe.setValue(N,"isOrthographic",F.isOrthographicCamera===!0),_!==F&&(_=F,Qe=!0,js=!0)}if(G.isSkinnedMesh){fe.setOptional(N,G,"bindMatrix"),fe.setOptional(N,G,"bindMatrixInverse");let on=G.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),fe.setValue(N,"boneTexture",on.boneTexture,T))}G.isBatchedMesh&&(fe.setOptional(N,G,"batchingTexture"),fe.setValue(N,"batchingTexture",G._matricesTexture,T),fe.setOptional(N,G,"batchingIdTexture"),fe.setValue(N,"batchingIdTexture",G._indirectTexture,T),fe.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&fe.setValue(N,"batchingColorTexture",G._colorsTexture,T));let Qs=$.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0)&&Nt.update(G,$,fn),(Qe||bt.receiveShadow!==G.receiveShadow)&&(bt.receiveShadow=G.receiveShadow,fe.setValue(N,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Mn.envMap.value=Mt,Mn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(Mn.envMapIntensity.value=V.environmentIntensity),Qe&&(fe.setValue(N,"toneMappingExposure",m.toneMappingExposure),bt.needsLights&&yu(Mn,js),lt&&J.fog===!0&&pt.refreshFogUniforms(Mn,lt),pt.refreshMaterialUniforms(Mn,J,O,Z,d.state.transmissionRenderTarget[F.id]),Fs.upload(N,Al(bt),Mn,T)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Fs.upload(N,Al(bt),Mn,T),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&fe.setValue(N,"center",G.center),fe.setValue(N,"modelViewMatrix",G.modelViewMatrix),fe.setValue(N,"normalMatrix",G.normalMatrix),fe.setValue(N,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let on=J.uniformsGroups;for(let ri=0,oi=on.length;ri<oi;ri++){let yl=on[ri];H.update(yl,fn),H.bind(yl,fn)}}return fn}function yu(F,V){F.ambientLightColor.needsUpdate=V,F.lightProbe.needsUpdate=V,F.directionalLights.needsUpdate=V,F.directionalLightShadows.needsUpdate=V,F.pointLights.needsUpdate=V,F.pointLightShadows.needsUpdate=V,F.spotLights.needsUpdate=V,F.spotLightShadows.needsUpdate=V,F.rectAreaLights.needsUpdate=V,F.hemisphereLights.needsUpdate=V}function _u(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(F,V,$){Pt.get(F.texture).__webglTexture=V,Pt.get(F.depthTexture).__webglTexture=$;let J=Pt.get(F);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,V){let $=Pt.get(F);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(F,V=0,$=0){w=F,C=V,M=$;let J=!0,G=null,lt=!1,Et=!1;if(F){let Mt=Pt.get(F);if(Mt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(N.FRAMEBUFFER,null),J=!1;else if(Mt.__webglFramebuffer===void 0)T.setupRenderTarget(F);else if(Mt.__hasExternalTextures)T.rebindTextures(F,Pt.get(F.texture).__webglTexture,Pt.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let wt=F.depthTexture;if(Mt.__boundDepthTexture!==wt){if(wt!==null&&Pt.has(wt)&&(F.width!==wt.image.width||F.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(F)}}let Ot=F.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Et=!0);let Ht=Pt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Ht[V])?G=Ht[V][$]:G=Ht[V],lt=!0):F.samples>0&&T.useMultisampledRTT(F)===!1?G=Pt.get(F).__webglMultisampledFramebuffer:Array.isArray(Ht)?G=Ht[$]:G=Ht,D.copy(F.viewport),S.copy(F.scissor),R=F.scissorTest}else D.copy(ht).multiplyScalar(O).floor(),S.copy(xt).multiplyScalar(O).floor(),R=Wt;if(It.bindFramebuffer(N.FRAMEBUFFER,G)&&J&&It.drawBuffers(F,G),It.viewport(D),It.scissor(S),It.setScissorTest(R),lt){let Mt=Pt.get(F.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Mt.__webglTexture,$)}else if(Et){let Mt=Pt.get(F.texture),Ot=V||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.__webglTexture,$||0,Ot)}v=-1},this.readRenderTargetPixels=function(F,V,$,J,G,lt,Et){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Pt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Et!==void 0&&(Bt=Bt[Et]),Bt){It.bindFramebuffer(N.FRAMEBUFFER,Bt);try{let Mt=F.texture,Ot=Mt.format,Ht=Mt.type;if(!_t.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=F.width-J&&$>=0&&$<=F.height-G&&N.readPixels(V,$,J,G,Xt.convert(Ot),Xt.convert(Ht),lt)}finally{let Mt=w!==null?Pt.get(w).__webglFramebuffer:null;It.bindFramebuffer(N.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(F,V,$,J,G,lt,Et){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Pt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Et!==void 0&&(Bt=Bt[Et]),Bt){let Mt=F.texture,Ot=Mt.format,Ht=Mt.type;if(!_t.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=F.width-J&&$>=0&&$<=F.height-G){It.bindFramebuffer(N.FRAMEBUFFER,Bt);let wt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,wt),N.bufferData(N.PIXEL_PACK_BUFFER,lt.byteLength,N.STREAM_READ),N.readPixels(V,$,J,G,Xt.convert(Ot),Xt.convert(Ht),0);let ne=w!==null?Pt.get(w).__webglFramebuffer:null;It.bindFramebuffer(N.FRAMEBUFFER,ne);let ue=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Rd(N,ue,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,wt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,lt),N.deleteBuffer(wt),N.deleteSync(ue),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,V=null,$=0){F.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,F=arguments[1]);let J=Math.pow(2,-$),G=Math.floor(F.image.width*J),lt=Math.floor(F.image.height*J),Et=V!==null?V.x:0,Bt=V!==null?V.y:0;T.setTexture2D(F,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,Et,Bt,G,lt),It.unbindTexture()},this.copyTextureToTexture=function(F,V,$=null,J=null,G=0){F.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,F=arguments[1],V=arguments[2],G=arguments[3]||0,$=null);let lt,Et,Bt,Mt,Ot,Ht,wt,ne,ue,de=F.isCompressedTexture?F.mipmaps[G]:F.image;$!==null?(lt=$.max.x-$.min.x,Et=$.max.y-$.min.y,Bt=$.isBox3?$.max.z-$.min.z:1,Mt=$.min.x,Ot=$.min.y,Ht=$.isBox3?$.min.z:0):(lt=de.width,Et=de.height,Bt=de.depth||1,Mt=0,Ot=0,Ht=0),J!==null?(wt=J.x,ne=J.y,ue=J.z):(wt=0,ne=0,ue=0);let $e=Xt.convert(V.format),ie=Xt.convert(V.type),bt;V.isData3DTexture?(T.setTexture3D(V,0),bt=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(T.setTexture2DArray(V,0),bt=N.TEXTURE_2D_ARRAY):(T.setTexture2D(V,0),bt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);let Nn=N.getParameter(N.UNPACK_ROW_LENGTH),se=N.getParameter(N.UNPACK_IMAGE_HEIGHT),fn=N.getParameter(N.UNPACK_SKIP_PIXELS),es=N.getParameter(N.UNPACK_SKIP_ROWS),Qe=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,de.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,de.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Mt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ot),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ht);let js=F.isDataArrayTexture||F.isData3DTexture,fe=V.isDataArrayTexture||V.isData3DTexture;if(F.isRenderTargetTexture||F.isDepthTexture){let Mn=Pt.get(F),Qs=Pt.get(V),on=Pt.get(Mn.__renderTarget),ri=Pt.get(Qs.__renderTarget);It.bindFramebuffer(N.READ_FRAMEBUFFER,on.__webglFramebuffer),It.bindFramebuffer(N.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let oi=0;oi<Bt;oi++)js&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pt.get(F).__webglTexture,G,Ht+oi),F.isDepthTexture?(fe&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pt.get(V).__webglTexture,G,ue+oi),N.blitFramebuffer(Mt,Ot,lt,Et,wt,ne,lt,Et,N.DEPTH_BUFFER_BIT,N.NEAREST)):fe?N.copyTexSubImage3D(bt,G,wt,ne,ue+oi,Mt,Ot,lt,Et):N.copyTexSubImage2D(bt,G,wt,ne,ue+oi,Mt,Ot,lt,Et);It.bindFramebuffer(N.READ_FRAMEBUFFER,null),It.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else fe?F.isDataTexture||F.isData3DTexture?N.texSubImage3D(bt,G,wt,ne,ue,lt,Et,Bt,$e,ie,de.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(bt,G,wt,ne,ue,lt,Et,Bt,$e,de.data):N.texSubImage3D(bt,G,wt,ne,ue,lt,Et,Bt,$e,ie,de):F.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,G,wt,ne,lt,Et,$e,ie,de.data):F.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,G,wt,ne,de.width,de.height,$e,de.data):N.texSubImage2D(N.TEXTURE_2D,G,wt,ne,lt,Et,$e,ie,de);N.pixelStorei(N.UNPACK_ROW_LENGTH,Nn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,se),N.pixelStorei(N.UNPACK_SKIP_PIXELS,fn),N.pixelStorei(N.UNPACK_SKIP_ROWS,es),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe),G===0&&V.generateMipmaps&&N.generateMipmap(bt),It.unbindTexture()},this.copyTextureToTexture3D=function(F,V,$=null,J=null,G=0){return F.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,J=arguments[1]||null,F=arguments[2],V=arguments[3],G=arguments[4]||0),fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,V,$,J,G)},this.initRenderTarget=function(F){Pt.get(F).__webglFramebuffer===void 0&&T.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?T.setTextureCube(F,0):F.isData3DTexture?T.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?T.setTexture2DArray(F,0):T.setTexture2D(F,0),It.unbindTexture()},this.resetState=function(){C=0,M=0,w=null,It.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Ls=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Yi=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Oo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=q0,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ge=new U,vr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ar=class extends Ci{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},As,cr=new U,Cs=new U,ys=new U,_s=new Lt,lr=new Lt,xh=new xe,fo=new U,xr=new U,po=new U,Lx=new Lt,r0=new Lt,Nx=new Lt,zo=class extends be{constructor(t=new Ar){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new Me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Oo(e,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new vr(n,3,0,!1)),As.setAttribute("uv",new vr(n,2,3,!1))}this.geometry=As,this.material=t,this.center=new Lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),xh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-ys.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;mo(fo.set(-.5,-.5,0),ys,o,Cs,s,r),mo(xr.set(.5,-.5,0),ys,o,Cs,s,r),mo(po.set(.5,.5,0),ys,o,Cs,s,r),Lx.set(0,0),r0.set(1,0),Nx.set(1,1);let a=t.ray.intersectTriangle(fo,xr,po,!1,cr);if(a===null&&(mo(xr.set(-.5,.5,0),ys,o,Cs,s,r),r0.set(0,1),a=t.ray.intersectTriangle(fo,po,xr,!1,cr),a===null))return;let c=t.ray.origin.distanceTo(cr);c<t.near||c>t.far||e.push({distance:c,point:cr.clone(),uv:fi.getInterpolation(cr,fo,xr,po,Lx,r0,Nx,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function mo(i,t,e,n,s,r){_s.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(lr.x=r*_s.x-s*_s.y,lr.y=s*_s.x+r*_s.y):lr.copy(_s),i.copy(t),i.x+=lr.x,i.y+=lr.y,i.applyMatrix4(xh)}var uc=class extends Ke{constructor(t=null,e=1,n=1,s,r,o,a,c,l=sn,x=sn,h,u){super(null,o,a,c,l,x,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cr=class extends De{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bs=new xe,Ux=new xe,Eo=[],Ox=new Kn,F1=new xe,hr=new St,ur=new jn,Ho=class extends St{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,F1)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bs),Ox.copy(t.boundingBox).applyMatrix4(Bs),this.boundingBox.union(Ox)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bs),ur.copy(t.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bs),Ux.multiplyMatrices(n,Bs),hr.matrixWorld=Ux,hr.raycast(t,Eo);for(let o=0,a=Eo.length;o<a;o++){let c=Eo[o];c.instanceId=r,c.object=this,e.push(c)}Eo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new uc(new Float32Array(s*this.count),s,this.count,Pc,Sn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Rn=class extends Ke{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class i extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new U,x=new Lt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){let f=n+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),x.x=(o[u]/t+1)/2,x.y=(o[u+1]/t+1)/2,c.push(x.x,x.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Xe=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let x=[],h=[],u=[],f=[],p=0,y=[],E=n/2,d=0;A(),o===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(x),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2));function A(){let m=new U,B=new U,C=0,M=(e-t)/n;for(let w=0;w<=r;w++){let v=[],_=w/r,D=_*(e-t)+t;for(let S=0;S<=s;S++){let R=S/s,P=R*c+a,L=Math.sin(P),z=Math.cos(P);B.x=D*L,B.y=-_*n+E,B.z=D*z,h.push(B.x,B.y,B.z),m.set(L,M,z).normalize(),u.push(m.x,m.y,m.z),f.push(R,1-_),v.push(p++)}y.push(v)}for(let w=0;w<s;w++)for(let v=0;v<r;v++){let _=y[v][w],D=y[v+1][w],S=y[v+1][w+1],R=y[v][w+1];(t>0||v!==0)&&(x.push(_,D,R),C+=3),(e>0||v!==r-1)&&(x.push(D,S,R),C+=3)}l.addGroup(d,C,0),d+=C}function g(m){let B=p,C=new Lt,M=new U,w=0,v=m===!0?t:e,_=m===!0?1:-1;for(let S=1;S<=s;S++)h.push(0,E*_,0),u.push(0,_,0),f.push(.5,.5),p++;let D=p;for(let S=0;S<=s;S++){let P=S/s*c+a,L=Math.cos(P),z=Math.sin(P);M.x=v*z,M.y=E*_,M.z=v*L,h.push(M.x,M.y,M.z),u.push(0,_,0),C.x=L*.5+.5,C.y=z*.5*_+.5,f.push(C.x,C.y),p++}for(let S=0;S<s;S++){let R=B+S,P=D+S;m===!0?x.push(P,P+1,R):x.push(P+1,P,R),w+=3}l.addGroup(d,w,m===!0?1:2),d+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cn=class i extends Xe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},dc=class i extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),x(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(A){let g=new U,m=new U,B=new U;for(let C=0;C<e.length;C+=3)f(e[C+0],g),f(e[C+1],m),f(e[C+2],B),c(g,m,B,A)}function c(A,g,m,B){let C=B+1,M=[];for(let w=0;w<=C;w++){M[w]=[];let v=A.clone().lerp(m,w/C),_=g.clone().lerp(m,w/C),D=C-w;for(let S=0;S<=D;S++)S===0&&w===C?M[w][S]=v:M[w][S]=v.clone().lerp(_,S/D)}for(let w=0;w<C;w++)for(let v=0;v<2*(C-w)-1;v++){let _=Math.floor(v/2);v%2===0?(u(M[w][_+1]),u(M[w+1][_]),u(M[w][_])):(u(M[w][_+1]),u(M[w+1][_+1]),u(M[w+1][_]))}}function l(A){let g=new U;for(let m=0;m<r.length;m+=3)g.x=r[m+0],g.y=r[m+1],g.z=r[m+2],g.normalize().multiplyScalar(A),r[m+0]=g.x,r[m+1]=g.y,r[m+2]=g.z}function x(){let A=new U;for(let g=0;g<r.length;g+=3){A.x=r[g+0],A.y=r[g+1],A.z=r[g+2];let m=E(A)/2/Math.PI+.5,B=d(A)/Math.PI+.5;o.push(m,1-B)}p(),h()}function h(){for(let A=0;A<o.length;A+=6){let g=o[A+0],m=o[A+2],B=o[A+4],C=Math.max(g,m,B),M=Math.min(g,m,B);C>.9&&M<.1&&(g<.2&&(o[A+0]+=1),m<.2&&(o[A+2]+=1),B<.2&&(o[A+4]+=1))}}function u(A){r.push(A.x,A.y,A.z)}function f(A,g){let m=A*3;g.x=t[m+0],g.y=t[m+1],g.z=t[m+2]}function p(){let A=new U,g=new U,m=new U,B=new U,C=new Lt,M=new Lt,w=new Lt;for(let v=0,_=0;v<r.length;v+=9,_+=6){A.set(r[v+0],r[v+1],r[v+2]),g.set(r[v+3],r[v+4],r[v+5]),m.set(r[v+6],r[v+7],r[v+8]),C.set(o[_+0],o[_+1]),M.set(o[_+2],o[_+3]),w.set(o[_+4],o[_+5]),B.copy(A).add(g).add(m).divideScalar(3);let D=E(B);y(C,_+0,A,D),y(M,_+2,g,D),y(w,_+4,m,D)}}function y(A,g,m,B){B<0&&A.x===1&&(o[g]=A.x-1),m.x===0&&m.z===0&&(o[g]=B/2/Math.PI+.5)}function E(A){return Math.atan2(A.z,-A.x)}function d(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ns=class i extends dc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Vo=class i extends Me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],x=[],h=t,u=(e-t)/s,f=new U,p=new Lt;for(let y=0;y<=s;y++){for(let E=0;E<=n;E++){let d=r+E/n*o;f.x=h*Math.cos(d),f.y=h*Math.sin(d),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,x.push(p.x,p.y)}h+=u}for(let y=0;y<s;y++){let E=y*(n+1);for(let d=0;d<n;d++){let A=d+E,g=A,m=A+n+1,B=A+n+2,C=A+1;a.push(g,m,C),a.push(m,B,C)}}this.setIndex(a),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Go=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,x=[],h=new U,u=new U,f=[],p=[],y=[],E=[];for(let d=0;d<=n;d++){let A=[],g=d/n,m=0;d===0&&o===0?m=.5/e:d===n&&c===Math.PI&&(m=-.5/e);for(let B=0;B<=e;B++){let C=B/e;h.x=-t*Math.cos(s+C*r)*Math.sin(o+g*a),h.y=t*Math.cos(o+g*a),h.z=t*Math.sin(s+C*r)*Math.sin(o+g*a),p.push(h.x,h.y,h.z),u.copy(h).normalize(),y.push(u.x,u.y,u.z),E.push(C+m,1-g),A.push(l++)}x.push(A)}for(let d=0;d<n;d++)for(let A=0;A<e;A++){let g=x[d][A+1],m=x[d][A],B=x[d+1][A],C=x[d+1][A+1];(d!==0||o>0)&&f.push(g,m,C),(d!==n-1||c<Math.PI)&&f.push(m,B,C)}this.setIndex(f),this.setAttribute("position",new $t(p,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(E,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Jt=class extends Ci{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function go(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function S1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Us=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fc=class extends Us{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vl:r=t,a=2*e-n;break;case Gl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Vl:o=t,c=2*n-e;break;case Gl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,x=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*x,this._offsetNext=o*x}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,x=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),y=p*p,E=y*p,d=-u*E+2*u*y-u*p,A=(1+u)*E+(-1.5-2*u)*y+(-.5+u)*p+1,g=(-1-f)*E+(1.5+f)*y+.5*p,m=f*E-f*y;for(let B=0;B!==a;++B)r[B]=d*o[x+B]+A*o[l+B]+g*o[c+B]+m*o[h+B];return r}},pc=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,x=(n-e)/(s-e),h=1-x;for(let u=0;u!==a;++u)r[u]=o[l+u]*h+o[c+u]*x;return r}},mc=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=go(e,this.TimeBufferType),this.values=go(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:go(t.times,Array),values:go(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Mo:e=this.InterpolantFactoryMethodDiscrete;break;case Y0:e=this.InterpolantFactoryMethodLinear;break;case Sa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return Y0;case this.InterpolantFactoryMethodSmooth:return Sa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&S1(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],x=t[a+1];if(l!==x&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*n,u=h-n,f=h+n;for(let p=0;p!==n;++p){let y=e[h+p];if(y!==e[u+p]||y!==e[f+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Y0;var qi=class extends yn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Mo;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends yn{};Ec.prototype.ValueTypeName="color";var gc=class extends yn{};gc.prototype.ValueTypeName="number";var vc=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let x=l+a;l!==x;l+=4)Tn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Wo=class extends yn{InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}};Wo.prototype.ValueTypeName="quaternion";Wo.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends yn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Mo;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ac=class extends yn{};Ac.prototype.ValueTypeName="vector";var Cc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(x){a++,r===!1&&s.onStart!==void 0&&s.onStart(x,o,a),r=!0},this.itemEnd=function(x){o++,s.onProgress!==void 0&&s.onProgress(x,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(x){s.onError!==void 0&&s.onError(x)},this.resolveURL=function(x){return c?c(x):x},this.setURLModifier=function(x){return c=x,this},this.addHandler=function(x,h){return l.push(x,h),this},this.removeHandler=function(x){let h=l.indexOf(x);return h!==-1&&l.splice(h,2),this},this.getHandler=function(x){for(let h=0,u=l.length;h<u;h+=2){let f=l[h],p=l[h+1];if(f.global&&(f.lastIndex=0),f.test(x))return p}return null}}},T1=new Cc,yc=class{constructor(t){this.manager=t!==void 0?t:T1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};yc.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Pn=class extends yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},o0=new xe,zx=new U,Hx=new U,Xo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;zx.setFromMatrixPosition(t.matrixWorld),e.position.copy(zx),Hx.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hx),e.updateMatrixWorld(),o0.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o0),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(o0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Vx=new xe,dr=new U,a0=new U,_c=class extends Xo{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),dr.setFromMatrixPosition(t.matrixWorld),n.position.copy(dr),a0.copy(n.position),a0.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(a0),n.updateMatrixWorld(),s.makeTranslation(-dr.x,-dr.y,-dr.z),Vx.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vx)}},_r=class extends yr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _c}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Bc=class extends Xo{constructor(){super(new ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ti=class extends yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Bc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Uc="\\[\\]\\.:\\/",R1=new RegExp("["+Uc+"]","g"),Oc="[^"+Uc+"]",P1="[^"+Uc.replace("\\.","")+"]",I1=/((?:WC+[\/:])*)/.source.replace("WC",Oc),k1=/(WCOD+)?/.source.replace("WCOD",P1),L1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oc),N1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oc),U1=new RegExp("^"+I1+k1+L1+N1+"$"),O1=["material","materials","bones","map"],Mc=class{constructor(t,e,n){let s=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(R1,"")}static parseTrackName(t){let e=U1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);O1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let x=0;x<t.length;x++)if(t[x].name===l){l=x;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=Mc;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);var Mr=i=>new Jt({color:i,flatShading:!0}),z1={dark:Mr(2830138),gear:Mr(4870499),steel:Mr(10134445),wood:Mr(9067058),olive:Mr(5200698),lens:new ve({color:6211839})},hh=[{lz:-.1,muz:-.3,parts:[[.05,.06,.28,"steel",0,.025,-.11],[.045,.04,.22,"dark",0,-.02,-.08],[.05,.14,.07,"dark",0,-.09,.03,.18],[.03,.03,.05,"steel",0,.025,-.27],[.025,.02,.025,"dark",0,.065,-.2],[.03,.02,.025,"dark",0,.065,.02]]},{lz:-.28,muz:-.58,parts:[[.07,.095,.4,"olive",0,0,-.12],[.05,.05,.15,"dark",0,.005,-.4],[.025,.025,.12,"steel",0,.005,-.32],[.04,.22,.06,"dark",0,-.16,-.2],[.05,.12,.06,"dark",0,-.1,.03,.15],[.02,.03,.22,"steel",0,0,.2],[.03,.05,.04,"dark",0,.07,-.05]]},{lz:-.4,muz:-.9,parts:[[.07,.09,.3,"dark",0,0,-.04],[.05,.05,.66,"steel",0,.02,-.55],[.04,.04,.5,"gear",0,-.03,-.46],[.07,.065,.22,"wood",0,-.035,-.4],[.065,.11,.3,"wood",0,-.02,.24],[.05,.12,.06,"wood",0,-.09,.04,.2],[.07,.07,.04,"dark",0,.02,-.89]]},{lz:-.36,muz:-1,parts:[[.065,.09,.42,"dark",0,0,-.1],[.03,.03,.62,"steel",0,.012,-.62],[.05,.05,.08,"dark",0,.012,-.96],[.055,.055,.32,"dark",0,.115,-.15],[.07,.07,.05,"dark",0,.115,-.32],[.045,.045,.012,"lens",0,.115,-.348],[.02,.04,.03,"gear",0,.07,-.05],[.02,.04,.03,"gear",0,.07,-.27],[.065,.12,.34,"gear",0,-.01,.26],[.05,.12,.06,"dark",0,-.09,.03,.15],[.035,.06,.07,"dark",0,-.07,-.2],[.015,.14,.015,"gear",-.03,-.07,-.6,.3],[.015,.14,.015,"gear",.03,-.07,-.6,.3]]}],uh={},H1=(i,t,e)=>uh[`${i}|${t}|${e}`]||(uh[`${i}|${t}|${e}`]=new Ae(i,t,e));function $o(i,t){let e=hh[t]||hh[0];i.clear();for(let[n,s,r,o,a,c,l,x]of e.parts){let h=new St(H1(n,s,r),z1[o]);h.position.set(a,c,l),x&&(h.rotation.x=x),i.add(h)}return e}var Hs=(i,t,e)=>Math.max(t,Math.min(e,i)),Jo=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},V1=(i,t,e)=>i+Jo(t-i)*e,Vs=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-n*e)),dh={},Ye=(i,t,e)=>dh[`${i}|${t}|${e}`]||(dh[`${i}|${t}|${e}`]=new Ae(i,t,e)),G1=new Cn(.07,.5,5),fh=new ve({color:16753210}),ph=new ve({color:16773280}),W1=new yi(.55,14),mh=new ve({color:0,transparent:!0,opacity:.3,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});function zc(i){let t=[],e=[],n=[],s=[],r=new Ft,o=0;for(let[c,l,x,h,u]of i){r.set(l);let f=c.attributes.position,p=c.attributes.normal;for(let y=0;y<f.count;y++)t.push(f.getX(y)+x,f.getY(y)+h,f.getZ(y)+u),e.push(p.getX(y),p.getY(y),p.getZ(y)),n.push(r.r,r.g,r.b);for(let y=0;y<c.index.count;y++)s.push(c.index.getX(y)+o);o+=f.count}let a=new Me;return a.setAttribute("position",new $t(t,3)),a.setAttribute("normal",new $t(e,3)),a.setAttribute("color",new $t(n,3)),a.setIndex(s),a}var Gs=class{constructor(t,e){this.r=t,this.name=e.name;let n=h=>new Jt({color:h,flatShading:!0});this.mShirt=n(e.color),this.mPants=n(2897232),this.mSkin=n(1578e4),this.mBody=new Jt({vertexColors:!0,flatShading:!0});let s=n(2830138),r=n(4870499),o=new ve({color:7328767}),a=(h,u,f,p,y,E)=>{let d=new St(u,f);return d.position.set(p,y,E),h.add(d),d},c=(h,u,f,p)=>{let y=new pe;return y.position.set(u,f,p),h.add(y),y};this.root=new pe,this.root.rotation.order="YXZ",this.hips=c(this.root,0,.82,0),a(this.hips,Ye(.5,.18,.3),this.mPants,0,.02,0);let l=zc([[Ye(.19,.38,.21),2897232,0,-.19,0],[Ye(.21,.1,.32),2830138,0,-.36,-.05]]),x=h=>{let u=c(this.hips,h,0,0);a(u,Ye(.21,.42,.23),this.mPants,0,-.21,0);let f=c(u,0,-.42,0);return a(f,l,this.mBody,0,0,0),{thigh:u,knee:f}};this.legL=x(-.14),this.legR=x(.14),this.torso=c(this.hips,0,.06,0),a(this.torso,zc([[Ye(.6,.58,.32),e.color,0,.33,0],[Ye(.64,.16,.34),4870499,0,.5,0],[Ye(.36,.5,.2),2830138,0,.38,.26],[Ye(.1,.12,.1),4870499,-.1,.08,.26],[Ye(.1,.12,.1),4870499,.1,.08,.26]]),this.mBody,0,0,0),this.flames=[-.1,.1].map(h=>{let u=new St(G1,fh);return u.rotation.x=Math.PI,u.position.set(h,-.2,.26),u.visible=!1,this.torso.add(u),u}),this.head=c(this.torso,0,.64,0),a(this.head,zc([[Ye(.3,.3,.3),1578e4,0,.15,0],[Ye(.34,.14,.34),2830138,0,.3,0]]),this.mBody,0,0,0),a(this.head,Ye(.28,.07,.04),o,0,.19,-.16),this.aim=c(this.torso,0,.5,0),this.gun=c(this.aim,.14,-.05,-.28),this.gun.scale.setScalar(1.1),a(this.aim,Ye(.12,.12,.36),this.mShirt,.24,-.03,-.15).rotation.y=.58,this.armL=a(this.aim,Ye(.12,.12,1),this.mShirt,0,-.04,0),this.muzzle=a(this.aim,Ye(.16,.16,.16),ph,.14,-.05,-.9),this.muzzle.visible=!1,this.wid=-1,this.setWeapon(e.weapon==null?1:e.weapon),this.tag=t.makeTag(e.name),this.tag.position.y=2.25,this.root.add(this.tag),this.shadow=new St(W1,mh),this.shadow.rotation.x=-Math.PI/2,this.root.traverse(h=>{h.isMesh&&h.material!==fh&&h.material!==ph&&!h.material.isMeshBasicMaterial&&(h.castShadow=!0)}),t.scene.add(this.root),t.scene.add(this.shadow),this.legYaw=e.yaw||0,this.phase=0,this.t=Math.random()*10,this.cur={tL:0,tR:0,kL:0,kR:0,air:0,lean:0},this.wasGr=!0,this.airVy=0,this.land=0,this.step=0,this.flash=0,this.recoil=0,this.muz=0,this.deadT=0,this.puffT=0}setWeapon(t){this.wid=t;let e=$o(this.gun,t);this.muzzle.position.set(.14,-.05,-.28+e.muz*1.1-.05);let n=-.338,s=0,r=.14,o=-.095,a=-.28+e.lz*1.1,c=r-n,l=a-s,x=Math.hypot(c,l);this.armL.position.set((n+r)/2,-.06,(s+a)/2),this.armL.rotation.y=Math.atan2(c,l),this.armL.scale.z=x}hit(){this.flash=.14}shoot(){this.recoil=1,this.muz=.05}rename(t){this.root.remove(this.tag),this.tag=this.r.makeTag(t),this.tag.position.y=2.25,this.root.add(this.tag),this.name=t}dispose(){this.r.scene.remove(this.root),this.r.scene.remove(this.shadow)}update(t,e,n,s){let r=this.r;this.t+=e;let o=t.vx||0,a=t.vy||0,c=t.vz||0;if(this.root.position.set(t.x,t.y,t.z),this.tag.visible=!n&&t.alive,r.realShadows)this.shadow.visible=!1;else{let C=mn(t.x,t.y+.5,t.z,0,-1,0,40),M=t.y+.5-C,w=Math.max(0,t.y-M);this.shadow.position.set(t.x,M+.04,t.z),this.shadow.scale.setScalar(1-Math.min(.5,w*.05)),mh.opacity=.3,this.shadow.visible=t.alive||this.deadT<2.2}if(!n&&t.alive&&r.lodCam){let C=t.x-r.lodCam.x,M=t.z-r.lodCam.z,w=C*C+M*M>38*38;if(this.tag.visible=!w,w){if(this.lodSkip=!this.lodSkip,this.lodDt=(this.lodDt||0)+e,this.lodSkip)return;e=this.lodDt,this.lodDt=0}}this.flash=Math.max(0,this.flash-e);let l=this.flash/.14;if(l>0||this.flashOn){this.flashOn=l>0;for(let C of[this.mShirt,this.mPants,this.mSkin,this.mBody])C.emissive.setRGB(l*.9,l*.05,l*.05)}if(!t.alive){this.deadT+=e;let C=Math.min(1,this.deadT/.45),M=1-(1-C)*(1-C);this.root.rotation.set(M*1.5,this.legYaw,0),this.hips.rotation.x=0,this.torso.rotation.set(0,0,0),this.legL.thigh.rotation.x=.2*M,this.legR.thigh.rotation.x=-.15*M,this.legL.knee.rotation.x=-.3*M,this.legR.knee.rotation.x=-.1*M,this.aim.rotation.x=.4*M,this.aim.position.z=0;for(let w of this.flames)w.visible=!1;this.muzzle.visible=!1,this.root.visible=this.deadT<2.6&&!s;return}this.deadT=0,this.root.visible=!s;let x=Math.hypot(o,c),h=this.legYaw,u=1;if(x>.6){let C=Math.atan2(-o,-c);Math.abs(Jo(C-t.yaw))>1.9&&(C+=Math.PI,u=-1),h=C}else Math.abs(Jo(this.legYaw-t.yaw))>1&&(h=t.yaw);this.legYaw=V1(this.legYaw,h,1-Math.exp(-12*e)),this.root.rotation.set(0,this.legYaw,0),this.torso.rotation.y=Hs(Jo(t.yaw-this.legYaw),-1.3,1.3);let f=o*-Math.sin(this.legYaw)+c*-Math.cos(this.legYaw);if(t.gr||(this.airVy=a),t.gr&&!this.wasGr&&this.airVy<-6){if(this.land=Hs(-this.airVy/20,.25,1),this.land>.5)for(let C=0;C<5;C++){let M=C/5*6.283;r.puff(t.x,t.y+.1,t.z,Math.cos(M)*1.6,.6,Math.sin(M)*1.6,.18,.4,!0)}n&&r.onLand&&r.onLand(this.land)}this.wasGr=!!t.gr,this.land*=Math.exp(-8*e);let p=0,y=0,E=0,d=0,A=0,g=0,m=0;if(t.gr){let C=Hs(x/7,0,1);this.phase+=u*x*e*1.9,p=Math.sin(this.phase)*.85*C,y=-p,E=Math.max(0,Math.sin(this.phase+1.3))*.95*C,d=Math.max(0,Math.sin(this.phase+1.3+Math.PI))*.95*C,m=Math.abs(Math.cos(this.phase))*.05*C+Math.sin(this.t*2.2)*.008*(1-C),g=-Hs(f*.018,-.08,.14);let M=Math.floor(this.phase/Math.PI);M!==this.step&&(this.step=M,n&&x>2&&r.onStep&&r.onStep())}else t.thr?(p=-.2+Math.sin(this.t*17)*.06,y=-.35+Math.sin(this.t*17+1)*.06,E=.6,d=.75,A=-(.12+Hs(f*.03,0,.4))):a>1?(p=.75,y=.35,E=1.1,d=.7):(p=.25,y=-.1,E=.5,d=.9,A=-Hs(f*.015,0,.2));p+=this.land*.8,y+=this.land*.8,E+=this.land*1.2,d+=this.land*1.2;let B=this.cur;B.tL=Vs(B.tL,p,e,16),B.tR=Vs(B.tR,y,e,16),B.kL=Vs(B.kL,E,e,16),B.kR=Vs(B.kR,d,e,16),B.air=Vs(B.air,A,e,8),B.lean=Vs(B.lean,g,e,8),this.legL.thigh.rotation.x=B.tL,this.legR.thigh.rotation.x=B.tR,this.legL.knee.rotation.x=-B.kL,this.legR.knee.rotation.x=-B.kR,this.hips.rotation.x=B.air,this.hips.position.y=.82+m-this.land*.2,this.torso.rotation.x=B.lean,t.weapon!=null&&t.weapon!==this.wid&&this.setWeapon(t.weapon),this.recoil*=Math.exp(-16*e),this.aim.rotation.x=t.pitch-B.lean-B.air+this.recoil*.07,this.aim.position.z=this.recoil*.1,this.head.rotation.x=t.pitch*.6-B.lean-B.air,this.muz-=e,this.muzzle.visible=this.muz>0,this.muzzle.visible&&this.muzzle.scale.setScalar(.7+Math.random()*.8);for(let C of this.flames)C.visible=!!t.thr,t.thr&&(C.scale.y=.7+Math.random()*.7);if(t.thr)for(this.puffT-=e;this.puffT<=0;){this.puffT+=.04;let C=Math.sin(t.yaw)*.28,M=Math.cos(t.yaw)*.28;r.puff(t.x+C,t.y+.75,t.z+M,o*.3+(Math.random()-.5)*.8,-3.2-Math.random()*1.5,c*.3+(Math.random()-.5)*.8,.2,.5)}}};function Ko(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Me,l=0;for(let x=0;x<i.length;++x){let h=i[x],u=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+x+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+x+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+x+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+x+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+x+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+x+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,x),l+=f}}if(e){let x=0,h=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+x);x+=i[u].attributes.position.count}c.setIndex(h)}for(let x in r){let h=Eh(r[x]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+x+" attribute."),null;c.setAttribute(x,h)}for(let x in o){let h=o[x][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[x]=[];for(let u=0;u<h;++u){let f=[];for(let y=0;y<o[x].length;++y)f.push(o[x][y][u]);let p=Eh(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+x+" morphAttribute."),null;c.morphAttributes[x].push(p)}}return c}function Eh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let x=i[l];if(t===void 0&&(t=x.array.constructor),t!==x.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=x.itemSize),e!==x.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=x.normalized),n!==x.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=x.gpuType),s!==x.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=x.count*e}let o=new t(r),a=new De(o,e,n),c=0;for(let l=0;l<i.length;++l){let x=i[l];if(x.isInterleavedBufferAttribute){let h=c/e;for(let u=0,f=x.count;u<f;u++)for(let p=0;p<e;p++){let y=x.getComponent(u,p);a.setComponent(u+h,p,y)}}else o.set(x.array,c);c+=x.count*e}return s!==void 0&&(a.gpuType=s),a}var wr=new U(.62,.52,.38).normalize(),_i={top:new Ft("#2a6fd4"),mid:new Ft("#68a6e8"),hor:new Ft("#bcd8f0")},Hc={top:new Ft("#01030a"),mid:new Ft("#040a1a"),hor:new Ft("#0a1424")},Kg=_i.hor,X1=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww; // pin to the far plane
}`,Y1=`
precision highp float;
varying vec3 vDir;
uniform vec3 uTop, uMid, uHor, uSun;
uniform float uDark, uTime, uSunVis;
uniform int uOct;

float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float h31(vec3 p) { p = fract(p * vec3(443.897, 441.423, 437.195)); p += dot(p, p.yzx + 19.19); return fract((p.x + p.y) * p.z); }
float vn(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 5; i++) { if (i >= uOct) break; s += a * vn(p); p = p * 2.03 + vec2(17.0, 9.0); a *= 0.5; }
  return s;
}

void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  float t = clamp(h, 0.0, 1.0);
  vec3 col = mix(uHor, uMid, smoothstep(0.0, 0.32, t));
  col = mix(col, uTop, smoothstep(0.22, 0.95, t));
  float day = 1.0 - uDark;

  // sun: disc, tight glow, wide warm haze that also lifts the horizon on the sun's side
  float s = max(dot(d, uSun), 0.0);
  float disc = smoothstep(0.99935, 0.99975, s);
  float glow = pow(s, 90.0) * 0.55 + pow(s, 9.0) * 0.20 + pow(s, 2.5) * 0.06;
  vec3 sunCol = vec3(1.0, 0.93, 0.78);
  col += sunCol * glow * uSunVis;
  col = mix(col, sunCol * 2.2, disc * uSunVis);

  // clouds on a virtual plane high above, so they thin out and converge toward the horizon
  if (h > 0.0 && uOct > 0) {
    vec2 uv = d.xz / (h + 0.12) * 0.85 + vec2(uTime * 0.012, uTime * 0.005);
    float dn = fbm(uv * 1.15);
    float cov = smoothstep(0.50, 0.74, dn) * smoothstep(0.0, 0.16, h);
    if (cov > 0.002) {
      float dn2 = fbm((uv + uSun.xz * 0.06) * 1.15); // sample toward the sun: lit side vs shaded side
      float lit = clamp((dn - dn2) * 5.0 + 0.55, 0.0, 1.0);
      vec3 shade = mix(vec3(0.50, 0.58, 0.72), vec3(0.10, 0.12, 0.2), uDark);
      vec3 bright = mix(vec3(1.0, 0.99, 0.96), vec3(0.18, 0.22, 0.34), uDark);
      vec3 cc = mix(shade, bright, lit);
      cc += sunCol * pow(s, 6.0) * 0.35 * uSunVis * (1.0 - cov * 0.4); // silver lining near the sun
      col = mix(col, cc, cov * 0.94);
    }
  }

  // stars (and a faint twinkle) once it is dark
  if (uDark > 0.35 && h > 0.0) {
    vec3 sp = floor(d * 110.0);
    float r = h31(sp);
    float star = step(0.9965, r) * smoothstep(0.35, 0.8, uDark) * smoothstep(0.02, 0.2, h);
    float tw = 0.65 + 0.35 * sin(uTime * 2.0 + r * 60.0);
    col += vec3(0.85, 0.92, 1.0) * star * tw * 1.4;
  }

  col = clamp(col, 0.0, 1.6);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;function jo(i,t=4){let e=new xn({vertexShader:X1,fragmentShader:Y1,uniforms:{uTop:{value:_i.top.clone()},uMid:{value:_i.mid.clone()},uHor:{value:_i.hor.clone()},uSun:{value:wr.clone()},uDark:{value:0},uTime:{value:0},uSunVis:{value:1},uOct:{value:t}},side:ze,depthWrite:!1,depthTest:!0,fog:!1,toneMapped:!1}),n=new St(new Go(100,24,16),e);n.frustumCulled=!1,n.renderOrder=1e3,i.add(n);let s=_i.hor.clone(),r=0;return{mesh:n,horizon:s,setDetail(o){e.uniforms.uOct.value=o},update(o,a,c=0){r+=a,n.position.copy(o);let l=e.uniforms;l.uTime.value=r,l.uDark.value=c,l.uSunVis.value=1-Math.min(1,Math.max(0,(c-.15)/.5)),l.uTop.value.copy(_i.top).lerp(Hc.top,c),l.uMid.value.copy(_i.mid).lerp(Hc.mid,c),l.uHor.value.copy(_i.hor).lerp(Hc.hor,c),s.copy(l.uHor.value)}}}var Dr={uTime:{value:0},uCam:{value:new U},uFade:{value:new Lt(34,58)},uWind:{value:1}};function vh(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function q1(i=4){let t=[],e=[],n=[],s=vh(99),r=(a,c,l,x,h,u)=>{for(let[f,p]of[[a,x],[c,h],[l,u]])t.push(f[0],f[1],f[2]),e.push(p,p,p),n.push(0,1,0)};for(let a=0;a<i;a++){let c=a/i*Math.PI+s()*.5,l=(s()-.5)*.22,x=(s()-.5)*.22,h=.7+s()*.5,u=.045+s()*.02,f=(.12+s()*.2)*(s()<.5?-1:1),p=Math.cos(c),y=Math.sin(c),E=(C,M,w)=>[l+p*C+-y*w,M,x+y*C+p*w],d=E(-u,0,0),A=E(u,0,0),g=E(-u*.62,h*.5,f*.35),m=E(u*.62,h*.5,f*.35),B=E(0,h,f);r(d,A,g,.42,.42,.78),r(A,m,g,.42,.78,.78),r(g,m,B,.78,.78,1.15)}let o=new Me;return o.setAttribute("position",new $t(t,3)),o.setAttribute("color",new $t(e,3)),o.setAttribute("normal",new $t(n,3)),o}function Z1(){let i=new yi(.2,6);i.rotateX(-Math.PI/2+.35),i.translate(0,1,0);let t=i.attributes.position.count,e=new Float32Array(t*3);for(let n=0;n<t;n++)e[n*3+1]=1;return i.setAttribute("normal",new De(e,3)),i.toNonIndexed()}function gh(i){let t=new Jt({vertexColors:i,side:Oe});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,Dr),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        uniform float uTime, uWind; uniform vec3 uCam; uniform vec2 uFade;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 ibase = vec3(0.0);
        #ifdef USE_INSTANCING
          ibase = instanceMatrix[3].xyz;
        #endif
        float gs = 1.0 - smoothstep(uFade.x, uFade.y, distance(ibase.xz, uCam.xz));
        transformed *= gs;`).replace("#include <project_vertex>",`
        vec4 mvPosition = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          mvPosition = instanceMatrix * mvPosition;
        #endif
        vec3 wp = mvPosition.xyz;
        float hf = clamp(position.y, 0.0, 1.5); hf *= hf;
        float wv = sin(wp.x * 0.33 + uTime * 1.7) + 0.7 * sin(wp.z * 0.27 + uTime * 1.15 + wp.x * 0.11);
        float gust = sin(wp.x * 0.045 + wp.z * 0.035 + uTime * 0.55);
        float flutter = sin(wp.x * 2.1 + wp.z * 1.7 + uTime * 5.0) * 0.012;
        mvPosition.x += hf * uWind * (wv * 0.05 + gust * 0.09 + 0.04 + flutter);
        mvPosition.z += hf * uWind * (wv * 0.03 + gust * 0.045 + flutter);
        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;`)},t.customProgramCacheKey=()=>"grass-wind",t}function Ah(i,{half:t,blocked:e,forest:n}){let r=vh(4242),o=q1(4),a=Z1(),c=gh(!0),l=gh(!1),x=new pe;x.name="grass",i.add(x);let h=["#5f9a3a","#6aa83f","#56903a","#79b04a","#4f8a38","#8ab356"].map(C=>new Ft(C)),u=new Ft("#3f7430"),f=["#ffffff","#ffe14d","#ff7aa8","#b58cff","#ff6a3d"].map(C=>new Ft(C)),p=new be,y=new Ft,E=[],d=.7;for(let C=-t;C<t;C+=20)for(let M=-t;M<t;M+=20){let w=[],v=[];for(let R=C;R<C+20;R+=d)for(let P=M;P<M+20;P+=d){let L=R+r()*d,z=P+r()*d,Z=r();if(e(L,z))continue;let O=n(L,z);if(r()<.045){v.push({x:L,z,order:Z,s:.4+r()*.25,c:r()*f.length|0,ry:r()*6});continue}w.push({x:L,z,order:Z,s:(O?.5:.38)+r()*.32,ry:r()*6.283,g:r()*h.length|0,f:O})}w.sort((R,P)=>R.order-P.order),v.sort((R,P)=>R.order-P.order);let _=new U(C+20/2,.4,M+20/2),D=new jn(_,20*.75),S=(R,P,L,z)=>{if(!L.length)return null;let Z=new Ho(R,P,L.length);return L.forEach((O,K)=>{p.position.set(O.x,0,O.z),p.rotation.set(0,O.ry,0),p.scale.set(O.s*(z?1:1.1),O.s,O.s*(z?1:1.1)),p.updateMatrix(),Z.setMatrixAt(K,p.matrix),z?y.copy(f[O.c]):(y.copy(h[O.g]),O.f&&y.lerp(u,.35)),Z.setColorAt(K,y)}),Z.instanceMatrix.needsUpdate=!0,Z.instanceColor.needsUpdate=!0,Z.boundingSphere=D,Z.receiveShadow=!0,Z.castShadow=!1,x.add(Z),Z};E.push({centre:_,tuft:S(o,c,w,!1),flower:S(a,l,v,!0),nT:w.length,nF:v.length})}let A=.6,g=!0,m=()=>{for(let C of E)C.tuft&&(C.tuft.count=Math.max(0,Math.floor(C.nT*A))),C.flower&&(C.flower.count=Math.max(0,Math.floor(C.nF*A)));x.visible=g&&A>0};m();let B=new U;return{group:x,setQuality(C,M=58){A=C,g=C>0,Dr.uFade.value.set(M*.58,M),m()},update(C,M){if(!x.visible)return;Dr.uTime.value+=M,Dr.uCam.value.copy(C),B.copy(C);let w=Dr.uFade.value.y+20*.8;for(let v of E){let _=Math.hypot(v.centre.x-B.x,v.centre.z-B.z)<w;v.tuft&&(v.tuft.visible=_),v.flower&&(v.flower.visible=_)}}}}var Gc=12376304,$1=70,J1=190,Bh=215,Vc=7,me=()=>(Vc=Vc*16807%2147483647,(Vc-1)/2147483646),Mh=(i,t,e)=>{let n=Math.sin(i*12.9898+t*78.233+e*37.719)*43758.5453;return n-Math.floor(n)};function rn(i,t=i){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function wh(i){let t=new Rn(i);return t.wrapS=t.wrapT=vi,t.colorSpace=Ie,t.anisotropy=4,t}function ni(i,t,e,n,s,r=2){for(let o=0;o<n;o++)i.fillStyle=s[me()*s.length|0],i.fillRect(me()*t,me()*e,1+me()*r,1+me()*r)}function K1(){let i={},t=(e,n,s)=>{i[e]={map:wh(s),tile:n}};{let[e,n]=rn(128);n.fillStyle="#9b9b96",n.fillRect(0,0,128,128),ni(n,128,128,900,["#8c8c88","#a8a8a3","#85857f","#b0afa8"],2),n.fillStyle="rgba(60,60,55,.35)",n.fillRect(0,126,128,2),n.fillRect(126,0,2,128),n.strokeStyle="rgba(60,60,55,.35)",n.lineWidth=1,n.beginPath(),n.moveTo(20,40),n.lineTo(34,52),n.lineTo(30,70),n.stroke(),t("concrete",2,e)}{let[e,n]=rn(128);n.fillStyle="#767982",n.fillRect(0,0,128,128),ni(n,128,128,700,["#6c6f78","#82858e","#62656d"],2),n.fillStyle="rgba(30,30,35,.4)",n.fillRect(0,0,3,128);let s=n.createLinearGradient(0,128,0,80);s.addColorStop(0,"rgba(30,25,20,.35)"),s.addColorStop(1,"rgba(30,25,20,0)"),n.fillStyle=s,n.fillRect(0,80,128,48),t("wallc",4,e)}{let[e,n]=rn(128);n.fillStyle="#8f857a",n.fillRect(0,0,128,128);let s=["#a65a3e","#9a4f36","#b06444","#94503a","#a85f45"];for(let r=0;r<8;r++)for(let o=0;o<5;o++){let a=r%2?-16:0;n.fillStyle=s[me()*s.length|0],n.fillRect(o*32+a+1,r*16+1,30,14)}ni(n,128,128,300,["rgba(0,0,0,.12)","rgba(255,255,255,.08)"],2),t("brick",2,e)}{let[e,n]=rn(128);n.fillStyle="#b98a52",n.fillRect(0,0,128,128),n.fillStyle="#a77a45";for(let s=0;s<128;s+=21)n.fillRect(0,s,128,2);ni(n,128,128,400,["#a87b46","#c4955c","#9c703d"],3),n.fillStyle="#6e4a27",n.fillRect(0,0,128,10),n.fillRect(0,118,128,10),n.fillRect(0,0,10,128),n.fillRect(118,0,10,128),n.strokeStyle="#6e4a27",n.lineWidth=9,n.beginPath(),n.moveTo(8,8),n.lineTo(120,120),n.stroke(),n.fillStyle="#d3b383";for(let[s,r]of[[5,5],[123,5],[5,123],[123,123]])n.fillRect(s-2,r-2,4,4);t("crate",1,e)}{let[e,n]=rn(128);n.fillStyle="#6b5f45",n.fillRect(0,0,128,128);let s=["#b9a679","#c4b184","#ad9a6e","#bfae82"];for(let r=0;r<4;r++)for(let o=0;o<3;o++){let a=o*43+(r%2?-21:0),c=r*32;n.fillStyle=s[me()*s.length|0],n.beginPath(),n.ellipse(a+21,c+16,21,14,0,0,7),n.fill(),n.strokeStyle="rgba(70,58,35,.5)",n.lineWidth=1.5,n.stroke()}t("sandbag",1.2,e)}{let[e,n]=rn(128);for(let s=0;s<16;s++){let r=n.createLinearGradient(s*8,0,s*8+8,0);r.addColorStop(0,"#6e7983"),r.addColorStop(.5,"#909ba5"),r.addColorStop(1,"#68737d"),n.fillStyle=r,n.fillRect(s*8,0,8,128)}ni(n,128,128,300,["rgba(120,80,50,.18)","rgba(0,0,0,.1)"],3),t("roofm",2,e)}{let[e,n]=rn(128);n.fillStyle="#566170",n.fillRect(0,0,128,128),n.fillStyle="#6a7686";for(let s=0;s<128;s+=16)for(let r=0;r<128;r+=16)n.beginPath(),n.moveTo(r+8,s+2),n.lineTo(r+14,s+8),n.lineTo(r+8,s+14),n.lineTo(r+2,s+8),n.fill();n.fillStyle="#3d4551",n.fillRect(0,0,128,2),n.fillRect(0,0,2,128),t("grate",2,e)}{let[e,n]=rn(128);n.fillStyle="#2b2d31",n.fillRect(0,0,128,128),n.fillStyle="#f0b823";for(let s=-128;s<256;s+=32)n.beginPath(),n.moveTo(s,128),n.lineTo(s+16,128),n.lineTo(s+144,0),n.lineTo(s+128,0),n.fill();t("hazard",2,e)}{let[e,n]=rn(128);n.fillStyle="#56637a",n.fillRect(0,0,128,128);for(let s=0;s<128;s+=32)n.fillStyle="rgba(255,255,255,.12)",n.fillRect(s,0,5,128),n.fillStyle="rgba(0,0,0,.18)",n.fillRect(s+24,0,8,128);n.fillStyle="#2f3846";for(let s=8;s<128;s+=40)for(let r=6;r<128;r+=32)n.fillRect(r,s,4,4);t("steel",2,e)}for(let[e,n,s,r]of[["cont_red","#a8362b","#7e2620","#c14a3d"],["cont_blue","#2f5d9a","#22456f","#4373b3"],["cont_green","#3d7a4a","#2b5835","#4f9360"],["cont_orange","#d1802a","#a15f1c","#e69a45"]]){let[o,a]=rn(128);a.fillStyle=n,a.fillRect(0,0,128,128);for(let c=0;c<16;c++){let l=a.createLinearGradient(c*8,0,c*8+8,0);l.addColorStop(0,s),l.addColorStop(.45,r),l.addColorStop(1,n),a.globalAlpha=.55,a.fillStyle=l,a.fillRect(c*8,8,8,112),a.globalAlpha=1}a.fillStyle=s,a.fillRect(0,0,128,8),a.fillRect(0,120,128,8),ni(a,128,128,260,["rgba(110,60,30,.35)","rgba(0,0,0,.12)"],3),t(e,2.6,o)}{let[e,n]=rn(128);n.fillStyle="#6d8b50",n.fillRect(0,0,128,128),ni(n,128,128,1400,["#648247","#78965a","#5d7a42","#82a062"],2),t("grass",8,e)}return i}var Ch={wall:["wallc","wallc"],deck:["hazard","grate"],pillar:["steel","steel"],cover:["crate","crate"],brick:["brick","concrete"],roof:["roofm","roofm"],concrete:["concrete","concrete"],sandbag:["sandbag","sandbag"],container_red:["cont_red","roofm"],container_blue:["cont_blue","roofm"],container_green:["cont_green","roofm"],container_orange:["cont_orange","roofm"]};function j1(i,t,e){let[n,s]=Ch[t.kind]||Ch.concrete,r=.9+Mh(t.x,t.y,t.z)*.14,{minx:o,maxx:a,miny:c,maxy:l,minz:x,maxz:h}=t,u=[{n:[1,0,0],p:[[a,c,x],[a,c,h],[a,l,h],[a,l,x]],uv:f=>[f[2],f[1]],t:n,shade:.92},{n:[-1,0,0],p:[[o,c,x],[o,c,h],[o,l,h],[o,l,x]],uv:f=>[f[2],f[1]],t:n,shade:.92},{n:[0,1,0],p:[[o,l,x],[a,l,x],[a,l,h],[o,l,h]],uv:f=>[f[0],f[2]],t:s,shade:1},{n:[0,0,1],p:[[o,c,h],[a,c,h],[a,l,h],[o,l,h]],uv:f=>[f[0],f[1]],t:n,shade:1},{n:[0,0,-1],p:[[o,c,x],[a,c,x],[a,l,x],[o,l,x]],uv:f=>[f[0],f[1]],t:n,shade:.96}];c>.05&&u.push({n:[0,-1,0],p:[[o,c,x],[a,c,x],[a,c,h],[o,c,h]],uv:f=>[f[0],f[2]],t:n,shade:.6});for(let f of u){let p=i[f.t]||(i[f.t]={pos:[],nor:[],uv:[],col:[]}),y=e[f.t].tile,E=[0,1,2,0,2,3],[d,A,g]=f.p,m=A[0]-d[0],B=A[1]-d[1],C=A[2]-d[2],M=g[0]-d[0],w=g[1]-d[1],v=g[2]-d[2],_=B*v-C*w,D=C*M-m*v,S=m*w-B*M;_*f.n[0]+D*f.n[1]+S*f.n[2]<0&&(E=[0,2,1,0,3,2]);for(let R of E){let P=f.p[R],[L,z]=f.uv(P);p.pos.push(P[0],P[1],P[2]),p.nor.push(f.n[0],f.n[1],f.n[2]),p.uv.push(L/y,z/y);let Z=f.shade*r;p.col.push(Z,Z,Z)}}}function Q1(i){let t=new Me;return t.setAttribute("position",new $t(i.pos,3)),t.setAttribute("normal",new $t(i.nor,3)),t.setAttribute("uv",new $t(i.uv,2)),t.setAttribute("color",new $t(i.col,3)),t}function tg(){let t=1024/(jt*2),[e,n]=rn(1024);n.fillStyle="#6d8b50",n.fillRect(0,0,1024,1024);for(let r=0;r<90;r++){let o=me()*1024,a=me()*1024,c=30+me()*70,l=n.createRadialGradient(o,a,0,o,a,c),x=me()<.5;l.addColorStop(0,x?"rgba(150,180,100,.16)":"rgba(40,70,30,.16)"),l.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=l,n.fillRect(o-c,a-c,c*2,c*2)}ni(n,1024,1024,14e3,["#648247","#78965a","#5d7a42","#82a062"],3);let s={dirt:{base:"#8c7b5e",spk:["#7a6a4f","#9d8c6d","#6f6048","#a39577"]},forest:{base:"#51703b",spk:["#456132","#5d7d44","#3c5629","#6a6f3d"]},concrete:{base:"#8f9196",spk:["#85878c","#9a9ca1","#7c7e83"]}};for(let r of oe.pads||[]){let o=s[r.m];if(!o)continue;let a=(r.x-r.w/2+jt)*t,c=(r.z-r.d/2+jt)*t,l=r.w*t,x=r.d*t;if(n.fillStyle=o.base,r.m==="concrete")n.fillRect(a,c,l,x);else{n.fillRect(a+4,c+4,l-8,x-8);for(let h=0;h<l*x/90;h++)n.fillStyle=o.base,n.globalAlpha=.5,n.fillRect(a-6+me()*(l+12),c-6+me()*(x+12),3+me()*5,3+me()*5);n.globalAlpha=1}n.save(),n.beginPath(),n.rect(a,c,l,x),n.clip(),ni(n,1024,1024,l*x/14,o.spk,3),n.restore()}return wh(e)}function Ce(i,t,e,n=.08){let s=i.index?i.toNonIndexed():i.clone();s.deleteAttribute("uv"),s.applyMatrix4(e);let r=new Ft(t),o=1-n+me()*n*2,a=s.attributes.position.count,c=new Float32Array(a*3);for(let l=0;l<a;l++)c[l*3]=r.r*o,c[l*3+1]=r.g*o,c[l*3+2]=r.b*o;return s.setAttribute("color",new De(c,3)),s}var eg=new xe,ng=new Tn,ig=new U,sg=new U,rg=new ln,ye=(i,t,e,n,s,r,o=0)=>eg.compose(ig.set(i,t,e),ng.setFromEuler(rg.set(0,o,0)),sg.set(n,s,r)).clone(),og=new Ft(15660024);function ag(){let i=[],t=new Xe(.28,.4,2.4,6),e=new Cn(1,1,7,1,!0),n=new Ns(1,0),s=new Xe(.42,.42,1.1,8),r=new Xe(.44,.44,.07,8),o=new Cn(1,1,6,10,!0),a=[3107642,3635777,2776885,3964485];for(let c of oe.decor){let l=c.s||1,x=c.r||0;if(c.t==="pine"){let h=l*.8;i.push(Ce(t,6965806,ye(c.x,1.2*h,c.z,h,h,h,x),.05));let u=a[c.x*7+c.z*3&3&a.length-1]||a[0];i.push(Ce(e,u,ye(c.x,(1.8+1.5)*h,c.z,2.3*h,3.1*h,2.3*h,x))),i.push(Ce(e,u,ye(c.x,(3.7+1.4)*h,c.z,1.85*h,2.8*h,1.85*h,x+.4))),i.push(Ce(e,u,ye(c.x,(5.5+1.2)*h,c.z,1.3*h,2.4*h,1.3*h,x+.8)))}else if(c.t==="rock")i.push(Ce(n,9145744,ye(c.x,.35*l,c.z,l*.95,l*.7,l*.9,x),.12)),i.push(Ce(n,8027520,ye(c.x+.7*l,.2*l,c.z+.3*l,l*.5,l*.4,l*.5,x+1),.1));else if(c.t==="barrel"){let h=c.c?3104670:11551022;i.push(Ce(s,h,ye(c.x,.55,c.z,1,1,1))),i.push(Ce(r,2303531,ye(c.x,.28,c.z,1,1,1),0)),i.push(Ce(r,2303531,ye(c.x,.82,c.z,1,1,1),0))}else if(c.t==="mount"){let h=18*l,u=22*l,f=Ce(o,7110549,ye(c.x,c.y+u/2,c.z,h,u,h,x),.1),p=f.attributes.position,y=f.attributes.color,E=new Ft;for(let d=0;d<p.count;d++){let A=(p.getY(d)-c.y)/u,g=Math.min(1,Math.max(0,(A-.62)/.12));E.setRGB(y.getX(d),y.getY(d),y.getZ(d)).lerp(og,g),y.setXYZ(d,E.r,E.g,E.b)}i.push(f)}}return Ko(i,!1)}var cg=[null,null,{size:2048,R:32},{size:3072,R:46}],yh=[{d:0,fade:40},{d:.22,fade:40},{d:.6,fade:54},{d:1,fade:66}],Wc=[2,3,4,5],lg=new U(0,1,0);function Xc(i,t=2.3){let e=new ti(16773334,t);e.position.copy(wr).multiplyScalar(100),i.add(e,e.target);let n=e.shadow.camera;n.near=1,n.far=240,e.shadow.bias=-5e-4,e.shadow.normalBias=.05;let s=null,r=new U,o=new U,a=new U,c=new U;return{light:e,setQuality(l){if(s=cg[l]||null,e.castShadow=!!s,!s)return;let x=s.R;n.left=-x,n.right=x,n.top=x,n.bottom=-x,n.updateProjectionMatrix(),e.shadow.mapSize.x!==s.size&&(e.shadow.mapSize.set(s.size,s.size),e.shadow.map&&(e.shadow.map.dispose(),e.shadow.map=null))},follow(l){if(c.set(l.x,0,l.z),s){a.copy(wr).negate(),r.crossVectors(a,lg).normalize(),o.crossVectors(r,a);let x=c.dot(r),h=c.dot(o),u=2*s.R/s.size;c.addScaledVector(r,Math.round(x/u)*u-x).addScaledVector(o,Math.round(h/u)*u-h)}e.target.position.copy(c),e.position.copy(c).addScaledVector(wr,100),e.target.updateMatrixWorld()}}}function $i(i,t=!0,e=!0){return i.castShadow=t,i.receiveShadow=e,i}function xg(){let[i,t]=rn(256);t.fillStyle="#808080",t.fillRect(0,0,256,256);for(let n=0;n<9e3;n++){let s=90+me()*100|0;t.fillStyle=`rgb(${s},${s},${s})`,t.fillRect(me()*256,me()*256,1+me()*2,1+me()*5)}for(let n=0;n<40;n++){let s=me()*256,r=me()*256,o=14+me()*30,a=t.createRadialGradient(s,r,0,s,r,o),c=me()<.5;a.addColorStop(0,c?"rgba(40,40,40,.3)":"rgba(200,200,200,.3)"),a.addColorStop(1,"rgba(128,128,128,0)"),t.fillStyle=a,t.fillRect(s-o,r-o,o*2,o*2)}let e=new Rn(i);return e.wrapS=e.wrapT=vi,e.anisotropy=8,e}function _h(i,t,e){i.onBeforeCompile=n=>{n.uniforms.uDetail={value:t},n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
 diffuseColor.rgb *= 0.45 + texture2D(uDetail, vMapUv * ${e.toFixed(2)}).g * 1.1;`)},i.customProgramCacheKey=()=>"detail"+e}function hg(){let i=oe.boxes.filter(r=>r.miny<.6),t=(oe.pads||[]).filter(r=>r.m==="dirt"||r.m==="concrete"),e=(oe.pads||[]).filter(r=>r.m==="forest"),n=oe.decor.filter(r=>r.t==="rock"||r.t==="barrel"),s=(r,o,a,c)=>Math.abs(o-r.x)<r.w/2+c&&Math.abs(a-r.z)<r.d/2+c;return{blocked(r,o){for(let a of i)if(r>a.minx-.35&&r<a.maxx+.35&&o>a.minz-.35&&o<a.maxz+.35)return!0;for(let a of t)if(s(a,r,o,-.2)||a.m==="dirt"&&s(a,r,o,1.2)&&Mh(r,o,3)<.65)return!0;for(let a of n){let c=a.t==="rock"?1.3*(a.s||1):.8;if(Math.abs(r-a.x)<c&&Math.abs(o-a.z)<c)return!0}return!1},forest(r,o){return e.some(a=>s(a,r,o,0))}}}function Dh(i){let t=jo(i,4);i.background=t.horizon.clone(),i.fog=new Ls(t.horizon.clone(),$1,J1),i.add(new Pn(13624575,9078384,1.55));let e=Xc(i,2.3),n=K1(),s={},r=p=>s[p]||(s[p]=new Jt({map:n[p].map,vertexColors:!0,flatShading:!0})),o=xg(),a=new Jt({map:tg(),flatShading:!0});_h(a,o,jt*2/1.6);let c=$i(new St(new Qn(jt*2,jt*2),a),!1,!0);c.rotation.x=-Math.PI/2,i.add(c);let l=new Jt({map:n.grass.map.clone(),flatShading:!0});l.map.needsUpdate=!0,l.map.repeat.set(1,1),_h(l,o,5);let x=260;for(let[p,y,E,d]of[[0,-(jt+x)/2,x*2,x-jt],[0,(jt+x)/2,x*2,x-jt],[-(jt+x)/2,0,x-jt,jt*2],[(jt+x)/2,0,x-jt,jt*2]]){let A=new Qn(E,d),g=A.attributes.uv,m=n.grass.tile;for(let C=0;C<g.count;C++)g.setXY(C,(g.getX(C)-.5)*E/m+p/m,(g.getY(C)-.5)*d/m-y/m);let B=$i(new St(A,l),!1,!0);B.rotation.x=-Math.PI/2,B.position.set(p,0,y),i.add(B)}let h={};for(let p of oe.boxes)p.hide||j1(h,p,n);for(let p of Object.keys(h))i.add($i(new St(Q1(h[p]),r(p))));i.add($i(new St(ag(),new Jt({vertexColors:!0,flatShading:!0}))));let u=Ah(i,{half:jt,...hg()}),f={t:0};return{sun:e,setQuality(p){e.setQuality(p),u.setQuality(yh[p].d,yh[p].fade),t.setDetail(Wc[p])},update(p,y){t.update(p,y,0),e.follow(p),u.update(p,y)}}}var bh={gallery:8292241,rail:11186875,hut:9071173,hutroof:5913130,crate:10185274,sandbag:12101498},_n=(i,t,e)=>i+(t-i)*e;function Fh(i,t=i){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function ug(){let[t,e]=Fh(512),n=512/2,s=e.createRadialGradient(n,n,0,n,n,n),r=[[0,"#3f7a3c"],[.6,"#46823d"],[.76,"#86974f"],[.82,"#d6c48e"],[.93,"#cdb980"],[.965,"#a89868"],[1,"#6f8f8a"]];for(let[l,x]of r)s.addColorStop(l,x);e.fillStyle=s,e.fillRect(0,0,512,512);let o=5,a=()=>(o=o*16807%2147483647,(o-1)/2147483646);for(let l=0;l<5200;l++){let x=a()*512,h=a()*512,u=Math.hypot(x-n,h-n)/n;u>1||(e.fillStyle=u<.78?a()<.5?"#2f6a33":"#58954a":a()<.5?"#bba979":"#e2d3a0",e.fillRect(x,h,2+a()*3,2+a()*3))}e.strokeStyle="rgba(190,170,120,.55)",e.lineWidth=16,e.lineCap="round",e.beginPath(),e.moveTo(n,n+20),e.lineTo(n,512*.93),e.stroke();let c=new Rn(t);return c.colorSpace=Ie,c.anisotropy=4,c}function dg(){let[t,e]=Fh(256);e.fillStyle="#ffffff",e.fillRect(0,0,256,256),e.strokeStyle="rgba(120,170,205,.55)",e.lineWidth=3;let n=11,s=()=>(n=n*16807%2147483647,(n-1)/2147483646);for(let o=0;o<46;o++){let a=s()*256,c=s()*256,l=14+s()*26;e.beginPath(),e.moveTo(a,c),e.quadraticCurveTo(a+l/2,c-5,a+l,c),e.stroke(),a+l>256&&(e.beginPath(),e.moveTo(a-256,c),e.quadraticCurveTo(a-256+l/2,c-5,a-256+l,c),e.stroke())}let r=new Rn(t);return r.wrapS=r.wrapT=vi,r.repeat.set(70,70),r.colorSpace=Ie,r}function fg(){let i=[],t=new Ae(1,1,1);for(let l of er.boxes)l.hide||!bh[l.kind]||i.push(Ce(t,bh[l.kind],ye(l.x,l.y+l.h/2,l.z,l.w,l.h,l.d),.07));let e=3.1;for(let l=0;l<5;l++){let x=l*e,h=x+e,u=_n(2.3,1.9,x/15.5),f=_n(2.3,1.9,h/15.5),p=new Xe(f*Math.SQRT2,u*Math.SQRT2,e,4,1,!1);p.rotateY(Math.PI/4),i.push(Ce(p,l%2?15856110:13121069,ye(0,x+e/2,0,1,1,1),.03))}let n=new Cn(2.3*Math.SQRT2,1.8,4);n.rotateY(Math.PI/4),i.push(Ce(n,3810336,ye(0,19+.9,0,1,1,1),0));for(let l of[-1,1])for(let x of[-1,1])i.push(Ce(t,2764342,ye(l*1.3,16+1.5,x*1.3,.25,3,.25),0));let s=new Xe(.28,.4,2.4,6),r=new Cn(1,1,7,1,!0),o=new Ns(1,0),a=new Xe(.42,.42,1.1,8),c=[3107642,3635777,2776885,3964485];for(let l of er.decor){let x=l.s||1,h=l.r||0;if(l.t==="pine"){let u=x*.8,f=c[Math.abs(l.x*7+l.z*3|0)&3];i.push(Ce(s,6965806,ye(l.x,1.2*u,l.z,u,u,u,h),.05)),i.push(Ce(r,f,ye(l.x,3.3*u,l.z,2.3*u,3.1*u,2.3*u,h))),i.push(Ce(r,f,ye(l.x,5.1*u,l.z,1.85*u,2.8*u,1.85*u,h+.4))),i.push(Ce(r,f,ye(l.x,6.7*u,l.z,1.3*u,2.4*u,1.3*u,h+.8)))}else if(l.t==="rock")i.push(Ce(o,9145744,ye(l.x,.35*x,l.z,x*.95,x*.7,x*.9,h),.12)),i.push(Ce(o,8027520,ye(l.x+.7*x,.2*x,l.z+.3*x,x*.5,x*.4,x*.5,h+1),.1));else if(l.t==="barrel")i.push(Ce(a,l.c?3104670:11551022,ye(l.x,.55,l.z,1,1,1)));else if(l.t==="dock"){i.push(Ce(t,9071173,ye(l.x,.14,l.z-1,3.2,.2,14),.06));for(let u=0;u<6;u++)for(let f of[-1,1])i.push(Ce(t,4863268,ye(l.x+f*1.5,-.25,l.z-7+u*2.4,.3,.9,.3),0))}}return Ko(i,!1)}function Sh(i){i.background=new Ft(Gc),i.fog=new Ls(Gc,70,190);let t=i.fog,e=new Pn(13624575,9078384,1.55);i.add(e);let n=Xc(i,2.3),s=n.light,r=new _r(16769712,0,26,1.2);i.add(r);let o=new _r(16771512,0,60,1.1);o.position.set(0,16+1.8,0),i.add(o);let a=new St(new yi(49,64),new Jt({map:ug()}));a.rotation.x=-Math.PI/2,$i(a,!1,!0),i.add(a);let c=new St(new Xe(49,49,.9,64,1,!0),new Jt({color:11902826,side:Oe}));c.position.y=-.45,i.add(c);let l=dg(),x=new Jt({map:l,color:2783398}),h=new St(new Qn(1400,1400),x);h.rotation.x=-Math.PI/2,h.position.y=-.9,i.add(h);let u=new Jt({vertexColors:!0,flatShading:!0});i.add($i(new St(fg(),u)));let f=new ve({color:16773552}),p=new St(new Ae(2.4,2.8,2.4),f);p.position.set(0,16+1.5,0),i.add(p);let y=new Xe(.25,5.5,50,12,1,!0);y.translate(0,-25,0),y.rotateZ(Math.PI/2);let E=new ve({color:16773304,transparent:!0,opacity:0,side:Oe,depthWrite:!1,blending:Bo,fog:!1}),d=new pe;d.add(new St(y,E));let A=new St(y,E);A.rotation.y=Math.PI,d.add(A),d.position.set(0,16+1.5,0),i.add(d);let g=jo(i,4),m=new pe,B=new St(new Ae(3.2,.9,8),new Jt({color:16053488}));B.position.y=.2,m.add(B);let C=new St(new Ae(3.25,.25,8.05),new Jt({color:13121069}));C.position.y=.3,m.add(C);let M=new St(new Ae(2,1.4,2.6),new Jt({color:15329764}));M.position.set(0,1.3,1),m.add(M),m.position.set(3.5,-.6,49),m.visible=!1,i.add(m);let w=new Cn(.45,1.5,4),v=new Jt({color:1120802}),_=[];for(let S=0;S<6;S++){let R=new St(w,v);R.visible=!1,i.add(R),_.push({m:R,a:Math.random()*6.28,r:52+Math.random()*22,sp:(.05+Math.random()*.06)*(S%2?1:-1)})}let D=0;return{sun:n,setQuality(S){n.setQuality(S),g.setDetail(Wc[S])},update(S,R,P){D+=R;let L=P?P.dark:0,z=P?P.fuel:0;g.update(S,R,L),n.follow(S),t.color.copy(g.horizon),i.background.copy(t.color),t.near=_n(70,9,L),t.far=_n(190,85,L),e.intensity=_n(1.55,.32,L),e.color.setRGB(_n(.92,.45,L),_n(.96,.55,L),1),s.intensity=_n(2.3,.06,L),x.color.setRGB(_n(.165,.02,L),_n(.47,.06,L),_n(.65,.1,L)),l.offset.x=D*.004%1,l.offset.y=D*.0025%1,r.position.set(S.x,S.y+.4,S.z),r.intensity=L*1.7;let Z=z>0;o.intensity=Z?2.4*(.35+.65*L)*(.94+.06*Math.sin(D*9)):0,f.color.setHex(Z?16773552:3816772),d.rotation.y=D*.8,E.opacity=Z?.1*Math.max(0,(L-.3)/.7):0,m.visible=!!(P&&P.rescue),m.visible&&(m.position.y=-.6+Math.sin(D*1.6)*.07);for(let O of _)O.m.visible=L>.5,O.m.visible&&(O.a+=O.sp*R,O.m.position.set(Math.cos(O.a)*O.r,-.55+Math.sin(D*2+O.r)*.08,Math.sin(O.a)*O.r),O.m.rotation.y=-O.a+(O.sp>0?0:Math.PI))}}}var Tr=180,Nh=3,Th=(Nh-1)*Tr+.9*Tr,Rh=600,pg=80,mg=10,Ph=44.5,Ih=2.7,ii=[{name:"Drowned",hp:70,spd:2.7,hw:.42,bh:1.35,h:1.75,dmg:16,rate:.9,reach:1.7},{name:"Hisser",hp:35,spd:3.9,hw:.4,bh:1,h:1.4,dmg:0,rate:0,reach:0},{name:"Stalker",hp:90,spd:8.5,hw:.32,bh:1.9,h:2.4,dmg:38,rate:1.1,reach:1.9},{name:"Mimic",hp:55,spd:5.5,hw:.5,bh:.7,h:.95,dmg:22,rate:.8,reach:1.8}],qc=0,Rr=1,Fr=2,Sr=3,Ji=0,Yc=1,je=i=>Math.round(i*100)/100;function kh(i){let t=i%Tr/Tr;return t<.38?0:t<.5?(t-.38)/.12:t<.88?1:1-(t-.88)/.12}var Lh=i=>i>0?13+i*.17:0,Uh=i=>({id:1e3+i.id,x:i.b.x,y:i.b.y,z:i.b.z,alive:!0,hw:ii[i.kind].hw,bh:ii[i.kind].bh,th:ii[i.kind].h,mon:i});function Zc(i){return{t:i.t,relax:!!i.rx,dark:i.dk,day:i.day,fuel:i.fu,hp:i.hp,lr:i.lr,end:i.end,rescue:!!i.resc,mons:i.m.map(t=>({id:t[0],kind:t[1],x:t[2],y:t[3],z:t[4],yaw:t[5],hp:t[6],aux:t[7],burn:!!t[8]})),crates:i.c.map(t=>({id:t[0],kind:t[1],x:t[2],y:t[3],z:t[4]}))}}var ta=class{constructor(t){this.g=t,this.reset()}reset(){this.t=0,this.mons=[],this.crates=[],this.nextId=1,this.fuel=pg,this.hp=Rh,this.spawnT=3,this.dropT=5,this.wasNight=!1,this.rescue=!1}dayNo(){return Math.min(Nh,Math.floor(this.t/Tr)+1)}alive(){return[...this.g.players.values()].filter(t=>t.alive)}hurtPlayer(t,e){if(!t.alive||this.g.over)return;let n=this.g;t.hp-=e,t.lastHit=n.time,n.events.push(["h",t.id,0,Math.round(e),0]),!(t.hp>0)&&(t.hp=0,t.alive=!1,t.deaths++,t.respawnAt=n.time+mg,t.cans=0,n.events.push(["k",0,t.id,-1]))}hitMonster(t,e,n,s){this.mons.includes(t)&&(t.hp-=n,t.flash=.12,this.g.events.push(["mh",t.id,e.id,n,s?1:0]),t.hp<=0&&this.killMonster(t,e))}killMonster(t,e){let n=this.mons.indexOf(t);n<0||(this.mons.splice(n,1),e&&e.kills++,this.g.events.push(["mk",t.id,e?e.id:0,t.kind]))}spawnMon(t,e,n){let s={id:this.nextId++,kind:t,hp:ii[t].hp,b:Pi(e,0,n),yaw:0,cool:.6,fuse:0,think:0,tgt:null,seen:!1,seenT:0,stuckT:0,lx:e,lz:n,sideT:0,side:1,flash:0,burn:!1,aux:0,inp:{mx:0,mz:0,yaw:0,jet:!1,jump:!1,spd:1}};return this.mons.push(s),s}shoreSpot(t){let e=this.g,n=this.alive(),s=null,r=-1;for(let o=0;o<8;o++){let a=e.rng()*Math.PI*2,c=Math.cos(a)*t,l=Math.sin(a)*t,x=1e9;for(let h of n)x=Math.min(x,Math.hypot(h.body.x-c,h.body.z-l));if(x>r&&(r=x,s=[c,l]),x>28)break}return s}director(t){let e=this.g,n=this.dayNo(),s=Math.max(1,this.alive().length);if(this.spawnT-=Vt,this.spawnT>0||(this.spawnT=Math.max(2.2,7-n*1.2-s*.4)+e.rng()*2,this.mons.length>=3+n*2+s*2))return;let r=n===1?[55,30,15]:n===2?[40,30,30]:[30,30,40],o=e.rng()*(r[0]+r[1]+r[2]),a=0;for(;a<2&&o>=r[a];)o-=r[a],a++;let c=this.shoreSpot(a===Fr?Ph-5:Ph);this.spawnMon(a,c[0],c[1])}dropCrate(){let t=this.g;for(let e=0;e<20;e++){let n=t.rng()*Math.PI*2,s=11+t.rng()*26,r=Math.cos(n)*s,o=Math.sin(n)*s;if(oe.boxes.some(x=>r>x.minx-1.2&&r<x.maxx+1.2&&o>x.minz-1.2&&o<x.maxz+1.2))continue;let a=t.rng(),c=a>.85,l=c?t.rng()<.5?Ji:Yc:a<.5?Ji:Yc;this.crates.push({id:this.nextId++,kind:l,mimic:c,x:r,z:o,y:70,landed:!1,age:0}),t.events.push(["drop",r,o]);return}}tick(){let t=this.g;this.t+=Vt;let e=kh(this.t),n=e>.5;n!==this.wasNight&&(this.wasNight=n,t.events.push(["phase",n?1:0,this.dayNo()])),this.fuel=Math.max(0,this.fuel-(n?.45:.04)*Vt),!n&&this.hp>0&&(this.hp=Math.min(Rh,this.hp+.8*Vt));let s=this.alive();for(let o of s)o.cans>0&&this.fuel<=85&&Math.hypot(o.body.x,o.body.z)<6.5&&(this.fuel=Math.min(100,this.fuel+30*o.cans),t.events.push(["dep",o.id,o.cans]),o.cans=0);this.updateCrates(s),this.dropT-=Vt,this.dropT<=0&&this.crates.length<6?(this.dropT=26,this.dropCrate()):this.dropT<=0&&(this.dropT=6),e>.5&&this.director(e);let r=Lh(this.fuel);for(let o of[...this.mons])this.mons.includes(o)&&this.updateMon(o,e,r,s);this.t>=Th?this.finish(!0):this.hp<=0?this.finish(!1):!s.length&&t.players.size&&this.finish(!1)}finish(t){let e=this.g;e.over||(this.rescue=t,e.over=!0,e.winner=t?1:-1,e.restartAt=e.time+14,e.events.push(["over",e.winner]))}updateCrates(t){let e=this.g;for(let n of[...this.crates]){if(!n.landed){n.y-=14*Vt,n.y<=0&&(n.y=0,n.landed=!0);continue}if(n.age+=Vt,n.age>140){this.crates.splice(this.crates.indexOf(n),1);continue}for(let s of t)if(!(Math.hypot(s.body.x-n.x,s.body.z-n.z)>(n.mimic?2.8:1.8)||s.body.y>2.2)){if(this.crates.splice(this.crates.indexOf(n),1),n.mimic){let o=this.spawnMon(Sr,n.x,n.z);o.cool=.3,e.events.push(["mimic",n.x,n.z])}else n.kind===Ji?(s.cans++,e.events.push(["pk",s.id,Ji])):(s.hp=Math.min(Ti,s.hp+60),e.events.push(["pk",s.id,Yc]));break}}}watched(t){for(let e of this.g.players.values()){if(!e.alive)continue;let n=e.body.x,s=e.body.y+an,r=e.body.z,o=t.b.x-n,a=t.b.y+1.2-s,c=t.b.z-r,l=Math.hypot(o,a,c);if(l>75||l<.4)continue;let x=rs(e.yaw,e.pitch);if((o*x[0]+a*x[1]+c*x[2])/l>.55&&mn(n,s,r,o/l,a/l,c/l,l)>=l-.8)return!0}return!1}updateMon(t,e,n,s){let r=this.g,o=ii[t.kind],a=t.b,c=t.inp;t.flash=Math.max(0,t.flash-Vt),t.cool-=Vt;let l=1;if(t.burn=!1,e<.3&&t.kind!==Sr&&(t.hp-=10*Vt,t.burn=!0),n>0&&Math.hypot(a.x,a.z)<n&&(t.hp-=(t.kind===qc?9:14)*Vt,t.burn=!0,l=.55),t.hp<=0){this.killMonster(t,null);return}if(t.think-=Vt,t.think<=0){t.think=.25;let g=null,m=1e9;for(let C of s){let M=Math.hypot(C.body.x-a.x,C.body.z-a.z);M<m&&(m=M,g=C)}let B=g&&(t.kind===Fr||t.kind===Sr?m<80:m<32);t.tgt=B?{p:g}:{lh:!0}}let x=t.tgt&&t.tgt.p&&t.tgt.p.alive?t.tgt.p.body:null,h=!x&&r.relax;if(h&&(!t.wp||Math.hypot(t.wp[0]-a.x,t.wp[1]-a.z)<2.5)){let g=r.rng()*Math.PI*2,m=16+r.rng()*22;t.wp=[Math.cos(g)*m,Math.sin(g)*m]}let u=x?x.x:h?t.wp[0]:0,f=x?x.z:h?t.wp[1]:0,p=u-a.x,y=f-a.z,E=Math.hypot(p,y),d=h?1e9:x?E:E-Ih;t.yaw=Math.atan2(-p,-y),c.yaw=t.yaw;let A=1;if(t.kind===Fr&&(t.seenT-=Vt,t.seenT<=0&&(t.seenT=.1,t.seen=this.watched(t)),t.seen&&(A=0),t.aux=t.seen?1:0),t.kind===Rr){if((d<3.3||t.fuse>0)&&(t.fuse+=Vt,A=0),t.aux=je(Math.min(1,t.fuse/1.1)),t.fuse>=1.1){this.explode(t,s);return}}else d<=o.reach&&(A=0,t.cool<=0&&(t.cool=o.rate,x?this.hurtPlayer(t.tgt.p,o.dmg):(this.hp-=o.dmg,r.events.push(["lh",Math.max(0,Math.round(this.hp))]))));t.sideT-=Vt,c.mz=A,c.mx=t.sideT>0?t.side*.8:0,c.spd=o.spd/7*l*(A?h?.5:1:0),t.stuckT+=Vt,t.stuckT>=.6&&(A&&Math.hypot(a.x-t.lx,a.z-t.lz)<.35&&(c.jump=!0,t.sideT=.8,t.side=r.rng()<.5?-1:1),t.stuckT=0,t.lx=a.x,t.lz=a.z),ss(a,c,Vt),c.jump=!1}explode(t,e){let n=this.g;this.mons.splice(this.mons.indexOf(t),1),n.events.push(["boom",je(t.b.x),je(t.b.y),je(t.b.z)]);for(let s of e){let r=Math.hypot(s.body.x-t.b.x,s.body.z-t.b.z);r<6.5&&this.hurtPlayer(s,10+55*(1-r/6.5))}!n.relax&&Math.hypot(t.b.x,t.b.z)<Ih+6&&(this.hp-=140,n.events.push(["lh",Math.max(0,Math.round(this.hp))]))}snap(){let t=kh(this.t);return{t:je(this.t),rx:this.g.relax?1:0,dk:je(t),day:this.dayNo(),fu:Math.round(this.fuel*10)/10,hp:Math.max(0,Math.round(this.hp)),lr:je(Lh(this.fuel)),end:Math.max(0,Math.ceil(Th-this.t)),resc:this.rescue?1:0,m:this.mons.map(e=>[e.id,e.kind,je(e.b.x),je(e.b.y),je(e.b.z),je(e.yaw),Math.ceil(e.hp),e.aux,e.burn?1:0]),c:this.crates.map(e=>[e.id,e.kind,je(e.x),je(e.y),je(e.z)])}}};var $c=new Map,Ki=(i,t,e)=>{let n=`${i}|${t}|${e}`;return $c.has(n)||$c.set(n,new Ae(i,t,e)),$c.get(n)};function na(){let i=[];return{mats:i,m:s=>{let r=new Jt({color:s,flatShading:!0});return i.push(r),r},b:(s,r,o,a,c,l=0,x=0,h=0)=>{let u=new St(Ki(r,o,a),c);return u.position.set(l,x,h),s.add(u),u},pivot:(s,r,o,a)=>{let c=new pe;return c.position.set(r,o,a),s.add(c),c}}}function Eg(){let{mats:i,m:t,b:e,pivot:n}=na(),s=new pe,r=t(7312266),o=t(2771522),a=t(2047274),c=t(723723),l=t(3885650),x=n(s,-.13,.85,0),h=n(s,.13,.85,0);for(let E of[x,h])e(E,.2,.85,.2,o,0,-.42,0);let u=n(s,0,.85,0);u.rotation.x=.55,e(u,.5,.62,.3,r,0,.31,0),e(u,.52,.3,.32,l,0,.12,0);let f=n(u,0,.7,.02);f.rotation.x=-.35,e(f,.3,.3,.3,r,0,.14,0),e(f,.06,.06,.02,c,-.08,.17,-.155),e(f,.06,.06,.02,c,.08,.17,-.155),e(f,.34,.1,.34,a,0,.32,.02),e(f,.08,.3,.06,a,-.14,.08,.17),e(f,.08,.25,.06,a,.14,.1,.17);let p=n(u,-.32,.55,0),y=n(u,.32,.55,0);for(let E of[p,y])e(E,.12,.8,.12,r,0,-.4,0),E.rotation.x=-1.2;return{root:s,mats:i,legL:x,legR:h,armL:p,armR:y,torso:u}}function gg(){let{mats:i,m:t,b:e,pivot:n}=na(),s=new pe,r=t(3107642),o=t(5216852),a=t(1323034),c=t(526344),l=t(1707277),x=n(s,0,.62,0);e(x,.8,.7,1.05,r,0,0,0),e(x,.25,.1,.3,o,-.2,.38,.1),e(x,.3,.1,.25,o,.2,.38,-.15),e(x,.55,.5,.2,a,0,0,-.58),e(x,.12,.12,.03,c,-.15,.1,-.69),e(x,.12,.12,.03,c,.15,.1,-.69),e(x,.3,.1,.03,l,0,-.12,-.69);let h=[];for(let[u,f]of[[-.28,-.35],[.28,-.35],[-.28,.35],[.28,.35]]){let p=n(s,u,.35,f);e(p,.18,.4,.18,a,0,-.17,0),h.push(p)}return{root:s,mats:i,legs:h,core:x,body:r}}function vg(){let{mats:i,m:t,b:e,pivot:n}=na(),s=new pe,r=t(723728),o=t(15132394),a=t(1842212),c=n(s,-.1,1.2,0),l=n(s,.1,1.2,0);for(let f of[c,l])e(f,.1,1.2,.1,r,0,-.6,0);let x=n(s,0,1.2,0);e(x,.32,.8,.18,a,0,.4,0),e(x,.08,.22,.08,r,0,.9,0),e(x,.2,.26,.2,o,0,1.12,0);let h=n(x,-.22,.75,0),u=n(x,.22,.75,0);for(let f of[h,u])e(f,.07,1.35,.07,r,0,-.67,0);return{root:s,mats:i,legL:c,legR:l,armL:h,armR:u,torso:x}}function Ag(){let{mats:i,m:t,b:e,pivot:n}=na(),s=new pe,r=t(10185274),o=t(3810322),a=t(16052708),c=t(11676218),l=[];for(let[u,f]of[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]]){let p=n(s,u,.28,f);e(p,.14,.3,.14,o,0,-.14,0),l.push(p)}let x=n(s,0,.28,0);e(x,.9,.35,.9,r,0,.17,0);let h=n(s,0,.62,.45);e(h,.92,.3,.92,r,0,.1,-.45),h.rotation.x=.1;for(let u=0;u<4;u++)e(x,.1,.12,.05,a,-.33+u*.22,.36,-.46),e(h,.1,.12,.05,a,-.33+u*.22,-.02,-.9);return e(x,.4,.06,.4,c,0,.3,-.2),{root:s,mats:i,legs:l,lid:h}}var Cg=[Eg,gg,vg,Ag];function yg(i){let t=new pe,e=new Jt({color:10185274,flatShading:!0}),n=new Jt({color:5913119,flatShading:!0}),s=new Jt({color:i===Ji?13645866:16053488,flatShading:!0}),r=new St(Ki(.9,.9,.9),e);r.position.y=.45,t.add(r);for(let h of[-.3,.3]){let u=new St(Ki(.1,.94,.94),n);u.position.set(h,.45,0),t.add(u)}let o=new St(Ki(.5,.04,.5),s);if(o.position.y=.93,t.add(o),i!==Ji){let h=new St(Ki(.12,.05,.4),new Jt({color:13645866}));h.position.y=.96,t.add(h)}let a=new pe,c=new St(Ki(2.4,.08,2.4),new Jt({color:15764004,flatShading:!0}));c.position.y=3.3,a.add(c);let l=new St(Ki(1.2,.1,2.5),new Jt({color:16777215,flatShading:!0}));l.position.y=3.31,a.add(l),t.add(a),t.userData.chute=a;let x=new St(new Ae(.22,46,.22),new ve({color:16753210,transparent:!0,opacity:.5,fog:!1,depthWrite:!1}));return x.position.y=23,t.add(x),t.userData.beam=x,t}var ea=class{constructor(t){this.r=t,this.scene=t.scene,this.mons=new Map,this.crates=new Map,this.flashT=new Map,this.t=0}flash(t){this.flashT.set(t,.12)}clear(){for(let t of this.mons.values())this.scene.remove(t.root);for(let t of this.crates.values())this.scene.remove(t.g);this.mons.clear(),this.crates.clear()}update(t,e){if(this.t+=e,!t){(this.mons.size||this.crates.size)&&this.clear();return}let n=1-Math.exp(-16*e),s=new Set;for(let o of t.mons){s.add(o.id);let a=this.mons.get(o.id);if(!a){let p=Cg[o.kind]();a={...p,kind:o.kind,root:p.root,px:o.x,pz:o.z,py:o.y,yaw:o.yaw,phase:Math.random()*6,speed:0,fx:0},a.root.position.set(o.x,o.y,o.z),this.scene.add(a.root),this.mons.set(o.id,a)}let c=a.px,l=a.pz;a.px+=(o.x-a.px)*n,a.py+=(o.y-a.py)*n,a.pz+=(o.z-a.pz)*n;let x=o.yaw-a.yaw;for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;a.yaw+=x*Math.min(1,e*14),a.speed+=(Math.hypot(a.px-c,a.pz-l)/Math.max(e,.001)-a.speed)*Math.min(1,e*8),a.phase+=a.speed*e*2.4,a.root.position.set(a.px,a.py,a.pz),a.root.rotation.y=a.yaw,this.animate(a,o,e);let h=this.flashT.get(o.id)||0;h>0&&(h-=e,this.flashT.set(o.id,h));let u=h>0?.7:o.burn?.18+.12*Math.sin(this.t*30):o.kind===Rr?o.aux*(.5+.5*Math.sin(this.t*40)):0,f=o.kind===Rr&&h<=0&&!o.burn;for(let p of a.mats)p.emissive.setRGB(f?u*.6:u,f?u*.12:o.burn&&h<=0?u*.45:u*.7,f||o.burn&&h<=0?0:u*.7)}for(let[o,a]of this.mons)if(!s.has(o)){for(let c=0;c<4;c++)this.r.puff(a.px+(Math.random()-.5)*.5,a.py+.5+Math.random()*.8,a.pz+(Math.random()-.5)*.5,(Math.random()-.5)*1.5,1.2,(Math.random()-.5)*1.5,.5,.6,!0);this.scene.remove(a.root),this.mons.delete(o),this.flashT.delete(o)}let r=new Set;for(let o of t.crates){r.add(o.id);let a=this.crates.get(o.id);a||(a={g:yg(o.kind)},this.scene.add(a.g),this.crates.set(o.id,a)),a.g.position.set(o.x,o.y,o.z),a.g.userData.chute.visible=o.y>.05,o.y>.05&&(a.g.userData.chute.rotation.z=Math.sin(this.t*2+o.id)*.06),a.g.userData.beam.material.opacity=.3+.25*Math.sin(this.t*3+o.id)+t.dark*.2}for(let[o,a]of this.crates)r.has(o)||(this.scene.remove(a.g),this.crates.delete(o))}animate(t,e,n){let s=Math.sin(t.phase)*Math.min(1,t.speed/3);if(t.kind===qc)t.legL.rotation.x=s*.7,t.legR.rotation.x=-s*.7,t.armL.rotation.x=-1.2+s*.25+Math.sin(this.t*3+t.phase)*.1,t.armR.rotation.x=-1.2-s*.25+Math.cos(this.t*3)*.1,t.torso.rotation.x=.55+Math.sin(t.phase*2)*.04;else if(t.kind===Rr){t.legs.forEach((o,a)=>{o.rotation.x=Math.sin(t.phase*1.4+(a%2?Math.PI:0))*.6*Math.min(1,t.speed/3)});let r=1+e.aux*.55;t.core.scale.set(r,r,r),t.core.position.y=.62+Math.abs(Math.sin(t.phase*1.4))*.05,t.core.position.x=e.aux>0?Math.sin(this.t*60)*.03*e.aux:0}else t.kind===Fr?e.aux>.5?(t.legL.rotation.x=0,t.legR.rotation.x=0,t.torso.rotation.x=0,t.armL.rotation.z=-.9,t.armR.rotation.z=.9,t.armL.rotation.x=0,t.armR.rotation.x=0):(t.legL.rotation.x=s*1.1,t.legR.rotation.x=-s*1.1,t.torso.rotation.x=.35,t.armL.rotation.z=-.12,t.armR.rotation.z=.12,t.armL.rotation.x=.7+s*.4,t.armR.rotation.x=.7-s*.4):t.kind===Sr&&(t.lid.rotation.x=.1-Math.abs(Math.sin(this.t*7+t.phase))*.55,t.legs.forEach((r,o)=>{r.rotation.x=Math.sin(t.phase*1.8+(o%2?Math.PI:0))*.7}))}};var ia=class{constructor(t){this.canvas=t,this.desktop=matchMedia("(hover:hover) and (pointer:fine)").matches,this.gl=new Uo({canvas:t,antialias:this.desktop,powerPreference:"high-performance"}),this.gl.toneMapping=Fc,this.gl.toneMappingExposure=1,this.gl.shadowMap.type=Dc,this.gl.autoClear=!1,this.quality=1,this.scene=new Yi,this.cam=new Fe(70,1,.3,Bh),this.thirdPerson=!0,this.fov=70,this.meshes=new Map,this.onLand=null,this.onStep=null,this.debugCam=null,this.tracers=[],this.shake=0,this.kick=0,this.camPos=new U,this.lodCam=this.cam.position,this.scaleMul=1,this.fpsAvg=60,this.buildWorld(),this.initPuffs(),this.mons=new ea(this),this.initViewmodel(),this.resize(),addEventListener("resize",()=>this.resize())}setQuality(t){this.quality=t;let e=t>=2;if(this.gl.shadowMap.enabled!==e){this.gl.shadowMap.enabled=e;for(let n of[this.scene,this.vmScene])n&&n.traverse(s=>{let r=s.material;r&&(Array.isArray(r)?r:[r]).forEach(o=>{o.needsUpdate=!0})})}this.realShadows=e,this.gl.shadowMap.autoUpdate=!1,this.gl.shadowMap.needsUpdate=!0;for(let n of Object.values(this.worlds||{}))n.res&&n.res.setQuality&&n.res.setQuality(t);this.resize()}adapt(t){t>0&&(this.fpsAvg=(this.fpsAvg||60)+(1/t-(this.fpsAvg||60))*.05,this.fpsAvg<38?(this.slowT=(this.slowT||0)+t,this.fastT=0):this.fpsAvg>56?(this.fastT=(this.fastT||0)+t,this.slowT=0):(this.slowT=0,this.fastT=0),this.slowT>2.5?(this.slowT=0,this.scaleMul>.55?(this.scaleMul=Math.max(.5,this.scaleMul-.1),this.resize()):this.quality>0&&performance.now()-(this.lastDrop||0)>12e3&&(this.lastDrop=performance.now(),this.scaleMul=.8,this.onAutoQuality&&this.onAutoQuality(this.quality-1))):this.fastT>8&&this.scaleMul<1&&(this.fastT=0,this.scaleMul=Math.min(1,this.scaleMul+.05),this.resize()))}resize(){let t=[.55,.8,Math.min(devicePixelRatio||1,2),Math.min(devicePixelRatio||1,2.5)][this.quality]*this.scaleMul;this.gl.setPixelRatio(t),this.gl.setSize(innerWidth,innerHeight,!1),this.cam.aspect=innerWidth/innerHeight,this.cam.updateProjectionMatrix(),this.vmCam&&(this.vmCam.aspect=innerWidth/innerHeight,this.vmCam.updateProjectionMatrix())}capture(t){let e=new Set(this.scene.children);return{res:t(),objs:this.scene.children.filter(s=>!e.has(s)),fog:this.scene.fog,bg:this.scene.background}}setMapKind(t){if(t===this.kind)return;this.worlds[t]||(this.worlds[t]=this.capture(()=>Sh(this.scene)),this.worlds[t].res.setQuality(this.quality),this.setQuality(this.quality));for(let[n,s]of Object.entries(this.worlds))for(let r of s.objs)r.visible=n===t;let e=this.worlds[t];this.scene.fog=e.fog,this.scene.background=e.bg,this.world=e.res,this.kind=t,this.mons.clear()}boom(t,e,n){for(let r=0;r<16;r++)this.puff(t+(Math.random()-.5)*2,e+.4+Math.random()*1.6,n+(Math.random()-.5)*2,(Math.random()-.5)*7,2+Math.random()*4,(Math.random()-.5)*7,.4+Math.random()*.5,.45+Math.random()*.35);let s=Math.hypot(t-this.cam.position.x,n-this.cam.position.z);this.addShake(Math.max(0,.32-s*.012))}buildWorld(){this.worlds={arena:this.capture(()=>(this.world=Dh(this.scene),this.world))},this.kind="arena",this.tracerGeo=new Ae(.04,.04,1),this.tracerMat=new ve({color:16771491})}makeTag(t){let e=document.createElement("canvas");e.width=160,e.height=36;let n=e.getContext("2d");n.font="bold 22px sans-serif",n.textAlign="center",n.lineWidth=5,n.strokeStyle="rgba(0,0,0,.7)",n.strokeText(t,80,26),n.fillStyle="#fff",n.fillText(t,80,26);let s=new Rn(e),r=new zo(new Ar({map:s,depthTest:!1,transparent:!0}));return r.scale.set(2.2,.5,1),r.position.y=2.35,r.renderOrder=10,r}makePlayer(t){let e=new Gs(this,t);return this.meshes.set(t.id,e),e}initPuffs(){let t=new Ae(1,1,1);this.fireMat=new ve({color:16753210}),this.smokeMat=new ve({color:13620959,transparent:!0,opacity:.55}),this.dustMat=new ve({color:12168596,transparent:!0,opacity:.5}),this.puffPool=[];for(let e=0;e<72;e++){let n=new St(t,this.smokeMat);n.visible=!1,this.scene.add(n),this.puffPool.push({m:n,life:0,max:1,vx:0,vy:0,vz:0,size:.2,dust:!1})}this.puffNext=0}puff(t,e,n,s,r,o,a,c,l=!1){let x=this.puffPool[this.puffNext++%this.puffPool.length];x.m.position.set(t,e,n),x.vx=s,x.vy=r,x.vz=o,x.size=a,x.life=x.max=c,x.dust=l,x.m.visible=!0}updatePuffs(t){let e=Math.exp(-3*t);for(let n of this.puffPool){if(n.life<=0)continue;if(n.life-=t,n.life<=0){n.m.visible=!1;continue}n.m.position.x+=n.vx*t,n.m.position.y+=n.vy*t,n.m.position.z+=n.vz*t,n.vx*=e,n.vy*=e,n.vz*=e;let s=n.life/n.max;n.m.scale.setScalar(n.size*(.5+.7*(1-s))),n.m.material=n.dust?this.dustMat:s>.7?this.fireMat:this.smokeMat}}hit(t){let e=this.meshes.get(t);e&&e.hit()}shot(t){let e=this.meshes.get(t);e&&e.shoot(),t===this.meId&&(this.vmKick=1,this.vmFlash=.05)}initViewmodel(){this.vmScene=new Yi,this.vmScene.add(new Pn(14675711,6971992,1.7));let t=new ti(16773846,1.4);t.position.set(-1,2,1.5),this.vmScene.add(t),this.vmCam=new Fe(62,1,.03,5);let e=new pe,n=h=>new Jt({color:h,flatShading:!0}),s=n(2830138),r=n(4870499),o=n(1578e4),a=n(3825551),c=n(2902643),l=(h,u,f,p,y,E,d)=>{let A=new St(new Ae(h,u,f),p);return A.position.set(y,E,d),e.add(A),A},x=(h,u,f,p)=>{let y=u[0]-h[0],E=u[1]-h[1],d=u[2]-h[2],A=Math.hypot(y,E,d),g=new St(new Ae(f,f,A),p);return g.rotation.order="YXZ",g.rotation.y=Math.atan2(y,d),g.rotation.x=-Math.atan2(E,Math.hypot(y,d)),g.position.set((h[0]+u[0])/2,(h[1]+u[1])/2,(h[2]+u[2])/2),e.add(g),g};this.vmBuild=h=>{e.clear();let u=new pe;e.add(u);let f=$o(u,h),p=f.lz;x([0,-.12,.02],[.2,-.45,.8],.075,a),l(.082,.082,.03,c,.02,-.13,.08).rotation.y=-.2,l(.075,.09,.09,o,0,-.105,0),x([0,-.05,p+.01],[-.28,-.4,.7],.075,a),l(.082,.082,.03,c,-.03,-.09,p+.15).rotation.y=.5,l(.085,.07,.13,o,0,-.042,p),this.flashVm.position.set(0,.012,f.muz-.12),e.add(this.flashVm),this.vmId=h},this.flashVm=new St(new Ae(.1,.1,.1),new ve({color:16773280})),this.flashVm.position.set(0,.012,-.72),this.flashVm.visible=!1,e.add(this.flashVm),this.vmBuild(1),e.visible=!1,this.vmScene.add(e),this.vm=e,this.vmKick=0,this.vmFlash=0,this.vmAds=0}tracer(t,e,n,s,r,o){let a=Math.hypot(s-t,r-e,o-n);if(a<.5)return;let c=new St(this.tracerGeo,this.tracerMat);c.position.set((t+s)/2,(e+r)/2,(n+o)/2),c.scale.z=a,c.lookAt(s,r,o),this.scene.add(c),this.tracers.push({m:c,life:.08}),this.puff(s,r,o,0,.8,0,.1,.22)}addShake(t){this.shake=Math.min(.4,this.shake+t)}clearPlayers(){for(let t of this.meshes.values())t.dispose();this.meshes.clear()}draw(t,e,n){let s=new Set;for(let a of e.players){s.add(a.id);let c=this.meshes.get(a.id)||this.makePlayer(a);c.name!==a.name&&c.rename(a.name);let l=!!e.me&&a.id===e.me.id;c.update(a,t,l,l&&(!this.thirdPerson||this.squeezed||this.scoped))}for(let[a,c]of this.meshes)s.has(a)||(c.dispose(),this.meshes.delete(a));this.updatePuffs(t);for(let a=this.tracers.length-1;a>=0;a--){let c=this.tracers[a];(c.life-=t)<=0&&(this.scene.remove(c.m),this.tracers.splice(a,1))}let r=n.fov||70;Math.abs(this.fov-r)>.05&&(this.fov+=(r-this.fov)*(1-Math.exp(-14*t)),this.cam.fov=this.fov,this.cam.updateProjectionMatrix()),this.scoped=!!n.fp&&!!n.scope,this.meId=e.me?e.me.id:0;let o=e.me;if(o){let a=o.y+an,c=n.yaw,l=n.pitch;if(this.thirdPerson&&!this.scoped){let x=Da(o.x,o.y,o.z,c,l);this.cam.position.set(x[0],x[1],x[2]),this.squeezed=!!x[3]}else this.cam.position.set(o.x,a,o.z);o.alive||(this.cam.position.y+=1.5),this.cam.rotation.order="YXZ",this.cam.rotation.set(l+this.kick,c,0),this.kick*=Math.pow(.001,t),this.shake>.001&&(this.cam.position.x+=(Math.random()-.5)*this.shake,this.cam.position.y+=(Math.random()-.5)*this.shake,this.shake*=Math.pow(5e-4,t))}{let a=!!o&&o.alive&&(!this.thirdPerson||this.squeezed)&&!this.scoped;if(this.vm.visible=a,a){o.weapon!==this.vmId&&this.vmBuild(o.weapon),this.vmAds+=((n.ads?1:0)-this.vmAds)*(1-Math.exp(-14*t)),this.vmKick*=Math.exp(-14*t);let c=Math.hypot(o.vx||0,o.vz||0),l=performance.now()/1e3,x=o.gr?Math.min(1,c/7):0,h=this.vmAds;this.vm.position.set(.17*(1-h)+Math.sin(l*9)*.006*x,-.17+.075*h+Math.abs(Math.sin(l*9))*.01*x,-.42+this.vmKick*.05),this.vm.rotation.x=this.vmKick*.06,this.vmFlash-=t,this.flashVm.visible=this.vmFlash>0}}if(this.debugCam){let a=this.debugCam;this.cam.position.set(a[0],a[1],a[2]),this.cam.lookAt(a[3],a[4],a[5])}this.world.update(this.cam.position,t,e.sv),this.mons.update(e.sv,t),this.gl.clear(),this.realShadows&&(this.sfN=(this.sfN||0)+1,(this.quality>=3||this.sfN%2===0)&&(this.gl.shadowMap.needsUpdate=!0)),this.gl.render(this.scene,this.cam),this.vm.visible&&(this.gl.clearDepth(),this.gl.render(this.vmScene,this.vmCam))}project(t,e,n){let s=new U(t,e,n).project(this.cam);return s.z>1?null:[(s.x*.5+.5)*innerWidth,(-s.y*.5+.5)*innerHeight]}};var sa=class{constructor(t,e,n="Player"){this.gl=t.gl,this.el=e,this.scene=new Yi,this.cam=new Fe(32,1,.5,40),this.scene.add(new Pn(14675711,4866102,1.5));let s=new ti(16773336,1.6);s.position.set(-2,3,3),this.scene.add(s);let r=new ti(16752412,1.2);r.position.set(3,2,-3),this.scene.add(r);let o=new St(new Xe(1.15,1.25,.12,40),new Jt({color:1779256}));o.position.y=-.06,this.scene.add(o);let a=new St(new Vo(1,1.08,48),new ve({color:16752412,side:Oe}));a.rotation.x=-Math.PI/2,a.position.y=.005,this.scene.add(a);let c={scene:this.scene,makeTag:()=>new be,puff(){},onLand:null,onStep:null};this.me={x:0,y:0,z:0,yaw:0,pitch:-.04,vx:0,vy:0,vz:0,gr:!0,thr:!1,alive:!0,hp:100,weapon:1,color:14173487,name:n},this.avatar=new Gs(c,this.me),this.avatar.shadow.visible=!1,this.spin=0,this.t=0}setWeapon(t){this.me.weapon=t}draw(t){this.t+=t,this.me.yaw=Math.PI-.7+Math.sin(this.t*.6)*.18+this.spin,this.avatar.update(this.me,t,!1,!1),this.avatar.shadow.visible=!1;let e=this.gl,n=this.el.getBoundingClientRect();if(e.setScissorTest(!1),e.setViewport(0,0,innerWidth,innerHeight),e.setClearColor(791327,1),e.clear(),n.width<20||n.height<20)return;let s=n.width/n.height,r=Math.tan(this.cam.fov*Math.PI/360),o=Math.max(1.5/r,1.35/(r*s));this.cam.aspect=s,this.cam.position.set(0,1.35,o),this.cam.lookAt(0,.82,0),this.cam.updateProjectionMatrix();let a=innerHeight-n.bottom;e.setViewport(n.left,a,n.width,n.height),e.setScissor(n.left,a,n.width,n.height),e.setScissorTest(!0),e.render(this.scene,this.cam),e.setScissorTest(!1),e.setViewport(0,0,innerWidth,innerHeight)}};var Jc=(i,t,e)=>Math.max(t,Math.min(e,i)),ra=class{constructor(){this.yaw=0,this.pitch=0,this.mx=0,this.mz=0,this.jet=!1,this.fire=!1,this.rl=!1,this.sw=-1,this.jumpFlag=!1,this.adsToggle=!1,this.adsHold=!1,this.zoomLevel=0,this.zoomStep=!1,this.zoomMul=1,this.sens=1,this.invY=!1,this.keys=new Set,this.touch=!1,this.enabled=!1,this.stick={id:-1,cx:0,cy:0},this.look={id:-1,x:0,y:0},this.btn={fire:new Set,jet:new Set},this.bind()}bind(){let t=h=>document.getElementById(h),e=t("zone-move"),n=t("zone-look"),s=t("knob"),r=t("stick"),o=(h,u)=>{r.style.left=h+"px",r.style.top=u+"px",r.style.opacity="1"};e.addEventListener("pointerdown",h=>{!this.enabled||this.stick.id>=0||(this.touch=!0,e.setPointerCapture(h.pointerId),this.stick={id:h.pointerId,cx:h.clientX,cy:h.clientY},o(h.clientX,h.clientY),s.style.transform="translate(-50%,-50%)")}),e.addEventListener("pointermove",h=>{if(h.pointerId!==this.stick.id)return;let u=h.clientX-this.stick.cx,f=h.clientY-this.stick.cy,p=55,y=Math.hypot(u,f);y>p&&(u=u/y*p,f=f/y*p),s.style.transform=`translate(calc(-50% + ${u}px), calc(-50% + ${f}px))`,this.mx=u/p,this.mz=-f/p,Math.abs(this.mx)<.12&&(this.mx=0),Math.abs(this.mz)<.12&&(this.mz=0)});let a=h=>{h.pointerId===this.stick.id&&(this.stick.id=-1,this.mx=0,this.mz=0,r.style.opacity="0.35")};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),n.addEventListener("pointerdown",h=>{!this.enabled||this.look.id>=0||(this.touch=!0,n.setPointerCapture(h.pointerId),this.look={id:h.pointerId,x:h.clientX,y:h.clientY})}),n.addEventListener("pointermove",h=>{h.pointerId===this.look.id&&(this.turn((h.clientX-this.look.x)*.0062,(h.clientY-this.look.y)*.0055),this.look.x=h.clientX,this.look.y=h.clientY)});let c=h=>{h.pointerId===this.look.id&&(this.look.id=-1)};n.addEventListener("pointerup",c),n.addEventListener("pointercancel",c);let l=(h,u,f)=>{let p=t(h);p.addEventListener("pointerdown",E=>{E.preventDefault(),this.touch=!0,p.setPointerCapture(E.pointerId),u.add(E.pointerId),this[f]=!0,p.classList.add("down")});let y=E=>{u.delete(E.pointerId),u.size||(this[f]=!1,p.classList.remove("down"))};p.addEventListener("pointerup",y),p.addEventListener("pointercancel",y)};l("btn-fire",this.btn.fire,"fire"),l("btn-jet",this.btn.jet,"jet"),t("btn-jump").addEventListener("pointerdown",h=>{h.preventDefault(),this.touch=!0,this.jumpFlag=!0,t("btn-jump").classList.add("down")}),t("btn-jump").addEventListener("pointerup",()=>t("btn-jump").classList.remove("down")),t("btn-jump").addEventListener("pointercancel",()=>t("btn-jump").classList.remove("down")),t("btn-scope").addEventListener("pointerdown",h=>{h.preventDefault(),this.touch=!0,this.adsToggle=!this.adsToggle}),t("btn-zoom").addEventListener("pointerdown",h=>{h.preventDefault(),this.zoomStep=!0}),t("btn-reload").addEventListener("pointerdown",h=>{h.preventDefault(),this.rl=!0}),t("btn-weapon").addEventListener("pointerdown",h=>{h.preventDefault(),this.cycle=!0}),addEventListener("keydown",h=>{if(!this.enabled)return;let u=h.key.toLowerCase();this.keys.add(u),u>="1"&&u<="4"&&(this.sw=Number(u)-1),u==="r"&&(this.rl=!0),u==="q"&&(this.cycle=!0),(u==="tab"||u.startsWith("arrow"))&&h.preventDefault(),u===" "&&(h.preventDefault(),h.repeat||(this.jumpFlag=!0))}),addEventListener("keyup",h=>this.keys.delete(h.key.toLowerCase()));let x=t("game");this.canvas=x,x.addEventListener("mousedown",h=>{if(!(!this.enabled||this.touch)){if(document.pointerLockElement!==x){this.lock();return}h.button===0&&(this.mouseFire=!0),h.button===2&&(this.adsHold=!0)}}),addEventListener("mouseup",h=>{h.button===2?this.adsHold=!1:this.mouseFire=!1}),x.addEventListener("contextmenu",h=>h.preventDefault()),addEventListener("mousemove",h=>{if(!this.enabled||document.pointerLockElement!==x)return;this.touch=!1;let u=h.movementX||0,f=h.movementY||0;Math.abs(u)>400||Math.abs(f)>400||this.turn(u*.0022,f*.0022*(this.invY?-1:1))}),addEventListener("wheel",h=>{this.enabled&&(this.scopedNow?this.zoomStep=!0:this.sw=h.deltaY>0?-2:-3)},{passive:!0}),addEventListener("blur",()=>{this.keys.clear(),this.mouseFire=!1})}lock(){let t=this.canvas;if(!t||!t.requestPointerLock||document.pointerLockElement===t)return;let e=n=>{n&&n.catch&&n.catch(()=>{})};try{let n=t.requestPointerLock({unadjustedMovement:!0});n&&n.catch&&n.catch(()=>{try{e(t.requestPointerLock())}catch{}})}catch{try{e(t.requestPointerLock())}catch{}}}turn(t,e){let n=this.sens*this.zoomMul;this.yaw-=t*n,this.pitch=Jc(this.pitch-e*n,-1.2,1.2)}read(t,e){let n=this.keys,s=this.mx,r=this.mz;(n.has("a")||n.has("arrowleft"))&&(s-=1),(n.has("d")||n.has("arrowright"))&&(s+=1),(n.has("w")||n.has("arrowup"))&&(r+=1),(n.has("s")||n.has("arrowdown"))&&(r-=1);let o=this.sw;this.cycle||o===-2?o=(t+1)%e:o===-3&&(o=(t+e-1)%e);let a={mx:Jc(s,-1,1),mz:Jc(r,-1,1),yaw:this.yaw,pitch:this.pitch,ads:this.adsToggle||this.adsHold,jet:this.jet||n.has(" ")||n.has("shift"),fire:this.fire||!!this.mouseFire,rl:this.rl,sw:o,jump:this.jumpFlag};return this.rl=!1,this.sw=-1,this.cycle=!1,this.jumpFlag=!1,a}reset(){this.mx=this.mz=0,this.jet=this.fire=!1,this.mouseFire=!1,this.adsHold=!1,this.adsToggle=!1,this.stick.id=-1,this.look.id=-1,this.keys.clear()}};var oa=3.4,Oh=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},zh=(i,t,e)=>Math.max(t,Math.min(e,i));function _g(i,t){let e=t.x-i.x,n=t.y+1.1-(i.y+an),s=t.z-i.z,r=Math.hypot(e,n,s);return r<.01?!0:mn(i.x,i.y+an,i.z,e/r,n/r,s/r,r)>=r-.4}function Hh(i,t){let e=t.ai,n=t.inp,s=t.body;if(!t.alive||i.over){n.fire=!1,n.jet=!1,n.mx=0,n.mz=0;return}if(e.think-=Vt,e.think<=0){e.think=.2+i.rng()*.2;let l=null,x=70;for(let h of i.players.values()){if(h===t||!h.alive)continue;let u=Math.hypot(h.body.x-s.x,h.body.y-s.y,h.body.z-s.z);u<x&&_g(s,h.body)&&(l=h,x=u)}if(e.target=l?l.id:0,e.errYaw=(i.rng()-.5)*.24,e.errPitch=(i.rng()-.5)*.16,l){let h=x<9?2:x<40?1:3;h!==t.weapon&&(n.sw=h)}else t.mags[t.weapon]<Be[t.weapon].mag/2&&(n.rl=!0)}e.strafeT-=Vt,e.strafeT<=0&&(e.strafeT=.8+i.rng()*1.8,e.strafe=i.rng()<.5?-1:1);let r=e.target?i.players.get(e.target):null,o=n.yaw,a=0,c=!1;if(n.fire=!1,r&&r.alive){let l=r.body.x-s.x,x=r.body.y+1.2-(s.y+an),h=r.body.z-s.z,u=Math.hypot(l,h);o=Math.atan2(-l,-h)+e.errYaw,a=Math.atan2(x,u)+e.errPitch,n.mz=u>16?1:u<7?-.7:.1,n.mx=e.strafe*.8,r.body.y>s.y+2.5&&(c=!0),Math.abs(Oh(o-n.yaw))<.09&&(n.fire=Be[t.weapon].auto||Math.floor(i.time*30)%2===0)}else(!e.wp||Math.hypot(e.wp[0]-s.x,e.wp[2]-s.z)<3)&&(e.wp=oe.spawns[Math.floor(i.rng()*oe.spawns.length)]),o=Math.atan2(-(e.wp[0]-s.x),-(e.wp[2]-s.z)),a=0,n.mz=1,n.mx=0,e.wp[1]>s.y+2&&(c=!0);if(e.stuckT+=Vt,e.stuckT>=.6){let l=Math.hypot(s.x-e.lx,s.z-e.lz);e.stuckT=0,e.lx=s.x,e.lz=s.z,l<.6&&(n.mz!==0||n.mx!==0)&&(e.boost=.5,e.strafe=-e.strafe,e.wp=null,n.jump=!0)}e.boost>0&&(e.boost-=Vt,c=!0),s.fuel<8?e.cool=!0:s.fuel>45&&(e.cool=!1),n.jet=c&&!e.cool,n.yaw+=zh(Oh(o-n.yaw),-oa*Vt,oa*Vt),n.pitch+=zh(a-n.pitch,-oa*Vt,oa*Vt)}var Bg=3,Mg=4,Vh=[15158332,3447003,3066993,15844367,10181046,15105570,1752220,15483002,9268835,9479342],He=i=>Math.round(i*100)/100,aa=class{constructor(t={}){this.rng=t.rng||Math.random,this.relax=t.mode==="relax",this.mode=t.mode==="survival"||this.relax?"survival":"arena",Si(this.mode==="survival"?"island":"arena"),this.scoreLimit=this.mode==="survival"?1e9:t.scoreLimit||20,this.timeLimit=this.mode==="survival"?1e9:t.timeLimit||300,this.players=new Map,this.events=[],this.time=0,this.acc=0,this.nextId=1,this.matchStart=0,this.over=!1,this.winner=0,this.restartAt=0,this.rosterDirty=!0,this.surv=this.mode==="survival"?new ta(this):null}addPlayer(t,e=!1){let n=this.nextId++,s={id:n,name:String(t||"Player").slice(0,14),bot:e,color:Vh[(n-1)%Vh.length],body:Pi(),yaw:0,pitch:0,hp:Ti,alive:!1,respawnAt:0,weapon:1,mags:Be.map(r=>r.mag),cool:0,reloadLeft:0,lastHit:-99,kills:0,deaths:0,wantFire:!1,fireHeld:!1,bloom:0,cans:0,inp:{mx:0,mz:0,yaw:0,pitch:0,jet:!1,fire:!1,rl:!1,sw:-1,jump:!1,ads:!1,spd:1,fp:!1},ai:e?{target:0,think:0,strafe:1,strafeT:0,stuckT:0,lx:0,lz:0,wp:null}:null};return this.players.set(n,s),this.respawn(s),this.rosterDirty=!0,n}removePlayer(t){this.players.delete(t)&&(this.rosterDirty=!0)}setInput(t,e){let n=this.players.get(t);if(!n||!e)return;let s=(o,a,c)=>Number.isFinite(o)?Math.max(a,Math.min(c,o)):0,r=n.inp;r.mx=s(e.mx,-1,1),r.mz=s(e.mz,-1,1),r.yaw=Number.isFinite(e.yaw)?e.yaw:r.yaw,r.pitch=s(e.pitch,-1.4,1.4),r.jet=!!e.jet,r.fire=!!e.fire,r.ads=!!e.ads,r.fp=!!e.fp,e.rl&&(r.rl=!0),e.jump&&(r.jump=!0),Number.isInteger(e.sw)&&e.sw>=0&&e.sw<Be.length&&(r.sw=e.sw)}respawn(t){let e=oe.spawns[0],n=-1,s=[];for(let r=0;r<4;r++)s.push(oe.spawns[Math.floor(this.rng()*oe.spawns.length)]);for(let r of s){let o=1e9;for(let a of this.players.values())a===t||!a.alive||(o=Math.min(o,Math.hypot(a.body.x-r[0],a.body.z-r[2])));o>n&&(n=o,e=r)}t.body=Pi(e[0],e[1],e[2]),t.hp=Ti,t.alive=!0,t.reloadLeft=0,t.cool=.5,t.cans=0,t.mags=Be.map(r=>r.mag),t.lastHit=this.time,t.yaw=Math.atan2(e[0],e[2]),t.inp.yaw=t.yaw}resetMatch(){this.over=!1,this.winner=0,this.matchStart=this.time,this.surv&&this.surv.reset();for(let t of this.players.values())t.kills=0,t.deaths=0,this.respawn(t);this.rosterDirty=!0,this.events.push(["reset"])}advance(t){for(this.acc+=Math.min(t,.25);this.acc>=Vt;)this.acc-=Vt,this.tick()}tick(){if(this.time+=Vt,this.over){this.time>=this.restartAt&&this.resetMatch();return}for(let t of this.players.values()){if(t.bot&&Hh(this,t),!t.alive){this.time>=t.respawnAt&&this.respawn(t);continue}let e=t.inp;t.yaw=e.yaw,t.pitch=e.pitch,e.spd=Xr(t.weapon,e.ads),ss(t.body,e,Vt),e.jump=!1,t.bloom=Math.max(0,t.bloom-.045*Vt),e.sw>=0&&e.sw!==t.weapon&&(t.weapon=e.sw,t.reloadLeft=0,t.cool=.25,t.bloom=0),e.sw=-1,e.rl&&(this.startReload(t),e.rl=!1),this.combat(t,e),t.hp<Ti&&this.time-t.lastHit>(this.surv?6:Mg)&&(t.hp=Math.min(Ti,t.hp+(this.surv?2:8)*Vt))}this.surv&&this.surv.tick(),this.time-this.matchStart>=this.timeLimit&&this.endMatch()}startReload(t){let e=Be[t.weapon];t.reloadLeft>0||t.mags[t.weapon]>=e.mag||(t.reloadLeft=e.reload)}combat(t,e){let n=Be[t.weapon];if(t.cool>0&&(t.cool-=Vt),t.reloadLeft>0){t.reloadLeft-=Vt,t.reloadLeft<=0&&(t.reloadLeft=0,t.mags[t.weapon]=n.mag);return}let s=e.fire&&!t.fireHeld;if(t.fireHeld=e.fire,!(!e.fire||t.cool>0)&&!(!n.auto&&!s)){if(t.mags[t.weapon]<=0){this.startReload(t);return}t.mags[t.weapon]--,t.cool=n.rate,this.shoot(t,n),t.mags[t.weapon]<=0&&this.startReload(t)}}shoot(t,e){let n=t.body,s=n.x,r=n.y+an,o=n.z,a=[];if(this.surv)for(let E of this.surv.mons)a.push(Uh(E));else for(let E of this.players.values())E.alive&&a.push({id:E.id,x:E.body.x,y:E.body.y,z:E.body.z,alive:!0});let c=t.weapon===Ri&&t.inp.ads,x=ba({id:t.id,x:n.x,y:n.y,z:n.z},a,t.yaw,t.pitch,t.bot||c||t.inp.fp,e.range).dir,h=Math.atan2(-x[0],-x[2]),u=Math.asin(Math.max(-1,Math.min(1,x[1]))),f=t.inp.ads||t.bot&&t.weapon===Ri,p=Wr(e,f,Math.hypot(n.vx,n.vz),!n.ground,t.bloom),y=[Math.cos(t.yaw),-Math.sin(t.yaw)];for(let E=0;E<e.pellets;E++){let d=this.rng()*Math.PI*2,A=p*Math.sqrt(this.rng()),g=rs(h+Math.cos(d)*A,u+Math.sin(d)*A),m=mn(s,r,o,g[0],g[1],g[2],e.range),B=Gr(s,r,o,g[0],g[1],g[2],m,a,t.id),C=B?B.t:m;if(E<3){let M=s+y[0]*.14+g[0]*.9,w=r-.27+g[1]*.9,v=o+y[1]*.14+g[2]*.9;this.events.push(["s",t.id,He(M),He(w),He(v),He(s+g[0]*C),He(r+g[1]*C),He(o+g[2]*C)])}if(B&&B.player.mon)this.surv.hitMonster(B.player.mon,t,Math.round(e.dmg*(B.head?1.5:1)),B.head);else if(B){let M=this.players.get(B.player.id),w=B.head,v=e.dmg*.045;M.body.kx+=g[0]*v,M.body.kz+=g[2]*v,g[1]>0&&(M.body.vy+=g[1]*v*.5),this.damage(M,t,Math.round(e.dmg*(w?1.5:1)),w)}}t.bloom=Math.min(e.bloomMax,t.bloom+e.bloomPer)}damage(t,e,n,s){!t.alive||this.over||(t.hp-=n,t.lastHit=this.time,this.events.push(["h",t.id,e.id,n,s?1:0]),!(t.hp>0)&&(t.hp=0,t.alive=!1,t.deaths++,t.respawnAt=this.time+Bg,e.kills++,this.events.push(["k",e.id,t.id,e.weapon]),e.kills>=this.scoreLimit&&this.endMatch()))}endMatch(){if(this.over)return;let t=null;for(let e of this.players.values())(!t||e.kills>t.kills)&&(t=e);this.over=!0,this.winner=t?t.id:0,this.restartAt=this.time+8,this.events.push(["over",this.winner])}roster(){return[...this.players.values()].map(t=>({id:t.id,name:t.name,color:t.color,bot:t.bot}))}snapshot(){return{t:He(this.time),left:this.surv?Math.max(0,Math.ceil(this.surv.snap().end)):Math.max(0,Math.round(this.timeLimit-(this.time-this.matchStart))),over:this.over?this.winner:0,lim:this.scoreLimit,p:[...this.players.values()].map(t=>[t.id,He(t.body.x),He(t.body.y),He(t.body.z),He(t.yaw),He(t.pitch),Math.ceil(t.hp),t.weapon,t.alive?1:0,t.body.thrusting?1:0,t.mags[t.weapon],Math.round(t.body.fuel),t.kills,t.deaths,He(t.reloadLeft),He(t.body.vx),He(t.body.vy),He(t.body.vz),t.body.ground?1:0,Math.round(t.bloom*1e4)/1e4,t.cans]),sv:this.surv?this.surv.snap():void 0}}drainEvents(){let t=this.events;return this.events=[],t}};var Gh=["Rex","Nova","Bolt","Kira","Zed","Mako","Pixel","Jinx","Echo","Dash"],Bn=(i,t,e)=>i+(t-i)*e,wg=(i,t,e)=>{let n=t-i;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;return i+n*e};function Dg(i){return{id:i[0],x:i[1],y:i[2],z:i[3],yaw:i[4],pitch:i[5],hp:i[6],weapon:i[7],alive:!!i[8],thr:!!i[9],ammo:i[10],fuel:i[11],kills:i[12],deaths:i[13],reload:i[14],vx:i[15],vy:i[16],vz:i[17],gr:!!i[18],bloom:i[19]||0,cans:i[20]||0}}var Kc=1/30,ca=class{constructor(){this.fx=[],this.roster=new Map,this.view={players:[],me:null,left:0,over:0,lim:20,ping:0,sv:null,mode:"arena"},this.mode="arena",this.myId=0,this.onClosed=()=>{}}emit(t){for(let e of t)for(let n of this.fx)n(e)}setRoster(t){this.roster=new Map(t.map(e=>[e.id,e]))}decorate(t){let e=this.roster.get(t.id);return t.name=e?e.name:"?",t.color=e?e.color:16777215,t.bot=e?e.bot:!1,t}close(){}},Ws=class extends ca{constructor({name:t="Player",bots:e=5,scoreLimit:n=20,timeLimit:s=300,net:r=null,mode:o="arena",dedicated:a=!1}={}){super(),this.isHost=!0,this.dedicated=a,this.ownerPid=0,this.mode=o==="survival"||o==="relax"?"survival":"arena",this.relax=o==="relax",this.view.mode=this.mode,this.game=new aa({scoreLimit:n,timeLimit:s,mode:this.relax?"relax":this.mode}),this.myId=a?0:this.game.addPlayer(t),this.botTarget=e+1,this.net=r,this.peers=new Map,this.pending=[],this.sinceSnap=0,this.pingNote=0,this.balance(),r&&(r.onPeer=(c,l)=>{let x=this.game.addPlayer(l);this.peers.set(c,x),this.balance(),this.syncRoster(),r.sendTo(c,{k:"hello",id:x,roster:this.game.roster(),lim:n,mode:this.mode})},r.onLeave=c=>{let l=this.peers.get(c);l&&this.game.removePlayer(l),this.peers.delete(c),this.balance(),this.syncRoster()},r.onMsg=(c,l)=>{let x=this.peers.get(c);if(x)if(l.k==="in")this.game.setInput(x,l.i);else if(l.k==="ping")r.sendTo(c,{k:"pong",t:l.t});else if(l.k==="cfg"&&c===this.ownerPid){let h=Number(l.bots);Number.isFinite(h)&&(this.botTarget=Math.max(0,Math.min(8,Math.round(h))),this.balance(),this.syncRoster())}else l.k==="start"&&c===this.ownerPid&&this.game.resetMatch()},r.onClose=()=>this.onClosed("Lost connection to the server")),this.syncRoster()}humans(){let t=0;for(let e of this.game.players.values())e.bot||t++;return t}balance(){let t=this.game,e=Math.max(0,this.botTarget-this.humans()),n=[...t.players.values()].filter(s=>s.bot);for(let s=n.length;s<e;s++)t.addPlayer(Gh[(t.nextId+s)%Gh.length],!0);for(let s=n.length;s>e;s--)t.removePlayer(n[s-1].id)}syncRoster(){this.setRoster(this.game.roster()),this.game.rosterDirty=!1,this.net&&this.net.broadcast({k:"roster",r:this.game.roster()})}setLocalInput(t){this.game.setInput(this.myId,t)}update(t){let e=this.game;e.advance(t),e.rosterDirty&&this.syncRoster();let n=e.drainEvents();if(n.length&&(this.emit(n),this.pending.push(...n)),this.sinceSnap+=t,this.net&&this.sinceSnap>=Kc&&(this.sinceSnap=this.sinceSnap>.1?0:this.sinceSnap-Kc,(this.net.broadcastFast||this.net.broadcast).call(this.net,{k:"s",s:e.snapshot()}),this.pending.length&&(this.net.broadcast({k:"e",e:this.pending}),this.pending=[])),this.dedicated)return;let s=this.view;s.players=[];for(let r of e.players.values()){let o={id:r.id,x:r.body.x,y:r.body.y,z:r.body.z,yaw:r.yaw,pitch:r.pitch,hp:Math.ceil(r.hp),weapon:r.weapon,alive:r.alive,thr:r.body.thrusting,kills:r.kills,deaths:r.deaths,ammo:r.mags[r.weapon],fuel:Math.round(r.body.fuel),reload:r.reloadLeft,vx:r.body.vx,vy:r.body.vy,vz:r.body.vz,gr:r.body.ground,bloom:r.bloom,cans:r.cans};s.players.push(this.decorate(o)),r.id===this.myId&&(s.me=o)}s.left=Math.max(0,Math.round(e.timeLimit-(e.time-e.matchStart))),s.over=e.over?e.winner:0,s.lim=e.scoreLimit,s.sv=e.surv?Zc(e.surv.snap()):null,e.surv&&(s.left=s.sv.end)}close(){this.net&&this.net.close()}},Xs=class extends ca{constructor(t){super(),this.isHost=!1,this.net=t,this.snaps=[],this.pred=Pi(),this.predAlive=!1,this.input={mx:0,mz:0,yaw:0,pitch:0,jet:!1,fire:!1,rl:!1,sw:-1},this.latched={rl:!1,sw:-1,jump:!1},this.acc=0,this.sendT=0,this.pingT=0,this.rtt=.05,this.last=null,this.lastT=-1,this.arrive=0,this.gap=Kc,this.dev=.01,this.delay=.12,this.ready=new Promise(e=>{this.resolveReady=e}),t.onMsg=e=>this.onMsg(e),t.onClose=e=>this.onClosed(e||"Disconnected")}onMsg(t){if(t.k==="hello")this.myId=t.id,this.setRoster(t.roster),this.view.lim=t.lim,this.mode=t.mode==="survival"?"survival":"arena",this.view.mode=this.mode,Si(this.mode==="survival"?"island":"arena"),this.resolveReady();else if(t.k==="roster")this.setRoster(t.r);else if(t.k==="s"){if(t.s.t<this.lastT)return;this.lastT=t.s.t;let e=new Map(t.s.p.map(s=>[s[0],Dg(s)])),n=performance.now();if(this.arrive){let s=(n-this.arrive)/1e3;this.gap=Bn(this.gap,Math.min(s,.5),.1),this.dev=Bn(this.dev,Math.abs(s-this.gap),.1);let r=Math.max(.09,Math.min(.35,this.gap*1.6+this.dev*3));this.delay=Bn(this.delay,r,r>this.delay?.3:.03)}this.arrive=n,this.snaps.push({rt:n,rows:e}),this.snaps.length>8&&this.snaps.shift(),this.last=t.s,t.e&&t.e.length&&this.emit(t.e),this.reconcile(e.get(this.myId))}else t.k==="e"?t.e&&t.e.length&&this.emit(t.e):t.k==="pong"&&(this.rtt=Bn(this.rtt,(performance.now()-t.t)/1e3,.3))}reconcile(t){if(!t)return;let e=this.pred;if(!t.alive||!this.predAlive||Math.hypot(t.x-e.x,t.y-e.y,t.z-e.z)>2.5)Object.assign(e,{x:t.x,y:t.y,z:t.z,vx:t.vx,vy:t.vy,vz:t.vz,fuel:t.fuel});else{let n=this.rtt/2+.03;e.x=Bn(e.x,t.x+t.vx*n,.12),e.y=Bn(e.y,t.y+t.vy*n,.12),e.z=Bn(e.z,t.z+t.vz*n,.12),e.fuel=t.fuel}this.predAlive=t.alive}setLocalInput(t){t.spd=Xr(this.view.me?this.view.me.weapon:1,t.ads),this.input=t,t.rl&&(this.latched.rl=!0),t.jump&&(this.latched.jump=!0),t.sw>=0&&(this.latched.sw=t.sw)}update(t){for(this.acc+=Math.min(t,.25);this.acc>=Vt;)this.acc-=Vt,this.predAlive&&ss(this.pred,this.input,Vt);this.sendT+=t,this.pingT+=t,this.sendT>=1/70&&(this.sendT=0,this.net.send({k:"in",i:{...this.input,rl:this.latched.rl,sw:this.latched.sw,jump:this.latched.jump}}),this.latched.rl=!1,this.latched.sw=-1,this.latched.jump=!1),this.pingT>=1&&(this.pingT=0,this.net.send({k:"ping",t:performance.now()}));let e=this.view;e.players=[],e.ping=Math.round(this.rtt*1e3);let n=this.snaps.length;if(!n)return;let s=performance.now()-this.delay*1e3,r=this.snaps[0],o=this.snaps[0];for(let l=0;l<n;l++){if(this.snaps[l].rt<=s&&(r=this.snaps[l]),this.snaps[l].rt>s){o=this.snaps[l];break}o=this.snaps[l]}let a=r===o?1:Math.max(0,Math.min(1,(s-r.rt)/(o.rt-r.rt))),c=r===o?Math.min(.15,Math.max(0,(s-o.rt)/1e3)):0;for(let[l,x]of this.snaps[n-1].rows){let h=r.rows.get(l)||x,u=o.rows.get(l)||x,f={...x,x:Bn(h.x,u.x,a)+(c?u.vx*c:0),y:Bn(h.y,u.y,a)+(c?u.vy*c:0),z:Bn(h.z,u.z,a)+(c?u.vz*c:0),yaw:wg(h.yaw,u.yaw,a),pitch:Bn(h.pitch,u.pitch,a)};l===this.myId&&(x.alive&&(f.x=this.pred.x,f.y=this.pred.y,f.z=this.pred.z,f.thr=this.input.jet&&this.pred.fuel>0,f.vx=this.pred.vx,f.vy=this.pred.vy,f.vz=this.pred.vz,f.gr=this.pred.ground),f.yaw=this.input.yaw,f.pitch=this.input.pitch,e.me=f),e.players.push(this.decorate(f))}this.last&&(e.left=this.last.left,e.over=this.last.over,e.lim=this.last.lim,e.sv=this.last.sv?Zc(this.last.sv):null)}close(){this.net.close()}};var Xh="JA1";function jc(i){let t=l=>{let x=i.match(l);return x?x[1].trim():""},e=t(/^a=ice-ufrag:(.+)$/m),n=t(/^a=ice-pwd:(.+)$/m),s=t(/^a=fingerprint:sha-256 (.+)$/m).replace(/:/g,""),r=t(/^a=setup:(.+)$/m)==="active"?"a":"p",o=[];for(let l of i.split(/\r?\n/)){let x=l.match(/^a=candidate:\S+ \d+ udp \d+ (\S+) (\d+) typ host/);x&&o.push([x[1],x[2]])}o.sort((l,x)=>Wh(x[0])-Wh(l[0]));let a=o.filter(([l])=>/^\d+\.\d+\.\d+\.\d+$/.test(l)),c=(a.length?a:o).slice(0,2).map(([l,x])=>`${l}/${x}`).join(",");if(!e||!n||!s)throw new Error("Could not read connection info");return[Xh,e,n,s,r,c].join("|")}function Wh(i){return/^\d+\.\d+\.\d+\.\d+$/.test(i)?/^(192\.168|10\.|172\.(1[6-9]|2\d|3[01]))/.test(i)?3:2:i.endsWith(".local")?1:i.toLowerCase().startsWith("fe80")?0:1}function Qc(i){let t=String(i).trim().split("|");if(t.length!==6||t[0]!==Xh)throw new Error("Not a valid Jet Arena code");let[,e,n,s,r,o]=t;if(!/^[0-9A-Fa-f]{64}$/.test(s))throw new Error("Bad code (fingerprint)");let a=s.toUpperCase().match(/.{2}/g).join(":"),c=o?o.split(",").map(h=>h.split("/")):[],l=c.find(([h])=>/^\d+\.\d+\.\d+\.\d+$/.test(h));return["v=0","o=- 1234567890 2 IN IP4 127.0.0.1","s=-","t=0 0","a=group:BUNDLE 0","a=msid-semantic: WMS",`m=application ${l?l[1]:9} UDP/DTLS/SCTP webrtc-datachannel`,`c=IN IP4 ${l?l[0]:"0.0.0.0"}`,...c.map(([h,u],f)=>`a=candidate:${1e3+f} 1 udp ${2122260223-f} ${h} ${u} typ host generation 0`),`a=ice-ufrag:${e}`,`a=ice-pwd:${n}`,`a=fingerprint:sha-256 ${a}`,`a=setup:${r==="a"?"active":"actpass"}`,"a=mid:0","a=sctp-port:5000","a=max-message-size:262144"].join(`\r
`)+`\r
`}var Bi=JSON.stringify,Pr=class{constructor(){this.mode="hotspot",this.code="",this.links=new Map,this.pending=new Map,this.nextPid=1,this.onPeer=()=>{},this.onLeave=()=>{},this.onMsg=()=>{},this.onClose=()=>{}}sendTo(t,e){let n=this.links.get(t);n&&n.send(e)}broadcast(t){let e=Bi(t);for(let n of this.links.values())n.sendRaw(e)}broadcastFast(t){let e=Bi(t);for(let n of this.links.values())n.sendFast(e)}close(){for(let{pc:t}of this.pending.values())t.close();for(let t of this.links.values())t.close&&t.close();this.links.clear(),this.pending.clear()}async hotspotInvite(){let t=new RTCPeerConnection({iceServers:[]}),e=t.createDataChannel("g"),n=t.createDataChannel("u",{ordered:!1,maxRetransmits:0}),s=this.nextPid++;this.pending.set(s,{pc:t,dc:e,accepted:!1});let r=!1;e.onmessage=c=>{let l=JSON.parse(c.data);if(!r){l.k==="name"&&(r=!0,this.onPeer(s,String(l.name||"Player").slice(0,14)));return}this.onMsg(s,l)},e.onopen=()=>{this.links.set(s,{send:c=>e.readyState==="open"&&e.send(Bi(c)),sendRaw:c=>e.readyState==="open"&&e.send(c),sendFast:c=>{let l=n.readyState==="open"?n:e;l.readyState==="open"&&l.send(c)},close:()=>t.close()})};let o=()=>{(this.links.delete(s)||this.pending.delete(s))&&this.onLeave(s),t.close()};e.onclose=o,t.onconnectionstatechange=()=>{(t.connectionState==="failed"||t.connectionState==="disconnected")&&o()},await t.setLocalDescription(await t.createOffer()),await Yh(t);let a=t.localDescription.sdp;if(!/a=candidate/.test(a))throw t.close(),this.pending.delete(s),new Error("Could not find this phone on the network. Make sure the hotspot is on and Wi-Fi is connected, then try again.");return{pid:s,code:jc(a)}}async hotspotAccept(t,e){let n=this.pending.get(t)||(this.links.has(t)?{accepted:!0}:null);if(!n)throw new Error("That invite expired, make a new one");if(!(n.accepted||n.pc.signalingState!=="have-local-offer")){n.accepted=!0;try{await n.pc.setRemoteDescription({type:"answer",sdp:Qc(e)})}catch{throw n.accepted=!1,new Error("That code did not work. Ask your friend to scan the invite again.")}}}},la=class{constructor(){this.pid=0,this.send=()=>{},this.onMsg=()=>{},this.onClose=()=>{},this.close=()=>{}}};function Yh(i,t=6e3){return new Promise(e=>{if(i.iceGatheringState==="complete")return e();let n=setTimeout(s,t);function s(){clearTimeout(n),i.removeEventListener("icegatheringstatechange",r),e()}function r(){i.iceGatheringState==="complete"&&s()}i.addEventListener("icegatheringstatechange",r)})}function qh(i,t){return new Promise((e,n)=>{let s=new la,r;try{r=new WebSocket(i)}catch{return n(new Error("Bad server address"))}let o=!1;r.onopen=()=>r.send(Bi(t)),r.onerror=()=>{o||(o=!0,n(new Error("Could not reach the server")))},r.onclose=()=>{o?s.onClose("Disconnected"):(o=!0,n(new Error("Could not reach the server")))},s.send=a=>{r.readyState===1&&r.send(Bi({t:"up",d:a}))},s.close=()=>{r.onclose=null,r.close()},r.onmessage=a=>{let c=JSON.parse(a.data);c.t==="joined"?(o=!0,s.pid=c.pid,s.code=c.code,s.owner=!!c.owner,e(s)):c.t==="d"?s.onMsg(c.d):c.t==="closed"?s.onClose("The room was closed"):c.t==="error"&&!o&&(o=!0,n(new Error(c.msg)))}})}var Zh=(i,t,e="arena",n=!0)=>qh(i,{t:"create",name:t,mode:e,pub:n}),$h=(i,t,e)=>qh(i,{t:"join",code:String(t).trim().toUpperCase(),name:e});function Jh(i){return new Promise((t,e)=>{let n;try{n=new WebSocket(i)}catch{return e(new Error("Bad server address"))}let s=setTimeout(()=>{n.close(),e(new Error("Server did not answer"))},5e3);n.onopen=()=>n.send(Bi({t:"list"})),n.onerror=()=>{clearTimeout(s),e(new Error("Could not reach the server"))},n.onmessage=r=>{let o=JSON.parse(r.data);o.t==="rooms"&&(clearTimeout(s),n.close(),t(o.rooms))}})}async function tl(i,t){let e=new RTCPeerConnection({iceServers:[]}),n=new la;n.opened=new Promise((r,o)=>{let a=setTimeout(()=>o(new Error("Timed out. Are you both on the same hotspot?")),45e3);e.ondatachannel=c=>{let l=c.channel;if(l.label==="u"){l.onmessage=x=>n.onMsg(JSON.parse(x.data));return}n.send=x=>{l.readyState==="open"&&l.send(Bi(x))},n.close=()=>e.close(),l.onopen=()=>{clearTimeout(a),l.send(Bi({k:"name",name:t})),r(n)},l.onmessage=x=>n.onMsg(JSON.parse(x.data)),l.onclose=()=>n.onClose("Disconnected from host")},e.onconnectionstatechange=()=>{e.connectionState==="failed"&&n.onClose("Connection failed")}}),await e.setRemoteDescription({type:"offer",sdp:Qc(i)}),await e.setLocalDescription(await e.createAnswer()),await Yh(e);let s=e.localDescription.sdp;if(!/a=candidate/.test(s))throw e.close(),new Error("Could not find this phone on the network. Make sure Wi-Fi is connected to the host's hotspot.");return{net:n,answer:jc(s)}}var nu=Ml(tu(),1),iu=Ml(eu(),1),Mi=null;async function xa(){if(Mi)return Mi;try{Mi=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1})}catch{Mi=null}return Mi}function ha(){Mi&&Mi.getTracks().forEach(i=>i.stop()),Mi=null}function nl(i,t,e=260){let n=(0,nu.default)(0,"M");n.addData(t),n.make();let s=n.getModuleCount(),r=3,o=Math.floor(e/(s+r*2)),a=o*(s+r*2);i.width=i.height=a;let c=i.getContext("2d");c.fillStyle="#fff",c.fillRect(0,0,a,a),c.fillStyle="#000";for(let l=0;l<s;l++)for(let x=0;x<s;x++)n.isDark(l,x)&&c.fillRect((x+r)*o,(l+r)*o,o,o)}async function il(i,t){let e=await xa();if(!e)return null;i.srcObject=e,i.setAttribute("playsinline",""),i.muted=!0,await i.play().catch(()=>{});let n=document.createElement("canvas"),s=n.getContext("2d",{willReadFrequently:!0}),r=!1,o=setInterval(()=>{if(r||i.readyState<2||!i.videoWidth)return;let a=360,c=Math.round(i.videoHeight/i.videoWidth*a);n.width=a,n.height=c,s.drawImage(i,0,0,a,c);let l=(0,iu.default)(s.getImageData(0,0,a,c).data,a,c,{inversionAttempts:"dontInvert"});l&&l.data.startsWith("JA1|")&&(r=!0,clearInterval(o),t(l.data))},180);return()=>{r=!0,clearInterval(o),i.srcObject=null}}var Pe=null,sl=!0;function wi(){if(Pe){Pe.state==="suspended"&&Pe.resume();return}let i=window.AudioContext||window.webkitAudioContext;i&&(Pe=new i)}function su(i){sl=i}function hn(i,t,e="square",n=.1,s=0){if(!Pe||!sl)return;let r=Pe.currentTime,o=Pe.createOscillator(),a=Pe.createGain();o.type=e,o.frequency.setValueAtTime(i,r),s&&o.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),r+t),a.gain.setValueAtTime(n,r),a.gain.exponentialRampToValueAtTime(1e-4,r+t),o.connect(a),a.connect(Pe.destination),o.start(r),o.stop(r+t)}function Ys(i,t=.15,e=1800){if(!Pe||!sl)return;let n=Pe.currentTime,s=Math.floor(Pe.sampleRate*i),r=Pe.createBuffer(1,s,Pe.sampleRate),o=r.getChannelData(0);for(let x=0;x<s;x++)o[x]=(Math.random()*2-1)*(1-x/s);let a=Pe.createBufferSource();a.buffer=r;let c=Pe.createBiquadFilter();c.type="lowpass",c.frequency.value=e;let l=Pe.createGain();l.gain.value=t,a.connect(c),c.connect(l),l.connect(Pe.destination),a.start(n)}var ke={shot(i,t=!0){let e=t?1:.35;i===2?Ys(.18,.22*e,1200):i===3?(Ys(.3,.25*e,900),hn(120,.25,"sawtooth",.12*e,-60)):i===1?(Ys(.06,.12*e,3e3),hn(240,.05,"square",.05*e)):(Ys(.08,.14*e,2400),hn(320,.07,"square",.06*e,-120))},hit(){hn(900,.05,"triangle",.12)},headshot(){hn(1400,.08,"triangle",.14)},hurt(){hn(160,.15,"sawtooth",.12,-80)},kill(){hn(520,.1,"triangle",.14),setTimeout(()=>hn(780,.14,"triangle",.14),90)},die(){hn(300,.5,"sawtooth",.14,-240)},reload(){hn(180,.06,"square",.08),setTimeout(()=>hn(260,.06,"square",.08),350)},land(i=1){Ys(.12,.16*i,500)},step(){Ys(.04,.05,700)},win(){[523,659,784,1046].forEach((i,t)=>setTimeout(()=>hn(i,.2,"triangle",.15),t*130))}};var j=i=>document.getElementById(i),Ve={get(i,t){try{let e=localStorage.getItem("ja_"+i);return e===null?t:e}catch{return t}},set(i,t){try{localStorage.setItem("ja_"+i,t)}catch{}}},Ee=new ia(j("game"));Ee.onLand=i=>ke.land(i);Ee.onStep=()=>ke.step();var ee=new ra,Ut=null,qe=!1,kn=!1,$s="s-menu",un=null;function Ze(i){$s=i;for(let t of document.querySelectorAll(".screen"))t.classList.toggle("on",t.id===i)}function hl(){$s="";for(let i of document.querySelectorAll(".screen"))i.classList.remove("on")}document.querySelectorAll("[data-back]").forEach(i=>i.addEventListener("click",()=>Ze(qe?"s-pause":"s-menu")));var va=matchMedia("(hover:hover) and (pointer:fine)").matches,bg=va?"2":(navigator.hardwareConcurrency||4)<=2?"0":"1";j("name").value=Ve.get("name","");j("qual").value=Ve.get("qual",bg);j("sens").value=Ve.get("sens","1");j("cam3").value=Ve.get("cam3","1");j("snd").value=Ve.get("snd","1");j("auto").value=Ve.get("auto",va?"0":"1");j("invy").value=Ve.get("invy","0");j("fps").value=Ve.get("fps","0");function Aa(){Ee.setQuality(Number(j("qual").value)),ee.sens=Number(j("sens").value),ee.invY=j("invy").value==="1",j("fpsbox").style.display=j("fps").value==="1"?"block":"none",Ee.thirdPerson=j("cam3").value==="1",su(j("snd").value==="1");for(let i of["qual","sens","cam3","snd","auto","invy","fps"])Ve.set(i,j(i).value);document.body.classList.toggle("manualfire",j("auto").value==="0")}for(let i of["qual","sens","cam3","snd","auto","invy","fps"])j(i).addEventListener("input",Aa);Aa();var ul=new sa(Ee,j("stage")),kr=Number(Ve.get("lw","1"));kr>=0&&kr<Be.length||(kr=1);function hu(i){kr=i,Ve.set("lw",String(i)),ul.setWeapon(i),document.querySelectorAll("#wchips button").forEach((n,s)=>n.classList.toggle("on",s===i));let t=Be[i],e=(n,s)=>`<div>${n}<i><u style="width:${Math.round(Math.min(1,s)*100)}%"></u></i></div>`;j("wstat").innerHTML=e("Damage",t.dmg*Math.min(t.pellets,4)/75)+e("Fire rate",.085/t.rate)+e("Range",t.range/160)}Be.forEach((i,t)=>{let e=document.createElement("button");e.textContent=i.name,e.onclick=()=>hu(t),j("wchips").appendChild(e)});hu(kr);function uu(){document.querySelectorAll(".seg[data-sel]").forEach(i=>{let t=j(i.dataset.sel).value;i.querySelectorAll("button").forEach(e=>e.classList.toggle("on",e.dataset.v===t))})}document.querySelectorAll(".seg[data-sel]").forEach(i=>i.querySelectorAll("button").forEach(t=>{t.onclick=()=>{let e=j(i.dataset.sel);e.value=t.dataset.v,e.dispatchEvent(new Event("input"))}}));for(let i of["qual","cam3","auto","snd"])j(i).addEventListener("input",uu);uu();{let i=null,t=j("stage");t.addEventListener("pointerdown",n=>{i=n.clientX,t.setPointerCapture(n.pointerId)}),t.addEventListener("pointermove",n=>{i!==null&&(ul.spin+=(n.clientX-i)*.012,i=n.clientX)});let e=()=>{i=null};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e)}var Js=()=>{let i=j("name").value.trim()||"Player";return Ve.set("name",j("name").value.trim()),i};j("b-settings").onclick=()=>Ze("s-settings");j("p-settings").onclick=()=>Ze("s-settings");var Fg=matchMedia("(display-mode: standalone)").matches||navigator.standalone;if(!Fg){let i=/iphone|ipad|ipod/i.test(navigator.userAgent);j("install").textContent=i?'Tip: tap the Share button, then "Add to Home Screen" to play fullscreen with no browser bar.':'Tip: open the browser menu and choose "Install app" / "Add to Home screen" for fullscreen play.'}function Ks(i,{reset:t=!1}={}){Ut=i,i.onClosed=e=>{Qi(),Ca(e||"Disconnected")},i.fx.length=0,i.fx.push(Tg),Ee.setMapKind(i.mode==="survival"?"island":"arena"),document.body.classList.toggle("survival",i.mode==="survival"),Ee.clearPlayers(),t&&i.game&&i.game.resetMatch(),ee.reset(),ee.yaw=0,ee.pitch=0,qe=!0,kn=!1,document.body.classList.add("playing"),document.body.classList.toggle("touch",ee.touch||matchMedia("(pointer:coarse)").matches),j("hud").classList.add("on"),hl(),ee.enabled=!0,j("net").textContent="",wi(),document.documentElement.requestFullscreen?.().catch(()=>{}),va&&ee.lock();try{navigator.wakeLock?.request("screen").catch(()=>{})}catch{}}function Qi(){Ut&&Ut.close(),un&&(un.close(),un=null),ha(),ts(),Ut=null,qe=!1,kn=!1,ee.enabled=!1,ee.reset(),document.body.classList.remove("playing","scoped","survival"),Si("arena"),j("hud").classList.remove("on"),document.fullscreenElement&&document.exitFullscreen?.().catch(()=>{}),Ze("s-menu")}j("p-quit").onclick=Qi;j("e-quit").onclick=Qi;j("l-leave").onclick=Qi;function Ca(i){let t=document.createElement("div");t.textContent=i,Object.assign(t.style,{position:"fixed",left:"50%",top:"14px",transform:"translateX(-50%)",background:"#ef476f",padding:"10px 16px",borderRadius:"10px",zIndex:99,fontWeight:700}),document.body.appendChild(t),setTimeout(()=>t.remove(),3500)}function Ur(i){qe&&(kn=i,ee.enabled=!i,i?(ee.reset(),Ze("s-pause"),j("p-invite").style.display=un?"block":"none"):(hl(),va&&!ee.touch&&ee.lock()))}j("pause").addEventListener("pointerdown",i=>{i.preventDefault(),Ur(!0)});function du(){j("cam3").value=Ee.thirdPerson?"0":"1",Aa()}j("btn-cam").addEventListener("pointerdown",i=>{i.preventDefault(),du()});addEventListener("keydown",i=>{i.key.toLowerCase()==="v"&&qe&&!kn&&du()});j("p-resume").onclick=()=>Ur(!1);addEventListener("keydown",i=>{i.key.toLowerCase()!=="f"||!qe||kn||(document.fullscreenElement?document.exitFullscreen?.().catch(()=>{}):document.documentElement.requestFullscreen?.().catch(()=>{}))});addEventListener("keydown",i=>{i.key==="Escape"&&qe&&$s!=="s-end"&&Ur(!kn)});document.addEventListener("visibilitychange",()=>{document.hidden&&qe&&!kn&&Ur(!0)});document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&qe&&!kn&&!ee.touch&&$s===""&&Ur(!0)});j("b-solo").onclick=()=>{wi(),Ks(new Ws({name:Js(),bots:5}),{reset:!0})};var Ea=Ve.get("relax","0")==="1";function fu(){document.querySelectorAll("#svmode button").forEach(i=>i.classList.toggle("on",i.dataset.v==="1"===Ea))}document.querySelectorAll("#svmode button").forEach(i=>{i.onclick=()=>{Ea=i.dataset.v==="1",Ve.set("relax",Ea?"1":"0"),fu()}});fu();j("b-survive").onclick=()=>{wi(),Ks(new Ws({name:Js(),bots:0,mode:Ea?"relax":"survival"}),{reset:!0})};var ru=/^https?:$/.test(location.protocol)?`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`:"";j("server").value=Ve.get("server",ru)||ru;var Nr=()=>{let i=j("server").value.trim();return Ve.set("server",i),i},In=i=>{j("o-err").textContent=i||""};async function dl(){let i=Nr();if(!/^wss?:\/\//.test(i))return;let t=i.replace(/^ws/,"http").replace(/\/ws\/?$/,"")+"/health",e=async()=>{let n=new AbortController,s=setTimeout(()=>n.abort(),4e3);try{return(await fetch(t,{cache:"no-store",signal:n.signal})).ok}catch{return!1}finally{clearTimeout(s)}};if(!await e()){for(let n=0;n<20;n++){if(In("Waking up the server\u2026 this can take up to a minute"),await e()){In("");return}await new Promise(s=>setTimeout(s,1500))}In("")}}j("b-online").onclick=()=>{Ze("s-online"),In(""),pu()};j("o-refresh").onclick=pu;async function pu(){let i=j("rooms");if(i.textContent="",!!Nr())try{await dl();let t=await Jh(Nr());if(!t.length){i.innerHTML='<div class="note">No public rooms yet. Create one!</div>';return}for(let e of t){let n=document.createElement("div");n.className="room";let s=document.createElement("span");s.textContent=`${e.name}  \xB7  ${e.players}/${e.max}`;let r=document.createElement("button");r.textContent="Join",r.onclick=()=>mu(e.code),n.append(s,r),i.appendChild(n)}}catch(t){In(t.message)}}j("o-host").onclick=async()=>{wi(),In("");try{await dl();let i=j("o-mode").value,t=await Zh(Nr(),Js(),i,!0),e=new Xs(t);Ut=e,j("l-botsrow").style.display=i==="arena"?"":"none",j("l-svnote").style.display=i==="arena"?"none":"",j("l-svnote").textContent=i==="relax"?"Island relax: monsters roam and attack players, but never the lighthouse. Survive three nights until the rescue boat arrives.":"Island survival: defend the lighthouse together for three nights until the rescue boat arrives.",e.onClosed=n=>{Qi(),Ca(n)},j("l-code").textContent=t.code,j("l-bots").value=5,j("l-botsn").textContent="5",Ze("s-lobby"),await e.ready}catch(i){In(i.message)}};j("l-bots").oninput=()=>{let i=Number(j("l-bots").value);j("l-botsn").textContent=String(i),Ut&&Ut.net&&Ut.net.send({k:"cfg",bots:i})};j("l-start").onclick=()=>{Ut&&Ut.net&&Ut.net.send({k:"start"}),Ks(Ut)};j("o-join").onclick=()=>mu(j("code").value);async function mu(i){if(wi(),In(""),String(i).trim().length<4)return In("Enter the 4-letter room code");try{await dl();let t=await $h(Nr(),i,Js()),e=new Xs(t);await e.ready,Ks(e)}catch(t){In(t.message)}}setInterval(()=>{if($s==="s-lobby"&&Ut){let i=j("l-players");i.textContent="";for(let t of Ut.roster.values()){let e=document.createElement("div");e.innerHTML='<span></span><span style="color:var(--dim)"></span>',e.firstChild.textContent=t.name,e.lastChild.textContent=t.bot?"bot":t.id===Ut.myId?"you":"friend",i.appendChild(e)}}},500);var Lr=null;function ts(){Lr&&(Lr(),Lr=null),j("cam").style.display="none",j("cam2").style.display="none"}var Eu=i=>{try{navigator.clipboard.writeText(i)}catch{}},si=(i,t)=>{j(i).textContent=t||""};j("b-hotspot").onclick=()=>Ze("s-hot");j("h-host").onclick=async()=>{wi(),await xa(),un=new Pr("hotspot");let i=new Ws({name:Js(),bots:4,net:un});Ut=i,i.onClosed=n=>{Qi(),Ca(n)};let t=un.onPeer,e=un.onLeave;un.onPeer=(n,s)=>{t(n,s),pa(),n===fl&&(si("hh-err",""),j("hh-answer").value="",ga())},un.onLeave=n=>{e(n),pa()},Ze("s-hhost"),pa(),await ga()};var fl=0;async function ga(){ts(),fa=!1,si("hh-err","");try{let{pid:i,code:t}=await un.hotspotInvite();fl=i,j("hh-offer").value=t,nl(j("hh-qr"),t,320);let e=await il(j("cam"),n=>{j("hh-answer").value=n,gu()});e&&(Lr=e,j("cam").style.display="block")}catch(i){si("hh-err",i.message)}}var fa=!1;async function gu(){let i=j("hh-answer").value.trim();if(!i)return si("hh-err","Scan or paste your friend's code first");if(!fa){fa=!0,ts(),j("hh-connect").disabled=!0;try{await un.hotspotAccept(fl,i),si("hh-err","Connecting\u2026 (up to 10 seconds)")}catch(t){si("hh-err",t.message),fa=!1}j("hh-connect").disabled=!1}}function pa(){let i=j("hh-players");if(i.textContent="",!!Ut)for(let t of Ut.game.roster()){if(t.bot)continue;let e=document.createElement("div");e.innerHTML='<span></span><span style="color:var(--good)">connected</span>',e.firstChild.textContent=t.name+(t.id===Ut.myId?" (you)":""),i.appendChild(e)}}j("hh-connect").onclick=gu;j("hh-copy").onclick=()=>Eu(j("hh-offer").value);j("hh-next").onclick=ga;j("hh-start").onclick=()=>{ts(),Ks(Ut,{reset:!qe})};j("hh-back").onclick=()=>{ts(),qe?Ze("s-pause"):Qi()};j("p-invite").onclick=()=>{Ze("s-hhost"),pa(),ga()};j("h-join").onclick=async()=>{wi(),await xa(),Ze("s-hjoin"),j("hj-step2").style.display="none",si("hj-err","");let i=await il(j("cam2"),t=>{j("hj-offer").value=t,vu(t)});i&&(Lr=i,j("cam2").style.display="block")};j("hj-go").onclick=()=>vu(j("hj-offer").value);var rl=!1;async function vu(i){if(!rl){rl=!0,si("hj-err","");try{ts();let{net:t,answer:e}=await tl(i.trim(),Js());j("hj-answer").value=e,nl(j("hj-qr"),e,320),j("hj-step2").style.display="block",j("hj-copy").onclick=()=>Eu(e),await t.opened;let n=new Xs(t);await n.ready,ha(),Ks(n)}catch(t){si("hj-err",t.message||"Could not connect")}rl=!1}}j("hj-back").onclick=()=>{ts(),ha(),Ze("s-hot")};var ol=j("feed");function ma(i){let t=Ut&&Ut.roster.get(i);return t?t.name:"?"}var Zs=[],ou=0,au=!1;function Sg(i,t,e,n){let s=i.fire&&!au;au=i.fire,!(!Ut||Ut.isHost||!i.fire||!t||!t.alive||t.reload>0||t.ammo<=0||Ut.view.over)&&(!e.auto&&!s||n/1e3-ou<e.rate*1.02||(ou=n/1e3,Zs.push(n),Ee.shot(Ut.myId),ke.shot(t.weapon,!0),Ee.kick=.012))}function Tg(i){let t=Ut?Ut.myId:0,e=Ut.view;if(i[0]==="s"){for(Ee.tracer(i[2],i[3],i[4],i[5],i[6],i[7]);Zs.length&&performance.now()-Zs[0]>1500;)Zs.shift();if(i[1]===t&&Zs.length){Zs.shift();return}Ee.shot(i[1]);let n=e.players.find(o=>o.id===i[1]),s=i[1]===t,r=e.me?Math.hypot(i[2]-e.me.x,i[4]-e.me.z):99;(s||r<35)&&ke.shot(n?n.weapon:0,s||r<12),s&&(Ee.kick=.012)}else if(i[0]==="h")Ee.hit(i[1]),i[2]===t&&(al(j("hitm"),i[4]?"head":""),(i[4]?ke.headshot:ke.hit)()),i[1]===t&&(al(j("vig")),ke.hurt(),Ee.addShake(.08));else if(i[0]==="mh")Ee.mons.flash(i[1]),i[2]===t&&(al(j("hitm"),i[4]?"head":""),(i[4]?ke.headshot:ke.hit)());else if(i[0]==="mk")i[2]===t&&ke.kill();else if(i[0]==="boom")Ee.boom(i[1],i[2],i[3]),ke.shot(2,!0);else if(i[0]==="mimic")qs("It was a MIMIC!",1800),Ee.addShake(.12),ke.hurt();else if(i[0]==="phase")i[1]?qs(`\u{1F311} Night ${i[2]} falls\u2026 keep the light burning`,3500):qs(`\u{1F305} Dawn of day ${i[2]+1}`,3e3);else if(i[0]==="drop")qs("\u{1F4E6} Supply drop incoming!",2200);else if(i[0]==="pk")i[1]===t&&qs(i[2]===0?"\u26FD Fuel can: take it to the lighthouse":"\u2795 Medkit: +60 health",2400);else if(i[0]==="dep")qs("\u{1F4A1} Lighthouse refuelled",2e3);else if(i[0]==="k"){let n=Be[i[3]]?Be[i[3]].name:"",s=document.createElement("div");for(s.textContent=i[1]===0?`${ma(i[2])} was torn apart`:`${ma(i[1])}  \u279C  ${ma(i[2])}  (${n})`,(i[1]===t||i[2]===t)&&(s.style.background="rgba(255,159,28,.55)"),ol.appendChild(s),setTimeout(()=>s.remove(),4600);ol.children.length>5;)ol.firstChild.remove();i[1]===t&&ke.kill(),i[2]===t&&ke.die()}}var cu=0;function qs(i,t=2600){let e=j("note");e.textContent=i,e.classList.add("on"),clearTimeout(cu),cu=setTimeout(()=>e.classList.remove("on"),t)}function al(i,t){i.classList.remove("head"),t&&i.classList.add(t),i.classList.add("on"),clearTimeout(i._t),i._t=setTimeout(()=>i.classList.remove("on"),70)}var cl=0,ua=0,Rg=!0,ll=0;function Pg(i){let t=Ut.view,e=t.me;if(!e)return;j("hp").style.width=Math.max(0,e.hp)+"%",j("hpbar").classList.toggle("low",e.hp<30),j("fuel").style.width=e.fuel+"%",j("fuelbar").classList.toggle("low",e.fuel<12);let n=Be[e.weapon];j("wname").textContent=n.name,j("ammon").textContent=e.reload>0?"RELOAD":e.ammo+" / "+n.mag,e.reload>0&&!ll?(ke.reload(),ll=1):e.reload<=0&&(ll=0);let s=t.left,r=t.sv;if(r?(j("timer").textContent=(r.dark>.5?"\u{1F311} Night ":"\u2600\uFE0F Day ")+r.day+" / 3",j("goal").textContent=(r.relax?"Relax \xB7 ":"")+"Rescue boat in "+Math.floor(s/60)+":"+String(s%60).padStart(2,"0"),j("svfuel").style.width=Math.max(0,Math.min(100,r.fuel))+"%",j("svhp").style.width=Math.max(0,Math.min(100,r.hp/6))+"%",j("svhprow").style.display=r.relax?"none":"",j("svcans").textContent=e.cans?"\u26FD \xD7"+e.cans+" \u2192 bring it to the lighthouse":""):(j("timer").textContent=Math.floor(s/60)+":"+String(s%60).padStart(2,"0"),j("goal").textContent="First to "+t.lim+" kills"),j("net").textContent=Ut.isHost?Ut.net?"HOST":"":t.ping+" ms",j("banner").innerHTML=e.alive?"":r?"You fell\u2026<small>You will wash ashore at the lighthouse in a moment</small>":"Respawning\u2026<small>Take cover, then jump back in</small>",Rg=e.alive,cl-=i,cl<=0||t.over!==ua){cl=.3;let o=[...t.players].sort((c,l)=>l.kills-c.kills||c.deaths-l.deaths),a=j("board");a.textContent="";for(let c of o.slice(0,5)){let l=document.createElement("div");c.id===e.id&&(l.className="me");let x=document.createElement("span"),h=document.createElement("span");x.textContent=c.name,h.textContent=c.kills,l.append(x,h),a.appendChild(l)}if(t.over&&!ua){let c=r?t.over===1:t.over===e.id;ke[c?"win":"die"](),j("e-title").textContent=r?c?"Rescued! \u{1F6A4} You survived three nights":"The lighthouse fell\u2026 \u{1F311}":c?"You win! \u{1F3C6}":ma(t.over)+" wins";let l=j("e-list");l.textContent="";for(let x of o){let h=document.createElement("div");h.innerHTML="<span></span><span></span>",h.firstChild.textContent=x.name,h.lastChild.textContent=x.kills+" / "+x.deaths,l.appendChild(h)}ee.reset(),ee.enabled=!1,Ze("s-end")}else!t.over&&ua&&(Ze(""),hl(),ee.enabled=!0);ua=t.over}}var lu=performance.now(),da=0,xl=0;Ee.onAutoQuality=i=>{j("qual").value=String(i),Aa(),Ca("Graphics lowered to keep the game smooth")};function Au(i){requestAnimationFrame(Au);let t=Math.min(.1,(i-lu)/1e3);if(qe&&j("fps").value==="1"&&(da+=t,xl++,da>=.5&&(j("fpsbox").textContent=Math.round(xl/da)+" FPS",da=0,xl=0)),lu=i,qe&&!kn&&!document.hidden&&Ee.adapt(t),!Ut){$s==="s-menu"&&ul.draw(t);return}if(!(kn&&Ut.isHost&&!Ut.net)){let n=Ut.view.me,s=n?n.weapon:1;if(qe){n&&!n.alive&&(ee.adsToggle=!1);let r=ee.read(s,Be.length);r.fp=!Ee.thirdPerson;let o=Be[s],a=!!r.ads&&!!n&&n.alive,c=a&&s===Ri;ee.zoomStep&&(ee.zoomStep=!1,c&&(ee.zoomLevel=(ee.zoomLevel+1)%o.zoom.length)),ji.fov=a?Ll(s,ee.zoomLevel):ir,ji.fp=c,ji.ads=a,ee.zoomMul=Math.tan(Ee.fov*Math.PI/360)/Math.tan(ir*Math.PI/360),ee.scopedNow=c;let l=!1,x=o.spread;n&&n.alive&&(x=Wr(o,a,Math.hypot(n.vx||0,n.vz||0),!n.gr||n.thr,n.bloom||0),l=Nl(n,Ut.view.sv?Ut.view.sv.mons.map(h=>({id:1e3+h.id,x:h.x,y:h.y,z:h.z,alive:!0,hw:ii[h.kind].hw,bh:ii[h.kind].bh,th:ii[h.kind].h})):Ut.view.players,r.yaw,r.pitch,o.range,c||r.fp)),!r.fire&&l&&n&&n.alive&&!Ut.view.over&&j("auto").value==="1"&&(s!==Ri||c&&x<.005)&&(r.fire=o.auto||Math.floor(i/110)%2===0),Sg(r,n,o,i),Ut.setLocalInput(r),Ig(x,Ee.fov,l,c,a,s)}else Ut.setLocalInput({mx:0,mz:0,yaw:ee.yaw,pitch:ee.pitch,jet:!1,fire:!1,ads:!1});Ut.update(t)}qe&&(Ee.draw(t,Ut.view,{yaw:ee.yaw,pitch:ee.pitch,fov:ji.fov,fp:ji.fp,scope:ji.fp,ads:ji.ads}),Pg(t))}var ji={fov:ir,fp:!1,ads:!1},xu=j("cross");function Ig(i,t,e,n,s,r){let o=Math.tan(i)/Math.tan(t*Math.PI/360)*(innerHeight/2);xu.style.setProperty("--gap",Math.max(3,Math.min(140,o)).toFixed(1)+"px"),xu.classList.toggle("lock",e),document.body.classList.toggle("scoped",n),j("btn-scope").classList.toggle("on",s);let a=j("btn-zoom");a.classList.toggle("show",n&&Be[r].zoom.length>1);let c=Be[r].zoom[Math.min(ee.zoomLevel,Be[r].zoom.length-1)]+"x";a.textContent!==c&&(a.textContent=c,j("zoomtag").textContent=c)}requestAnimationFrame(Au);"serviceWorker"in navigator&&/^https?:$/.test(location.protocol)&&navigator.serviceWorker.register("sw.js").catch(()=>{});window.__ja={get session(){return Ut},input:ee,renderer:Ee,net:{HostNet:Pr,hotspotJoin:tl}};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
