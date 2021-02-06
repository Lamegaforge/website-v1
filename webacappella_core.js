<!--
 
waJSQuery(function(){
waJSQuery.fn.extend({
disableSelection:function(){
this.each(function(){
this.onselectstart=function(){return false;};
this.unselectable="on";
waJSQuery(this).css('-moz-user-select','none');
waJSQuery(this).css('-webkit-user-select','none');
});
}
});
waJSQuery.fn.extend({everyTime:function(interval,label,fn,times,belay){return this.each(function(){waJSQuery.timer.add(this,interval,label,fn,times,belay);});},oneTime:function(interval,label,fn){return this.each(function(){waJSQuery.timer.add(this,interval,label,fn,1);});},stopTime:function(label,fn){return this.each(function(){waJSQuery.timer.remove(this,label,fn);});}});waJSQuery.extend({timer:{guid:1,global:{},regex:/^([0-9]+)\s*(.*s)?$/,powers:{
'ms':1,'cs':10,'ds':100,'s':1000,'das':10000,'hs':100000,'ks':1000000},timeParse:function(value){if(value==undefined||value==null) return null;var result=this.regex.exec(waJSQuery.trim(value.toString()));if(result[2]){var num=parseInt(result[1],10);var mult=this.powers[result[2]]||1;return num*mult;}else{return value;}},add:function(element,interval,label,fn,times,belay){var counter=0;if(waJSQuery.isFunction(label)){if(!times) times=fn;fn=label;label=interval;}interval=waJSQuery.timer.timeParse(interval);if(typeof interval!='number'||isNaN(interval)||interval<=0) return;if(times&&times.constructor!=Number){belay=!!times;times=0;}times=times||0;belay=belay||false;if(!element.$timers) element.$timers={};if(!element.$timers[label]) element.$timers[label]={};fn.$timerID=fn.$timerID||this.guid++;var handler=function(){if(belay&&this.inProgress) return;this.inProgress=true;if((++counter>times&&times!==0)||fn.call(element,counter)===false) waJSQuery.timer.remove(element,label,fn);this.inProgress=false;};handler.$timerID=fn.$timerID;if(!element.$timers[label][fn.$timerID]) element.$timers[label][fn.$timerID]=window.setInterval(handler,interval);if(!this.global[label]) this.global[label]=[];this.global[label].push(element);},remove:function(element,label,fn){var timers=element.$timers,ret;if(timers){if(!label){for(label in timers) this.remove(element,label,fn);}else if(timers[label]){if(fn){if(fn.$timerID){window.clearInterval(timers[label][fn.$timerID]);delete timers[label][fn.$timerID];}}else{for(var fn in timers[label]){window.clearInterval(timers[label][fn]);delete timers[label][fn];}}for(ret in timers[label]) break;if(!ret){ret=null;delete timers[label];}}for(ret in timers) break;if(!ret) element.$timers=null;}}}});if(waJSQuery.browser.msie) waJSQuery(window).one("unload",function(){var global=waJSQuery.timer.global;for(var label in global){var els=global[label],i=els.length;while(--i) waJSQuery.timer.remove(els[i],label);}});
if(document.internalPreview!=true)
{
waJSQuery(".wa-market-link").each(function()
{
var WfaKF=waJSQuery(this);
WfaKF.css("cursor","pointer") 
WfaKF.click(function()
{
javascript:WA_showMarketCart() 
});
});
}
});


