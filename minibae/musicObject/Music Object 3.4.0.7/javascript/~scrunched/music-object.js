/**********
     TITLE: Music Object
   VERSION: 3.4.0.7
      TYPE: Object Definition
    AUTHOR: Chris van Rensburg
 COPYRIGHT: 1996-2001 Beatnik, Inc. All Rights Reserved
**********/

/**********
     TITLE: Music Object Component - Basic
   VERSION: 3.4.0.7
    AUTHOR: Chris van Rensburg
 COPYRIGHT: 1996-2001 Beatnik, Inc. All Rights Reserved
**********/

window.onerror=null;function MO_a(_a){return typeof _a._b!=MO_b}function MO_c(_a){return MO_a(_a)?_a:Music}function MO_d(_c,_d,_e){var _f=_c.indexOf(_d,_e);return(_f!= -1)?_f:_c.length;}function MO_e(){}function MO_f(_g){return _g}function MO_g(){return false}function MO_h(){return(new Date()).getTime()}function MO_i(){var _f='',_h=window;while(_h.parent!=_h&&_h.parent){for(var _i=1;_i<=_h.parent.frames.length;_i++){if(_h==_h.parent.frames[_i-1])_f='frames['+(_i-1)+'].'+_f;}_h=_h.parent;}return'top.'+_f;}function mo_on(){return this.ready&&MO_j.enabled&& !this.locked}function MO_k(_h,_j,_k,_l){var _m='';if(typeof _j[_k]=='function'){
if(typeof _h.MO_l==MO_b)_h.MO_l=0;var _n='mo_storedEventHandler'+ ++_h.MO_l;_h[_n]=_j[_k];_m='; return '+_n+' (event)';}_j[_k]=new _h.Function('event',_l+_m);}function mo_play(_o,_p){var _q=this;if(_q.on()){_q.endVolumeFade();if(typeof _p=='string'){if(_p!=''&&_p.indexOf('.')== -1&&_p.indexOf('groovoid://')!=0)_p='groovoid://'+_p;if(typeof _o=='string')_o=(_o=='auto')?(_p.indexOf('groovoid://Background-')==0):(_o=='yes');_q._b.play(_o,_p);}else if(typeof _o=='boolean'||typeof _o=='number'){_q._b.play(_o);}else if(typeof _o=='string'){_q.play('auto',_o);}else{if(!_q.isPlaying()||MO_j._r)_q._b.play();}}}function mo_stop(_s){var _q=this;if(_q.on()){if(typeof _s==MO_b||_s==0|| !MO_j._t||_q.isPaused()){_q.endVolumeFade();_q._b.stop();}else{_q.fadeVolume(null,0,_s,_q.objectName+'.stop ()');}}}function mo_pause(_s){var _q=this;if(_q.on()){_q.endVolumeFade();if(_q.isPaused()){_q._b.pause();if(typeof _s!=MO_b&&MO_j._t)_q.fadeVolume(0,100,_s);}else{
(typeof _s==MO_b|| !MO_j._t)?_q._b.pause():_q.fadeVolume(null,0,_s,_q.objectName+'.pause ()');}}}function mo_enable(){var _q=this,_u=_q._u,_v=document;if(_q._b==null)_q._b=(typeof window[_u]=='object')?window[_u]:((typeof _v[_u]=='object')?_v[_u]:((typeof _v.embeds!=MO_b&&typeof _v.embeds[_u]=='object')?_v.embeds[_u]:((typeof _v[_u+'Layer']!=MO_b&&typeof _v[_u+'Layer'].document.embeds[0]=='object')?_v[_u+'Layer'].document.embeds[0]:_q._b)));if(_q._b!=null&&(!MO_j._w||typeof _q._b.scriptable!=MO_b)){if(MO_j.playerVersion=='')MO_j._x(_q._b.getVersion());MO_j._y?_q._b.enableCallbacks(true):_q.execOnReady();}else{setTimeout(_q.objectName+'.enable ()',500);}}function mo_execOnReady(){var _q=this;if(_q.ready){if(MO_j.playerType=='ActiveX')_q._b.receivedReady(true);}else{_q.ready=_q._b!=null;if(_q.ready){_q.updateMetaEventsEnabled();if(MO_j.global==null)MO_j.global=_q._b;if(MO_j.playerType=='ActiveX')_q._b.receivedReady(true);if(_q==MO_j._z){var _A=_q._u+'Layer';if(typeof document[_A]!=MO_b){
document[_A].visibility=false;}else if(typeof document.getElementById!=MO_b&&document.getElementById(_A)!=null){document.getElementById(_A).style.visibility='hidden';}}if(_q._B){_q._b.setAutostart(true);_q.play();}_q.execCallback('onReady');}else{_q.enable();}}if(_q.ready)_q.execCallback('onLoad');}function mo_execOnPlay(){this.setVolume(this.VOLUME);this.updateAudibleState();this.execCallback('onPlay');}function mo_getOutputVolume(){var _q=this,_C=_q._D;_q._D=_q.VOLUME;for(var _E in _q.volumeScalars)_q._D*=_q.volumeScalars[_E]/100;_q._D=Math.round(_q._D);if(_q._D!=_C)_q.execCallback('onOutputVolumeChange');return _q._D;}function mo_setVolume(_o,_p){var _q=this;if(typeof _p!=MO_b){if(_p<0)delete _q.volumeScalars[_o];else _q.volumeScalars[_o]=_p;}else if(typeof _o!=MO_b){_q.VOLUME=_o;}_q.getOutputVolume();if(_q.on())_q._b.setVolume(_q._D);}function mo_getVolume(_F){return(typeof _F=='string')?((typeof this.volumeScalars[_F]!=MO_b)?this.volumeScalars[_F]:null):this.VOLUME;}function MO_m(_q){
return MO_n(_q,'WIDTH')+MO_n(_q,'HEIGHT')+MO_n(_q,'HSPACE')+MO_n(_q,'VSPACE')+MO_n(_q,'ALIGN');}function MO_o(_G,_q){var _H=false,_I=0;while(!_H&&_I<_G.length){var _J=false;while(!_J&&_I<_G.length){_J=_G.charAt(_I)!=' ';if(!_J)_I++;}if(_J){var _K=MO_d(_G,'=',_I),_L=MO_d(_G,' ',_I),_M=MO_d(_G,'>',_I),_N=Math.min(Math.min(_L,_K),_M),_O=_N!=_L&&_N!=_M,_P=_G.substring(_I,_N).toUpperCase(),_Q=_N,_R='';_H=_M==_N;if(_O){var _S=_N+1,_T=_G.charAt(_S);if(_T=='"'||_T=="'"){_Q=_S;var _U=false;while(!_U&&_Q<_G.length-1){_Q=MO_d(_G,_T,_Q+1);_U=true;var _V=true,_W=_Q;while(_V){_W--;_V=_G.charAt(_W)=='\\';if(_V)_U= !_U;}}_R=eval(_G.substring(_S,_Q+1));}else{_Q=Math.min(MO_d(_G,' ',_S),MO_d(_G,'>',_S));_R=_G.substring(_S,_Q);}}_I=_Q+1;_q[_P]=_R;}}}function MO_n(_q,_P){var _R=_q[_P];return(_R!=null)?(' '+_P+(((_R+'')!='')?('="'+_R+'"'):'')):'';}function mo_killReferences(){var _X=MO_j.instances;for(var _Y=_X.length-1;_Y>=0;_Y--){_X[_Y].ready=false;_X[_Y]._b=null;}MO_j.global=null;}function mo_magicEmbed(_G){var _Z=MO_j,
_0=MO_a(this),_q=_0?this:_Z,_1=_Z.embedDefaults,_2=_Z.embedProperties;if(typeof _Z.playerCompatible!='boolean')mo_isPlayerCompatible();if(typeof _q._u!='string'|| !_0){for(var _3=0;_3<_2.length;_3++){_q[_2[_3]]=(typeof _1[_2[_3]]!=MO_b)?_1[_2[_3]]:null;}MO_o(_G,_q);if(_q.HIDDEN=='')_q.HIDDEN='TRUE';_q._4=_q.HIDDEN!=null&&_q.HIDDEN.toUpperCase()=='TRUE';_q._5=_q._4&&_q.WIDTH<='2'&&_q.HEIGHT<='2'&&_Z.clientPlatform!='WebTV';_q.BGCOLOR=document.bgColor;_q.MUSICOBJECTVERSION=_Z.version;var _6=_q.WIDTH-0,_7=_q.HEIGHT-0,_8=false,_9='';if(_Z.enabled&&_Z.clientSupported&&_Z.hasPlayer&&(_Z.playerCompatible|| !_Z.silentIfInadequate)){if(_Z._ba&& !_Z._bb&&_q._4){_q.HIDDEN='FALSE';if(_q._5){if(_0)_Z._z=_q;_8=true;_q.WIDTH=_q.HEIGHT=2;}}_Z._bb=true;if(_0){_q._u=_q.objectName+'Player';var _bc=_q.objectName+'.execOn';_q.ONREADY=_bc+'Ready()';_q.ONPLAY=_bc+'Play()';_q.ONPAUSE=_bc+'Pause()';_q.ONSTOP=_bc+'Stop()';_q.ONMETAEVENT=_bc+'MetaEvent()';_q.ONAUDIOENGAGEDCHANGE='Music.execCallback (\'onAudioEngagedChange\')';
_q.METAEVENTS='FALSE';if(_Z._y){_q.CALLBACKS='FALSE';_q._B=_q.AUTOSTART.toUpperCase()=='TRUE';_q.AUTOSTART='FALSE';if(!_Z._bd){_Z.windowOnloadStr='';_Z._bd=true;if(_Z.playerType=='ActiveX')MO_k(window,window,'onunload','mo_killReferences ()');MO_k(window,window,'onload','eval (Music.windowOnloadStr)');}_Z.windowOnloadStr+=_q.objectName+'.enable ();';}if(MO_j._w){_q.ID=_q.objectName+_q.DOCUMENTID;_q.WINDOWREF=MO_i();}}if(_Z.playerType=='Plug-in'){_9+='<EMBED TYPE="'+(_Z._be?'application/beatnik':'audio/rmf')+'" PLUGINSPAGE="http://www.beatnik.com/to/?player"'+(_0?(' NAME="'+_q._u+'"'):'');for(var _3=0;_3<_2.length;_3++)_9+=MO_n(_q,_2[_3]);_9+='>';if(_0&&typeof MO_p!=MO_b)MO_p();}else if(_Z.playerType=='ActiveX'){if(_0){var _bf=new Array('OnReady','OnPlay','OnPause','OnStop','OnMetaEvent','OnAudioEngagedChange');for(var _bg=0;_bg<_bf.length;_bg++){var _bh='('+(_bf[_bg]=='OnMetaEvent'?'eventType,eventValue':'')+')',_bi=_q[_bf[_bg].toUpperCase()];
_9+='<SCRIPT LANGUAGE=JavaScript FOR="'+_q._u+'" EVENT="'+_bf[_bg]+_bh+'">'+_bi.substring(0,_bi.indexOf('('))+_bh+'</SCRIPT>\n';}}_9+='<OBJECT'+(_0?(' ID="'+_q._u+'"'):'')+MO_m(_q)+' CLASSID="CLSID:B384F118-18EE-11D1-95C8-00A024330339" CODEBASE="http://download.beatnik.com/beatnik-player/beatnik-player.cab">\n';for(var _3=0;_3<_2.length;_3++){if(_q[_2[_3]]!=null)_9+='<PARAM NAME="'+_2[_3]+'" VALUE="'+_q[_2[_3]]+'">\n';}_9+='</OBJECT>';}if(_q._5){if(_Z.playerType=='Plug-in'&&typeof Layer!=MO_b){_9='<LAYER'+(_0?(' NAME="'+_q._u+'Layer"'):'')+' LEFT=0 TOP=0'+(!_8?' VISIBILITY=HIDDEN':'')+'>'+_9+'</LAYER>';}else{_9='<SPAN '+(_0?(' ID="'+_q._u+'Layer"'):'')+'STYLE="position:absolute;left:0;top:0;'+(!_8?'visibility:hidden;':'')+'">'+_9+'</SPAN>';}}}else{if(typeof MO_q!=MO_b)_9=MO_q(_q);}document.write(_9);_q.VOLUME=_q.VOLUME-0;}}function MO_r(_q,_bj){_q[_bj]=(typeof window['mo_'+_bj]!='function')?MO_e:window['mo_'+_bj];}function MO_s(_bk,_bl){for(var _bm=0;_bm<_bl.length;_bm++){_bk[_bk.length]=_bl[_bm];}}
function MO_t(){var _bn=MO_t.arguments,_bo=MO_j.publicStaticMethods;for(var _bp=0;_bp<_bn.length;_bp++)MO_r(MO_j,_bo[_bo.length]=_bn[_bp]);}function MO_u(){MO_s(MO_j.publicInstanceMethods,MO_u.arguments);}function MO_v(){MO_s(MO_j.privateInstanceMethods,MO_v.arguments);}function Music(_bq){var _q=this,_br;_q._B=_q.ready=_q.locked=false;_q.objectName=_q.alias=(typeof _bq=='string')?_bq:('mo_GIN'+MO_j._bs++);_q.VOLUME=_q._D=100;_q.volumeScalars=new Array();_q._b=null;_br=MO_j.publicInstanceMethods;for(var _bt=0;_bt<_br.length;_bt++)MO_r(_q,_br[_bt]);_br=MO_j.privateInstanceMethods;for(var _bt=0;_bt<_br.length;_bt++)MO_r(_q,_br[_bt]);window[_q.objectName]=MO_j.instances[MO_j.instances.length]=_q;_q.extend();}MO_j=Music;MO_j.retrieveVersion=MO_f;MO_j.hasMinVersion=MO_g;MO_j._x=MO_e;MO_j.playerVersion='';MO_w=navigator;MO_b='undefined';MO_x='Microsoft Internet Explorer';MO_j.clientSupported=MO_j.hasPlayer=MO_j.playerCompatible=true;
MO_j.playerType=(MO_w.appName==MO_x&&MO_w.platform.indexOf('Win')!= -1)?'ActiveX':'Plug-in';MO_j.enabled=true;MO_j.version='3.4.0.7';MO_j.instances=new Array();MO_j.publicInstanceMethods=new Array();MO_j.privateInstanceMethods=new Array();MO_j.publicStaticMethods=new Array();MO_j.embedProperties=new Array('SRC','WIDTH','HEIGHT','AUTOSTART','LOOP','VOLUME','FILEVOLUMESCALING','ALIGN','HSPACE','VSPACE','BGCOLOR','HIDDEN','DISPLAY','MODE','GROOVOID','ONREADY','ONPLAY','ONPAUSE','ONSTOP','ONMETAEVENT','CALLBACKS','METAEVENTS','MUSICOBJECTVERSION','AUDIODEVICEPRIORITY','DOCUMENTID','ID','WINDOWREF','AUDIOENGAGED','ONAUDIOENGAGEDCHANGE');var MO_y=MO_j.embedDefaults=new Array();MO_y.AUTOSTART=MO_y.FILEVOLUMESCALING=MO_y.AUDIOENGAGED='TRUE';MO_y.DOCUMENTID=MO_h()+Math.round(Math.random()*1000);MO_y.WIDTH='144';MO_y.HEIGHT='60';MO_y.HSPACE=MO_y.VSPACE='0';MO_y.VOLUME='100';MO_y.AUDIODEVICEPRIORITY='1';MO_j._be=MO_j._r=MO_j._bd=MO_j._t=MO_j._bb=false;MO_j._bs=0;MO_j._y=MO_w.userAgent.indexOf('WebTV')== -1;MO_j._z=null;
MO_j._w=MO_w.appName==MO_x&&MO_w.platform=='MacPPC';MO_j._ba=MO_w.appName=='Netscape'&&MO_w.appVersion>='5'&&MO_w.platform=='Win32';MO_u('endVolumeFade','getOutputVolume','magicEmbed','pause','play','setVolume','stop');MO_v('enable','execCallback','execOnPause','execOnPlay','execOnReady','execOnStop','extend','on','updateAudibleState','updateMetaEventsEnabled');MO_t('magicEmbed');
/**********
     TITLE: Music Object Component - Advanced
   VERSION: 3.4.0.7
    AUTHOR: Chris van Rensburg
 COPYRIGHT: 1996-2001 Beatnik, Inc. All Rights Reserved
  REQUIRES: Music Object Component - Basic
**********/

