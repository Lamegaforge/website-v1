<!--

waJSQuery.fn.outerScrollHeight=function(includeMargin){
var element=this[0];
var jElement=waJSQuery(element);
var totalHeight=element.scrollHeight;


totalHeight+=jElement.outerHeight(includeMargin)-jElement.innerHeight();
return totalHeight;
};
waJSQuery(window).load(function(){
initializeAllWA_dialog();
});
waJSQuery(window).resize(function()
{
WA_Dialog.resizeUI()
});
waJSQuery(window).scroll(function()
{
});
waJSQuery(window).keypress(function(e){
if(WA_Dialog.AXkhw)
{
var Lknqm=WA_Dialog.AXkhw
Lknqm.onCustomKeypress(e.which)
}
});
waJSQuery(window).keydown(function(e){
if(WA_Dialog.AXkhw)
{
var Lknqm=WA_Dialog.AXkhw
Lknqm.onkeydown(e.which)
}
});
function OXksR()
{
var WrPIZ=WA_GetCookie("wa-js-password");
var uDEgB=waJSQuery("#is-password-form-layer")
if(uDEgB.length>0)
{
var GLmvr=uDEgB.find("FORM")
var hiYGx=GLmvr.find(".waInputPassword")
if(MD5("#"+WrPIZ+"#")==extractParamInfo(hiYGx,"crc"))
{
return false;
}
}
return true;
}
function MJaBR()
{
var uDEgB=waJSQuery("#is-password-form-layer") 
if(OXksR()==false)
{
uDEgB.hide()
waJSQuery("#is-global-layer").show()
initializeWA_JQuery()
return true
}
else
{
var GLmvr=uDEgB.find("FORM")
var hiYGx=GLmvr.find(".waInputPassword")
hiYGx.focus()
}
return false
}
function initializeAllWA_dialog()
{
if(document.wa_page_under_construction)
{
var w=new WA_Dialog(false);
w.JTVqp(Translator.tr("Page Under construction")+"<br><a href='index.html'>index.html</a>")
}
if(MJaBR()==false)
{
var uDEgB=waJSQuery("#is-password-form-layer")
if(uDEgB.length>0)
{
uDEgB.show()
var GLmvr=uDEgB.find("FORM")
GLmvr.submit(function()
{
var hiYGx=GLmvr.find(".waInputPassword")
WrPIZ=hiYGx.val();
WA_SetCookie("wa-js-password",WrPIZ);
MJaBR()
return false;
})
}
}
}
function createWaButton(YadZK)
{
var Ykiad={
x:0,y:0,position:"absolute",w:50,h:25,corner:4,shadow:false,label:"Texte",
fct:function(){alert('call function')},fct_obj:null,id:""}
if(YadZK==undefined) YadZK=new Array();
for(k in Ykiad)
{
if(YadZK[k]==undefined) YadZK[k]=Ykiad[k]
}
var MsZZR=YadZK.label.replace(" ","&nbsp;")
var HjdPL=""
var Xaxpc=CONST_WA_GLOBAL_SETTINGS.theme.buttons
var oFcvF=compliantColor(Xaxpc.bg)
var UNWpo=compliantColor(Xaxpc.bg)
var uZjgX=compliantColor(Xaxpc.text)
var IWgMM=compliantColor(Xaxpc.border)
var XVfVD=compliantColor(Xaxpc.bg_over)
var UNWpo_over=compliantColor(Xaxpc.bg_over)
var MFxdT=compliantColor(Xaxpc.text_over)
var IWgMM_over=compliantColor(Xaxpc.border_over)
var jPjNo="param[bord("+IWgMM_over+") inner_bord() bg("+XVfVD+" "+UNWpo_over+") txt("+MFxdT+") bg_img() img() ]"
var ROlJB="param[grad(0 0 0 "+YadZK.h+" "+oFcvF+" "+UNWpo+") bord("+IWgMM+") inborder() ]" 
HjdPL+="<div id='"+YadZK.id+"' class=\"wa-button-link wa-js-action "+jPjNo+"\" style='position:"+YadZK.position+";z-index:1000012;width:"+YadZK.w+"px;height:"+YadZK.h+"px;left:"+YadZK.x+"px;top:"+YadZK.y+"px;'>";
HjdPL+="<button class=\"wa-button "+ROlJB+"\" style=\"position:static;top:0px;left:0px;background-color:red;margin:0px;padding:0px;spacing:0px;width:"+(YadZK.w)+"px;height:"+(YadZK.h)+"px;-moz-border-radius:"+YadZK.corner+"px;border-radius:"+YadZK.corner+"px "+YadZK.corner+"px "+YadZK.corner+"px "+YadZK.corner+"px;";
if(YadZK.shadow) HjdPL+="-webkit-box-shadow: 1px 1px 12px #555;-moz-box-shadow: 1px 1px 12px #555;box-shadow: 1px 1px 12px #555;"
HjdPL+="border:1px solid "+IWgMM+";";
HjdPL+="background:-webkit-gradient(linear,0 0, 0 "+YadZK.h+",from("+oFcvF+"),to("+UNWpo+"));background:-moz-linear-gradient(top left 270deg,"+oFcvF+" 0px,"+UNWpo+" "+YadZK.h+"px);text-align:center;color:"+uZjgX+";\" >"
HjdPL+="<div>";
HjdPL+="<a href='javascript:void(0)' class='wa-but-txt' style=\"position:relative;cursor:pointer;margin:0px;padding:0px;display:inline;vertical-align:middle;font-weight:normal;font-size:12px;color:"+uZjgX+";font-family:Arial;text-decoration:none;\">"+MsZZR+"</a>"
HjdPL+="</div>";
HjdPL+="</button>"
HjdPL+="</div>" 

return HjdPL
}
function activateWaButton(YadZK)
{
var sNeFE=waJSQuery("#"+YadZK.id)
if(sNeFE.length==0)
{
}
else
{
sNeFE.click(function(){YadZK.fct.call(YadZK.fct_obj,YadZK.fct_params)})
sNeFE.css("cursor","pointer")
}
}
function WA_Dialog(wWfqV_close_button)
{
this.CAOSL=0;
this.IbZLP=0;
this.XVNHg_win_width=600;
this.lkvdR=400;
this.OwXhb=200;
this.pCFeh=new Array();
this.Qqgcn="wa-dialog-but-";
this.iZJHs=this.Qqgcn+"div-";
this.BUTTON_HEIGHT=22;
this.wWfqV_close_button=wWfqV_close_button;
this.XHZJO=""
this.MacGs=16;
this.size=function()
{
return new Size(this.CAOSL,this.IbZLP)
}
this.setTitle=function(QAZbU)
{
this.XHZJO=QAZbU
}
this.marginContent=function()
{
return this.MacGs;
}
this.bjbfh=function()
{
if(this.wWfqV_close_button==undefined)this.wWfqV_close_button=true;
this.XBgRB();
}
this.resetButtons=function()
{
this.XBgRB();
}
this.idealHeight=function()
{
return this.Pqltn
}
this.displayWindowWithAutoResize=function(Shtwq,rgckR)
{
this.LeuSe=false
this.Pqltn=Shtwq
this.rOCKJ=rgckR 
this.resetButtons();
rgckR.call(this)
var l=document.getElementById('wa-dialog-content');
if(this.LeuSe==false)
if(l.scrollHeight>200)
{
this.LeuSe=true
this.Pqltn=l.scrollHeight+150
this.resetButtons();
rgckR.call(this)
}
waHackButtons()
waActivateOverButtons()
waGlobalPatchIE()
}
this.initializeWindow=function(XVNHg_lx,XVNHg_ly)
{
if(WA_Dialog.AXkhw)WA_Dialog.AXkhw.closeWin()
WA_Dialog.AXkhw=this;
this.XVNHg_win_width=XVNHg_lx;
this.lkvdR=XVNHg_ly;
this.OwXhb=XVNHg_ly
this.gcYgr()
}
this.progress=function()
{
this.initializeWindow(300,130)
this.writeContent("<div align=center style=''>"+htmlDynamicLoader(true)+"</div>")
waActivateDynamicLoader(waJSQuery("#wa-dialog-content"),true)
}
this.JTVqp=function(mess)
{
this.initializeWindow(450,130)
var s=""
s+="<table border=0 style='width:100%;'><tr>";
s+="<td align=center>"
s+=mess
s+="</td></tr></table>"
this.writeContent(s)
}
this.addButton=function(MsZZR,wYXSj,XcuRd,vIWZM)
{
var PutAs=this.pCFeh.length
var ZddTo=Math.max((MsZZR.length*8)*1.2+30,80)
var IAnJu=new Size(ZddTo,this.BUTTON_HEIGHT);
this.mcRaK("action_"+PutAs,PutAs,MsZZR,wYXSj,IAnJu,XcuRd,vIWZM)
}
this.XBgRB=function()
{
this.pCFeh=new Array();
}
this.mcRaK=function(rpalY,PutAs,MsZZR,wYXSj,IAnJu,XcuRd,vIWZM)
{
var ESMOW=[rpalY,IAnJu,PutAs,MsZZR,wYXSj,XcuRd,vIWZM];
this.pCFeh.push(ESMOW);
}
this.writeContent=function(s)
{
waJSQuery("#wa-dialog-content").html(s)
this.adjustHeight() 

}
this.adjustHeight=function()
{
var UuFCs=waJSQuery("#wa-dialog-content").outerScrollHeight()+120;

UuFCs=Math.max(UuFCs,150)
this.lkvdR=UuFCs;
this.hRkcx()
}
this.IknTW=function(rpalY)
{
for(var QCbZu=0;QCbZu<this.pCFeh.length;QCbZu++)
{
var ESMOW=this.pCFeh[QCbZu];
if((ESMOW[0]==rpalY)||(ESMOW[2]+""==rpalY+""))
return ESMOW;
}
return undefined;
}
this.GHGTL=function(rpalY)
{
var ESMOW=this.IknTW(rpalY);
return ESMOW[1]
}
this.liuCm=function(mBhgp)
{
var ESMOW=this.IknTW(mBhgp);
var IAnJu=this.GHGTL(mBhgp)
var YadZK={
id:this.iZJHs+ESMOW[0],fct:ESMOW[4],
fct_obj:ESMOW[5],fct_params:ESMOW[6],label:ESMOW[3],w:IAnJu.width(),h:IAnJu.height()
}

return YadZK;
}
this.ejuJx=function(mBhgp)
{
return createWaButton(this.liuCm(mBhgp));
}
this.CfYTp=function(mBhgp)
{
return activateWaButton(this.liuCm(mBhgp));
}
this.qoqfS=function(rpalY)
{
var ESMOW=this.IknTW(rpalY)
if(ESMOW)
{
var SeXPC=this.iZJHs+ESMOW[0];
return waJSQuery("#"+SeXPC)
}
return undefined
}
this.gcYgr=function()
{
var l=waJSQuery('#wa-dialog-container');
l.show() 
var s="";
s+="<div class='wa-dialog-container-bg' style='position:absolute;left:0px;top:0px;' ></div>"
var eUpFB=document.webaca_banner_height
s+="<div id='wa-dialog-main' style='position:absolute;left:0px;top:"+eUpFB+"px;' >"
s+="<div style='position:absolute;left:0px;top:0px;width:100px;height:100px;' ></div>"
for(var KODPX in this.pCFeh)
{
s+=this.ejuJx(this.pCFeh[KODPX][2]);
}
if(this.wWfqV_close_button)
{
s+="<div id='wa-dialog-bt-close' class='wa-bt-close-style'>X</div>"
}
s+="<div id='wa-dialog-title' style='position:absolute;left:0px;top:0px;" 
s+=";' ></div>"
s+="<div id='wa-dialog-content' style='position:absolute;left:0px;top:0px;" 
if(isMSIE_lower_than_ie9()==false)
{
s+="overflow:auto;"
}
s+="' ></div>"
s+="</div>"
l.html(s);
for(var KODPX in this.pCFeh)
{
this.CfYTp(this.pCFeh[KODPX][2]);
}
var tHbAv=this;
WA_exec_callback_opera_compliant(this,this.oAtGZ)
var MwTtA=l.find(".wa-dialog-container-bg")
MwTtA.click(function(){
tHbAv.closeWin()
});
waSetVisibilityMainPageContenair(false)
}
this.oAtGZ=function()
{
this.JmnlR=waJSQuery(window).scrollTop() 
this.hRkcx()
var tHbAv=this;
var tpvNa=waJSQuery("#wa-dialog-bt-close")
tpvNa.html("<div id='wa-dialog-bt-close-inner' style='position:absolute;text-align:center'>X</div>")
tpvNa.click(function(){
tHbAv.closeWin()
return false;
})
tpvNa.hover(function(){
waJSQuery(this).toggleClass("wa-bt-close-style-hover")
return false;
}) 

waHackButtons()
waActivateOverButtons()
}
this.intern_closeWin=function()
{
waJSQuery("#wa-dialog-container").hide()
waJSQuery("#wa-dialog-container").empty()
WA_Dialog.AXkhw=false
waSetVisibilityMainPageContenair(true)
}
this.closeWin=function()
{
if(this.wWfqV_close_button!=true) return
this.intern_closeWin()
}
this.onCustomKeypress=function(jXlGf)
{
if((this.pCFeh.length==1)&&(jXlGf==13))
{
this.closeWin()
return true;
}
return false;
}
this.onkeypress=function(jXlGf)
{
return this.onCustomKeypress(jXlGf)
}
this.onkeydown=function(jXlGf)
{
if(jXlGf==27)
{
if(this.wWfqV_close_button)
{
this.closeWin()
return true;
}
}
return this.onCustomKeypress(jXlGf) 
}
this.customUpdate=function(){}
this.hRkcx=function()
{
var QAZbU=waJSQuery("#wa-dialog-title")
QAZbU.html("<div id='wa-dialog-title-inner' style='position:absolute;'>"+this.XHZJO+"</div>")
var Vmmmx=document.webaca_width_page;
var fMJHk=document.webaca_height_page;
var dZNgQ=getDocumentSize().width()
var pOaZW=getDocumentSize().height()
var qCOPQ=getWindowSize().width()
var YJtFh=getWindowSize().height() 

var APbRA=550;
var vGWhA=400;
dZNgQ=Math.max(dZNgQ,APbRA);
pOaZW=Math.max(pOaZW,vGWhA);
this.CAOSL=Math.min(dZNgQ*0.9,this.XVNHg_win_width) 
this.IbZLP=Math.max(this.OwXhb,this.lkvdR)
var YLZgH=waJSQuery(window).scrollTop()+(dZNgQ-this.CAOSL)/2 
var ZtAlx=waJSQuery(window).scrollLeft()+(pOaZW-this.IbZLP)/2
YLZgH=(dZNgQ-this.CAOSL)/2
ZtAlx=(pOaZW-this.IbZLP)/2
YLZgH=Math.max(0,YLZgH)
ZtAlx=Math.max(0,ZtAlx) 
var reoPZ=waJSQuery('#wa-dialog-main')
reoPZ.css({left:YLZgH,top:ZtAlx,width:this.CAOSL,height:this.IbZLP})
var MacGs=this.MacGs;

var hWLPn=this.pCFeh.length;
var AqSkQ=10;
var RwJCu=0;
for(var KODPX=0;KODPX<hWLPn;KODPX++)
{
if(KODPX>0) RwJCu+=AqSkQ;
var IAnJu_but=this.GHGTL(KODPX);
RwJCu+=IAnJu_but.width();
}
var BPIIN=(this.CAOSL-RwJCu)/2
for(var KODPX=0;KODPX<hWLPn;KODPX++)
{
if(KODPX>0) BPIIN+=AqSkQ;
var sNeFE_div=this.qoqfS(KODPX);
var IAnJu_but=this.GHGTL(KODPX);
sNeFE_div.css({left:BPIIN,top:this.IbZLP-IAnJu_but.height()-2*MacGs})
BPIIN+=IAnJu_but.width();
}
var YtdQv=47;
var iZRDk=this.BUTTON_HEIGHT+2*MacGs;
if(hWLPn==0)
{
iZRDk=0;
}
var ejLCE=(this.IbZLP-YtdQv-iZRDk)-MacGs
var TLAiU=waJSQuery("#wa-dialog-content")
var HZXIA_content=Math.round(this.CAOSL-2*MacGs)
var GBSPw=Math.round(ejLCE)
this.m_content_lx=HZXIA_content
this.m_content_ly=GBSPw
TLAiU.css({left:Math.round((this.CAOSL-HZXIA_content)/2),top:Math.round(YtdQv+(ejLCE-GBSPw)/2),width:HZXIA_content,height:GBSPw}) 
QAZbU.css({left:MacGs,top:0,width:HZXIA_content,height:YtdQv})
var IcpqI=waJSQuery("#wa-dialog-title-inner")
var hkQXo=(QAZbU.height()-IcpqI.height())/2;
IcpqI.css("top",hkQXo) 
var tHbAv=this;
var tpvNa=waJSQuery("#wa-dialog-bt-close") 
var SNPIK=waJSQuery("#wa-dialog-bt-close-inner")
SNPIK.css({left:(tpvNa.width()-SNPIK.width())/2,top:(tpvNa.height()-SNPIK.height())/2})
tpvNa.css({top:0,left:this.CAOSL-tpvNa.width(),cursor:"pointer"})
this.customUpdate() 

var oGdgq=waJSQuery("#wa-dialog-container") 
centerFullPageContainer();
}
this.bjbfh();
}