function waParseCleanStringJSON(s)
{
var Vfubb="{"
var doEoI="}"
var WHBHF=""
var c;
for(var i=0;i<s.length;i++)
{
c=s.charAt(i)
if(c=="\"")
{
do
{
i++;
c=s.charAt(i)
}
while(c!="\"")
}
if(c==Vfubb)
{
var eocqT=0;
var qFesu=true;
var WRCLv=false;
do
{
qFesu=true;
i++;
c=s.charAt(i)
if((WRCLv==false)&&(c=="\""))
{
WRCLv=true;
}
else
if((WRCLv==true)&&(c=="\""))
{
WRCLv=false;
}
if(WRCLv==false)
{
if(c==Vfubb)
{
eocqT++;
}
if((c!=doEoI)||(eocqT!=0))
{
WHBHF+=c;
}
if(eocqT>0)
if(c==doEoI)
{
eocqT--;
qFesu=false
}
}
else
{
WHBHF+=c;
}
}
while((qFesu==false)||(c!=doEoI)||(eocqT!=0))
break;
}
}
WHBHF=Vfubb+WHBHF+doEoI 
try{
return waJSQuery.parseJSON(WHBHF);
}
catch(e){
}
return null;
}
function waLoadGoogleFonts()
{
var wf=document.createElement('script');
wf.src=('https:'==document.location.protocol?'https':'http')+'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
wf.type='text/javascript';
wf.async='true';
var s=document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf,s);
}
var BrowserDetect={
init:function(){
this.browser=this.searchString(this.dataBrowser)||"An unknown browser";
this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";
this.OS=this.searchString(this.dataOS)||"an unknown OS";
},searchString:function(data){
for(var i=0;i<data.length;i++){
var dataString=data[i].string;
var dataProp=data[i].prop;
this.versionSearchString=data[i].versionSearch||data[i].identity;
if(dataString){
if(dataString.indexOf(data[i].subString)!=-1)
return data[i].identity;
}
else if(dataProp)
return data[i].identity;
}
},searchVersion:function(dataString){
var index=dataString.indexOf(this.versionSearchString);
if(index==-1) return;
return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
},dataBrowser:[
{
string:navigator.userAgent,subString:"Chrome",identity:"Chrome"
},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"
},{
string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"
},{
prop:window.opera,identity:"Opera",versionSearch:"Version"
},{
string:navigator.vendor,subString:"iCab",identity:"iCab"
},{
string:navigator.vendor,subString:"KDE",identity:"Konqueror"
},{
string:navigator.userAgent,subString:"Firefox",identity:"Firefox"
},{
string:navigator.vendor,subString:"Camino",identity:"Camino"
},{
string:navigator.userAgent,subString:"Netscape",identity:"Netscape"
},{
string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"
},{
string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"
},{
string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"
}
],dataOS:[
{
string:navigator.platform,subString:"Win",identity:"Windows"
},{
string:navigator.platform,subString:"Mac",identity:"Mac"
},{
string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"
},{
string:navigator.platform,subString:"Linux",identity:"Linux"
}
]
};
BrowserDetect.init();
function RGBColor(SqsTR)
{
this.ok=false;this.a=1.0;
if(SqsTR.charAt(0)=='#'){SqsTR=SqsTR.substr(1);}
SqsTR=SqsTR.replace(/ /g,'');
SqsTR=SqsTR.toLowerCase();
var wXaOM=[
{re:/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,2}\.*\d{0,2})\)$/,_process:function(bits){return [ parseInt(bits[1]),parseInt(bits[2]),parseInt(bits[3]),parseFloat(""+bits[4]) ];}},{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,_process:function(bits){return [ parseInt(bits[1]),parseInt(bits[2]),parseInt(bits[3])];}},{re:/^(\w{2})(\w{2})(\w{2})(\w{2})$/,_process:function(bits){return [ parseInt(bits[1],16),parseInt(bits[2],16),parseInt(bits[3],16),Math.round(parseInt(bits[4],16)*100/255)/100 ];}},{re:/^(\w{2})(\w{2})(\w{2})$/,_process:function(bits){return [ parseInt(bits[1],16),parseInt(bits[2],16),parseInt(bits[3],16) ];}}
];
for(var i=0;i<wXaOM.length;i++){
var vfKfH=wXaOM[i].re;
var gcfRq=wXaOM[i]._process;
var chLRI=vfKfH.exec(SqsTR);
if(chLRI){
var nTSLl=gcfRq(chLRI);
this.r=nTSLl[0];this.g=nTSLl[1];this.b=nTSLl[2];this.a=nTSLl[3];
this.ok=true;
}
}
this.r=(this.r<0||isNaN(this.r))?0:((this.r>255)?255:this.r);
this.g=(this.g<0||isNaN(this.g))?0:((this.g>255)?255:this.g);
this.b=(this.b<0||isNaN(this.b))?0:((this.b>255)?255:this.b);
this.a=(this.a>1||isNaN(this.a))?1:((this.a<0)?0:this.a);
this.toRGB=function()
{
if(this.a==1)return 'rgb('+this.r+', '+this.g+', '+this.b+')';
return 'rgba('+this.r+', '+this.g+', '+this.b+','+this.a+')';
}
this.toRGB_opaque=function()
{
return 'rgb('+this.r+', '+this.g+', '+this.b+')';
}
this.UPmoG=function(GYCFh)
{
if(GYCFh.length==1)GYCFh="0"+GYCFh
return GYCFh
}
this.toHexaOpaqueColor=function()
{
return  "#"+this.UPmoG(this.r.toString(16))+this.UPmoG(this.g.toString(16))+this.UPmoG(this.b.toString(16));
}
}
function compliantColor(LakOs)
{
if(isMSIE_lower_than_ie9())
{
if(LakOs=="") return "";
if(LakOs=="transparent") return "";
var BKxFk=new RGBColor(LakOs)
if(BKxFk.a==0) return ""
return BKxFk.toHexaOpaqueColor();
}
return LakOs;
}
function isProbablyRobot()
{
return BrowserDetect.browser.length==0
}
function isMSIE()
{
return BrowserDetect.browser=="Explorer"
}
function isFirefox()
{
return BrowserDetect.browser=="Firefox" 
}
function isChrome()
{
return BrowserDetect.browser=="Chrome"
}
function isWindowsOS()
{
if(BrowserDetect.OS.match(/windows/i)) return true;
return false;
}
function isMSIE8()
{
if((BrowserDetect.browser=="Explorer")&&(BrowserDetect.version==8))
{
return true;
}
return false;
}
function isMSIE_lower_than_ie9()
{
if(isMSIE())
{
if(document.documentMode)
{
if(document.documentMode>=9)
{
return false;
}
}
return true;
}
return false;
}
function isMSIE_higher_than_ie8()
{
if(isMSIE())
{
if(document.documentMode)
{
if(document.documentMode>=9)
{
return true;
}
}
return false;
}
return false;
}
function isWebKit()
{
if(navigator.userAgent.match(/webkit/i)) return true;
return false;
}
function isAndroidMobile()
{
if(navigator.userAgent.match(/android/i)) return true;
return false;
}
function isMobileBrowser()
{
return isAppleMobile()||isAndroidMobile();
}
function isChrome()
{
if(navigator.userAgent.match(/Chrome/i))
return true;
return false;
}
function isAppleMobile()
{
return isIPhone()||isIPad()
}
function isIPad()
{
if(navigator.userAgent.match(/iPad/i))
return true;
return false;
}
function isIPhone()
{
if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))
return true;
return false;
}
function extractNum(st)
{
var len=st.length
if((len>0)&&(st.substring(len-2,len)=="px"))
{
return wa_evaluate(st.substring(0,len-2))
}
return 0;
}
function waJSONLinkToHref(WfaKF)
{
var GYCFh=""
var wLTrm=WfaKF.url
var dfcaa=Translator.m_lang_for_filename
if(dfcaa.length>0)dfcaa="_"+dfcaa
wLTrm=wLTrm.replace(/@lng@/g,dfcaa)
var pRjjo=WfaKF.js
if(pRjjo==undefined)pRjjo=""
GYCFh+="href=\""+wLTrm+"\" "
if(WfaKF.open==1)
{
GYCFh+="target="
GYCFh+="_blank "
}
if(pRjjo.length>0)
{
GYCFh+="onclick=waLaunchFunction(function(){"+pRjjo+"}) "
}
return GYCFh;
}
function waJSONLinkToOnClick(WfaKF)
{
var GYCFh=""
var wLTrm=WfaKF.url
var dfcaa=Translator.m_lang_for_filename
if(dfcaa.length>0)dfcaa="_"+dfcaa
wLTrm=wLTrm.replace(/@lng@/g,dfcaa)
var bGBtF="";
if(WfaKF.open==1)
{
bGBtF="_blank"
}
var pRjjo=WfaKF.js
if(pRjjo==undefined)pRjjo=""
pRjjo=pRjjo.replace(/\"/g,"&quot;")
GYCFh+="onclick=\"waOnClick('"+wLTrm+"',{'targ':'"+bGBtF+"'";
if(pRjjo.length>0)
{
GYCFh+=",'js':function(){"+pRjjo+"}"
}
GYCFh+="});return false;\" "
return GYCFh;
}
function waLaunchFunction(wYXSj)
{
wYXSj()
}
function waOnClick(wLTrm,abGfD)
{
if(abGfD.js!=undefined)
{
try
{
abGfD.js()
}
catch(e)
{
alert('ERROR: javascript link '+abGfD.js)
}
}
if((wLTrm==undefined)||(wLTrm.length==0)) return;
var bGBtF=abGfD.targ;
if(bGBtF&&bGBtF.length>0)
{
if((bGBtF.length>0)&&(bGBtF!="_blank"))
{
window.frames[bGBtF].location.href=(wLTrm)
}
else
{
window.open(wLTrm,bGBtF)
}
}
else
{
window.location.href=(wLTrm)
}
return false;
}


function waActivateDynamicLoader(bFgaN,LeuSe)
{
var QNNRA=bFgaN.find(".wa-dyn-loader")
if(QNNRA.data('timer_animation_initialized')==true)
{
return;
}
QNNRA.data('timer_animation_initialized',true) 
if(LeuSe)
{
QNNRA.css({"width":bFgaN.width(),"height":bFgaN.height()})
}
var XTSCE=65
var whBuP=500;
var nlpNf=QNNRA.children("img")
QNNRA.everyTime(XTSCE,function(i)
{
var iFooM=waJSQuery(this).data("anim_delay_img")
if(iFooM==undefined)iFooM=XTSCE;
if(iFooM>=whBuP)
{
nlpNf.show()
}
var mKClv=QNNRA.data("anim_frm")
if(mKClv==undefined)mKClv=0;
var IAnJu=40
var hJNER=0;
var FccAU=mKClv*IAnJu
var FkGPM=hJNER+IAnJu;
var SoqYk=FccAU+IAnJu;;
var AIleV=(waJSQuery(this).width()-IAnJu)/2
var fPHFQ=(waJSQuery(this).height()-IAnJu)/2
nlpNf.css({"left":AIleV,"top":-FccAU+fPHFQ})
nlpNf.css({"clip":"rect("+FccAU+"px,"+FkGPM+"px,"+SoqYk+"px,"+hJNER+"px)"})
mKClv=(mKClv+1)%12
waJSQuery(this).data("anim_frm",mKClv)
iFooM+=XTSCE
waJSQuery(this).data("anim_delay_img",iFooM)
});
}
function htmlDynamicLoader(PbgQl,CAOSL,IbZLP)
{
var GYCFh=""
GYCFh+="<div class='wa-dyn-loader' style=\"";
if(PbgQl)
{
GYCFh+="position:absolute;left:0px;top:0px;"
}
else
{
GYCFh+="position:relative;left:0px;top:0px;"
}
GYCFh+="width:"+CAOSL+"px;height:"+IbZLP+"px;"
GYCFh+="overflow:hidden;" 
var n=0
var IAnJu=40
var hJNER=0;
var FccAU=n*IAnJu
var FkGPM=hJNER+IAnJu;
var SoqYk=FccAU+IAnJu;;
GYCFh+=";\">"
GYCFh+="<img style=\"position:absolute;border:none;left:0px;top:0px;";
GYCFh+="display:none;"
GYCFh+="clip:rect("+FccAU+"px,"+FkGPM+"px,"+SoqYk+"px,"+hJNER+"px);"
GYCFh+="\" ";
GYCFh+="src=\"wa_loading.png\" />"
GYCFh+="</div>"
return GYCFh;
}
function Size(lx,ly)
{
this.CAOSL=lx;this.IbZLP=ly;
this.width=function(){return this.CAOSL}
this.height=function(){return this.IbZLP}
this.clone=function(){return new Size(this.CAOSL,this.IbZLP)}
this.greaterThan=function(GYCFh){if(GYCFh==undefined) return null;return(this.CAOSL>GYCFh.CAOSL)&&(this.IbZLP>GYCFh.IbZLP)}
this.toString=function()
{
return this.width()+"x"+this.height()
}
this.scale=function(XVNHg,cBxij)
{
if(!cBxij)cBxij=false
var IAnJu=this;
var MdatZ=IAnJu.width()
var UWOWK=IAnJu.height()
var p1=MdatZ*XVNHg.height();
var p2=XVNHg.width()*UWOWK;
var r1=MdatZ/UWOWK;
var r2=UWOWK/MdatZ;
var newSize1=new Size(XVNHg.height()*r1,XVNHg.height());
var newSize2=new Size(XVNHg.width(),XVNHg.width()*r2);
if(p2>p1)
{
if((cBxij==true)||((newSize1.width()<=IAnJu.width())&&(newSize1.height()<=IAnJu.height())))
{
IAnJu.CAOSL=Math.round(newSize1.width());
IAnJu.IbZLP=Math.round(newSize1.height());
}
}
else
{
if((cBxij==true)||((newSize2.width()<=IAnJu.width())&&(newSize2.height()<=IAnJu.height())))
{
IAnJu.CAOSL=Math.round(newSize2.width());
IAnJu.IbZLP=Math.round(newSize2.height());
}
}
this.CAOSL=IAnJu.width();
this.IbZLP=IAnJu.height();
return true;
}
this.scaleByExpanding=function(XVNHg)
{
var IAnJu=this;
var MdatZ=IAnJu.width()
var UWOWK=IAnJu.height()
var p1=MdatZ*XVNHg.height();
var p2=XVNHg.width()*UWOWK;
var r1=MdatZ/UWOWK;
var r2=UWOWK/MdatZ;
var newSize1=new Size(XVNHg.height()*r1,XVNHg.height());
var newSize2=new Size(XVNHg.width(),XVNHg.width()*r2);
if(p2<p1)
{
if((newSize1.width()<=IAnJu.width())&&(newSize1.height()<=IAnJu.height()))
{
IAnJu.CAOSL=Math.round(newSize1.width());
IAnJu.IbZLP=Math.round(newSize1.height());
}
}
else
{
if((newSize2.width()<=IAnJu.width())&&(newSize2.height()<=IAnJu.height()))
{
IAnJu.CAOSL=Math.round(newSize2.width());
IAnJu.IbZLP=Math.round(newSize2.height());
}
}
this.CAOSL=IAnJu.width();
this.IbZLP=IAnJu.height();
return true;
}
}
function Point(p_x,p_y){this.x=p_x;this.y=p_y;
this.translate=function(YLZgH,ZtAlx){this.x+=YLZgH;this.y+=ZtAlx;}
this.clone=function(){return new Point(this.x,this.y)}
}
function Rect(p_x,p_y,lx,ly)
{
this.x=p_x;this.y=p_y;this.width=lx;this.height=ly;
this.clone=function(){return new Rect(this.x,this.y,this.width,this.height)}
this.equals=function(ZhnDQ){return(this.x==ZhnDQ.x)&&(this.y==ZhnDQ.y)&&(this.width==ZhnDQ.width)&&(this.height==ZhnDQ.height);}
this.copy=function(ZhnDQ){this.x=ZhnDQ.x;this.y=ZhnDQ.y;this.width=ZhnDQ.width;this.height=ZhnDQ.height;}
this.translate=function(YLZgH,ZtAlx){this.x+=YLZgH;this.y+=ZtAlx;}
this.isValid=function(){return(this.width>0)&&(this.height>0);}
}
var QERoS=[
{acc:"e",l:["é","è","ë"]},{acc:"a",l:["à","ä","â"]},{acc:"u",l:["ü","û"]},{acc:"c",l:["ç"]},{acc:"o",l:["ö","ô"]}
];
function removeAccentsFromString(s)
{
var res=s.toLowerCase();
for(var i=0;i<QERoS.length;i++)
{
var array2=QERoS[i].l;
for(var i2=0;i2<array2.length;i2++)
{
var reg=new RegExp(array2[i2],"g");
res=res.replace(reg,QERoS[i].acc)
}
}
return res;
}
function IsNumeric(JGBYG)
{
var YSTiH="0123456789.";var IABoP=true;var bbSjr;
for(KODPX=0;KODPX<JGBYG.length&&IABoP==true;KODPX++){bbSjr=JGBYG.charAt(KODPX);if(YSTiH.indexOf(bbSjr)==-1) IABoP=false;}
return IABoP;
}
function getDocumentSize()
{
return new Size(waJSQuery(document).width(),waJSQuery(document).height());
}
function getWindowSize()
{
if(isAppleMobile())
{
return new Size(window.innerWidth,window.innerHeight);
}
return new Size(waJSQuery(window).width(),waJSQuery(window).height());
}
function urlSuffixe(XTSCE_minuts)
{
var IIFtN=XTSCE_minuts*60;
var wPVMv=new Date();
var fxYOP=0;
fxYOP+=wPVMv.getYear()*12*31*24*60*60;
fxYOP+=wPVMv.getMonth()*31*24*60*60;
fxYOP+=wPVMv.getDate()*24*60*60;
fxYOP+=wPVMv.getHours()*60*60;
fxYOP+=wPVMv.getMinutes()*60;
fxYOP+=wPVMv.getSeconds();
if(IIFtN!=0)
{
fxYOP=Math.floor(fxYOP/IIFtN)*IIFtN
}
return "-"+fxYOP;
}
function urlAntiCacheForPreview()
{
if(document.webaca_is_preview) return urlSuffixe(0);
return "";
}
function Diuka()
{
var BDpUW=document.getElementsByTagName("A");
for(var KODPX=0;KODPX<BDpUW.length;KODPX++)
{
var ZhnDQ=BDpUW[KODPX];
if(ZhnDQ.onmouseover)ZhnDQ.onmouseover=null;
if(ZhnDQ.onmouseout)ZhnDQ.onmouseout=null;
}
}
function WJodX()
{
for(var QCbZu in document.wa_global_list_element)
{
var LfJiO=document.wa_global_list_element[QCbZu]
var eDKmk=document.getElementById(LfJiO)
eDKmk.onclick=function()
{
WA_focus(this)
}
}
}
function WA_declare(LfJiO)
{
if(!document.wa_global_list_element)
{
document.wa_global_list_element=new Array();;
}
document.wa_global_list_element.push(LfJiO)
}
function hSafE()
{
var wLTrm=window.location.search;
if(wLTrm.substr(0,1)=="?")wLTrm=wLTrm.substr(1);
if(wLTrm.length==0)return;
var wCYTo=new Array();
var aoqpP=wLTrm.split("&");
for(var i=0;i<aoqpP.length;i++)
{
var gLVMb=aoqpP[i].split("=");wCYTo[gLVMb[0]]=gLVMb[1];
}
var GYCFh_info=wCYTo["wa_key"];
if(!GYCFh_info)return;
var tUEMd=new Array();
tUEMd.m_unid=GYCFh_info;
tUEMd.m_index_item=-1;
var fplGs_sep_info=GYCFh_info.indexOf("-");
if(fplGs_sep_info!=-1)
{
tUEMd.m_unid=GYCFh_info.substring(0,fplGs_sep_info);
tUEMd.m_index_item=parseInt(GYCFh_info.substring(fplGs_sep_info+1));
}
document.wa_global_query_info=tUEMd;
}
function IS_onload_WA()
{
if(isAppleMobile())
{
Diuka()
}
else
{
WJodX()
}
hSafE();

vXrwI()
}
function vXrwI()
{
var kKpxD=0;
var WRebi=document.webaca_banner_height;
var WpOnh=document.webaca_page_option_background
if(document.webaca_page_is_centered)
{
var pgWvs=getDocumentSize().width() 

var xSnZo=document.webaca_width_page
if((WpOnh==0)||(WpOnh==1))
{
if(pgWvs>xSnZo)kKpxD=(pgWvs-xSnZo)/2;
}
else
if(WpOnh==2)
{
}
else
if(WpOnh==3) 
{
kKpxD=pgWvs/2-(document.webaca_page_background_img_size[0]/2);
}
}
if(document.body&&document.body.style)
document.body.style.backgroundPosition=kKpxD+"px "+WRebi+"px";
}
waJSQuery(window).resize(function(){
vXrwI()
});


function WA_loadMessages()
{
for(var k in CONST_WA_TR)
{
var key=CONST_WA_TR[k]
Translator.m_tr[key[0]]=key[1]
}
for(var n=0;n<CONST_WA_COUNTRIES.codes.length;n++)
{
var SeXPC=CONST_WA_COUNTRIES.codes[n]
var MsZZR=CONST_WA_COUNTRIES.labels[n]
Translator.m_countries[SeXPC]=MsZZR
}
}
function Translator()
{
}
Translator.m_tr=new Array();
Translator.m_countries=new Array();
Translator.tr=function(k,bEncodeBr)
{
try
{
var v=Translator.m_tr[k]
if((v==undefined)||(v.length==0))return "@"+k;
if(bEncodeBr!=false)
{
v=v.replace(/\n/g,"<br>")
}
return v
}
catch(e){}
return k;
}
Translator.country=function(k)
{
try
{
var v=Translator.m_countries[k]
if((v==undefined)||(v.length==0))return "@"+k;
return v
}
catch(e){}
return k;
}

function isOperaBrowser()
{
return(/opera/i.test(navigator.userAgent))
}
function WA_exec_callback_opera_compliant(XcuRd,TJVdQ)
{
TJVdQ.call(XcuRd)
}
function WA_exec_delayedCallback(XcuRd,TJVdQ)
{
wa_timeout(Delegate.create(XcuRd,TJVdQ),0);
}
function WA_loadScript(url,callback,params)
{
var e=document.createElement("script");
e.src=url;
e.type="text/javascript";
e.onerror=function(){callback(params,false);}
if(/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent)){
e.onreadystatechange=function(){
if((this.readyState=='complete')||(this.readyState=='loaded')){
callback(params,true);
}
}
}else
{
e.onload=function(){
if(/opera/i.test(navigator.userAgent))
wa_timeout(callback,0,params,true);
else
callback(params,true);
}
}
document.getElementsByTagName("head")[0].appendChild(e);
}
function WA_onSearch(LfJiO_input)
{
var VLFOd=document.getElementById(LfJiO_input);
if(document.wa_search_js_loaded==true)
{
WA_openSearchDialog(VLFOd,document.const_wa_search_index_js)
}
else
{
WA_Dialog.progress();
eRaTj(VLFOd)
}
}
function QOorO(vIWZM)
{
document.wa_search_js_loaded=true
WA_openSearchDialog(vIWZM[0],document.const_wa_search_index_js)
}
function eRaTj(VLFOd_field)
{
WA_loadScript(document.const_wa_search_js,QOorO,[VLFOd_field])
}
function oddfi(offset){
var endstr=document.cookie.indexOf(";",offset);
if(endstr==-1)
endstr=document.cookie.length;
return unescape(document.cookie.substring(offset,endstr));
}
function WA_GetCookie(name)
{
var arg=name+"=";
var alen=arg.length;
var clen=document.cookie.length;
var i=0;
while(i<clen)
{
var j=i+alen;
if(document.cookie.substring(i,j)==arg)
return oddfi(j);
i=document.cookie.indexOf(" ",i)+1;
if(i==0) break;
}
return "";
}
function WA_SetCookie(name,value){
var argv=WA_SetCookie.arguments;
var argc=WA_SetCookie.arguments.length;
var expires=(argc>2)?argv[2]:null;
var path=(argc>3)?argv[3]:null;
var domain=(argc>4)?argv[4]:null;
var secure=(argc>5)?argv[5]:false;
document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+expires.toGMTString()))+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain))+((secure==true)?"; secure":"");
}

