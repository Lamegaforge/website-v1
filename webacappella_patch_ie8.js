function mufvO()
{
waJSQuery(".wa-comp").each(function(i)
{
var ZhnDQ=waJSQuery(this)
var TxPbB=ZhnDQ.attr("style")
var mKIqH=ZhnDQ.data("ms-opacity")
var LcBrk=waExtractCssStyle(TxPbB,"-moz-transform")
if(LcBrk.length>0)
{
var QCbZu=LcBrk.indexOf("(")
if(QCbZu>-1)
{
LcBrk=LcBrk.substring(QCbZu+1)
QCbZu=LcBrk.indexOf("deg")
if(QCbZu>-1)
{
LcBrk=LcBrk.substring(0,QCbZu)
}
}
LcBrk=parseInt(LcBrk)
var wSMtH=0;
var qdwDK=0;
var GHpEF=waExtractCssStyle(TxPbB,"-ms-transform-offset") 
var IKuOT=GHpEF.split(" ")
if(IKuOT.length==2)
{
wSMtH=parseInt(IKuOT[0])
qdwDK=parseInt(IKuOT[1])
}
var rad_rot=LcBrk*2*Math.PI/360;
var costheta=Math.cos(rad_rot);
var sintheta=Math.sin(rad_rot);
var M11=costheta;
var M12=-sintheta;
var M21=sintheta;
var M22=costheta;
ZhnDQ.css({"left":ZhnDQ.position().left+wSMtH,"top":ZhnDQ.position().top+qdwDK})
var EbMEo="progid:DXImageTransform.Microsoft.Matrix(M11="+M11+",M12="+M12+",M21="+M21+",M22="+M22+",SizingMethod='auto expand') ";
if((isNaN(mKIqH)==false)&&(mKIqH>=0)&&(mKIqH<1))
{
EbMEo+="Alpha(opacity="+Math.floor(mKIqH*100)+")"
}
ZhnDQ.css("filter",EbMEo) 
}
});
}
function gYrlf(ZhnDQ,tWCLs,bGBtF)
{
if(bGBtF==undefined)bGBtF=""
if(tWCLs&&(tWCLs!="#")&&(tWCLs!="javascript:void(0)")&&(tWCLs.indexOf("javascript:")==-1))
{
ZhnDQ.css("cursor","pointer")
ZhnDQ.data("href_ie8",tWCLs)
ZhnDQ.data("target_ie8",bGBtF)
ZhnDQ.attr("href","javascript:void(0)")
ZhnDQ.attr("target","")
ZhnDQ.click(function(){
var ZhnDQ=waJSQuery(this)
var tWCLs=ZhnDQ.data("href_ie8")
var bGBtF=ZhnDQ.data("target_ie8")
return waOnClick(tWCLs,{"targ":bGBtF})
});
}
}
function rucIm()
{

waJSQuery(".wa-comp").each(function(i)
{
var ZhnDQ=waJSQuery(this)
var TxPbB=ZhnDQ.attr("style")
var mKIqH=waExtractCssStyle(TxPbB,"opacity")
var mKIqH=parseFloat(mKIqH)
if((isNaN(mKIqH)==false)&&(mKIqH>=0)&&(mKIqH<1))
{
ZhnDQ.css("filter","Alpha(opacity="+Math.floor(mKIqH*100)+")")
ZhnDQ.data("ms-opacity",mKIqH)
}
});
waJSQuery(".wa-button").each(function(i)
{
var ZhnDQ=waJSQuery(this)
var tbfYP=ZhnDQ.find(".wa-but-txt")
var riguO=tbfYP.parent("div")
riguO.css("width",tbfYP.width())
if(ZhnDQ.height()<riguO.height())
{
var OIlnr=(ZhnDQ.width()-riguO.width())/2
var CseKD=(ZhnDQ.height()-riguO.height())/2 
riguO.css({"position":"absolute","left":OIlnr,"top":CseKD})
}

});

{
waJSQuery(".wa-dynmenu").each(function(i)
{
var ZhnDQ=waJSQuery(this)
var WWIIE=waGetJsonCss(ZhnDQ,"config");
if(WWIIE.vertical)
{
var bvRmk=ZhnDQ.find("TD")
bvRmk.each(function(i)
{
var mDqXQ=waJSQuery(this)
var UuFCs=mDqXQ.height()
UuFCs=UuFCs-2
mDqXQ.css({"line-height":UuFCs+"px","height":UuFCs+"px"})
})
}
});
}
mufvO()
}
function waPatchIE()
{
if(isMSIE()==false)
{
return;
}
if(isMSIE_lower_than_ie9())
{
rucIm()
}

}
