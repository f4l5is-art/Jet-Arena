var rl=Object.create;var V0=Object.defineProperty;var sl=Object.getOwnPropertyDescriptor;var ol=Object.getOwnPropertyNames;var al=Object.getPrototypeOf,xl=Object.prototype.hasOwnProperty;var H0=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var cl=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ol(e))!xl.call(i,r)&&r!==t&&V0(i,r,{get:()=>e[r],enumerable:!(n=sl(e,r))||n.enumerable});return i};var G0=(i,e,t)=>(t=i!=null?rl(al(i)):{},cl(e||!i||!i.__esModule?V0(t,"default",{value:i,enumerable:!0}):t,i));var zc=H0((Nc,Oc)=>{var Uc=function(){var i=function(C,v){var m=236,B=17,y=C,D=t[v],M=null,p=0,g=null,w=[],S={},P=function(R,V){p=y*4+17,M=function(I){for(var X=new Array(I),Y=0;Y<I;Y+=1){X[Y]=new Array(I);for(var te=0;te<I;te+=1)X[Y][te]=null}return X}(p),L(0,0),L(p-7,0),L(0,p-7),j(),H(),$(R,V),y>=7&&G(R),g==null&&(g=le(y,D,w)),se(g,V)},L=function(R,V){for(var I=-1;I<=7;I+=1)if(!(R+I<=-1||p<=R+I))for(var X=-1;X<=7;X+=1)V+X<=-1||p<=V+X||(0<=I&&I<=6&&(X==0||X==6)||0<=X&&X<=6&&(I==0||I==6)||2<=I&&I<=4&&2<=X&&X<=4?M[R+I][V+X]=!0:M[R+I][V+X]=!1)},N=function(){for(var R=0,V=0,I=0;I<8;I+=1){P(!0,I);var X=r.getLostPoint(S);(I==0||R>X)&&(R=X,V=I)}return V},H=function(){for(var R=8;R<p-8;R+=1)M[R][6]==null&&(M[R][6]=R%2==0);for(var V=8;V<p-8;V+=1)M[6][V]==null&&(M[6][V]=V%2==0)},j=function(){for(var R=r.getPatternPosition(y),V=0;V<R.length;V+=1)for(var I=0;I<R.length;I+=1){var X=R[V],Y=R[I];if(M[X][Y]==null)for(var te=-2;te<=2;te+=1)for(var ue=-2;ue<=2;ue+=1)te==-2||te==2||ue==-2||ue==2||te==0&&ue==0?M[X+te][Y+ue]=!0:M[X+te][Y+ue]=!1}},G=function(R){for(var V=r.getBCHTypeNumber(y),I=0;I<18;I+=1){var X=!R&&(V>>I&1)==1;M[Math.floor(I/3)][I%3+p-8-3]=X}for(var I=0;I<18;I+=1){var X=!R&&(V>>I&1)==1;M[I%3+p-8-3][Math.floor(I/3)]=X}},$=function(R,V){for(var I=D<<3|V,X=r.getBCHTypeInfo(I),Y=0;Y<15;Y+=1){var te=!R&&(X>>Y&1)==1;Y<6?M[Y][8]=te:Y<8?M[Y+1][8]=te:M[p-15+Y][8]=te}for(var Y=0;Y<15;Y+=1){var te=!R&&(X>>Y&1)==1;Y<8?M[8][p-Y-1]=te:Y<9?M[8][15-Y-1+1]=te:M[8][15-Y-1]=te}M[p-8][8]=!R},se=function(R,V){for(var I=-1,X=p-1,Y=7,te=0,ue=r.getMaskFunction(V),ae=p-1;ae>0;ae-=2)for(ae==6&&(ae-=1);;){for(var be=0;be<2;be+=1)if(M[X][ae-be]==null){var k=!1;te<R.length&&(k=(R[te]>>>Y&1)==1);var _e=ue(X,ae-be);_e&&(k=!k),M[X][ae-be]=k,Y-=1,Y==-1&&(te+=1,Y=7)}if(X+=I,X<0||p<=X){X-=I,I=-I;break}}},he=function(R,V){for(var I=0,X=0,Y=0,te=new Array(V.length),ue=new Array(V.length),ae=0;ae<V.length;ae+=1){var be=V[ae].dataCount,k=V[ae].totalCount-be;X=Math.max(X,be),Y=Math.max(Y,k),te[ae]=new Array(be);for(var _e=0;_e<te[ae].length;_e+=1)te[ae][_e]=255&R.getBuffer()[_e+I];I+=be;var Se=r.getErrorCorrectPolynomial(k),ye=o(te[ae],Se.getLength()-1),Pe=ye.mod(Se);ue[ae]=new Array(Se.getLength()-1);for(var _e=0;_e<ue[ae].length;_e+=1){var Ge=_e+Pe.getLength()-ue[ae].length;ue[ae][_e]=Ge>=0?Pe.getAt(Ge):0}}for(var Te=0,_e=0;_e<V.length;_e+=1)Te+=V[_e].totalCount;for(var T=new Array(Te),F=0,_e=0;_e<X;_e+=1)for(var ae=0;ae<V.length;ae+=1)_e<te[ae].length&&(T[F]=te[ae][_e],F+=1);for(var _e=0;_e<Y;_e+=1)for(var ae=0;ae<V.length;ae+=1)_e<ue[ae].length&&(T[F]=ue[ae][_e],F+=1);return T},le=function(R,V,I){for(var X=a.getRSBlocks(R,V),Y=c(),te=0;te<I.length;te+=1){var ue=I[te];Y.put(ue.getMode(),4),Y.put(ue.getLength(),r.getLengthInBits(ue.getMode(),R)),ue.write(Y)}for(var ae=0,te=0;te<X.length;te+=1)ae+=X[te].dataCount;if(Y.getLengthInBits()>ae*8)throw"code length overflow. ("+Y.getLengthInBits()+">"+ae*8+")";for(Y.getLengthInBits()+4<=ae*8&&Y.put(0,4);Y.getLengthInBits()%8!=0;)Y.putBit(!1);for(;!(Y.getLengthInBits()>=ae*8||(Y.put(m,8),Y.getLengthInBits()>=ae*8));)Y.put(B,8);return he(Y,X)};S.addData=function(R,V){V=V||"Byte";var I=null;switch(V){case"Numeric":I=x(R);break;case"Alphanumeric":I=l(R);break;case"Byte":I=h(R);break;case"Kanji":I=u(R);break;default:throw"mode:"+V}w.push(I),g=null},S.isDark=function(R,V){if(R<0||p<=R||V<0||p<=V)throw R+","+V;return M[R][V]},S.getModuleCount=function(){return p},S.make=function(){if(y<1){for(var R=1;R<40;R++){for(var V=a.getRSBlocks(R,D),I=c(),X=0;X<w.length;X++){var Y=w[X];I.put(Y.getMode(),4),I.put(Y.getLength(),r.getLengthInBits(Y.getMode(),R)),Y.write(I)}for(var te=0,X=0;X<V.length;X++)te+=V[X].dataCount;if(I.getLengthInBits()<=te*8)break}y=R}P(!1,N())},S.createTableTag=function(R,V){R=R||2,V=typeof V>"u"?R*4:V;var I="";I+='<table style="',I+=" border-width: 0px; border-style: none;",I+=" border-collapse: collapse;",I+=" padding: 0px; margin: "+V+"px;",I+='">',I+="<tbody>";for(var X=0;X<S.getModuleCount();X+=1){I+="<tr>";for(var Y=0;Y<S.getModuleCount();Y+=1)I+='<td style="',I+=" border-width: 0px; border-style: none;",I+=" border-collapse: collapse;",I+=" padding: 0px; margin: 0px;",I+=" width: "+R+"px;",I+=" height: "+R+"px;",I+=" background-color: ",I+=S.isDark(X,Y)?"#000000":"#ffffff",I+=";",I+='"/>';I+="</tr>"}return I+="</tbody>",I+="</table>",I},S.createSvgTag=function(R,V,I,X){var Y={};typeof arguments[0]=="object"&&(Y=arguments[0],R=Y.cellSize,V=Y.margin,I=Y.alt,X=Y.title),R=R||2,V=typeof V>"u"?R*4:V,I=typeof I=="string"?{text:I}:I||{},I.text=I.text||null,I.id=I.text?I.id||"qrcode-description":null,X=typeof X=="string"?{text:X}:X||{},X.text=X.text||null,X.id=X.text?X.id||"qrcode-title":null;var te=S.getModuleCount()*R+V*2,ue,ae,be,k,_e="",Se;for(Se="l"+R+",0 0,"+R+" -"+R+",0 0,-"+R+"z ",_e+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',_e+=Y.scalable?"":' width="'+te+'px" height="'+te+'px"',_e+=' viewBox="0 0 '+te+" "+te+'" ',_e+=' preserveAspectRatio="xMinYMin meet"',_e+=X.text||I.text?' role="img" aria-labelledby="'+ze([X.id,I.id].join(" ").trim())+'"':"",_e+=">",_e+=X.text?'<title id="'+ze(X.id)+'">'+ze(X.text)+"</title>":"",_e+=I.text?'<description id="'+ze(I.id)+'">'+ze(I.text)+"</description>":"",_e+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',_e+='<path d="',be=0;be<S.getModuleCount();be+=1)for(k=be*R+V,ue=0;ue<S.getModuleCount();ue+=1)S.isDark(be,ue)&&(ae=ue*R+V,_e+="M"+ae+","+k+Se);return _e+='" stroke="transparent" fill="black"/>',_e+="</svg>",_e},S.createDataURL=function(R,V){R=R||2,V=typeof V>"u"?R*4:V;var I=S.getModuleCount()*R+V*2,X=V,Y=I-V;return d(I,I,function(te,ue){if(X<=te&&te<Y&&X<=ue&&ue<Y){var ae=Math.floor((te-X)/R),be=Math.floor((ue-X)/R);return S.isDark(be,ae)?0:1}else return 1})},S.createImgTag=function(R,V,I){R=R||2,V=typeof V>"u"?R*4:V;var X=S.getModuleCount()*R+V*2,Y="";return Y+="<img",Y+=' src="',Y+=S.createDataURL(R,V),Y+='"',Y+=' width="',Y+=X,Y+='"',Y+=' height="',Y+=X,Y+='"',I&&(Y+=' alt="',Y+=ze(I),Y+='"'),Y+="/>",Y};var ze=function(R){for(var V="",I=0;I<R.length;I+=1){var X=R.charAt(I);switch(X){case"<":V+="&lt;";break;case">":V+="&gt;";break;case"&":V+="&amp;";break;case'"':V+="&quot;";break;default:V+=X;break}}return V},K=function(R){var V=1;R=typeof R>"u"?V*2:R;var I=S.getModuleCount()*V+R*2,X=R,Y=I-R,te,ue,ae,be,k,_e={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},Se={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},ye="";for(te=0;te<I;te+=2){for(ae=Math.floor((te-X)/V),be=Math.floor((te+1-X)/V),ue=0;ue<I;ue+=1)k="\u2588",X<=ue&&ue<Y&&X<=te&&te<Y&&S.isDark(ae,Math.floor((ue-X)/V))&&(k=" "),X<=ue&&ue<Y&&X<=te+1&&te+1<Y&&S.isDark(be,Math.floor((ue-X)/V))?k+=" ":k+="\u2588",ye+=R<1&&te+1>=Y?Se[k]:_e[k];ye+=`
`}return I%2&&R>0?ye.substring(0,ye.length-I-1)+Array(I+1).join("\u2580"):ye.substring(0,ye.length-1)};return S.createASCII=function(R,V){if(R=R||1,R<2)return K(V);R-=1,V=typeof V>"u"?R*2:V;var I=S.getModuleCount()*R+V*2,X=V,Y=I-V,te,ue,ae,be,k=Array(R+1).join("\u2588\u2588"),_e=Array(R+1).join("  "),Se="",ye="";for(te=0;te<I;te+=1){for(ae=Math.floor((te-X)/R),ye="",ue=0;ue<I;ue+=1)be=1,X<=ue&&ue<Y&&X<=te&&te<Y&&S.isDark(ae,Math.floor((ue-X)/R))&&(be=0),ye+=be?k:_e;for(ae=0;ae<R;ae+=1)Se+=ye+`
`}return Se.substring(0,Se.length-1)},S.renderTo2dContext=function(R,V){V=V||2;for(var I=S.getModuleCount(),X=0;X<I;X++)for(var Y=0;Y<I;Y++)R.fillStyle=S.isDark(X,Y)?"black":"white",R.fillRect(X*V,Y*V,V,V)},S};i.stringToBytesFuncs={default:function(C){for(var v=[],m=0;m<C.length;m+=1){var B=C.charCodeAt(m);v.push(B&255)}return v}},i.stringToBytes=i.stringToBytesFuncs.default,i.createStringToBytes=function(C,v){var m=function(){for(var y=_(C),D=function(){var H=y.read();if(H==-1)throw"eof";return H},M=0,p={};;){var g=y.read();if(g==-1)break;var w=D(),S=D(),P=D(),L=String.fromCharCode(g<<8|w),N=S<<8|P;p[L]=N,M+=1}if(M!=v)throw M+" != "+v;return p}(),B=63;return function(y){for(var D=[],M=0;M<y.length;M+=1){var p=y.charCodeAt(M);if(p<128)D.push(p);else{var g=m[y.charAt(M)];typeof g=="number"?(g&255)==g?D.push(g):(D.push(g>>>8),D.push(g&255)):D.push(B)}}return D}};var e={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},t={L:1,M:0,Q:3,H:2},n={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},r=function(){var C=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],v=1335,m=7973,B=21522,y={},D=function(M){for(var p=0;M!=0;)p+=1,M>>>=1;return p};return y.getBCHTypeInfo=function(M){for(var p=M<<10;D(p)-D(v)>=0;)p^=v<<D(p)-D(v);return(M<<10|p)^B},y.getBCHTypeNumber=function(M){for(var p=M<<12;D(p)-D(m)>=0;)p^=m<<D(p)-D(m);return M<<12|p},y.getPatternPosition=function(M){return C[M-1]},y.getMaskFunction=function(M){switch(M){case n.PATTERN000:return function(p,g){return(p+g)%2==0};case n.PATTERN001:return function(p,g){return p%2==0};case n.PATTERN010:return function(p,g){return g%3==0};case n.PATTERN011:return function(p,g){return(p+g)%3==0};case n.PATTERN100:return function(p,g){return(Math.floor(p/2)+Math.floor(g/3))%2==0};case n.PATTERN101:return function(p,g){return p*g%2+p*g%3==0};case n.PATTERN110:return function(p,g){return(p*g%2+p*g%3)%2==0};case n.PATTERN111:return function(p,g){return(p*g%3+(p+g)%2)%2==0};default:throw"bad maskPattern:"+M}},y.getErrorCorrectPolynomial=function(M){for(var p=o([1],0),g=0;g<M;g+=1)p=p.multiply(o([1,s.gexp(g)],0));return p},y.getLengthInBits=function(M,p){if(1<=p&&p<10)switch(M){case e.MODE_NUMBER:return 10;case e.MODE_ALPHA_NUM:return 9;case e.MODE_8BIT_BYTE:return 8;case e.MODE_KANJI:return 8;default:throw"mode:"+M}else if(p<27)switch(M){case e.MODE_NUMBER:return 12;case e.MODE_ALPHA_NUM:return 11;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 10;default:throw"mode:"+M}else if(p<41)switch(M){case e.MODE_NUMBER:return 14;case e.MODE_ALPHA_NUM:return 13;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 12;default:throw"mode:"+M}else throw"type:"+p},y.getLostPoint=function(M){for(var p=M.getModuleCount(),g=0,w=0;w<p;w+=1)for(var S=0;S<p;S+=1){for(var P=0,L=M.isDark(w,S),N=-1;N<=1;N+=1)if(!(w+N<0||p<=w+N))for(var H=-1;H<=1;H+=1)S+H<0||p<=S+H||N==0&&H==0||L==M.isDark(w+N,S+H)&&(P+=1);P>5&&(g+=3+P-5)}for(var w=0;w<p-1;w+=1)for(var S=0;S<p-1;S+=1){var j=0;M.isDark(w,S)&&(j+=1),M.isDark(w+1,S)&&(j+=1),M.isDark(w,S+1)&&(j+=1),M.isDark(w+1,S+1)&&(j+=1),(j==0||j==4)&&(g+=3)}for(var w=0;w<p;w+=1)for(var S=0;S<p-6;S+=1)M.isDark(w,S)&&!M.isDark(w,S+1)&&M.isDark(w,S+2)&&M.isDark(w,S+3)&&M.isDark(w,S+4)&&!M.isDark(w,S+5)&&M.isDark(w,S+6)&&(g+=40);for(var S=0;S<p;S+=1)for(var w=0;w<p-6;w+=1)M.isDark(w,S)&&!M.isDark(w+1,S)&&M.isDark(w+2,S)&&M.isDark(w+3,S)&&M.isDark(w+4,S)&&!M.isDark(w+5,S)&&M.isDark(w+6,S)&&(g+=40);for(var G=0,S=0;S<p;S+=1)for(var w=0;w<p;w+=1)M.isDark(w,S)&&(G+=1);var $=Math.abs(100*G/p/p-50)/5;return g+=$*10,g},y}(),s=function(){for(var C=new Array(256),v=new Array(256),m=0;m<8;m+=1)C[m]=1<<m;for(var m=8;m<256;m+=1)C[m]=C[m-4]^C[m-5]^C[m-6]^C[m-8];for(var m=0;m<255;m+=1)v[C[m]]=m;var B={};return B.glog=function(y){if(y<1)throw"glog("+y+")";return v[y]},B.gexp=function(y){for(;y<0;)y+=255;for(;y>=256;)y-=255;return C[y]},B}();function o(C,v){if(typeof C.length>"u")throw C.length+"/"+v;var m=function(){for(var y=0;y<C.length&&C[y]==0;)y+=1;for(var D=new Array(C.length-y+v),M=0;M<C.length-y;M+=1)D[M]=C[M+y];return D}(),B={};return B.getAt=function(y){return m[y]},B.getLength=function(){return m.length},B.multiply=function(y){for(var D=new Array(B.getLength()+y.getLength()-1),M=0;M<B.getLength();M+=1)for(var p=0;p<y.getLength();p+=1)D[M+p]^=s.gexp(s.glog(B.getAt(M))+s.glog(y.getAt(p)));return o(D,0)},B.mod=function(y){if(B.getLength()-y.getLength()<0)return B;for(var D=s.glog(B.getAt(0))-s.glog(y.getAt(0)),M=new Array(B.getLength()),p=0;p<B.getLength();p+=1)M[p]=B.getAt(p);for(var p=0;p<y.getLength();p+=1)M[p]^=s.gexp(s.glog(y.getAt(p))+D);return o(M,0).mod(y)},B}var a=function(){var C=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],v=function(y,D){var M={};return M.totalCount=y,M.dataCount=D,M},m={},B=function(y,D){switch(D){case t.L:return C[(y-1)*4+0];case t.M:return C[(y-1)*4+1];case t.Q:return C[(y-1)*4+2];case t.H:return C[(y-1)*4+3];default:return}};return m.getRSBlocks=function(y,D){var M=B(y,D);if(typeof M>"u")throw"bad rs block @ typeNumber:"+y+"/errorCorrectionLevel:"+D;for(var p=M.length/3,g=[],w=0;w<p;w+=1)for(var S=M[w*3+0],P=M[w*3+1],L=M[w*3+2],N=0;N<S;N+=1)g.push(v(P,L));return g},m}(),c=function(){var C=[],v=0,m={};return m.getBuffer=function(){return C},m.getAt=function(B){var y=Math.floor(B/8);return(C[y]>>>7-B%8&1)==1},m.put=function(B,y){for(var D=0;D<y;D+=1)m.putBit((B>>>y-D-1&1)==1)},m.getLengthInBits=function(){return v},m.putBit=function(B){var y=Math.floor(v/8);C.length<=y&&C.push(0),B&&(C[y]|=128>>>v%8),v+=1},m},x=function(C){var v=e.MODE_NUMBER,m=C,B={};B.getMode=function(){return v},B.getLength=function(M){return m.length},B.write=function(M){for(var p=m,g=0;g+2<p.length;)M.put(y(p.substring(g,g+3)),10),g+=3;g<p.length&&(p.length-g==1?M.put(y(p.substring(g,g+1)),4):p.length-g==2&&M.put(y(p.substring(g,g+2)),7))};var y=function(M){for(var p=0,g=0;g<M.length;g+=1)p=p*10+D(M.charAt(g));return p},D=function(M){if("0"<=M&&M<="9")return M.charCodeAt(0)-48;throw"illegal char :"+M};return B},l=function(C){var v=e.MODE_ALPHA_NUM,m=C,B={};B.getMode=function(){return v},B.getLength=function(D){return m.length},B.write=function(D){for(var M=m,p=0;p+1<M.length;)D.put(y(M.charAt(p))*45+y(M.charAt(p+1)),11),p+=2;p<M.length&&D.put(y(M.charAt(p)),6)};var y=function(D){if("0"<=D&&D<="9")return D.charCodeAt(0)-48;if("A"<=D&&D<="Z")return D.charCodeAt(0)-65+10;switch(D){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+D}};return B},h=function(C){var v=e.MODE_8BIT_BYTE,m=C,B=i.stringToBytes(C),y={};return y.getMode=function(){return v},y.getLength=function(D){return B.length},y.write=function(D){for(var M=0;M<B.length;M+=1)D.put(B[M],8)},y},u=function(C){var v=e.MODE_KANJI,m=C,B=i.stringToBytesFuncs.SJIS;if(!B)throw"sjis not supported.";(function(M,p){var g=B(M);if(g.length!=2||(g[0]<<8|g[1])!=p)throw"sjis not supported."})("\u53CB",38726);var y=B(C),D={};return D.getMode=function(){return v},D.getLength=function(M){return~~(y.length/2)},D.write=function(M){for(var p=y,g=0;g+1<p.length;){var w=(255&p[g])<<8|255&p[g+1];if(33088<=w&&w<=40956)w-=33088;else if(57408<=w&&w<=60351)w-=49472;else throw"illegal char at "+(g+1)+"/"+w;w=(w>>>8&255)*192+(w&255),M.put(w,13),g+=2}if(g<p.length)throw"illegal char at "+(g+1)},D},f=function(){var C=[],v={};return v.writeByte=function(m){C.push(m&255)},v.writeShort=function(m){v.writeByte(m),v.writeByte(m>>>8)},v.writeBytes=function(m,B,y){B=B||0,y=y||m.length;for(var D=0;D<y;D+=1)v.writeByte(m[D+B])},v.writeString=function(m){for(var B=0;B<m.length;B+=1)v.writeByte(m.charCodeAt(B))},v.toByteArray=function(){return C},v.toString=function(){var m="";m+="[";for(var B=0;B<C.length;B+=1)B>0&&(m+=","),m+=C[B];return m+="]",m},v},A=function(){var C=0,v=0,m=0,B="",y={},D=function(p){B+=String.fromCharCode(M(p&63))},M=function(p){if(!(p<0)){if(p<26)return 65+p;if(p<52)return 97+(p-26);if(p<62)return 48+(p-52);if(p==62)return 43;if(p==63)return 47}throw"n:"+p};return y.writeByte=function(p){for(C=C<<8|p&255,v+=8,m+=1;v>=6;)D(C>>>v-6),v-=6},y.flush=function(){if(v>0&&(D(C<<6-v),C=0,v=0),m%3!=0)for(var p=3-m%3,g=0;g<p;g+=1)B+="="},y.toString=function(){return B},y},_=function(C){var v=C,m=0,B=0,y=0,D={};D.read=function(){for(;y<8;){if(m>=v.length){if(y==0)return-1;throw"unexpected end of file./"+y}var p=v.charAt(m);if(m+=1,p=="=")return y=0,-1;if(p.match(/^\s$/))continue;B=B<<6|M(p.charCodeAt(0)),y+=6}var g=B>>>y-8&255;return y-=8,g};var M=function(p){if(65<=p&&p<=90)return p-65;if(97<=p&&p<=122)return p-97+26;if(48<=p&&p<=57)return p-48+52;if(p==43)return 62;if(p==47)return 63;throw"c:"+p};return D},E=function(C,v){var m=C,B=v,y=new Array(C*v),D={};D.setPixel=function(w,S,P){y[S*m+w]=P},D.write=function(w){w.writeString("GIF87a"),w.writeShort(m),w.writeShort(B),w.writeByte(128),w.writeByte(0),w.writeByte(0),w.writeByte(0),w.writeByte(0),w.writeByte(0),w.writeByte(255),w.writeByte(255),w.writeByte(255),w.writeString(","),w.writeShort(0),w.writeShort(0),w.writeShort(m),w.writeShort(B),w.writeByte(0);var S=2,P=p(S);w.writeByte(S);for(var L=0;P.length-L>255;)w.writeByte(255),w.writeBytes(P,L,255),L+=255;w.writeByte(P.length-L),w.writeBytes(P,L,P.length-L),w.writeByte(0),w.writeString(";")};var M=function(w){var S=w,P=0,L=0,N={};return N.write=function(H,j){if(H>>>j)throw"length over";for(;P+j>=8;)S.writeByte(255&(H<<P|L)),j-=8-P,H>>>=8-P,L=0,P=0;L=H<<P|L,P=P+j},N.flush=function(){P>0&&S.writeByte(L)},N},p=function(w){for(var S=1<<w,P=(1<<w)+1,L=w+1,N=g(),H=0;H<S;H+=1)N.add(String.fromCharCode(H));N.add(String.fromCharCode(S)),N.add(String.fromCharCode(P));var j=f(),G=M(j);G.write(S,L);var $=0,se=String.fromCharCode(y[$]);for($+=1;$<y.length;){var he=String.fromCharCode(y[$]);$+=1,N.contains(se+he)?se=se+he:(G.write(N.indexOf(se),L),N.size()<4095&&(N.size()==1<<L&&(L+=1),N.add(se+he)),se=he)}return G.write(N.indexOf(se),L),G.write(P,L),G.flush(),j.toByteArray()},g=function(){var w={},S=0,P={};return P.add=function(L){if(P.contains(L))throw"dup key:"+L;w[L]=S,S+=1},P.size=function(){return S},P.indexOf=function(L){return w[L]},P.contains=function(L){return typeof w[L]<"u"},P};return D},d=function(C,v,m){for(var B=E(C,v),y=0;y<v;y+=1)for(var D=0;D<C;D+=1)B.setPixel(D,y,m(D,y));var M=f();B.write(M);for(var p=A(),g=M.toByteArray(),w=0;w<g.length;w+=1)p.writeByte(g[w]);return p.flush(),"data:image/gif;base64,"+p};return i}();(function(){Uc.stringToBytesFuncs["UTF-8"]=function(i){function e(t){for(var n=[],r=0;r<t.length;r++){var s=t.charCodeAt(r);s<128?n.push(s):s<2048?n.push(192|s>>6,128|s&63):s<55296||s>=57344?n.push(224|s>>12,128|s>>6&63,128|s&63):(r++,s=65536+((s&1023)<<10|t.charCodeAt(r)&1023),n.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63))}return n}return e(i)}})();(function(i){typeof define=="function"&&define.amd?define([],i):typeof Nc=="object"&&(Oc.exports=i())})(function(){return Uc})});var Vc=H0((Dr,C0)=>{(function(e,t){typeof Dr=="object"&&typeof C0=="object"?C0.exports=t():typeof define=="function"&&define.amd?define([],t):typeof Dr=="object"?Dr.jsQR=t():e.jsQR=t()})(typeof self<"u"?self:Dr,function(){return function(i){var e={};function t(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return i[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=i,t.c=e,t.d=function(n,r,s){t.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:s})},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=3)}([function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function r(s,o){this.width=o,this.height=s.length/o,this.data=s}return r.createEmpty=function(s,o){return new r(new Uint8ClampedArray(s*o),s)},r.prototype.get=function(s,o){return s<0||s>=this.width||o<0||o>=this.height?!1:!!this.data[o*this.width+s]},r.prototype.set=function(s,o,a){this.data[o*this.width+s]=a?1:0},r.prototype.setRegion=function(s,o,a,c,x){for(var l=o;l<o+c;l++)for(var h=s;h<s+a;h++)this.set(h,l,!!x)},r}();e.BitMatrix=n},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(2);function r(o,a){return o^a}e.addOrSubtractGF=r;var s=function(){function o(a,c,x){this.primitive=a,this.size=c,this.generatorBase=x,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var l=1,h=0;h<this.size;h++)this.expTable[h]=l,l=l*2,l>=this.size&&(l=(l^this.primitive)&this.size-1);for(var h=0;h<this.size-1;h++)this.logTable[this.expTable[h]]=h;this.zero=new n.default(this,Uint8ClampedArray.from([0])),this.one=new n.default(this,Uint8ClampedArray.from([1]))}return o.prototype.multiply=function(a,c){return a===0||c===0?0:this.expTable[(this.logTable[a]+this.logTable[c])%(this.size-1)]},o.prototype.inverse=function(a){if(a===0)throw new Error("Can't invert 0");return this.expTable[this.size-this.logTable[a]-1]},o.prototype.buildMonomial=function(a,c){if(a<0)throw new Error("Invalid monomial degree less than 0");if(c===0)return this.zero;var x=new Uint8ClampedArray(a+1);return x[0]=c,new n.default(this,x)},o.prototype.log=function(a){if(a===0)throw new Error("Can't take log(0)");return this.logTable[a]},o.prototype.exp=function(a){return this.expTable[a]},o}();e.default=s},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(1),r=function(){function s(o,a){if(a.length===0)throw new Error("No coefficients.");this.field=o;var c=a.length;if(c>1&&a[0]===0){for(var x=1;x<c&&a[x]===0;)x++;if(x===c)this.coefficients=o.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(c-x);for(var l=0;l<this.coefficients.length;l++)this.coefficients[l]=a[x+l]}}else this.coefficients=a}return s.prototype.degree=function(){return this.coefficients.length-1},s.prototype.isZero=function(){return this.coefficients[0]===0},s.prototype.getCoefficient=function(o){return this.coefficients[this.coefficients.length-1-o]},s.prototype.addOrSubtract=function(o){var a;if(this.isZero())return o;if(o.isZero())return this;var c=this.coefficients,x=o.coefficients;c.length>x.length&&(a=[x,c],c=a[0],x=a[1]);for(var l=new Uint8ClampedArray(x.length),h=x.length-c.length,u=0;u<h;u++)l[u]=x[u];for(var u=h;u<x.length;u++)l[u]=n.addOrSubtractGF(c[u-h],x[u]);return new s(this.field,l)},s.prototype.multiply=function(o){if(o===0)return this.field.zero;if(o===1)return this;for(var a=this.coefficients.length,c=new Uint8ClampedArray(a),x=0;x<a;x++)c[x]=this.field.multiply(this.coefficients[x],o);return new s(this.field,c)},s.prototype.multiplyPoly=function(o){if(this.isZero()||o.isZero())return this.field.zero;for(var a=this.coefficients,c=a.length,x=o.coefficients,l=x.length,h=new Uint8ClampedArray(c+l-1),u=0;u<c;u++)for(var f=a[u],A=0;A<l;A++)h[u+A]=n.addOrSubtractGF(h[u+A],this.field.multiply(f,x[A]));return new s(this.field,h)},s.prototype.multiplyByMonomial=function(o,a){if(o<0)throw new Error("Invalid degree less than 0");if(a===0)return this.field.zero;for(var c=this.coefficients.length,x=new Uint8ClampedArray(c+o),l=0;l<c;l++)x[l]=this.field.multiply(this.coefficients[l],a);return new s(this.field,x)},s.prototype.evaluateAt=function(o){var a=0;if(o===0)return this.getCoefficient(0);var c=this.coefficients.length;if(o===1)return this.coefficients.forEach(function(l){a=n.addOrSubtractGF(a,l)}),a;a=this.coefficients[0];for(var x=1;x<c;x++)a=n.addOrSubtractGF(this.field.multiply(o,a),this.coefficients[x]);return a},s}();e.default=r},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(4),r=t(5),s=t(11),o=t(12);function a(l){var h=o.locate(l);if(!h)return null;for(var u=0,f=h;u<f.length;u++){var A=f[u],_=s.extract(l,A),E=r.decode(_.matrix);if(E)return{binaryData:E.bytes,data:E.text,chunks:E.chunks,version:E.version,location:{topRightCorner:_.mappingFunction(A.dimension,0),topLeftCorner:_.mappingFunction(0,0),bottomRightCorner:_.mappingFunction(A.dimension,A.dimension),bottomLeftCorner:_.mappingFunction(0,A.dimension),topRightFinderPattern:A.topRight,topLeftFinderPattern:A.topLeft,bottomLeftFinderPattern:A.bottomLeft,bottomRightAlignmentPattern:A.alignmentPattern}}}return null}var c={inversionAttempts:"attemptBoth"};function x(l,h,u,f){f===void 0&&(f={});var A=c;Object.keys(A||{}).forEach(function(B){A[B]=f[B]||A[B]});var _=A.inversionAttempts==="attemptBoth"||A.inversionAttempts==="invertFirst",E=A.inversionAttempts==="onlyInvert"||A.inversionAttempts==="invertFirst",d=n.binarize(l,h,u,_),C=d.binarized,v=d.inverted,m=a(E?v:C);return!m&&(A.inversionAttempts==="attemptBoth"||A.inversionAttempts==="invertFirst")&&(m=a(E?C:v)),m}x.default=x,e.default=x},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(0),r=8,s=24;function o(x,l,h){return x<l?l:x>h?h:x}var a=function(){function x(l,h){this.width=l,this.data=new Uint8ClampedArray(l*h)}return x.prototype.get=function(l,h){return this.data[h*this.width+l]},x.prototype.set=function(l,h,u){this.data[h*this.width+l]=u},x}();function c(x,l,h,u){if(x.length!==l*h*4)throw new Error("Malformed data passed to binarizer.");for(var f=new a(l,h),A=0;A<l;A++)for(var _=0;_<h;_++){var E=x[(_*l+A)*4+0],d=x[(_*l+A)*4+1],C=x[(_*l+A)*4+2];f.set(A,_,.2126*E+.7152*d+.0722*C)}for(var v=Math.ceil(l/r),m=Math.ceil(h/r),B=new a(v,m),y=0;y<m;y++)for(var D=0;D<v;D++){for(var M=0,p=1/0,g=0,_=0;_<r;_++)for(var A=0;A<r;A++){var w=f.get(D*r+A,y*r+_);M+=w,p=Math.min(p,w),g=Math.max(g,w)}var S=M/Math.pow(r,2);if(g-p<=s&&(S=p/2,y>0&&D>0)){var P=(B.get(D,y-1)+2*B.get(D-1,y)+B.get(D-1,y-1))/4;p<P&&(S=P)}B.set(D,y,S)}var L=n.BitMatrix.createEmpty(l,h),N=null;u&&(N=n.BitMatrix.createEmpty(l,h));for(var y=0;y<m;y++)for(var D=0;D<v;D++){for(var H=o(D,2,v-3),j=o(y,2,m-3),M=0,G=-2;G<=2;G++)for(var $=-2;$<=2;$++)M+=B.get(H+G,j+$);for(var se=M/25,G=0;G<r;G++)for(var $=0;$<r;$++){var A=D*r+G,_=y*r+$,he=f.get(A,_);L.set(A,_,he<=se),u&&N.set(A,_,!(he<=se))}}return u?{binarized:L,inverted:N}:{binarized:L}}e.binarize=c},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(0),r=t(6),s=t(9),o=t(10);function a(C,v){for(var m=C^v,B=0;m;)B++,m&=m-1;return B}function c(C,v){return v<<1|C}var x=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],l=[function(C){return(C.y+C.x)%2===0},function(C){return C.y%2===0},function(C){return C.x%3===0},function(C){return(C.y+C.x)%3===0},function(C){return(Math.floor(C.y/2)+Math.floor(C.x/3))%2===0},function(C){return C.x*C.y%2+C.x*C.y%3===0},function(C){return(C.y*C.x%2+C.y*C.x%3)%2===0},function(C){return((C.y+C.x)%2+C.y*C.x%3)%2===0}];function h(C){var v=17+4*C.versionNumber,m=n.BitMatrix.createEmpty(v,v);m.setRegion(0,0,9,9,!0),m.setRegion(v-8,0,8,9,!0),m.setRegion(0,v-8,9,8,!0);for(var B=0,y=C.alignmentPatternCenters;B<y.length;B++)for(var D=y[B],M=0,p=C.alignmentPatternCenters;M<p.length;M++){var g=p[M];D===6&&g===6||D===6&&g===v-7||D===v-7&&g===6||m.setRegion(D-2,g-2,5,5,!0)}return m.setRegion(6,9,1,v-17,!0),m.setRegion(9,6,v-17,1,!0),C.versionNumber>6&&(m.setRegion(v-11,0,3,6,!0),m.setRegion(0,v-11,6,3,!0)),m}function u(C,v,m){for(var B=l[m.dataMask],y=C.height,D=h(v),M=[],p=0,g=0,w=!0,S=y-1;S>0;S-=2){S===6&&S--;for(var P=0;P<y;P++)for(var L=w?y-1-P:P,N=0;N<2;N++){var H=S-N;if(!D.get(H,L)){g++;var j=C.get(H,L);B({y:L,x:H})&&(j=!j),p=c(j,p),g===8&&(M.push(p),g=0,p=0)}}w=!w}return M}function f(C){var v=C.height,m=Math.floor((v-17)/4);if(m<=6)return o.VERSIONS[m-1];for(var B=0,y=5;y>=0;y--)for(var D=v-9;D>=v-11;D--)B=c(C.get(D,y),B);for(var M=0,D=5;D>=0;D--)for(var y=v-9;y>=v-11;y--)M=c(C.get(D,y),M);for(var p=1/0,g,w=0,S=o.VERSIONS;w<S.length;w++){var P=S[w];if(P.infoBits===B||P.infoBits===M)return P;var L=a(B,P.infoBits);L<p&&(g=P,p=L),L=a(M,P.infoBits),L<p&&(g=P,p=L)}if(p<=3)return g}function A(C){for(var v=0,m=0;m<=8;m++)m!==6&&(v=c(C.get(m,8),v));for(var B=7;B>=0;B--)B!==6&&(v=c(C.get(8,B),v));for(var y=C.height,D=0,B=y-1;B>=y-7;B--)D=c(C.get(8,B),D);for(var m=y-8;m<y;m++)D=c(C.get(m,8),D);for(var M=1/0,p=null,g=0,w=x;g<w.length;g++){var S=w[g],P=S.bits,L=S.formatInfo;if(P===v||P===D)return L;var N=a(v,P);N<M&&(p=L,M=N),v!==D&&(N=a(D,P),N<M&&(p=L,M=N))}return M<=3?p:null}function _(C,v,m){var B=v.errorCorrectionLevels[m],y=[],D=0;if(B.ecBlocks.forEach(function(j){for(var G=0;G<j.numBlocks;G++)y.push({numDataCodewords:j.dataCodewordsPerBlock,codewords:[]}),D+=j.dataCodewordsPerBlock+B.ecCodewordsPerBlock}),C.length<D)return null;C=C.slice(0,D);for(var M=B.ecBlocks[0].dataCodewordsPerBlock,p=0;p<M;p++)for(var g=0,w=y;g<w.length;g++){var S=w[g];S.codewords.push(C.shift())}if(B.ecBlocks.length>1)for(var P=B.ecBlocks[0].numBlocks,L=B.ecBlocks[1].numBlocks,p=0;p<L;p++)y[P+p].codewords.push(C.shift());for(;C.length>0;)for(var N=0,H=y;N<H.length;N++){var S=H[N];S.codewords.push(C.shift())}return y}function E(C){var v=f(C);if(!v)return null;var m=A(C);if(!m)return null;var B=u(C,v,m),y=_(B,v,m.errorCorrectionLevel);if(!y)return null;for(var D=y.reduce(function(N,H){return N+H.numDataCodewords},0),M=new Uint8ClampedArray(D),p=0,g=0,w=y;g<w.length;g++){var S=w[g],P=s.decode(S.codewords,S.codewords.length-S.numDataCodewords);if(!P)return null;for(var L=0;L<S.numDataCodewords;L++)M[p++]=P[L]}try{return r.decode(M,v.versionNumber)}catch{return null}}function d(C){if(C==null)return null;var v=E(C);if(v)return v;for(var m=0;m<C.width;m++)for(var B=m+1;B<C.height;B++)C.get(m,B)!==C.get(B,m)&&(C.set(m,B,!C.get(m,B)),C.set(B,m,!C.get(B,m)));return E(C)}e.decode=d},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(7),r=t(8),s;(function(f){f.Numeric="numeric",f.Alphanumeric="alphanumeric",f.Byte="byte",f.Kanji="kanji",f.ECI="eci"})(s=e.Mode||(e.Mode={}));var o;(function(f){f[f.Terminator=0]="Terminator",f[f.Numeric=1]="Numeric",f[f.Alphanumeric=2]="Alphanumeric",f[f.Byte=4]="Byte",f[f.Kanji=8]="Kanji",f[f.ECI=7]="ECI"})(o||(o={}));function a(f,A){for(var _=[],E="",d=[10,12,14][A],C=f.readBits(d);C>=3;){var v=f.readBits(10);if(v>=1e3)throw new Error("Invalid numeric value above 999");var m=Math.floor(v/100),B=Math.floor(v/10)%10,y=v%10;_.push(48+m,48+B,48+y),E+=m.toString()+B.toString()+y.toString(),C-=3}if(C===2){var v=f.readBits(7);if(v>=100)throw new Error("Invalid numeric value above 99");var m=Math.floor(v/10),B=v%10;_.push(48+m,48+B),E+=m.toString()+B.toString()}else if(C===1){var v=f.readBits(4);if(v>=10)throw new Error("Invalid numeric value above 9");_.push(48+v),E+=v.toString()}return{bytes:_,text:E}}var c=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function x(f,A){for(var _=[],E="",d=[9,11,13][A],C=f.readBits(d);C>=2;){var v=f.readBits(11),m=Math.floor(v/45),B=v%45;_.push(c[m].charCodeAt(0),c[B].charCodeAt(0)),E+=c[m]+c[B],C-=2}if(C===1){var m=f.readBits(6);_.push(c[m].charCodeAt(0)),E+=c[m]}return{bytes:_,text:E}}function l(f,A){for(var _=[],E="",d=[8,16,16][A],C=f.readBits(d),v=0;v<C;v++){var m=f.readBits(8);_.push(m)}try{E+=decodeURIComponent(_.map(function(B){return"%"+("0"+B.toString(16)).substr(-2)}).join(""))}catch{}return{bytes:_,text:E}}function h(f,A){for(var _=[],E="",d=[8,10,12][A],C=f.readBits(d),v=0;v<C;v++){var m=f.readBits(13),B=Math.floor(m/192)<<8|m%192;B<7936?B+=33088:B+=49472,_.push(B>>8,B&255),E+=String.fromCharCode(r.shiftJISTable[B])}return{bytes:_,text:E}}function u(f,A){for(var _,E,d,C,v=new n.BitStream(f),m=A<=9?0:A<=26?1:2,B={text:"",bytes:[],chunks:[],version:A};v.available()>=4;){var y=v.readBits(4);if(y===o.Terminator)return B;if(y===o.ECI)v.readBits(1)===0?B.chunks.push({type:s.ECI,assignmentNumber:v.readBits(7)}):v.readBits(1)===0?B.chunks.push({type:s.ECI,assignmentNumber:v.readBits(14)}):v.readBits(1)===0?B.chunks.push({type:s.ECI,assignmentNumber:v.readBits(21)}):B.chunks.push({type:s.ECI,assignmentNumber:-1});else if(y===o.Numeric){var D=a(v,m);B.text+=D.text,(_=B.bytes).push.apply(_,D.bytes),B.chunks.push({type:s.Numeric,text:D.text})}else if(y===o.Alphanumeric){var M=x(v,m);B.text+=M.text,(E=B.bytes).push.apply(E,M.bytes),B.chunks.push({type:s.Alphanumeric,text:M.text})}else if(y===o.Byte){var p=l(v,m);B.text+=p.text,(d=B.bytes).push.apply(d,p.bytes),B.chunks.push({type:s.Byte,bytes:p.bytes,text:p.text})}else if(y===o.Kanji){var g=h(v,m);B.text+=g.text,(C=B.bytes).push.apply(C,g.bytes),B.chunks.push({type:s.Kanji,bytes:g.bytes,text:g.text})}}if(v.available()===0||v.readBits(v.available())===0)return B}e.decode=u},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function r(s){this.byteOffset=0,this.bitOffset=0,this.bytes=s}return r.prototype.readBits=function(s){if(s<1||s>32||s>this.available())throw new Error("Cannot read "+s.toString()+" bits");var o=0;if(this.bitOffset>0){var a=8-this.bitOffset,c=s<a?s:a,x=a-c,l=255>>8-c<<x;o=(this.bytes[this.byteOffset]&l)>>x,s-=c,this.bitOffset+=c,this.bitOffset===8&&(this.bitOffset=0,this.byteOffset++)}if(s>0){for(;s>=8;)o=o<<8|this.bytes[this.byteOffset]&255,this.byteOffset++,s-=8;if(s>0){var x=8-s,l=255>>x<<x;o=o<<s|(this.bytes[this.byteOffset]&l)>>x,this.bitOffset+=s}}return o},r.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},r}();e.BitStream=n},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(1),r=t(2);function s(x,l,h,u){var f;l.degree()<h.degree()&&(f=[h,l],l=f[0],h=f[1]);for(var A=l,_=h,E=x.zero,d=x.one;_.degree()>=u/2;){var C=A,v=E;if(A=_,E=d,A.isZero())return null;_=C;for(var m=x.zero,B=A.getCoefficient(A.degree()),y=x.inverse(B);_.degree()>=A.degree()&&!_.isZero();){var D=_.degree()-A.degree(),M=x.multiply(_.getCoefficient(_.degree()),y);m=m.addOrSubtract(x.buildMonomial(D,M)),_=_.addOrSubtract(A.multiplyByMonomial(D,M))}if(d=m.multiplyPoly(E).addOrSubtract(v),_.degree()>=A.degree())return null}var p=d.getCoefficient(0);if(p===0)return null;var g=x.inverse(p);return[d.multiply(g),_.multiply(g)]}function o(x,l){var h=l.degree();if(h===1)return[l.getCoefficient(1)];for(var u=new Array(h),f=0,A=1;A<x.size&&f<h;A++)l.evaluateAt(A)===0&&(u[f]=x.inverse(A),f++);return f!==h?null:u}function a(x,l,h){for(var u=h.length,f=new Array(u),A=0;A<u;A++){for(var _=x.inverse(h[A]),E=1,d=0;d<u;d++)A!==d&&(E=x.multiply(E,n.addOrSubtractGF(1,x.multiply(h[d],_))));f[A]=x.multiply(l.evaluateAt(_),x.inverse(E)),x.generatorBase!==0&&(f[A]=x.multiply(f[A],_))}return f}function c(x,l){var h=new Uint8ClampedArray(x.length);h.set(x);for(var u=new n.default(285,256,0),f=new r.default(u,h),A=new Uint8ClampedArray(l),_=!1,E=0;E<l;E++){var d=f.evaluateAt(u.exp(E+u.generatorBase));A[A.length-1-E]=d,d!==0&&(_=!0)}if(!_)return h;var C=new r.default(u,A),v=s(u,u.buildMonomial(l,1),C,l);if(v===null)return null;var m=o(u,v[0]);if(m==null)return null;for(var B=a(u,v[1],m),y=0;y<m.length;y++){var D=h.length-1-u.log(m[y]);if(D<0)return null;h[D]=n.addOrSubtractGF(h[D],B[y])}return h}e.decode=c},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(0);function r(c,x,l,h){var u=c.x-x.x+l.x-h.x,f=c.y-x.y+l.y-h.y;if(u===0&&f===0)return{a11:x.x-c.x,a12:x.y-c.y,a13:0,a21:l.x-x.x,a22:l.y-x.y,a23:0,a31:c.x,a32:c.y,a33:1};var A=x.x-l.x,_=h.x-l.x,E=x.y-l.y,d=h.y-l.y,C=A*d-_*E,v=(u*d-_*f)/C,m=(A*f-u*E)/C;return{a11:x.x-c.x+v*x.x,a12:x.y-c.y+v*x.y,a13:v,a21:h.x-c.x+m*h.x,a22:h.y-c.y+m*h.y,a23:m,a31:c.x,a32:c.y,a33:1}}function s(c,x,l,h){var u=r(c,x,l,h);return{a11:u.a22*u.a33-u.a23*u.a32,a12:u.a13*u.a32-u.a12*u.a33,a13:u.a12*u.a23-u.a13*u.a22,a21:u.a23*u.a31-u.a21*u.a33,a22:u.a11*u.a33-u.a13*u.a31,a23:u.a13*u.a21-u.a11*u.a23,a31:u.a21*u.a32-u.a22*u.a31,a32:u.a12*u.a31-u.a11*u.a32,a33:u.a11*u.a22-u.a12*u.a21}}function o(c,x){return{a11:c.a11*x.a11+c.a21*x.a12+c.a31*x.a13,a12:c.a12*x.a11+c.a22*x.a12+c.a32*x.a13,a13:c.a13*x.a11+c.a23*x.a12+c.a33*x.a13,a21:c.a11*x.a21+c.a21*x.a22+c.a31*x.a23,a22:c.a12*x.a21+c.a22*x.a22+c.a32*x.a23,a23:c.a13*x.a21+c.a23*x.a22+c.a33*x.a23,a31:c.a11*x.a31+c.a21*x.a32+c.a31*x.a33,a32:c.a12*x.a31+c.a22*x.a32+c.a32*x.a33,a33:c.a13*x.a31+c.a23*x.a32+c.a33*x.a33}}function a(c,x){for(var l=s({x:3.5,y:3.5},{x:x.dimension-3.5,y:3.5},{x:x.dimension-6.5,y:x.dimension-6.5},{x:3.5,y:x.dimension-3.5}),h=r(x.topLeft,x.topRight,x.alignmentPattern,x.bottomLeft),u=o(h,l),f=n.BitMatrix.createEmpty(x.dimension,x.dimension),A=function(m,B){var y=u.a13*m+u.a23*B+u.a33;return{x:(u.a11*m+u.a21*B+u.a31)/y,y:(u.a12*m+u.a22*B+u.a32)/y}},_=0;_<x.dimension;_++)for(var E=0;E<x.dimension;E++){var d=E+.5,C=_+.5,v=A(d,C);f.set(E,_,c.get(Math.floor(v.x),Math.floor(v.y)))}return{matrix:f,mappingFunction:A}}e.extract=a},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=4,r=.5,s=1.5,o=function(d,C){return Math.sqrt(Math.pow(C.x-d.x,2)+Math.pow(C.y-d.y,2))};function a(d){return d.reduce(function(C,v){return C+v})}function c(d,C,v){var m,B,y,D,M=o(d,C),p=o(C,v),g=o(d,v),w,S,P;return p>=M&&p>=g?(m=[C,d,v],w=m[0],S=m[1],P=m[2]):g>=p&&g>=M?(B=[d,C,v],w=B[0],S=B[1],P=B[2]):(y=[d,v,C],w=y[0],S=y[1],P=y[2]),(P.x-S.x)*(w.y-S.y)-(P.y-S.y)*(w.x-S.x)<0&&(D=[P,w],w=D[0],P=D[1]),{bottomLeft:w,topLeft:S,topRight:P}}function x(d,C,v,m){var B=(a(h(d,v,m,5))/7+a(h(d,C,m,5))/7+a(h(v,d,m,5))/7+a(h(C,d,m,5))/7)/4;if(B<1)throw new Error("Invalid module size");var y=Math.round(o(d,C)/B),D=Math.round(o(d,v)/B),M=Math.floor((y+D)/2)+7;switch(M%4){case 0:M++;break;case 2:M--;break}return{dimension:M,moduleSize:B}}function l(d,C,v,m){var B=[{x:Math.floor(d.x),y:Math.floor(d.y)}],y=Math.abs(C.y-d.y)>Math.abs(C.x-d.x),D,M,p,g;y?(D=Math.floor(d.y),M=Math.floor(d.x),p=Math.floor(C.y),g=Math.floor(C.x)):(D=Math.floor(d.x),M=Math.floor(d.y),p=Math.floor(C.x),g=Math.floor(C.y));for(var w=Math.abs(p-D),S=Math.abs(g-M),P=Math.floor(-w/2),L=D<p?1:-1,N=M<g?1:-1,H=!0,j=D,G=M;j!==p+L;j+=L){var $=y?G:j,se=y?j:G;if(v.get($,se)!==H&&(H=!H,B.push({x:$,y:se}),B.length===m+1))break;if(P+=S,P>0){if(G===g)break;G+=N,P-=w}}for(var he=[],le=0;le<m;le++)B[le]&&B[le+1]?he.push(o(B[le],B[le+1])):he.push(0);return he}function h(d,C,v,m){var B,y=C.y-d.y,D=C.x-d.x,M=l(d,C,v,Math.ceil(m/2)),p=l(d,{x:d.x-D,y:d.y-y},v,Math.ceil(m/2)),g=M.shift()+p.shift()-1;return(B=p.concat(g)).concat.apply(B,M)}function u(d,C){var v=a(d)/a(C),m=0;return C.forEach(function(B,y){m+=Math.pow(d[y]-B*v,2)}),{averageSize:v,error:m}}function f(d,C,v){try{var m=h(d,{x:-1,y:d.y},v,C.length),B=h(d,{x:d.x,y:-1},v,C.length),y={x:Math.max(0,d.x-d.y)-1,y:Math.max(0,d.y-d.x)-1},D=h(d,y,v,C.length),M={x:Math.min(v.width,d.x+d.y)+1,y:Math.min(v.height,d.y+d.x)+1},p=h(d,M,v,C.length),g=u(m,C),w=u(B,C),S=u(D,C),P=u(p,C),L=Math.sqrt(g.error*g.error+w.error*w.error+S.error*S.error+P.error*P.error),N=(g.averageSize+w.averageSize+S.averageSize+P.averageSize)/4,H=(Math.pow(g.averageSize-N,2)+Math.pow(w.averageSize-N,2)+Math.pow(S.averageSize-N,2)+Math.pow(P.averageSize-N,2))/N;return L+H}catch{return 1/0}}function A(d,C){for(var v=Math.round(C.x);d.get(v,Math.round(C.y));)v--;for(var m=Math.round(C.x);d.get(m,Math.round(C.y));)m++;for(var B=(v+m)/2,y=Math.round(C.y);d.get(Math.round(B),y);)y--;for(var D=Math.round(C.y);d.get(Math.round(B),D);)D++;var M=(y+D)/2;return{x:B,y:M}}function _(d){for(var C=[],v=[],m=[],B=[],y=function($){for(var se=0,he=!1,le=[0,0,0,0,0],ze=function(R){var V=d.get(R,$);if(V===he)se++;else{le=[le[1],le[2],le[3],le[4],se],se=1,he=V;var I=a(le)/7,X=Math.abs(le[0]-I)<I&&Math.abs(le[1]-I)<I&&Math.abs(le[2]-3*I)<3*I&&Math.abs(le[3]-I)<I&&Math.abs(le[4]-I)<I&&!V,Y=a(le.slice(-3))/3,te=Math.abs(le[2]-Y)<Y&&Math.abs(le[3]-Y)<Y&&Math.abs(le[4]-Y)<Y&&V;if(X){var ue=R-le[3]-le[4],ae=ue-le[2],be={startX:ae,endX:ue,y:$},k=v.filter(function(ye){return ae>=ye.bottom.startX&&ae<=ye.bottom.endX||ue>=ye.bottom.startX&&ae<=ye.bottom.endX||ae<=ye.bottom.startX&&ue>=ye.bottom.endX&&le[2]/(ye.bottom.endX-ye.bottom.startX)<s&&le[2]/(ye.bottom.endX-ye.bottom.startX)>r});k.length>0?k[0].bottom=be:v.push({top:be,bottom:be})}if(te){var _e=R-le[4],Se=_e-le[3],be={startX:Se,y:$,endX:_e},k=B.filter(function(Ge){return Se>=Ge.bottom.startX&&Se<=Ge.bottom.endX||_e>=Ge.bottom.startX&&Se<=Ge.bottom.endX||Se<=Ge.bottom.startX&&_e>=Ge.bottom.endX&&le[2]/(Ge.bottom.endX-Ge.bottom.startX)<s&&le[2]/(Ge.bottom.endX-Ge.bottom.startX)>r});k.length>0?k[0].bottom=be:B.push({top:be,bottom:be})}}},K=-1;K<=d.width;K++)ze(K);C.push.apply(C,v.filter(function(R){return R.bottom.y!==$&&R.bottom.y-R.top.y>=2})),v=v.filter(function(R){return R.bottom.y===$}),m.push.apply(m,B.filter(function(R){return R.bottom.y!==$})),B=B.filter(function(R){return R.bottom.y===$})},D=0;D<=d.height;D++)y(D);C.push.apply(C,v.filter(function($){return $.bottom.y-$.top.y>=2})),m.push.apply(m,B);var M=C.filter(function($){return $.bottom.y-$.top.y>=2}).map(function($){var se=($.top.startX+$.top.endX+$.bottom.startX+$.bottom.endX)/4,he=($.top.y+$.bottom.y+1)/2;if(d.get(Math.round(se),Math.round(he))){var le=[$.top.endX-$.top.startX,$.bottom.endX-$.bottom.startX,$.bottom.y-$.top.y+1],ze=a(le)/le.length,K=f({x:Math.round(se),y:Math.round(he)},[1,1,3,1,1],d);return{score:K,x:se,y:he,size:ze}}}).filter(function($){return!!$}).sort(function($,se){return $.score-se.score}).map(function($,se,he){if(se>n)return null;var le=he.filter(function(K,R){return se!==R}).map(function(K){return{x:K.x,y:K.y,score:K.score+Math.pow(K.size-$.size,2)/$.size,size:K.size}}).sort(function(K,R){return K.score-R.score});if(le.length<2)return null;var ze=$.score+le[0].score+le[1].score;return{points:[$].concat(le.slice(0,2)),score:ze}}).filter(function($){return!!$}).sort(function($,se){return $.score-se.score});if(M.length===0)return null;var p=c(M[0].points[0],M[0].points[1],M[0].points[2]),g=p.topRight,w=p.topLeft,S=p.bottomLeft,P=E(d,m,g,w,S),L=[];P&&L.push({alignmentPattern:{x:P.alignmentPattern.x,y:P.alignmentPattern.y},bottomLeft:{x:S.x,y:S.y},dimension:P.dimension,topLeft:{x:w.x,y:w.y},topRight:{x:g.x,y:g.y}});var N=A(d,g),H=A(d,w),j=A(d,S),G=E(d,m,N,H,j);return G&&L.push({alignmentPattern:{x:G.alignmentPattern.x,y:G.alignmentPattern.y},bottomLeft:{x:j.x,y:j.y},topLeft:{x:H.x,y:H.y},topRight:{x:N.x,y:N.y},dimension:G.dimension}),L.length===0?null:L}e.locate=_;function E(d,C,v,m,B){var y,D,M;try{y=x(m,v,B,d),D=y.dimension,M=y.moduleSize}catch{return null}var p={x:v.x-m.x+B.x,y:v.y-m.y+B.y},g=(o(m,B)+o(m,v))/2/M,w=1-3/g,S={x:m.x+w*(p.x-m.x),y:m.y+w*(p.y-m.y)},P=C.map(function(N){var H=(N.top.startX+N.top.endX+N.bottom.startX+N.bottom.endX)/4,j=(N.top.y+N.bottom.y+1)/2;if(d.get(Math.floor(H),Math.floor(j))){var G=[N.top.endX-N.top.startX,N.bottom.endX-N.bottom.startX,N.bottom.y-N.top.y+1],$=a(G)/G.length,se=f({x:Math.floor(H),y:Math.floor(j)},[1,1,1],d),he=se+o({x:H,y:j},S);return{x:H,y:j,score:he}}}).filter(function(N){return!!N}).sort(function(N,H){return N.score-H.score}),L=g>=15&&P.length?P[0]:S;return{alignmentPattern:L,dimension:D}}}]).default})});var xt=.016666666666666666,Lt=30,wt=.4,Rr=1.8,In=1.6,ll=20,hl=38,W0=9,X0=25,Y0=7,q0=100,or=100,St=[{name:"Pistol",dmg:18,rate:.28,mag:12,reload:1.1,spread:.01,pellets:1,range:90,auto:!1},{name:"SMG",dmg:9,rate:.085,mag:30,reload:1.6,spread:.035,pellets:1,range:60,auto:!0},{name:"Shotgun",dmg:9,rate:.85,mag:6,reload:2,spread:.09,pellets:8,range:26,auto:!1},{name:"Sniper",dmg:75,rate:1.2,mag:4,reload:2.3,spread:.002,pellets:1,range:160,auto:!1}];function kt(i,e,t,n,r,s,o="cover"){return{x:i,y:e,z:t,w:n,h:r,d:s,kind:o,minx:i-n/2,maxx:i+n/2,miny:e,maxy:e+r,minz:t-s/2,maxz:t+s/2}}var bt=[];bt.push(kt(0,0,-Lt-1,Lt*2+4,14,2,"wall"));bt.push(kt(0,0,Lt+1,Lt*2+4,14,2,"wall"));bt.push(kt(-Lt-1,0,0,2,14,Lt*2+4,"wall"));bt.push(kt(Lt+1,0,0,2,14,Lt*2+4,"wall"));bt.push(kt(0,4,0,11,.8,11,"deck"));for(let i of[-1,1])for(let e of[-1,1])bt.push(kt(i*4.5,0,e*4.5,1.6,4,1.6,"pillar"));bt.push(kt(0,4.8,0,3,1.1,1,"cover"));for(let i of[-1,1])for(let e of[-1,1])bt.push(kt(i*21,3,e*21,8,.8,8,"deck")),bt.push(kt(i*21,0,e*21,1.4,3,1.4,"pillar")),bt.push(kt(i*21,3.8,e*23,4,1.1,.8,"cover"));bt.push(kt(0,8.5,-19,22,.6,3.5,"deck"));bt.push(kt(0,8.5,19,22,.6,3.5,"deck"));var ul=[[-12,0,0,3,2,1],[12,0,0,3,2,1],[0,0,-12,1,2,3],[0,0,12,1,2,3],[-10,0,-9,2,1.2,2],[10,0,9,2,1.2,2],[-10,0,9,2,1.2,2],[10,0,-9,2,1.2,2],[-24,0,0,1.2,3,6],[24,0,0,1.2,3,6],[0,0,-26,6,3,1.2],[0,0,26,6,3,1.2],[-16,0,-14,4,1.5,1],[16,0,14,4,1.5,1],[-16,0,14,1,1.5,4],[16,0,-14,1,1.5,4]];for(let i of ul)bt.push(kt(...i));var Zt={boxes:bt,spawns:[[-26,0,-26],[26,0,-26],[-26,0,26],[26,0,26],[0,0,-22],[0,0,22],[-20,0,0],[20,0,0],[-21,3.8,-21],[21,3.8,21],[-21,3.8,21],[21,3.8,-21],[0,4.8,3.5],[0,9.1,-19],[0,9.1,19]]};function ar(i=0,e=0,t=0){return{x:i,y:e,z:t,vx:0,vy:0,vz:0,fuel:q0,ground:!1,thrusting:!1}}function so(i,e,t,n){return e-wt<i.maxx&&e+wt>i.minx&&t<i.maxy&&t+Rr>i.miny&&n-wt<i.maxz&&n+wt>i.minz}function Ir(i,e,t=xt){let n=Math.sin(e.yaw),r=Math.cos(e.yaw),s=-n*e.mz+r*e.mx,o=-r*e.mz-n*e.mx,a=Math.hypot(s,o);a>1&&(s/=a,o/=a);let c=(i.ground?60:22)*t;i.vx+=Math.max(-c,Math.min(c,s*Y0-i.vx)),i.vz+=Math.max(-c,Math.min(c,o*Y0-i.vz)),i.thrusting=!!e.jet&&i.fuel>0,i.vy-=ll*t,i.thrusting?(i.vy+=hl*t,i.ground&&i.vy<4&&(i.vy=4),i.fuel=Math.max(0,i.fuel-32*t)):i.fuel=Math.min(q0,i.fuel+(i.ground?45:7)*t),i.vy>W0&&(i.vy=W0),i.vy<-X0&&(i.vy=-X0),i.ground=!1;let x=Zt.boxes;i.x+=i.vx*t;for(let h of x)so(h,i.x,i.y,i.z)&&(i.x=i.vx>0?h.minx-wt-.001:h.maxx+wt+.001,i.vx=0);i.y+=i.vy*t;for(let h of x)so(h,i.x,i.y,i.z)&&(i.vy<=0?(i.y=h.maxy,i.ground=!0):i.y=h.miny-Rr-.001,i.vy=0);i.z+=i.vz*t;for(let h of x)so(h,i.x,i.y,i.z)&&(i.z=i.vz>0?h.minz-wt-.001:h.maxz+wt+.001,i.vz=0);i.y<=0&&(i.y=0,i.vy<0&&(i.vy=0),i.ground=!0),i.y>15&&(i.y=15,i.vy>0&&(i.vy=0));let l=Lt-wt;i.x>l?(i.x=l,i.vx=0):i.x<-l&&(i.x=-l,i.vx=0),i.z>l?(i.z=l,i.vz=0):i.z<-l&&(i.z=-l,i.vz=0)}function oo(i,e,t,n,r,s,o,a,c,x,l,h,u){let f=0,A=u,_=[i,e,t],E=[n,r,s],d=[o,a,c],C=[x,l,h];for(let v=0;v<3;v++)if(Math.abs(E[v])<1e-9){if(_[v]<d[v]||_[v]>C[v])return-1}else{let m=(d[v]-_[v])/E[v],B=(C[v]-_[v])/E[v];if(m>B){let y=m;m=B,B=y}if(m>f&&(f=m),B<A&&(A=B),f>A)return-1}return f}function vi(i,e,t,n,r,s,o){let a=o;for(let c of Zt.boxes){let x=oo(i,e,t,n,r,s,c.minx,c.miny,c.minz,c.maxx,c.maxy,c.maxz,a);x>=0&&x<a&&(a=x)}if(r<-1e-9){let c=-e/r;c>=0&&c<a&&(a=c)}return a}function kr(i,e){let t=Math.cos(e);return[-Math.sin(i)*t,Math.sin(e),-Math.cos(i)*t]}var a0="170";var dl=0,Z0=1,fl=2;var tc=1,pl=2,gn=3,Yn=0,Pt=1,vn=2,Gn=0,zi=1,J0=2,$0=3,K0=4,ml=5,ai=100,El=101,gl=102,Al=103,vl=104,Cl=200,_l=201,yl=202,Bl=203,Vo=204,Ho=205,Ml=206,Dl=207,Fl=208,wl=209,bl=210,Sl=211,Tl=212,Pl=213,Rl=214,Go=0,Wo=1,Xo=2,Wi=3,Yo=4,qo=5,Zo=6,Jo=7,x0=0,Il=1,kl=2,Wn=0,Ll=1,Ul=2,Nl=3,Ol=4,zl=5,Vl=6,Hl=7;var nc=300,Xi=301,Yi=302,$o=303,Ko=304,Hs=306,Qo=1e3,ci=1001,jo=1002,jt=1003,Gl=1004;var Lr=1005;var an=1006,ao=1007;var li=1008;var Mn=1009,ic=1010,rc=1011,Ar=1012,c0=1013,hi=1014,Cn=1015,yr=1016,l0=1017,h0=1018,qi=1020,sc=35902,oc=1021,ac=1022,Qt=1023,xc=1024,cc=1025,Vi=1026,Zi=1027,lc=1028,u0=1029,hc=1030,d0=1031;var f0=1033,cs=33776,ls=33777,hs=33778,us=33779,ea=35840,ta=35841,na=35842,ia=35843,ra=36196,sa=37492,oa=37496,aa=37808,xa=37809,ca=37810,la=37811,ha=37812,ua=37813,da=37814,fa=37815,pa=37816,ma=37817,Ea=37818,ga=37819,Aa=37820,va=37821,ds=36492,Ca=36494,_a=36495,uc=36283,ya=36284,Ba=36285,Ma=36286;var fs=2300,Da=2301,xo=2302,Q0=2400,j0=2401,ex=2402;var Wl=3200,Xl=3201;var dc=0,Yl=1,Vn="",Gt="srgb",ji="srgb-linear",Gs="linear",je="srgb";var Ci=7680;var tx=519,ql=512,Zl=513,Jl=514,fc=515,$l=516,Kl=517,Ql=518,jl=519,Fa=35044;var nx="300 es",_n=2e3,ps=2001,qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var co=Math.PI/180,wa=180/Math.PI;function Xn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function eh(i,e){return(i%e+e)%e}function lo(i,e,t){return(1-t)*i+t*e}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var We=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ne=class i{constructor(e,t,n,r,s,o,a,c,x){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,x)}set(e,t,n,r,s,o,a,c,x){let l=this.elements;return l[0]=e,l[1]=r,l[2]=a,l[3]=t,l[4]=s,l[5]=c,l[6]=n,l[7]=o,l[8]=x,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],x=n[1],l=n[4],h=n[7],u=n[2],f=n[5],A=n[8],_=r[0],E=r[3],d=r[6],C=r[1],v=r[4],m=r[7],B=r[2],y=r[5],D=r[8];return s[0]=o*_+a*C+c*B,s[3]=o*E+a*v+c*y,s[6]=o*d+a*m+c*D,s[1]=x*_+l*C+h*B,s[4]=x*E+l*v+h*y,s[7]=x*d+l*m+h*D,s[2]=u*_+f*C+A*B,s[5]=u*E+f*v+A*y,s[8]=u*d+f*m+A*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],x=e[7],l=e[8];return t*o*l-t*a*x-n*s*l+n*a*c+r*s*x-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],x=e[7],l=e[8],h=l*o-a*x,u=a*c-l*s,f=x*s-o*c,A=t*h+n*u+r*f;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/A;return e[0]=h*_,e[1]=(r*x-l*n)*_,e[2]=(a*n-r*o)*_,e[3]=u*_,e[4]=(l*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*c-x*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),x=Math.sin(s);return this.set(n*c,n*x,-n*(c*o+x*a)+o+e,-r*x,r*c,-r*(-x*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ho.makeScale(e,t)),this}rotate(e){return this.premultiply(ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ho=new Ne;function pc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function th(){let i=ms("canvas");return i.style.display="block",i}var ix={};function mr(i){i in ix||(ix[i]=!0,console.warn(i))}function nh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function ih(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rh(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ze={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===je&&(i.r=Bn(i.r),i.g=Bn(i.g),i.b=Bn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===je&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vn?Gs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rx=[.64,.33,.3,.6,.15,.06],sx=[.2126,.7152,.0722],ox=[.3127,.329],ax=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xx=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[ji]:{primaries:rx,whitePoint:ox,transfer:Gs,toXYZ:ax,fromXYZ:xx,luminanceCoefficients:sx,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:rx,whitePoint:ox,transfer:je,toXYZ:ax,fromXYZ:xx,luminanceCoefficients:sx,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}});var _i,ba=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_i===void 0&&(_i=ms("canvas")),_i.width=e.width,_i.height=e.height;let n=_i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ms("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sh=0,Es=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(uo(r[o].image)):s.push(uo(r[o]))}else s=uo(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var oh=0,zt=class i extends qn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ci,r=ci,s=an,o=li,a=Qt,c=Mn,x=i.DEFAULT_ANISOTROPY,l=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=Xn(),this.name="",this.source=new Es(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=x,this.format=a,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qo:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qo:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=nc;zt.DEFAULT_ANISOTROPY=1;var ct=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,x=c[0],l=c[4],h=c[8],u=c[1],f=c[5],A=c[9],_=c[2],E=c[6],d=c[10];if(Math.abs(l-u)<.01&&Math.abs(h-_)<.01&&Math.abs(A-E)<.01){if(Math.abs(l+u)<.1&&Math.abs(h+_)<.1&&Math.abs(A+E)<.1&&Math.abs(x+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(x+1)/2,m=(f+1)/2,B=(d+1)/2,y=(l+u)/4,D=(h+_)/4,M=(A+E)/4;return v>m&&v>B?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=y/n,s=D/n):m>B?m<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(m),n=y/r,s=M/r):B<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),n=D/s,r=M/s),this.set(n,r,s,t),this}let C=Math.sqrt((E-A)*(E-A)+(h-_)*(h-_)+(u-l)*(u-l));return Math.abs(C)<.001&&(C=1),this.x=(E-A)/C,this.y=(h-_)/C,this.z=(u-l)/C,this.w=Math.acos((x+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sa=class extends qn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new zt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Es(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends Sa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},gs=class extends zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ta=class extends zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],x=n[r+1],l=n[r+2],h=n[r+3],u=s[o+0],f=s[o+1],A=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=x,e[t+2]=l,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=A,e[t+3]=_;return}if(h!==_||c!==u||x!==f||l!==A){let E=1-a,d=c*u+x*f+l*A+h*_,C=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let B=Math.sqrt(v),y=Math.atan2(B,d*C);E=Math.sin(E*y)/B,a=Math.sin(a*y)/B}let m=a*C;if(c=c*E+u*m,x=x*E+f*m,l=l*E+A*m,h=h*E+_*m,E===1-a){let B=1/Math.sqrt(c*c+x*x+l*l+h*h);c*=B,x*=B,l*=B,h*=B}}e[t]=c,e[t+1]=x,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],x=n[r+2],l=n[r+3],h=s[o],u=s[o+1],f=s[o+2],A=s[o+3];return e[t]=a*A+l*h+c*f-x*u,e[t+1]=c*A+l*u+x*h-a*f,e[t+2]=x*A+l*f+a*u-c*h,e[t+3]=l*A-a*h-c*u-x*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,x=a(n/2),l=a(r/2),h=a(s/2),u=c(n/2),f=c(r/2),A=c(s/2);switch(o){case"XYZ":this._x=u*l*h+x*f*A,this._y=x*f*h-u*l*A,this._z=x*l*A+u*f*h,this._w=x*l*h-u*f*A;break;case"YXZ":this._x=u*l*h+x*f*A,this._y=x*f*h-u*l*A,this._z=x*l*A-u*f*h,this._w=x*l*h+u*f*A;break;case"ZXY":this._x=u*l*h-x*f*A,this._y=x*f*h+u*l*A,this._z=x*l*A+u*f*h,this._w=x*l*h-u*f*A;break;case"ZYX":this._x=u*l*h-x*f*A,this._y=x*f*h+u*l*A,this._z=x*l*A-u*f*h,this._w=x*l*h+u*f*A;break;case"YZX":this._x=u*l*h+x*f*A,this._y=x*f*h+u*l*A,this._z=x*l*A-u*f*h,this._w=x*l*h-u*f*A;break;case"XZY":this._x=u*l*h-x*f*A,this._y=x*f*h-u*l*A,this._z=x*l*A+u*f*h,this._w=x*l*h+u*f*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],x=t[2],l=t[6],h=t[10],u=n+a+h;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(l-c)*f,this._y=(s-x)*f,this._z=(o-r)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(l-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+x)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(s-x)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+l)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-r)/f,this._x=(s+x)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,x=t._z,l=t._w;return this._x=n*l+o*a+r*x-s*c,this._y=r*l+o*c+s*a-n*x,this._z=s*l+o*x+n*c-r*a,this._w=o*l-n*a-r*c-s*x,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let x=Math.sqrt(c),l=Math.atan2(x,a),h=Math.sin((1-t)*l)/x,u=Math.sin(t*l)/x;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=r*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,x=2*(o*r-a*n),l=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+c*x+o*h-a*l,this.y=n+c*l+a*x-s*h,this.z=r+c*h+s*l-o*x,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fo.copy(this).projectOnVector(e),this.sub(fo)}reflect(e){return this.sub(fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fo=new W,cx=new Zn,ui=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jt):Jt.fromBufferAttribute(s,o),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),Nr.subVectors(this.max,xr),yi.subVectors(e.a,xr),Bi.subVectors(e.b,xr),Mi.subVectors(e.c,xr),kn.subVectors(Bi,yi),Ln.subVectors(Mi,Bi),ei.subVectors(yi,Mi);let t=[0,-kn.z,kn.y,0,-Ln.z,Ln.y,0,-ei.z,ei.y,kn.z,0,-kn.x,Ln.z,0,-Ln.x,ei.z,0,-ei.x,-kn.y,kn.x,0,-Ln.y,Ln.x,0,-ei.y,ei.x,0];return!po(t,yi,Bi,Mi,Nr)||(t=[1,0,0,0,1,0,0,0,1],!po(t,yi,Bi,Mi,Nr))?!1:(Or.crossVectors(kn,Ln),t=[Or.x,Or.y,Or.z],po(t,yi,Bi,Mi,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},dn=[new W,new W,new W,new W,new W,new W,new W,new W],Jt=new W,Ur=new ui,yi=new W,Bi=new W,Mi=new W,kn=new W,Ln=new W,ei=new W,xr=new W,Nr=new W,Or=new W,ti=new W;function po(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ti.fromArray(i,s);let a=r.x*Math.abs(ti.x)+r.y*Math.abs(ti.y)+r.z*Math.abs(ti.z),c=e.dot(ti),x=t.dot(ti),l=n.dot(ti);if(Math.max(-Math.max(c,x,l),Math.min(c,x,l))>a)return!1}return!0}var ah=new ui,cr=new W,mo=new W,Ji=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ah.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);let t=cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(cr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(mo)),this.expandByPoint(cr.copy(e.center).sub(mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},fn=new W,Eo=new W,zr=new W,Un=new W,go=new W,Vr=new W,Ao=new W,As=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Eo.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(Eo);let s=e.distanceTo(t)*.5,o=-this.direction.dot(zr),a=Un.dot(this.direction),c=-Un.dot(zr),x=Un.lengthSq(),l=Math.abs(1-o*o),h,u,f,A;if(l>0)if(h=o*c-a,u=o*a-c,A=s*l,h>=0)if(u>=-A)if(u<=A){let _=1/l;h*=_,u*=_,f=h*(h+o*u+2*a)+u*(o*h+u+2*c)+x}else u=s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*c)+x;else u=-s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*c)+x;else u<=-A?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+u*(u+2*c)+x):u<=A?(h=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+x):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+u*(u+2*c)+x);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*c)+x;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Eo).addScaledVector(zr,u),f}intersectSphere(e,t){fn.subVectors(e.center,this.origin);let n=fn.dot(this.direction),r=fn.dot(fn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,x=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,u=this.origin;return x>=0?(n=(e.min.x-u.x)*x,r=(e.max.x-u.x)*x):(n=(e.max.x-u.x)*x,r=(e.min.x-u.x)*x),l>=0?(s=(e.min.y-u.y)*l,o=(e.max.y-u.y)*l):(s=(e.max.y-u.y)*l,o=(e.min.y-u.y)*l),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,r,s){go.subVectors(t,e),Vr.subVectors(n,e),Ao.crossVectors(go,Vr);let o=this.direction.dot(Ao),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,e);let c=a*this.direction.dot(Vr.crossVectors(Un,Vr));if(c<0)return null;let x=a*this.direction.dot(go.cross(Un));if(x<0||c+x>o)return null;let l=-a*Un.dot(Ao);return l<0?null:this.at(l/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class i{constructor(e,t,n,r,s,o,a,c,x,l,h,u,f,A,_,E){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,x,l,h,u,f,A,_,E)}set(e,t,n,r,s,o,a,c,x,l,h,u,f,A,_,E){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=x,d[6]=l,d[10]=h,d[14]=u,d[3]=f,d[7]=A,d[11]=_,d[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Di.setFromMatrixColumn(e,0).length(),s=1/Di.setFromMatrixColumn(e,1).length(),o=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),x=Math.sin(r),l=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let u=o*l,f=o*h,A=a*l,_=a*h;t[0]=c*l,t[4]=-c*h,t[8]=x,t[1]=f+A*x,t[5]=u-_*x,t[9]=-a*c,t[2]=_-u*x,t[6]=A+f*x,t[10]=o*c}else if(e.order==="YXZ"){let u=c*l,f=c*h,A=x*l,_=x*h;t[0]=u+_*a,t[4]=A*a-f,t[8]=o*x,t[1]=o*h,t[5]=o*l,t[9]=-a,t[2]=f*a-A,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*l,f=c*h,A=x*l,_=x*h;t[0]=u-_*a,t[4]=-o*h,t[8]=A+f*a,t[1]=f+A*a,t[5]=o*l,t[9]=_-u*a,t[2]=-o*x,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*l,f=o*h,A=a*l,_=a*h;t[0]=c*l,t[4]=A*x-f,t[8]=u*x+_,t[1]=c*h,t[5]=_*x+u,t[9]=f*x-A,t[2]=-x,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*x,A=a*c,_=a*x;t[0]=c*l,t[4]=_-u*h,t[8]=A*h+f,t[1]=h,t[5]=o*l,t[9]=-a*l,t[2]=-x*l,t[6]=f*h+A,t[10]=u-_*h}else if(e.order==="XZY"){let u=o*c,f=o*x,A=a*c,_=a*x;t[0]=c*l,t[4]=-h,t[8]=x*l,t[1]=u*h+_,t[5]=o*l,t[9]=f*h-A,t[2]=A*h-f,t[6]=a*l,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xh,e,ch)}lookAt(e,t,n){let r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Nn.crossVectors(n,Ut),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Nn.crossVectors(n,Ut)),Nn.normalize(),Hr.crossVectors(Ut,Nn),r[0]=Nn.x,r[4]=Hr.x,r[8]=Ut.x,r[1]=Nn.y,r[5]=Hr.y,r[9]=Ut.y,r[2]=Nn.z,r[6]=Hr.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],x=n[12],l=n[1],h=n[5],u=n[9],f=n[13],A=n[2],_=n[6],E=n[10],d=n[14],C=n[3],v=n[7],m=n[11],B=n[15],y=r[0],D=r[4],M=r[8],p=r[12],g=r[1],w=r[5],S=r[9],P=r[13],L=r[2],N=r[6],H=r[10],j=r[14],G=r[3],$=r[7],se=r[11],he=r[15];return s[0]=o*y+a*g+c*L+x*G,s[4]=o*D+a*w+c*N+x*$,s[8]=o*M+a*S+c*H+x*se,s[12]=o*p+a*P+c*j+x*he,s[1]=l*y+h*g+u*L+f*G,s[5]=l*D+h*w+u*N+f*$,s[9]=l*M+h*S+u*H+f*se,s[13]=l*p+h*P+u*j+f*he,s[2]=A*y+_*g+E*L+d*G,s[6]=A*D+_*w+E*N+d*$,s[10]=A*M+_*S+E*H+d*se,s[14]=A*p+_*P+E*j+d*he,s[3]=C*y+v*g+m*L+B*G,s[7]=C*D+v*w+m*N+B*$,s[11]=C*M+v*S+m*H+B*se,s[15]=C*p+v*P+m*j+B*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],x=e[13],l=e[2],h=e[6],u=e[10],f=e[14],A=e[3],_=e[7],E=e[11],d=e[15];return A*(+s*c*h-r*x*h-s*a*u+n*x*u+r*a*f-n*c*f)+_*(+t*c*f-t*x*u+s*o*u-r*o*f+r*x*l-s*c*l)+E*(+t*x*h-t*a*f-s*o*h+n*o*f+s*a*l-n*x*l)+d*(-r*a*l-t*c*h+t*a*u+r*o*h-n*o*u+n*c*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],x=e[7],l=e[8],h=e[9],u=e[10],f=e[11],A=e[12],_=e[13],E=e[14],d=e[15],C=h*E*x-_*u*x+_*c*f-a*E*f-h*c*d+a*u*d,v=A*u*x-l*E*x-A*c*f+o*E*f+l*c*d-o*u*d,m=l*_*x-A*h*x+A*a*f-o*_*f-l*a*d+o*h*d,B=A*h*c-l*_*c-A*a*u+o*_*u+l*a*E-o*h*E,y=t*C+n*v+r*m+s*B;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/y;return e[0]=C*D,e[1]=(_*u*s-h*E*s-_*r*f+n*E*f+h*r*d-n*u*d)*D,e[2]=(a*E*s-_*c*s+_*r*x-n*E*x-a*r*d+n*c*d)*D,e[3]=(h*c*s-a*u*s-h*r*x+n*u*x+a*r*f-n*c*f)*D,e[4]=v*D,e[5]=(l*E*s-A*u*s+A*r*f-t*E*f-l*r*d+t*u*d)*D,e[6]=(A*c*s-o*E*s-A*r*x+t*E*x+o*r*d-t*c*d)*D,e[7]=(o*u*s-l*c*s+l*r*x-t*u*x-o*r*f+t*c*f)*D,e[8]=m*D,e[9]=(A*h*s-l*_*s-A*n*f+t*_*f+l*n*d-t*h*d)*D,e[10]=(o*_*s-A*a*s+A*n*x-t*_*x-o*n*d+t*a*d)*D,e[11]=(l*a*s-o*h*s-l*n*x+t*h*x+o*n*f-t*a*f)*D,e[12]=B*D,e[13]=(l*_*r-A*h*r+A*n*u-t*_*u-l*n*E+t*h*E)*D,e[14]=(A*a*r-o*_*r-A*n*c+t*_*c+o*n*E-t*a*E)*D,e[15]=(o*h*r-l*a*r+l*n*c-t*h*c-o*n*u+t*a*u)*D,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,x=s*o,l=s*a;return this.set(x*o+n,x*a-r*c,x*c+r*a,0,x*a+r*c,l*a+n,l*c-r*o,0,x*c-r*a,l*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,x=s+s,l=o+o,h=a+a,u=s*x,f=s*l,A=s*h,_=o*l,E=o*h,d=a*h,C=c*x,v=c*l,m=c*h,B=n.x,y=n.y,D=n.z;return r[0]=(1-(_+d))*B,r[1]=(f+m)*B,r[2]=(A-v)*B,r[3]=0,r[4]=(f-m)*y,r[5]=(1-(u+d))*y,r[6]=(E+C)*y,r[7]=0,r[8]=(A+v)*D,r[9]=(E-C)*D,r[10]=(1-(u+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Di.set(r[0],r[1],r[2]).length(),o=Di.set(r[4],r[5],r[6]).length(),a=Di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$t.copy(this);let x=1/s,l=1/o,h=1/a;return $t.elements[0]*=x,$t.elements[1]*=x,$t.elements[2]*=x,$t.elements[4]*=l,$t.elements[5]*=l,$t.elements[6]*=l,$t.elements[8]*=h,$t.elements[9]*=h,$t.elements[10]*=h,t.setFromRotationMatrix($t),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=_n){let c=this.elements,x=2*s/(t-e),l=2*s/(n-r),h=(t+e)/(t-e),u=(n+r)/(n-r),f,A;if(a===_n)f=-(o+s)/(o-s),A=-2*o*s/(o-s);else if(a===ps)f=-o/(o-s),A=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=x,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=l,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=_n){let c=this.elements,x=1/(t-e),l=1/(n-r),h=1/(o-s),u=(t+e)*x,f=(n+r)*l,A,_;if(a===_n)A=(o+s)*h,_=-2*h;else if(a===ps)A=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*x,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Di=new W,$t=new ot,xh=new W(0,0,0),ch=new W(1,1,1),Nn=new W,Hr=new W,Ut=new W,lx=new ot,hx=new Zn,xn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],x=r[5],l=r[9],h=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,x),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,x)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,x)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,x));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,x),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,x),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lx,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hx.setFromEuler(this),this.setFromQuaternion(hx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var vs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lh=0,ux=new W,Fi=new Zn,pn=new ot,Gr=new W,lr=new W,hh=new W,uh=new Zn,dx=new W(1,0,0),fx=new W(0,1,0),px=new W(0,0,1),mx={type:"added"},dh={type:"removed"},wi={type:"childadded",child:null},vo={type:"childremoved",child:null},Et=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new W,t=new xn,n=new Zn,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ne}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(dx,e)}rotateY(e){return this.rotateOnAxis(fx,e)}rotateZ(e){return this.rotateOnAxis(px,e)}translateOnAxis(e,t){return ux.copy(e).applyQuaternion(this.quaternion),this.position.add(ux.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dx,e)}translateY(e){return this.translateOnAxis(fx,e)}translateZ(e){return this.translateOnAxis(px,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gr.copy(e):Gr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(lr,Gr,this.up):pn.lookAt(Gr,lr,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),Fi.setFromRotationMatrix(pn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mx),wi.child=e,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dh),vo.child=e,this.dispatchEvent(vo),vo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mx),wi.child=e,this.dispatchEvent(wi),wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,hh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,uh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let x=0,l=c.length;x<l;x++){let h=c[x];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,x=this.material.length;c<x;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),x=o(e.textures),l=o(e.images),h=o(e.shapes),u=o(e.skeletons),f=o(e.animations),A=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),x.length>0&&(n.textures=x),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),A.length>0&&(n.nodes=A)}return n.object=r,n;function o(a){let c=[];for(let x in a){let l=a[x];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Et.DEFAULT_UP=new W(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=new W,mn=new W,Co=new W,En=new W,bi=new W,Si=new W,Ex=new W,_o=new W,yo=new W,Bo=new W,Mo=new ct,Do=new ct,Fo=new ct,Hn=class i{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kt.subVectors(e,t),r.cross(Kt);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Kt.subVectors(r,t),mn.subVectors(n,t),Co.subVectors(e,t);let o=Kt.dot(Kt),a=Kt.dot(mn),c=Kt.dot(Co),x=mn.dot(mn),l=mn.dot(Co),h=o*x-a*a;if(h===0)return s.set(0,0,0),null;let u=1/h,f=(x*c-a*l)*u,A=(o*l-a*c)*u;return s.set(1-f-A,A,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,En.x),c.addScaledVector(o,En.y),c.addScaledVector(a,En.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Mo.setScalar(0),Do.setScalar(0),Fo.setScalar(0),Mo.fromBufferAttribute(e,t),Do.fromBufferAttribute(e,n),Fo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Mo,s.x),o.addScaledVector(Do,s.y),o.addScaledVector(Fo,s.z),o}static isFrontFacing(e,t,n,r){return Kt.subVectors(n,t),mn.subVectors(e,t),Kt.cross(mn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Kt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;bi.subVectors(r,n),Si.subVectors(s,n),_o.subVectors(e,n);let c=bi.dot(_o),x=Si.dot(_o);if(c<=0&&x<=0)return t.copy(n);yo.subVectors(e,r);let l=bi.dot(yo),h=Si.dot(yo);if(l>=0&&h<=l)return t.copy(r);let u=c*h-l*x;if(u<=0&&c>=0&&l<=0)return o=c/(c-l),t.copy(n).addScaledVector(bi,o);Bo.subVectors(e,s);let f=bi.dot(Bo),A=Si.dot(Bo);if(A>=0&&f<=A)return t.copy(s);let _=f*x-c*A;if(_<=0&&x>=0&&A<=0)return a=x/(x-A),t.copy(n).addScaledVector(Si,a);let E=l*A-f*h;if(E<=0&&h-l>=0&&f-A>=0)return Ex.subVectors(s,r),a=(h-l)/(h-l+(f-A)),t.copy(r).addScaledVector(Ex,a);let d=1/(E+_+u);return o=_*d,a=u*d,t.copy(n).addScaledVector(bi,o).addScaledVector(Si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ze.workingColorSpace){if(e=eh(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=wo(o,s,e+1/3),this.g=wo(o,s,e),this.b=wo(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=mc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Ze.fromWorkingColorSpace(vt.copy(this),e),Math.round(Tt(vt.r*255,0,255))*65536+Math.round(Tt(vt.g*255,0,255))*256+Math.round(Tt(vt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(vt.copy(this),t);let n=vt.r,r=vt.g,s=vt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,x,l=(a+o)/2;if(a===o)c=0,x=0;else{let h=o-a;switch(x=l<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=x,e.l=l,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=Gt){Ze.fromWorkingColorSpace(vt.copy(this),e);let t=vt.r,n=vt.g,r=vt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(Wr);let n=lo(On.h,Wr.h,t),r=lo(On.s,Wr.s,t),s=lo(On.l,Wr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vt=new Oe;Oe.NAMES=mc;var fh=0,Fn=class extends qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Xn(),this.name="",this.blending=zi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Ho,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ho&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tx&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Jn=class extends Fn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=x0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var lt=new W,Xr=new We,Ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fa,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fa&&(e.usage=this.usage),e}};var Cs=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _s=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ct=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},ph=0,Ht=new ot,bo=new Et,Ti=new W,Nt=new ui,hr=new ui,pt=new W,en=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pc(e)?_s:Cs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return bo.lookAt(e),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(Nt.min,hr.min),Nt.expandByPoint(pt),pt.addVectors(Nt.max,hr.max),Nt.expandByPoint(pt)):(Nt.expandByPoint(hr.min),Nt.expandByPoint(hr.max))}Nt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(pt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let x=0,l=a.count;x<l;x++)pt.fromBufferAttribute(a,x),c&&(Ti.fromBufferAttribute(e,x),pt.add(Ti)),r=Math.max(r,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let M=0;M<n.count;M++)a[M]=new W,c[M]=new W;let x=new W,l=new W,h=new W,u=new We,f=new We,A=new We,_=new W,E=new W;function d(M,p,g){x.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),h.fromBufferAttribute(n,g),u.fromBufferAttribute(s,M),f.fromBufferAttribute(s,p),A.fromBufferAttribute(s,g),l.sub(x),h.sub(x),f.sub(u),A.sub(u);let w=1/(f.x*A.y-A.x*f.y);isFinite(w)&&(_.copy(l).multiplyScalar(A.y).addScaledVector(h,-f.y).multiplyScalar(w),E.copy(h).multiplyScalar(f.x).addScaledVector(l,-A.x).multiplyScalar(w),a[M].add(_),a[p].add(_),a[g].add(_),c[M].add(E),c[p].add(E),c[g].add(E))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let M=0,p=C.length;M<p;++M){let g=C[M],w=g.start,S=g.count;for(let P=w,L=w+S;P<L;P+=3)d(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let v=new W,m=new W,B=new W,y=new W;function D(M){B.fromBufferAttribute(r,M),y.copy(B);let p=a[M];v.copy(p),v.sub(B.multiplyScalar(B.dot(p))).normalize(),m.crossVectors(y,p);let w=m.dot(c[M])<0?-1:1;o.setXYZW(M,v.x,v.y,v.z,w)}for(let M=0,p=C.length;M<p;++M){let g=C[M],w=g.start,S=g.count;for(let P=w,L=w+S;P<L;P+=3)D(e.getX(P+0)),D(e.getX(P+1)),D(e.getX(P+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let r=new W,s=new W,o=new W,a=new W,c=new W,x=new W,l=new W,h=new W;if(e)for(let u=0,f=e.count;u<f;u+=3){let A=e.getX(u+0),_=e.getX(u+1),E=e.getX(u+2);r.fromBufferAttribute(t,A),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,E),l.subVectors(o,s),h.subVectors(r,s),l.cross(h),a.fromBufferAttribute(n,A),c.fromBufferAttribute(n,_),x.fromBufferAttribute(n,E),a.add(l),c.add(l),x.add(l),n.setXYZ(A,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(E,x.x,x.y,x.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),l.subVectors(o,s),h.subVectors(r,s),l.cross(h),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,c){let x=a.array,l=a.itemSize,h=a.normalized,u=new x.constructor(c.length*l),f=0,A=0;for(let _=0,E=c.length;_<E;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*l;for(let d=0;d<l;d++)u[A++]=x[f++]}return new Ot(u,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],x=e(c,n);t.setAttribute(a,x)}let s=this.morphAttributes;for(let a in s){let c=[],x=s[a];for(let l=0,h=x.length;l<h;l++){let u=x[l],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let x=o[a];t.addGroup(x.start,x.count,x.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let x in c)c[x]!==void 0&&(e[x]=c[x]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let x=n[c];e.data.attributes[c]=x.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let x=this.morphAttributes[c],l=[];for(let h=0,u=x.length;h<u;h++){let f=x[h];l.push(f.toJSON(e.data))}l.length>0&&(r[c]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let x in r){let l=r[x];this.setAttribute(x,l.clone(t))}let s=e.morphAttributes;for(let x in s){let l=[],h=s[x];for(let u=0,f=h.length;u<f;u++)l.push(h[u].clone(t));this.morphAttributes[x]=l}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let x=0,l=o.length;x<l;x++){let h=o[x];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gx=new ot,ni=new As,Yr=new Ji,Ax=new W,qr=new W,Zr=new W,Jr=new W,So=new W,$r=new W,vx=new W,Kr=new W,ht=class extends Et{constructor(e=new en,t=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){$r.set(0,0,0);for(let c=0,x=s.length;c<x;c++){let l=a[c],h=s[c];l!==0&&(So.fromBufferAttribute(h,e),o?$r.addScaledVector(So,l):$r.addScaledVector(So.sub(t),l))}t.add($r)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),ni.copy(e.ray).recast(e.near),!(Yr.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Yr,Ax)===null||ni.origin.distanceToSquared(Ax)>(e.far-e.near)**2))&&(gx.copy(s).invert(),ni.copy(e.ray).applyMatrix4(gx),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,x=s.attributes.uv,l=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let A=0,_=u.length;A<_;A++){let E=u[A],d=o[E.materialIndex],C=Math.max(E.start,f.start),v=Math.min(a.count,Math.min(E.start+E.count,f.start+f.count));for(let m=C,B=v;m<B;m+=3){let y=a.getX(m),D=a.getX(m+1),M=a.getX(m+2);r=Qr(this,d,e,n,x,l,h,y,D,M),r&&(r.faceIndex=Math.floor(m/3),r.face.materialIndex=E.materialIndex,t.push(r))}}else{let A=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let E=A,d=_;E<d;E+=3){let C=a.getX(E),v=a.getX(E+1),m=a.getX(E+2);r=Qr(this,o,e,n,x,l,h,C,v,m),r&&(r.faceIndex=Math.floor(E/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let A=0,_=u.length;A<_;A++){let E=u[A],d=o[E.materialIndex],C=Math.max(E.start,f.start),v=Math.min(c.count,Math.min(E.start+E.count,f.start+f.count));for(let m=C,B=v;m<B;m+=3){let y=m,D=m+1,M=m+2;r=Qr(this,d,e,n,x,l,h,y,D,M),r&&(r.faceIndex=Math.floor(m/3),r.face.materialIndex=E.materialIndex,t.push(r))}}else{let A=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let E=A,d=_;E<d;E+=3){let C=E,v=E+1,m=E+2;r=Qr(this,o,e,n,x,l,h,C,v,m),r&&(r.faceIndex=Math.floor(E/3),t.push(r))}}}};function mh(i,e,t,n,r,s,o,a){let c;if(e.side===Pt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Yn,a),c===null)return null;Kr.copy(a),Kr.applyMatrix4(i.matrixWorld);let x=t.ray.origin.distanceTo(Kr);return x<t.near||x>t.far?null:{distance:x,point:Kr.clone(),object:i}}function Qr(i,e,t,n,r,s,o,a,c,x){i.getVertexPosition(a,qr),i.getVertexPosition(c,Zr),i.getVertexPosition(x,Jr);let l=mh(i,e,t,n,qr,Zr,Jr,vx);if(l){let h=new W;Hn.getBarycoord(vx,qr,Zr,Jr,h),r&&(l.uv=Hn.getInterpolatedAttribute(r,a,c,x,h,new We)),s&&(l.uv1=Hn.getInterpolatedAttribute(s,a,c,x,h,new We)),o&&(l.normal=Hn.getInterpolatedAttribute(o,a,c,x,h,new W),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let u={a,b:c,c:x,normal:new W,materialIndex:0};Hn.getNormal(qr,Zr,Jr,u.normal),l.face=u,l.barycoord=h}return l}var Rt=class i extends en{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],x=[],l=[],h=[],u=0,f=0;A("z","y","x",-1,-1,n,t,e,o,s,0),A("z","y","x",1,-1,n,t,-e,o,s,1),A("x","z","y",1,1,e,n,t,r,o,2),A("x","z","y",1,-1,e,n,-t,r,o,3),A("x","y","z",1,-1,e,t,n,r,s,4),A("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ct(x,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(h,2));function A(_,E,d,C,v,m,B,y,D,M,p){let g=m/D,w=B/M,S=m/2,P=B/2,L=y/2,N=D+1,H=M+1,j=0,G=0,$=new W;for(let se=0;se<H;se++){let he=se*w-P;for(let le=0;le<N;le++){let ze=le*g-S;$[_]=ze*C,$[E]=he*v,$[d]=L,x.push($.x,$.y,$.z),$[_]=0,$[E]=0,$[d]=y>0?1:-1,l.push($.x,$.y,$.z),h.push(le/D),h.push(1-se/M),j+=1}}for(let se=0;se<M;se++)for(let he=0;he<D;he++){let le=u+he+N*se,ze=u+he+N*(se+1),K=u+(he+1)+N*(se+1),R=u+(he+1)+N*se;c.push(le,ze,R),c.push(ze,K,R),G+=6}a.addGroup(f,G,p),f+=G,u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $i(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Bt(i){let e={};for(let t=0;t<i.length;t++){let n=$i(i[t]);for(let r in n)e[r]=n[r]}return e}function Eh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ec(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var gh={clone:$i,merge:Bt},Ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Fn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ah,this.fragmentShader=vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=Eh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ys=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=_n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zn=new W,Cx=new We,_x=new We,Mt=class extends ys{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Cx,_x),t.subVectors(_x,Cx)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,x=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/x,r*=o.width/c,n*=o.height/x}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pi=-90,Ri=1,Pa=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Mt(Pi,Ri,e,t);r.layers=this.layers,this.add(r);let s=new Mt(Pi,Ri,e,t);s.layers=this.layers,this.add(s);let o=new Mt(Pi,Ri,e,t);o.layers=this.layers,this.add(o);let a=new Mt(Pi,Ri,e,t);a.layers=this.layers,this.add(a);let c=new Mt(Pi,Ri,e,t);c.layers=this.layers,this.add(c);let x=new Mt(Pi,Ri,e,t);x.layers=this.layers,this.add(x)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let x of t)this.remove(x);if(e===_n)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let x of t)this.add(x),x.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,x,l]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,x),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(h,u,f),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}},Bs=class extends zt{constructor(e,t,n,r,s,o,a,c,x,l){e=e!==void 0?e:[],t=t!==void 0?t:Xi,super(e,t,n,r,s,o,a,c,x,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ra=class extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Bs(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rt(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:Gn});s.uniforms.tEquirect.value=t;let o=new ht(r,s),a=t.minFilter;return t.minFilter===li&&(t.minFilter=an),new Pa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},To=new W,Ch=new W,_h=new Ne,An=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=To.subVectors(n,t).cross(Ch.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(To),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_h.getNormalMatrix(e),r=this.coplanarPoint(To).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new Ji,jr=new W,vr=class{constructor(e=new An,t=new An,n=new An,r=new An,s=new An,o=new An){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_n){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],x=r[4],l=r[5],h=r[6],u=r[7],f=r[8],A=r[9],_=r[10],E=r[11],d=r[12],C=r[13],v=r[14],m=r[15];if(n[0].setComponents(c-s,u-x,E-f,m-d).normalize(),n[1].setComponents(c+s,u+x,E+f,m+d).normalize(),n[2].setComponents(c+o,u+l,E+A,m+C).normalize(),n[3].setComponents(c-o,u-l,E-A,m-C).normalize(),n[4].setComponents(c-a,u-h,E-_,m-v).normalize(),t===_n)n[5].setComponents(c+a,u+h,E+_,m+v).normalize();else if(t===ps)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(jr.x=r.normal.x>0?e.max.x:e.min.x,jr.y=r.normal.y>0?e.max.y:e.min.y,jr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function yh(i){let e=new WeakMap;function t(a,c){let x=a.array,l=a.usage,h=x.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,x,l),a.onUploadCallback();let f;if(x instanceof Float32Array)f=i.FLOAT;else if(x instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(x instanceof Int16Array)f=i.SHORT;else if(x instanceof Uint32Array)f=i.UNSIGNED_INT;else if(x instanceof Int32Array)f=i.INT;else if(x instanceof Int8Array)f=i.BYTE;else if(x instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:u,type:f,bytesPerElement:x.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,x){let l=c.array,h=c.updateRanges;if(i.bindBuffer(x,a),h.length===0)i.bufferSubData(x,0,l);else{h.sort((f,A)=>f.start-A.start);let u=0;for(let f=1;f<h.length;f++){let A=h[u],_=h[f];_.start<=A.start+A.count+1?A.count=Math.max(A.count,_.start+_.count-A.start):(++u,h[u]=_)}h.length=u+1;for(let f=0,A=h.length;f<A;f++){let _=h[f];i.bufferSubData(x,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let l=e.get(a);(!l||l.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let x=e.get(a);if(x===void 0)e.set(a,t(a,c));else if(x.version<a.version){if(x.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(x.buffer,a,c),x.version=a.version}}return{get:r,remove:s,update:o}}var Ki=class i extends en{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),x=a+1,l=c+1,h=e/a,u=t/c,f=[],A=[],_=[],E=[];for(let d=0;d<l;d++){let C=d*u-o;for(let v=0;v<x;v++){let m=v*h-s;A.push(m,-C,0),_.push(0,0,1),E.push(v/a),E.push(1-d/c)}}for(let d=0;d<c;d++)for(let C=0;C<a;C++){let v=C+x*d,m=C+x*(d+1),B=C+1+x*(d+1),y=C+1+x*d;f.push(v,m,y),f.push(m,B,y)}this.setIndex(f),this.setAttribute("position",new Ct(A,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Bh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mh=`#ifdef USE_ALPHAHASH
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
#endif`,Dh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sh=`#ifdef USE_AOMAP
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
#endif`,Th=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ph=`#ifdef USE_BATCHING
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
#endif`,Rh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ih=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uh=`#ifdef USE_IRIDESCENCE
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
#endif`,Nh=`#ifdef USE_BUMPMAP
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
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qh=`#define PI 3.141592653589793
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
} // validated`,Zh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jh=`vec3 transformedNormal = objectNormal;
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
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eu="gl_FragColor = linearToOutputTexel( gl_FragColor );",tu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ru=`#ifdef USE_ENVMAP
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
#endif`,su=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
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
#endif`,au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hu=`#ifdef USE_GRADIENTMAP
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
}`,uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
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
#endif`,mu=`#ifdef USE_ENVMAP
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
#endif`,Eu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Au=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cu=`PhysicalMaterial material;
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
#endif`,_u=`struct PhysicalMaterial {
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
}`,yu=`
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
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Du=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Su=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ru=`#if defined( USE_POINTS_UV )
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
#endif`,Iu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ou=`#ifdef USE_MORPHTARGETS
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
#endif`,zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yu=`#ifdef USE_NORMALMAP
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
#endif`,qu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xd=`float getShadowMask() {
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
}`,cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ld=`#ifdef USE_SKINNING
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
#endif`,hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ud=`#ifdef USE_SKINNING
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
#endif`,dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,md=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ed=`#ifdef USE_TRANSMISSION
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
#endif`,gd=`#ifdef USE_TRANSMISSION
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
#endif`,Ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bd=`uniform sampler2D t2D;
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
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bd=`#include <common>
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
}`,Sd=`#if DEPTH_PACKING == 3200
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
}`,Td=`#define DISTANCE
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
}`,Pd=`#define DISTANCE
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
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Id=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`uniform float scale;
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
}`,Ld=`uniform vec3 diffuse;
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
}`,Ud=`#include <common>
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
}`,Nd=`uniform vec3 diffuse;
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
}`,Od=`#define LAMBERT
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
}`,zd=`#define LAMBERT
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
}`,Vd=`#define MATCAP
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
}`,Hd=`#define MATCAP
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
}`,Gd=`#define NORMAL
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
}`,Wd=`#define NORMAL
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
}`,Xd=`#define PHONG
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
}`,Yd=`#define PHONG
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
}`,qd=`#define STANDARD
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
}`,Zd=`#define STANDARD
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
}`,Jd=`#define TOON
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
}`,$d=`#define TOON
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
}`,Kd=`uniform float size;
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
}`,Qd=`uniform vec3 diffuse;
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
}`,jd=`#include <common>
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
}`,ef=`uniform vec3 color;
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
}`,tf=`uniform float rotation;
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
}`,nf=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Bh,alphahash_pars_fragment:Mh,alphamap_fragment:Dh,alphamap_pars_fragment:Fh,alphatest_fragment:wh,alphatest_pars_fragment:bh,aomap_fragment:Sh,aomap_pars_fragment:Th,batching_pars_vertex:Ph,batching_vertex:Rh,begin_vertex:Ih,beginnormal_vertex:kh,bsdfs:Lh,iridescence_fragment:Uh,bumpmap_pars_fragment:Nh,clipping_planes_fragment:Oh,clipping_planes_pars_fragment:zh,clipping_planes_pars_vertex:Vh,clipping_planes_vertex:Hh,color_fragment:Gh,color_pars_fragment:Wh,color_pars_vertex:Xh,color_vertex:Yh,common:qh,cube_uv_reflection_fragment:Zh,defaultnormal_vertex:Jh,displacementmap_pars_vertex:$h,displacementmap_vertex:Kh,emissivemap_fragment:Qh,emissivemap_pars_fragment:jh,colorspace_fragment:eu,colorspace_pars_fragment:tu,envmap_fragment:nu,envmap_common_pars_fragment:iu,envmap_pars_fragment:ru,envmap_pars_vertex:su,envmap_physical_pars_fragment:mu,envmap_vertex:ou,fog_vertex:au,fog_pars_vertex:xu,fog_fragment:cu,fog_pars_fragment:lu,gradientmap_pars_fragment:hu,lightmap_pars_fragment:uu,lights_lambert_fragment:du,lights_lambert_pars_fragment:fu,lights_pars_begin:pu,lights_toon_fragment:Eu,lights_toon_pars_fragment:gu,lights_phong_fragment:Au,lights_phong_pars_fragment:vu,lights_physical_fragment:Cu,lights_physical_pars_fragment:_u,lights_fragment_begin:yu,lights_fragment_maps:Bu,lights_fragment_end:Mu,logdepthbuf_fragment:Du,logdepthbuf_pars_fragment:Fu,logdepthbuf_pars_vertex:wu,logdepthbuf_vertex:bu,map_fragment:Su,map_pars_fragment:Tu,map_particle_fragment:Pu,map_particle_pars_fragment:Ru,metalnessmap_fragment:Iu,metalnessmap_pars_fragment:ku,morphinstance_vertex:Lu,morphcolor_vertex:Uu,morphnormal_vertex:Nu,morphtarget_pars_vertex:Ou,morphtarget_vertex:zu,normal_fragment_begin:Vu,normal_fragment_maps:Hu,normal_pars_fragment:Gu,normal_pars_vertex:Wu,normal_vertex:Xu,normalmap_pars_fragment:Yu,clearcoat_normal_fragment_begin:qu,clearcoat_normal_fragment_maps:Zu,clearcoat_pars_fragment:Ju,iridescence_pars_fragment:$u,opaque_fragment:Ku,packing:Qu,premultiplied_alpha_fragment:ju,project_vertex:ed,dithering_fragment:td,dithering_pars_fragment:nd,roughnessmap_fragment:id,roughnessmap_pars_fragment:rd,shadowmap_pars_fragment:sd,shadowmap_pars_vertex:od,shadowmap_vertex:ad,shadowmask_pars_fragment:xd,skinbase_vertex:cd,skinning_pars_vertex:ld,skinning_vertex:hd,skinnormal_vertex:ud,specularmap_fragment:dd,specularmap_pars_fragment:fd,tonemapping_fragment:pd,tonemapping_pars_fragment:md,transmission_fragment:Ed,transmission_pars_fragment:gd,uv_pars_fragment:Ad,uv_pars_vertex:vd,uv_vertex:Cd,worldpos_vertex:_d,background_vert:yd,background_frag:Bd,backgroundCube_vert:Md,backgroundCube_frag:Dd,cube_vert:Fd,cube_frag:wd,depth_vert:bd,depth_frag:Sd,distanceRGBA_vert:Td,distanceRGBA_frag:Pd,equirect_vert:Rd,equirect_frag:Id,linedashed_vert:kd,linedashed_frag:Ld,meshbasic_vert:Ud,meshbasic_frag:Nd,meshlambert_vert:Od,meshlambert_frag:zd,meshmatcap_vert:Vd,meshmatcap_frag:Hd,meshnormal_vert:Gd,meshnormal_frag:Wd,meshphong_vert:Xd,meshphong_frag:Yd,meshphysical_vert:qd,meshphysical_frag:Zd,meshtoon_vert:Jd,meshtoon_frag:$d,points_vert:Kd,points_frag:Qd,shadow_vert:jd,shadow_frag:ef,sprite_vert:tf,sprite_frag:nf},de={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},sn={basic:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Oe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Bt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Bt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Oe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Bt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Bt([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Bt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Bt([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Bt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Bt([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Bt([de.common,de.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Bt([de.lights,de.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};sn.physical={uniforms:Bt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var es={r:0,b:0,g:0},ri=new xn,rf=new ot;function sf(i,e,t,n,r,s,o){let a=new Oe(0),c=s===!0?0:1,x,l,h=null,u=0,f=null;function A(C){let v=C.isScene===!0?C.background:null;return v&&v.isTexture&&(v=(C.backgroundBlurriness>0?t:e).get(v)),v}function _(C){let v=!1,m=A(C);m===null?d(a,c):m&&m.isColor&&(d(m,1),v=!0);let B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(C,v){let m=A(v);m&&(m.isCubeTexture||m.mapping===Hs)?(l===void 0&&(l=new ht(new Rt(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:$i(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(B,y,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),ri.copy(v.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),l.material.uniforms.envMap.value=m,l.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(rf.makeRotationFromEuler(ri)),l.material.toneMapped=Ze.getTransfer(m.colorSpace)!==je,(h!==m||u!==m.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=m,u=m.version,f=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(x===void 0&&(x=new ht(new Ki(2,2),new cn({name:"BackgroundMaterial",uniforms:$i(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),Object.defineProperty(x.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(x)),x.material.uniforms.t2D.value=m,x.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,x.material.toneMapped=Ze.getTransfer(m.colorSpace)!==je,m.matrixAutoUpdate===!0&&m.updateMatrix(),x.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||u!==m.version||f!==i.toneMapping)&&(x.material.needsUpdate=!0,h=m,u=m.version,f=i.toneMapping),x.layers.enableAll(),C.unshift(x,x.geometry,x.material,0,0,null))}function d(C,v){C.getRGB(es,Ec(i)),n.buffers.color.setClear(es.r,es.g,es.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(C,v=1){a.set(C),c=v,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,d(a,c)},render:_,addToRenderList:E}}function of(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,o=!1;function a(g,w,S,P,L){let N=!1,H=h(P,S,w);s!==H&&(s=H,x(s.object)),N=f(g,P,S,L),N&&A(g,P,S,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,m(g,w,S,P),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return i.createVertexArray()}function x(g){return i.bindVertexArray(g)}function l(g){return i.deleteVertexArray(g)}function h(g,w,S){let P=S.wireframe===!0,L=n[g.id];L===void 0&&(L={},n[g.id]=L);let N=L[w.id];N===void 0&&(N={},L[w.id]=N);let H=N[P];return H===void 0&&(H=u(c()),N[P]=H),H}function u(g){let w=[],S=[],P=[];for(let L=0;L<t;L++)w[L]=0,S[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:S,attributeDivisors:P,object:g,attributes:{},index:null}}function f(g,w,S,P){let L=s.attributes,N=w.attributes,H=0,j=S.getAttributes();for(let G in j)if(j[G].location>=0){let se=L[G],he=N[G];if(he===void 0&&(G==="instanceMatrix"&&g.instanceMatrix&&(he=g.instanceMatrix),G==="instanceColor"&&g.instanceColor&&(he=g.instanceColor)),se===void 0||se.attribute!==he||he&&se.data!==he.data)return!0;H++}return s.attributesNum!==H||s.index!==P}function A(g,w,S,P){let L={},N=w.attributes,H=0,j=S.getAttributes();for(let G in j)if(j[G].location>=0){let se=N[G];se===void 0&&(G==="instanceMatrix"&&g.instanceMatrix&&(se=g.instanceMatrix),G==="instanceColor"&&g.instanceColor&&(se=g.instanceColor));let he={};he.attribute=se,se&&se.data&&(he.data=se.data),L[G]=he,H++}s.attributes=L,s.attributesNum=H,s.index=P}function _(){let g=s.newAttributes;for(let w=0,S=g.length;w<S;w++)g[w]=0}function E(g){d(g,0)}function d(g,w){let S=s.newAttributes,P=s.enabledAttributes,L=s.attributeDivisors;S[g]=1,P[g]===0&&(i.enableVertexAttribArray(g),P[g]=1),L[g]!==w&&(i.vertexAttribDivisor(g,w),L[g]=w)}function C(){let g=s.newAttributes,w=s.enabledAttributes;for(let S=0,P=w.length;S<P;S++)w[S]!==g[S]&&(i.disableVertexAttribArray(S),w[S]=0)}function v(g,w,S,P,L,N,H){H===!0?i.vertexAttribIPointer(g,w,S,L,N):i.vertexAttribPointer(g,w,S,P,L,N)}function m(g,w,S,P){_();let L=P.attributes,N=S.getAttributes(),H=w.defaultAttributeValues;for(let j in N){let G=N[j];if(G.location>=0){let $=L[j];if($===void 0&&(j==="instanceMatrix"&&g.instanceMatrix&&($=g.instanceMatrix),j==="instanceColor"&&g.instanceColor&&($=g.instanceColor)),$!==void 0){let se=$.normalized,he=$.itemSize,le=e.get($);if(le===void 0)continue;let ze=le.buffer,K=le.type,R=le.bytesPerElement,V=K===i.INT||K===i.UNSIGNED_INT||$.gpuType===c0;if($.isInterleavedBufferAttribute){let I=$.data,X=I.stride,Y=$.offset;if(I.isInstancedInterleavedBuffer){for(let te=0;te<G.locationSize;te++)d(G.location+te,I.meshPerAttribute);g.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let te=0;te<G.locationSize;te++)E(G.location+te);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let te=0;te<G.locationSize;te++)v(G.location+te,he/G.locationSize,K,se,X*R,(Y+he/G.locationSize*te)*R,V)}else{if($.isInstancedBufferAttribute){for(let I=0;I<G.locationSize;I++)d(G.location+I,$.meshPerAttribute);g.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let I=0;I<G.locationSize;I++)E(G.location+I);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let I=0;I<G.locationSize;I++)v(G.location+I,he/G.locationSize,K,se,he*R,he/G.locationSize*I*R,V)}}else if(H!==void 0){let se=H[j];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(G.location,se);break;case 3:i.vertexAttrib3fv(G.location,se);break;case 4:i.vertexAttrib4fv(G.location,se);break;default:i.vertexAttrib1fv(G.location,se)}}}}C()}function B(){M();for(let g in n){let w=n[g];for(let S in w){let P=w[S];for(let L in P)l(P[L].object),delete P[L];delete w[S]}delete n[g]}}function y(g){if(n[g.id]===void 0)return;let w=n[g.id];for(let S in w){let P=w[S];for(let L in P)l(P[L].object),delete P[L];delete w[S]}delete n[g.id]}function D(g){for(let w in n){let S=n[w];if(S[g.id]===void 0)continue;let P=S[g.id];for(let L in P)l(P[L].object),delete P[L];delete S[g.id]}}function M(){p(),o=!0,s!==r&&(s=r,x(s.object))}function p(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:M,resetDefaultState:p,dispose:B,releaseStatesOfGeometry:y,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:E,disableUnusedAttributes:C}}function af(i,e,t){let n;function r(x){n=x}function s(x,l){i.drawArrays(n,x,l),t.update(l,n,1)}function o(x,l,h){h!==0&&(i.drawArraysInstanced(n,x,l,h),t.update(l,n,h))}function a(x,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,x,0,l,0,h);let f=0;for(let A=0;A<h;A++)f+=l[A];t.update(f,n,1)}function c(x,l,h,u){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let A=0;A<x.length;A++)o(x[A],l[A],u[A]);else{f.multiDrawArraysInstancedWEBGL(n,x,0,l,0,u,0,h);let A=0;for(let _=0;_<h;_++)A+=l[_]*u[_];t.update(A,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function xf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Qt&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let M=D===yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Mn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Cn&&!M)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let x=t.precision!==void 0?t.precision:"highp",l=c(x);l!==x&&(console.warn("THREE.WebGLRenderer:",x,"not supported, using",l,"instead."),x=l);let h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),E=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),m=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=A>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:x,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:A,maxTextureSize:_,maxCubemapSize:E,maxAttributes:d,maxVertexUniforms:C,maxVaryings:v,maxFragmentUniforms:m,vertexTextures:B,maxSamples:y}}function cf(i){let e=this,t=null,n=0,r=!1,s=!1,o=new An,a=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let f=h.length!==0||u||n!==0||r;return r=u,n=h.length,f},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,f){let A=h.clippingPlanes,_=h.clipIntersection,E=h.clipShadows,d=i.get(h);if(!r||A===null||A.length===0||s&&!E)s?l(null):x();else{let C=s?0:n,v=C*4,m=d.clippingState||null;c.value=m,m=l(A,u,v,f);for(let B=0;B!==v;++B)m[B]=t[B];d.clippingState=m,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=C}};function x(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(h,u,f,A){let _=h!==null?h.length:0,E=null;if(_!==0){if(E=c.value,A!==!0||E===null){let d=f+_*4,C=u.matrixWorldInverse;a.getNormalMatrix(C),(E===null||E.length<d)&&(E=new Float32Array(d));for(let v=0,m=f;v!==_;++v,m+=4)o.copy(h[v]).applyMatrix4(C,a),o.normal.toArray(E,m),E[m+3]=o.constant}c.value=E,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,E}}function lf(i){let e=new WeakMap;function t(o,a){return a===$o?o.mapping=Xi:a===Ko&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===$o||a===Ko)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let x=new Ra(c.height);return x.fromEquirectangularTexture(i,o),e.set(o,x),o.addEventListener("dispose",r),t(x.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ms=class extends ys{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let x=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=x*this.view.offsetX,o=s+x*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Oi=4,yx=[.125,.215,.35,.446,.526,.582],xi=20,Po=new Ms,Bx=new Oe,Ro=null,Io=0,ko=0,Lo=!1,oi=(1+Math.sqrt(5))/2,Ii=1/oi,Mx=[new W(-oi,Ii,0),new W(oi,Ii,0),new W(-Ii,0,oi),new W(Ii,0,oi),new W(0,oi,-Ii),new W(0,oi,Ii),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],Ds=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ro=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ro,Io,ko),this._renderer.xr.enabled=Lo,e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ro=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:yr,format:Qt,colorSpace:ji,depthBuffer:!1},r=Dx(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dx(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hf(s)),this._blurMaterial=uf(s,e,t)}return r}_compileMaterial(e){let t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,Po)}_sceneToCubeUV(e,t,n,r){let a=new Mt(90,1,t,n),c=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(Bx),l.toneMapping=Wn,l.autoClear=!1;let f=new Jn({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),A=new ht(new Rt,f),_=!1,E=e.background;E?E.isColor&&(f.color.copy(E),e.background=null,_=!0):(f.color.copy(Bx),_=!0);for(let d=0;d<6;d++){let C=d%3;C===0?(a.up.set(0,c[d],0),a.lookAt(x[d],0,0)):C===1?(a.up.set(0,0,c[d]),a.lookAt(0,x[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,x[d]));let v=this._cubeSize;ts(r,C*v,d>2?v:0,v,v),l.setRenderTarget(r),_&&l.render(A,a),l.render(e,a)}A.geometry.dispose(),A.material.dispose(),l.toneMapping=u,l.autoClear=h,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Xi||e.mapping===Yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fx());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;ts(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Po)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mx[(r-s-1)%Mx.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,x=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,h=new ht(this._lodPlanes[r],x),u=x.uniforms,f=this._sizeLods[n]-1,A=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*xi-1),_=s/A,E=isFinite(s)?1+Math.floor(l*_):xi;E>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${xi}`);let d=[],C=0;for(let D=0;D<xi;++D){let M=D/_,p=Math.exp(-M*M/2);d.push(p),D===0?C+=p:D<E&&(C+=2*p)}for(let D=0;D<d.length;D++)d[D]=d[D]/C;u.envMap.value=e.texture,u.samples.value=E,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=A,u.mipInt.value=v-n;let m=this._sizeLods[r],B=3*m*(r>v-Oi?r-v+Oi:0),y=4*(this._cubeSize-m);ts(t,B,y,3*m,2*m),c.setRenderTarget(t),c.render(h,Po)}};function hf(i){let e=[],t=[],n=[],r=i,s=i-Oi+1+yx.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Oi?c=yx[o-i+Oi-1]:o===0&&(c=0),n.push(c);let x=1/(a-2),l=-x,h=1+x,u=[l,l,h,l,h,h,l,l,h,h,l,h],f=6,A=6,_=3,E=2,d=1,C=new Float32Array(_*A*f),v=new Float32Array(E*A*f),m=new Float32Array(d*A*f);for(let y=0;y<f;y++){let D=y%3*2/3-1,M=y>2?0:-1,p=[D,M,0,D+2/3,M,0,D+2/3,M+1,0,D,M,0,D+2/3,M+1,0,D,M+1,0];C.set(p,_*A*y),v.set(u,E*A*y);let g=[y,y,y,y,y,y];m.set(g,d*A*y)}let B=new en;B.setAttribute("position",new Ot(C,_)),B.setAttribute("uv",new Ot(v,E)),B.setAttribute("faceIndex",new Ot(m,d)),e.push(B),r>Oi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dx(i,e,t){let n=new Dn(i,e,t);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ts(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function uf(i,e,t){let n=new Float32Array(xi),r=new W(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:p0(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Fx(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:p0(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function wx(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:p0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function p0(){return`

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
	`}function df(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,x=c===$o||c===Ko,l=c===Xi||c===Yi;if(x||l){let h=e.get(a),u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Ds(i)),h=x?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return x&&f&&f.height>0||l&&f&&r(f)?(t===null&&(t=new Ds(i)),h=x?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0,x=6;for(let l=0;l<x;l++)a[l]!==void 0&&c++;return c===x}function s(a){let c=a.target;c.removeEventListener("dispose",s);let x=e.get(c);x!==void 0&&(e.delete(c),x.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ff(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function pf(i,e,t,n){let r={},s=new WeakMap;function o(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let A in u.attributes)e.remove(u.attributes[A]);for(let A in u.morphAttributes){let _=u.morphAttributes[A];for(let E=0,d=_.length;E<d;E++)e.remove(_[E])}u.removeEventListener("dispose",o),delete r[u.id];let f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(h){let u=h.attributes;for(let A in u)e.update(u[A],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let A in f){let _=f[A];for(let E=0,d=_.length;E<d;E++)e.update(_[E],i.ARRAY_BUFFER)}}function x(h){let u=[],f=h.index,A=h.attributes.position,_=0;if(f!==null){let C=f.array;_=f.version;for(let v=0,m=C.length;v<m;v+=3){let B=C[v+0],y=C[v+1],D=C[v+2];u.push(B,y,y,D,D,B)}}else if(A!==void 0){let C=A.array;_=A.version;for(let v=0,m=C.length/3-1;v<m;v+=3){let B=v+0,y=v+1,D=v+2;u.push(B,y,y,D,D,B)}}else return;let E=new(pc(u)?_s:Cs)(u,1);E.version=_;let d=s.get(h);d&&e.remove(d),s.set(h,E)}function l(h){let u=s.get(h);if(u){let f=h.index;f!==null&&u.version<f.version&&x(h)}else x(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:l}}function mf(i,e,t){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,s,u*o),t.update(f,n,1)}function x(u,f,A){A!==0&&(i.drawElementsInstanced(n,f,s,u*o,A),t.update(f,n,A))}function l(u,f,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,A);let E=0;for(let d=0;d<A;d++)E+=f[d];t.update(E,n,1)}function h(u,f,A,_){if(A===0)return;let E=e.get("WEBGL_multi_draw");if(E===null)for(let d=0;d<u.length;d++)x(u[d]/o,f[d],_[d]);else{E.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,_,0,A);let d=0;for(let C=0;C<A;C++)d+=f[C]*_[C];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=x,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function Ef(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function gf(i,e,t){let n=new WeakMap,r=new ct;function s(o,a,c){let x=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=n.get(a);if(u===void 0||u.count!==h){let p=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,A=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,E=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],v=0;f===!0&&(v=1),A===!0&&(v=2),_===!0&&(v=3);let m=a.attributes.position.count*v,B=1;m>e.maxTextureSize&&(B=Math.ceil(m/e.maxTextureSize),m=e.maxTextureSize);let y=new Float32Array(m*B*4*h),D=new gs(y,m,B,h);D.type=Cn,D.needsUpdate=!0;let M=v*4;for(let g=0;g<h;g++){let w=E[g],S=d[g],P=C[g],L=m*B*4*g;for(let N=0;N<w.count;N++){let H=N*M;f===!0&&(r.fromBufferAttribute(w,N),y[L+H+0]=r.x,y[L+H+1]=r.y,y[L+H+2]=r.z,y[L+H+3]=0),A===!0&&(r.fromBufferAttribute(S,N),y[L+H+4]=r.x,y[L+H+5]=r.y,y[L+H+6]=r.z,y[L+H+7]=0),_===!0&&(r.fromBufferAttribute(P,N),y[L+H+8]=r.x,y[L+H+9]=r.y,y[L+H+10]=r.z,y[L+H+11]=P.itemSize===4?r.w:1)}}u={count:h,texture:D,size:new We(m,B)},n.set(a,u),a.addEventListener("dispose",p)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<x.length;_++)f+=x[_];let A=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",A),c.getUniforms().setValue(i,"morphTargetInfluences",x)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Af(i,e,t,n){let r=new WeakMap;function s(c){let x=n.render.frame,l=c.geometry,h=e.get(c,l);if(r.get(h)!==x&&(e.update(h),r.set(h,x)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==x&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,x))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==x&&(u.update(),r.set(u,x))}return h}function o(){r=new WeakMap}function a(c){let x=c.target;x.removeEventListener("dispose",a),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:s,dispose:o}}var Fs=class extends zt{constructor(e,t,n,r,s,o,a,c,x,l=Vi){if(l!==Vi&&l!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Vi&&(n=hi),n===void 0&&l===Zi&&(n=qi),super(null,r,s,o,a,c,l,n,x),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ac=new zt,bx=new Fs(1,1),vc=new gs,Cc=new Ta,_c=new Bs,Sx=[],Tx=[],Px=new Float32Array(16),Rx=new Float32Array(9),Ix=new Float32Array(4);function er(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Sx[r];if(s===void 0&&(s=new Float32Array(r),Sx[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ws(i,e){let t=Tx[e];t===void 0&&(t=new Int32Array(e),Tx[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function _f(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function yf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function Bf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Ix.set(n),i.uniformMatrix2fv(this.addr,!1,Ix),ft(t,n)}}function Mf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Rx.set(n),i.uniformMatrix3fv(this.addr,!1,Rx),ft(t,n)}}function Df(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Px.set(n),i.uniformMatrix4fv(this.addr,!1,Px),ft(t,n)}}function Ff(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function bf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function Sf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function Tf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Pf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function Rf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function If(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function kf(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(bx.compareFunction=fc,s=bx):s=Ac,t.setTexture2D(e||s,r)}function Lf(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Cc,r)}function Uf(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||_c,r)}function Nf(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||vc,r)}function Of(i){switch(i){case 5126:return vf;case 35664:return Cf;case 35665:return _f;case 35666:return yf;case 35674:return Bf;case 35675:return Mf;case 35676:return Df;case 5124:case 35670:return Ff;case 35667:case 35671:return wf;case 35668:case 35672:return bf;case 35669:case 35673:return Sf;case 5125:return Tf;case 36294:return Pf;case 36295:return Rf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return Lf;case 35680:case 36300:case 36308:case 36293:return Uf;case 36289:case 36303:case 36311:case 36292:return Nf}}function zf(i,e){i.uniform1fv(this.addr,e)}function Vf(i,e){let t=er(e,this.size,2);i.uniform2fv(this.addr,t)}function Hf(i,e){let t=er(e,this.size,3);i.uniform3fv(this.addr,t)}function Gf(i,e){let t=er(e,this.size,4);i.uniform4fv(this.addr,t)}function Wf(i,e){let t=er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xf(i,e){let t=er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Yf(i,e){let t=er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qf(i,e){i.uniform1iv(this.addr,e)}function Zf(i,e){i.uniform2iv(this.addr,e)}function Jf(i,e){i.uniform3iv(this.addr,e)}function $f(i,e){i.uniform4iv(this.addr,e)}function Kf(i,e){i.uniform1uiv(this.addr,e)}function Qf(i,e){i.uniform2uiv(this.addr,e)}function jf(i,e){i.uniform3uiv(this.addr,e)}function ep(i,e){i.uniform4uiv(this.addr,e)}function tp(i,e,t){let n=this.cache,r=e.length,s=Ws(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ac,s[o])}function np(i,e,t){let n=this.cache,r=e.length,s=Ws(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Cc,s[o])}function ip(i,e,t){let n=this.cache,r=e.length,s=Ws(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||_c,s[o])}function rp(i,e,t){let n=this.cache,r=e.length,s=Ws(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||vc,s[o])}function sp(i){switch(i){case 5126:return zf;case 35664:return Vf;case 35665:return Hf;case 35666:return Gf;case 35674:return Wf;case 35675:return Xf;case 35676:return Yf;case 5124:case 35670:return qf;case 35667:case 35671:return Zf;case 35668:case 35672:return Jf;case 35669:case 35673:return $f;case 5125:return Kf;case 36294:return Qf;case 36295:return jf;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return np;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return rp}}var Ia=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Of(t.type)}},ka=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sp(t.type)}},La=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Uo=/(\w+)(\])?(\[|\.)?/g;function kx(i,e){i.seq.push(e),i.map[e.id]=e}function op(i,e,t){let n=i.name,r=n.length;for(Uo.lastIndex=0;;){let s=Uo.exec(n),o=Uo.lastIndex,a=s[1],c=s[2]==="]",x=s[3];if(c&&(a=a|0),x===void 0||x==="["&&o+2===r){kx(t,x===void 0?new Ia(a,i,e):new ka(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new La(a),kx(t,h)),t=h}}}var Gi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);op(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Lx(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ap=37297,xp=0;function cp(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ux=new Ne;function lp(i){Ze._getMatrix(Ux,Ze.workingColorSpace,i);let e=`mat3( ${Ux.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case Gs:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Nx(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+cp(i.getShaderSource(e),o)}else return r}function hp(i,e){let t=lp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function up(i,e){let t;switch(e){case Ll:t="Linear";break;case Ul:t="Reinhard";break;case Nl:t="Cineon";break;case Ol:t="ACESFilmic";break;case Vl:t="AgX";break;case Hl:t="Neutral";break;case zl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ns=new W;function dp(){Ze.getLuminanceCoefficients(ns);let i=ns.x.toFixed(4),e=ns.y.toFixed(4),t=ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function pp(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Er(i){return i!==""}function Ox(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zx(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(i){return i.replace(Ep,Ap)}var gp=new Map;function Ap(i,e){let t=He[e];if(t===void 0){let n=gp.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ua(t)}var vp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vx(i){return i.replace(vp,Cp)}function Cp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hx(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _p(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function yp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case Yi:e="ENVMAP_TYPE_CUBE";break;case Hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function Mp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case x0:e="ENVMAP_BLENDING_MULTIPLY";break;case Il:e="ENVMAP_BLENDING_MIX";break;case kl:e="ENVMAP_BLENDING_ADD";break}return e}function Dp(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Fp(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=_p(t),x=yp(t),l=Bp(t),h=Mp(t),u=Dp(t),f=fp(t),A=pp(s),_=r.createProgram(),E,d,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(E=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Er).join(`
`),E.length>0&&(E+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Er).join(`
`),d.length>0&&(d+=`
`)):(E=[Hx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),d=[Hx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?He.tonemapping_pars_fragment:"",t.toneMapping!==Wn?up("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,hp("linearToOutputTexel",t.outputColorSpace),dp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),o=Ua(o),o=Ox(o,t),o=zx(o,t),a=Ua(a),a=Ox(a,t),a=zx(a,t),o=Vx(o),a=Vx(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,E=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,d=["#define varying in",t.glslVersion===nx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=C+E+o,m=C+d+a,B=Lx(r,r.VERTEX_SHADER,v),y=Lx(r,r.FRAGMENT_SHADER,m);r.attachShader(_,B),r.attachShader(_,y),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(w){if(i.debug.checkShaderErrors){let S=r.getProgramInfoLog(_).trim(),P=r.getShaderInfoLog(B).trim(),L=r.getShaderInfoLog(y).trim(),N=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,B,y);else{let j=Nx(r,B,"vertex"),G=Nx(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+S+`
`+j+`
`+G)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(P===""||L==="")&&(H=!1);H&&(w.diagnostics={runnable:N,programLog:S,vertexShader:{log:P,prefix:E},fragmentShader:{log:L,prefix:d}})}r.deleteShader(B),r.deleteShader(y),M=new Gi(r,_),p=mp(r,_)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let p;this.getAttributes=function(){return p===void 0&&D(this),p};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(_,ap)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=B,this.fragmentShader=y,this}var wp=0,Na=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Oa(e),t.set(e,n)),n}},Oa=class{constructor(e){this.id=wp++,this.code=e,this.usedTimes=0}};function bp(i,e,t,n,r,s,o){let a=new vs,c=new Na,x=new Set,l=[],h=r.logarithmicDepthBuffer,u=r.vertexTextures,f=r.precision,A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(p){return x.add(p),p===0?"uv":`uv${p}`}function E(p,g,w,S,P){let L=S.fog,N=P.geometry,H=p.isMeshStandardMaterial?S.environment:null,j=(p.isMeshStandardMaterial?t:e).get(p.envMap||H),G=j&&j.mapping===Hs?j.image.height:null,$=A[p.type];p.precision!==null&&(f=r.getMaxPrecision(p.precision),f!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",f,"instead."));let se=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,he=se!==void 0?se.length:0,le=0;N.morphAttributes.position!==void 0&&(le=1),N.morphAttributes.normal!==void 0&&(le=2),N.morphAttributes.color!==void 0&&(le=3);let ze,K,R,V;if($){let Qe=sn[$];ze=Qe.vertexShader,K=Qe.fragmentShader}else ze=p.vertexShader,K=p.fragmentShader,c.update(p),R=c.getVertexShaderID(p),V=c.getFragmentShaderID(p);let I=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),Y=P.isInstancedMesh===!0,te=P.isBatchedMesh===!0,ue=!!p.map,ae=!!p.matcap,be=!!j,k=!!p.aoMap,_e=!!p.lightMap,Se=!!p.bumpMap,ye=!!p.normalMap,Pe=!!p.displacementMap,Ge=!!p.emissiveMap,Te=!!p.metalnessMap,T=!!p.roughnessMap,F=p.anisotropy>0,q=p.clearcoat>0,ne=p.dispersion>0,re=p.iridescence>0,ee=p.sheen>0,Fe=p.transmission>0,pe=F&&!!p.anisotropyMap,Ae=q&&!!p.clearcoatMap,qe=q&&!!p.clearcoatNormalMap,xe=q&&!!p.clearcoatRoughnessMap,ve=re&&!!p.iridescenceMap,Re=re&&!!p.iridescenceThicknessMap,Ie=ee&&!!p.sheenColorMap,Ce=ee&&!!p.sheenRoughnessMap,Ye=!!p.specularMap,Ve=!!p.specularColorMap,tt=!!p.specularIntensityMap,U=Fe&&!!p.transmissionMap,fe=Fe&&!!p.thicknessMap,Q=!!p.gradientMap,ie=!!p.alphaMap,ge=p.alphaTest>0,me=!!p.alphaHash,Le=!!p.extensions,at=Wn;p.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(at=i.toneMapping);let gt={shaderID:$,shaderType:p.type,shaderName:p.name,vertexShader:ze,fragmentShader:K,defines:p.defines,customVertexShaderID:R,customFragmentShaderID:V,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:f,batching:te,batchingColor:te&&P._colorsTexture!==null,instancing:Y,instancingColor:Y&&P.instanceColor!==null,instancingMorph:Y&&P.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:I===null?i.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ji,alphaToCoverage:!!p.alphaToCoverage,map:ue,matcap:ae,envMap:be,envMapMode:be&&j.mapping,envMapCubeUVHeight:G,aoMap:k,lightMap:_e,bumpMap:Se,normalMap:ye,displacementMap:u&&Pe,emissiveMap:Ge,normalMapObjectSpace:ye&&p.normalMapType===Yl,normalMapTangentSpace:ye&&p.normalMapType===dc,metalnessMap:Te,roughnessMap:T,anisotropy:F,anisotropyMap:pe,clearcoat:q,clearcoatMap:Ae,clearcoatNormalMap:qe,clearcoatRoughnessMap:xe,dispersion:ne,iridescence:re,iridescenceMap:ve,iridescenceThicknessMap:Re,sheen:ee,sheenColorMap:Ie,sheenRoughnessMap:Ce,specularMap:Ye,specularColorMap:Ve,specularIntensityMap:tt,transmission:Fe,transmissionMap:U,thicknessMap:fe,gradientMap:Q,opaque:p.transparent===!1&&p.blending===zi&&p.alphaToCoverage===!1,alphaMap:ie,alphaTest:ge,alphaHash:me,combine:p.combine,mapUv:ue&&_(p.map.channel),aoMapUv:k&&_(p.aoMap.channel),lightMapUv:_e&&_(p.lightMap.channel),bumpMapUv:Se&&_(p.bumpMap.channel),normalMapUv:ye&&_(p.normalMap.channel),displacementMapUv:Pe&&_(p.displacementMap.channel),emissiveMapUv:Ge&&_(p.emissiveMap.channel),metalnessMapUv:Te&&_(p.metalnessMap.channel),roughnessMapUv:T&&_(p.roughnessMap.channel),anisotropyMapUv:pe&&_(p.anisotropyMap.channel),clearcoatMapUv:Ae&&_(p.clearcoatMap.channel),clearcoatNormalMapUv:qe&&_(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(p.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(p.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(p.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(p.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(p.sheenRoughnessMap.channel),specularMapUv:Ye&&_(p.specularMap.channel),specularColorMapUv:Ve&&_(p.specularColorMap.channel),specularIntensityMapUv:tt&&_(p.specularIntensityMap.channel),transmissionMapUv:U&&_(p.transmissionMap.channel),thicknessMapUv:fe&&_(p.thicknessMap.channel),alphaMapUv:ie&&_(p.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ye||F),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!N.attributes.uv&&(ue||ie),fog:!!L,useFog:p.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:p.flatShading===!0,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:X,skinning:P.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:le,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:p.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:ue&&p.map.isVideoTexture===!0&&Ze.getTransfer(p.map.colorSpace)===je,decodeVideoTextureEmissive:Ge&&p.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(p.emissiveMap.colorSpace)===je,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===vn,flipSided:p.side===Pt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:Le&&p.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&p.extensions.multiDraw===!0||te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return gt.vertexUv1s=x.has(1),gt.vertexUv2s=x.has(2),gt.vertexUv3s=x.has(3),x.clear(),gt}function d(p){let g=[];if(p.shaderID?g.push(p.shaderID):(g.push(p.customVertexShaderID),g.push(p.customFragmentShaderID)),p.defines!==void 0)for(let w in p.defines)g.push(w),g.push(p.defines[w]);return p.isRawShaderMaterial===!1&&(C(g,p),v(g,p),g.push(i.outputColorSpace)),g.push(p.customProgramCacheKey),g.join()}function C(p,g){p.push(g.precision),p.push(g.outputColorSpace),p.push(g.envMapMode),p.push(g.envMapCubeUVHeight),p.push(g.mapUv),p.push(g.alphaMapUv),p.push(g.lightMapUv),p.push(g.aoMapUv),p.push(g.bumpMapUv),p.push(g.normalMapUv),p.push(g.displacementMapUv),p.push(g.emissiveMapUv),p.push(g.metalnessMapUv),p.push(g.roughnessMapUv),p.push(g.anisotropyMapUv),p.push(g.clearcoatMapUv),p.push(g.clearcoatNormalMapUv),p.push(g.clearcoatRoughnessMapUv),p.push(g.iridescenceMapUv),p.push(g.iridescenceThicknessMapUv),p.push(g.sheenColorMapUv),p.push(g.sheenRoughnessMapUv),p.push(g.specularMapUv),p.push(g.specularColorMapUv),p.push(g.specularIntensityMapUv),p.push(g.transmissionMapUv),p.push(g.thicknessMapUv),p.push(g.combine),p.push(g.fogExp2),p.push(g.sizeAttenuation),p.push(g.morphTargetsCount),p.push(g.morphAttributeCount),p.push(g.numDirLights),p.push(g.numPointLights),p.push(g.numSpotLights),p.push(g.numSpotLightMaps),p.push(g.numHemiLights),p.push(g.numRectAreaLights),p.push(g.numDirLightShadows),p.push(g.numPointLightShadows),p.push(g.numSpotLightShadows),p.push(g.numSpotLightShadowsWithMaps),p.push(g.numLightProbes),p.push(g.shadowMapType),p.push(g.toneMapping),p.push(g.numClippingPlanes),p.push(g.numClipIntersection),p.push(g.depthPacking)}function v(p,g){a.disableAll(),g.supportsVertexTextures&&a.enable(0),g.instancing&&a.enable(1),g.instancingColor&&a.enable(2),g.instancingMorph&&a.enable(3),g.matcap&&a.enable(4),g.envMap&&a.enable(5),g.normalMapObjectSpace&&a.enable(6),g.normalMapTangentSpace&&a.enable(7),g.clearcoat&&a.enable(8),g.iridescence&&a.enable(9),g.alphaTest&&a.enable(10),g.vertexColors&&a.enable(11),g.vertexAlphas&&a.enable(12),g.vertexUv1s&&a.enable(13),g.vertexUv2s&&a.enable(14),g.vertexUv3s&&a.enable(15),g.vertexTangents&&a.enable(16),g.anisotropy&&a.enable(17),g.alphaHash&&a.enable(18),g.batching&&a.enable(19),g.dispersion&&a.enable(20),g.batchingColor&&a.enable(21),p.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reverseDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),p.push(a.mask)}function m(p){let g=A[p.type],w;if(g){let S=sn[g];w=gh.clone(S.uniforms)}else w=p.uniforms;return w}function B(p,g){let w;for(let S=0,P=l.length;S<P;S++){let L=l[S];if(L.cacheKey===g){w=L,++w.usedTimes;break}}return w===void 0&&(w=new Fp(i,g,p,s),l.push(w)),w}function y(p){if(--p.usedTimes===0){let g=l.indexOf(p);l[g]=l[l.length-1],l.pop(),p.destroy()}}function D(p){c.remove(p)}function M(){c.dispose()}return{getParameters:E,getProgramCacheKey:d,getUniforms:m,acquireProgram:B,releaseProgram:y,releaseShaderCache:D,programs:l,dispose:M}}function Sp(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Tp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Gx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wx(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,u,f,A,_,E){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:u,material:f,groupOrder:A,renderOrder:h.renderOrder,z:_,group:E},i[e]=d):(d.id=h.id,d.object=h,d.geometry=u,d.material=f,d.groupOrder=A,d.renderOrder=h.renderOrder,d.z=_,d.group=E),e++,d}function a(h,u,f,A,_,E){let d=o(h,u,f,A,_,E);f.transmission>0?n.push(d):f.transparent===!0?r.push(d):t.push(d)}function c(h,u,f,A,_,E){let d=o(h,u,f,A,_,E);f.transmission>0?n.unshift(d):f.transparent===!0?r.unshift(d):t.unshift(d)}function x(h,u){t.length>1&&t.sort(h||Tp),n.length>1&&n.sort(u||Gx),r.length>1&&r.sort(u||Gx)}function l(){for(let h=e,u=i.length;h<u;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:l,sort:x}}function Pp(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Wx,i.set(n,[o])):r>=s.length?(o=new Wx,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Rp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Oe};break;case"SpotLight":t={position:new W,direction:new W,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function Ip(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var kp=0;function Lp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Up(i){let e=new Rp,t=Ip(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let x=0;x<9;x++)n.probe.push(new W);let r=new W,s=new ot,o=new ot;function a(x){let l=0,h=0,u=0;for(let p=0;p<9;p++)n.probe[p].set(0,0,0);let f=0,A=0,_=0,E=0,d=0,C=0,v=0,m=0,B=0,y=0,D=0;x.sort(Lp);for(let p=0,g=x.length;p<g;p++){let w=x[p],S=w.color,P=w.intensity,L=w.distance,N=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)l+=S.r*P,h+=S.g*P,u+=S.b*P;else if(w.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(w.sh.coefficients[H],P);D++}else if(w.isDirectionalLight){let H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let j=w.shadow,G=t.get(w);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=w.shadow.matrix,C++}n.directional[f]=H,f++}else if(w.isSpotLight){let H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(S).multiplyScalar(P),H.distance=L,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,n.spot[_]=H;let j=w.shadow;if(w.map&&(n.spotLightMap[B]=w.map,B++,j.updateMatrices(w),w.castShadow&&y++),n.spotLightMatrix[_]=j.matrix,w.castShadow){let G=t.get(w);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=N,m++}_++}else if(w.isRectAreaLight){let H=e.get(w);H.color.copy(S).multiplyScalar(P),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),n.rectArea[E]=H,E++}else if(w.isPointLight){let H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){let j=w.shadow,G=t.get(w);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[A]=G,n.pointShadowMap[A]=N,n.pointShadowMatrix[A]=w.shadow.matrix,v++}n.point[A]=H,A++}else if(w.isHemisphereLight){let H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(P),H.groundColor.copy(w.groundColor).multiplyScalar(P),n.hemi[d]=H,d++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=h,n.ambient[2]=u;let M=n.hash;(M.directionalLength!==f||M.pointLength!==A||M.spotLength!==_||M.rectAreaLength!==E||M.hemiLength!==d||M.numDirectionalShadows!==C||M.numPointShadows!==v||M.numSpotShadows!==m||M.numSpotMaps!==B||M.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=E,n.point.length=A,n.hemi.length=d,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=m,n.spotShadowMap.length=m,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=m+B-y,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=D,M.directionalLength=f,M.pointLength=A,M.spotLength=_,M.rectAreaLength=E,M.hemiLength=d,M.numDirectionalShadows=C,M.numPointShadows=v,M.numSpotShadows=m,M.numSpotMaps=B,M.numLightProbes=D,n.version=kp++)}function c(x,l){let h=0,u=0,f=0,A=0,_=0,E=l.matrixWorldInverse;for(let d=0,C=x.length;d<C;d++){let v=x[d];if(v.isDirectionalLight){let m=n.directional[h];m.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),m.direction.sub(r),m.direction.transformDirection(E),h++}else if(v.isSpotLight){let m=n.spot[f];m.position.setFromMatrixPosition(v.matrixWorld),m.position.applyMatrix4(E),m.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),m.direction.sub(r),m.direction.transformDirection(E),f++}else if(v.isRectAreaLight){let m=n.rectArea[A];m.position.setFromMatrixPosition(v.matrixWorld),m.position.applyMatrix4(E),o.identity(),s.copy(v.matrixWorld),s.premultiply(E),o.extractRotation(s),m.halfWidth.set(v.width*.5,0,0),m.halfHeight.set(0,v.height*.5,0),m.halfWidth.applyMatrix4(o),m.halfHeight.applyMatrix4(o),A++}else if(v.isPointLight){let m=n.point[u];m.position.setFromMatrixPosition(v.matrixWorld),m.position.applyMatrix4(E),u++}else if(v.isHemisphereLight){let m=n.hemi[_];m.direction.setFromMatrixPosition(v.matrixWorld),m.direction.transformDirection(E),_++}}}return{setup:a,setupView:c,state:n}}function Xx(i){let e=new Up(i),t=[],n=[];function r(l){x.camera=l,t.length=0,n.length=0}function s(l){t.push(l)}function o(l){n.push(l)}function a(){e.setup(t)}function c(l){e.setupView(t,l)}let x={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:x,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Np(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Xx(i),e.set(r,[a])):s>=o.length?(a=new Xx(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var za=class extends Fn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Va=class extends Fn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Op=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zp=`uniform sampler2D shadow_pass;
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
}`;function Vp(i,e,t){let n=new vr,r=new We,s=new We,o=new ct,a=new za({depthPacking:Xl}),c=new Va,x={},l=t.maxTextureSize,h={[Yn]:Pt,[Pt]:Yn,[vn]:vn},u=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Op,fragmentShader:zp}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let A=new en;A.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ht(A,u),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let d=this.type;this.render=function(y,D,M){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||y.length===0)return;let p=i.getRenderTarget(),g=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),S=i.state;S.setBlending(Gn),S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);let P=d!==gn&&this.type===gn,L=d===gn&&this.type!==gn;for(let N=0,H=y.length;N<H;N++){let j=y[N],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let $=G.getFrameExtents();if(r.multiply($),s.copy(G.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/$.x),r.x=s.x*$.x,G.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/$.y),r.y=s.y*$.y,G.mapSize.y=s.y)),G.map===null||P===!0||L===!0){let he=this.type!==gn?{minFilter:jt,magFilter:jt}:{};G.map!==null&&G.map.dispose(),G.map=new Dn(r.x,r.y,he),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let se=G.getViewportCount();for(let he=0;he<se;he++){let le=G.getViewport(he);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),S.viewport(o),G.updateMatrices(j,he),n=G.getFrustum(),m(D,M,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===gn&&C(G,M),G.needsUpdate=!1}d=this.type,E.needsUpdate=!1,i.setRenderTarget(p,g,w)};function C(y,D){let M=e.update(_);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Dn(r.x,r.y)),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(D,null,M,u,_,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(D,null,M,f,_,null)}function v(y,D,M,p){let g=null,w=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)g=w;else if(g=M.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let S=g.uuid,P=D.uuid,L=x[S];L===void 0&&(L={},x[S]=L);let N=L[P];N===void 0&&(N=g.clone(),L[P]=N,D.addEventListener("dispose",B)),g=N}if(g.visible=D.visible,g.wireframe=D.wireframe,p===gn?g.side=D.shadowSide!==null?D.shadowSide:D.side:g.side=D.shadowSide!==null?D.shadowSide:h[D.side],g.alphaMap=D.alphaMap,g.alphaTest=D.alphaTest,g.map=D.map,g.clipShadows=D.clipShadows,g.clippingPlanes=D.clippingPlanes,g.clipIntersection=D.clipIntersection,g.displacementMap=D.displacementMap,g.displacementScale=D.displacementScale,g.displacementBias=D.displacementBias,g.wireframeLinewidth=D.wireframeLinewidth,g.linewidth=D.linewidth,M.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let S=i.properties.get(g);S.light=M}return g}function m(y,D,M,p,g){if(y.visible===!1)return;if(y.layers.test(D.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&g===gn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);let P=e.update(y),L=y.material;if(Array.isArray(L)){let N=P.groups;for(let H=0,j=N.length;H<j;H++){let G=N[H],$=L[G.materialIndex];if($&&$.visible){let se=v(y,$,p,g);y.onBeforeShadow(i,y,D,M,P,se,G),i.renderBufferDirect(M,null,P,se,y,G),y.onAfterShadow(i,y,D,M,P,se,G)}}}else if(L.visible){let N=v(y,L,p,g);y.onBeforeShadow(i,y,D,M,P,N,null),i.renderBufferDirect(M,null,P,N,y,null),y.onAfterShadow(i,y,D,M,P,N,null)}}let S=y.children;for(let P=0,L=S.length;P<L;P++)m(S[P],D,M,p,g)}function B(y){y.target.removeEventListener("dispose",B);for(let M in x){let p=x[M],g=y.target.uuid;g in p&&(p[g].dispose(),delete p[g])}}}var Hp={[Go]:Wo,[Xo]:Zo,[Yo]:Jo,[Wi]:qo,[Wo]:Go,[Zo]:Xo,[Jo]:Yo,[qo]:Wi};function Gp(i,e){function t(){let U=!1,fe=new ct,Q=null,ie=new ct(0,0,0,0);return{setMask:function(ge){Q!==ge&&!U&&(i.colorMask(ge,ge,ge,ge),Q=ge)},setLocked:function(ge){U=ge},setClear:function(ge,me,Le,at,gt){gt===!0&&(ge*=at,me*=at,Le*=at),fe.set(ge,me,Le,at),ie.equals(fe)===!1&&(i.clearColor(ge,me,Le,at),ie.copy(fe))},reset:function(){U=!1,Q=null,ie.set(-1,0,0,0)}}}function n(){let U=!1,fe=!1,Q=null,ie=null,ge=null;return{setReversed:function(me){if(fe!==me){let Le=e.get("EXT_clip_control");fe?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);let at=ge;ge=null,this.setClear(at)}fe=me},getReversed:function(){return fe},setTest:function(me){me?I(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(me){Q!==me&&!U&&(i.depthMask(me),Q=me)},setFunc:function(me){if(fe&&(me=Hp[me]),ie!==me){switch(me){case Go:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case Yo:i.depthFunc(i.EQUAL);break;case qo:i.depthFunc(i.GEQUAL);break;case Zo:i.depthFunc(i.GREATER);break;case Jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=me}},setLocked:function(me){U=me},setClear:function(me){ge!==me&&(fe&&(me=1-me),i.clearDepth(me),ge=me)},reset:function(){U=!1,Q=null,ie=null,ge=null,fe=!1}}}function r(){let U=!1,fe=null,Q=null,ie=null,ge=null,me=null,Le=null,at=null,gt=null;return{setTest:function(Qe){U||(Qe?I(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(Qe){fe!==Qe&&!U&&(i.stencilMask(Qe),fe=Qe)},setFunc:function(Qe,Yt,hn){(Q!==Qe||ie!==Yt||ge!==hn)&&(i.stencilFunc(Qe,Yt,hn),Q=Qe,ie=Yt,ge=hn)},setOp:function(Qe,Yt,hn){(me!==Qe||Le!==Yt||at!==hn)&&(i.stencilOp(Qe,Yt,hn),me=Qe,Le=Yt,at=hn)},setLocked:function(Qe){U=Qe},setClear:function(Qe){gt!==Qe&&(i.clearStencil(Qe),gt=Qe)},reset:function(){U=!1,fe=null,Q=null,ie=null,ge=null,me=null,Le=null,at=null,gt=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,x=new WeakMap,l={},h={},u=new WeakMap,f=[],A=null,_=!1,E=null,d=null,C=null,v=null,m=null,B=null,y=null,D=new Oe(0,0,0),M=0,p=!1,g=null,w=null,S=null,P=null,L=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=j>=2);let $=null,se={},he=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),ze=new ct().fromArray(he),K=new ct().fromArray(le);function R(U,fe,Q,ie){let ge=new Uint8Array(4),me=i.createTexture();i.bindTexture(U,me),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<Q;Le++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(fe+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return me}let V={};V[i.TEXTURE_2D]=R(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=R(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=R(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=R(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),I(i.DEPTH_TEST),o.setFunc(Wi),Se(!1),ye(Z0),I(i.CULL_FACE),k(Gn);function I(U){l[U]!==!0&&(i.enable(U),l[U]=!0)}function X(U){l[U]!==!1&&(i.disable(U),l[U]=!1)}function Y(U,fe){return h[U]!==fe?(i.bindFramebuffer(U,fe),h[U]=fe,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=fe),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function te(U,fe){let Q=f,ie=!1;if(U){Q=u.get(fe),Q===void 0&&(Q=[],u.set(fe,Q));let ge=U.textures;if(Q.length!==ge.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let me=0,Le=ge.length;me<Le;me++)Q[me]=i.COLOR_ATTACHMENT0+me;Q.length=ge.length,ie=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ie=!0);ie&&i.drawBuffers(Q)}function ue(U){return A!==U?(i.useProgram(U),A=U,!0):!1}let ae={[ai]:i.FUNC_ADD,[El]:i.FUNC_SUBTRACT,[gl]:i.FUNC_REVERSE_SUBTRACT};ae[Al]=i.MIN,ae[vl]=i.MAX;let be={[Cl]:i.ZERO,[_l]:i.ONE,[yl]:i.SRC_COLOR,[Vo]:i.SRC_ALPHA,[bl]:i.SRC_ALPHA_SATURATE,[Fl]:i.DST_COLOR,[Ml]:i.DST_ALPHA,[Bl]:i.ONE_MINUS_SRC_COLOR,[Ho]:i.ONE_MINUS_SRC_ALPHA,[wl]:i.ONE_MINUS_DST_COLOR,[Dl]:i.ONE_MINUS_DST_ALPHA,[Sl]:i.CONSTANT_COLOR,[Tl]:i.ONE_MINUS_CONSTANT_COLOR,[Pl]:i.CONSTANT_ALPHA,[Rl]:i.ONE_MINUS_CONSTANT_ALPHA};function k(U,fe,Q,ie,ge,me,Le,at,gt,Qe){if(U===Gn){_===!0&&(X(i.BLEND),_=!1);return}if(_===!1&&(I(i.BLEND),_=!0),U!==ml){if(U!==E||Qe!==p){if((d!==ai||m!==ai)&&(i.blendEquation(i.FUNC_ADD),d=ai,m=ai),Qe)switch(U){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case J0:i.blendFunc(i.ONE,i.ONE);break;case $0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case K0:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case J0:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case K0:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}C=null,v=null,B=null,y=null,D.set(0,0,0),M=0,E=U,p=Qe}return}ge=ge||fe,me=me||Q,Le=Le||ie,(fe!==d||ge!==m)&&(i.blendEquationSeparate(ae[fe],ae[ge]),d=fe,m=ge),(Q!==C||ie!==v||me!==B||Le!==y)&&(i.blendFuncSeparate(be[Q],be[ie],be[me],be[Le]),C=Q,v=ie,B=me,y=Le),(at.equals(D)===!1||gt!==M)&&(i.blendColor(at.r,at.g,at.b,gt),D.copy(at),M=gt),E=U,p=!1}function _e(U,fe){U.side===vn?X(i.CULL_FACE):I(i.CULL_FACE);let Q=U.side===Pt;fe&&(Q=!Q),Se(Q),U.blending===zi&&U.transparent===!1?k(Gn):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let ie=U.stencilWrite;a.setTest(ie),ie&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ge(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?I(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(U){g!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),g=U)}function ye(U){U!==dl?(I(i.CULL_FACE),U!==w&&(U===Z0?i.cullFace(i.BACK):U===fl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),w=U}function Pe(U){U!==S&&(H&&i.lineWidth(U),S=U)}function Ge(U,fe,Q){U?(I(i.POLYGON_OFFSET_FILL),(P!==fe||L!==Q)&&(i.polygonOffset(fe,Q),P=fe,L=Q)):X(i.POLYGON_OFFSET_FILL)}function Te(U){U?I(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function T(U){U===void 0&&(U=i.TEXTURE0+N-1),$!==U&&(i.activeTexture(U),$=U)}function F(U,fe,Q){Q===void 0&&($===null?Q=i.TEXTURE0+N-1:Q=$);let ie=se[Q];ie===void 0&&(ie={type:void 0,texture:void 0},se[Q]=ie),(ie.type!==U||ie.texture!==fe)&&($!==Q&&(i.activeTexture(Q),$=Q),i.bindTexture(U,fe||V[U]),ie.type=U,ie.texture=fe)}function q(){let U=se[$];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){ze.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ze.copy(U))}function Ce(U){K.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),K.copy(U))}function Ye(U,fe){let Q=x.get(fe);Q===void 0&&(Q=new WeakMap,x.set(fe,Q));let ie=Q.get(U);ie===void 0&&(ie=i.getUniformBlockIndex(fe,U.name),Q.set(U,ie))}function Ve(U,fe){let ie=x.get(fe).get(U);c.get(fe)!==ie&&(i.uniformBlockBinding(fe,ie,U.__bindingPointIndex),c.set(fe,ie))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},$=null,se={},h={},u=new WeakMap,f=[],A=null,_=!1,E=null,d=null,C=null,v=null,m=null,B=null,y=null,D=new Oe(0,0,0),M=0,p=!1,g=null,w=null,S=null,P=null,L=null,ze.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:I,disable:X,bindFramebuffer:Y,drawBuffers:te,useProgram:ue,setBlending:k,setMaterial:_e,setFlipSided:Se,setCullFace:ye,setLineWidth:Pe,setPolygonOffset:Ge,setScissorTest:Te,activeTexture:T,bindTexture:F,unbindTexture:q,compressedTexImage2D:ne,compressedTexImage3D:re,texImage2D:ve,texImage3D:Re,updateUBOMapping:Ye,uniformBlockBinding:Ve,texStorage2D:qe,texStorage3D:xe,texSubImage2D:ee,texSubImage3D:Fe,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ae,scissor:Ie,viewport:Ce,reset:tt}}function Yx(i,e,t,n){let r=Wp(n);switch(t){case oc:return i*e;case xc:return i*e;case cc:return i*e*2;case lc:return i*e/r.components*r.byteLength;case u0:return i*e/r.components*r.byteLength;case hc:return i*e*2/r.components*r.byteLength;case d0:return i*e*2/r.components*r.byteLength;case ac:return i*e*3/r.components*r.byteLength;case Qt:return i*e*4/r.components*r.byteLength;case f0:return i*e*4/r.components*r.byteLength;case cs:case ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hs:case us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ta:case ia:return Math.max(i,16)*Math.max(e,8)/4;case ea:case na:return Math.max(i,8)*Math.max(e,8)/2;case ra:case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ca:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Aa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ds:case Ca:case _a:return Math.ceil(i/4)*Math.ceil(e/4)*16;case uc:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ba:case Ma:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wp(i){switch(i){case Mn:case ic:return{byteLength:1,components:1};case Ar:case rc:case yr:return{byteLength:2,components:1};case l0:case h0:return{byteLength:2,components:4};case hi:case c0:case Cn:return{byteLength:4,components:1};case sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Xp(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new We,l=new WeakMap,h,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(T,F){return f?new OffscreenCanvas(T,F):ms("canvas")}function _(T,F,q){let ne=1,re=Te(T);if((re.width>q||re.height>q)&&(ne=q/Math.max(re.width,re.height)),ne<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ee=Math.floor(ne*re.width),Fe=Math.floor(ne*re.height);h===void 0&&(h=A(ee,Fe));let pe=F?A(ee,Fe):h;return pe.width=ee,pe.height=Fe,pe.getContext("2d").drawImage(T,0,0,ee,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Fe+")."),pe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),T;return T}function E(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function C(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(T,F,q,ne,re=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=F;if(F===i.RED&&(q===i.FLOAT&&(ee=i.R32F),q===i.HALF_FLOAT&&(ee=i.R16F),q===i.UNSIGNED_BYTE&&(ee=i.R8)),F===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.R8UI),q===i.UNSIGNED_SHORT&&(ee=i.R16UI),q===i.UNSIGNED_INT&&(ee=i.R32UI),q===i.BYTE&&(ee=i.R8I),q===i.SHORT&&(ee=i.R16I),q===i.INT&&(ee=i.R32I)),F===i.RG&&(q===i.FLOAT&&(ee=i.RG32F),q===i.HALF_FLOAT&&(ee=i.RG16F),q===i.UNSIGNED_BYTE&&(ee=i.RG8)),F===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RG8UI),q===i.UNSIGNED_SHORT&&(ee=i.RG16UI),q===i.UNSIGNED_INT&&(ee=i.RG32UI),q===i.BYTE&&(ee=i.RG8I),q===i.SHORT&&(ee=i.RG16I),q===i.INT&&(ee=i.RG32I)),F===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),q===i.UNSIGNED_INT&&(ee=i.RGB32UI),q===i.BYTE&&(ee=i.RGB8I),q===i.SHORT&&(ee=i.RGB16I),q===i.INT&&(ee=i.RGB32I)),F===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),q===i.UNSIGNED_INT&&(ee=i.RGBA32UI),q===i.BYTE&&(ee=i.RGBA8I),q===i.SHORT&&(ee=i.RGBA16I),q===i.INT&&(ee=i.RGBA32I)),F===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),F===i.RGBA){let Fe=re?Gs:Ze.getTransfer(ne);q===i.FLOAT&&(ee=i.RGBA32F),q===i.HALF_FLOAT&&(ee=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ee=Fe===je?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function m(T,F){let q;return T?F===null||F===hi||F===qi?q=i.DEPTH24_STENCIL8:F===Cn?q=i.DEPTH32F_STENCIL8:F===Ar&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):F===null||F===hi||F===qi?q=i.DEPTH_COMPONENT24:F===Cn?q=i.DEPTH_COMPONENT32F:F===Ar&&(q=i.DEPTH_COMPONENT16),q}function B(T,F){return E(T)===!0||T.isFramebufferTexture&&T.minFilter!==jt&&T.minFilter!==an?Math.log2(Math.max(F.width,F.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?F.mipmaps.length:1}function y(T){let F=T.target;F.removeEventListener("dispose",y),M(F),F.isVideoTexture&&l.delete(F)}function D(T){let F=T.target;F.removeEventListener("dispose",D),g(F)}function M(T){let F=n.get(T);if(F.__webglInit===void 0)return;let q=T.source,ne=u.get(q);if(ne){let re=ne[F.__cacheKey];re.usedTimes--,re.usedTimes===0&&p(T),Object.keys(ne).length===0&&u.delete(q)}n.remove(T)}function p(T){let F=n.get(T);i.deleteTexture(F.__webglTexture);let q=T.source,ne=u.get(q);delete ne[F.__cacheKey],o.memory.textures--}function g(T){let F=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(F.__webglFramebuffer[ne]))for(let re=0;re<F.__webglFramebuffer[ne].length;re++)i.deleteFramebuffer(F.__webglFramebuffer[ne][re]);else i.deleteFramebuffer(F.__webglFramebuffer[ne]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ne])}else{if(Array.isArray(F.__webglFramebuffer))for(let ne=0;ne<F.__webglFramebuffer.length;ne++)i.deleteFramebuffer(F.__webglFramebuffer[ne]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ne=0;ne<F.__webglColorRenderbuffer.length;ne++)F.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ne]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let q=T.textures;for(let ne=0,re=q.length;ne<re;ne++){let ee=n.get(q[ne]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(q[ne])}n.remove(T)}let w=0;function S(){w=0}function P(){let T=w;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),w+=1,T}function L(T){let F=[];return F.push(T.wrapS),F.push(T.wrapT),F.push(T.wrapR||0),F.push(T.magFilter),F.push(T.minFilter),F.push(T.anisotropy),F.push(T.internalFormat),F.push(T.format),F.push(T.type),F.push(T.generateMipmaps),F.push(T.premultiplyAlpha),F.push(T.flipY),F.push(T.unpackAlignment),F.push(T.colorSpace),F.join()}function N(T,F){let q=n.get(T);if(T.isVideoTexture&&Pe(T),T.isRenderTargetTexture===!1&&T.version>0&&q.__version!==T.version){let ne=T.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(q,T,F);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+F)}function H(T,F){let q=n.get(T);if(T.version>0&&q.__version!==T.version){K(q,T,F);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+F)}function j(T,F){let q=n.get(T);if(T.version>0&&q.__version!==T.version){K(q,T,F);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+F)}function G(T,F){let q=n.get(T);if(T.version>0&&q.__version!==T.version){R(q,T,F);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+F)}let $={[Qo]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[jo]:i.MIRRORED_REPEAT},se={[jt]:i.NEAREST,[Gl]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[ao]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},he={[ql]:i.NEVER,[jl]:i.ALWAYS,[Zl]:i.LESS,[fc]:i.LEQUAL,[Jl]:i.EQUAL,[Ql]:i.GEQUAL,[$l]:i.GREATER,[Kl]:i.NOTEQUAL};function le(T,F){if(F.type===Cn&&e.has("OES_texture_float_linear")===!1&&(F.magFilter===an||F.magFilter===ao||F.magFilter===Lr||F.magFilter===li||F.minFilter===an||F.minFilter===ao||F.minFilter===Lr||F.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,$[F.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,$[F.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,$[F.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,se[F.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,se[F.minFilter]),F.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,he[F.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===jt||F.minFilter!==Lr&&F.minFilter!==li||F.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||n.get(F).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,r.getMaxAnisotropy())),n.get(F).__currentAnisotropy=F.anisotropy}}}function ze(T,F){let q=!1;T.__webglInit===void 0&&(T.__webglInit=!0,F.addEventListener("dispose",y));let ne=F.source,re=u.get(ne);re===void 0&&(re={},u.set(ne,re));let ee=L(F);if(ee!==T.__cacheKey){re[ee]===void 0&&(re[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[ee].usedTimes++;let Fe=re[T.__cacheKey];Fe!==void 0&&(re[T.__cacheKey].usedTimes--,Fe.usedTimes===0&&p(F)),T.__cacheKey=ee,T.__webglTexture=re[ee].texture}return q}function K(T,F,q){let ne=i.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),F.isData3DTexture&&(ne=i.TEXTURE_3D);let re=ze(T,F),ee=F.source;t.bindTexture(ne,T.__webglTexture,i.TEXTURE0+q);let Fe=n.get(ee);if(ee.version!==Fe.__version||re===!0){t.activeTexture(i.TEXTURE0+q);let pe=Ze.getPrimaries(Ze.workingColorSpace),Ae=F.colorSpace===Vn?null:Ze.getPrimaries(F.colorSpace),qe=F.colorSpace===Vn||pe===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,F.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,F.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let xe=_(F.image,!1,r.maxTextureSize);xe=Ge(F,xe);let ve=s.convert(F.format,F.colorSpace),Re=s.convert(F.type),Ie=v(F.internalFormat,ve,Re,F.colorSpace,F.isVideoTexture);le(ne,F);let Ce,Ye=F.mipmaps,Ve=F.isVideoTexture!==!0,tt=Fe.__version===void 0||re===!0,U=ee.dataReady,fe=B(F,xe);if(F.isDepthTexture)Ie=m(F.format===Zi,F.type),tt&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,Ie,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,Ie,xe.width,xe.height,0,ve,Re,null));else if(F.isDataTexture)if(Ye.length>0){Ve&&tt&&t.texStorage2D(i.TEXTURE_2D,fe,Ie,Ye[0].width,Ye[0].height);for(let Q=0,ie=Ye.length;Q<ie;Q++)Ce=Ye[Q],Ve?U&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ce.width,Ce.height,ve,Re,Ce.data):t.texImage2D(i.TEXTURE_2D,Q,Ie,Ce.width,Ce.height,0,ve,Re,Ce.data);F.generateMipmaps=!1}else Ve?(tt&&t.texStorage2D(i.TEXTURE_2D,fe,Ie,xe.width,xe.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe.width,xe.height,ve,Re,xe.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,xe.width,xe.height,0,ve,Re,xe.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){Ve&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Ie,Ye[0].width,Ye[0].height,xe.depth);for(let Q=0,ie=Ye.length;Q<ie;Q++)if(Ce=Ye[Q],F.format!==Qt)if(ve!==null)if(Ve){if(U)if(F.layerUpdates.size>0){let ge=Yx(Ce.width,Ce.height,F.format,F.type);for(let me of F.layerUpdates){let Le=Ce.data.subarray(me*ge/Ce.data.BYTES_PER_ELEMENT,(me+1)*ge/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,me,Ce.width,Ce.height,1,ve,Le)}F.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Ce.width,Ce.height,xe.depth,ve,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ie,Ce.width,Ce.height,xe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Ce.width,Ce.height,xe.depth,ve,Re,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ie,Ce.width,Ce.height,xe.depth,0,ve,Re,Ce.data)}else{Ve&&tt&&t.texStorage2D(i.TEXTURE_2D,fe,Ie,Ye[0].width,Ye[0].height);for(let Q=0,ie=Ye.length;Q<ie;Q++)Ce=Ye[Q],F.format!==Qt?ve!==null?Ve?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Ce.width,Ce.height,ve,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ie,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?U&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ce.width,Ce.height,ve,Re,Ce.data):t.texImage2D(i.TEXTURE_2D,Q,Ie,Ce.width,Ce.height,0,ve,Re,Ce.data)}else if(F.isDataArrayTexture)if(Ve){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Ie,xe.width,xe.height,xe.depth),U)if(F.layerUpdates.size>0){let Q=Yx(xe.width,xe.height,F.format,F.type);for(let ie of F.layerUpdates){let ge=xe.data.subarray(ie*Q/xe.data.BYTES_PER_ELEMENT,(ie+1)*Q/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,xe.width,xe.height,1,ve,Re,ge)}F.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,ve,Re,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,xe.width,xe.height,xe.depth,0,ve,Re,xe.data);else if(F.isData3DTexture)Ve?(tt&&t.texStorage3D(i.TEXTURE_3D,fe,Ie,xe.width,xe.height,xe.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,ve,Re,xe.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,xe.width,xe.height,xe.depth,0,ve,Re,xe.data);else if(F.isFramebufferTexture){if(tt)if(Ve)t.texStorage2D(i.TEXTURE_2D,fe,Ie,xe.width,xe.height);else{let Q=xe.width,ie=xe.height;for(let ge=0;ge<fe;ge++)t.texImage2D(i.TEXTURE_2D,ge,Ie,Q,ie,0,ve,Re,null),Q>>=1,ie>>=1}}else if(Ye.length>0){if(Ve&&tt){let Q=Te(Ye[0]);t.texStorage2D(i.TEXTURE_2D,fe,Ie,Q.width,Q.height)}for(let Q=0,ie=Ye.length;Q<ie;Q++)Ce=Ye[Q],Ve?U&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ve,Re,Ce):t.texImage2D(i.TEXTURE_2D,Q,Ie,ve,Re,Ce);F.generateMipmaps=!1}else if(Ve){if(tt){let Q=Te(xe);t.texStorage2D(i.TEXTURE_2D,fe,Ie,Q.width,Q.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Re,xe)}else t.texImage2D(i.TEXTURE_2D,0,Ie,ve,Re,xe);E(F)&&d(ne),Fe.__version=ee.version,F.onUpdate&&F.onUpdate(F)}T.__version=F.version}function R(T,F,q){if(F.image.length!==6)return;let ne=ze(T,F),re=F.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+q);let ee=n.get(re);if(re.version!==ee.__version||ne===!0){t.activeTexture(i.TEXTURE0+q);let Fe=Ze.getPrimaries(Ze.workingColorSpace),pe=F.colorSpace===Vn?null:Ze.getPrimaries(F.colorSpace),Ae=F.colorSpace===Vn||Fe===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,F.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,F.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let qe=F.isCompressedTexture||F.image[0].isCompressedTexture,xe=F.image[0]&&F.image[0].isDataTexture,ve=[];for(let ie=0;ie<6;ie++)!qe&&!xe?ve[ie]=_(F.image[ie],!0,r.maxCubemapSize):ve[ie]=xe?F.image[ie].image:F.image[ie],ve[ie]=Ge(F,ve[ie]);let Re=ve[0],Ie=s.convert(F.format,F.colorSpace),Ce=s.convert(F.type),Ye=v(F.internalFormat,Ie,Ce,F.colorSpace),Ve=F.isVideoTexture!==!0,tt=ee.__version===void 0||ne===!0,U=re.dataReady,fe=B(F,Re);le(i.TEXTURE_CUBE_MAP,F);let Q;if(qe){Ve&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ye,Re.width,Re.height);for(let ie=0;ie<6;ie++){Q=ve[ie].mipmaps;for(let ge=0;ge<Q.length;ge++){let me=Q[ge];F.format!==Qt?Ie!==null?Ve?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,0,0,me.width,me.height,Ie,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,Ye,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,0,0,me.width,me.height,Ie,Ce,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,Ye,me.width,me.height,0,Ie,Ce,me.data)}}}else{if(Q=F.mipmaps,Ve&&tt){Q.length>0&&fe++;let ie=Te(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ye,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(xe){Ve?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ve[ie].width,ve[ie].height,Ie,Ce,ve[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ye,ve[ie].width,ve[ie].height,0,Ie,Ce,ve[ie].data);for(let ge=0;ge<Q.length;ge++){let Le=Q[ge].image[ie].image;Ve?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,0,0,Le.width,Le.height,Ie,Ce,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,Ye,Le.width,Le.height,0,Ie,Ce,Le.data)}}else{Ve?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ie,Ce,ve[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ye,Ie,Ce,ve[ie]);for(let ge=0;ge<Q.length;ge++){let me=Q[ge];Ve?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,0,0,Ie,Ce,me.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,Ye,Ie,Ce,me.image[ie])}}}E(F)&&d(i.TEXTURE_CUBE_MAP),ee.__version=re.version,F.onUpdate&&F.onUpdate(F)}T.__version=F.version}function V(T,F,q,ne,re,ee){let Fe=s.convert(q.format,q.colorSpace),pe=s.convert(q.type),Ae=v(q.internalFormat,Fe,pe,q.colorSpace),qe=n.get(F),xe=n.get(q);if(xe.__renderTarget=F,!qe.__hasExternalTextures){let ve=Math.max(1,F.width>>ee),Re=Math.max(1,F.height>>ee);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ee,Ae,ve,Re,F.depth,0,Fe,pe,null):t.texImage2D(re,ee,Ae,ve,Re,0,Fe,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ye(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,re,xe.__webglTexture,0,Se(F)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,re,xe.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function I(T,F,q){if(i.bindRenderbuffer(i.RENDERBUFFER,T),F.depthBuffer){let ne=F.depthTexture,re=ne&&ne.isDepthTexture?ne.type:null,ee=m(F.stencilBuffer,re),Fe=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=Se(F);ye(F)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,ee,F.width,F.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ee,F.width,F.height):i.renderbufferStorage(i.RENDERBUFFER,ee,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,T)}else{let ne=F.textures;for(let re=0;re<ne.length;re++){let ee=ne[re],Fe=s.convert(ee.format,ee.colorSpace),pe=s.convert(ee.type),Ae=v(ee.internalFormat,Fe,pe,ee.colorSpace),qe=Se(F);q&&ye(F)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,Ae,F.width,F.height):ye(F)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,Ae,F.width,F.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,F.width,F.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(T,F){if(F&&F.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ne=n.get(F.depthTexture);ne.__renderTarget=F,(!ne.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),N(F.depthTexture,0);let re=ne.__webglTexture,ee=Se(F);if(F.depthTexture.format===Vi)ye(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(F.depthTexture.format===Zi)ye(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Y(T){let F=n.get(T),q=T.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==T.depthTexture){let ne=T.depthTexture;if(F.__depthDisposeCallback&&F.__depthDisposeCallback(),ne){let re=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,ne.removeEventListener("dispose",re)};ne.addEventListener("dispose",re),F.__depthDisposeCallback=re}F.__boundDepthTexture=ne}if(T.depthTexture&&!F.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");X(F.__webglFramebuffer,T)}else if(q){F.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer[ne]),F.__webglDepthbuffer[ne]===void 0)F.__webglDepthbuffer[ne]=i.createRenderbuffer(),I(F.__webglDepthbuffer[ne],T,!1);else{let re=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=F.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=i.createRenderbuffer(),I(F.__webglDepthbuffer,T,!1);else{let ne=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=F.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(T,F,q){let ne=n.get(T);F!==void 0&&V(ne.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Y(T)}function ue(T){let F=T.texture,q=n.get(T),ne=n.get(F);T.addEventListener("dispose",D);let re=T.textures,ee=T.isWebGLCubeRenderTarget===!0,Fe=re.length>1;if(Fe||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=F.version,o.memory.textures++),ee){q.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(F.mipmaps&&F.mipmaps.length>0){q.__webglFramebuffer[pe]=[];for(let Ae=0;Ae<F.mipmaps.length;Ae++)q.__webglFramebuffer[pe][Ae]=i.createFramebuffer()}else q.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){q.__webglFramebuffer=[];for(let pe=0;pe<F.mipmaps.length;pe++)q.__webglFramebuffer[pe]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let pe=0,Ae=re.length;pe<Ae;pe++){let qe=n.get(re[pe]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ye(T)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let pe=0;pe<re.length;pe++){let Ae=re[pe];q.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[pe]);let qe=s.convert(Ae.format,Ae.colorSpace),xe=s.convert(Ae.type),ve=v(Ae.internalFormat,qe,xe,Ae.colorSpace,T.isXRRenderTarget===!0),Re=Se(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ve,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,q.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),I(q.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),le(i.TEXTURE_CUBE_MAP,F);for(let pe=0;pe<6;pe++)if(F.mipmaps&&F.mipmaps.length>0)for(let Ae=0;Ae<F.mipmaps.length;Ae++)V(q.__webglFramebuffer[pe][Ae],T,F,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae);else V(q.__webglFramebuffer[pe],T,F,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);E(F)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let pe=0,Ae=re.length;pe<Ae;pe++){let qe=re[pe],xe=n.get(qe);t.bindTexture(i.TEXTURE_2D,xe.__webglTexture),le(i.TEXTURE_2D,qe),V(q.__webglFramebuffer,T,qe,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),E(qe)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ne.__webglTexture),le(pe,F),F.mipmaps&&F.mipmaps.length>0)for(let Ae=0;Ae<F.mipmaps.length;Ae++)V(q.__webglFramebuffer[Ae],T,F,i.COLOR_ATTACHMENT0,pe,Ae);else V(q.__webglFramebuffer,T,F,i.COLOR_ATTACHMENT0,pe,0);E(F)&&d(pe),t.unbindTexture()}T.depthBuffer&&Y(T)}function ae(T){let F=T.textures;for(let q=0,ne=F.length;q<ne;q++){let re=F[q];if(E(re)){let ee=C(T),Fe=n.get(re).__webglTexture;t.bindTexture(ee,Fe),d(ee),t.unbindTexture()}}}let be=[],k=[];function _e(T){if(T.samples>0){if(ye(T)===!1){let F=T.textures,q=T.width,ne=T.height,re=i.COLOR_BUFFER_BIT,ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(T),pe=F.length>1;if(pe)for(let Ae=0;Ae<F.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ae=0;Ae<F.length;Ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ae]);let qe=n.get(F[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,q,ne,0,0,q,ne,re,i.NEAREST),c===!0&&(be.length=0,k.length=0,be.push(i.COLOR_ATTACHMENT0+Ae),T.depthBuffer&&T.resolveDepthBuffer===!1&&(be.push(ee),k.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Ae=0;Ae<F.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ae]);let qe=n.get(F[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let F=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[F])}}}function Se(T){return Math.min(r.maxSamples,T.samples)}function ye(T){let F=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function Pe(T){let F=o.render.frame;l.get(T)!==F&&(l.set(T,F),T.update())}function Ge(T,F){let q=T.colorSpace,ne=T.format,re=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||q!==ji&&q!==Vn&&(Ze.getTransfer(q)===je?(ne!==Qt||re!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),F}function Te(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(x.width=T.naturalWidth||T.width,x.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(x.width=T.displayWidth,x.height=T.displayHeight):(x.width=T.width,x.height=T.height),x}this.allocateTextureUnit=P,this.resetTextureUnits=S,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=te,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=V,this.useMultisampledRTT=ye}function Yp(i,e){function t(n,r=Vn){let s,o=Ze.getTransfer(r);if(n===Mn)return i.UNSIGNED_BYTE;if(n===l0)return i.UNSIGNED_SHORT_4_4_4_4;if(n===h0)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return i.BYTE;if(n===rc)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===c0)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===yr)return i.HALF_FLOAT;if(n===oc)return i.ALPHA;if(n===ac)return i.RGB;if(n===Qt)return i.RGBA;if(n===xc)return i.LUMINANCE;if(n===cc)return i.LUMINANCE_ALPHA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===lc)return i.RED;if(n===u0)return i.RED_INTEGER;if(n===hc)return i.RG;if(n===d0)return i.RG_INTEGER;if(n===f0)return i.RGBA_INTEGER;if(n===cs||n===ls||n===hs||n===us)if(o===je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ls)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===us)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ea||n===ta||n===na||n===ia)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ea)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ta)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===na)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ia)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ra||n===sa||n===oa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ra||n===sa)return o===je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===oa)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===aa||n===xa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===Ea||n===ga||n===Aa||n===va)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===aa)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xa)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ca)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===la)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ha)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ua)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===da)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fa)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pa)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ma)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ea)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ga)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Aa)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===va)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ds||n===Ca||n===_a)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ds)return o===je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ca)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_a)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uc||n===ya||n===Ba||n===Ma)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ds)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ma)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ha=class extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},yn=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},qp={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,x=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(x&&e.hand){o=!0;for(let _ of e.hand.values()){let E=t.getJointPose(_,n),d=this._getHandJoint(x,_);E!==null&&(d.matrix.fromArray(E.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=E.radius),d.visible=E!==null}let l=x.joints["index-finger-tip"],h=x.joints["thumb-tip"],u=l.position.distanceTo(h.position),f=.02,A=.005;x.inputState.pinching&&u>f+A?(x.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!x.inputState.pinching&&u<=f-A&&(x.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),x!==null&&(x.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new yn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Zp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jp=`
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

}`,Ga=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new cn({vertexShader:Zp,fragmentShader:Jp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wa=class extends qn{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,x=null,l=null,h=null,u=null,f=null,A=null,_=new Ga,E=t.getContextAttributes(),d=null,C=null,v=[],m=[],B=new We,y=null,D=new Mt;D.viewport=new ct;let M=new Mt;M.viewport=new ct;let p=[D,M],g=new Ha,w=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let R=v[K];return R===void 0&&(R=new gr,v[K]=R),R.getTargetRaySpace()},this.getControllerGrip=function(K){let R=v[K];return R===void 0&&(R=new gr,v[K]=R),R.getGripSpace()},this.getHand=function(K){let R=v[K];return R===void 0&&(R=new gr,v[K]=R),R.getHandSpace()};function P(K){let R=m.indexOf(K.inputSource);if(R===-1)return;let V=v[R];V!==void 0&&(V.update(K.inputSource,K.frame,x||o),V.dispatchEvent({type:K.type,data:K.inputSource}))}function L(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",N);for(let K=0;K<v.length;K++){let R=m[K];R!==null&&(m[K]=null,v[K].disconnect(R))}w=null,S=null,_.reset(),e.setRenderTarget(d),f=null,u=null,h=null,r=null,C=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return x||o},this.setReferenceSpace=function(K){x=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return A},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",L),r.addEventListener("inputsourceschange",N),E.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){let R={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,R),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),C=new Dn(f.framebufferWidth,f.framebufferHeight,{format:Qt,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let R=null,V=null,I=null;E.depth&&(I=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,R=E.stencil?Zi:Vi,V=E.stencil?qi:hi);let X={colorFormat:t.RGBA8,depthFormat:I,scaleFactor:s};h=new XRWebGLBinding(r,t),u=h.createProjectionLayer(X),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),C=new Dn(u.textureWidth,u.textureHeight,{format:Qt,type:Mn,depthTexture:new Fs(u.textureWidth,u.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),x=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function N(K){for(let R=0;R<K.removed.length;R++){let V=K.removed[R],I=m.indexOf(V);I>=0&&(m[I]=null,v[I].disconnect(V))}for(let R=0;R<K.added.length;R++){let V=K.added[R],I=m.indexOf(V);if(I===-1){for(let Y=0;Y<v.length;Y++)if(Y>=m.length){m.push(V),I=Y;break}else if(m[Y]===null){m[Y]=V,I=Y;break}if(I===-1)break}let X=v[I];X&&X.connect(V)}}let H=new W,j=new W;function G(K,R,V){H.setFromMatrixPosition(R.matrixWorld),j.setFromMatrixPosition(V.matrixWorld);let I=H.distanceTo(j),X=R.projectionMatrix.elements,Y=V.projectionMatrix.elements,te=X[14]/(X[10]-1),ue=X[14]/(X[10]+1),ae=(X[9]+1)/X[5],be=(X[9]-1)/X[5],k=(X[8]-1)/X[0],_e=(Y[8]+1)/Y[0],Se=te*k,ye=te*_e,Pe=I/(-k+_e),Ge=Pe*-k;if(R.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ge),K.translateZ(Pe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),X[10]===-1)K.projectionMatrix.copy(R.projectionMatrix),K.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let Te=te+Pe,T=ue+Pe,F=Se-Ge,q=ye+(I-Ge),ne=ae*ue/T*Te,re=be*ue/T*Te;K.projectionMatrix.makePerspective(F,q,ne,re,Te,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function $(K,R){R===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(R.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let R=K.near,V=K.far;_.texture!==null&&(_.depthNear>0&&(R=_.depthNear),_.depthFar>0&&(V=_.depthFar)),g.near=M.near=D.near=R,g.far=M.far=D.far=V,(w!==g.near||S!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),w=g.near,S=g.far),D.layers.mask=K.layers.mask|2,M.layers.mask=K.layers.mask|4,g.layers.mask=D.layers.mask|M.layers.mask;let I=K.parent,X=g.cameras;$(g,I);for(let Y=0;Y<X.length;Y++)$(X[Y],I);X.length===2?G(g,D,M):g.projectionMatrix.copy(D.projectionMatrix),se(K,g,I)};function se(K,R,V){V===null?K.matrix.copy(R.matrixWorld):(K.matrix.copy(V.matrixWorld),K.matrix.invert(),K.matrix.multiply(R.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(R.projectionMatrix),K.projectionMatrixInverse.copy(R.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=wa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(g)};let he=null;function le(K,R){if(l=R.getViewerPose(x||o),A=R,l!==null){let V=l.views;f!==null&&(e.setRenderTargetFramebuffer(C,f.framebuffer),e.setRenderTarget(C));let I=!1;V.length!==g.cameras.length&&(g.cameras.length=0,I=!0);for(let Y=0;Y<V.length;Y++){let te=V[Y],ue=null;if(f!==null)ue=f.getViewport(te);else{let be=h.getViewSubImage(u,te);ue=be.viewport,Y===0&&(e.setRenderTargetTextures(C,be.colorTexture,u.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(C))}let ae=p[Y];ae===void 0&&(ae=new Mt,ae.layers.enable(Y),ae.viewport=new ct,p[Y]=ae),ae.matrix.fromArray(te.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(te.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(ue.x,ue.y,ue.width,ue.height),Y===0&&(g.matrix.copy(ae.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),I===!0&&g.cameras.push(ae)}let X=r.enabledFeatures;if(X&&X.includes("depth-sensing")){let Y=h.getDepthInformation(V[0]);Y&&Y.isValid&&Y.texture&&_.init(e,Y,r.renderState)}}for(let V=0;V<v.length;V++){let I=m[V],X=v[V];I!==null&&X!==void 0&&X.update(I,R,x||o)}he&&he(K,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),A=null}let ze=new gc;ze.setAnimationLoop(le),this.setAnimationLoop=function(K){he=K},this.dispose=function(){}}},si=new xn,$p=new ot;function Kp(i,e){function t(E,d){E.matrixAutoUpdate===!0&&E.updateMatrix(),d.value.copy(E.matrix)}function n(E,d){d.color.getRGB(E.fogColor.value,Ec(i)),d.isFog?(E.fogNear.value=d.near,E.fogFar.value=d.far):d.isFogExp2&&(E.fogDensity.value=d.density)}function r(E,d,C,v,m){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(E,d):d.isMeshToonMaterial?(s(E,d),h(E,d)):d.isMeshPhongMaterial?(s(E,d),l(E,d)):d.isMeshStandardMaterial?(s(E,d),u(E,d),d.isMeshPhysicalMaterial&&f(E,d,m)):d.isMeshMatcapMaterial?(s(E,d),A(E,d)):d.isMeshDepthMaterial?s(E,d):d.isMeshDistanceMaterial?(s(E,d),_(E,d)):d.isMeshNormalMaterial?s(E,d):d.isLineBasicMaterial?(o(E,d),d.isLineDashedMaterial&&a(E,d)):d.isPointsMaterial?c(E,d,C,v):d.isSpriteMaterial?x(E,d):d.isShadowMaterial?(E.color.value.copy(d.color),E.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(E,d){E.opacity.value=d.opacity,d.color&&E.diffuse.value.copy(d.color),d.emissive&&E.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(E.map.value=d.map,t(d.map,E.mapTransform)),d.alphaMap&&(E.alphaMap.value=d.alphaMap,t(d.alphaMap,E.alphaMapTransform)),d.bumpMap&&(E.bumpMap.value=d.bumpMap,t(d.bumpMap,E.bumpMapTransform),E.bumpScale.value=d.bumpScale,d.side===Pt&&(E.bumpScale.value*=-1)),d.normalMap&&(E.normalMap.value=d.normalMap,t(d.normalMap,E.normalMapTransform),E.normalScale.value.copy(d.normalScale),d.side===Pt&&E.normalScale.value.negate()),d.displacementMap&&(E.displacementMap.value=d.displacementMap,t(d.displacementMap,E.displacementMapTransform),E.displacementScale.value=d.displacementScale,E.displacementBias.value=d.displacementBias),d.emissiveMap&&(E.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,E.emissiveMapTransform)),d.specularMap&&(E.specularMap.value=d.specularMap,t(d.specularMap,E.specularMapTransform)),d.alphaTest>0&&(E.alphaTest.value=d.alphaTest);let C=e.get(d),v=C.envMap,m=C.envMapRotation;v&&(E.envMap.value=v,si.copy(m),si.x*=-1,si.y*=-1,si.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),E.envMapRotation.value.setFromMatrix4($p.makeRotationFromEuler(si)),E.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=d.reflectivity,E.ior.value=d.ior,E.refractionRatio.value=d.refractionRatio),d.lightMap&&(E.lightMap.value=d.lightMap,E.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,E.lightMapTransform)),d.aoMap&&(E.aoMap.value=d.aoMap,E.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,E.aoMapTransform))}function o(E,d){E.diffuse.value.copy(d.color),E.opacity.value=d.opacity,d.map&&(E.map.value=d.map,t(d.map,E.mapTransform))}function a(E,d){E.dashSize.value=d.dashSize,E.totalSize.value=d.dashSize+d.gapSize,E.scale.value=d.scale}function c(E,d,C,v){E.diffuse.value.copy(d.color),E.opacity.value=d.opacity,E.size.value=d.size*C,E.scale.value=v*.5,d.map&&(E.map.value=d.map,t(d.map,E.uvTransform)),d.alphaMap&&(E.alphaMap.value=d.alphaMap,t(d.alphaMap,E.alphaMapTransform)),d.alphaTest>0&&(E.alphaTest.value=d.alphaTest)}function x(E,d){E.diffuse.value.copy(d.color),E.opacity.value=d.opacity,E.rotation.value=d.rotation,d.map&&(E.map.value=d.map,t(d.map,E.mapTransform)),d.alphaMap&&(E.alphaMap.value=d.alphaMap,t(d.alphaMap,E.alphaMapTransform)),d.alphaTest>0&&(E.alphaTest.value=d.alphaTest)}function l(E,d){E.specular.value.copy(d.specular),E.shininess.value=Math.max(d.shininess,1e-4)}function h(E,d){d.gradientMap&&(E.gradientMap.value=d.gradientMap)}function u(E,d){E.metalness.value=d.metalness,d.metalnessMap&&(E.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,E.metalnessMapTransform)),E.roughness.value=d.roughness,d.roughnessMap&&(E.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,E.roughnessMapTransform)),d.envMap&&(E.envMapIntensity.value=d.envMapIntensity)}function f(E,d,C){E.ior.value=d.ior,d.sheen>0&&(E.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),E.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(E.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,E.sheenColorMapTransform)),d.sheenRoughnessMap&&(E.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,E.sheenRoughnessMapTransform))),d.clearcoat>0&&(E.clearcoat.value=d.clearcoat,E.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(E.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,E.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(E.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pt&&E.clearcoatNormalScale.value.negate())),d.dispersion>0&&(E.dispersion.value=d.dispersion),d.iridescence>0&&(E.iridescence.value=d.iridescence,E.iridescenceIOR.value=d.iridescenceIOR,E.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(E.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,E.iridescenceMapTransform)),d.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),d.transmission>0&&(E.transmission.value=d.transmission,E.transmissionSamplerMap.value=C.texture,E.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(E.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,E.transmissionMapTransform)),E.thickness.value=d.thickness,d.thicknessMap&&(E.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=d.attenuationDistance,E.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(E.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(E.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=d.specularIntensity,E.specularColor.value.copy(d.specularColor),d.specularColorMap&&(E.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,E.specularColorMapTransform)),d.specularIntensityMap&&(E.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,E.specularIntensityMapTransform))}function A(E,d){d.matcap&&(E.matcap.value=d.matcap)}function _(E,d){let C=e.get(d).light;E.referencePosition.value.setFromMatrixPosition(C.matrixWorld),E.nearDistance.value=C.shadow.camera.near,E.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Qp(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,v){let m=v.program;n.uniformBlockBinding(C,m)}function x(C,v){let m=r[C.id];m===void 0&&(A(C),m=l(C),r[C.id]=m,C.addEventListener("dispose",E));let B=v.program;n.updateUBOMapping(C,B);let y=e.render.frame;s[C.id]!==y&&(u(C),s[C.id]=y)}function l(C){let v=h();C.__bindingPointIndex=v;let m=i.createBuffer(),B=C.__size,y=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,m),i.bufferData(i.UNIFORM_BUFFER,B,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,m),m}function h(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(C){let v=r[C.id],m=C.uniforms,B=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let y=0,D=m.length;y<D;y++){let M=Array.isArray(m[y])?m[y]:[m[y]];for(let p=0,g=M.length;p<g;p++){let w=M[p];if(f(w,y,p,B)===!0){let S=w.__offset,P=Array.isArray(w.value)?w.value:[w.value],L=0;for(let N=0;N<P.length;N++){let H=P[N],j=_(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,S+L,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,S,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(C,v,m,B){let y=C.value,D=v+"_"+m;if(B[D]===void 0)return typeof y=="number"||typeof y=="boolean"?B[D]=y:B[D]=y.clone(),!0;{let M=B[D];if(typeof y=="number"||typeof y=="boolean"){if(M!==y)return B[D]=y,!0}else if(M.equals(y)===!1)return M.copy(y),!0}return!1}function A(C){let v=C.uniforms,m=0,B=16;for(let D=0,M=v.length;D<M;D++){let p=Array.isArray(v[D])?v[D]:[v[D]];for(let g=0,w=p.length;g<w;g++){let S=p[g],P=Array.isArray(S.value)?S.value:[S.value];for(let L=0,N=P.length;L<N;L++){let H=P[L],j=_(H),G=m%B,$=G%j.boundary,se=G+$;m+=$,se!==0&&B-se<j.storage&&(m+=B-se),S.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=m,m+=j.storage}}}let y=m%B;return y>0&&(m+=B-y),C.__size=m,C.__cache={},this}function _(C){let v={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(v.boundary=4,v.storage=4):C.isVector2?(v.boundary=8,v.storage=8):C.isVector3||C.isColor?(v.boundary=16,v.storage=12):C.isVector4?(v.boundary=16,v.storage=16):C.isMatrix3?(v.boundary=48,v.storage=48):C.isMatrix4?(v.boundary=64,v.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),v}function E(C){let v=C.target;v.removeEventListener("dispose",E);let m=o.indexOf(v.__bindingPointIndex);o.splice(m,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(let C in r)i.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:c,update:x,dispose:d}}var ws=class{constructor(e={}){let{canvas:t=th(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:x=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let A=new Uint32Array(4),_=new Int32Array(4),E=null,d=null,C=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this.toneMapping=Wn,this.toneMappingExposure=1;let m=this,B=!1,y=0,D=0,M=null,p=-1,g=null,w=new ct,S=new ct,P=null,L=new Oe(0),N=0,H=t.width,j=t.height,G=1,$=null,se=null,he=new ct(0,0,H,j),le=new ct(0,0,H,j),ze=!1,K=new vr,R=!1,V=!1,I=new ot,X=new ot,Y=new W,te=new ct,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function be(){return M===null?G:1}let k=n;function _e(b,O){return t.getContext(b,O)}try{let b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:x,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${a0}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",me,!1),k===null){let O="webgl2";if(k=_e(O,b),k===null)throw _e(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Se,ye,Pe,Ge,Te,T,F,q,ne,re,ee,Fe,pe,Ae,qe,xe,ve,Re,Ie,Ce,Ye,Ve,tt,U;function fe(){Se=new ff(k),Se.init(),Ve=new Yp(k,Se),ye=new xf(k,Se,e,Ve),Pe=new Gp(k,Se),ye.reverseDepthBuffer&&u&&Pe.buffers.depth.setReversed(!0),Ge=new Ef(k),Te=new Sp,T=new Xp(k,Se,Pe,Te,ye,Ve,Ge),F=new lf(m),q=new df(m),ne=new yh(k),tt=new of(k,ne),re=new pf(k,ne,Ge,tt),ee=new Af(k,re,ne,Ge),Ie=new gf(k,ye,T),xe=new cf(Te),Fe=new bp(m,F,q,Se,ye,tt,xe),pe=new Kp(m,Te),Ae=new Pp,qe=new Np(Se),Re=new sf(m,F,q,Pe,ee,f,c),ve=new Vp(m,ee,ye),U=new Qp(k,Ge,ye,Pe),Ce=new af(k,Se,Ge),Ye=new mf(k,Se,Ge),Ge.programs=Fe.programs,m.capabilities=ye,m.extensions=Se,m.properties=Te,m.renderLists=Ae,m.shadowMap=ve,m.state=Pe,m.info=Ge}fe();let Q=new Wa(m,k);this.xr=Q,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let b=Se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(H,j,!1))},this.getSize=function(b){return b.set(H,j)},this.setSize=function(b,O,Z=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,j=O,t.width=Math.floor(b*G),t.height=Math.floor(O*G),Z===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(H*G,j*G).floor()},this.setDrawingBufferSize=function(b,O,Z){H=b,j=O,G=Z,t.width=Math.floor(b*Z),t.height=Math.floor(O*Z),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(he)},this.setViewport=function(b,O,Z,J){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,O,Z,J),Pe.viewport(w.copy(he).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(le)},this.setScissor=function(b,O,Z,J){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,O,Z,J),Pe.scissor(S.copy(le).multiplyScalar(G).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(b){Pe.setScissorTest(ze=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(b=!0,O=!0,Z=!0){let J=0;if(b){let z=!1;if(M!==null){let ce=M.texture.format;z=ce===f0||ce===d0||ce===u0}if(z){let ce=M.texture.type,Ee=ce===Mn||ce===hi||ce===Ar||ce===qi||ce===l0||ce===h0,Be=Re.getClearColor(),Me=Re.getClearAlpha(),ke=Be.r,Ue=Be.g,De=Be.b;Ee?(A[0]=ke,A[1]=Ue,A[2]=De,A[3]=Me,k.clearBufferuiv(k.COLOR,0,A)):(_[0]=ke,_[1]=Ue,_[2]=De,_[3]=Me,k.clearBufferiv(k.COLOR,0,_))}else J|=k.COLOR_BUFFER_BIT}O&&(J|=k.DEPTH_BUFFER_BIT),Z&&(J|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Ae.dispose(),qe.dispose(),Te.dispose(),F.dispose(),q.dispose(),ee.dispose(),tt.dispose(),U.dispose(),Fe.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",R0),Q.removeEventListener("sessionend",I0),jn.stop()};function ie(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let b=Ge.autoReset,O=ve.enabled,Z=ve.autoUpdate,J=ve.needsUpdate,z=ve.type;fe(),Ge.autoReset=b,ve.enabled=O,ve.autoUpdate=Z,ve.needsUpdate=J,ve.type=z}function me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Le(b){let O=b.target;O.removeEventListener("dispose",Le),at(O)}function at(b){gt(b),Te.remove(b)}function gt(b){let O=Te.get(b).programs;O!==void 0&&(O.forEach(function(Z){Fe.releaseProgram(Z)}),b.isShaderMaterial&&Fe.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Z,J,z,ce){O===null&&(O=ue);let Ee=z.isMesh&&z.matrixWorld.determinant()<0,Be=tl(b,O,Z,J,z);Pe.setMaterial(J,Ee);let Me=Z.index,ke=1;if(J.wireframe===!0){if(Me=re.getWireframeAttribute(Z),Me===void 0)return;ke=2}let Ue=Z.drawRange,De=Z.attributes.position,Je=Ue.start*ke,nt=(Ue.start+Ue.count)*ke;ce!==null&&(Je=Math.max(Je,ce.start*ke),nt=Math.min(nt,(ce.start+ce.count)*ke)),Me!==null?(Je=Math.max(Je,0),nt=Math.min(nt,Me.count)):De!=null&&(Je=Math.max(Je,0),nt=Math.min(nt,De.count));let it=nt-Je;if(it<0||it===1/0)return;tt.setup(z,J,Be,Z,Me);let Ft,$e=Ce;if(Me!==null&&(Ft=ne.get(Me),$e=Ye,$e.setIndex(Ft)),z.isMesh)J.wireframe===!0?(Pe.setLineWidth(J.wireframeLinewidth*be()),$e.setMode(k.LINES)):$e.setMode(k.TRIANGLES);else if(z.isLine){let we=J.linewidth;we===void 0&&(we=1),Pe.setLineWidth(we*be()),z.isLineSegments?$e.setMode(k.LINES):z.isLineLoop?$e.setMode(k.LINE_LOOP):$e.setMode(k.LINE_STRIP)}else z.isPoints?$e.setMode(k.POINTS):z.isSprite&&$e.setMode(k.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)$e.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))$e.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let we=z._multiDrawStarts,un=z._multiDrawCounts,Ke=z._multiDrawCount,qt=Me?ne.get(Me).bytesPerElement:1,Ai=Te.get(J).currentProgram.getUniforms();for(let It=0;It<Ke;It++)Ai.setValue(k,"_gl_DrawID",It),$e.render(we[It]/qt,un[It])}else if(z.isInstancedMesh)$e.renderInstances(Je,it,z.count);else if(Z.isInstancedBufferGeometry){let we=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,un=Math.min(Z.instanceCount,we);$e.renderInstances(Je,it,un)}else $e.render(Je,it)};function Qe(b,O,Z){b.transparent===!0&&b.side===vn&&b.forceSinglePass===!1?(b.side=Pt,b.needsUpdate=!0,Pr(b,O,Z),b.side=Yn,b.needsUpdate=!0,Pr(b,O,Z),b.side=vn):Pr(b,O,Z)}this.compile=function(b,O,Z=null){Z===null&&(Z=b),d=qe.get(Z),d.init(O),v.push(d),Z.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),b!==Z&&b.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();let J=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ce=z.material;if(ce)if(Array.isArray(ce))for(let Ee=0;Ee<ce.length;Ee++){let Be=ce[Ee];Qe(Be,Z,z),J.add(Be)}else Qe(ce,Z,z),J.add(ce)}),v.pop(),d=null,J},this.compileAsync=function(b,O,Z=null){let J=this.compile(b,O,Z);return new Promise(z=>{function ce(){if(J.forEach(function(Ee){Te.get(Ee).currentProgram.isReady()&&J.delete(Ee)}),J.size===0){z(b);return}setTimeout(ce,10)}Se.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Yt=null;function hn(b){Yt&&Yt(b)}function R0(){jn.stop()}function I0(){jn.start()}let jn=new gc;jn.setAnimationLoop(hn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(b){Yt=b,Q.setAnimationLoop(b),b===null?jn.stop():jn.start()},Q.addEventListener("sessionstart",R0),Q.addEventListener("sessionend",I0),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(O),O=Q.getCamera()),b.isScene===!0&&b.onBeforeRender(m,b,O,M),d=qe.get(b,v.length),d.init(O),v.push(d),X.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(X),V=this.localClippingEnabled,R=xe.init(this.clippingPlanes,V),E=Ae.get(b,C.length),E.init(),C.push(E),Q.enabled===!0&&Q.isPresenting===!0){let ce=m.xr.getDepthSensingMesh();ce!==null&&ro(ce,O,-1/0,m.sortObjects)}ro(b,O,0,m.sortObjects),E.finish(),m.sortObjects===!0&&E.sort($,se),ae=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,ae&&Re.addToRenderList(E,b),this.info.render.frame++,R===!0&&xe.beginShadows();let Z=d.state.shadowsArray;ve.render(Z,b,O),R===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=E.opaque,z=E.transmissive;if(d.setupLights(),O.isArrayCamera){let ce=O.cameras;if(z.length>0)for(let Ee=0,Be=ce.length;Ee<Be;Ee++){let Me=ce[Ee];L0(J,z,b,Me)}ae&&Re.render(b);for(let Ee=0,Be=ce.length;Ee<Be;Ee++){let Me=ce[Ee];k0(E,b,Me,Me.viewport)}}else z.length>0&&L0(J,z,b,O),ae&&Re.render(b),k0(E,b,O);M!==null&&(T.updateMultisampleRenderTarget(M),T.updateRenderTargetMipmap(M)),b.isScene===!0&&b.onAfterRender(m,b,O),tt.resetDefaultState(),p=-1,g=null,v.pop(),v.length>0?(d=v[v.length-1],R===!0&&xe.setGlobalState(m.clippingPlanes,d.state.camera)):d=null,C.pop(),C.length>0?E=C[C.length-1]:E=null};function ro(b,O,Z,J){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){J&&te.setFromMatrixPosition(b.matrixWorld).applyMatrix4(X);let Ee=ee.update(b),Be=b.material;Be.visible&&E.push(b,Ee,Be,Z,te.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){let Ee=ee.update(b),Be=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),te.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),te.copy(Ee.boundingSphere.center)),te.applyMatrix4(b.matrixWorld).applyMatrix4(X)),Array.isArray(Be)){let Me=Ee.groups;for(let ke=0,Ue=Me.length;ke<Ue;ke++){let De=Me[ke],Je=Be[De.materialIndex];Je&&Je.visible&&E.push(b,Ee,Je,Z,te.z,De)}}else Be.visible&&E.push(b,Ee,Be,Z,te.z,null)}}let ce=b.children;for(let Ee=0,Be=ce.length;Ee<Be;Ee++)ro(ce[Ee],O,Z,J)}function k0(b,O,Z,J){let z=b.opaque,ce=b.transmissive,Ee=b.transparent;d.setupLightsView(Z),R===!0&&xe.setGlobalState(m.clippingPlanes,Z),J&&Pe.viewport(w.copy(J)),z.length>0&&Tr(z,O,Z),ce.length>0&&Tr(ce,O,Z),Ee.length>0&&Tr(Ee,O,Z),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function L0(b,O,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[J.id]===void 0&&(d.state.transmissionRenderTarget[J.id]=new Dn(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?yr:Mn,minFilter:li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let ce=d.state.transmissionRenderTarget[J.id],Ee=J.viewport||w;ce.setSize(Ee.z,Ee.w);let Be=m.getRenderTarget();m.setRenderTarget(ce),m.getClearColor(L),N=m.getClearAlpha(),N<1&&m.setClearColor(16777215,.5),m.clear(),ae&&Re.render(Z);let Me=m.toneMapping;m.toneMapping=Wn;let ke=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),d.setupLightsView(J),R===!0&&xe.setGlobalState(m.clippingPlanes,J),Tr(b,Z,J),T.updateMultisampleRenderTarget(ce),T.updateRenderTargetMipmap(ce),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let De=0,Je=O.length;De<Je;De++){let nt=O[De],it=nt.object,Ft=nt.geometry,$e=nt.material,we=nt.group;if($e.side===vn&&it.layers.test(J.layers)){let un=$e.side;$e.side=Pt,$e.needsUpdate=!0,U0(it,Z,J,Ft,$e,we),$e.side=un,$e.needsUpdate=!0,Ue=!0}}Ue===!0&&(T.updateMultisampleRenderTarget(ce),T.updateRenderTargetMipmap(ce))}m.setRenderTarget(Be),m.setClearColor(L,N),ke!==void 0&&(J.viewport=ke),m.toneMapping=Me}function Tr(b,O,Z){let J=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ce=b.length;z<ce;z++){let Ee=b[z],Be=Ee.object,Me=Ee.geometry,ke=J===null?Ee.material:J,Ue=Ee.group;Be.layers.test(Z.layers)&&U0(Be,O,Z,Me,ke,Ue)}}function U0(b,O,Z,J,z,ce){b.onBeforeRender(m,O,Z,J,z,ce),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(m,O,Z,J,b,ce),z.transparent===!0&&z.side===vn&&z.forceSinglePass===!1?(z.side=Pt,z.needsUpdate=!0,m.renderBufferDirect(Z,O,J,z,b,ce),z.side=Yn,z.needsUpdate=!0,m.renderBufferDirect(Z,O,J,z,b,ce),z.side=vn):m.renderBufferDirect(Z,O,J,z,b,ce),b.onAfterRender(m,O,Z,J,z,ce)}function Pr(b,O,Z){O.isScene!==!0&&(O=ue);let J=Te.get(b),z=d.state.lights,ce=d.state.shadowsArray,Ee=z.state.version,Be=Fe.getParameters(b,z.state,ce,O,Z),Me=Fe.getProgramCacheKey(Be),ke=J.programs;J.environment=b.isMeshStandardMaterial?O.environment:null,J.fog=O.fog,J.envMap=(b.isMeshStandardMaterial?q:F).get(b.envMap||J.environment),J.envMapRotation=J.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",Le),ke=new Map,J.programs=ke);let Ue=ke.get(Me);if(Ue!==void 0){if(J.currentProgram===Ue&&J.lightsStateVersion===Ee)return O0(b,Be),Ue}else Be.uniforms=Fe.getUniforms(b),b.onBeforeCompile(Be,m),Ue=Fe.acquireProgram(Be,Me),ke.set(Me,Ue),J.uniforms=Be.uniforms;let De=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=xe.uniform),O0(b,Be),J.needsLights=il(b),J.lightsStateVersion=Ee,J.needsLights&&(De.ambientLightColor.value=z.state.ambient,De.lightProbe.value=z.state.probe,De.directionalLights.value=z.state.directional,De.directionalLightShadows.value=z.state.directionalShadow,De.spotLights.value=z.state.spot,De.spotLightShadows.value=z.state.spotShadow,De.rectAreaLights.value=z.state.rectArea,De.ltc_1.value=z.state.rectAreaLTC1,De.ltc_2.value=z.state.rectAreaLTC2,De.pointLights.value=z.state.point,De.pointLightShadows.value=z.state.pointShadow,De.hemisphereLights.value=z.state.hemi,De.directionalShadowMap.value=z.state.directionalShadowMap,De.directionalShadowMatrix.value=z.state.directionalShadowMatrix,De.spotShadowMap.value=z.state.spotShadowMap,De.spotLightMatrix.value=z.state.spotLightMatrix,De.spotLightMap.value=z.state.spotLightMap,De.pointShadowMap.value=z.state.pointShadowMap,De.pointShadowMatrix.value=z.state.pointShadowMatrix),J.currentProgram=Ue,J.uniformsList=null,Ue}function N0(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Gi.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function O0(b,O){let Z=Te.get(b);Z.outputColorSpace=O.outputColorSpace,Z.batching=O.batching,Z.batchingColor=O.batchingColor,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.instancingMorph=O.instancingMorph,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function tl(b,O,Z,J,z){O.isScene!==!0&&(O=ue),T.resetTextureUnits();let ce=O.fog,Ee=J.isMeshStandardMaterial?O.environment:null,Be=M===null?m.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:ji,Me=(J.isMeshStandardMaterial?q:F).get(J.envMap||Ee),ke=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ue=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),De=!!Z.morphAttributes.position,Je=!!Z.morphAttributes.normal,nt=!!Z.morphAttributes.color,it=Wn;J.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(it=m.toneMapping);let Ft=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,$e=Ft!==void 0?Ft.length:0,we=Te.get(J),un=d.state.lights;if(R===!0&&(V===!0||b!==g)){let Vt=b===g&&J.id===p;xe.setState(J,b,Vt)}let Ke=!1;J.version===we.__version?(we.needsLights&&we.lightsStateVersion!==un.state.version||we.outputColorSpace!==Be||z.isBatchedMesh&&we.batching===!1||!z.isBatchedMesh&&we.batching===!0||z.isBatchedMesh&&we.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&we.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&we.instancing===!1||!z.isInstancedMesh&&we.instancing===!0||z.isSkinnedMesh&&we.skinning===!1||!z.isSkinnedMesh&&we.skinning===!0||z.isInstancedMesh&&we.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&we.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&we.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&we.instancingMorph===!1&&z.morphTexture!==null||we.envMap!==Me||J.fog===!0&&we.fog!==ce||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==xe.numPlanes||we.numIntersection!==xe.numIntersection)||we.vertexAlphas!==ke||we.vertexTangents!==Ue||we.morphTargets!==De||we.morphNormals!==Je||we.morphColors!==nt||we.toneMapping!==it||we.morphTargetsCount!==$e)&&(Ke=!0):(Ke=!0,we.__version=J.version);let qt=we.currentProgram;Ke===!0&&(qt=Pr(J,O,z));let Ai=!1,It=!1,rr=!1,rt=qt.getUniforms(),rn=we.uniforms;if(Pe.useProgram(qt.program)&&(Ai=!0,It=!0,rr=!0),J.id!==p&&(p=J.id,It=!0),Ai||g!==b){Pe.buffers.depth.getReversed()?(I.copy(b.projectionMatrix),ih(I),rh(I),rt.setValue(k,"projectionMatrix",I)):rt.setValue(k,"projectionMatrix",b.projectionMatrix),rt.setValue(k,"viewMatrix",b.matrixWorldInverse);let Pn=rt.map.cameraPosition;Pn!==void 0&&Pn.setValue(k,Y.setFromMatrixPosition(b.matrixWorld)),ye.logarithmicDepthBuffer&&rt.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&rt.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),g!==b&&(g=b,It=!0,rr=!0)}if(z.isSkinnedMesh){rt.setOptional(k,z,"bindMatrix"),rt.setOptional(k,z,"bindMatrixInverse");let Vt=z.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),rt.setValue(k,"boneTexture",Vt.boneTexture,T))}z.isBatchedMesh&&(rt.setOptional(k,z,"batchingTexture"),rt.setValue(k,"batchingTexture",z._matricesTexture,T),rt.setOptional(k,z,"batchingIdTexture"),rt.setValue(k,"batchingIdTexture",z._indirectTexture,T),rt.setOptional(k,z,"batchingColorTexture"),z._colorsTexture!==null&&rt.setValue(k,"batchingColorTexture",z._colorsTexture,T));let sr=Z.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&Ie.update(z,Z,qt),(It||we.receiveShadow!==z.receiveShadow)&&(we.receiveShadow=z.receiveShadow,rt.setValue(k,"receiveShadow",z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(rn.envMap.value=Me,rn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&O.environment!==null&&(rn.envMapIntensity.value=O.environmentIntensity),It&&(rt.setValue(k,"toneMappingExposure",m.toneMappingExposure),we.needsLights&&nl(rn,rr),ce&&J.fog===!0&&pe.refreshFogUniforms(rn,ce),pe.refreshMaterialUniforms(rn,J,G,j,d.state.transmissionRenderTarget[b.id]),Gi.upload(k,N0(we),rn,T)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Gi.upload(k,N0(we),rn,T),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&rt.setValue(k,"center",z.center),rt.setValue(k,"modelViewMatrix",z.modelViewMatrix),rt.setValue(k,"normalMatrix",z.normalMatrix),rt.setValue(k,"modelMatrix",z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Vt=J.uniformsGroups;for(let Pn=0,Rn=Vt.length;Pn<Rn;Pn++){let z0=Vt[Pn];U.update(z0,qt),U.bind(z0,qt)}}return qt}function nl(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function il(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(b,O,Z){Te.get(b.texture).__webglTexture=O,Te.get(b.depthTexture).__webglTexture=Z;let J=Te.get(b);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){let Z=Te.get(b);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,Z=0){M=b,y=O,D=Z;let J=!0,z=null,ce=!1,Ee=!1;if(b){let Me=Te.get(b);if(Me.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(k.FRAMEBUFFER,null),J=!1;else if(Me.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Me.__hasExternalTextures)T.rebindTextures(b,Te.get(b.texture).__webglTexture,Te.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let De=b.depthTexture;if(Me.__boundDepthTexture!==De){if(De!==null&&Te.has(De)&&(b.width!==De.image.width||b.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}let ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ee=!0);let Ue=Te.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ue[O])?z=Ue[O][Z]:z=Ue[O],ce=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?z=Te.get(b).__webglMultisampledFramebuffer:Array.isArray(Ue)?z=Ue[Z]:z=Ue,w.copy(b.viewport),S.copy(b.scissor),P=b.scissorTest}else w.copy(he).multiplyScalar(G).floor(),S.copy(le).multiplyScalar(G).floor(),P=ze;if(Pe.bindFramebuffer(k.FRAMEBUFFER,z)&&J&&Pe.drawBuffers(b,z),Pe.viewport(w),Pe.scissor(S),Pe.setScissorTest(P),ce){let Me=Te.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,Z)}else if(Ee){let Me=Te.get(b.texture),ke=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Me.__webglTexture,Z||0,ke)}p=-1},this.readRenderTargetPixels=function(b,O,Z,J,z,ce,Ee){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Be=Be[Ee]),Be){Pe.bindFramebuffer(k.FRAMEBUFFER,Be);try{let Me=b.texture,ke=Me.format,Ue=Me.type;if(!ye.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-J&&Z>=0&&Z<=b.height-z&&k.readPixels(O,Z,J,z,Ve.convert(ke),Ve.convert(Ue),ce)}finally{let Me=M!==null?Te.get(M).__webglFramebuffer:null;Pe.bindFramebuffer(k.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(b,O,Z,J,z,ce,Ee){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Be=Be[Ee]),Be){let Me=b.texture,ke=Me.format,Ue=Me.type;if(!ye.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-J&&Z>=0&&Z<=b.height-z){Pe.bindFramebuffer(k.FRAMEBUFFER,Be);let De=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,De),k.bufferData(k.PIXEL_PACK_BUFFER,ce.byteLength,k.STREAM_READ),k.readPixels(O,Z,J,z,Ve.convert(ke),Ve.convert(Ue),0);let Je=M!==null?Te.get(M).__webglFramebuffer:null;Pe.bindFramebuffer(k.FRAMEBUFFER,Je);let nt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await nh(k,nt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,De),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ce),k.deleteBuffer(De),k.deleteSync(nt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,Z=0){b.isTexture!==!0&&(mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);let J=Math.pow(2,-Z),z=Math.floor(b.image.width*J),ce=Math.floor(b.image.height*J),Ee=O!==null?O.x:0,Be=O!==null?O.y:0;T.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,Z,0,0,Ee,Be,z,ce),Pe.unbindTexture()},this.copyTextureToTexture=function(b,O,Z=null,J=null,z=0){b.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,b=arguments[1],O=arguments[2],z=arguments[3]||0,Z=null);let ce,Ee,Be,Me,ke,Ue,De,Je,nt,it=b.isCompressedTexture?b.mipmaps[z]:b.image;Z!==null?(ce=Z.max.x-Z.min.x,Ee=Z.max.y-Z.min.y,Be=Z.isBox3?Z.max.z-Z.min.z:1,Me=Z.min.x,ke=Z.min.y,Ue=Z.isBox3?Z.min.z:0):(ce=it.width,Ee=it.height,Be=it.depth||1,Me=0,ke=0,Ue=0),J!==null?(De=J.x,Je=J.y,nt=J.z):(De=0,Je=0,nt=0);let Ft=Ve.convert(O.format),$e=Ve.convert(O.type),we;O.isData3DTexture?(T.setTexture3D(O,0),we=k.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),we=k.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),we=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,O.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,O.unpackAlignment);let un=k.getParameter(k.UNPACK_ROW_LENGTH),Ke=k.getParameter(k.UNPACK_IMAGE_HEIGHT),qt=k.getParameter(k.UNPACK_SKIP_PIXELS),Ai=k.getParameter(k.UNPACK_SKIP_ROWS),It=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,it.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,it.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Me),k.pixelStorei(k.UNPACK_SKIP_ROWS,ke),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ue);let rr=b.isDataArrayTexture||b.isData3DTexture,rt=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let rn=Te.get(b),sr=Te.get(O),Vt=Te.get(rn.__renderTarget),Pn=Te.get(sr.__renderTarget);Pe.bindFramebuffer(k.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let Rn=0;Rn<Be;Rn++)rr&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Te.get(b).__webglTexture,z,Ue+Rn),b.isDepthTexture?(rt&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Te.get(O).__webglTexture,z,nt+Rn),k.blitFramebuffer(Me,ke,ce,Ee,De,Je,ce,Ee,k.DEPTH_BUFFER_BIT,k.NEAREST)):rt?k.copyTexSubImage3D(we,z,De,Je,nt+Rn,Me,ke,ce,Ee):k.copyTexSubImage2D(we,z,De,Je,nt+Rn,Me,ke,ce,Ee);Pe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else rt?b.isDataTexture||b.isData3DTexture?k.texSubImage3D(we,z,De,Je,nt,ce,Ee,Be,Ft,$e,it.data):O.isCompressedArrayTexture?k.compressedTexSubImage3D(we,z,De,Je,nt,ce,Ee,Be,Ft,it.data):k.texSubImage3D(we,z,De,Je,nt,ce,Ee,Be,Ft,$e,it):b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,z,De,Je,ce,Ee,Ft,$e,it.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,z,De,Je,it.width,it.height,Ft,it.data):k.texSubImage2D(k.TEXTURE_2D,z,De,Je,ce,Ee,Ft,$e,it);k.pixelStorei(k.UNPACK_ROW_LENGTH,un),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ke),k.pixelStorei(k.UNPACK_SKIP_PIXELS,qt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ai),k.pixelStorei(k.UNPACK_SKIP_IMAGES,It),z===0&&O.generateMipmaps&&k.generateMipmap(we),Pe.unbindTexture()},this.copyTextureToTexture3D=function(b,O,Z=null,J=null,z=0){return b.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,b=arguments[2],O=arguments[3],z=arguments[4]||0),mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,Z,J,z)},this.initRenderTarget=function(b){Te.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),Pe.unbindTexture()},this.resetState=function(){y=0,D=0,M=null,Pe.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var bs=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ss=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fa,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yt=new W,Ts=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=on(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=on(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=on(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=on(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cr=class extends Fn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ki,ur=new W,Li=new W,Ui=new W,Ni=new We,dr=new We,yc=new ot,is=new W,fr=new W,rs=new W,qx=new We,No=new We,Zx=new We,Ps=class extends Et{constructor(e=new Cr){if(super(),this.isSprite=!0,this.type="Sprite",ki===void 0){ki=new en;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xa(t,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new Ts(n,3,0,!1)),ki.setAttribute("uv",new Ts(n,2,3,!1))}this.geometry=ki,this.material=e,this.center=new We(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),yc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ui.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Ui.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;ss(is.set(-.5,-.5,0),Ui,o,Li,r,s),ss(fr.set(.5,-.5,0),Ui,o,Li,r,s),ss(rs.set(.5,.5,0),Ui,o,Li,r,s),qx.set(0,0),No.set(1,0),Zx.set(1,1);let a=e.ray.intersectTriangle(is,fr,rs,!1,ur);if(a===null&&(ss(fr.set(-.5,.5,0),Ui,o,Li,r,s),No.set(0,1),a=e.ray.intersectTriangle(is,rs,fr,!1,ur),a===null))return;let c=e.ray.origin.distanceTo(ur);c<e.near||c>e.far||t.push({distance:c,point:ur.clone(),uv:Hn.getInterpolation(ur,is,fr,rs,qx,No,Zx,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ss(i,e,t,n,r,s){Ni.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(dr.x=s*Ni.x-r*Ni.y,dr.y=r*Ni.x+s*Ni.y):dr.copy(Ni),i.copy(e),i.x+=dr.x,i.y+=dr.y,i.applyMatrix4(yc)}var Rs=class extends Fn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Is=new W,ks=new W,Jx=new ot,pr=new As,os=new Ji,Oo=new W,$x=new W,Ya=class extends Et{constructor(e=new en,t=new Rs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Is.fromBufferAttribute(t,r-1),ks.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Is.distanceTo(ks);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(r),os.radius+=s,e.ray.intersectsSphere(os)===!1)return;Jx.copy(r).invert(),pr.copy(e.ray).applyMatrix4(Jx);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,x=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),A=Math.min(l.count,o.start+o.count);for(let _=f,E=A-1;_<E;_+=x){let d=l.getX(_),C=l.getX(_+1),v=as(this,e,pr,c,d,C);v&&t.push(v)}if(this.isLineLoop){let _=l.getX(A-1),E=l.getX(f),d=as(this,e,pr,c,_,E);d&&t.push(d)}}else{let f=Math.max(0,o.start),A=Math.min(u.count,o.start+o.count);for(let _=f,E=A-1;_<E;_+=x){let d=as(this,e,pr,c,_,_+1);d&&t.push(d)}if(this.isLineLoop){let _=as(this,e,pr,c,A-1,f);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function as(i,e,t,n,r,s){let o=i.geometry.attributes.position;if(Is.fromBufferAttribute(o,r),ks.fromBufferAttribute(o,s),t.distanceSqToSegment(Is,ks,Oo,$x)>n)return;Oo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Oo);if(!(c<e.near||c>e.far))return{distance:c,point:$x.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var Kx=new W,Qx=new W,qa=class extends Ya{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Kx.fromBufferAttribute(t,r),Qx.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Kx.distanceTo(Qx);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ls=class extends zt{constructor(e,t,n,r,s,o,a,c,x){super(e,t,n,r,s,o,a,c,x),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Za=class i extends en{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let x=this;r=Math.floor(r),s=Math.floor(s);let l=[],h=[],u=[],f=[],A=0,_=[],E=n/2,d=0;C(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(f,2));function C(){let m=new W,B=new W,y=0,D=(t-e)/n;for(let M=0;M<=s;M++){let p=[],g=M/s,w=g*(t-e)+e;for(let S=0;S<=r;S++){let P=S/r,L=P*c+a,N=Math.sin(L),H=Math.cos(L);B.x=w*N,B.y=-g*n+E,B.z=w*H,h.push(B.x,B.y,B.z),m.set(N,D,H).normalize(),u.push(m.x,m.y,m.z),f.push(P,1-g),p.push(A++)}_.push(p)}for(let M=0;M<r;M++)for(let p=0;p<s;p++){let g=_[p][M],w=_[p+1][M],S=_[p+1][M+1],P=_[p][M+1];(e>0||p!==0)&&(l.push(g,w,P),y+=3),(t>0||p!==s-1)&&(l.push(w,S,P),y+=3)}x.addGroup(d,y,0),d+=y}function v(m){let B=A,y=new We,D=new W,M=0,p=m===!0?e:t,g=m===!0?1:-1;for(let S=1;S<=r;S++)h.push(0,E*g,0),u.push(0,g,0),f.push(.5,.5),A++;let w=A;for(let S=0;S<=r;S++){let L=S/r*c+a,N=Math.cos(L),H=Math.sin(L);D.x=p*H,D.y=E*g,D.z=p*N,h.push(D.x,D.y,D.z),u.push(0,g,0),y.x=N*.5+.5,y.y=H*.5*g+.5,f.push(y.x,y.y),A++}for(let S=0;S<r;S++){let P=B+S,L=w+S;m===!0?l.push(L,L+1,P):l.push(L+1,L,P),M+=3}x.addGroup(d,M,m===!0?1:2),d+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_r=class i extends Za{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var wn=class extends Fn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dc,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=x0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function xs(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function jp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Qi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ja=class extends Qi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Q0,endingEnd:Q0}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case j0:s=e,a=2*t-n;break;case ex:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case j0:o=e,c=2*n-t;break;case ex:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let x=(n-t)*.5,l=this.valueSize;this._weightPrev=x/(t-a),this._weightNext=x/(c-n),this._offsetPrev=s*l,this._offsetNext=o*l}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,x=c-a,l=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,A=(n-t)/(r-t),_=A*A,E=_*A,d=-u*E+2*u*_-u*A,C=(1+u)*E+(-1.5-2*u)*_+(-.5+u)*A+1,v=(-1-f)*E+(1.5+f)*_+.5*A,m=f*E-f*_;for(let B=0;B!==a;++B)s[B]=d*o[l+B]+C*o[x+B]+v*o[c+B]+m*o[h+B];return s}},$a=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,x=c-a,l=(n-t)/(r-t),h=1-l;for(let u=0;u!==a;++u)s[u]=o[x+u]*h+o[c+u]*l;return s}},Ka=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},tn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xs(t,this.TimeBufferType),this.values=xs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xs(e.times,Array),values:xs(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ja(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fs:t=this.InterpolantFactoryMethodDiscrete;break;case Da:t=this.InterpolantFactoryMethodLinear;break;case xo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return Da;case this.InterpolantFactoryMethodSmooth:return xo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&jp(r))for(let a=0,c=r.length;a!==c;++a){let x=r[a];if(isNaN(x)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,x),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===xo,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,x=e[a],l=e[a+1];if(x!==l&&(a!==1||x!==e[0]))if(r)c=!0;else{let h=a*n,u=h-n,f=h+n;for(let A=0;A!==n;++A){let _=t[h+A];if(_!==t[u+A]||_!==t[f+A]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,x=0;x!==n;++x)t[c+x]=t[a+x];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Da;var di=class extends tn{constructor(e,t,n){super(e,t,n)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=fs;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends tn{};Qa.prototype.ValueTypeName="color";var ja=class extends tn{};ja.prototype.ValueTypeName="number";var e0=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),x=e*a;for(let l=x+a;x!==l;x+=4)Zn.slerpFlat(s,0,o,x-a,o,x,c);return s}},Us=class extends tn{InterpolantFactoryMethodLinear(e){return new e0(this.times,this.values,this.getValueSize(),e)}};Us.prototype.ValueTypeName="quaternion";Us.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends tn{constructor(e,t,n){super(e,t,n)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=fs;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var t0=class extends tn{};t0.prototype.ValueTypeName="vector";var n0=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,x=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){a++,s===!1&&r.onStart!==void 0&&r.onStart(l,o,a),s=!0},this.itemEnd=function(l){o++,r.onProgress!==void 0&&r.onProgress(l,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,h){return x.push(l,h),this},this.removeHandler=function(l){let h=x.indexOf(l);return h!==-1&&x.splice(h,2),this},this.getHandler=function(l){for(let h=0,u=x.length;h<u;h+=2){let f=x[h],A=x[h+1];if(f.global&&(f.lastIndex=0),f.test(l))return A}return null}}},em=new n0,i0=class{constructor(e){this.manager=e!==void 0?e:em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};i0.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ns=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Os=class extends Ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},zo=new ot,jx=new W,ec=new W,r0=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;jx.setFromMatrixPosition(e.matrixWorld),t.position.copy(jx),ec.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ec),t.updateMatrixWorld(),zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var s0=class extends r0{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zs=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new s0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var m0="\\[\\]\\.:\\/",tm=new RegExp("["+m0+"]","g"),E0="[^"+m0+"]",nm="[^"+m0.replace("\\.","")+"]",im=/((?:WC+[\/:])*)/.source.replace("WC",E0),rm=/(WCOD+)?/.source.replace("WCOD",nm),sm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",E0),om=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",E0),am=new RegExp("^"+im+rm+sm+om+"$"),xm=["material","materials","bones","map"],o0=class{constructor(e,t,n){let r=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},st=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tm,"")}static parseTrackName(e){let t=am.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);xm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let x=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===x){x=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(x!==void 0){if(e[x]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[x]}}let o=e[r];if(o===void 0){let x=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+x+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=o0;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _m=new Float32Array(1);var Vs=class extends qa{constructor(e=10,t=10,n=4473924,r=8947848){n=new Oe(n),r=new Oe(r);let s=t/2,o=e/t,a=e/2,c=[],x=[];for(let u=0,f=0,A=-a;u<=t;u++,A+=o){c.push(-a,0,A,a,0,A),c.push(A,0,-a,A,0,a);let _=u===s?n:r;_.toArray(x,f),f+=3,_.toArray(x,f),f+=3,_.toArray(x,f),f+=3,_.toArray(x,f),f+=3}let l=new en;l.setAttribute("position",new Ct(c,3)),l.setAttribute("color",new Ct(x,3));let h=new Rs({vertexColors:!0,toneMapped:!1});super(l,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:a0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=a0);var Bc={wall:3883602,deck:7043727,pillar:5661562,cover:9071947},Xs=class{constructor(e){this.canvas=e,this.gl=new ws({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.quality=1,this.scene=new Ss,this.scene.background=new Oe(10405352),this.scene.fog=new bs(10405352,40,120),this.cam=new Mt(70,1,.1,200),this.thirdPerson=!0,this.meshes=new Map,this.tracers=[],this.shake=0,this.kick=0,this.camPos=new W,this.buildWorld(),this.resize(),addEventListener("resize",()=>this.resize())}setQuality(e){this.quality=e,this.resize()}resize(){let e=[.55,.8,Math.min(devicePixelRatio||1,2)][this.quality];this.gl.setPixelRatio(e),this.gl.setSize(innerWidth,innerHeight,!1),this.cam.aspect=innerWidth/innerHeight,this.cam.updateProjectionMatrix()}buildWorld(){let e=this.scene;e.add(new Os(14675711,6971992,1.55));let t=new zs(16773846,1.6);t.position.set(30,60,20),e.add(t);let n=new ht(new Ki(Lt*2,Lt*2),new wn({color:8032094,flatShading:!0}));n.rotation.x=-Math.PI/2,e.add(n);let r=new Vs(Lt*2,30,6979408,6979408);r.position.y=.02,r.material.opacity=.35,r.material.transparent=!0,e.add(r);let s={};for(let x of Object.keys(Bc))s[x]=new wn({color:Bc[x],flatShading:!0});let o=new Rt(1,1,1);for(let x of Zt.boxes){let l=new ht(o,s[x.kind]);if(l.scale.set(x.w,x.h,x.d),l.position.set(x.x,x.y+x.h/2,x.z),e.add(l),x.kind==="deck"){let h=new ht(o,new Jn({color:15909198}));h.scale.set(x.w+.02,.12,x.d+.02),h.position.set(x.x,x.maxy-.06,x.z),e.add(h)}}let a=new _r(18,22,5),c=new wn({color:7308184,flatShading:!0});for(let x=0;x<14;x++){let l=x/14*Math.PI*2,h=85+x%3*8,u=new ht(a,c);u.position.set(Math.cos(l)*h,8,Math.sin(l)*h),u.scale.set(1+x%4*.3,.8+x%3*.4,1),e.add(u)}this.tracerGeo=new Rt(.04,.04,1),this.tracerMat=new Jn({color:16771491})}makeTag(e){let t=document.createElement("canvas");t.width=160,t.height=36;let n=t.getContext("2d");n.font="bold 22px sans-serif",n.textAlign="center",n.lineWidth=5,n.strokeStyle="rgba(0,0,0,.7)",n.strokeText(e,80,26),n.fillStyle="#fff",n.fillText(e,80,26);let r=new Ls(t),s=new Ps(new Cr({map:r,depthTest:!1,transparent:!0}));return s.scale.set(2.2,.5,1),s.position.y=2.35,s.renderOrder=10,s}makePlayer(e){let t=new yn,n=new wn({color:e.color,flatShading:!0}),r=new wn({color:2830138,flatShading:!0}),s=new wn({color:1578e4,flatShading:!0}),o=(u,f,A,_,E)=>{let d=new ht(u,f);return d.position.set(A,_,E),t.add(d),d};o(new Rt(.6,.7,.4),r,0,.35,0),o(new Rt(.7,.65,.42),n,0,1,0),o(new Rt(.38,.38,.38),s,0,1.55,0),o(new Rt(.42,.14,.42),r,0,1.76,0),o(new Rt(.4,.6,.22),r,0,1,.32);let a=new yn;a.position.set(0,1.15,0),t.add(a);let c=new ht(new Rt(.12,.14,.7),r);c.position.set(.28,0,-.45),a.add(c);let x=new ht(new _r(.16,.8,5),new Jn({color:16753210}));x.rotation.x=Math.PI,x.position.set(0,.35,.32),x.visible=!1,t.add(x);let l=this.makeTag(e.name);t.add(l),this.scene.add(t);let h={g:t,arm:a,flame:x,tag:l,name:e.name};return this.meshes.set(e.id,h),h}tracer(e,t,n,r,s,o){let a=Math.hypot(r-e,s-t,o-n);if(a<.5)return;let c=new ht(this.tracerGeo,this.tracerMat);c.position.set((e+r)/2,(t+s)/2,(n+o)/2),c.scale.z=a,c.lookAt(r,s,o),this.scene.add(c),this.tracers.push({m:c,life:.08})}addShake(e){this.shake=Math.min(.4,this.shake+e)}clearPlayers(){for(let e of this.meshes.values())this.scene.remove(e.g);this.meshes.clear()}draw(e,t,n){let r=new Set;for(let o of t.players){r.add(o.id);let a=this.meshes.get(o.id)||this.makePlayer(o);a.name!==o.name&&(a.g.remove(a.tag),a.tag=this.makeTag(o.name),a.g.add(a.tag),a.name=o.name);let c=t.me&&o.id===t.me.id;a.g.visible=o.alive&&!(c&&!this.thirdPerson),a.g.position.set(o.x,o.y,o.z),a.g.rotation.y=o.yaw,a.arm.rotation.x=o.pitch,a.flame.visible=o.thr,o.thr&&(a.flame.scale.y=.8+Math.random()*.6),a.tag.visible=!c}for(let[o,a]of this.meshes)r.has(o)||(this.scene.remove(a.g),this.meshes.delete(o));for(let o=this.tracers.length-1;o>=0;o--){let a=this.tracers[o];(a.life-=e)<=0&&(this.scene.remove(a.m),this.tracers.splice(o,1))}let s=t.me;if(s){let o=s.y+In,a=n.yaw,c=n.pitch;if(this.thirdPerson){let x=kr(a,c),l=[Math.cos(a),0,-Math.sin(a)],h=3.6,u=-x[0],f=-x[1]*.9+.35,A=-x[2],_=Math.hypot(u,f,A),E=vi(s.x,o,s.z,u/_,f/_,A/_,h+.4);h=Math.max(.6,Math.min(h,E-.4)),this.cam.position.set(s.x+u/_*h+l[0]*.75,Math.max(.3,o+f/_*h),s.z+A/_*h+l[2]*.75)}else this.cam.position.set(s.x,o,s.z);s.alive||(this.cam.position.y+=1.5),this.cam.rotation.order="YXZ",this.cam.rotation.set(c+this.kick,a,0),this.kick*=Math.pow(.001,e),this.shake>.001&&(this.cam.position.x+=(Math.random()-.5)*this.shake,this.cam.position.y+=(Math.random()-.5)*this.shake,this.shake*=Math.pow(5e-4,e))}this.gl.render(this.scene,this.cam)}project(e,t,n){let r=new W(e,t,n).project(this.cam);return r.z>1?null:[(r.x*.5+.5)*innerWidth,(-r.y*.5+.5)*innerHeight]}};var g0=(i,e,t)=>Math.max(e,Math.min(t,i)),Ys=class{constructor(){this.yaw=0,this.pitch=0,this.mx=0,this.mz=0,this.jet=!1,this.fire=!1,this.rl=!1,this.sw=-1,this.sens=1,this.keys=new Set,this.touch=!1,this.enabled=!1,this.stick={id:-1,cx:0,cy:0},this.look={id:-1,x:0,y:0},this.btn={fire:new Set,jet:new Set},this.bind()}bind(){let e=h=>document.getElementById(h),t=e("zone-move"),n=e("zone-look"),r=e("knob"),s=e("stick"),o=(h,u)=>{s.style.left=h+"px",s.style.top=u+"px",s.style.opacity="1"};t.addEventListener("pointerdown",h=>{!this.enabled||this.stick.id>=0||(this.touch=!0,t.setPointerCapture(h.pointerId),this.stick={id:h.pointerId,cx:h.clientX,cy:h.clientY},o(h.clientX,h.clientY),r.style.transform="translate(-50%,-50%)")}),t.addEventListener("pointermove",h=>{if(h.pointerId!==this.stick.id)return;let u=h.clientX-this.stick.cx,f=h.clientY-this.stick.cy,A=55,_=Math.hypot(u,f);_>A&&(u=u/_*A,f=f/_*A),r.style.transform=`translate(calc(-50% + ${u}px), calc(-50% + ${f}px))`,this.mx=u/A,this.mz=-f/A,Math.abs(this.mx)<.12&&(this.mx=0),Math.abs(this.mz)<.12&&(this.mz=0)});let a=h=>{h.pointerId===this.stick.id&&(this.stick.id=-1,this.mx=0,this.mz=0,s.style.opacity="0.35")};t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a),n.addEventListener("pointerdown",h=>{!this.enabled||this.look.id>=0||(this.touch=!0,n.setPointerCapture(h.pointerId),this.look={id:h.pointerId,x:h.clientX,y:h.clientY})}),n.addEventListener("pointermove",h=>{h.pointerId===this.look.id&&(this.turn((h.clientX-this.look.x)*.0062,(h.clientY-this.look.y)*.0055),this.look.x=h.clientX,this.look.y=h.clientY)});let c=h=>{h.pointerId===this.look.id&&(this.look.id=-1)};n.addEventListener("pointerup",c),n.addEventListener("pointercancel",c);let x=(h,u,f)=>{let A=e(h);A.addEventListener("pointerdown",E=>{E.preventDefault(),this.touch=!0,A.setPointerCapture(E.pointerId),u.add(E.pointerId),this[f]=!0,A.classList.add("down")});let _=E=>{u.delete(E.pointerId),u.size||(this[f]=!1,A.classList.remove("down"))};A.addEventListener("pointerup",_),A.addEventListener("pointercancel",_)};x("btn-fire",this.btn.fire,"fire"),x("btn-jet",this.btn.jet,"jet"),e("btn-reload").addEventListener("pointerdown",h=>{h.preventDefault(),this.rl=!0}),e("btn-weapon").addEventListener("pointerdown",h=>{h.preventDefault(),this.cycle=!0}),addEventListener("keydown",h=>{if(!this.enabled)return;let u=h.key.toLowerCase();this.keys.add(u),u>="1"&&u<="4"&&(this.sw=Number(u)-1),u==="r"&&(this.rl=!0),u==="q"&&(this.cycle=!0),u===" "&&h.preventDefault()}),addEventListener("keyup",h=>this.keys.delete(h.key.toLowerCase()));let l=e("game");l.addEventListener("mousedown",h=>{if(!(!this.enabled||this.touch)){if(document.pointerLockElement!==l){l.requestPointerLock?.();return}h.button===0&&(this.mouseFire=!0)}}),addEventListener("mouseup",()=>{this.mouseFire=!1}),addEventListener("mousemove",h=>{!this.enabled||document.pointerLockElement!==l||this.turn(h.movementX*.0022,h.movementY*.0022)}),addEventListener("wheel",h=>{this.enabled&&(this.sw=h.deltaY>0?-2:-3)},{passive:!0}),addEventListener("blur",()=>{this.keys.clear(),this.mouseFire=!1})}turn(e,t){this.yaw-=e*this.sens,this.pitch=g0(this.pitch-t*this.sens,-1.2,1.2)}read(e,t){let n=this.keys,r=this.mx,s=this.mz;(n.has("a")||n.has("arrowleft"))&&(r-=1),(n.has("d")||n.has("arrowright"))&&(r+=1),(n.has("w")||n.has("arrowup"))&&(s+=1),(n.has("s")||n.has("arrowdown"))&&(s-=1);let o=this.sw;this.cycle||o===-2?o=(e+1)%t:o===-3&&(o=(e+t-1)%t);let a={mx:g0(r,-1,1),mz:g0(s,-1,1),yaw:this.yaw,pitch:this.pitch,jet:this.jet||n.has(" ")||n.has("shift"),fire:this.fire||!!this.mouseFire,rl:this.rl,sw:o};return this.rl=!1,this.sw=-1,this.cycle=!1,a}reset(){this.mx=this.mz=0,this.jet=this.fire=!1,this.mouseFire=!1,this.stick.id=-1,this.look.id=-1,this.keys.clear()}};var qs=3.4,Mc=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},Dc=(i,e,t)=>Math.max(e,Math.min(t,i));function lm(i,e){let t=e.x-i.x,n=e.y+1.1-(i.y+In),r=e.z-i.z,s=Math.hypot(t,n,r);return s<.01?!0:vi(i.x,i.y+In,i.z,t/s,n/s,r/s,s)>=s-.4}function Fc(i,e){let t=e.ai,n=e.inp,r=e.body;if(!e.alive||i.over){n.fire=!1,n.jet=!1,n.mx=0,n.mz=0;return}if(t.think-=xt,t.think<=0){t.think=.2+i.rng()*.2;let x=null,l=70;for(let h of i.players.values()){if(h===e||!h.alive)continue;let u=Math.hypot(h.body.x-r.x,h.body.y-r.y,h.body.z-r.z);u<l&&lm(r,h.body)&&(x=h,l=u)}if(t.target=x?x.id:0,t.errYaw=(i.rng()-.5)*.24,t.errPitch=(i.rng()-.5)*.16,x){let h=l<9?2:l<40?1:3;h!==e.weapon&&(n.sw=h)}else e.mags[e.weapon]<St[e.weapon].mag/2&&(n.rl=!0)}t.strafeT-=xt,t.strafeT<=0&&(t.strafeT=.8+i.rng()*1.8,t.strafe=i.rng()<.5?-1:1);let s=t.target?i.players.get(t.target):null,o=n.yaw,a=0,c=!1;if(n.fire=!1,s&&s.alive){let x=s.body.x-r.x,l=s.body.y+1.2-(r.y+In),h=s.body.z-r.z,u=Math.hypot(x,h);o=Math.atan2(-x,-h)+t.errYaw,a=Math.atan2(l,u)+t.errPitch,n.mz=u>16?1:u<7?-.7:.1,n.mx=t.strafe*.8,s.body.y>r.y+2.5&&(c=!0),Math.abs(Mc(o-n.yaw))<.09&&(n.fire=St[e.weapon].auto||Math.floor(i.time*30)%2===0)}else(!t.wp||Math.hypot(t.wp[0]-r.x,t.wp[2]-r.z)<3)&&(t.wp=Zt.spawns[Math.floor(i.rng()*Zt.spawns.length)]),o=Math.atan2(-(t.wp[0]-r.x),-(t.wp[2]-r.z)),a=0,n.mz=1,n.mx=0,t.wp[1]>r.y+2&&(c=!0);if(t.stuckT+=xt,t.stuckT>=.6){let x=Math.hypot(r.x-t.lx,r.z-t.lz);t.stuckT=0,t.lx=r.x,t.lz=r.z,x<.6&&(n.mz!==0||n.mx!==0)&&(t.boost=.5,t.strafe=-t.strafe,t.wp=null)}t.boost>0&&(t.boost-=xt,c=!0),r.fuel<8?t.cool=!0:r.fuel>45&&(t.cool=!1),n.jet=c&&!t.cool,n.yaw+=Dc(Mc(o-n.yaw),-qs*xt,qs*xt),n.pitch+=Dc(a-n.pitch,-qs*xt,qs*xt)}var hm=3,um=4,wc=[15158332,3447003,3066993,15844367,10181046,15105570,1752220,15483002,9268835,9479342],_t=i=>Math.round(i*100)/100,Zs=class{constructor(e={}){this.rng=e.rng||Math.random,this.scoreLimit=e.scoreLimit||20,this.timeLimit=e.timeLimit||300,this.players=new Map,this.events=[],this.time=0,this.acc=0,this.nextId=1,this.matchStart=0,this.over=!1,this.winner=0,this.restartAt=0,this.rosterDirty=!0}addPlayer(e,t=!1){let n=this.nextId++,r={id:n,name:String(e||"Player").slice(0,14),bot:t,color:wc[(n-1)%wc.length],body:ar(),yaw:0,pitch:0,hp:or,alive:!1,respawnAt:0,weapon:1,mags:St.map(s=>s.mag),cool:0,reloadLeft:0,lastHit:-99,kills:0,deaths:0,wantFire:!1,fireHeld:!1,inp:{mx:0,mz:0,yaw:0,pitch:0,jet:!1,fire:!1,rl:!1,sw:-1},ai:t?{target:0,think:0,strafe:1,strafeT:0,stuckT:0,lx:0,lz:0,wp:null}:null};return this.players.set(n,r),this.respawn(r),this.rosterDirty=!0,n}removePlayer(e){this.players.delete(e)&&(this.rosterDirty=!0)}setInput(e,t){let n=this.players.get(e);if(!n||!t)return;let r=(o,a,c)=>Number.isFinite(o)?Math.max(a,Math.min(c,o)):0,s=n.inp;s.mx=r(t.mx,-1,1),s.mz=r(t.mz,-1,1),s.yaw=Number.isFinite(t.yaw)?t.yaw:s.yaw,s.pitch=r(t.pitch,-1.4,1.4),s.jet=!!t.jet,s.fire=!!t.fire,t.rl&&(s.rl=!0),Number.isInteger(t.sw)&&t.sw>=0&&t.sw<St.length&&(s.sw=t.sw)}respawn(e){let t=Zt.spawns[0],n=-1,r=[];for(let s=0;s<4;s++)r.push(Zt.spawns[Math.floor(this.rng()*Zt.spawns.length)]);for(let s of r){let o=1e9;for(let a of this.players.values())a===e||!a.alive||(o=Math.min(o,Math.hypot(a.body.x-s[0],a.body.z-s[2])));o>n&&(n=o,t=s)}e.body=ar(t[0],t[1],t[2]),e.hp=or,e.alive=!0,e.reloadLeft=0,e.cool=.5,e.mags=St.map(s=>s.mag),e.lastHit=this.time,e.yaw=Math.atan2(t[0],t[2]),e.inp.yaw=e.yaw}resetMatch(){this.over=!1,this.winner=0,this.matchStart=this.time;for(let e of this.players.values())e.kills=0,e.deaths=0,this.respawn(e);this.rosterDirty=!0,this.events.push(["reset"])}advance(e){for(this.acc+=Math.min(e,.25);this.acc>=xt;)this.acc-=xt,this.tick()}tick(){if(this.time+=xt,this.over){this.time>=this.restartAt&&this.resetMatch();return}for(let e of this.players.values()){if(e.bot&&Fc(this,e),!e.alive){this.time>=e.respawnAt&&this.respawn(e);continue}let t=e.inp;e.yaw=t.yaw,e.pitch=t.pitch,Ir(e.body,t,xt),t.sw>=0&&t.sw!==e.weapon&&(e.weapon=t.sw,e.reloadLeft=0,e.cool=.25),t.sw=-1,t.rl&&(this.startReload(e),t.rl=!1),this.combat(e,t),e.hp<or&&this.time-e.lastHit>um&&(e.hp=Math.min(or,e.hp+8*xt))}this.time-this.matchStart>=this.timeLimit&&this.endMatch()}startReload(e){let t=St[e.weapon];e.reloadLeft>0||e.mags[e.weapon]>=t.mag||(e.reloadLeft=t.reload)}combat(e,t){let n=St[e.weapon];if(e.cool>0&&(e.cool-=xt),e.reloadLeft>0){e.reloadLeft-=xt,e.reloadLeft<=0&&(e.reloadLeft=0,e.mags[e.weapon]=n.mag);return}let r=t.fire&&!e.fireHeld;if(e.fireHeld=t.fire,!(!t.fire||e.cool>0)&&!(!n.auto&&!r)){if(e.mags[e.weapon]<=0){this.startReload(e);return}e.mags[e.weapon]--,e.cool=n.rate,this.shoot(e,n),e.mags[e.weapon]<=0&&this.startReload(e)}}shoot(e,t){let n=e.body.x,r=e.body.y+In,s=e.body.z;for(let o=0;o<t.pellets;o++){let a=kr(e.yaw+(this.rng()-.5)*2*t.spread,e.pitch+(this.rng()-.5)*2*t.spread),x=vi(n,r,s,a[0],a[1],a[2],t.range),l=null;for(let h of this.players.values()){if(h===e||!h.alive)continue;let u=h.body,f=oo(n,r,s,a[0],a[1],a[2],u.x-wt,u.y,u.z-wt,u.x+wt,u.y+Rr,u.z+wt,x);f>=0&&f<x&&(x=f,l=h)}if(o<3&&this.events.push(["s",e.id,_t(n),_t(r),_t(s),_t(n+a[0]*x),_t(r+a[1]*x),_t(s+a[2]*x)]),l){let h=r+a[1]*x>l.body.y+1.35;this.damage(l,e,Math.round(t.dmg*(h?1.5:1)),h)}}}damage(e,t,n,r){!e.alive||this.over||(e.hp-=n,e.lastHit=this.time,this.events.push(["h",e.id,t.id,n,r?1:0]),!(e.hp>0)&&(e.hp=0,e.alive=!1,e.deaths++,e.respawnAt=this.time+hm,t.kills++,this.events.push(["k",t.id,e.id,t.weapon]),t.kills>=this.scoreLimit&&this.endMatch()))}endMatch(){if(this.over)return;let e=null;for(let t of this.players.values())(!e||t.kills>e.kills)&&(e=t);this.over=!0,this.winner=e?e.id:0,this.restartAt=this.time+8,this.events.push(["over",this.winner])}roster(){return[...this.players.values()].map(e=>({id:e.id,name:e.name,color:e.color,bot:e.bot}))}snapshot(){return{t:_t(this.time),left:Math.max(0,Math.round(this.timeLimit-(this.time-this.matchStart))),over:this.over?this.winner:0,lim:this.scoreLimit,p:[...this.players.values()].map(e=>[e.id,_t(e.body.x),_t(e.body.y),_t(e.body.z),_t(e.yaw),_t(e.pitch),Math.ceil(e.hp),e.weapon,e.alive?1:0,e.body.thrusting?1:0,e.mags[e.weapon],Math.round(e.body.fuel),e.kills,e.deaths,_t(e.reloadLeft),_t(e.body.vx),_t(e.body.vy),_t(e.body.vz)])}}drainEvents(){let e=this.events;return this.events=[],e}};var bc=["Rex","Nova","Bolt","Kira","Zed","Mako","Pixel","Jinx","Echo","Dash"],$n=(i,e,t)=>i+(e-i)*t,dm=(i,e,t)=>{let n=e-i;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;return i+n*t};function fm(i){return{id:i[0],x:i[1],y:i[2],z:i[3],yaw:i[4],pitch:i[5],hp:i[6],weapon:i[7],alive:!!i[8],thr:!!i[9],ammo:i[10],fuel:i[11],kills:i[12],deaths:i[13],reload:i[14],vx:i[15],vy:i[16],vz:i[17]}}var Js=class{constructor(){this.fx=[],this.roster=new Map,this.view={players:[],me:null,left:0,over:0,lim:20,ping:0},this.myId=0,this.onClosed=()=>{}}emit(e){for(let t of e)for(let n of this.fx)n(t)}setRoster(e){this.roster=new Map(e.map(t=>[t.id,t]))}decorate(e){let t=this.roster.get(e.id);return e.name=t?t.name:"?",e.color=t?t.color:16777215,e.bot=t?t.bot:!1,e}close(){}},tr=class extends Js{constructor({name:e="Player",bots:t=5,scoreLimit:n=20,timeLimit:r=300,net:s=null}={}){super(),this.isHost=!0,this.game=new Zs({scoreLimit:n,timeLimit:r}),this.myId=this.game.addPlayer(e),this.botTarget=t+1,this.net=s,this.peers=new Map,this.pending=[],this.sinceSnap=0,this.pingNote=0,this.balance(),s&&(s.onPeer=(o,a)=>{let c=this.game.addPlayer(a);this.peers.set(o,c),this.balance(),this.syncRoster(),s.sendTo(o,{k:"hello",id:c,roster:this.game.roster(),lim:n})},s.onLeave=o=>{let a=this.peers.get(o);a&&this.game.removePlayer(a),this.peers.delete(o),this.balance(),this.syncRoster()},s.onMsg=(o,a)=>{let c=this.peers.get(o);c&&(a.k==="in"?this.game.setInput(c,a.i):a.k==="ping"&&s.sendTo(o,{k:"pong",t:a.t}))},s.onClose=()=>this.onClosed("Lost connection to the server")),this.syncRoster()}humans(){let e=0;for(let t of this.game.players.values())t.bot||e++;return e}balance(){let e=this.game,t=Math.max(0,this.botTarget-this.humans()),n=[...e.players.values()].filter(r=>r.bot);for(let r=n.length;r<t;r++)e.addPlayer(bc[(e.nextId+r)%bc.length],!0);for(let r=n.length;r>t;r--)e.removePlayer(n[r-1].id)}syncRoster(){this.setRoster(this.game.roster()),this.game.rosterDirty=!1,this.net&&this.net.broadcast({k:"roster",r:this.game.roster()})}setLocalInput(e){this.game.setInput(this.myId,e)}update(e){let t=this.game;t.advance(e),t.rosterDirty&&this.syncRoster();let n=t.drainEvents();n.length&&(this.emit(n),this.pending.push(...n)),this.sinceSnap+=e,this.net&&this.sinceSnap>=.05&&(this.sinceSnap=0,this.net.broadcast({k:"s",s:t.snapshot(),e:this.pending}),this.pending=[]);let r=this.view;r.players=[];for(let s of t.players.values()){let o={id:s.id,x:s.body.x,y:s.body.y,z:s.body.z,yaw:s.yaw,pitch:s.pitch,hp:Math.ceil(s.hp),weapon:s.weapon,alive:s.alive,thr:s.body.thrusting,kills:s.kills,deaths:s.deaths,ammo:s.mags[s.weapon],fuel:Math.round(s.body.fuel),reload:s.reloadLeft};r.players.push(this.decorate(o)),s.id===this.myId&&(r.me=o)}r.left=Math.max(0,Math.round(t.timeLimit-(t.time-t.matchStart))),r.over=t.over?t.winner:0,r.lim=t.scoreLimit}close(){this.net&&this.net.close()}},Br=class extends Js{constructor(e){super(),this.isHost=!1,this.net=e,this.snaps=[],this.pred=ar(),this.predAlive=!1,this.input={mx:0,mz:0,yaw:0,pitch:0,jet:!1,fire:!1,rl:!1,sw:-1},this.latched={rl:!1,sw:-1},this.acc=0,this.sendT=0,this.pingT=0,this.rtt=.05,this.last=null,this.ready=new Promise(t=>{this.resolveReady=t}),e.onMsg=t=>this.onMsg(t),e.onClose=t=>this.onClosed(t||"Disconnected")}onMsg(e){if(e.k==="hello")this.myId=e.id,this.setRoster(e.roster),this.view.lim=e.lim,this.resolveReady();else if(e.k==="roster")this.setRoster(e.r);else if(e.k==="s"){let t=new Map(e.s.p.map(n=>[n[0],fm(n)]));this.snaps.push({rt:performance.now(),rows:t}),this.snaps.length>6&&this.snaps.shift(),this.last=e.s,e.e&&e.e.length&&this.emit(e.e),this.reconcile(t.get(this.myId))}else e.k==="pong"&&(this.rtt=$n(this.rtt,(performance.now()-e.t)/1e3,.3))}reconcile(e){if(!e)return;let t=this.pred;if(!e.alive||!this.predAlive||Math.hypot(e.x-t.x,e.y-t.y,e.z-t.z)>2.5)Object.assign(t,{x:e.x,y:e.y,z:e.z,vx:e.vx,vy:e.vy,vz:e.vz,fuel:e.fuel});else{let n=this.rtt/2+.03;t.x=$n(t.x,e.x+e.vx*n,.12),t.y=$n(t.y,e.y+e.vy*n,.12),t.z=$n(t.z,e.z+e.vz*n,.12),t.fuel=e.fuel}this.predAlive=e.alive}setLocalInput(e){this.input=e,e.rl&&(this.latched.rl=!0),e.sw>=0&&(this.latched.sw=e.sw)}update(e){for(this.acc+=Math.min(e,.25);this.acc>=xt;)this.acc-=xt,this.predAlive&&Ir(this.pred,this.input,xt);this.sendT+=e,this.pingT+=e,this.sendT>=1/30&&(this.sendT=0,this.net.send({k:"in",i:{...this.input,rl:this.latched.rl,sw:this.latched.sw}}),this.latched.rl=!1,this.latched.sw=-1),this.pingT>=1&&(this.pingT=0,this.net.send({k:"ping",t:performance.now()}));let t=this.view;t.players=[],t.ping=Math.round(this.rtt*1e3);let n=this.snaps.length;if(!n)return;let r=performance.now()-110,s=this.snaps[0],o=this.snaps[0];for(let c=0;c<n;c++){if(this.snaps[c].rt<=r&&(s=this.snaps[c]),this.snaps[c].rt>r){o=this.snaps[c];break}o=this.snaps[c]}let a=s===o?1:Math.max(0,Math.min(1,(r-s.rt)/(o.rt-s.rt)));for(let[c,x]of this.snaps[n-1].rows){let l=s.rows.get(c)||x,h=o.rows.get(c)||x,u={...x,x:$n(l.x,h.x,a),y:$n(l.y,h.y,a),z:$n(l.z,h.z,a),yaw:dm(l.yaw,h.yaw,a),pitch:$n(l.pitch,h.pitch,a)};c===this.myId&&(x.alive&&(u.x=this.pred.x,u.y=this.pred.y,u.z=this.pred.z,u.thr=this.input.jet&&this.pred.fuel>0),u.yaw=this.input.yaw,u.pitch=this.input.pitch,t.me=u),t.players.push(this.decorate(u))}this.last&&(t.left=this.last.left,t.over=this.last.over,t.lim=this.last.lim)}close(){this.net.close()}};var Tc="JA1";function A0(i){let e=x=>{let l=i.match(x);return l?l[1].trim():""},t=e(/^a=ice-ufrag:(.+)$/m),n=e(/^a=ice-pwd:(.+)$/m),r=e(/^a=fingerprint:sha-256 (.+)$/m).replace(/:/g,""),s=e(/^a=setup:(.+)$/m)==="active"?"a":"p",o=[];for(let x of i.split(/\r?\n/)){let l=x.match(/^a=candidate:\S+ \d+ udp \d+ (\S+) (\d+) typ host/);l&&o.push([l[1],l[2]])}o.sort((x,l)=>Sc(l[0])-Sc(x[0]));let a=o.filter(([x])=>/^\d+\.\d+\.\d+\.\d+$/.test(x)),c=(a.length?a:o).slice(0,2).map(([x,l])=>`${x}/${l}`).join(",");if(!t||!n||!r)throw new Error("Could not read connection info");return[Tc,t,n,r,s,c].join("|")}function Sc(i){return/^\d+\.\d+\.\d+\.\d+$/.test(i)?/^(192\.168|10\.|172\.(1[6-9]|2\d|3[01]))/.test(i)?3:2:i.endsWith(".local")?1:i.toLowerCase().startsWith("fe80")?0:1}function v0(i){let e=String(i).trim().split("|");if(e.length!==6||e[0]!==Tc)throw new Error("Not a valid Jet Arena code");let[,t,n,r,s,o]=e;if(!/^[0-9A-Fa-f]{64}$/.test(r))throw new Error("Bad code (fingerprint)");let a=r.toUpperCase().match(/.{2}/g).join(":"),c=o?o.split(",").map(h=>h.split("/")):[],x=c.find(([h])=>/^\d+\.\d+\.\d+\.\d+$/.test(h));return["v=0","o=- 1234567890 2 IN IP4 127.0.0.1","s=-","t=0 0","a=group:BUNDLE 0","a=msid-semantic: WMS",`m=application ${x?x[1]:9} UDP/DTLS/SCTP webrtc-datachannel`,`c=IN IP4 ${x?x[0]:"0.0.0.0"}`,...c.map(([h,u],f)=>`a=candidate:${1e3+f} 1 udp ${2122260223-f} ${h} ${u} typ host generation 0`),`a=ice-ufrag:${t}`,`a=ice-pwd:${n}`,`a=fingerprint:sha-256 ${a}`,`a=setup:${s==="a"?"active":"actpass"}`,"a=mid:0","a=sctp-port:5000","a=max-message-size:262144"].join(`\r
`)+`\r
`}var ln=JSON.stringify,Mr=class{constructor(e){this.mode=e,this.code="",this.links=new Map,this.pending=new Map,this.nextPid=1,this.ws=null,this.onPeer=()=>{},this.onLeave=()=>{},this.onMsg=()=>{},this.onClose=()=>{}}sendTo(e,t){let n=this.links.get(e);n&&n.send(t)}broadcast(e){if(this.mode==="online"){this.ws&&this.ws.readyState===1&&this.ws.send(ln({t:"to",pid:0,d:e}));return}let t=ln(e);for(let n of this.links.values())n.sendRaw(t)}close(){this.ws&&(this.ws.onclose=null,this.ws.close());for(let{pc:e}of this.pending.values())e.close();for(let e of this.links.values())e.close&&e.close();this.links.clear(),this.pending.clear()}async hotspotInvite(){let e=new RTCPeerConnection({iceServers:[]}),t=e.createDataChannel("g"),n=this.nextPid++;this.pending.set(n,{pc:e,dc:t});let r=!1;t.onmessage=o=>{let a=JSON.parse(o.data);if(!r){a.k==="name"&&(r=!0,this.onPeer(n,String(a.name||"Player").slice(0,14)));return}this.onMsg(n,a)},t.onopen=()=>{this.links.set(n,{send:o=>t.readyState==="open"&&t.send(ln(o)),sendRaw:o=>t.readyState==="open"&&t.send(o),close:()=>e.close()})};let s=()=>{(this.links.delete(n)||this.pending.delete(n))&&this.onLeave(n),e.close()};return t.onclose=s,e.onconnectionstatechange=()=>{(e.connectionState==="failed"||e.connectionState==="disconnected")&&s()},await e.setLocalDescription(await e.createOffer()),await Pc(e),{pid:n,code:A0(e.localDescription.sdp)}}async hotspotAccept(e,t){let n=this.pending.get(e);if(!n)throw new Error("That invite expired, make a new one");await n.pc.setRemoteDescription({type:"answer",sdp:v0(t)})}},$s=class{constructor(){this.pid=0,this.send=()=>{},this.onMsg=()=>{},this.onClose=()=>{},this.close=()=>{}}};function Pc(i,e=2500){return new Promise(t=>{if(i.iceGatheringState==="complete")return t();let n=setTimeout(r,e);function r(){clearTimeout(n),i.removeEventListener("icegatheringstatechange",s),t()}function s(){i.iceGatheringState==="complete"&&r()}i.addEventListener("icegatheringstatechange",s)})}function Rc(i,e,t=!0){return new Promise((n,r)=>{let s=new Mr("online"),o;try{o=new WebSocket(i)}catch{return r(new Error("Bad server address"))}s.ws=o;let a=!1;o.onopen=()=>o.send(ln({t:"create",name:e,pub:t})),o.onerror=()=>{a||(a=!0,r(new Error("Could not reach the server")))},o.onclose=()=>s.onClose(),o.onmessage=c=>{let x=JSON.parse(c.data);x.t==="created"?(a=!0,s.code=x.code,n(s)):x.t==="peer"?(s.links.set(x.pid,{send:l=>o.send(ln({t:"to",pid:x.pid,d:l}))}),s.onPeer(x.pid,x.name)):x.t==="left"?(s.links.delete(x.pid),s.onLeave(x.pid)):x.t==="from"?s.onMsg(x.pid,x.d):x.t==="error"&&!a&&(a=!0,r(new Error(x.msg)))}})}function Ic(i,e,t){return new Promise((n,r)=>{let s=new $s,o;try{o=new WebSocket(i)}catch{return r(new Error("Bad server address"))}let a=!1;o.onopen=()=>o.send(ln({t:"join",code:String(e).trim().toUpperCase(),name:t})),o.onerror=()=>{a||(a=!0,r(new Error("Could not reach the server")))},o.onclose=()=>s.onClose("Disconnected"),s.send=c=>{o.readyState===1&&o.send(ln({t:"up",d:c}))},s.close=()=>{o.onclose=null,o.close()},o.onmessage=c=>{let x=JSON.parse(c.data);x.t==="joined"?(a=!0,s.pid=x.pid,n(s)):x.t==="d"?s.onMsg(x.d):x.t==="closed"?s.onClose("The host closed the room"):x.t==="error"&&!a&&(a=!0,r(new Error(x.msg)))}})}function kc(i){return new Promise((e,t)=>{let n;try{n=new WebSocket(i)}catch{return t(new Error("Bad server address"))}let r=setTimeout(()=>{n.close(),t(new Error("Server did not answer"))},5e3);n.onopen=()=>n.send(ln({t:"list"})),n.onerror=()=>{clearTimeout(r),t(new Error("Could not reach the server"))},n.onmessage=s=>{let o=JSON.parse(s.data);o.t==="rooms"&&(clearTimeout(r),n.close(),e(o.rooms))}})}async function Lc(i,e){let t=new RTCPeerConnection({iceServers:[]}),n=new $s;return n.opened=new Promise((r,s)=>{let o=setTimeout(()=>s(new Error("Timed out. Are you both on the same hotspot?")),45e3);t.ondatachannel=a=>{let c=a.channel;n.send=x=>{c.readyState==="open"&&c.send(ln(x))},n.close=()=>t.close(),c.onopen=()=>{clearTimeout(o),c.send(ln({k:"name",name:e})),r(n)},c.onmessage=x=>n.onMsg(JSON.parse(x.data)),c.onclose=()=>n.onClose("Disconnected from host")},t.onconnectionstatechange=()=>{t.connectionState==="failed"&&n.onClose("Connection failed")}}),await t.setRemoteDescription({type:"offer",sdp:v0(i)}),await t.setLocalDescription(await t.createAnswer()),await Pc(t),{net:n,answer:A0(t.localDescription.sdp)}}var Hc=G0(zc(),1),Gc=G0(Vc(),1),Kn=null;async function Ks(){if(Kn)return Kn;try{Kn=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1})}catch{Kn=null}return Kn}function Qs(){Kn&&Kn.getTracks().forEach(i=>i.stop()),Kn=null}function _0(i,e,t=260){let n=(0,Hc.default)(0,"M");n.addData(e),n.make();let r=n.getModuleCount(),s=3,o=Math.floor(t/(r+s*2)),a=o*(r+s*2);i.width=i.height=a;let c=i.getContext("2d");c.fillStyle="#fff",c.fillRect(0,0,a,a),c.fillStyle="#000";for(let x=0;x<r;x++)for(let l=0;l<r;l++)n.isDark(x,l)&&c.fillRect((l+s)*o,(x+s)*o,o,o)}async function y0(i,e){let t=await Ks();if(!t)return null;i.srcObject=t,i.setAttribute("playsinline",""),i.muted=!0,await i.play().catch(()=>{});let n=document.createElement("canvas"),r=n.getContext("2d",{willReadFrequently:!0}),s=!1,o=setInterval(()=>{if(s||i.readyState<2||!i.videoWidth)return;let a=360,c=Math.round(i.videoHeight/i.videoWidth*a);n.width=a,n.height=c,r.drawImage(i,0,0,a,c);let x=(0,Gc.default)(r.getImageData(0,0,a,c).data,a,c,{inversionAttempts:"dontInvert"});x&&x.data.startsWith("JA1|")&&(s=!0,clearInterval(o),e(x.data))},180);return()=>{s=!0,clearInterval(o),i.srcObject=null}}var mt=null,B0=!0;function pi(){if(mt){mt.state==="suspended"&&mt.resume();return}let i=window.AudioContext||window.webkitAudioContext;i&&(mt=new i)}function Wc(i){B0=i}function Wt(i,e,t="square",n=.1,r=0){if(!mt||!B0)return;let s=mt.currentTime,o=mt.createOscillator(),a=mt.createGain();o.type=t,o.frequency.setValueAtTime(i,s),r&&o.frequency.exponentialRampToValueAtTime(Math.max(30,i+r),s+e),a.gain.setValueAtTime(n,s),a.gain.exponentialRampToValueAtTime(1e-4,s+e),o.connect(a),a.connect(mt.destination),o.start(s),o.stop(s+e)}function js(i,e=.15,t=1800){if(!mt||!B0)return;let n=mt.currentTime,r=Math.floor(mt.sampleRate*i),s=mt.createBuffer(1,r,mt.sampleRate),o=s.getChannelData(0);for(let l=0;l<r;l++)o[l]=(Math.random()*2-1)*(1-l/r);let a=mt.createBufferSource();a.buffer=s;let c=mt.createBiquadFilter();c.type="lowpass",c.frequency.value=t;let x=mt.createGain();x.gain.value=e,a.connect(c),c.connect(x),x.connect(mt.destination),a.start(n)}var bn={shot(i,e=!0){let t=e?1:.35;i===2?js(.18,.22*t,1200):i===3?(js(.3,.25*t,900),Wt(120,.25,"sawtooth",.12*t,-60)):i===1?(js(.06,.12*t,3e3),Wt(240,.05,"square",.05*t)):(js(.08,.14*t,2400),Wt(320,.07,"square",.06*t,-120))},hit(){Wt(900,.05,"triangle",.12)},headshot(){Wt(1400,.08,"triangle",.14)},hurt(){Wt(160,.15,"sawtooth",.12,-80)},kill(){Wt(520,.1,"triangle",.14),setTimeout(()=>Wt(780,.14,"triangle",.14),90)},die(){Wt(300,.5,"sawtooth",.14,-240)},reload(){Wt(180,.06,"square",.08),setTimeout(()=>Wt(260,.06,"square",.08),350)},win(){[523,659,784,1046].forEach((i,e)=>setTimeout(()=>Wt(i,.2,"triangle",.15),e*130))}};var oe=i=>document.getElementById(i),Tn={get(i,e){try{let t=localStorage.getItem("ja_"+i);return t===null?e:t}catch{return e}},set(i,e){try{localStorage.setItem("ja_"+i,e)}catch{}}},Qn=new Xs(oe("game")),ut=new Ys,Xe=null,nn=!1,Ei=!1,wr="s-menu",Xt=null;function Dt(i){wr=i;for(let e of document.querySelectorAll(".screen"))e.classList.toggle("on",e.id===i)}function S0(){wr="";for(let i of document.querySelectorAll(".screen"))i.classList.remove("on")}document.querySelectorAll("[data-back]").forEach(i=>i.addEventListener("click",()=>Dt(nn?"s-pause":"s-menu")));var pm=(navigator.hardwareConcurrency||4)<=2?"0":"1";oe("name").value=Tn.get("name","");oe("qual").value=Tn.get("qual",pm);oe("sens").value=Tn.get("sens","1");oe("cam3").value=Tn.get("cam3","1");oe("snd").value=Tn.get("snd","1");function Zc(){Qn.setQuality(Number(oe("qual").value)),ut.sens=Number(oe("sens").value),Qn.thirdPerson=oe("cam3").value==="1",Wc(oe("snd").value==="1");for(let i of["qual","sens","cam3","snd"])Tn.set(i,oe(i).value)}for(let i of["qual","sens","cam3","snd"])oe(i).addEventListener("input",Zc);Zc();var nr=()=>{let i=oe("name").value.trim()||"Player";return Tn.set("name",oe("name").value.trim()),i};oe("b-settings").onclick=()=>Dt("s-settings");oe("p-settings").onclick=()=>Dt("s-settings");var mm=matchMedia("(display-mode: standalone)").matches||navigator.standalone;if(!mm){let i=/iphone|ipad|ipod/i.test(navigator.userAgent);oe("install").textContent=i?'Tip: tap the Share button, then "Add to Home Screen" to play fullscreen with no browser bar.':'Tip: open the browser menu and choose "Install app" / "Add to Home screen" for fullscreen play.'}function br(i,{reset:e=!1}={}){Xe=i,i.onClosed=t=>{gi(),T0(t||"Disconnected")},i.fx.length=0,i.fx.push(Em),Qn.clearPlayers(),e&&i.game&&i.game.resetMatch(),ut.reset(),ut.yaw=0,ut.pitch=0,nn=!0,Ei=!1,document.body.classList.add("playing"),document.body.classList.toggle("touch",ut.touch||matchMedia("(pointer:coarse)").matches),oe("hud").classList.add("on"),S0(),ut.enabled=!0,oe("net").textContent="",pi(),document.documentElement.requestFullscreen?.().catch(()=>{});try{navigator.wakeLock?.request("screen").catch(()=>{})}catch{}}function gi(){Xe&&Xe.close(),Xt&&(Xt.close(),Xt=null),Qs(),ir(),Xe=null,nn=!1,Ei=!1,ut.enabled=!1,ut.reset(),document.body.classList.remove("playing"),oe("hud").classList.remove("on"),document.fullscreenElement&&document.exitFullscreen?.().catch(()=>{}),Dt("s-menu")}oe("p-quit").onclick=gi;oe("e-quit").onclick=gi;oe("l-leave").onclick=gi;function T0(i){let e=document.createElement("div");e.textContent=i,Object.assign(e.style,{position:"fixed",left:"50%",top:"14px",transform:"translateX(-50%)",background:"#ef476f",padding:"10px 16px",borderRadius:"10px",zIndex:99,fontWeight:700}),document.body.appendChild(e),setTimeout(()=>e.remove(),3500)}function Sr(i){nn&&(Ei=i,ut.enabled=!i,i?(ut.reset(),Dt("s-pause"),oe("p-invite").style.display=Xt?"block":"none"):S0())}oe("pause").addEventListener("pointerdown",i=>{i.preventDefault(),Sr(!0)});oe("p-resume").onclick=()=>Sr(!1);addEventListener("keydown",i=>{i.key==="Escape"&&nn&&wr!=="s-end"&&Sr(!Ei)});document.addEventListener("visibilitychange",()=>{document.hidden&&nn&&!Ei&&Sr(!0)});document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&nn&&!Ei&&!ut.touch&&wr===""&&Sr(!0)});oe("b-solo").onclick=()=>{pi(),br(new tr({name:nr(),bots:5}),{reset:!0})};var Xc=/^https?:$/.test(location.protocol)?`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`:"";oe("server").value=Tn.get("server",Xc)||Xc;var no=()=>{let i=oe("server").value.trim();return Tn.set("server",i),i},mi=i=>{oe("o-err").textContent=i||""};oe("b-online").onclick=()=>{Dt("s-online"),mi(""),Jc()};oe("o-refresh").onclick=Jc;async function Jc(){let i=oe("rooms");if(i.textContent="",!!no())try{let e=await kc(no());if(!e.length){i.innerHTML='<div class="note">No public rooms yet. Create one!</div>';return}for(let t of e){let n=document.createElement("div");n.className="room";let r=document.createElement("span");r.textContent=`${t.name}  \xB7  ${t.players}/${t.max}`;let s=document.createElement("button");s.textContent="Join",s.onclick=()=>$c(t.code),n.append(r,s),i.appendChild(n)}}catch(e){mi(e.message)}}oe("o-host").onclick=async()=>{pi(),mi("");try{let i=await Rc(no(),nr(),!0),e=new tr({name:nr(),bots:4,net:i});Xe=e,e.onClosed=t=>{gi(),T0(t)},oe("l-code").textContent=i.code,oe("l-bots").value=5,oe("l-botsn").textContent="5",Dt("s-lobby")}catch(i){mi(i.message)}};oe("l-bots").oninput=()=>{let i=Number(oe("l-bots").value);oe("l-botsn").textContent=String(i),Xe&&Xe.botTarget!==void 0&&(Xe.botTarget=i,Xe.balance())};oe("l-start").onclick=()=>br(Xe,{reset:!0});oe("o-join").onclick=()=>$c(oe("code").value);async function $c(i){if(pi(),mi(""),String(i).trim().length<4)return mi("Enter the 4-letter room code");try{let e=await Ic(no(),i,nr()),t=new Br(e);await t.ready,br(t)}catch(e){mi(e.message)}}setInterval(()=>{if(wr==="s-lobby"&&Xe){let i=oe("l-players");i.textContent="";for(let e of Xe.roster.values()){let t=document.createElement("div");t.innerHTML='<span></span><span style="color:var(--dim)"></span>',t.firstChild.textContent=e.name,t.lastChild.textContent=e.bot?"bot":e.id===Xe.myId?"you":"friend",i.appendChild(t)}}},500);var Fr=null;function ir(){Fr&&(Fr(),Fr=null),oe("cam").style.display="none",oe("cam2").style.display="none"}var Kc=i=>{try{navigator.clipboard.writeText(i)}catch{}},Sn=(i,e)=>{oe(i).textContent=e||""};oe("b-hotspot").onclick=()=>Dt("s-hot");oe("h-host").onclick=async()=>{pi(),await Ks(),Xt=new Mr("hotspot");let i=new tr({name:nr(),bots:4,net:Xt});Xe=i,i.onClosed=n=>{gi(),T0(n)};let e=Xt.onPeer,t=Xt.onLeave;Xt.onPeer=(n,r)=>{e(n,r),to(),n===P0&&(Sn("hh-err",""),oe("hh-answer").value="",io())},Xt.onLeave=n=>{t(n),to()},Dt("s-hhost"),to(),await io()};var P0=0;async function io(){ir(),Sn("hh-err","");try{let{pid:i,code:e}=await Xt.hotspotInvite();P0=i,oe("hh-offer").value=e,_0(oe("hh-qr"),e,320);let t=await y0(oe("cam"),n=>{oe("hh-answer").value=n,Qc()});t&&(Fr=t,oe("cam").style.display="block")}catch(i){Sn("hh-err",i.message)}}async function Qc(){let i=oe("hh-answer").value.trim();if(!i)return Sn("hh-err","Scan or paste your friend's code first");try{await Xt.hotspotAccept(P0,i),Sn("hh-err","Connecting\u2026")}catch(e){Sn("hh-err",e.message)}}function to(){let i=oe("hh-players");if(i.textContent="",!!Xe)for(let e of Xe.game.roster()){if(e.bot)continue;let t=document.createElement("div");t.innerHTML='<span></span><span style="color:var(--good)">connected</span>',t.firstChild.textContent=e.name+(e.id===Xe.myId?" (you)":""),i.appendChild(t)}}oe("hh-connect").onclick=Qc;oe("hh-copy").onclick=()=>Kc(oe("hh-offer").value);oe("hh-next").onclick=io;oe("hh-start").onclick=()=>{ir(),br(Xe,{reset:!nn})};oe("hh-back").onclick=()=>{ir(),nn?Dt("s-pause"):gi()};oe("p-invite").onclick=()=>{Dt("s-hhost"),to(),io()};oe("h-join").onclick=async()=>{pi(),await Ks(),Dt("s-hjoin"),oe("hj-step2").style.display="none",Sn("hj-err","");let i=await y0(oe("cam2"),e=>{oe("hj-offer").value=e,jc(e)});i&&(Fr=i,oe("cam2").style.display="block")};oe("hj-go").onclick=()=>jc(oe("hj-offer").value);var M0=!1;async function jc(i){if(!M0){M0=!0,Sn("hj-err","");try{ir();let{net:e,answer:t}=await Lc(i.trim(),nr());oe("hj-answer").value=t,_0(oe("hj-qr"),t,320),oe("hj-step2").style.display="block",oe("hj-copy").onclick=()=>Kc(t),await e.opened;let n=new Br(e);await n.ready,Qs(),br(n)}catch(e){Sn("hj-err",e.message||"Could not connect")}M0=!1}}oe("hj-back").onclick=()=>{ir(),Qs(),Dt("s-hot")};var D0=oe("feed");function b0(i){let e=Xe&&Xe.roster.get(i);return e?e.name:"?"}function Em(i){let e=Xe?Xe.myId:0,t=Xe.view;if(i[0]==="s"){Qn.tracer(i[2],i[3],i[4],i[5],i[6],i[7]);let n=t.players.find(o=>o.id===i[1]),r=i[1]===e,s=t.me?Math.hypot(i[2]-t.me.x,i[4]-t.me.z):99;(r||s<35)&&bn.shot(n?n.weapon:0,r||s<12),r&&(Qn.kick=.012)}else if(i[0]==="h")i[2]===e&&(Yc(oe("hitm"),i[4]?"head":""),(i[4]?bn.headshot:bn.hit)()),i[1]===e&&(Yc(oe("vig")),bn.hurt(),Qn.addShake(.08));else if(i[0]==="k"){let n=St[i[3]]?St[i[3]].name:"",r=document.createElement("div");for(r.textContent=`${b0(i[1])}  \u279C  ${b0(i[2])}  (${n})`,(i[1]===e||i[2]===e)&&(r.style.background="rgba(255,159,28,.55)"),D0.appendChild(r),setTimeout(()=>r.remove(),4600);D0.children.length>5;)D0.firstChild.remove();i[1]===e&&bn.kill(),i[2]===e&&bn.die()}}function Yc(i,e){i.classList.remove("head"),e&&i.classList.add(e),i.classList.add("on"),clearTimeout(i._t),i._t=setTimeout(()=>i.classList.remove("on"),70)}var F0=0,eo=0,gm=!0,w0=0;function Am(i){let e=Xe.view,t=e.me;if(!t)return;oe("hp").style.width=Math.max(0,t.hp)+"%",oe("hpbar").classList.toggle("low",t.hp<30),oe("fuel").style.width=t.fuel+"%",oe("fuelbar").classList.toggle("low",t.fuel<12);let n=St[t.weapon];oe("wname").textContent=n.name,oe("ammon").textContent=t.reload>0?"RELOAD":t.ammo+" / "+n.mag,t.reload>0&&!w0?(bn.reload(),w0=1):t.reload<=0&&(w0=0);let r=e.left;if(oe("timer").textContent=Math.floor(r/60)+":"+String(r%60).padStart(2,"0"),oe("goal").textContent="First to "+e.lim+" kills",oe("net").textContent=Xe.isHost?Xe.net?"HOST":"":e.ping+" ms",oe("banner").innerHTML=t.alive?"":"Respawning\u2026<small>Take cover, then jump back in</small>",gm=t.alive,F0-=i,F0<=0||e.over!==eo){F0=.3;let s=[...e.players].sort((a,c)=>c.kills-a.kills||a.deaths-c.deaths),o=oe("board");o.textContent="";for(let a of s.slice(0,5)){let c=document.createElement("div");a.id===t.id&&(c.className="me");let x=document.createElement("span"),l=document.createElement("span");x.textContent=a.name,l.textContent=a.kills,c.append(x,l),o.appendChild(c)}if(e.over&&!eo){bn[e.over===t.id?"win":"die"](),oe("e-title").textContent=e.over===t.id?"You win! \u{1F3C6}":b0(e.over)+" wins";let a=oe("e-list");a.textContent="";for(let c of s){let x=document.createElement("div");x.innerHTML="<span></span><span></span>",x.firstChild.textContent=c.name,x.lastChild.textContent=c.kills+" / "+c.deaths,a.appendChild(x)}ut.reset(),ut.enabled=!1,Dt("s-end")}else!e.over&&eo&&(Dt(""),S0(),ut.enabled=!0);eo=e.over}}var qc=performance.now();function el(i){requestAnimationFrame(el);let e=Math.min(.1,(i-qc)/1e3);if(qc=i,!Xe)return;if(!(Ei&&Xe.isHost&&!Xe.net)){let n=Xe.view.me,r=n?n.weapon:1;nn?Xe.setLocalInput(ut.read(r,St.length)):Xe.setLocalInput({mx:0,mz:0,yaw:ut.yaw,pitch:ut.pitch,jet:!1,fire:!1}),Xe.update(e)}nn&&(Qn.draw(e,Xe.view,{yaw:ut.yaw,pitch:ut.pitch}),Am(e))}requestAnimationFrame(el);"serviceWorker"in navigator&&/^https?:$/.test(location.protocol)&&navigator.serviceWorker.register("sw.js").catch(()=>{});window.__ja={get session(){return Xe},input:ut,renderer:Qn};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