function MD5(string){
function RotateLeft(lValue,iShiftBits){
return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits));
}
function AddUnsigned(lX,lY){
var lX4,lY4,lX8,lY8,lResult;
lX8=(lX&0x80000000);
lY8=(lY&0x80000000);
lX4=(lX&0x40000000);
lY4=(lY&0x40000000);
lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);
if(lX4&lY4){
return(lResult^0x80000000^lX8^lY8);
}
if(lX4|lY4){
if(lResult&0x40000000){
return(lResult^0xC0000000^lX8^lY8);
}else{
return(lResult^0x40000000^lX8^lY8);
}
}else{
return(lResult^lX8^lY8);
}
}
function F(x,y,z){return(x&y)|((~x)&z);}
function G(x,y,z){return(x&z)|(y&(~z));}
function H(x,y,z){return(x^y^z);}
function I(x,y,z){return(y^(x|(~z)));}
function FF(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(F(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function GG(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(G(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function HH(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(H(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function II(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(I(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function ConvertToWordArray(string){
var lWordCount;
var lMessageLength=string.length;
var lNumberOfWords_temp1=lMessageLength+8;
var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;
var lNumberOfWords=(lNumberOfWords_temp2+1)*16;
var lWordArray=Array(lNumberOfWords-1);
var lBytePosition=0;
var lByteCount=0;
while(lByteCount<lMessageLength){
lWordCount=(lByteCount-(lByteCount%4))/4;
lBytePosition=(lByteCount%4)*8;
lWordArray[lWordCount]=(lWordArray[lWordCount]|(string.charCodeAt(lByteCount)<<lBytePosition));
lByteCount++;
}
lWordCount=(lByteCount-(lByteCount%4))/4;
lBytePosition=(lByteCount%4)*8;
lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);
lWordArray[lNumberOfWords-2]=lMessageLength<<3;
lWordArray[lNumberOfWords-1]=lMessageLength>>>29;
return lWordArray;
};
function WordToHex(lValue){
var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
for(lCount=0;lCount<=3;lCount++){
lByte=(lValue>>>(lCount*8))&255;
WordToHexValue_temp="0"+lByte.toString(16);
WordToHexValue=WordToHexValue+WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
}
return WordToHexValue;
};
function Utf8Encode(string){
string=string.replace(/\r\n/g,"\n");
var utftext="";
for(var n=0;n<string.length;n++){
var c=string.charCodeAt(n);
if(c<128){
utftext+=String.fromCharCode(c);
}
else if((c>127)&&(c<2048)){
utftext+=String.fromCharCode((c>>6)|192);
utftext+=String.fromCharCode((c&63)|128);
}
else{
utftext+=String.fromCharCode((c>>12)|224);
utftext+=String.fromCharCode(((c>>6)&63)|128);
utftext+=String.fromCharCode((c&63)|128);
}
}
return utftext;
};
var x=Array();
var k,AA,BB,CC,DD,a,b,c,d;
var S11=7,S12=12,S13=17,S14=22;
var S21=5,S22=9,S23=14,S24=20;
var S31=4,S32=11,S33=16,S34=23;
var S41=6,S42=10,S43=15,S44=21;
string=Utf8Encode(string);
x=ConvertToWordArray(string);
a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;
for(k=0;k<x.length;k+=16){
AA=a;BB=b;CC=c;DD=d;
a=FF(a,b,c,d,x[k+0],S11,0xD76AA478);
d=FF(d,a,b,c,x[k+1],S12,0xE8C7B756);
c=FF(c,d,a,b,x[k+2],S13,0x242070DB);
b=FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);
a=FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);
d=FF(d,a,b,c,x[k+5],S12,0x4787C62A);
c=FF(c,d,a,b,x[k+6],S13,0xA8304613);
b=FF(b,c,d,a,x[k+7],S14,0xFD469501);
a=FF(a,b,c,d,x[k+8],S11,0x698098D8);
d=FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);
c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
a=GG(a,b,c,d,x[k+1],S21,0xF61E2562);
d=GG(d,a,b,c,x[k+6],S22,0xC040B340);
c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
b=GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);
a=GG(a,b,c,d,x[k+5],S21,0xD62F105D);
d=GG(d,a,b,c,x[k+10],S22,0x2441453);
c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
b=GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);
a=GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);
d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
c=GG(c,d,a,b,x[k+3],S23,0xF4D50D87);
b=GG(b,c,d,a,x[k+8],S24,0x455A14ED);
a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
d=GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);
c=GG(c,d,a,b,x[k+7],S23,0x676F02D9);
b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
a=HH(a,b,c,d,x[k+5],S31,0xFFFA3942);
d=HH(d,a,b,c,x[k+8],S32,0x8771F681);
c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
a=HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);
d=HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);
c=HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);
b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
d=HH(d,a,b,c,x[k+0],S32,0xEAA127FA);
c=HH(c,d,a,b,x[k+3],S33,0xD4EF3085);
b=HH(b,c,d,a,x[k+6],S34,0x4881D05);
a=HH(a,b,c,d,x[k+9],S31,0xD9D4D039);
d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
b=HH(b,c,d,a,x[k+2],S34,0xC4AC5665);
a=II(a,b,c,d,x[k+0],S41,0xF4292244);
d=II(d,a,b,c,x[k+7],S42,0x432AFF97);
c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
b=II(b,c,d,a,x[k+5],S44,0xFC93A039);
a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
d=II(d,a,b,c,x[k+3],S42,0x8F0CCC92);
c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
b=II(b,c,d,a,x[k+1],S44,0x85845DD1);
a=II(a,b,c,d,x[k+8],S41,0x6FA87E4F);
d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
c=II(c,d,a,b,x[k+6],S43,0xA3014314);
b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
a=II(a,b,c,d,x[k+4],S41,0xF7537E82);
d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
c=II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);
b=II(b,c,d,a,x[k+9],S44,0xEB86D391);
a=AddUnsigned(a,AA);
b=AddUnsigned(b,BB);
c=AddUnsigned(c,CC);
d=AddUnsigned(d,DD);
}
var temp=WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
return temp.toLowerCase();
}
function centerTextContent(ZhnDQ)
{
var MsZZR=ZhnDQ.html()
ZhnDQ.html("<div class='inner-content' style='position:absolute;'></div>")
var GDoMa=ZhnDQ.find(".inner-content")
GDoMa.html(MsZZR)
GDoMa.css({top:(ZhnDQ.height()-GDoMa.height())/2,left:(ZhnDQ.width()-GDoMa.width())/2})
}
function centerElement(XeoBM,kOLAN)
{
var nlpNf=XeoBM.children(kOLAN)
nlpNf.css("left",(XeoBM.width()-nlpNf.width())/2)
nlpNf.css("top",(XeoBM.height()-nlpNf.height())/2)
}
function splitClassParameters(s,sep1,sep2)
{
s=jQuery.trim(s);
var arr=new Array()
var clName=""
var clParam=""
var c;
for(var i=0;i<s.length;i++)
{
c=s.charAt(i)
if((c==' ')||(c=='\n')||(c==sep2))
{
arr[clName]=clParam;
clName=""
clParam=""
}
else
if(c==sep1)
{
var eocqT=0;
var qFesu=true;
do
{
qFesu=true;
i++;
c=s.charAt(i)
if(c==sep1)
{
eocqT++;
}
if((c!=sep2)||(eocqT!=0))
{
clParam+=c;
}
if(eocqT>0)
if(c==sep2)
{
eocqT--;
qFesu=false
}
}
while((qFesu==false)||(c!=sep2)||(eocqT!=0)) 
}
else
{
clName+=c;
}
}
if(clName.length>0)
{
arr[clName]=clParam;
}
return arr;
}
function splitClass(s)
{
var arr=splitClassParameters(s,'[',']')
for(k in arr)
{
var v=arr[k];
if(v.length>0)
{
var arr2=splitClassParameters(v,'(',')')
for(k2 in arr2)
{
alert("#"+k+"  "+k2+" = "+arr2[k2])
}
}
}
}
function extractClassInfo(s,className)
{
var arr=splitClassParameters(s,'[',']')
for(k in arr)
{
var v=arr[k];
if(v.length>0)
{
if(k==className)
{
var arr2=splitClassParameters(v,'(',')') 

return arr2;
}
}
}
return null
}
function extractParamInfo(ZhnDQ,qQfOk,Wmvlx)
{
if(Wmvlx==undefined)Wmvlx="param"
if(ZhnDQ==undefined) return ""
var cJVjE=ZhnDQ.attr("class");
if(cJVjE==undefined) return ""
var gmAuv=extractClassInfo(cJVjE,Wmvlx);
if(gmAuv==null) return ""
if(gmAuv==undefined) return ""
if(gmAuv[qQfOk]==undefined) return ""
if(qQfOk) return  gmAuv[qQfOk]
return gmAuv;
}


