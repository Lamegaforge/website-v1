waJSQuery(window).load(function(){
initializeAllWA_gallery();
});
function CSdZh()
{
var oGdgq=waJSQuery(".wa-fullscreen-contenair:visible");
var evIKj=oGdgq.find(".wa-gallery")
if(evIKj.length>0)
{
var skFRI=oGdgq.data("wa-window-size")
if((skFRI==undefined)||((skFRI.width()!=getWindowSize().width())||(skFRI.height()!=getWindowSize().height())))
{
var mTYEb=xmVee(evIKj)
var QsFOU=mTYEb.data("timer_resize")
if(QsFOU!=null)
{
clearTimeout(QsFOU)
mTYEb.data("timer_resize",null)
}
QsFOU=wa_timeout(function(){mvWVN(evIKj)},200);
mTYEb.data("timer_resize",QsFOU)
oGdgq.data("wa-window-size",getWindowSize())
}
}
}
waJSQuery(window).scroll(function()
{
CSdZh()
});
waJSQuery(window).resize(function()
{
CSdZh()
});
function centerGalleryContainer()
{
return;
var oGdgq=waJSQuery('#wa-dialog-container');
var Ptubu=waJSQuery(window).scrollLeft();
var USKhS=waJSQuery(window).scrollTop();
var UBWtK=getWindowSize()
var evIKj=oGdgq.find(".wa-gallery")
if(evIKj.length>0)
{
oGdgq.css({left:Ptubu,top:USKhS,width:UBWtK.width(),height:UBWtK.height()})
oGdgq.show()
}
}
function rOpUJ(ZhnDQ,QcqPg)
{
if(QcqPg<0)QcqPg=0;
var WENHo=uewab(ZhnDQ);
if(!ZhnDQ.data("datas"))
{
alert('browser error')
return;
}
var QLves=Xnjsh(ZhnDQ)
var DerZE=Wqaql(ZhnDQ);
if(DerZE<=0) return;
if(QcqPg+1>Math.ceil(QLves/DerZE)) return;
if(WENHo==QcqPg) return;
var Onafd=ZhnDQ.find(".wa-gallery-page-selector") 
var YnmCr=fLIdE(ZhnDQ)
var xVHqk=(YnmCr==0)?1:0;
var SBQQj=LknHR(ZhnDQ,YnmCr);
var EjPFL=LknHR(ZhnDQ,xVHqk);
var KKPqm=ZhnDQ.find(".wa-gallery-scroll-pane");
var teEgb=500;
if(IdpUW(ZhnDQ))return;
KQSnq(ZhnDQ,true)
var dEglS=ZhnDQ.data("mode")
var gEQLD=ZhnDQ.data("type_gallery") 
var ncTdS=ZhnDQ.data("datas").global_config.transition_effect/100;
if(dEglS!="fullscreen")
{
if(gEQLD==0)
{
ncTdS=1;
}
}
var QEGUc=ncTdS;
var dvmHg=true;
if(ncTdS>0.85)
{
dvmHg=false 
}
if(isMobileBrowser()&&(isIPad()==false))
{
if(ncTdS<0.5)
{
QEGUc=0
}
else
{
dvmHg=false
QEGUc=1
}
}
if(dvmHg)
{
EjPFL.fadeIn(teEgb)
SBQQj.fadeOut(teEgb)
}
else
{
EjPFL.show() 
}
var dAeqe=0;
var ITkEG=KKPqm.position().left
if(QcqPg>WENHo)
{
dAeqe=SBQQj.position().left+QEGUc*SBQQj.width();
ITkEG-=QEGUc*SBQQj.width();
}
if(QcqPg<WENHo)
{
dAeqe=SBQQj.position().left-QEGUc*SBQQj.width();
ITkEG+=QEGUc*SBQQj.width();
}
SBQQj.css("z-index",1)
EjPFL.css("z-index",0)
EjPFL.css("left",dAeqe)
var lLTbe=waJSQuery(">.wa-gallery-image-contenair",EjPFL);
var inphe=QcqPg*DerZE
lLTbe.each(function(i)
{
if(inphe+i<QLves)
{
eVNJb(waJSQuery(this),ZhnDQ,inphe+i)
}
else
{
eVNJb(waJSQuery(this),ZhnDQ,null)
}
});



{
KKPqm.animate({left:ITkEG},teEgb,function(){
ftZSQ(ZhnDQ,QcqPg)
});
}
}
function ftZSQ(ZhnDQ,QcqPg)
{
var YnmCr=fLIdE(ZhnDQ)
var xVHqk=(YnmCr==0)?1:0;
KQSnq(ZhnDQ,false)
ZhnDQ.data("page",QcqPg)
ZhnDQ.data("first-layout",xVHqk) 
var KKPqm=ZhnDQ.find(".wa-gallery-scroll-pane");
var SBQQj=LknHR(ZhnDQ,YnmCr);
var EjPFL=LknHR(ZhnDQ,xVHqk);
SBQQj.css("left",SBQQj.position().left+KKPqm.position().left)
EjPFL.css("left",EjPFL.position().left+KKPqm.position().left)
KKPqm.css("left",0)
SBQQj.hide()
nfYOg(ZhnDQ)
var inphe=QcqPg*Wqaql(ZhnDQ)
xmVee(ZhnDQ).data("current_image",inphe);
MYGhZ(ZhnDQ)
}
function Epate(ZhnDQ)
{
var mTYEb=xmVee(ZhnDQ);
var gEQLD=ZhnDQ.data("type_gallery")
var lYqaP=parseInt(mTYEb.data("auto_diapo"))
return((gEQLD==1)&&(lYqaP==1)) 
}
function MYGhZ(ZhnDQ)
{
var dEglS=ZhnDQ.data("mode")
var gEQLD=ZhnDQ.data("type_gallery")
var mcPHF=ZhnDQ.find(".wa-gallery-navigation")
var evIKj=xmVee(ZhnDQ);
var hmWfH=ZhnDQ.data("datas").global_config;
var TIwOw=ZhnDQ.find(".wa-gallery-comment-zone")
TIwOw.empty()
var fplGs=uewab(ZhnDQ)
var bsMkv="";
if(dEglS=="fullscreen")
{
if(hmWfH.comment_display_ImageNumber)
{
bsMkv+=(fplGs+1)+" / "+Xnjsh(ZhnDQ);
}
}
var lhXCi=DOPSs(ZhnDQ,fplGs,"link") 
if(bsMkv.length>0)
{
bsMkv+="<br>";
}
bsMkv+=DOPSs(ZhnDQ,fplGs,"comment")
bsMkv=bsMkv.replace(/<br>/gi,"\n")
bsMkv=waJSQuery.trim(bsMkv)
bsMkv=bsMkv.replace(/\n/gi,"<br>")
if((bsMkv.length==0)||(ZhnDQ.data("datas").global_config.show_comment==false))
{
TIwOw.hide()
return;
}
if((dEglS=="normal")&&(gEQLD==1))
{
}
else
{
if((dEglS!="fullscreen"))
{
TIwOw.hide()
return;
}
}
var HZXIA=getWindowSize().width();
var UuFCs=getWindowSize().height();
var uKNKV=ofEma(ZhnDQ)
var SCWmG=10;
TIwOw.css("padding",SCWmG)
TIwOw.show()
if(isMSIE_lower_than_ie9())
{
TIwOw.append("<div class=\"wa-gallery-comment-bg\" style=\"position:absolute;background-color:#000000;filter:alpha(opacity=50); opacity:0.5;\"></div>")
}
TIwOw.append("<div class=\"wa-gallery-comment\" ></div>")
var vrQcu=80;
var UdFvO=TIwOw.find(".wa-gallery-comment")
UdFvO.css("width",uKNKV.width()) 
UdFvO.html(bsMkv)
var xoCAB=UdFvO.outerWidth(true)
var OiRdY=UdFvO.outerHeight(true)
var newHeight=Math.min(vrQcu,OiRdY)
var Ptubu=waJSQuery(window).scrollLeft();
var USKhS=waJSQuery(window).scrollTop();
var jKlpg=(HZXIA-xoCAB)/2
var NLHWk=UuFCs-newHeight-2*SCWmG
if(dEglS=="fullscreen")
{
jKlpg+=Ptubu
NLHWk+=USKhS
}
UdFvO.css("left",jKlpg);
UdFvO.css("height",newHeight);
UdFvO.css("width",xoCAB);
TIwOw.css("left",0);
TIwOw.css("top",NLHWk);
TIwOw.css("width",HZXIA);
TIwOw.css("height",newHeight+2*SCWmG);
if((dEglS=="normal")&&(gEQLD==1))
{
bsMkv=bsMkv.replace(/<br>/gi," ") 
UdFvO.html(bsMkv)
var fPHFQ=0;
if(lhXCi.length>0)
{
fPHFQ=16;
}
var FfROc=15+fPHFQ;
var wAHpS=ZhnDQ.width()
var ZGcmX=ZhnDQ.height()
UdFvO.css("textAlign","left");
UdFvO.css("left",0);
UdFvO.css("top",0);
UdFvO.css("height",FfROc);
UdFvO.css("width",wAHpS);
UdFvO.css("fontSize",13);
UdFvO.css("margin",3);
UdFvO.css("overflow","hidden");
UdFvO.css("whiteSpace","nowrap");
UdFvO.css("textOverflow","ellipsis");
TIwOw.css("left",0);
TIwOw.css("top",ZGcmX-FfROc-50);
TIwOw.css("width",wAHpS);
TIwOw.css("height",FfROc);
var YnmCr=fLIdE(ZhnDQ)
var SBQQj=LknHR(ZhnDQ,YnmCr);
var nlpNf=SBQQj.find(".wa-gallery-image");
var lLTbe=SBQQj.find(".wa-gallery-image-contenair");
var mjOmT=lLTbe.position().top+ZGcmX-35
var NnOQA=lLTbe.position().top+nlpNf.height()-35-fPHFQ
var LGIhO=Math.min(mjOmT,NnOQA) 

TIwOw.css("top",LGIhO);
var vtOOk=(wAHpS-nlpNf.width())/2
TIwOw.css("left",vtOOk);
UdFvO.css("width",nlpNf.width()-20);
TIwOw.css("width",nlpNf.width()-20);
}
else
{
TIwOw.hide()
TIwOw.fadeIn()
}
if(isMSIE_lower_than_ie9())
{
var AZfAo=TIwOw.find(".wa-gallery-comment-bg")
AZfAo.css({"left":0,"top":0,"width":TIwOw.outerWidth(true),"height":TIwOw.outerHeight(true)});
}
}
function WcSgc(ZhnDQ,QbqfR)
{
var qNCQP=null
if(QbqfR["photos"])
{
qNCQP=QbqfR.photos
}
else
if(QbqfR["photoset"])
{
qNCQP=QbqfR.photoset
}
return qNCQP;
}
function DOPSs(ZhnDQ,QCbZu,SeXPC)
{
var aCGnY=xmVee(ZhnDQ).data("3rdparty_datas")
if(aCGnY)
{
var lEkkm=ZhnDQ.data("config")
var pYSwX=lEkkm.image_size;
var qNCQP=WcSgc(ZhnDQ,aCGnY)
var VgivN=qNCQP.photo[QCbZu]
var WYXBu=VgivN.farm
var apkQf=VgivN.server
var AvJHp=VgivN.id
var ohHqE=VgivN.secret 
if(SeXPC=="comment")
{
return VgivN.title
}
var XrPeK=["t","s","m","z","l"]
var gRpWe="";
var fJULQ=0;
var jcakf=0;
for(var i=0;i<XrPeK.length;i++)
{
var lbigr=XrPeK[i]
var PrKgf=VgivN["url_"+lbigr]
if(PrKgf)
{
var HZXIA=parseInt(VgivN["width_"+lbigr])
var UuFCs=parseInt(VgivN["height_"+lbigr])
if((gRpWe.length==0)||((HZXIA>fJULQ)&&(UuFCs>jcakf)))
{
gRpWe=PrKgf;
fJULQ=HZXIA
jcakf=UuFCs
}
}
}
if(SeXPC=="th")
{
var iuIYG=""
for(var i=0;i<XrPeK.length;i++)
{
var lbigr=XrPeK[i]
var PrKgf=VgivN["url_"+lbigr]
if(PrKgf)
{
var HZXIA=parseInt(VgivN["width_"+lbigr])
var UuFCs=parseInt(VgivN["height_"+lbigr])
iuIYG=PrKgf
if((HZXIA>pYSwX)&&(UuFCs>pYSwX))
{
break;
}
}
}
return iuIYG;
}
if(SeXPC=="big")
{
return gRpWe 
}
if(SeXPC=="sl_img")
{
return gRpWe 
}
if(SeXPC=="src")
{
return gRpWe 
}
if(SeXPC=="size")
{
return new Size(fJULQ,jcakf)
}
return ""
}
if(QCbZu>=ZhnDQ.data("datas").images.length)
{
return ";"
}
var VgivN=ZhnDQ.data("datas").images[QCbZu]
var AspIf=ZhnDQ.data("folder");
if(SeXPC=="th")
{
return AspIf+"th_"+VgivN.fn+"?"+VgivN.mod_th
}
if(SeXPC=="big")
{
return AspIf+"big_"+VgivN.fn+"?"+VgivN.mod
}
if(SeXPC=="sl_img")
{
return AspIf+"sl_"+VgivN.fn+"?"+VgivN.mod
}
if(SeXPC=="src")
{
return AspIf+VgivN.fn+"?"+VgivN.mod
}
if(SeXPC=="size")
{
return new Size(VgivN.size.w,VgivN.size.h)
}
if(SeXPC=="link")
{
if(VgivN.lnk&&(VgivN.lnk.url.length>0))
{
var wLTrm=VgivN.lnk.url;
return wLTrm;
}
return "";
}
if(SeXPC=="comment")
{
var UdFvO=""
if(VgivN.comment)
UdFvO+=VgivN.comment
UdFvO=UdFvO.replace(/\n/gi,"<br>")
if(UdFvO.length>0)UdFvO+="<br>"
if(VgivN.lnk&&(VgivN.lnk.url.length>0))
{
var wLTrm=VgivN.lnk.url;
var xfTnb=waJSONLinkToOnClick(VgivN.lnk)
UdFvO+="<div class='wa-gallery-comment-link' "+xfTnb+" >"+wLTrm+"</div>"
}
return UdFvO;
}
if(SeXPC=="tooltip")
{
return(VgivN.tooltip)
}
}
function eVNJb(sLkgW,ZhnDQ,PutAs)
{
var evIKj=xmVee(ZhnDQ);
var hmWfH=ZhnDQ.data("datas").global_config;
var gEQLD=ZhnDQ.data("type_gallery");
var QNNRA=waJSQuery(">.wa-dyn-loader",sLkgW);
waActivateDynamicLoader(sLkgW)
var nlpNf=waJSQuery(">.wa-gallery-image",sLkgW);
if(PutAs==null)
{
QNNRA.hide()
nlpNf.hide()
sLkgW.hide()
return;
}
QNNRA.show()
nlpNf.hide() 
sLkgW.show()
var OpZoW=false;
var dEglS=ZhnDQ.data("mode")
var AspIf=ZhnDQ.data("folder");
var SNmtG="";
var bxkRe=extractParamInfo(evIKj,"source")
var XAacx=vunot(ZhnDQ);
if((dEglS=="normal")&&(gEQLD==0))
{
OpZoW=true;
}
if((dEglS=="normal")&&(gEQLD==1)&&(hmWfH.open_popup_when_clicking==true))
{
OpZoW=true;
}

if((dEglS=="fullscreen")||(XAacx==false))
{
var HZXIA=getWindowSize().width();
var UuFCs=getWindowSize().height();
var SCWmG=25;
var ounpQ=0;
if(XAacx==false)
{
HZXIA=ZhnDQ.width();
UuFCs=ZhnDQ.height();
SCWmG=hmWfH.inner_slideshow_image_margin;
}
var unEqW=new Size(HZXIA-2*SCWmG,UuFCs-2*SCWmG-ounpQ)
var GYCFh=DOPSs(ZhnDQ,PutAs,"size");
var snuNU=(((gEQLD==1)||(gEQLD==2))&&(hmWfH.fit_image_to_slideshow==true));
var DErqX=true;
if((dEglS=="normal")&&snuNU)
{
DErqX=false;
}
if(DErqX)
{
GYCFh.scale(unEqW)
}
else
{
GYCFh=new Size(ZhnDQ.width(),ZhnDQ.height());
}
if(dEglS=="fullscreen")
{
var uKNKV=ofEma(ZhnDQ)
GYCFh.scale(uKNKV)
}
if(dEglS=="normal")
{
SNmtG=DOPSs(ZhnDQ,PutAs,"sl_img");
}
else
{
SNmtG=DOPSs(ZhnDQ,PutAs,"big");
}
var lSbHd=false;
if(bxkRe.length>0)
{
if(snuNU)
{
lSbHd=true;
}

}
nlpNf.css("width",GYCFh.width())
nlpNf.css("height",GYCFh.height())
sLkgW.css("width",GYCFh.width())
sLkgW.css("height",GYCFh.height())
if(lSbHd)
{
var oSwJx=DOPSs(ZhnDQ,PutAs,"size");
var SIGHB=oSwJx;
SIGHB.scaleByExpanding(GYCFh.clone())
nlpNf.css("width",SIGHB.width())
nlpNf.css("height",SIGHB.height())
var hJNER=-(SIGHB.width()-GYCFh.width())/2;
var FccAU=-(SIGHB.height()-GYCFh.height())/2;
nlpNf.css({"left":hJNER,"top":FccAU})
}
var jKlpg=Math.round((HZXIA-GYCFh.width())/2)
var NLHWk=Math.round((UuFCs-ounpQ-GYCFh.height())/2)
var Ptubu=waJSQuery(window).scrollLeft();
var USKhS=waJSQuery(window).scrollTop();
if(dEglS!="normal")
{
jKlpg+=Ptubu
NLHWk+=USKhS
}
sLkgW.css("left",jKlpg)
sLkgW.css("top",NLHWk)
}
else
{
var HZUFm=false;
if(bxkRe.length>0)
{
HZUFm=true;
}
if(HZUFm)
{
var lEkkm=ZhnDQ.data("config")
var pYSwX=lEkkm.image_size;
var IjSVw=new Size(pYSwX,pYSwX)
var GYCFh=DOPSs(ZhnDQ,PutAs,"size");
var SIGHB=GYCFh.clone();
SIGHB.scaleByExpanding(IjSVw) 
if(SIGHB.width()==SIGHB.height())
{
var pudVP=Math.min(pYSwX,GYCFh.width())
var LmrpI=Math.min(pYSwX,GYCFh.height())
nlpNf.css({"width":pudVP,"height":LmrpI,"clip":"rect(auto auto auto auto)","left":(IjSVw.width()-pudVP)/2,"top":(IjSVw.height()-LmrpI)/2});
}
else
{
nlpNf.css({width:SIGHB.width(),height:SIGHB.height()});
if(SIGHB.width()>SIGHB.height())
{
var gIEiv=Math.floor((SIGHB.width()-IjSVw.width())/2);;
nlpNf.css({"left":-gIEiv,"top":(IjSVw.height()-SIGHB.height())/2,"clip":"rect(auto "+(SIGHB.width()-gIEiv)+"px auto "+gIEiv+"px)"});
}
else
{
var KtcLQ=Math.floor((SIGHB.height()-IjSVw.height())/2);;
nlpNf.css({"left":(IjSVw.width()-SIGHB.width())/2,"top":-KtcLQ,"clip":"rect("+KtcLQ+"px auto "+(SIGHB.height()-KtcLQ)+"px auto)"});
}
}
}
SNmtG=DOPSs(ZhnDQ,PutAs,"th");
}
sLkgW.css('cursor',(OpZoW)?'pointer':'Default');
var RtsHZ=nlpNf.attr("src")
if(RtsHZ!=SNmtG)
{
nlpNf.load(function(){
var nlpNf=waJSQuery(this);
QNNRA.hide()
nlpNf.show()
});
}
else
{
QNNRA.hide()
nlpNf.show()
}
nlpNf.attr("title",DOPSs(ZhnDQ,PutAs,"tooltip"))
nlpNf.attr("src",SNmtG)
QNNRA.css("left",(nlpNf.width()-QNNRA.width())/2)
QNNRA.css("top",(nlpNf.height()-QNNRA.height())/2)
}
function SniCA(ZhnDQ)
{
var mTYEb=xmVee(ZhnDQ);
var lYqaP=parseInt(mTYEb.data("auto_diapo"))
var gEQLD=parseInt(mTYEb.data("type_gallery"))
var QLves=Xnjsh(ZhnDQ)
if(isMSIE()) 
{
ZhnDQ.css("background-image","url(wa_transparent.gif)")
}
var dEglS=ZhnDQ.data("mode")
var lEkkm=ZhnDQ.data("config")
var hmWfH=ZhnDQ.data("datas").global_config
var VEafV=""
VEafV+="<div style=\"position:absolute;left:"+lEkkm.margin_left+"px;top:"+lEkkm.margin_top+"px;padding:0px;";
VEafV+="width:"+ZhnDQ.width()+"px;\" class=\"wa-gallery-page\">"
var bqWoo="" 

if(lEkkm.has_shadow)
{
bqWoo+="wa-gallery-shadow "
}
var n=0;
var ZtAlx=lEkkm.image_spacing;
for(var OSgoN=0;OSgoN<lEkkm.rows;OSgoN++)
{
var YLZgH=lEkkm.image_spacing;
for(var YadZK=0;YadZK<lEkkm.cols;YadZK++)
{
VEafV+="<div class='wa-gallery-image-contenair "+bqWoo+"' style=\"position:absolute;left:"+YLZgH+"px;top:"+ZtAlx+"px;width:"+lEkkm.image_size+"px;height:"+lEkkm.image_size+"px;\">"
VEafV+="<img class='wa-gallery-image' style=\"position:absolute;left:0px;top:0px;width:"+lEkkm.image_size+"px;height:"+lEkkm.image_size+"px;border:none;\"/>" 
VEafV+=htmlDynamicLoader(true,ZhnDQ.width(),ZhnDQ.height()) 
VEafV+="</div>"
YLZgH+=lEkkm.image_size+2*lEkkm.image_spacing
if(n>QLves)
{
break
}
n++;
}
ZtAlx+=lEkkm.image_size+2*lEkkm.image_spacing
}
VEafV+="</div>";
var KKPqm=ZhnDQ.find(".wa-gallery-scroll-pane")
KKPqm.append(VEafV);
KKPqm.append(VEafV);
var SBQQj=LknHR(ZhnDQ,0);
var AspIf=ZhnDQ.data("folder");
if(ZhnDQ.data("datas")==undefined)
{
alert("_folder="+AspIf)
}
var ErXjR=lEkkm.default_selected_image;
var RrWNo=0;
if(ErXjR)
{
RrWNo=Math.floor(ErXjR/Wqaql(ZhnDQ))
}
ZhnDQ.data("page",RrWNo)
var lLTbe=waJSQuery(">.wa-gallery-image-contenair",SBQQj);
var inphe=uewab(ZhnDQ)*Wqaql(ZhnDQ)
lLTbe.each(function(i)
{
if(inphe+i<QLves)
{
eVNJb(waJSQuery(this),ZhnDQ,inphe+i)
}
else
{
eVNJb(waJSQuery(this),ZhnDQ,null)
}
});
var EjPFL=LknHR(ZhnDQ,1);
EjPFL.hide() 
var Jhnfe=ZhnDQ.find(".wa-gallery-page")
var WtMHQ=true;
if((gEQLD==1)||(gEQLD==2))
{
WtMHQ=false;
if(hmWfH.open_popup_when_clicking)
{
WtMHQ=true;
}
}
if(WtMHQ)
Jhnfe.each(function(i)
{
var lLTbe=waJSQuery(">.wa-gallery-image-contenair",waJSQuery(this));
lLTbe.each(function(i)
{
var nlpNf=waJSQuery(this) 
nlpNf.css("cursor","pointer")
nlpNf.click(function(){
var RrWNo=uewab(ZhnDQ)
var apKjM=Wqaql(ZhnDQ)
var fplGs=apKjM*RrWNo+i
QBSdZ(ZhnDQ,fplGs)
return false 
});
});
});
var mcPHF=ZhnDQ.find(".wa-gallery-navigation")
var DKWHw="wa-gallery-bt-design wa-gallery-button "
DKWHw+=(dEglS=="normal")?"wa-gallery-bt-action-mini wa-gallery-corner-mini":"wa-gallery-bt-action-big wa-gallery-corner-big"
var QWvjI=""
QWvjI+=(dEglS=="normal")?"wa-gallery-button wa-gallery-bt-design-arrow wa-gallery-arrow-mini wa-gallery-corner-mini":"wa-gallery-bt-design-arrow"
mcPHF.append("<div class=\"wa-gallery-comment-zone\"></div>") 
if(Epate(ZhnDQ)==false)
{
mcPHF.append("<div class=\"wa-gallery-arrow  param[type(prev)] "+QWvjI+"\"></div>")
mcPHF.append("<div class=\"wa-gallery-arrow param[type(next)] "+QWvjI+"\"></div>")
mcPHF.append("<div class=\"wa-gallery-bt-action param[type(act-close)] wa-gallery-bt-corner\"></div>")
mcPHF.append("<div class=\"wa-gallery-bt-action param[type(act-list)] wa-gallery-bt-corner\"></div>")
mcPHF.append("<div class=\"wa-gallery-bt-action param[type(act-diapo)] wa-gallery-bt-corner\"></div>")
}
var WLNUC="wa-gallery-bt-design "
WLNUC=""
WLNUC+=(dEglS=="normal")?"wa-gallery-page-selector-mini wa-gallery-corner-mini":"wa-gallery-page-selector-big wa-gallery-corner-big"
mcPHF.append("<div style='position:absolute;' class=\"wa-gallery-page-selector "+WLNUC+"\"></div>")
ZhnDQ.find(".wa-gallery-arrow").each(function(i)
{
var Gxbae=waJSQuery(this);
var wjfxa=extractParamInfo(Gxbae,"type")
if(wjfxa=="prev")
{
Gxbae.html("<img class='wa-gallery-arrow-left' style='display:none' src=\"wa_fancybox/fancy_nav_left.png\" border=0>")
}
else
{
Gxbae.html("<img class='wa-gallery-arrow-right' style='display:none' src=\"wa_fancybox/fancy_nav_right.png\" border=0>")
}
Gxbae.click(function() 
{
var evIKj=Gxbae.parents(".wa-gallery");
LknHR(evIKj,0)
var ZhnDQ=waJSQuery(this)
var tJKvJ=uewab(evIKj)
var VldnF=(wjfxa=="next")?(tJKvJ+1):(tJKvJ-1);
rOpUJ(evIKj,VldnF)
return false
});
{
var TsYUJ=Gxbae.find("img")
TsYUJ.fadeOut()
Gxbae.hover(function()
{
TsYUJ.stop(true,true).fadeIn()
},function()
{
TsYUJ.stop(true,true).fadeOut()
});
}
});
ZhnDQ.find(".wa-gallery-bt-action").each(function(i)
{
var Gxbae=waJSQuery(this);
var wjfxa=extractParamInfo(Gxbae,"type")
Gxbae.css({"width":41,"height":28}) 
if(wjfxa=="act-diapo")
{
Gxbae.html("<img src='wa_gallery/wa_bt_start_diapo.png' border=0>")
}
else
if(wjfxa=="act-list")
{
Gxbae.html("<img src='wa_gallery/wa_bt_list.png' border=0>")
}
else
if(wjfxa=="act-close")
{
Gxbae.css({"width":30,"height":30})
Gxbae.html("<img src='wa_fancybox/fancy_close.png' border=0>")
}
centerElement(Gxbae,"div")
Gxbae.click(function()
{
var evIKj=Gxbae.parents(".wa-gallery");
IMVcN(evIKj)
if(wjfxa=="act-list")
{
var oepbI=uewab(evIKj)*Wqaql(evIKj)
xmVee(evIKj).data("fullscreen_contenair","windows");
loadFullscreen("fullscreen_list",oepbI)
}
if(wjfxa=="act-diapo")
{
CiQPZ(xmVee(evIKj))
}
if(wjfxa=="act-close")
{
closeFullscreen()
}
return false;
});
});
if(dEglS=="normal")
{
if(hmWfH.always_display_nav_elements)
{
icxXs(ZhnDQ,true)
}
else
{
ZhnDQ.hover(function(){icxXs(waJSQuery(this),true);},function(){icxXs(waJSQuery(this),false);});
icxXs(ZhnDQ,false)
}
}
else
{
icxXs(ZhnDQ,true)
}
KQSnq(ZhnDQ,false)
if(xmVee(ZhnDQ).data("auto_diapo")==1)
{
TBrpO(ZhnDQ)
}
else
{
nfYOg(ZhnDQ)
}
centerGalleryContainer();
var tUEMd=document.wa_global_query_info
if(tUEMd)
{
if(tUEMd.m_unid+"/"==AspIf)
{
QBSdZ(ZhnDQ,tUEMd.m_index_item) 
}
}
}
function icxXs(ZhnDQ,wWfqV)
{
if(wWfqV==ZhnDQ.data("_is_visible"))
{
return;
}
var dEglS=ZhnDQ.data("mode")
var lEkkm=ZhnDQ.data("config")
var hmWfH=ZhnDQ.data("datas").global_config
var gEQLD=ZhnDQ.data("type_gallery");
ZhnDQ.data("_is_visible",wWfqV);
if(hmWfH.always_display_nav_elements&&(wWfqV==false))
{
return;
}
{
if(isMSIE_lower_than_ie9())
{
var mcPHF=ZhnDQ.find(".wa-gallery-navigation");
var gWxgK=mcPHF.children()
if(wWfqV)
{
gWxgK.stop(true,true).fadeIn();
nfYOg(ZhnDQ)
}
else
{
gWxgK.stop(true,true).fadeOut()
}
}
else
{
var mcPHF=ZhnDQ.find(".wa-gallery-navigation");
var gWxgK=mcPHF.children()
if(wWfqV)
{
gWxgK.stop(true,true).fadeIn();
nfYOg(ZhnDQ)
}
else
{
gWxgK.stop(true,true).fadeOut()
}
}
}
MYGhZ(ZhnDQ)
}
function nfYOg(ZhnDQ)
{
var mcPHF=ZhnDQ.find(".wa-gallery-navigation")
if(document.internalPreview)
{
mcPHF.hide()
return;
}
var evIKj=ZhnDQ;
var gEQLD=ZhnDQ.data("type_gallery");
var dEglS=ZhnDQ.data("mode")
var wUuCf=gEQLD>0
var hmWfH=ZhnDQ.data("datas").global_config
var WtMHQ=true;
if((gEQLD==1)||(gEQLD==2))
{
WtMHQ=false;
if(hmWfH.open_popup_when_clicking)
{
WtMHQ=true;
}
}
var XaiGk=(dEglS=="fullscreen")||((dEglS=="normal")&&(WtMHQ==false)) 
var QLves=Xnjsh(ZhnDQ);
var xUvor=kSOxT(ZhnDQ);
var wAHpS=ZhnDQ.width()
var ZGcmX=ZhnDQ.height()
if((dEglS=="fullscreen")||(dEglS=="fullscreen_list"))
{
wAHpS=getWindowSize().width()
ZGcmX=getWindowSize().height()
}
var qZbar=EYgPt(ZhnDQ) 
var IlKwV=Math.min(wAHpS,qZbar)
var FvhWR=Math.min(ZGcmX,qZbar)
if((dEglS=="fullscreen")||(dEglS=="fullscreen_list"))
{
var uKNKV=ofEma(ZhnDQ)
IlKwV=uKNKV.width()
FvhWR=uKNKV.height()
}
var SCWmG=10;
var HWCKC=3;
var jKlpg=(wAHpS-IlKwV)/2+SCWmG
var dcMcU=(wAHpS-IlKwV)/2+IlKwV-SCWmG
var NLHWk=(ZGcmX-IlKwV)/2+SCWmG
var Ptubu=waJSQuery(window).scrollLeft();
var USKhS=waJSQuery(window).scrollTop();
if(dEglS=="normal")
{
jKlpg=HWCKC
dcMcU=wAHpS-HWCKC
}
if(dEglS=="fullscreen_list")
{
jKlpg=SCWmG
dcMcU=wAHpS-SCWmG
}
var YnmCr=fLIdE(ZhnDQ)
var SBQQj=LknHR(ZhnDQ,YnmCr);
var nlpNf=SBQQj.find("img")
var hmKoC=nlpNf.width();
hmKoC=Math.max(hmKoC,150) 
ZhnDQ.find(".wa-gallery-arrow").each(function(i)
{
var Gxbae=waJSQuery(this);
var TsYUJ=Gxbae.find("img") 
var wjfxa=extractParamInfo(Gxbae,"type")
var WENHo=uewab(evIKj);
var tsbBB=10
var srIVl=0;
var YBnFs=(ZGcmX-Gxbae.height())/2;
var uDEvl=0;
if(XaiGk)
{
if(dEglS=="normal")
{
Gxbae.css({"width":wAHpS/3,"height":ZGcmX})
}
else
{
Gxbae.css({"width":nlpNf.width()/3,"height":nlpNf.height()*2/3})
}
}
else
{
if(dEglS=="normal")
{
Gxbae.css({"height":ZGcmX})
}
else
{
Gxbae.css({"height":nlpNf.height()*2/3})
}
}

if(wjfxa=="prev")
{
srIVl=jKlpg
uDEvl=0;
if(dEglS=="normal")
{
srIVl=0
}
else
{
srIVl=(wAHpS-hmKoC)/2
}
YBnFs=(ZGcmX-Gxbae.height())/2
uDEvl=tsbBB
if(WENHo==0)
{
TsYUJ.hide();
Gxbae.hide();
}
else
Gxbae.show();
}
else
{
srIVl=dcMcU-Gxbae.width()
uDEvl=(Gxbae.width()-30)
if(dEglS=="normal")
{
srIVl=wAHpS-Gxbae.width();
}
else
{
srIVl=(wAHpS-hmKoC)/2+hmKoC-Gxbae.width()
}
YBnFs=(ZGcmX-Gxbae.height())/2
uDEvl=Gxbae.width()-30-tsbBB
if(WENHo>=kSOxT(ZhnDQ)-1)
{
TsYUJ.hide();
Gxbae.hide();
}
else Gxbae.show();
}
if((dEglS=="fullscreen")||(dEglS=="fullscreen_list"))
{
srIVl=Ptubu+srIVl
YBnFs=USKhS+YBnFs
}
Gxbae.css({"left":srIVl,"top":YBnFs})
if(isMSIE())
{
Gxbae.css("background-image","url(wa_transparent.gif)")
}
TsYUJ.css({"position":"absolute","left":uDEvl,"top":(Gxbae.height()-30)/2})
if(SeUSq(ZhnDQ))
{
TsYUJ.hide();
Gxbae.hide();
}
});
var Onafd=ZhnDQ.find(".wa-gallery-page-selector")
if((hmWfH.type_display_page_navigator!=0)&&(xUvor>1) &&((dEglS=="normal")||(dEglS=="fullscreen_list")))
{
var KaNMV=false;
var Mshmm=20;
var onVYv=20;
var IhtvX=onVYv
var bZXlV=12 
var chBTC=wAHpS-2*bZXlV;

var BiQfN=Mshmm*xUvor+2*bZXlV
if(BiQfN>chBTC)
{
KaNMV=false;
IhtvX=30
}
else
{
KaNMV=true;
onVYv=Mshmm;
IhtvX=30
}
var FOovl=onVYv*xUvor+2*bZXlV
chBTC=Math.min(chBTC,FOovl)
Onafd.css("height",IhtvX)
Onafd.html("<div style='position:absolute;' class='wa-gallery-page-selector-inner'></div>")
var oXWrY=Onafd.find(".wa-gallery-page-selector-inner")
if(KaNMV)
{
}
else
{
oXWrY.css({"background-color":"#000000","opacity":0.8,"border":"1px solid rgba(220,220,220,0.7)","border-radius":4})
}
var ZCCXo=uewab(ZhnDQ);
var XPBON=onVYv
var xfuXd=Math.floor(chBTC/onVYv) 
xfuXd=Math.min(xfuXd,xUvor)
if(xfuXd>1)
{
if(dEglS=="normal")
{
var DjRcp=2 
if(hmWfH.type_display_page_navigator==1) 
{
Onafd.css("top",ZGcmX-Onafd.height()-DjRcp)
}
else
if(hmWfH.type_display_page_navigator==2) 
{
Onafd.css("top",ZGcmX)
}
}
else
{
Onafd.css("top",ZGcmX-50)
}
Onafd.css("width",chBTC)
Onafd.css("left",(wAHpS-Onafd.width())/2) 
oXWrY.css({"width":chBTC,"height":onVYv,"top":IhtvX-onVYv}) 
var DATIQ=Math.ceil(ZCCXo-(xfuXd/2))
DATIQ=Math.max(DATIQ,0)
var TMhEJ=DATIQ+xfuXd
TMhEJ=Math.min(TMhEJ,xUvor)
if(TMhEJ-xfuXd>=0)
{
DATIQ=TMhEJ-xfuXd
}
var xBut=(chBTC-(xfuXd*onVYv))/2
var HjdPL="";
for(var i=0;i<xfuXd;i++)
{
var PutAs=DATIQ+i;
if(PutAs<xUvor)
{
if(KaNMV)
{
HjdPL+="<div class='wa-gallery-page-selector-bt-design' style='vertical-align:middle;line-height:"+XPBON+"px;' ></div>";
}
else
{
HjdPL+="<div class='wa-gallery-page-selector-bt-design' style='vertical-align:middle;line-height:"+XPBON+"px;' >"+(PutAs+1)+"</div>";
}
}
}
oXWrY.html(HjdPL)
var QSZnZ=Onafd.find(".wa-gallery-page-selector-bt-design") 
QSZnZ.each(function(i){
var Gxbae=waJSQuery(this)
var PutAs=DATIQ+i;
if(KaNMV)
{
if(ZCCXo==PutAs)
{
Gxbae.html("<img src='wa_gallery/wa_navigation_past_on.png' border=0>")
}
else
{
Gxbae.html("<img src='wa_gallery/wa_navigation_past_off.png' border=0>")
}
}
else
{
if(ZCCXo==PutAs)
{
Gxbae.css({"font-size":"14px","font-weight":"bold"})
}
else
{
Gxbae.css({"font-size":"12px","font-weight":"normal"})
}
}
Gxbae.css({"left":xBut,"top":0,"width":onVYv,"height":XPBON})
xBut+=onVYv;
if(ZCCXo!=PutAs)
{
Gxbae.click(function()
{
rOpUJ(ZhnDQ,PutAs);
return false
})
}
}) 
}
else
{
Onafd.hide();
}
}
else
{
Onafd.hide();
}
var jcSsn=0;
var aDhMi=0;
var PCENX=0;
var SCWmG=10;
if((dEglS=="normal")||(dEglS=="fullscreen_list"))
{
if(dEglS=="normal")
{
jcSsn=wAHpS
aDhMi=0
}
if(dEglS=="fullscreen_list")
{
jcSsn=wAHpS-SCWmG
aDhMi=SCWmG
}
}
else
{
var Hclqx=ofEma(ZhnDQ);
jcSsn=(wAHpS-Hclqx.width)/2+Hclqx.width
aDhMi=(ZGcmX-Hclqx.height)/2
}
var Qfrgg=6;
ZhnDQ.find(".wa-gallery-bt-action").each(function(i)
{
var Gxbae=waJSQuery(this);
var wjfxa=extractParamInfo(Gxbae,"type")
var hPAnk=false;
var KdUKr=true 
if(wjfxa=="act-list")
{
if(hmWfH.has_fullscreen_thumbnail_mode)
{
hPAnk=((SeUSq(ZhnDQ)==false)&&(dEglS=="fullscreen")&&(kSOxT(ZhnDQ)>1))
}
}
if(wjfxa=="act-diapo")
{
{
hPAnk=((SeUSq(ZhnDQ)==false)&&(dEglS=="fullscreen")&&(kSOxT(ZhnDQ)>1)&&(hmWfH.show_diaporama_button==true))
}
}
var XAacx=vunot(ZhnDQ);
if(wjfxa=="act-close")
{
hPAnk=(dEglS!="normal")&&(SeUSq(ZhnDQ)==false)&&(XAacx==true)
if(dEglS=="fullscreen")
{
KdUKr=false;
}
}
if(hPAnk&&KdUKr)
{
var Ytiea=Gxbae.width()+Qfrgg
PCENX+=Ytiea
jcSsn-=Ytiea
}
Gxbae.css("top",aDhMi-Gxbae.height()-2)
Gxbae.css("left",jcSsn)
if(hPAnk) Gxbae.show();else Gxbae.hide();
Gxbae.data("wa_is_visible",hPAnk)
});
if((dEglS=="fullscreen")||(dEglS=="fullscreen_list"))
{
var TIKKo=(wAHpS-PCENX)/2
var YnmCr=fLIdE(ZhnDQ)
var SBQQj=LknHR(ZhnDQ,YnmCr);
var nlpNf=SBQQj.find("img")
var dtUAi=(wAHpS-nlpNf.width())/2+nlpNf.width();
ZhnDQ.find(".wa-gallery-bt-action").each(function(i)
{
var Gxbae=waJSQuery(this);
if(Gxbae.data("wa_is_visible"))
{
var wjfxa=extractParamInfo(Gxbae,"type")
var KdUKr=true
if(dEglS=="fullscreen")
{
KdUKr=false;
}
var srIVl=0;
var YBnFs=0;
var WHLbp=Gxbae.width();
if(KdUKr)
{
srIVl=TIKKo;
if(dEglS=="fullscreen")
{
YBnFs=Math.max(5,NLHWk-30)
}
if(dEglS=="fullscreen_list")
{
YBnFs=5;
}
TIKKo+=WHLbp+Qfrgg
}
else
{
if(wjfxa=="act-close")
{
dtUAi=dtUAi-WHLbp/2
srIVl=dtUAi
YBnFs=(ZGcmX-nlpNf.height())/2-Gxbae.height()/2
}
if(wjfxa=="act-list")
{
dtUAi=dtUAi-5
dtUAi=dtUAi-WHLbp
srIVl=dtUAi
YBnFs=(ZGcmX-nlpNf.height())/2-Gxbae.height()/2
}
if(wjfxa=="act-diapo")
{
dtUAi=dtUAi-5
dtUAi=dtUAi-WHLbp
srIVl=dtUAi
YBnFs=(ZGcmX-nlpNf.height())/2-Gxbae.height()/2
}
}
srIVl+=Ptubu
YBnFs+=USKhS
Gxbae.css({"left":srIVl,"top":YBnFs})
}
})
}
}
function ofEma(ZhnDQ)
{
var SCWmG=10;
var HZXIA=getWindowSize().width();
var UuFCs=getWindowSize().height();
if(isIPhone())
{
return new Size(HZXIA-2*SCWmG,UuFCs-2*SCWmG);
}
var qZbar=EYgPt(ZhnDQ) 
return new Size(Math.min(qZbar,HZXIA-2*SCWmG),Math.min(qZbar,UuFCs-2*SCWmG))
}
function EYgPt(ZhnDQ)
{
var qZbar=ZhnDQ.data("datas").global_config.max_image_resolution
if(qZbar==-1) qZbar=6000;
return qZbar
}
function WZaBE(url,TJVdQ,vIWZM)
{
var e=document.createElement("script");
e.src=url;
e.type="text/javascript";
e.onerror=function(){

}
if(/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent)){
e.onreadystatechange=function(){
if((this.readyState=='complete')||(this.readyState=='loaded')){
TJVdQ(vIWZM)
}
}
}else
{
e.onload=function(){
TJVdQ(vIWZM)
}
}
document.getElementsByTagName("head")[0].appendChild(e);
}
function wa_jsonFlickrApi(aCGnY)
{
document.wa_current_datas_gallery=aCGnY
}
function JLcjx(vIWZM)
{
var ZhnDQ=vIWZM.objGallery 
var WWIIE=vIWZM.config
var XkVBB=vIWZM.idAlbum
var json=vIWZM.json 
{
var aCGnY=document.wa_current_datas_gallery
if(aCGnY==null)
{
return;
}
if(aCGnY.stat=="fail")
{
return;
}
xmVee(ZhnDQ).data("3rdparty_datas",aCGnY)
ZhnDQ.data("datas",json)
if(!WWIIE) WWIIE=ZhnDQ.data("datas").normal_config;
ZhnDQ.data("config",WWIIE)
ZhnDQ.data("folder",XkVBB+"/")
SniCA(ZhnDQ);
}
}
function ZhktP(ZhnDQ,WWIIE)
{
KQSnq(ZhnDQ,true)
var XkVBB=extractParamInfo(ZhnDQ,"config_key")
var JBSsT=extractParamInfo(ZhnDQ,"modif_id") 
var bxkRe=extractParamInfo(xmVee(ZhnDQ),"source") 
var VoPFX="";
if(XkVBB.length>0)
{
VoPFX=XkVBB+"/photo-album-definition" 
var dfcaa=Translator.m_lang_for_filename
if(dfcaa.length>0)
{
dfcaa="_"+dfcaa;
}
VoPFX+=dfcaa+".js"
VoPFX+="?t="+JBSsT
}




function fbwpZ(json)
{
var gEQLD=ZhnDQ.data("type_gallery");
var dEglS=ZhnDQ.data("mode")
var bxkRe=extractParamInfo(xmVee(ZhnDQ),"source") 
var qTgPF=null
if(bxkRe=="flickr")
{
var lILtx=extractParamInfo(xmVee(ZhnDQ),"user_id") 
var uofMK=extractParamInfo(xmVee(ZhnDQ),"album") 
var xPoqE="flickr.people.getPublicPhotos"
if(uofMK.length>0)
{
xPoqE="flickr.photosets.getPhotos"
}
qTgPF="http://api.flickr.com/services/rest/?method="+xPoqE+"&api_key=624245e80423b78999b7037a68645766&user_id="+lILtx
qTgPF+="&extras=url_t, url_s, url_m, url_z, url_l, url_o" 
qTgPF+="&format=json"
qTgPF+="&privacy_filter=1"
qTgPF+="&photoset_id="+uofMK
qTgPF+="&jsoncallback=wa_jsonFlickrApi"
}
var aCGnY=xmVee(ZhnDQ).data("3rdparty_datas")
if((qTgPF)&&(aCGnY==undefined))
{
var vIWZM={objGallery:ZhnDQ,"config":WWIIE,"idAlbum":XkVBB,"json":json}

WZaBE(qTgPF,JLcjx,vIWZM) 
return;
}
ZhnDQ.data("datas",json)
if(!WWIIE) WWIIE=ZhnDQ.data("datas").normal_config;
ZhnDQ.data("config",WWIIE)
ZhnDQ.data("folder",XkVBB+"/")
SniCA(ZhnDQ);
if(isMobileBrowser())
{
ZhnDQ.touchwipe({
wipeLeft:function(){
cJsfP(ZhnDQ)
return false
},wipeRight:function(){
elAff(ZhnDQ)
return false
},preventDefaultEvents:true
})
}
if(dEglS!="normal")
{
if(waJSQuery.fn.mousewheel)
{
ZhnDQ.bind('mousewheel.fb',function(e,delta)
{
e.preventDefault();
if(delta>0)
{
elAff(ZhnDQ)
}
else
{
cJsfP(ZhnDQ)
}
});
}
}
}
if(XkVBB.length==0)
{

fbwpZ(waPreviewJsonGalleryDatas)
}
else
{
waJSQuery.getJSON(VoPFX,{},fbwpZ)
}
}
function FJhAs(ZhnDQ,e)
{
var dEglS=ZhnDQ.data("mode")
if(dEglS=="normal") return;
if(e.which=='27')
{
closeFullscreen()
e.preventDefault();
}
if(SeUSq(ZhnDQ)==false)
{
if(e.which=='37')
{
elAff(ZhnDQ)
e.preventDefault();
}
if(e.which=='39')
{
cJsfP(ZhnDQ)
e.preventDefault();
}
}
}
function initializeAllWA_gallery()
{
waJSQuery(".wa-gallery").each(function(index)
{
var ZhnDQ=waJSQuery(this)
ZhnDQ.data("mode","normal") 
var gEQLD=parseInt(extractParamInfo(ZhnDQ,"type_gallery"))
var lYqaP=parseInt(extractParamInfo(ZhnDQ,"auto_diapo"))
ZhnDQ.data("type_gallery",gEQLD)
ZhnDQ.data("auto_diapo",lYqaP)
if(gEQLD==1)
{
var WWIIE={
"rows":1,"cols":1,"image_size":100,"image_spacing":0,"nb_images_per_page":1,"margin_left":0,"margin_top":0,"default_selected_image":0,"has_shadow":false
}
ZhktP(ZhnDQ,WWIIE)
}
else
{
ZhktP(ZhnDQ)
}
});
waJSQuery(window).keydown(function(e){
var ZhnDQ=waJSQuery(".wa-fullscreen-contenair").find(".wa-gallery")
if(ZhnDQ&&(ZhnDQ.length>0))
{
FJhAs(ZhnDQ,e)
}
});
}
function IMVcN(ZhnDQ)
{
var dEglS=ZhnDQ.data("mode")
if(dEglS=="normal")
{
waJSQuery(document).data("origin_fullscreen_gallery",ZhnDQ)
}
}
function mvWVN(ZhnDQ)
{
var mTYEb=xmVee(ZhnDQ)
var inphe=xmVee(ZhnDQ).data("current_image");
var dEglS=ZhnDQ.data("mode")
loadFullscreen(dEglS,inphe)
}
function QBSdZ(ZhnDQ,QCbZu)
{
if(SeUSq(ZhnDQ)) return;
var dEglS=ZhnDQ.data("mode")
if((dEglS=="normal")||(dEglS=="fullscreen_list"))
{
IMVcN(ZhnDQ)
loadFullscreen("fullscreen",QCbZu)
}
else
if(dEglS=="fullscreen")
{
return
}
}
function closeFullscreen()
{
var DTouA=waJSQuery(document).data("origin_fullscreen_gallery") 
DTouA.data("diaporama",false)
var oGdgq=waJSQuery(".wa-fullscreen-contenair");
oGdgq.fadeOut(200,function(){
var ZhnDQ=waJSQuery(document).data("origin_fullscreen_gallery")
oGdgq.empty()
ZhnDQ.focus()
})
waSetVisibilityMainPageContenair(true) 

}
function vunot(ZhnDQ)
{
var dEglS=ZhnDQ.data("mode")
var gEQLD=xmVee(ZhnDQ).data("type_gallery")
if((dEglS=="normal")&&(gEQLD==1)) return false;
return true;
}
function loadFullscreen(xlEsu,ErXjR)
{
var DTouA=waJSQuery(document).data("origin_fullscreen_gallery")
if(ErXjR==undefined)
{
ErXjR=DTouA.data("current_image");
}
else
{
DTouA.data("current_image",ErXjR);
}

var RKXoT=getDocumentSize().width()
var ePkKB=getDocumentSize().height()
waSetVisibilityMainPageContenair(false) 
var XkVBB=extractParamInfo(DTouA,"config_key")
var HjdPL=""
HjdPL+="<div class='wa-dialog-container-bg' style='position:absolute;left:0px;top:0px;;' ></div>"
HjdPL+="<div style=\"";
HjdPL+="position:absolute;width:100%;height:100%;"
HjdPL+="overflow:hidden;";
HjdPL+="\" class=\"wa-gallery  param[config_key("+XkVBB+")]\">";
HjdPL+="<div class=\"wa-gallery-scroll-pane\"></div>";
HjdPL+="<div class=\"wa-gallery-navigation\"></div>";
HjdPL+="</div>";
var oGdgq=waJSQuery(".wa-fullscreen-contenair");
oGdgq.empty()
oGdgq.html(HjdPL)
oGdgq.css("width",RKXoT)
oGdgq.css("height",ePkKB)
oGdgq.show()
var MwTtA=oGdgq.find(".wa-dialog-container-bg");
var FTsdo=new RGBColor(CONST_WA_GLOBAL_SETTINGS.overlayColor)
MwTtA.css({"backgroundColor":FTsdo.toHexaOpaqueColor(),"opacity":FTsdo.a})
MwTtA.css({width:RKXoT,height:ePkKB})
var ZhnDQ=oGdgq.find(".wa-gallery")
ZhnDQ.click(function(){
closeFullscreen()
return false
});
oGdgq.css("cursor","pointer") 
var NAJiH=200;
var UZQSL=5;
var jAZcA=false;
var VDRhW=0;
var PqJEq=0;
var ESKjn=0;
if(xlEsu=="fullscreen_list")
{
VDRhW=50
PqJEq=30
if(kSOxT(ZhnDQ)>1)
{
ESKjn=40
}
}
var gZlwL=RKXoT-2*VDRhW
var kEgLs=ePkKB-(ESKjn+PqJEq)
if(xlEsu=="fullscreen_list")
{
var mjTXx=DTouA.data("datas").fullscreen_list_config
var BCXDQ=Math.min(gZlwL,kEgLs)
NAJiH=Math.min(mjTXx.image_size,BCXDQ*0.8)
var gFMIw=10 
UZQSL=(gFMIw/2)*NAJiH/100;
jAZcA=mjTXx.has_shadow;
}
var Ptubu=waJSQuery(window).scrollLeft();
var USKhS=waJSQuery(window).scrollTop();
var NNOgZ=Math.floor((gZlwL)/(NAJiH+2*UZQSL));
var XUxBF=Math.floor((kEgLs)/(NAJiH+2*UZQSL));
var CYrff=USKhS+PqJEq+(kEgLs-XUxBF*(NAJiH+2*UZQSL))/2;
var brFqq=Ptubu+(RKXoT-(NNOgZ*(NAJiH+2*UZQSL)))/2;
var dEglS=ZhnDQ.data("mode")
if(xlEsu=="fullscreen")
{
NAJiH=800;
UZQSL=0;
NNOgZ=1;
XUxBF=1;
CYrff=0;
brFqq=0;
}
ZhnDQ.data("mode",xlEsu)
var WWIIE={
"rows":XUxBF,"cols":NNOgZ,"image_size":NAJiH,"image_spacing":UZQSL,"nb_images_per_page":NNOgZ*XUxBF,"margin_left":brFqq,"margin_top":CYrff,"default_selected_image":ErXjR,"has_shadow":jAZcA
}
ZhktP(ZhnDQ,WWIIE)
return ZhnDQ
}
function Xnjsh(ZhnDQ)
{
var aCGnY=xmVee(ZhnDQ).data("3rdparty_datas")
if(aCGnY)
{
return WcSgc(ZhnDQ,aCGnY).photo.length
}
return xmVee(ZhnDQ).data("datas").images.length
}
function Wqaql(ZhnDQ)
{
var SBQQj=LknHR(ZhnDQ,0)
var EbxsO=waJSQuery(">.wa-gallery-image-contenair",SBQQj);
return EbxsO.length;
}
function kSOxT(ZhnDQ)
{
var pXvMm=Xnjsh(ZhnDQ);
return Math.ceil(pXvMm/Wqaql(ZhnDQ));
}
function uewab(ZhnDQ)
{
var QCbZu=ZhnDQ.data("page")
return(QCbZu==undefined)?0:QCbZu;
}
function LknHR(ZhnDQ,QCbZu)
{
var Jhnfe=ZhnDQ.find(".wa-gallery-page")
var uAsBK=null;
Jhnfe.each(function(i)
{
if(i==QCbZu)
{
uAsBK=waJSQuery(this)
return false;
}
});
return uAsBK;
}
function fLIdE(ZhnDQ)
{
var QCbZu=ZhnDQ.data("first-layout")
return(QCbZu==undefined)?0:QCbZu;
}
function IdpUW(ZhnDQ)
{
var QCbZu=ZhnDQ.data("isBusy")
return(QCbZu==undefined)?false:QCbZu;
}
function KQSnq(ZhnDQ,b)
{
ZhnDQ.data("isBusy",b)
}
function elAff(ZhnDQ)
{
var tJKvJ=uewab(ZhnDQ)
rOpUJ(ZhnDQ,tJKvJ-1)
}
function cJsfP(ZhnDQ)
{
var tJKvJ=uewab(ZhnDQ)
rOpUJ(ZhnDQ,tJKvJ+1)
}
function xmVee(ZhnDQ)
{
if(ZhnDQ.data("mode")!="normal") return waJSQuery(document).data("origin_fullscreen_gallery")
return ZhnDQ
}
function OiPwN()
{
var ZhnDQ=waJSQuery(".wa-fullscreen-contenair").find(".wa-gallery")
if(ZhnDQ&&(ZhnDQ.length>0))
{
return ZhnDQ
}
return null;
}
function SeUSq(ZhnDQ)
{
return ZhnDQ.data("diaporama")==true 
}
function TBrpO(ZhnDQ)
{
var rMgot=xmVee(ZhnDQ).data("datas").global_config.diaporama_time*1000;
ZhnDQ.data("diaporama",true)
wa_timeout(function(){HEZYW(ZhnDQ)},rMgot)
}
function HEZYW(ZhnDQ)
{
if(SeUSq(ZhnDQ)==false)
{
return;
}
var tQMtG=null;
if(tQMtG==null) tQMtG=ZhnDQ;
if(uewab(tQMtG)>=kSOxT(tQMtG)-1)
{

tQMtG.data("page",-1)
}
if(ZhnDQ.data("datas").global_config.random_diaporama)
{
var QCbZu=Math.round((Xnjsh(ZhnDQ)-1)*Math.random());
tQMtG.data("page",QCbZu-1)
}
cJsfP(tQMtG)
TBrpO(ZhnDQ);
}
function CiQPZ(ZhnDQ)
{

var oepbI=uewab(ZhnDQ)*Wqaql(ZhnDQ)
var NNHtE=loadFullscreen("fullscreen",oepbI)
TBrpO(NNHtE)
}