function MO_z(_bu,_bv){var _f=new Array();for(var _bw=0;_bw<_bu;_bw++)_f[_bw]=(typeof _bv=='function')?new _bv():eval(_bv);return _f;}function mo_extend(){for(var _bx=0;_bx<MO_j._by.length;_bx++)MO_j._by[_bx](this);}function MO_A(_bz){MO_j._by[MO_j._by.length]=_bz;}function MO_B(){var _bn=MO_B.arguments,_bA=true,_bf=MO_j.publicInstanceCallbacks;for(var _bp=0;_bp<_bn.length;_bp++){var _bB=_bn[_bp];
if(_bB.charAt(0)=='['){_bA=_bB.toLowerCase().indexOf('instance')!= -1;_bf=MO_j['public'+(_bA?'Instance':'Static')+'Callbacks'];}else{_bf[_bf.length]=_bB;window['mo_'+_bB]=new Function('handler',(_bA?'this.':'Music.')+_bB+'Handler = handler;'+((_bA&&_bB=='onMetaEvent')?'this.updateMetaEventsEnabled ();':''));_bA?MO_u(_bB):MO_t(_bB);}}}function mo_updateMetaEventsEnabled(){if(this.ready)this._b.enableMetaEvents(typeof this.onMetaEventHandler=='function'||(typeof this.onMetaEventHandlers!=MO_b&&this.onMetaEventHandlers.length>0));}function mo_addCallbackHandler(_bC,_l){var _q=MO_c(this),_bD=_bC+'Handlers';if(typeof _q[_bD]==MO_b)_q[_bD]=new Array();_q[_bD][_q[_bD].length]=_l;if(_bC=='onMetaEvent')_q.updateMetaEventsEnabled();}function MO_C(_l){if(typeof _l=='string')eval(_l);else if(typeof _l=='function')_l();}function mo_execCallback(_bC){var _q=MO_c(this);if(typeof _q[_bC+'Handler']!=MO_b)MO_C(_q[_bC+'Handler']);if(typeof _q[_bC+'Handlers']!=MO_b){var _bE=_q[_bC+'Handlers'];for(var _bF=0;_bF<_bE.length;_bF++)
MO_C(_bE[_bF]);}}function mo_updateAudibleState(){var _q=this;MO_D(_q,'updateAudibleStateTimeout');var _bG=_q.audible;_q.audible=((_q.usage!='notes'&&_q.isPlaying())||_q._bH>0)&&_q._D>0;if(_q.audible!=_bG)_q.execCallback('onAudibleStateChange');}function mo_execOnMetaEvent(_k,_bI){if(typeof this.onMetaEventHandler=='function')this.onMetaEventHandler(_k,_bI,this);this.execMetaEventHandlers(_k,_bI);}function mo_execOnPause(){this.endVolumeFade();this.updateAudibleState();this.execCallback('onPause');}function mo_execOnStop(){this.endVolumeFade();this.updateAudibleState();this.execCallback('onStop');}function mo_stopAll(){for(var _Y=0;_Y<MO_j.instances.length;_Y++)MO_j.instances[_Y].stop();}function MO_E(_bJ){var _q=this;if(Math.round(_bJ)!=Math.round(_q._bK)){_q.fadeValue=Math.round(_bJ);if(typeof _q._bL=='function')_q._bL(_q.fadeValue);}_q._bK=_bJ;}function MO_F(){var _q=this;if(_q.inProgress){_q.inProgress=false;MO_C(_q._bM);if(_q._bN)_q.setValue(_q._bO);}}function MO_G(){var _q=this;if(_q.inProgress){
_q.setValue(_q._bK+_q._bP);_q.timeElapsed+=MO_j.minFadeInterval;if(_q.timeElapsed>=_q._bQ)_q.end();}return _q.inProgress;}function mo_execFades(){MO_j._bR=setTimeout('mo_execFades ()',MO_j.minFadeInterval);var _bS=0,_bT=0;while(_bT<MO_j._bU.length-_bS){MO_j._bU[_bT]=MO_j._bU[_bT+_bS];(MO_j._bU[_bT].advance())?_bT++ :_bS++;}MO_j._bU.length-=_bS;if(typeof MO_j.onFadesUpdatedHandler!=MO_b)MO_C(MO_j.onFadesUpdatedHandler);if(MO_j._bU.length==0)clearTimeout(MO_j._bR);}function MO_H(){var _q=this;if(!_q.inProgress){_q.inProgress=true;if(_q._bQ==0){if(!_q._bN)_q.setValue(_q._bV);_q.end();}else{_q.timeElapsed=0;_q.setValue(_q._bO);MO_j._bU[MO_j._bU.length]=_q;if(MO_j._bU.length==1)setTimeout('mo_execFades ()',MO_j.minFadeInterval);}}}function MO_I(_bO,_bV,_bQ,_bL,_bM,_bN){var _q=this;if(typeof _bV!='number')_bV=0;if(typeof _bQ=='boolean')_bQ=_bQ?1000:0;if(typeof _bQ!='number')_bQ=1000;if(typeof _bN!='boolean')_bN=false;_bL=(typeof _bL=='string')?new Function('fadeValue',_bL):_bL;if(_q.inProgress&&_q._bV==_bV&&
_q._bQ==_bQ){_q._bM=_bM;_q._bL=_bL;}else{var _bW=_q.inProgress;_q.end();_q._bN=_bN;_q._bO=_bO;_q._bV=_bV;_q._bQ=Math.round(_bQ/MO_j.minFadeInterval)*MO_j.minFadeInterval;_q._bM=_bM;_q._bL=_bL;_q._bK= -1000;_q._bP=(_bV-_bO)/(_q._bQ/MO_j.minFadeInterval);if(_bW)_q.start();}}function MO_J(_bO,_bV,_bQ,_bL,_bM,_bN){var _q=this;_q.inProgress=false;_q.fadeValue=_bO;_q.start=MO_H;_q.end=MO_F;_q.advance=MO_G;_q.setValue=MO_E;_q.update=MO_I;if(MO_J.arguments.length>0)_q.update(_bO,_bV,_bQ,_bL,_bM,_bN);}function mo_endVolumeFade(){this._bX.end()}function mo_fadeVolume(_bY,_bZ,_bQ,_b0,_b1){if(typeof _b1!=MO_b)this.onOutputVolumeChangeHandler=_b1;this._bX.update((typeof _bY!='number')?this.VOLUME:_bY,_bZ,_bQ,this.objectName+'.setVolume (fadeValue)',_b0,typeof _b0=='string'&&(_b0.indexOf('.stop ()')!= -1||_b0.indexOf('.pause ()')!= -1));this._bX.start();}function mo_fadeTo(_b2,_bQ,_b3,_b4){this.fadeVolume(null,_b2,_bQ,_b3,_b4);}function mo_setMonophonic(_b5,_b6){if(_b5==0)for(var _b7=1;_b7<17;_b7++)this._b8[_b7]=_b6;
else this._b8[_b5]=_b6;}function mo_getMonophonic(_b5){return this._b8[_b5]}function mo_noteOn(_b5,_p,_b9,_ca,_cb,_cc){var _q=this;if(_q.on()){var _cd,_ce=MO_j._ce,_cf=MO_j._cf;if(mo_noteOn.arguments.length>=5){if(_q._b8[_b5])_q.noteOff(_b5);if(typeof _ca=='string')_ca=mo_getNoteNumber(_ca);_cf._cg=_q;_cf._ch= ++MO_j._ci;_cf._b5=_b5;_cf._cj=_ca;var _ck= -1;for(_cd=0;_cd<MO_j._cl;_cd++){if(_ce[_cd]._b5==0){_ck=_cd;break;}}if(_ck== -1){_ck=0;for(_cd=0;_cd<MO_j._cl;_cd++){if(_ce[_cd]._ch<_ce[_ck]._ch)_ck=_cd;}_ce[_ck].free();}var _cm=_ce[_ck];_cm._cg=_cf._cg;_cm._ch=_cf._ch;_cm._b5=_cf._b5;_cm._cj=_cf._cj;(_p>=0&&_b9>=0)?_q._b.noteOn(_b5,_p,_b9,_ca,_cb):_q._b.noteOn(_b5,_ca,_cb);if(typeof _cc=='number')_cm.noteOffTimeout=setTimeout('Music.voices ['+_ck+'].free ()',_cc);_q._bH++;_q.updateAudibleState();}else{_q.noteOn(_b5,-1,-1,_p,_b9,(typeof _ca!='number')?null:_ca);}}}function mo_noteOff(_b5,_cj){if(this.on()){if(typeof _cj=='string')_cj=mo_getNoteNumber(_cj);if(typeof _cj!='number')_cj= -1;
for(var _cd=0;_cd<MO_j._cl;_cd++){var _cm=MO_j._ce[_cd];if(_cm._cg==this&&_cm._b5==_b5&&(_cm._cj==_cj||_cj== -1))_cm.free();}}}function mo_setProgram(_b5,_p,_b9){if(this.on()){(typeof _b9=='number')?this._b.setProgram(_b5,_p,_b9):this._b.setProgram(_b5,_p);}}function mo_isPaused(){return this.ready?this._b.IsPaused():false}function mo_isPlaying(){return this.ready?this._b.IsPlaying():false}function mo_stubEmbed(_cn,_co){this.magicEmbed(((typeof _cn!='string')?'':('SRC="'+_cn+'" '))+'WIDTH=0 HEIGHT=0 HIDDEN AUTOSTART=TRUE LOOP=TRUE '+((typeof _co=='string')?_co:''));}function mo_preloadEmbed(_cn,_co){this.stubEmbed(_cn,'AUTOSTART=FALSE LOOP=FALSE '+((typeof _co=='string')?_co:''));}function mo_getNoteName(_cp){var _cq=new Array('C','C#','D','D#','E','F','F#','G','G#','A','A#','B');return _cq[_cp%12]+(Math.floor(_cp/12)-1);}function mo_getNoteNumber(_cr){if(typeof _cr=='number')return _cr;var _cs='c-d-ef-g-a-b'.indexOf(_cr.charAt(0).toLowerCase()),_f=0,_ct=0;if(_cs!= -1){var _cu=_cr.indexOf('b',1);if(_cu== -1){
_cu=_cr.indexOf('#',1);(_cu== -1)?(_cu=0):(_ct=1);}else{_ct= -1;}var _cv=_cr.substring(_cu+1)-0;_f=12+_cv*12+_cs+_ct;}return Math.floor(_f);}function MO_D(_cw,_cx){if(typeof _cw[_cx]!=MO_b&&_cw[_cx]!=null)clearTimeout(_cw[_cx]);_cw[_cx]=null;}function MO_K(){var _q=this;MO_D(_q,'noteOffTimeout');_q._cg._b.noteOff(_q._b5,_q._cj,127);_q._b5=0;_q._cg._bH--;MO_D(_q._cg,'updateAudibleStateTimeout');_q._cg.updateAudibleStateTimeout=setTimeout(_q._cg.objectName+'.updateAudibleState ()',_q._cg.averageNoteRelease);}function MO_L(){var _q=this;_q._cg=null;_q._b5=_q._cj=0;_q._ch=0;_q.free=MO_K;}function MO_M(){mo_stopAll();MO_j.enabled=false;}function mo_setAudioDevicePriority(_cy){if(MO_j._be&&MO_N())MO_j.global.setAudioDevicePriority(_cy);MO_j.embedDefaults.AUDIODEVICEPRIORITY=_cy;}function mo_engageAudio(_cz){if(MO_N())MO_j.global.engageAudio(_cz);MO_j.embedDefaults.AUDIOENGAGED=_cz;MO_j.execCallback('onEngageAudio');}function mo_isAudioDeviceShared(){var _Z=MO_j,_cA=MO_w.userAgent;
return _Z._be?(MO_N()?_Z.global.isAudioDeviceShared():null):(_Z.stringHasAny(_cA,'WinNT','Windows NT')?_Z.meetsMinVersion(_Z.retrieveVersion(_cA,1,MO_d(_cA,(_cA.indexOf('WinNT')!= -1)?'WinNT':'Windows NT')),'5.0'): !_Z.stringHasAny(_cA,'Win9','Windows 9'));}function mo_isAudioSupported(){return(MO_j._be&&MO_N())?MO_j.global.isAudioSupported():true;}function MO_N(){return MO_j.enabled&&MO_j.global!=null}function mo_doMenuItem(_cB){if(this.on())this._b.doMenuItem(_cB)}function mo_getAudioDevicePriority(){return MO_j.embedDefaults.AUDIODEVICEPRIORITY}function mo_getAutostart(){return this.ready?this._b.getAutostart():null}function mo_getChannelMute(_b5){return this.ready?this._b.getChannelMute(_b5):null}function mo_getChannelSolo(_b5){return this.ready?this._b.getChannelSolo(_b5):null}function mo_getController(_b5,_cC){return this.ready?this._b.getController(_b5,_cC):null}function mo_getFileSize(){return this.ready?this._b.getFileSize():null}function mo_getInfo(_cD){return this.ready?this._b.getInfo(_cD):null}
function mo_getLoop(){return this.ready?this._b.getLoop():null}function mo_getPanelDisplay(){return this.ready?this._b.getPanelDisplay():null}function mo_getPanelMode(){return this.ready?this._b.getPanelMode():null}function mo_getPlayer(){return this._b}function mo_getPlayLength(){return this.ready?this._b.getPlayLength():null}function mo_getPosition(){return this.ready?this._b.getPosition():null}function mo_getProgram(_b5){return this.ready?this._b.getProgram(_b5):null}function mo_getReverbType(){return MO_N()?MO_j.global.getReverbType():null}function mo_getTempo(){return this.ready?this._b.getTempo():null}function mo_getTrackMute(_cE){return this.ready?this._b.getTrackMute(_cE):null}function mo_getTrackSolo(_cE){return this.ready?this._b.getTrackSolo(_cE):null}function mo_getTransposable(_b5){return this.ready?this._b.getTransposable(_b5):null}function mo_getTranspose(){return this.ready?this._b.getTranspose():null}function mo_isAudioEngaged(){return(MO_N()&&MO_j._be)?MO_j.global.isAudioEngaged():null}
function mo_setAutostart(_b6){if(this.on())this._b.setAutostart(_b6)}function mo_setChannelMute(_b5,_b6){if(this.on())this._b.setChannelMute(_b5,_b6)}function mo_setChannelSolo(_b5,_b6){if(this.on())this._b.setChannelSolo(_b5,_b6)}function mo_setController(_b5,_cC,_cF){if(this.on())this._b.setController(_b5,_cC,_cF)}function mo_setEndTime(_cG){if(this.on())this._b.setEndTime(_cG)}function mo_setGlobalMute(_cH){if(MO_N())MO_j.global.setGlobalMute(_cH)}function mo_setLoop(_b6){if(this.on())this._b.setLoop(_b6)}function mo_setPanelDisplay(_cI){if(this.on())this._b.setPanelDisplay(_cI)}function mo_setPanelMode(_cJ){if(this.on())this._b.setPanelMode(_cJ)}function mo_setPosition(_cK){if(this.on())this._b.setPosition(_cK)}function mo_setPlayer(_b){this._b=_b}function mo_setReverbType(_cL){if(MO_N())MO_j.global.setReverbType(_cL)}function mo_setStartTime(_cM){if(this.on())this._b.setStartTime(_cM)}function mo_setTempo(_cN){if(this.on())this._b.setTempo(_cN)}
function mo_setTrackMute(_cE,_b6){if(this.on())this._b.setTrackMute(_cE,_b6)}function mo_setTrackSolo(_cE,_b6){if(this.on())this._b.setTrackSolo(_cE,_b6)}function mo_setTranspose(_cO){if(this.on())this._b.setTranspose(_cO)}function mo_setTransposable(_b5,_b6){if(this.on())this._b.setTransposable(_b5,_b6)}MO_j.meetsMinVersion=MO_j.stringHasAny=MO_g;MO_j.global=null;MO_j.minFadeInterval=100;MO_j.publicInstanceCallbacks=new Array();MO_j.publicStaticCallbacks=new Array();MO_j.addEventHandler=MO_k;MO_j.addInstanceExtender=MO_A;MO_j.addPrivateInstanceMethods=MO_v;MO_j.addPublicCallbacks=MO_B;MO_j.addPublicInstanceMethods=MO_u;MO_j.addPublicStaticMethods=MO_t;MO_j.appendToArray=MO_s;MO_j.arrayOfObjects=MO_z;MO_j.clearTimeout=MO_D;MO_j.doNothing=MO_e;MO_j.execCallback=mo_execCallback;MO_j.execHandler=MO_C;MO_j.globalThru=MO_N;MO_j.indexOf=MO_d;MO_j.isInstance=MO_a;MO_j.parseAttributes=MO_o;MO_j.tagAttr=MO_n;MO_j.wireMethod=MO_r;MO_j._bU=new Array();MO_j._by=new Array();MO_j._ci=0;MO_j._cl=32;
MO_j.voices=MO_j._ce=MO_z(MO_j._cl,MO_L);MO_j._cf=new MO_L();MO_j._t=true;mo_playNote=mo_noteOn;MO_u('addCallbackHandler','doMenuItem','fadeTo','fadeVolume','getAutostart','getChannelMute','getChannelSolo','getController','getFileSize','getInfo','getLoop','getMonophonic','getPanelDisplay','getPanelMode','getPlayLength','getPosition','getProgram','getTempo','getTrackMute','getTrackSolo','getTransposable','getTranspose','getVolume','isPaused','isPlaying','noteOff','noteOn','playNote','preloadEmbed','setAutostart','setChannelMute','setChannelSolo','setController','setEndTime','setLoop','setMonophonic','setPanelDisplay','setPanelMode','setPosition','setProgram','setStartTime','setTempo','setTrackMute','setTrackSolo','setTransposable','setTranspose','stubEmbed');MO_B('[instance]','onLoad','onAudibleStateChange','onMetaEvent','onOutputVolumeChange','onPause','onPlay','onReady','onStop','[static]','onAudioEngagedChange','onEngageAudio');MO_v('execMetaEventHandlers','execOnMetaEvent','getPlayer','setPlayer');
function MO_O(_q){_q._b8=MO_z(17,false);_q._bX=new MO_J();_q._bH=_q.averageNoteRelease=0;_q.usage='music';_q.audible=false;_q.addCallbackHandler('onOutputVolumeChange',_q.objectName+'.updateAudibleState ()');}MO_A(MO_O);MO_t('addCallbackHandler','engageAudio','getAudioDevicePriority','getNoteName','getNoteNumber','getReverbType','isAudioDeviceShared','isAudioEngaged','isAudioSupported','kill','setAudioDevicePriority','setGlobalMute','setReverbType','stopAll');MO_j.Fade=MO_J;
/**********
     TITLE: Music Object Component - Compatibility
   VERSION: 3.4.0.7
    AUTHOR: Chris van Rensburg
 COPYRIGHT: 1996-2001 Beatnik, Inc. All Rights Reserved
  REQUIRES: -- can stand alone --
**********/