function getBrowserInfos()
{
var MTJqT={
}
if(waJSQuery.browser.webkit)MTJqT.engine="webkit"
if(waJSQuery.browser.mozilla)MTJqT.engine="ff"
if(waJSQuery.browser.msie)MTJqT.engine="ie"
return MTJqT
}
function waSetVisibilityMainPageContenair(wWfqV)
{
if(wWfqV)
{
waJSQuery(".wa-video").show()
}
else
{
waJSQuery(".wa-video").hide()
}
}
function isValidEmailAddress(RbVcN)
{
var iYAvt=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
return iYAvt.test(RbVcN);
}
function tUgWR(c,x,y,lx,ly)
{
c.beginPath();
c.moveTo(x,y);
c.lineTo(x+lx,y);
c.lineTo(x+lx,y+ly);
c.lineTo(x,y+ly);
c.lineTo(x,y);
c.closePath();
}
function BBkqI(c,x,y,lx,ly,tRtEU,IRbUZ)
{
if(typeof(tRtEU)=="number")
{
tRtEU=[tRtEU,tRtEU,tRtEU,tRtEU]
}
if(IRbUZ)
{
c.moveTo(x+tRtEU[0],y);c.lineTo(x+lx-tRtEU[1],y);c.quadraticCurveTo(x+lx,y,x+lx,y+tRtEU[1]);c.lineTo(x+lx,y+ly-tRtEU[2]);c.quadraticCurveTo(x+lx,y+ly,x+lx-tRtEU[2],y+ly);c.lineTo(x+tRtEU[3],y+ly);c.quadraticCurveTo(x,y+ly,x,y+ly-tRtEU[3]);c.lineTo(x,y+tRtEU[0]);c.quadraticCurveTo(x,y,x+tRtEU[0],y);
return;
}
c.moveTo(x,y+tRtEU[0]);c.lineTo(x,y+ly-tRtEU[3]);c.quadraticCurveTo(x,y+ly,x+tRtEU[3],y+ly);c.lineTo(x+lx-tRtEU[2],y+ly);c.quadraticCurveTo(x+lx,y+ly,x+lx,y+ly-tRtEU[2]);c.lineTo(x+lx,y+tRtEU[1]);c.quadraticCurveTo(x+lx,y,x+lx-tRtEU[1],y);c.lineTo(x+tRtEU[0],y);c.quadraticCurveTo(x,y,x,y+tRtEU[0]);
}
function waExtractCssStyle(GYCFh,SeXPC)
{
return fRgUs(GYCFh,SeXPC);
}
function fRgUs(GYCFh,SeXPC)
{
if(GYCFh==undefined) return ""
var iGnKd=GYCFh.indexOf(SeXPC);
if((iGnKd>-1)||((iGnKd>0)&&(GYCFh.substring(iGnKd-1)==";")))
{
GYCFh=GYCFh.substring(iGnKd)
iGnKd=GYCFh.indexOf(";");
if(iGnKd>-1)
{
GYCFh=GYCFh.substring(0,iGnKd) 
iGnKd=GYCFh.indexOf(":");
if(iGnKd>-1)
{
GYCFh=GYCFh.substring(iGnKd+1)
}
return waJSQuery.trim(GYCFh);
}
else
{
iGnKd=GYCFh.indexOf(":");
if(iGnKd>-1)
{
GYCFh=GYCFh.substring(iGnKd+1)
}
return waJSQuery.trim(GYCFh);
}
}
return "";
}
function waExtractRadiusFromCss(ZhnDQ)
{
var mKZOs=0;
var TxPbB=ZhnDQ.attr("style");
var HrBgT="border-radius"
if(isMSIE_higher_than_ie8())
{
HrBgT="-moz-border-radius" 
}
var  WvknG=fRgUs(TxPbB,HrBgT) 
if(WvknG.length==0)
{
var GOoua=fRgUs(TxPbB,"border-top-left-radius")
var qurDH=fRgUs(TxPbB,"border-top-right-radius")
var IMKbF=fRgUs(TxPbB,"border-bottom-right-radius")
var LJgbI=fRgUs(TxPbB,"border-bottom-left-radius") 
if(GOoua.length==0)GOoua="0px"
if(qurDH.length==0)qurDH="0px"
if(IMKbF.length==0)IMKbF="0px"
if(LJgbI.length==0)LJgbI="0px"
WvknG=GOoua+" "+qurDH+" "+IMKbF+" "+LJgbI 


}
var splitradiusStr=WvknG.split(" ") 

var qurDH=Math.max(0,parseInt(splitradiusStr[0])-mKZOs)
var IMKbF=Math.max(0,parseInt(splitradiusStr[1])-mKZOs)
var LJgbI=Math.max(0,parseInt(splitradiusStr[2])-mKZOs)
var JpKuH=Math.max(0,parseInt(splitradiusStr[3])-mKZOs)
if(splitradiusStr.length==1)
{
IMKbF=qurDH;LJgbI=qurDH;JpKuH=qurDH;
}
if(isNaN(qurDH))qurDH=0
if(isNaN(IMKbF))IMKbF=qurDH
if(isNaN(LJgbI))LJgbI=IMKbF
if(isNaN(JpKuH))JpKuH=LJgbI
return new Array(qurDH,IMKbF,LJgbI,JpKuH)
}
function waSoustractFromArrayRadius(kEekH,jvIgG)
{
for(var i=0;i<kEekH.length;i++)
{
if(isNaN(kEekH[i])||(kEekH[i].length==0))
{
kEekH[i]=0
}
else
{
kEekH[i]=Math.max(0,kEekH[i]-jvIgG)
}
}
return kEekH;
}
function waGenerateNewGradientID()
{
var TVTZx=waJSQuery(document).data("curCanvasGradientId")
if(TVTZx==undefined)TVTZx=0;
waJSQuery(document).data("curCanvasGradientId",TVTZx+1)
return "canvasGradientId"+TVTZx;
}
function waGetDrawingSurface(ZhnDQ,HZXIA,UuFCs)
{
var sUqgY="wa-div-bg-gradient" 
var UpSBm=null
var TJqgj=ZhnDQ.find("."+sUqgY) 
if(TJqgj.length==0)
{

var PutAs=-1;
ZhnDQ.append("<div class='"+sUqgY+"' ></div>")
TJqgj=ZhnDQ.find("."+sUqgY)
TJqgj.css({position:"absolute",top:0,left:0,width:HZXIA,height:UuFCs,zIndex:PutAs})
var KSrmI=waGenerateNewGradientID();
TJqgj.html("<canvas id='"+KSrmI+"' width="+HZXIA+" height="+UuFCs+" style='z-index:"+PutAs+"' ></canvas>")
TJqgj.data("waCanvasId",KSrmI)
UpSBm=document.getElementById(KSrmI);
if(isMSIE_lower_than_ie9())
{
if(window.G_vmlCanvasManager)
window.G_vmlCanvasManager.initElement(UpSBm);
}
}
else
{
var KSrmI=TJqgj.data("waCanvasId")
UpSBm=document.getElementById(KSrmI);
}
if(UpSBm==null)
{
if(isMSIE())
{
if(document.documentMode==8)
{
if(/MSIE 9/.test(navigator.userAgent))
{
if(document.warning_ie9_frame!=true)
{
document.warning_ie9_frame=true
alert(window.location+"\n"+Translator.tr("This site is probably in a frame,Display problems can occur with IE9 you have to enabled Force IE8 rendering in WA4 website properties",false));
}
}
}
}
return null;
}
var YadZK=UpSBm.getContext('2d');
return YadZK;
}
function ZGVtL(YadZK,tNOYg)
{
var UtdEi=tNOYg.split(" ")
if(UtdEi.length>1)
{
var fKbBp=parseInt(UtdEi[0]);
var uJxPu=parseInt(UtdEi[1]);;
var GZVBp=parseInt(UtdEi[2]);
var jnYPN=parseInt(UtdEi[3]);
var Cvgag=UtdEi[4]
var WlvNZ="";
if(UtdEi.length>5)
{
WlvNZ=UtdEi[5]
}
if(Cvgag=="undefined")Cvgag=""
if(WlvNZ=="undefined")WlvNZ="" 



if(WlvNZ=="")WlvNZ=Cvgag
if(isMSIE_lower_than_ie9())
{

var IScJO=new RGBColor(Cvgag)
var MbBZZ=new RGBColor(WlvNZ)
if(Cvgag=="")
{
var GalEl=new RGBColor(WlvNZ)
GalEl.a=0;
Cvgag=GalEl.toRGB()
}
if(WlvNZ=="")
{
var GalEl=new RGBColor(Cvgag)
GalEl.a=0;
WlvNZ=GalEl.toRGB()
}
}





var ZiadF=YadZK.createLinearGradient(fKbBp,uJxPu,GZVBp,jnYPN);
ZiadF.addColorStop(0,Cvgag);
ZiadF.addColorStop(1,WlvNZ);


return ZiadF
}
else
{
return tNOYg
}
}
function waDrawRoundedRectInSurface(YadZK,HZXIA,UuFCs,tRtEU,tNOYg,mKZOs,RcqBN)
{

if((RcqBN==undefined)||(RcqBN.length==0))
{
mKZOs=0
}
if(mKZOs==0)
{
RcqBN=""
}
var NlEwf=HZXIA-2*mKZOs
var FfTih=UuFCs-2*mKZOs
var FSAqi=new Array(tRtEU[0],tRtEU[1],tRtEU[2],tRtEU[3])
FSAqi=waSoustractFromArrayRadius(FSAqi,mKZOs)
if(tNOYg!=null)
{
{
YadZK.fillStyle=ZGVtL(YadZK,tNOYg) 
var YLZgH=mKZOs
var ZtAlx=mKZOs
if(YadZK.fillStyle!="")
{
YadZK.beginPath();
BBkqI(YadZK,YLZgH,ZtAlx,NlEwf,FfTih,FSAqi)
YadZK.closePath();
YadZK.fill()
}
}
}
if((mKZOs>0)&&(RcqBN)&&(RcqBN.length>0))
{
YadZK.fillStyle=RcqBN;
YadZK.beginPath();
BBkqI(YadZK,0,0,HZXIA,UuFCs,tRtEU)
BBkqI(YadZK,mKZOs,mKZOs,NlEwf,FfTih,FSAqi,true)
YadZK.closePath();
YadZK.fill()
}
}
function waDrawRoundedRect(ZhnDQ,HZXIA,UuFCs,tRtEU,tNOYg,mKZOs,RcqBN)
{
var YadZK=waGetDrawingSurface(ZhnDQ,HZXIA,UuFCs)
waDrawRoundedRectInSurface(YadZK,HZXIA,UuFCs,tRtEU,tNOYg,mKZOs,RcqBN)
}
function waDrawButton(ZhnDQ,tNOYg,RcqBN,tEWwf,cGbSc)
{
var PCbpe=ZhnDQ.parent()
var GJsEv=PCbpe.find(".waButInner")
GJsEv.hide()
var EEhUZ=PCbpe.find(".waButGlossInner")
EEhUZ.hide()
ZhnDQ.css("background","")
ZhnDQ.css("border","none")
var mKZOs=1;
if((RcqBN==undefined)||(RcqBN.length==0))
{
mKZOs=0;
}
var sxxft=1;
var kqYuA=ZhnDQ.outerWidth()
var amdHi=ZhnDQ.outerHeight()
var HZXIA=kqYuA
var UuFCs=amdHi
var KPceP=(extractParamInfo(ZhnDQ,"aqua")=="1")
var tRtEU=waExtractRadiusFromCss(ZhnDQ)
var YadZK=waGetDrawingSurface(ZhnDQ,HZXIA,UuFCs) 
if(isMSIE_lower_than_ie9())
{
ZhnDQ.css("border","")
}
YadZK.clearRect(0,0,HZXIA,UuFCs)
var fZCPY=RcqBN
if(isMSIE_lower_than_ie9())
{
var jFeOQ=tNOYg.split(" ")
var Cvgag=""
var WlvNZ="" 
if(jFeOQ.length<=1)
{
Cvgag=tNOYg
WlvNZ=tNOYg
}
else
{
Cvgag=jFeOQ[4]
WlvNZ=jFeOQ[5]
}
if(Cvgag==WlvNZ)
{
waDrawRoundedRectInSurface(YadZK,HZXIA,UuFCs,tRtEU,Cvgag,mKZOs,fZCPY)
}
else
{
var StAVp=40;
if(KPceP)
{
StAVp=70;
}
var IBqHx=UuFCs-Math.round(UuFCs*StAVp/100)
var qurDH=[tRtEU[0],tRtEU[1],0,0]
waDrawRoundedRectInSurface(YadZK,HZXIA,UuFCs-IBqHx,qurDH,Cvgag,mKZOs,"")
var IMKbF=[0,0,tRtEU[2],tRtEU[3]]
var xicJd="0 0 0 "+IBqHx+" "+Cvgag+" "+WlvNZ
YadZK.fillStyle=ZGVtL(YadZK,xicJd)
YadZK.beginPath();
var aUNkP=UuFCs-IBqHx
BBkqI(YadZK,0,aUNkP,HZXIA,IBqHx,IMKbF)
YadZK.closePath();
YadZK.fill() 
if((fZCPY.length>0)&&(mKZOs>0))
{
YadZK.fillStyle=""
YadZK.strokeStyle=fZCPY;
YadZK.beginPath();
BBkqI(YadZK,0,0,HZXIA,UuFCs,tRtEU)
YadZK.closePath();
YadZK.stroke();
}
}
}
else
{

waDrawRoundedRectInSurface(YadZK,HZXIA,UuFCs,tRtEU,tNOYg,mKZOs,fZCPY)
}
if(tEWwf&&(tEWwf.length>0))
{
YadZK.fillStyle=""
if(isMSIE_lower_than_ie9())
{
YadZK.strokeStyle=tEWwf;
}
else
{
YadZK.strokeStyle=ZGVtL(YadZK,"0 "+Math.round(UuFCs/2)+" 0 "+UuFCs+" "+tEWwf+" transparent") 
}
YadZK.beginPath();
BBkqI(YadZK,1.5,1.5,HZXIA-3,UuFCs-3,tRtEU)
YadZK.closePath();
YadZK.stroke()
}
if(KPceP)
{
var Cvgag="rgba(255,255,255,0.5)"
var WlvNZ="rgba(255,255,255,0.1)"
var IBqHx=Math.round(UuFCs*0.5);
var tITUo=tRtEU[0]
var irsBh=tITUo;
irsBh=Math.min(irsBh,IBqHx/2);
var IUIrB=tITUo-irsBh;
IUIrB=Math.max(IUIrB,0);
var tNOYg="0 0 0 "+IBqHx+" "+Cvgag+" "+WlvNZ 
YadZK.fillStyle=ZGVtL(YadZK,tNOYg)
YadZK.beginPath();
var aUNkP=0
BBkqI(YadZK,IUIrB,aUNkP,HZXIA-2*IUIrB,aUNkP+IBqHx,irsBh)
YadZK.closePath();
YadZK.fill()
}
}
function waHackGradient()
{
if(isWebKit()||isFirefox())
{
return false;
}
waJSQuery(".wa-bg-gradient").each(function()
{
var ZhnDQ=waJSQuery(this)
var TxPbB=ZhnDQ.attr("style");
var tNOYg=extractParamInfo(ZhnDQ,"grad") 
var nAwak_borderProps=extractParamInfo(ZhnDQ,"border").split(" ")
var mKZOs=0
var RcqBN=""
if(nAwak_borderProps.length>0)
{
mKZOs=parseInt(nAwak_borderProps[0])
if(isNaN(mKZOs))mKZOs=0;
}
if(nAwak_borderProps.length>1)
{
RcqBN=nAwak_borderProps[1]
}
var AEDTV=ZhnDQ.css("backgroundImage")
if((AEDTV.length>0)&&(AEDTV!="none"))
{
tNOYg=null
}
var HZXIA=ZhnDQ.width()+2*mKZOs
var UuFCs=ZhnDQ.height()+2*mKZOs
var tRtEU=waExtractRadiusFromCss(ZhnDQ)
ZhnDQ.css({border:"0px none",backgroundColor:"transparent"}) 
waDrawRoundedRect(ZhnDQ,HZXIA,UuFCs,tRtEU,tNOYg,mKZOs,RcqBN)
if(isMSIE())
{
ZhnDQ.css({width:HZXIA,height:UuFCs})
}
})
}
function waHasButtonHacking()
{
if(isWebKit()||isFirefox())
{
return false;
}
return true;
}
function waHackButtons()
{
if(waHasButtonHacking()==false)
{
return false;
}
waJSQuery(".wa-button").each(function()
{
var ZhnDQ=waJSQuery(this)
waHackButton(ZhnDQ)
})
}
function waPercentGradientButton(sNeFE)
{
var KPceP=(extractParamInfo(sNeFE,"aqua")=="1")
var tsiYP=40;
if(KPceP)
{
tsiYP=70;
}
return tsiYP;
}
function waHackButton(ZhnDQ)
{
var PCbpe=ZhnDQ.parent()
var GJsEv=PCbpe.find(".waButInner") 
GJsEv.show()
var EEhUZ=PCbpe.find(".waButGlossInner")
EEhUZ.show()
if(waHasButtonHacking()==false)
{
return false;
}
var CFIsD=ZhnDQ.data("saved-background-image")
if(CFIsD==null)
{
ZhnDQ.data("saved-background-image",ZhnDQ.css("background-image"))
}
var RcWFr=ZhnDQ.data("saved-background-image")
if((RcWFr.indexOf("url(")>-1)&&(RcWFr.indexOf("wa_transparent.gif")==-1))
{
return false;
}

ZhnDQ.css("background-color","")
var tNOYg=extractParamInfo(ZhnDQ,"grad")
var tEWwf=(extractParamInfo(ZhnDQ,"inborder"))
var RcqBN=(extractParamInfo(ZhnDQ,"border"))
waDrawButton(ZhnDQ,tNOYg,RcqBN,tEWwf)
}
function waHackButtonOver(ZhnDQ)
{
if(waHasButtonHacking()==false)
{
return false;
}
var sNeFE=waJSQuery(">button",ZhnDQ);
var height=parseInt(ZhnDQ.css("height"));
var cl=ZhnDQ.attr("class")
var bg=extractParamInfo(ZhnDQ,"bg")
var tNOYg=null;
var tsiYP=waPercentGradientButton(sNeFE)
if(bg&&(bg.length>0))
{
var IBqHx=Math.round(height*tsiYP/100)
var cols=bg.split(" ")
tNOYg="0 "+IBqHx+" 0 "+height+" "+cols[0]+" "+cols[1]
}
var bg_img=extractParamInfo(ZhnDQ,"bg_img")
if(bg_img&&(bg_img.length>0))
{
return;
}
var RcqBN=extractParamInfo(ZhnDQ,"bord");
var tEWwf=extractParamInfo(ZhnDQ,"inner_bord") 
waDrawButton(sNeFE,tNOYg,RcqBN,tEWwf)
}
function waHackButtonOut(ZhnDQ)
{
waHackButton(ZhnDQ)
}
function waActivateOverButton(egBEg)
{
var JhPbO=true;
var wjbbm=null
if(JhPbO)
{
wjbbm=egBEg;
}
else
{
wjbbm=waJSQuery(">span",egBEg);
}
var o=wjbbm
var button=waJSQuery(">button",o);
var txtSpan=null
if(JhPbO)
{
txtSpan=waJSQuery(">div",button);

}
else
{
txtSpan=waJSQuery(">span",button);
}
var XbMnF=egBEg.attr("onclick")
if(XbMnF=="javascript:void(0)")XbMnF=""
if(XbMnF==undefined)XbMnF=""
if(XbMnF=="#")XbMnF=""
if((o.hasClass('wa-js-action')==false)&&(XbMnF.length==0))
{
egBEg.css("cursor","default")
o.css("cursor","default")
button.css("cursor","default")
txtSpan.css("cursor","default")
}
else
{
egBEg.css("cursor","pointer")
o.css("cursor","pointer")
button.css("cursor","pointer")
txtSpan.css("cursor","pointer")
}

if(isMSIE())
{
var kZqVH=false;
var nlpNf=button.css("background-image")
if((nlpNf&&(nlpNf.length==0))||(nlpNf=="none"))
{
button.css("background-image","url(wa_transparent.gif)") 
wjbbm.append("<div style='position:absolute;top:0px;left:0px;width:100%;height:100%;;background-image:url(wa_transparent.gif)'></div>")
}
else
{
kZqVH=true;
button.css("background-size",button.width()+" px "+button.height()+" px ")
}
}
var GJsEv=o.find(".waButInner")
var aHqnX=txtSpan.outerWidth()
aHqnX=Math.min(aHqnX,button.width())
var img=waJSQuery(">img",button);
var YqtYl=Math.round((button.width()-aHqnX)/2)
var apnqP=Math.round((button.height()-txtSpan.outerHeight())/2) 
var oeiOk=button.css("textAlign");
if(oeiOk=="center")
{
YqtYl=Math.round((button.width()-aHqnX)/2)
}
if(oeiOk=="left")
{
YqtYl=3
}
if(oeiOk=="right")
{
YqtYl=button.width()-aHqnX-3
}
if((img.length==0)||(img.attr("src")==undefined))
{


}
var cl=o.attr("class")
var clParam=extractClassInfo(cl,"param")
GJsEv.css("border-bottom","0px none")
var YoOia=o
YoOia=wjbbm 
YoOia.data("link_data",o)
if(clParam!=null)
YoOia.hover(function(){
var o=waJSQuery(this).data("link_data")
var button=waJSQuery(">button",o);
var WJtTP=button.data("waButState")
if(WJtTP==undefined) WJtTP=0;
if(WJtTP!=0) return;
button.data("waButState",1)
var height=button.outerHeight()
var KPceP=(extractParamInfo(button,"aqua")=="1")
var txtSpan=button.find(".wa-but-txt") 


var imgTag=waJSQuery(">img",button);
imgTag=button.find("img");
var innerSpan=waJSQuery(">.waButInner",o);
button.data('wa-style',button.attr('style'))
if(isMSIE_lower_than_ie9())
{
button.data('wa-style-bg-img',button.css('background-image'))
}
txtSpan.data('wa-style',txtSpan.attr('style'))
imgTag.data('wa-style',imgTag.attr('style'))
innerSpan.data('wa-style',innerSpan.attr('style'))
imgTag.data('wa-style-src',imgTag.attr('src')) 
{
var bg=extractParamInfo(o,"bg")
if(bg.length>0)
{
var cols=bg.split(" ")
var Cvgag=cols[0]
var WlvNZ=Cvgag
if(cols.length>1)WlvNZ=cols[1]
var HPfae=getBrowserInfos();
var tsiYP=waPercentGradientButton(button)
if(HPfae.engine=="webkit")
{
var IBqHx=Math.round(height*tsiYP/100) 
button.css("background","-webkit-gradient(linear,0 "+IBqHx+", 0 "+height+",from("+Cvgag+"),to("+WlvNZ+"))")
}
if(HPfae.engine=="ff")
{
button.css("background","-moz-linear-gradient(top left -90deg,"+Cvgag+" "+tsiYP+"%, "+WlvNZ+" 100%)")
}
}
var borderCol=extractParamInfo(button,"border");
var borderColOver=extractParamInfo(o,"bord");
var MGBHA=new RGBColor(borderColOver)
var BFnmD=MGBHA.a>0;
var aSWid=new RGBColor(borderCol)
var CUiKK=aSWid.a>0;
if(BFnmD)
{
button.css("border","1px solid "+borderColOver)
}
else
{
button.css("border","0px")
}
var bg_img=extractParamInfo(o,"bg_img");
if(bg_img&&(bg_img.length>0))
{

var ZddTo=button.width();
var FfROc=button.height();
if((CUiKK))
{
ZddTo+=2;
FfROc+=2;
}
button.css({"background-image":"url('"+bg_img+"')","background-size":""+ZddTo+"px "+FfROc+"px"})
}
}
var inner_borderCol=extractParamInfo(o,"inner_bord");
if(inner_borderCol&&(inner_borderCol.length>0))
{
innerSpan.css("border-color",inner_borderCol)
}
var txtCol=extractParamInfo(o,"txt");
if(txtCol&&(txtCol.length>0))
{
txtSpan.css("color",txtCol)
button.css("color",txtCol)
}
var Lhxia=extractParamInfo(o,"u");
if(Lhxia&&(Lhxia.length>0))
{
if(Lhxia=="1")
{
txtSpan.css("textDecoration","underline")
if(isMSIE())
{
button.css("textDecoration","underline")
}
}
else
{
txtSpan.css("textDecoration","none")
if(isMSIE())
{
button.css("textDecoration","none")
}
}
}
var img=extractParamInfo(o,"img");
if(img!=undefined)
{
if(img.length==0)
{
imgTag.css("width",0)
}
else
{
var img_pars=img.split(" ")
imgTag.attr("src",img_pars[0])
imgTag.css("width",img_pars[1])
imgTag.css("height",img_pars[2])
}
}
{
waHackButtonOver(o)
}
},function(){
var o=waJSQuery(this).data("link_data") 
var button=waJSQuery(">button",o);
var WJtTP=button.data("waButState")
if(WJtTP==undefined)WJtTP=0;
if(WJtTP!=1) return;
button.data("waButState",0)
var txtSpan=button.find(".wa-but-txt")
var imgTag=waJSQuery(">img",button);
imgTag=button.find("img");
var innerSpan=waJSQuery(">.waButInner",o);
button.attr("style",button.data("wa-style"))
if(isMSIE_lower_than_ie9())
{
button.css("background-image",button.data("wa-style-bg-img"))
}
txtSpan.attr("style",txtSpan.data("wa-style"))
imgTag.attr("style",imgTag.data("wa-style"))
imgTag.attr("src",imgTag.data("wa-style-src"))
innerSpan.attr("style",innerSpan.data("wa-style"))
waHackButtonOut(button)
});
}
function waActivateOverButtons()
{
waJSQuery(".wa-button-link").each(function(i)
{
var ZhnDQ=waJSQuery(this) 
waActivateOverButton(ZhnDQ)
})
}
function bYXbE(ZhnDQ)
{
wa_timeout(function(){bYXbE(ZhnDQ)},1000)
var riguO=ZhnDQ.find("div")
riguO.position().top
var vIWZM=riguO.data("data-marquee")
var MKEch=vIWZM.orientation
var vBkUk=vIWZM.speed
}
function jqbof(riguO,now,fx)
{
if(isMSIE())
{
var vIWZM=riguO.data("data-marquee")
var xqUjQ=vIWZM.size_cont;
var nrmqq=0;
var cKoca=0;
if(vIWZM.orientation!=0) 
{
nrmqq=-now;
}
else
{
cKoca=-now;
}
var HZXIA=xqUjQ.width()
var UuFCs=xqUjQ.height()
var GHpEF=0;
var hJNER=GHpEF+nrmqq;
var FccAU=GHpEF+cKoca;
var FkGPM=HZXIA+nrmqq;;
var SoqYk=UuFCs+cKoca
riguO.css("clip","rect("+FccAU+"px,"+FkGPM+"px,"+SoqYk+"px,"+hJNER+"px)")
}
}
function nAiBx(riguO,pksmS)
{
var vIWZM=riguO.data("data-marquee")
var MhUsk=vIWZM.prop
var FGPvw=vIWZM.size
var PMZRE=vIWZM.innerSize
var EGuPu=vIWZM.compSize
var dxaVL=0;
var bmMIJ=0;
var lTSWr={}
if(vIWZM.orientation!=0) 
{
if(pksmS==false)
{
dxaVL=riguO.position().left;;
riguO.css({"left":dxaVL})
}
else
{
var Vcvcx=riguO.data("first-pos-marquee")
if(Vcvcx==undefined)
{
Vcvcx=riguO.position().left;
riguO.data("first-pos-marquee",Vcvcx)
}
else
{
riguO.css({"left":Vcvcx})
}
dxaVL=Vcvcx;
}
if(dxaVL<=-PMZRE)
{
dxaVL=EGuPu
riguO.css(MhUsk,dxaVL)
}
bmMIJ=-FGPvw;
lTSWr={"left":bmMIJ}
}
else
{
if(pksmS==false)
{
dxaVL=riguO.position().top;;
riguO.css({"top":dxaVL})
}
else
{
var Vcvcx=riguO.data("first-pos-marquee")
if(Vcvcx==undefined)
{
Vcvcx=riguO.position().top;
riguO.data("first-pos-marquee",Vcvcx)
}
else
{
riguO.css({"top":Vcvcx})
}
dxaVL=Vcvcx;
}
if(dxaVL<=-PMZRE)
{
dxaVL=EGuPu
riguO.css(MhUsk,dxaVL)
}
bmMIJ=-FGPvw;
lTSWr={"top":bmMIJ}
}
var teEgb=((dxaVL-bmMIJ)*1000)/vIWZM.speed
var UBApu={
"duration":teEgb,"easing":"linear","complete":function(){nAiBx(waJSQuery(this),true);},"step":function(now,fx){jqbof(waJSQuery(this),now,fx);}
};
riguO.animate(lTSWr,UBApu);
}
function BBMWB(ZhnDQ)
{
var MKEch=parseInt(extractParamInfo(ZhnDQ,"orientation","param_marquee"))
var vBkUk=parseInt(extractParamInfo(ZhnDQ,"speed","param_marquee")) 

var riguO=ZhnDQ.find("div")
var MhUsk="top"
var IAnJu=riguO.height()
var BfMwr=riguO.innerHeight()
var EGuPu=ZhnDQ.height();
if(MKEch!=0) 
{
var adjMc=riguO.find("div")
var IKhrK=adjMc.html()
var ZQRLA=riguO.innerWidth();
var UuFCs=adjMc.innerHeight();
var VeBUM=UuFCs
var XJxdJ=ZQRLA;
for(var HZXIA=ZQRLA;HZXIA<10000;HZXIA+=30)
{
riguO.css("width",HZXIA)
UuFCs=adjMc.innerHeight();
if(UuFCs<VeBUM)
{
VeBUM=UuFCs
XJxdJ=HZXIA
}
}
riguO.css("width",XJxdJ+2)
}
if(MKEch!=0) 
{
EGuPu=ZhnDQ.width();
MhUsk="left"
IAnJu=riguO.width()
BfMwr=riguO.innerWidth() 
riguO.css(MhUsk,EGuPu) 

}
else
{
EGuPu=ZhnDQ.height();
MhUsk="top"
IAnJu=riguO.height()
BfMwr=riguO.innerHeight()
riguO.css(MhUsk,EGuPu)
}
riguO.data("data-marquee",{"speed":vBkUk,"orientation":MKEch,"size":IAnJu,"innerSize":BfMwr,"prop":MhUsk,"compSize":EGuPu,"size_cont":new Size(ZhnDQ.width(),ZhnDQ.height())})
riguO.hover(function(){
waJSQuery(this).stop();
},function(){
nAiBx(waJSQuery(this),false)
});
nAiBx(riguO)
}
function initializeWA_JQuery()
{


if(isMSIE())
{
var rvube=new Array();
var abNBM=waWebFontDescription.families
for(var i=0;i<abNBM.length;i++)
{
var FPQSM=abNBM[i]
rvube.push(FPQSM+"::latin")
}
WebFontConfig={
google:{families:rvube}
};
if(rvube.length>0)
{
waLoadGoogleFonts()
}
}
IS_onload();




waJSQuery(".reflect").reflect();
waJSQuery(".wa-img").each(function()
{
var ZhnDQ=waJSQuery(this)
var mbkPc=extractParamInfo(ZhnDQ,"over");
if(mbkPc.length>0)
{
ZhnDQ.hover(function(){
var o=waJSQuery(this)
var img=o
var over=extractParamInfo(o,"over");
var mAusb=waJSQuery(this).data('src_out') 
if(mAusb==undefined)
{
waJSQuery(this).data('src_out',img.attr('src'))
}

img.attr("src",over)
},function(){
var o=waJSQuery(this)
var img=o
img.attr("src",waJSQuery(this).data("src_out")) 

});
}
}) 


waJSQuery(".wa-text").each(function()
{
if(isMSIE())
{
var HZXIA=waJSQuery(this).width()
var UuFCs=waJSQuery(this).height()
var OqClQ=waJSQuery(this).children("div") 
var SCWmG=parseInt(OqClQ.css("marginTop"))
if(isNaN(SCWmG))SCWmG=0;
var IWgMM=parseInt(extractParamInfo(waJSQuery(this),"border","param")) 
var GHpEF=IWgMM;
OqClQ.css("margin",(SCWmG+GHpEF)+"px")
}
}) 


waJSQuery(".wa-textmarquee").each(function()
{
BBMWB(waJSQuery(this))
}) 


waActivateOverButtons()
waHackGradient()
waHackButtons()
waGlobalPatchIE()
}
function waGlobalPatchIE()
{
if(isMSIE())
{
if(window.waPatchIE)
{
waPatchIE()
}
}
}(function(waJSQuery){
waJSQuery.fn.extend({
reflect:function(options){
var ZhnDQ=waJSQuery(this)
var _radius=waExtractRadiusFromCss(ZhnDQ) 
options=waJSQuery.extend({
height:1/3,opacity:0.5,borderRadius:_radius
},options);
return this.unreflect().each(function(){
var img=this;
if(/^img$/i.test(img.tagName)){
function doReflect(){
var imageWidth=img.width,imageHeight=img.height,reflection,reflectionHeight,wrapper,context,gradient;
reflectionHeight=Math.floor(imageHeight*options.height)
reflection=waJSQuery("<canvas />")[0];
if(reflection.getContext){
context=reflection.getContext("2d");
try{
waJSQuery(reflection).attr({width:imageWidth,height:imageHeight});
context.save();
context.translate(0,imageHeight-1);
context.scale(1,-1);
context.drawImage(img,0,0,imageWidth,imageHeight);
context.restore();
context.globalCompositeOperation="destination-out";
gradient=context.createLinearGradient(0,0,0,reflectionHeight);
gradient.addColorStop(0,"rgba(255, 255, 255, "+(1-options.opacity)+")");
gradient.addColorStop(1,"rgba(255, 255, 255, 1.0)");
context.fillStyle=gradient;
context.rect(0,0,imageWidth,imageHeight);
context.fill();
}catch(e){
return;
}
}else{
if(!waJSQuery.browser.msie) return;
reflection=waJSQuery("<img />").attr("src",img.src).css({
width:imageWidth,height:imageHeight,marginBottom:reflectionHeight-imageHeight,filter:"FlipV progid:DXImageTransform.Microsoft.Alpha(Opacity="+(options.opacity*100)+", FinishOpacity=0, Style=1, StartX=0, StartY=0, FinishX=0, FinishY="+(reflectionHeight/imageHeight*100)+")"
})[0];
}
var xhjTc=options.borderRadius 
var jDkBd=new Array(xhjTc[3],xhjTc[2],xhjTc[1],xhjTc[0])
var AlnOb=xhjTc.join("px ")+"px"
var cXvBR=jDkBd.join("px ")+"px"
waJSQuery(reflection).css({display:"block",borderRadius:cXvBR});
wrapper=waJSQuery(/^a$/i.test(img.parentNode.tagName)?"<span />":"<div />").insertAfter(img).append([img,reflection])[0];
wrapper.className=img.className;
waJSQuery.data(img,"reflected",wrapper.style.cssText=img.style.cssText);
waJSQuery(wrapper).css({width:imageWidth,height:imageHeight+reflectionHeight,overflow:"hidden"});
img.style.cssText="display: block;border:0px none;-webkit-border-radius:"+AlnOb+";-moz-border-radius:"+AlnOb+";border-radius:"+AlnOb+";width:"+imageWidth+"px;height:"+imageHeight+"px;" 

img.className="reflected";
}
if(img.complete) doReflect();
else waJSQuery(img).load(doReflect);
}
});
},unreflect:function(){
return this.unbind("load").each(function(){
var img=this,reflected=waJSQuery.data(this,"reflected"),wrapper;
if(reflected!==undefined){
wrapper=img.parentNode;
img.className=wrapper.className;
img.style.cssText=reflected;
waJSQuery.removeData(img,"reflected");
wrapper.parentNode.replaceChild(img,wrapper);
}
});
}
});
})(waJSQuery);(function(waJSQuery){
waJSQuery.fn.touchwipe=function(settings){
var config={
min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true
};
if(settings) waJSQuery.extend(config,settings);
this.each(function(){
var startX;
var startY;
var isMoving=false;
function cancelTouch(){
this.removeEventListener('touchmove',onTouchMove);
startX=null;
isMoving=false;
}
function onTouchMove(e){
if(config.preventDefaultEvents){
e.preventDefault();
}
if(isMoving){
var x=e.touches[0].pageX;
var y=e.touches[0].pageY;
var dx=startX-x;
var dy=startY-y;
if(Math.abs(dx)>=config.min_move_x){
cancelTouch();
if(dx>0){
config.wipeLeft();
}
else{
config.wipeRight();
}
}
else if(Math.abs(dy)>=config.min_move_y){
cancelTouch();
if(dy>0){
config.wipeDown();
}
else{
config.wipeUp();
}
}
}
}
function onTouchStart(e)
{
if(e.touches.length==1){
startX=e.touches[0].pageX;
startY=e.touches[0].pageY;
isMoving=true;
this.addEventListener('touchmove',onTouchMove,false);
}
}
if('ontouchstart' in document.documentElement){
this.addEventListener('touchstart',onTouchStart,false);
}
});
return this;
};
})(waJSQuery);



