"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[1877,2887],{1877:(t,e,i)=>{i.r(e),i.d(e,{HLSProvider:()=>v});var s=i(5850),n=i(507),r=i(2887),o=i(1665),a=i(5684),c=i(2486),d=i(1492),h=i(3817),l=i(6976);class u{#t;#e;#i=null;#s=null;config={};#n=new Set;get instance(){return this.#i}constructor(t,e){this.#t=t,this.#e=e}setup(t){const{streamType:e}=this.#e.$state,i=(0,o.se)(e).includes("live"),s=(0,o.se)(e).includes("ll-");this.#i=new t({lowLatencyMode:s,backBufferLength:s?4:i?8:void 0,renderTextTracksNatively:!1,...this.config});const n=this.#r.bind(this);for(const e of Object.values(t.Events))this.#i.on(e,n);this.#i.on(t.Events.ERROR,this.#o.bind(this));for(const t of this.#n)t(this.#i);this.#e.player.dispatch("hls-instance",{detail:this.#i}),this.#i.attachMedia(this.#t),this.#i.on(t.Events.AUDIO_TRACK_SWITCHED,this.#a.bind(this)),this.#i.on(t.Events.LEVEL_SWITCHED,this.#c.bind(this)),this.#i.on(t.Events.LEVEL_LOADED,this.#d.bind(this)),this.#i.on(t.Events.LEVEL_UPDATED,this.#h.bind(this)),this.#i.on(t.Events.NON_NATIVE_TEXT_TRACKS_FOUND,this.#l.bind(this)),this.#i.on(t.Events.CUES_PARSED,this.#u.bind(this)),this.#e.qualities[a.k.enableAuto]=this.#p.bind(this),(0,o.k6)(this.#e.qualities,"change",this.#v.bind(this)),(0,o.k6)(this.#e.audioTracks,"change",this.#g.bind(this)),this.#s=(0,o.QZ)(this.#y.bind(this))}#b(t,e){return new o.vP((t=>(0,o.BW)(t))(t),{detail:e})}#y(){if(!this.#e.$state.live())return;const t=new h.e(this.#x.bind(this));return t.start(),t.stop.bind(t)}#x(){this.#e.$state.liveSyncPosition.set(this.#i?.liveSyncPosition??1/0)}#r(t,e){this.#e.player?.dispatch(this.#b(t,e))}#l(t,e){const i=this.#b(t,e);let s=-1;for(let t=0;t<e.tracks.length;t++){const n=e.tracks[t],r=n.subtitleTrack??n.closedCaptions,o=new c.to({id:`hls-${n.kind}-${t}`,src:r?.url,label:n.label,language:r?.lang,kind:n.kind,default:n.default});o[c.Hp.readyState]=2,o[c.Hp.onModeChange]=()=>{"showing"===o.mode?(this.#i.subtitleTrack=t,s=t):s===t&&(this.#i.subtitleTrack=-1,s=-1)},this.#e.textTracks.add(o,i)}}#u(t,e){const i=this.#i?.subtitleTrack,s=this.#e.textTracks.getById(`hls-${e.type}-${i}`);if(!s)return;const n=this.#b(t,e);for(const t of e.cues)t.positionAlign="auto",s.addCue(t,n)}#a(t,e){const i=this.#e.audioTracks[e.id];if(i){const s=this.#b(t,e);this.#e.audioTracks[d.j.select](i,!0,s)}}#c(t,e){const i=this.#e.qualities[e.level];if(i){const s=this.#b(t,e);this.#e.qualities[d.j.select](i,!0,s)}}#h(t,e){e.details.totalduration>0&&this.#e.$state.inferredLiveDVRWindow.set(e.details.totalduration)}#d(t,e){if(this.#e.$state.canPlay())return;const{type:i,live:s,totalduration:n,targetduration:r}=e.details,c=this.#b(t,e);this.#e.notify("stream-type-change",s?"EVENT"===i&&Number.isFinite(n)&&r>=10?"live:dvr":"live":"on-demand",c),this.#e.notify("duration-change",n,c);const h=this.#i.media;-1===this.#i.currentLevel&&this.#e.qualities[a.k.setAuto](!0,c);for(const t of this.#i.audioTracks){const e={id:t.id.toString(),label:t.name,language:t.lang||"",kind:"main"};this.#e.audioTracks[d.j.add](e,c)}for(const t of this.#i.levels){const e={id:t.id?.toString()??t.height+"p",width:t.width,height:t.height,codec:t.codecSet,bitrate:t.bitrate};this.#e.qualities[d.j.add](e,c)}h.dispatchEvent(new o.vP("canplay",{trigger:c}))}#o(t,e){e.fatal&&("mediaError"===e.type?this.#i?.recoverMediaError():this.#f(e.error))}#f(t){this.#e.notify("error",{message:t.message,code:1,error:t})}#p(){this.#i&&(this.#i.currentLevel=-1)}#v(){const{qualities:t}=this.#e;this.#i&&!t.auto&&(this.#i[t.switch+"Level"]=t.selectedIndex,n.G_&&(this.#t.currentTime=this.#t.currentTime))}#g(){const{audioTracks:t}=this.#e;this.#i&&this.#i.audioTrack!==t.selectedIndex&&(this.#i.audioTrack=t.selectedIndex)}onInstance(t){return this.#n.add(t),()=>this.#n.delete(t)}loadSource(t){(0,o.Kg)(t.src)&&this.#i?.loadSource(t.src)}destroy(){this.#i?.destroy(),this.#i=null,this.#s?.(),this.#s=null}}class p{#E;#e;#k;constructor(t,e,i){this.#E=t,this.#e=e,this.#k=i,this.#L()}async#L(){const t={onLoadStart:this.#m.bind(this),onLoaded:this.#S.bind(this),onLoadError:this.#w.bind(this)};let e=await async function(t,e={}){if((0,o.Kg)(t)){e.onLoadStart?.();try{if(await(0,s.k0)(t),!(0,o.Tn)(window.Hls))throw Error("");const i=window.Hls;return e.onLoaded?.(i),i}catch(t){e.onLoadError?.(t)}}}(this.#E,t);if((0,o.b0)(e)&&!(0,o.Kg)(this.#E)&&(e=await async function(t,e={}){if(!(0,o.b0)(t)){if(e.onLoadStart?.(),t.prototype&&t.prototype!==Function)return e.onLoaded?.(t),t;try{const i=(await t())?.default;if(!i||!i.isSupported)throw Error("");return e.onLoaded?.(i),i}catch(t){e.onLoadError?.(t)}}}(this.#E,t)),!e)return null;if(!e.isSupported()){const t="[vidstack] `hls.js` is not supported in this environment";return this.#e.player.dispatch(new o.vP("hls-unsupported")),this.#e.notify("error",{message:t,code:4}),null}return e}#m(){this.#e.player.dispatch(new o.vP("hls-lib-load-start"))}#S(t){this.#e.player.dispatch(new o.vP("hls-lib-loaded",{detail:t})),this.#k(t)}#w(t){const e=(0,l.r)(t);this.#e.player.dispatch(new o.vP("hls-lib-load-error",{detail:e})),this.#e.notify("error",{message:e.message,code:4,error:e})}}class v extends r.VideoProvider{$$PROVIDER_TYPE="HLS";#P=null;#T=new u(this.video,this.ctx);get ctor(){return this.#P}get instance(){return this.#T.instance}static supported=(0,n.m0)();get type(){return"hls"}get canLiveSync(){return!0}#C="https://cdn.jsdelivr.net/npm/hls.js@^1.5.0/dist/hls.min.js";get config(){return this.#T.config}set config(t){this.#T.config=t}get library(){return this.#C}set library(t){this.#C=t}preconnect(){(0,o.Kg)(this.#C)&&(0,s.kZ)(this.#C)}setup(){super.setup(),new p(this.#C,this.ctx,(t=>{this.#P=t,this.#T.setup(t),this.ctx.notify("provider-setup",this);const e=(0,o.se)(this.ctx.$state.source);e&&this.loadSource(e)}))}async loadSource(t,e){(0,o.Kg)(t.src)?(this.media.preload=e||"",this.appendSource(t,"application/x-mpegurl"),this.#T.loadSource(t),this.currentSrc=t):this.removeSource()}onInstance(t){const e=this.#T.instance;return e&&t(e),this.#T.onInstance(t)}destroy(){this.#T.destroy()}}},2887:(t,e,i)=>{i.r(e),i.d(e,{VideoProvider:()=>p});var s=i(1665),n=i(507),r=i(8723),o=i(7585),a=i(2486);class c{#t;#e;constructor(t,e){this.#t=t,this.#e=e,t.textTracks.onaddtrack=this.#D.bind(this),(0,s.zp)(this.#M.bind(this))}#D(t){const e=t.track;if(!e||function(t,e){return Array.from(t.children).find((t=>t.track===e))}(this.#t,e))return;const i=new a.to({id:e.id,kind:e.kind,label:e.label??"",language:e.language,type:"vtt"});i[a.Hp.native]={track:e},i[a.Hp.readyState]=2,i[a.Hp.nativeHLS]=!0;let s=0;const n=t=>{if(e.cues)for(let n=s;n<e.cues.length;n++)i.addCue(e.cues[n],t),s++};n(t),e.oncuechange=n,this.#e.textTracks.add(i,t),i.setMode(e.mode,t)}#M(){this.#t.textTracks.onaddtrack=null;for(const t of this.#e.textTracks){const e=t[a.Hp.native]?.track;e?.oncuechange&&(e.oncuechange=null)}}}class d{#t;#I;constructor(t,e){this.#t=t,this.#I=e,new s.En(t).add("enterpictureinpicture",this.#A.bind(this)).add("leavepictureinpicture",this.#O.bind(this))}get active(){return document.pictureInPictureElement===this.#t}get supported(){return(0,n.dE)(this.#t)}async enter(){return this.#t.requestPictureInPicture()}exit(){return document.exitPictureInPicture()}#A(t){this.#H(!0,t)}#O(t){this.#H(!1,t)}#H=(t,e)=>{this.#I.notify("picture-in-picture-change",t,e)}}class h{#t;#I;#$="inline";get mode(){return this.#$}constructor(t,e){this.#t=t,this.#I=e,(0,s.k6)(t,"webkitpresentationmodechanged",this.#_.bind(this))}get supported(){return(0,n.Jt)(this.#t)}async setPresentationMode(t){this.#$!==t&&this.#t.webkitSetPresentationMode(t)}#_(t){const e=this.#$;this.#$=this.#t.webkitPresentationMode,this.#I.player?.dispatch(new s.vP("video-presentation-change",{detail:this.#$,trigger:t})),["fullscreen","picture-in-picture"].forEach((i=>{this.#$!==i&&e!==i||this.#I.notify(`${i}-change`,this.#$===i,t)}))}}class l{#R;get active(){return"fullscreen"===this.#R.mode}get supported(){return this.#R.supported}constructor(t){this.#R=t}async enter(){this.#R.setPresentationMode("fullscreen")}async exit(){this.#R.setPresentationMode("inline")}}class u{#R;get active(){return"picture-in-picture"===this.#R.mode}get supported(){return this.#R.supported}constructor(t){this.#R=t}async enter(){this.#R.setPresentationMode("picture-in-picture")}async exit(){this.#R.setPresentationMode("inline")}}class p extends r.B{$$PROVIDER_TYPE="VIDEO";get type(){return"video"}airPlay;fullscreen;pictureInPicture;constructor(t,e){super(t,e),(0,s.P1)((()=>{if(this.airPlay=new o.z(t,e),(0,n.Jt)(t)){const i=new h(t,e);this.fullscreen=new l(i),this.pictureInPicture=new u(i)}else(0,n.dE)(t)&&(this.pictureInPicture=new d(t,e))}),this.scope)}setup(){super.setup(),(0,n.uo)(this.video)&&new c(this.video,this.ctx),this.ctx.textRenderers.attachVideo(this.video),(0,s.zp)((()=>{this.ctx.textRenderers.attachVideo(null)})),"video"===this.type&&this.ctx.notify("provider-setup",this)}get video(){return this.media}}}}]);