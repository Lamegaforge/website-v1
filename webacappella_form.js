<!--

waJSQuery(window).load(function(){
initializeAllWA_form();
});
function mfKFI(GLmvr)
{
var XJADm=GLmvr.find('select,input,textarea');
XJADm.each(function(i)
{
var TUWDX=XJADm[ i ];
if(TUWDX.type=='checkbox'){
TUWDX.checked=false;
}
else if(TUWDX.type.startsWith('select')){
var PutAs=TUWDX.options.selectedIndex;
if(PutAs!=-1){
TUWDX.options.selectedIndex=-1;
TUWDX.options[ PutAs ].selected=false;
}
}
else{
TUWDX.value='';
}
});
}
function tSEuC(GLmvr)
{
var XJADm=GLmvr.find('select,input[type!=checkbox],textarea,div[class*=divCheckBox]')
var wLTrm=extractParamInfo(GLmvr,"url")
var kgFoe=extractParamInfo(GLmvr,"email_valid")
var CAvik=false;
var backgroundError="#f8c7c7";
XJADm.each(function(i)
{
var TUWDX=XJADm[ i ];
var XeoBM=waJSQuery(this);
var XVNHg=parseInt(extractParamInfo(XeoBM,"max"))
var rVkfh=extractParamInfo(XeoBM,"mandatory")
var OXejg=extractParamInfo(XeoBM,"email")
if(TUWDX.tagName.toLowerCase()=='div'){
if(rVkfh=="1")
{
var checkedCount=XeoBM.find("input[type=checkbox]:checked").size();
if(checkedCount==0)
{
XeoBM.css("backgroundColor",backgroundError);
XeoBM.focus();
CAvik=true;
return false;
}
}
}
else
{
XeoBM.val(waJSQuery.trim(XeoBM.val())) 
var jvIgG=XeoBM.val();
var OARkV=jvIgG!=undefined?jvIgG.length:0;
if(XVNHg>0)
{
if(OARkV>XVNHg)
{
XeoBM.css("backgroundColor",backgroundError)
XeoBM.focus()
CAvik=true;
return false;
}
}
if(rVkfh=="1")
{
var hasValidLength=OARkV>0;
if(!hasValidLength)
{
XeoBM.css("backgroundColor",backgroundError)
XeoBM.focus()
CAvik=true;
return false;
}
}
if(OXejg=="1")
{
if((OARkV>0)&&(isValidEmailAddress(jvIgG)==false))
{
XeoBM.css("backgroundColor",backgroundError)
XeoBM.focus()
CAvik=true;
return false;
}
}
}
});
if(CAvik) return false;
if(document.webaca_is_preview)
{
WA_Dialog.alert(Translator.tr("Operation not allowed in preview mode"));return false;
}
WA_Dialog.progress();
var RhPLO="";
XJADm.each(function(i)
{
var eDKmk=waJSQuery(this)
var TUWDX=XJADm[ i ];
if(RhPLO.length>0)
{
RhPLO+=","
}
var JUMlC=eDKmk.attr("name");
var jvIgG='';
if(TUWDX.tagName.toLowerCase()=='div'){
var EOrFZ=eDKmk.find("input[type=checkbox]:checked");
EOrFZ.each(function(j)
{
var YTgHq=EOrFZ[ j ];
if(jvIgG.length>0)
{
jvIgG+=', '
}
jvIgG+=YTgHq.value;
});
JUMlC=eDKmk.find("input[type=checkbox]")[ 0 ].name;
}
else
{
jvIgG=eDKmk.val();
}
jvIgG=jvIgG.replace(/\n/gi,"\\n")
jvIgG=jvIgG.replace(/"/gi,"\\\"")
RhPLO+="\""+JUMlC+"\":\""+jvIgG+"\"";
});

var vIWZM=waJSQuery.parseJSON("{"+RhPLO+"}");
waJSQuery.post(wLTrm,vIWZM,function(data){
if(data.indexOf("<?php")>-1)
{
WA_Dialog.alert(Translator.tr("Error:No php on server"));
}
else
{
var XqDLc=waParseCleanStringJSON(data);
if(XqDLc==null)
{
WA_Dialog.alert(Translator.tr("Error:Malformed response !"));
}
else
{
if(XqDLc.success==true)
{
mfKFI(GLmvr)
var NMwLh=Translator.tr("Success:Mail sended");
if(XqDLc.error.length>0)
{
NMwLh+="<br>"
NMwLh+="<br>"
NMwLh+=XqDLc.error
}
WA_Dialog.alert(NMwLh);
}
else
{
WA_Dialog.alert(XqDLc.error);
}
}
}
}).success(function(){
}).error(function(){WA_Dialog.alert("*error send mail!");}).complete(function(){
});
return true;
};
function initializeAllWA_form()
{
waJSQuery(".wa-form").each(function(i)
{
var GLmvr=waJSQuery(this)
var XJADm=GLmvr.find('select,input[type!=checkbox],textarea,div[class*=divCheckBox]')
var wLTrm=extractParamInfo(GLmvr,"url")
var kgFoe=extractParamInfo(GLmvr,"email_valid") 
XJADm.each(function(i)
{
var XeoBM=waJSQuery(this);
var oldBg=XeoBM.attr("oldBackgroundColor");
if(oldBg==undefined){
oldBg=XeoBM.css("backgroundColor");
XeoBM.attr("oldBackgroundColor",oldBg);
}
XeoBM.keypress(function(e){
var XeoBM=waJSQuery(this)
if(e.which==13)
{
if(XeoBM.prop('tagName')=="TEXTAREA")
{
return true;
}
return false;
}
return true;
});
var XVNHg=parseInt(extractParamInfo(XeoBM,"max"))
if(XVNHg>0)
{
XeoBM.keyup(function(e){
var eDKmk=waJSQuery(this)
var XVNHg=parseInt(extractParamInfo(eDKmk,"max"))
var jvIgG=XeoBM.val()
var OARkV=jvIgG!=undefined?jvIgG.length:0;
if(OARkV>XVNHg)
{
eDKmk.val(jvIgG.substring(0,XVNHg))
}
});
}
XeoBM.change(function()
{
var oldBg=XeoBM.attr("oldBackgroundColor");
XeoBM.css("backgroundColor",oldBg)
});
});
});
waJSQuery(".wa-form-button-reset").each(function(i)
{
var sNeFE=waJSQuery(this) 
var WfaKF=sNeFE;
WfaKF.css("cursor","pointer")
sNeFE.css("cursor","pointer")
WfaKF.click(function()
{
var GLmvr=waJSQuery(this).parents("form") 
mfKFI(GLmvr)
return false;
});
});
waJSQuery(".wa-form-button-submit").each(function(i)
{
var sNeFE=waJSQuery(this)
var WfaKF=sNeFE;
WfaKF.css("cursor","pointer")
sNeFE.css("cursor","pointer") 
WfaKF.click(function()
{
var GLmvr=waJSQuery(this).parents("form")
tSEuC(GLmvr)
return false;
});
});
}

-->
