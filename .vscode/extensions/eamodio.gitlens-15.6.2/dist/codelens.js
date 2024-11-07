exports.id=624,exports.ids=[624],exports.modules={1153:(e,n,t)=>{t.d(n,{GitCodeLensProvider:()=>GitCodeLensProvider});var o=t(1398),i=t(785),s=t(6238),r=t(1416),a=t(9853),l=t(3713),c=t(8371),u=t(1661),m=t(11),d=t(1033),g=t(4357),h=t(30),y=t(5217),b=(e,n)=>(n=Symbol[e])?n:Symbol.for("Symbol."+e),p=e=>{throw TypeError(e)},C=(e,n,t)=>{if(null!=n){var o,i;"object"!=typeof n&&"function"!=typeof n&&p("Object expected"),t&&(o=n[b("asyncDispose")]),void 0===o&&(o=n[b("dispose")],t&&(i=o)),"function"!=typeof o&&p("Object not disposable"),i&&(o=function(){try{i.call(this)}catch(e){return Promise.reject(e)}}),e.push([t,o,n])}else t&&e.push([t]);return n},f=(e,n,t)=>{var o="function"==typeof SuppressedError?SuppressedError:function(e,n,t,o){return(o=Error(t)).name="SuppressedError",o.error=e,o.suppressed=n,o},i=e=>n=t?new o(e,n,"An error was suppressed during disposal"):(t=!0,e),s=o=>{for(;o=e.pop();)try{var r=o[1]&&o[1].call(o[2]);if(o[0])return Promise.resolve(r).then(s,e=>(i(e),s()))}catch(e){i(e)}if(t)throw n};return s()};let GitRecentChangeCodeLens=class GitRecentChangeCodeLens extends o.CodeLens{constructor(e,n,t,o,i,s,r,a,l,c){super(a,c),this.languageId=e,this.symbol=n,this.uri=t,this.dateFormat=o,this.blame=i,this.blameRange=s,this.isFullRange=r,this.desiredCommand=l}getBlame(){return this.blame?.()}};let GitAuthorsCodeLens=class GitAuthorsCodeLens extends o.CodeLens{constructor(e,n,t,o,i,s,r,a){super(r),this.languageId=e,this.symbol=n,this.uri=t,this.blame=o,this.blameRange=i,this.isFullRange=s,this.desiredCommand=a}getBlame(){return this.blame()}};let GitCodeLensProvider=class GitCodeLensProvider{constructor(e){this.container=e}static selector=[...(0,c.Tj)(s.MV,e=>({scheme:e}))];_onDidChangeCodeLenses=new o.EventEmitter;get onDidChangeCodeLenses(){return this._onDidChangeCodeLenses.event}reset(){this._onDidChangeCodeLenses.fire()}async provideCodeLenses(e,n){var t=[];try{let i,s;if(e.isDirty&&(0,y.QK)(e.uri))return[];let r=C(t,(0,m.bP)(`${(0,u.zu)(this)}.provideCodeLenses(${u.Vy.toLoggable(e)})`,!1)),a=await this.container.documentTracker.getOrAdd(e),c=await a.getStatus();if(!c.blameable)return[];let d=!1;e.isDirty&&!c.dirtyIdle&&(d=!0);let b=h.H.get("codeLens",e),p={...b.scopesByLanguage?.find(n=>n.language?.toLowerCase()===e.languageId)};null==p&&(p={language:e.languageId}),null==p.scopes&&(p.scopes=b.scopes),null==p.symbolScopes&&(p.symbolScopes=b.symbolScopes),p.symbolScopes=null!=p.symbolScopes?p.symbolScopes=p.symbolScopes.map(e=>e.toLowerCase()):[];let f=[],S=a.uri;if(d){if(1!==p.scopes.length||!p.scopes.includes("document")){let n;if([n,s]=await Promise.all([this.container.git.isTracked(S),(0,g.S4)("vscode.executeDocumentSymbolProvider",e.uri)]),!n)return f}}else if(n.isCancellationRequested||(1===p.scopes.length&&p.scopes.includes("document")?i=await this.container.git.getBlame(S,e):[i,s]=await Promise.all([this.container.git.getBlame(S,e),(0,g.S4)("vscode.executeDocumentSymbolProvider",e.uri)]),null==i||i?.lines.length===0))return f;if(n.isCancellationRequested)return f;let v=(0,l.Oo)(()=>e.validateRange(new o.Range(0,0,1e6,1e6))),w=d?{command:void 0,title:this.getDirtyTitle(b)}:void 0;if(void 0!==s)for(let n of(u.Vy.log(r,`${s.length} symbol(s) found`),s))this.provideCodeLens(f,e,n,p,v,i,S,b,d,w);if((p.scopes.includes("document")||p.symbolScopes.includes("file"))&&!p.symbolScopes.includes("!file")&&null==f.find(e=>0===e.range.start.line&&0===e.range.end.line)){let n;let t=v();if(d||b.recentChange.enabled){d||(n=(0,l.Oo)(()=>this.container.git.getBlameRange(i,S,t)));let s=new o.SymbolInformation(S.fileName,o.SymbolKind.File,"",new o.Location(S.documentUri(),new o.Range(0,0,0,t.start.character)));f.push(new GitRecentChangeCodeLens(e.languageId,s,S,b.dateFormat,n,t,!0,I(s),b.recentChange.command,w))}if(!d&&b.authors.enabled){void 0===n&&(n=(0,l.Oo)(()=>this.container.git.getBlameRange(i,S,t)));let s=new o.SymbolInformation(S.fileName,o.SymbolKind.File,"",new o.Location(S.documentUri(),new o.Range(0,1,0,t.start.character)));f.push(new GitAuthorsCodeLens(e.languageId,s,S,n,t,!0,I(s),b.authors.command))}}return f}catch(e){var i=e,s=!0}finally{f(t,i,s)}}getValidateSymbolRange(e,n,t,i){let s,r=!1,a=o.SymbolKind[e.kind].toLowerCase();switch(e.kind){case o.SymbolKind.File:(n.scopes.includes("containers")||n.symbolScopes.includes(a))&&(r=!n.symbolScopes.includes(`!${a}`)),r&&(s=t());break;case o.SymbolKind.Package:(n.scopes.includes("containers")||n.symbolScopes.includes(a))&&(r=!n.symbolScopes.includes(`!${a}`)),r&&0===(s=I(e)).start.line&&0===s.end.line&&(s=t());break;case o.SymbolKind.Class:case o.SymbolKind.Interface:case o.SymbolKind.Module:case o.SymbolKind.Namespace:case o.SymbolKind.Struct:(n.scopes.includes("containers")||n.symbolScopes.includes(a))&&(s=I(e),r=!n.symbolScopes.includes(`!${a}`)&&(i||!s.isSingleLine));break;case o.SymbolKind.Constructor:case o.SymbolKind.Enum:case o.SymbolKind.Function:case o.SymbolKind.Method:case o.SymbolKind.Property:(n.scopes.includes("blocks")||n.symbolScopes.includes(a))&&(s=I(e),r=!n.symbolScopes.includes(`!${a}`)&&(i||!s.isSingleLine));break;case o.SymbolKind.String:(n.symbolScopes.includes(a)||"markdown"===n.language&&n.scopes.includes("containers"))&&(s=I(e),r=!n.symbolScopes.includes(`!${a}`)&&(i||!s.isSingleLine));break;default:n.symbolScopes.includes(a)&&(s=I(e),r=!n.symbolScopes.includes(`!${a}`)&&(i||!s.isSingleLine))}return r?s??I(e):void 0}provideCodeLens(e,n,t,i,s,r,a,c,u,m){try{let d;let g=this.getValidateSymbolRange(t,i,s,c.includeSingleLineSymbols);if(void 0===g)return;let h=n.lineAt(I(t).start);if(e.length&&e[e.length-1].range.start.line===h.lineNumber)return;let y=0;if((u||c.recentChange.enabled)&&(u||(d=(0,l.Oo)(()=>this.container.git.getBlameRange(r,a,g))),e.push(new GitRecentChangeCodeLens(n.languageId,t,a,c.dateFormat,d,g,!1,h.range.with(new o.Position(h.range.start.line,y)),c.recentChange.command,m)),y++),c.authors.enabled){let i=!g.isSingleLine;if(!i&&"csharp"===n.languageId)switch(t.kind){case o.SymbolKind.File:break;case o.SymbolKind.Package:case o.SymbolKind.Module:case o.SymbolKind.Namespace:case o.SymbolKind.Class:case o.SymbolKind.Interface:case o.SymbolKind.Constructor:case o.SymbolKind.Method:case o.SymbolKind.Function:case o.SymbolKind.Enum:i=!0}i&&!u&&(void 0===d&&(d=(0,l.Oo)(()=>this.container.git.getBlameRange(r,a,g))),e.push(new GitAuthorsCodeLens(n.languageId,t,a,d,g,!1,h.range.with(new o.Position(h.range.start.line,y)),c.authors.command)))}}finally{if(D(t))for(let o of t.children)this.provideCodeLens(e,n,o,i,s,r,a,c,u,m)}}resolveCodeLens(e,n){return e instanceof GitRecentChangeCodeLens?this.resolveGitRecentChangeCodeLens(e,n):e instanceof GitAuthorsCodeLens?this.resolveGitAuthorsCodeLens(e,n):Promise.reject(void 0)}resolveGitRecentChangeCodeLens(e,n){let t=e.getBlame();if(null==t)return O("Unknown, (Blame failed)",e);let s=(0,c.$1)(t.commits.values());if(null==s)return O("Unknown, (Blame failed)",e);let r=`${s.author.name}, ${null==e.dateFormat?s.formattedDate:s.formatDate(e.dateFormat)}`;if(h.H.get("debug")&&(r+=` [${e.languageId}: ${o.SymbolKind[e.symbol.kind]}(${e.range.start.character}-${e.range.end.character}${e.symbol.containerName?`|${e.symbol.containerName}`:""}), Lines (${e.blameRange.start.line+1}-${e.blameRange.end.line+1}), Commit (${s.shortSha})]`),!1===e.desiredCommand)return O(r,e);switch(e.desiredCommand){case i.Vg.CopyRemoteCommitUrl:return v(r,e,s,!0);case i.Vg.CopyRemoteFileUrl:return w(r,e,s,!0);case i.Vg.DiffWithPrevious:return S(r,e,s);case i.Vg.OpenCommitOnRemote:return v(r,e,s);case i.Vg.OpenFileOnRemote:return w(r,e,s);case i.Vg.RevealCommitInView:return L(r,e,s);case i.Vg.ShowCommitsInView:return V(r,e,t,s);case i.Vg.ShowQuickCommitDetails:return F(r,e,s);case i.Vg.ShowQuickCommitFileDetails:return R(r,e,s);case i.Vg.ShowQuickCurrentBranchHistory:return $(r,e);case i.Vg.ShowQuickFileHistory:return k(r,e);case i.Vg.ToggleFileBlame:return K(r,e);case i.Vg.ToggleFileChanges:return P(r,e,s);case i.Vg.ToggleFileChangesOnly:return P(r,e,s,!0);case i.Vg.ToggleFileHeatmap:return T(r,e);default:return e}}resolveGitAuthorsCodeLens(e,n){let t=e.getBlame();if(null==t)return O("? authors (Blame failed)",e);let s=t.authors.size,r=c.$1(t.authors.values())?.name??"Unknown",a=s>1?` and ${(0,d.td)("one other",s-1,{only:!0,plural:"others"})}`:"",l=`${(0,d.td)("author",s,{zero:"?"})} (${r}${a})`;if(h.H.get("debug")&&(l+=` [${e.languageId}: ${o.SymbolKind[e.symbol.kind]}(${e.range.start.character}-${e.range.end.character}${e.symbol.containerName?`|${e.symbol.containerName}`:""}), Lines (${e.blameRange.start.line+1}-${e.blameRange.end.line+1}), Authors (${(0,c.fj)((0,c.Tj)(t.authors.values(),e=>e.name),", ")})]`),!1===e.desiredCommand)return O(l,e);let u=(0,c.I6)(t.commits.values(),e=>e.author.name===r)??(0,c.$1)(t.commits.values());if(null==u)return O(l,e);switch(e.desiredCommand){case i.Vg.CopyRemoteCommitUrl:return v(l,e,u,!0);case i.Vg.CopyRemoteFileUrl:return w(l,e,u,!0);case i.Vg.DiffWithPrevious:return S(l,e,u);case i.Vg.OpenCommitOnRemote:return v(l,e,u);case i.Vg.OpenFileOnRemote:return w(l,e,u);case i.Vg.RevealCommitInView:return L(l,e,u);case i.Vg.ShowCommitsInView:return V(l,e,t);case i.Vg.ShowQuickCommitDetails:return F(l,e,u);case i.Vg.ShowQuickCommitFileDetails:return R(l,e,u);case i.Vg.ShowQuickCurrentBranchHistory:return $(l,e);case i.Vg.ShowQuickFileHistory:return k(l,e);case i.Vg.ToggleFileBlame:return K(l,e);case i.Vg.ToggleFileChanges:return P(l,e,u);case i.Vg.ToggleFileChangesOnly:return P(l,e,u,!0);case i.Vg.ToggleFileHeatmap:return T(l,e);default:return e}}getDirtyTitle(e){return e.recentChange.enabled&&e.authors.enabled?h.H.get("strings.codeLens.unsavedChanges.recentChangeAndAuthors"):e.recentChange.enabled?h.H.get("strings.codeLens.unsavedChanges.recentChangeOnly"):h.H.get("strings.codeLens.unsavedChanges.authorsOnly")}};function S(e,n,t){return n.command=(0,g.gu)(r.T.DiffWithPrevious,e,void 0,{commit:t,uri:n.uri.toFileUri()}),n}function v(e,n,t,o=!1){return n.command=(0,g.gu)(r.T.OpenOnRemote,e,{resource:{type:a.J.Commit,sha:t.sha},repoPath:t.repoPath,clipboard:o}),n}function w(e,n,t,o=!1){return n.command=(0,g.gu)(r.T.OpenOnRemote,e,{resource:{type:a.J.Revision,fileName:t.file?.path??"",sha:t.sha},repoPath:t.repoPath,clipboard:o}),n}function L(e,n,t){return n.command=(0,g.gu)(t?.isUncommitted?"":i.Vg.RevealCommitInView,e,n.uri.toFileUri(),{commit:t,sha:void 0===t?void 0:t.sha}),n}function V(e,n,t,o){let i;return i=void 0===o?[...(0,c.x1)(t.commits.values(),e=>e.isUncommitted?void 0:e.ref)]:[o.ref],n.command=(0,g.gu)(0===i.length?"":r.T.ShowCommitsInView,e,{repoPath:t.repoPath,refs:i}),n}function F(e,n,t){return n.command=(0,g.gu)(t?.isUncommitted?"":i.Vg.ShowQuickCommitDetails,e,n.uri.toFileUri(),{commit:t,sha:void 0===t?void 0:t.sha}),n}function R(e,n,t){return n.command=(0,g.gu)(t?.isUncommitted?"":i.Vg.ShowQuickCommitFileDetails,e,n.uri.toFileUri(),{commit:t,sha:void 0===t?void 0:t.sha}),n}function $(e,n){return n.command=(0,g.gu)(i.Vg.ShowQuickCurrentBranchHistory,e,n.uri.toFileUri()),n}function k(e,n){return n.command=(0,g.gu)(i.Vg.ShowQuickFileHistory,e,n.uri.toFileUri(),{range:n.isFullRange?void 0:n.blameRange}),n}function K(e,n){return n.command=(0,g.gu)(r.T.ToggleFileBlame,e,n.uri.toFileUri()),n}function P(e,n,t,o){return n.command=(0,g.gu)(r.T.ToggleFileChanges,e,n.uri.toFileUri(),{type:"changes",context:{sha:t.sha,only:o,selection:!1}}),n}function T(e,n){return n.command=(0,g.gu)(r.T.ToggleFileHeatmap,e,n.uri.toFileUri()),n}function O(e,n){return n.command={title:e,command:""},n}function I(e){return D(e)?e.range:e.location.range}function D(e){return(0,l.is)(e,"children")}}};