function waChgtLanguage(dfcaa,ATtAc)
{
var reDvf=Translator.m_languages;
var SoVEi=window.location.pathname;
var lOYeY=window.location.href;
var nPKmi=window.location.host
var QCbZu=SoVEi.lastIndexOf("/")
var KXQrm=""
var tdUXm=SoVEi
if(QCbZu>-1)
{
KXQrm=SoVEi.substring(0,QCbZu+1)
tdUXm=SoVEi.substring(QCbZu+1)
}
if(tdUXm.length==0)
{
tdUXm="index.html"
lOYeY+=tdUXm;
}
if(document.webaca_is_preview)
{
if(reDvf!=undefined)
{
var GHXlp=reDvf[dfcaa]
if(GHXlp)
{
window.location.replace(GHXlp)
return;
}
}
}
else
{
var ubGEJ=lOYeY
ubGEJ=ubGEJ.replace(nPKmi,ATtAc);
if(reDvf!=undefined)
{
var GHXlp=reDvf[dfcaa]
ubGEJ=ubGEJ.replace(tdUXm,GHXlp);

window.location.replace(ubGEJ)
}
}
}
function waAutoDetectAndRedirectLang(rvSMS)
{
if((rvSMS.enable_preview_redirect!=true)&&document.webaca_is_preview)
{
return;
}
if(isProbablyRobot())
{
return;
}
if((rvSMS.restricted_host!=undefined)&&(document.webaca_is_preview!=true))
{
var uAsBK=false;
for(var i=0;i<rvSMS.restricted_host.length;i++)
{
var ATtAc=rvSMS.restricted_host[i]
if(window.location.host==ATtAc)
{
uAsBK=true;
break;
}
}
if(uAsBK==false)
{
return;
}
}
var cVBxI=navigator.language;
if(navigator.browserLanguage)
cVBxI=navigator.browserLanguage;
var QCbZu=cVBxI.indexOf("-")
if(QCbZu>0)
{
cVBxI=cVBxI.substr(0,QCbZu)
}
if(Translator.m_lang!=cVBxI)
{
if(rvSMS.enabled_internal_redirect!=false)
{
var reDvf=Translator.m_languages;
if(reDvf)
{
var dfcaa=reDvf[cVBxI]
if(dfcaa)
{
window.location.replace(dfcaa)
return;
}
}
}
if(rvSMS.redirect!=undefined)
{
var ATtAc=rvSMS.redirect[cVBxI]
if(ATtAc!=undefined)
{
waChgtLanguage(cVBxI,ATtAc);

}
}
}
}

-->