function MO_P(_c){var _bn=MO_P.arguments;for(var _bp=1;_bp<_bn.length;_bp++){if(_c.indexOf(_bn[_bp])!= -1)return true;}return false;}function MO_Q(_c,_cP){return(','+_c+',').indexOf(','+_cP+',')!= -1;}function MO_R(_cQ,_cR,_cS,_cT,_cU,_cV,_cW,_cX){if(typeof _cV!='string')_cV='';var _cY=typeof screen!=MO_b;
if(typeof _cW==MO_b&&_cY)_cW=Math.max(Math.floor((screen.width-_cS-10)/2),0);if(typeof _cX==MO_b&&_cY)_cX=Math.max(Math.floor((screen.height-_cT-40)/2),0);var _cZ=(typeof _cW!=MO_b&&typeof _cX!=MO_b)?('screenx='+_cW+',screeny='+_cX+',left='+_cW+',top='+_cX+','):'';return window.open(_cQ,_cR,_cV+',toolbar=no,location=no,directories=no,status='+((typeof _cU=='boolean'&&_cU)?'yes':'no')+',menubar=no,scrollbars=no,resizable=yes,'+_cZ+'width='+_cS+',height='+_cT+','+_cV);}function mo_promptClose(){if(MO_j._c0!=null){MO_j._c0.close();MO_j._c0=null;window.focus();}}function mo_promptWindowKeyPressed(_c1){if(_c1==13){eval(MO_j._c2);}else if(_c1==27){eval(MO_j._c3);};}function mo_promptUser(_c4,_c5,_c6,_c7,_c8,_c9,_cU){MO_j._c0=MO_R('','mo_promptWindow',500,295,_cU);if(typeof _c7!='string'||_c7=='')_c7='mo_promptClose ()';if(typeof _c9!='string'||_c9=='')_c9='mo_promptClose ()';MO_j._c2=_c7;MO_j._c3=_c9;if(typeof _c4!='string')_c4='';var _v=MO_j._c0.document;_v.open('text/html');_v.writeln(
'<HTML><HEAD><TITLE>'+_c4+'</TITLE></HEAD><BODY TEXT=000000 TOPMARGIN=0 LEFTMARGIN=0 MARGINWIDTH=0 MARGINHEIGHT=0>'+'<SCRIPT LANGUAGE=JavaScript>if (typeof Event != "undefined") document.captureEvents (Event.KEYUP); document.onkeyup = new Function ("event","var key = (typeof Event != \\\'undefined\\\') ? event.which : window.event.keyCode; window.opener.mo_promptWindowKeyPressed (key); return false;")</SCRIPT>'+'<FORM><TABLE WIDTH=100% HEIGHT=100% BORDER=0 CELLSPACING=0 CELLPADDING=6 BGCOLOR=CCCCCC>'+((_c4!='')?('<TR><TD VALIGN=TOP><TABLE WIDTH=100% BORDER=1 CELLSPACING=0 CELLPADDING=2 BGCOLOR=AAAAAA><TR><TD ALIGN=CENTER><FONT FACE=ARIAL,HELVETICA,VERDANA SIZE=5>'+_c4+'</FONT></U><BR></TD></TR></TABLE></TD></TR>'):'')+'<TR><TD VALIGN=CENTER><FONT FACE=ARIAL,HELVETICA,VERDANA SIZE=3>'+_c5+'</FONT>'+'</TD></TR><TR><TD VALIGN=BOTTOM>'+'<TABLE WIDTH=100% BORDER=0 CELLSPACING=0 CELLPADDING=0><TR><TD COLSPAN=2><HR></TD></TR><TR><TD>'+
((typeof _c8=='string'&&_c8!='')?('<INPUT TYPE=button VALUE="'+_c8+'" ONCLICK="with (window.opener) {'+_c9+'}">'):'')+'</TD><TD ALIGN=RIGHT>'+((typeof _c6=='string'&&_c6!='')?('<INPUT TYPE=button VALUE="'+_c6+'" ONCLICK="with (window.opener) {'+_c7+'}">'):'')+'</TD></TR></TABLE></TD></TR></TABLE></FORM></BODY></HTML>');_v.close();MO_j._c0.focus();}function mo_installPlayer(){var _da='';for(var _db in MO_j.installerOptions)_da+=((_da!='')?'&':'')+_db+'='+escape(MO_j.installerOptions[_db]);MO_j._c0=MO_R('http://www.beatnik.com/to/install-player.html?'+_da,'mo_promptWindow',500,295,true,'resizable=false');}function MO_S(_c,_dc,_e){if(typeof _dc!='number')_dc= -1;var _dd='',_de='0123456789',_df=(_dc==1)?'({[<':')}]>',_dg=(_dc==1)?')}]>':'({[<',_dh=(_dc==1)?(_c.length-1):0,_di=(typeof _e=='number')?_e:((_dc==1)?0:(_c.length-1)),_dj,_dk=false,_dl='';while(_di!=_dh+_dc){_dj=_c.charAt(_di);var _dm=_df.indexOf(_dj);if(_dm!= -1){_dl=_dg.charAt(_dm)+_dl;}else if(_dg.indexOf(_dj)!= -1){if(_dj==_dl.charAt(0));
_dl=_dl.substr(1);}else if(_dl==''){if(_dk||_de.indexOf(_dj)!= -1){if(!_dk)_dd='';_dk=_dj=='.'||_de.indexOf(_dj)!= -1;if(_dk){if(_dc==1)_dd+=_dj;else _dd=_dj+_dd;}else{if(_dd.indexOf('.')!= -1)_di=_dh;}}}_di+=_dc;}return _dd;}function MO_T(_dn,_do){var _dp=MO_S(_dn);return(_dp+'0.0.0.0.0.0.0.0.0.0.0.0.0'.substring(_dp.length))>=MO_S(_do);}function mo_hasMinVersion(_do){return MO_T(MO_j.playerVersion,_do);}function mo_requireMinPlayerVersion(_dq){if(MO_T(_dq,MO_j.requiredMinVersion))MO_j.requiredMinVersion=_dq;}function mo_isPlayerCompatible(_dq,_dr,_ds){var _f=false;if(MO_j.clientSupported){if(typeof _dq=='string')mo_requireMinPlayerVersion(_dq);if(typeof _dr=='boolean')MO_j.silentIfInadequate=_dr;if(typeof _ds=='boolean')MO_j.showCompatibilityPrompt=_ds;if(MO_j.hasPlayer){if(mo_hasMinVersion(MO_j.requiredMinVersion)){_f=true;}else{if(MO_j.clientUpgradable&&MO_j.showCompatibilityPrompt)MO_j.upgradePrompt();}}else{if(MO_j.clientUpgradable&&MO_j.showCompatibilityPrompt)MO_j.installPrompt();}}
if(!_f&&MO_j.silentIfInadequate)MO_M();return MO_j.playerCompatible=_f;}function MO_p(){if(!MO_j.ignoreJavaDisabled){MO_j.ignoreJavaDisabled=true;if(MO_j.clientSupported&&MO_j._dt)MO_j.enableJavaPrompt();}}function MO_q(_q){var _f='';if(!_q._5){var _6=_q.WIDTH-0,_7=_q.HEIGHT-0,_du=MO_m(_q);_f='<TABLE BORDER=0 CELLSPACING=0 CELLPADDING=0'+_du+'><TR><TD></TD></TR></TABLE>';if(MO_j.enabled&&MO_j.clientSupported&&MO_j.clientUpgradable){var _dv=MO_j.hasPlayer?MO_j.upgradePlayerText:MO_j.getPlayerText,_dw='<A HREF="javascript://" ONCLICK="mo_installPlayer (); return false">';if(typeof MO_j.getPlayerImagesPath=='string'&&_6==144&&(_7==60||_7==45||_7==15)){_f=_dw+'<IMG SRC="'+MO_j.getPlayerImagesPath+'get-player-'+_6+'x'+_7+'.gif"'+_du+' ALT="'+_dv+'" BORDER=0></A>';}else{if(_6>=90&&_7>=15)_f='<TABLE BORDER=1 CELLSPACING=0 CELLPADDING=0 BGCOLOR=FFFFFF'+_du+'><TR ALIGN=CENTER VALIGN=CENTER><TD>'+_dw+'<FONT FACE="ARIAL,HELVETICA,VERDANA" COLOR=000000 SIZE='+((_7>=30)?'3':'1')+'>'+_dv+'</FONT></A></TD></TR></TABLE>';}}}
return _f;}function MO_U(_dx){MO_j.playerVersion=MO_S(_dx+'');MO_j._be=mo_hasMinVersion('2.1.0');MO_j._r=mo_hasMinVersion('2.2.0');}function MO_V(){var _Z=MO_j;if(typeof mo_delayPlayerCheck==MO_b|| !mo_delayPlayerCheck){if(_Z.clientSupported&& !_Z._dy){_Z._dy=true;if(_Z.playerType=='Plug-in'){var _dz=MO_w.plugins;for(var _dA=0;_dA<_dz.length;_dA++){if(_dz[_dA].name.indexOf('Beatnik')!= -1&&_dz[_dA].name.indexOf('Stub')== -1){MO_U(_dz[_dA].name);if(_Z.playerVersion==''){if(_Z.clientPlatform=='Mac'){MO_U('1.1.7');}else if(_Z.clientPlatform=='WebTV'){MO_U('0.9.0');}}_Z.hasPlayer=true;break;}}_Z._y=mo_hasMinVersion('1.3')&& !_Z._dt;}else{document.writeln('<SPAN STYLE="position:absolute;visibility:hidden">'+'<OBJECT ID=mo_testInstance CLASSID="CLSID:B384F118-18EE-11D1-95C8-00A024330339" WIDTH=0 HEIGHT=0>'+'<PARAM NAME=WIDTH VALUE=0>'+'<PARAM NAME=HEIGHT VALUE=0>'+'<PARAM NAME=DOCUMENTID VALUE=0>'+'<PARAM NAME=AUTOSTART VALUE=FALSE>'+'</OBJECT>'+'</SPAN>');
_Z.hasPlayer=typeof document.mo_testInstance.getVersion!=MO_b;if(_Z.hasPlayer)MO_U(document.mo_testInstance.getVersion());}}}}function MO_W(){mo_delayPlayerCheck=false;MO_V();}function MO_X(_dB){var _Z=MO_j;if(MO_Q(_dB.name,_Z.clientName)&&MO_Q(_dB.platform,_Z.clientPlatform)){var _dC=_dB.versions.split(',');for(var _dD=0;_dD<_dC.length;_dD++){var _dE=_dC[_dD].toLowerCase(),_dF=(_dE.indexOf('to')!= -1)?_dE.indexOf('to'):_dE.length,_dG=MO_S(_dE.substr(0,_dF)),_dH=MO_S(_dE.substr(_dF+1));if(_dH=='')_dH=_dG;if((_dG==''||MO_T(_Z.clientVersion,_dG))&&(_dH==''||MO_P(_dE,'and higher','and up')||MO_T(_dH,_Z.clientVersion))){_Z.clientKnown=true;_Z.clientSupported= !MO_P(_dE,'except','not');if(_Z.clientSupported){_Z.client=_dB;_Z.clientUpgradable=_dB.upgradable;}else{_Z.client=null;_Z.clientUpgradable=false;}}}}MO_V();}function MO_Y(_cR,_dI,_dJ,_dK,_dL){var _q=MO_j.knownClients[MO_j.knownClients.length]=new Object();_q.name=_cR;_q.platform=_dI;_q.versions=_dJ;_q.upgradable=_dK;if(typeof _dL=='object'){
for(var _dM in _dL)_q[_dM]=_dL[_dM];}MO_X(_q);}function MO_Z(_dN,_dO,_dI,_cA){var _Z=MO_j,_dP=MO_w,_dQ=_dP.appVersion;_Z.clientName=(typeof _dN=='string')?_dN:_dP.appName;_Z.clientVersion=MO_S((typeof _dO=='string')?_dO:((_Z.clientName==MO_x)?_dQ.substr(_dQ.indexOf('MSIE')):_dQ),1);_Z.clientKnown=_Z.clientSupported=_Z.clientUpgradable=false;_Z.client=null;if(typeof _cA!='string')_cA=_dP.userAgent;if(MO_P(_cA,'Win9','Windows 9','WinNT','Windows NT','Win2','Windows 2')){_dI='Win32';}else if(_cA.indexOf('PPC')!= -1){_dI='MacPPC';}else if(_cA.indexOf('WebTV')!= -1){_dI='WebTV';}else if(typeof _dI!='string'){_dI=(typeof _dP.platform==MO_b)?'Unknown':_dP.platform;}_Z.platform=_Z.clientPlatform=_dI;for(var _dR=0;_dR<_Z.knownClients.length;_dR++)MO_X(_Z.knownClients[_dR]);}MO_0=typeof Music=='undefined';if(MO_0){MO_x='Microsoft Internet Explorer';MO_w=navigator;MO_b='undefined';MO_j=Music=new Object();MO_j.playerType=(MO_w.appName==MO_x&&MO_w.platform.indexOf('Win')!= -1)?'ActiveX':'Plug-in';
MO_t=new Function('for (var argNo = 0; argNo < arguments.length; argNo++) Music [arguments [argNo]] = window [\'mo_\' + arguments [argNo]];');}MO_t('hasMinVersion','installPlayer','isPlayerCompatible','promptClose','promptUser','requireMinPlayerVersion');MO_j.ignoreJavaDisabled=MO_j.silentIfInadequate=false;MO_j.installerOptions=new Array();MO_j.installerOptions.referrerURL=window.location.href;MO_j.installerOptions.inFrameset=top!=window;MO_j.knownClients=new Array();MO_j.showCompatibilityPrompt=true;MO_j.requiredMinVersion='';MO_j.playerCompatible=null;MO_j.hasPlayer=false;MO_U('');MO_j._dt=MO_w.appName=='Netscape'&&MO_w.appVersion<'5'&& !MO_w.javaEnabled();MO_j._dy=false;MO_j._c0=null;MO_j._x=MO_U;MO_j.addKnownClient=MO_Y;MO_j.checkForPlayer=MO_W;MO_j.meetsMinVersion=MO_T;MO_j.openWindow=MO_R;MO_j.retrieveVersion=MO_S;MO_j.setClientInfo=MO_Z;MO_j.stringHasAny=MO_P;MO_Z();MO_Y('Netscape','Win32,MacPPC','4.5 to 5.09,not 1 to 3.1',true);MO_Y(MO_x,'Win32,MacPPC','5 to 5.5.9',true);
MO_Y('WebTV Plus Receiver,WebTV Satellite Receiver','WebTV','3 and up',false);function MO_1(){mo_promptUser('Please Upgrade Beatnik','This page has been optimized for the features of version <B>'+MO_j.requiredMinVersion+' (or higher)</B> of the Beatnik Player. The currently installed version in your browser is '+MO_j.playerVersion+'.<P>If you choose to IGNORE this message, the page will continue to load normally, but may not function properly as designed by the author.','UPGRADE BEATNIK >>>','mo_installPlayer ()','IGNORE','mo_promptClose ()');}function MO_2(){mo_promptUser('Beatnik Enhanced Content !!','This page has been optimized for the audio features of the <B>Beatnik Player</B>. It appears you do not have the Beatnik Player installed.<P>If you choose to IGNORE this message, the page will continue to load normally, except there will be no Beatnik audio.','INSTALL BEATNIK >>>','mo_installPlayer ()','IGNORE','mo_promptClose ()');}function MO_3(){
mo_promptUser('Please Enable Java','This page makes use of the interactive audio features of the Beatnik Player. Java is currently not enabled in your browser. In order for the page to function correctly with Beatnik, <B>you must have Java enabled</B>.<P>This page will continue to load normally, but some interactive audio functionality may be absent.','    OK    ','mo_promptClose ()');}MO_j.upgradePrompt=MO_1;MO_j.installPrompt=MO_2;MO_j.enableJavaPrompt=MO_3;MO_j.upgradePlayerText='Upgrade Beatnik';MO_j.getPlayerText='Get Beatnik';