WA_Dialog.getCurrent=function()
{
return WA_Dialog.AXkhw;
}
WA_Dialog.AXkhw=false;
WA_Dialog.resizeUI=function()
{
if(WA_Dialog.AXkhw)
{
var Lknqm=WA_Dialog.AXkhw
if(isAppleMobile()==false)
{
Lknqm.hRkcx()
}
}
}
WA_Dialog.alert=function(s)
{
var w=new WA_Dialog();
w.setTitle(Translator.tr("Information"))
w.JTVqp(s)
}
WA_Dialog.progress=function()
{
var w=new WA_Dialog(false);
w.progress()
}
function centerFullPageContainer()
{
var Vmmmx=document.webaca_width_page;
var fMJHk=document.webaca_height_page;
var oGdgq=waJSQuery('#wa-dialog-container');
var qCOPQ=waJSQuery(window).width()
var YJtFh=waJSQuery(window).height()
var ZtAlx_bg=waJSQuery(window).scrollTop();
var Lknqm=WA_Dialog.getCurrent()
var FVWsI=Lknqm&&isAppleMobile();
if(FVWsI)
{
}
var Ptubu=0;
var YNdhB=waJSQuery("#wa-dialog-main") 
if((YNdhB.length>0)&&(Lknqm!=false))
{
var rmMrs=0;
var cXpfv=0;
if(YNdhB.width()<=waJSQuery(window).width())
{
rmMrs=(waJSQuery(window).width()-YNdhB.width())/2+waJSQuery(window).scrollLeft()
}
else
{
var xDialogCenter=(Vmmmx-YNdhB.width())/2
rmMrs=xDialogCenter
var x0=xDialogCenter+YNdhB.width()/2-waJSQuery(window).width()
if(waJSQuery(window).scrollLeft()>x0+YNdhB.width()/2)
{
var tkqVB=waJSQuery(window).scrollLeft()-x0
rmMrs+=tkqVB-YNdhB.width()/2
}
if(waJSQuery(window).scrollLeft()<xDialogCenter)
{
var tkqVB=xDialogCenter-waJSQuery(window).scrollLeft()
rmMrs-=tkqVB
}
}
if(YNdhB.height()<=waJSQuery(window).height())
{
cXpfv=(waJSQuery(window).height()-YNdhB.height())/2+waJSQuery(window).scrollTop()
}
else
{
var yDialogCenter=(fMJHk-YNdhB.height())/2
cXpfv=yDialogCenter
var y0=yDialogCenter+YNdhB.height()/2-waJSQuery(window).height()
if(waJSQuery(window).scrollTop()>y0+YNdhB.height()/2)
{
var tkqVB=waJSQuery(window).scrollTop()-y0
cXpfv+=tkqVB-YNdhB.height()/2
}
if(waJSQuery(window).scrollTop()<yDialogCenter)
{
var tkqVB=yDialogCenter-waJSQuery(window).scrollTop()
cXpfv-=tkqVB
}
cXpfv=Lknqm.JmnlR
cXpfv=Math.min(cXpfv,waJSQuery(window).scrollTop())
var jnYPN=(waJSQuery(window).scrollTop()+waJSQuery(window).height())-YNdhB.height()
cXpfv=Math.max(cXpfv,jnYPN)
cXpfv+=10
}



{
YNdhB.css({left:rmMrs,top:cXpfv})
}
}
var XfkPT=waJSQuery(window).width();
var nVjSp=waJSQuery(window).height();
if(XfkPT<Vmmmx)
{
XfkPT=waJSQuery(document).width();
}
if(nVjSp<fMJHk)
{
nVjSp=waJSQuery(document).height();
}
if((YNdhB.length>0)&&(Lknqm!=false))
{
oGdgq.css({left:0,top:0,width:XfkPT,height:nVjSp})
var MwTtA=oGdgq.find(".wa-dialog-container-bg");

MwTtA.css({left:0,top:0,width:XfkPT,height:nVjSp}) 
var FTsdo=new RGBColor(CONST_WA_GLOBAL_SETTINGS.overlayColor)
MwTtA.css({"backgroundColor":FTsdo.toHexaOpaqueColor(),"opacity":FTsdo.a})
oGdgq.show()
}
}

-->
