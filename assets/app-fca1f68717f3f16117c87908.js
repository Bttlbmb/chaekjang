const METHOD_HTML="<p>We collect snapshots of the top 50 entries from the popularity lists published by Kyobo, YES24, and Aladin. Each snapshot is dated when we collect it; the stores may use different reporting periods and list scopes.</p>\n<p>Each version earns 50 points for first place, 49 for second, down to 1 for fiftieth. A work’s score adds the points of its verified versions across all three stores and the selected dates. If two versions place first and tenth at one store, they contribute 50 + 41 = 91 points to the work. Duplicate listings of one matched edition count only once per store and day.</p>\n<p>A book absent from a complete collected top 50 earns zero for that store and day. Missing or incomplete collections are excluded and shown in the coverage note. These scores describe visibility in the lists we captured—not sales or an official nationwide ranking.</p>\n\n<p>The work graph shows weekly average ranks over the past year. Each day averages the observed ranks of its editions across bookstores; each Monday–Sunday point then averages the ranked days equally. Missing and unlisted observations are left out, empty weeks remain gaps, and partial weeks are labeled. There is no additional smoothing.</p>\n";
const AUTHOR_NAMES={"Yang Gui-ja":"양귀자","Kim Ae-ran":"김애란","Choi TaeSung":"최태성","HANRORO":"한로로","Rando Kim":"김난도","POSTERSHOP":"유래혁","Song Huigu":"송희구","Seong Haena":"성해나","Hwang Sok-yong":"황석영","Na Min-ae":"나민애","Gu Byeong-mo":"구병모","Na Taejoo":"나태주","Rhyu Simin":"유시민","Taesoo":"태수","Hyung Bae Moon":"문형배","Park Min-gyu":"박민규","Song Gilyoung":"송길영","Kim Hye-young":"김혜영","Jung Dae-gun":"정대건","Han Kang":"한강","Eunmi Chae":"채은미","Jeong Ji A":"정지아","Lee Hae-chan":"이해찬","Luly":"루리","Cheon Seonran":"천선란","Jo Jung-Rae":"조정래","Choi Kang-rok":"최강록","Common Siblings":"흔한남매","Choi Eunyoung":"최은영","Su-young Ryu":"류수영","Baek Heena":"백희나","Park Sung-jun":"박성준","Woo Hyouk Lee":"이우혁","Cheon Myeong-kwan":"천명관","Yoo Hwi-woon":"유휘운","Jeong You-jeong":"정유정","MK Kim":"김미경","Taewoong Park":"박태웅","Park Jun-cheol":"박준철","Kim Cho Yeop":"김초엽","Hong Min-jung":"홍민정","Lee Hae-In":"이해인","Kim Jin-myung":"김진명","Park Wan-seo":"박완서","Eun Heekyung":"은희경","Yi Mun-yol":"이문열","Oh Tae-min":"오태민","Pomnyun Sunim":"법륜","Sang Young Park":"박상영","Miye Lee":"이미예","Lee Yeongdo":"이영도","Choi Yuna":"최유나","Illhong":"일홍","Wi Soo Jung":"위수정","Hackers Language Research Institute":"해커스 어학연구소","Hwang Seong-gu":"황성구","Jang Hang-jun":"장항준"};
const COMPONENTS={"categoryPriority":["non-book","comics","study","poetry-drama","self-help","business","children","fiction","nonfiction","literature","unclassified"],"header":"<a class=\"brand\" href=\"{{base}}\" aria-label=\"Chaekjang home\"><span class=\"brand-mark\" lang=\"ko\" aria-hidden=\"true\">책장</span><span>Chaekjang</span></a><div class=\"header-meta\"><p class=\"collection-date\">Data coverage: <time datetime=\"{{first}}\">{{firstLabel}}</time> – <time datetime=\"{{last}}\">{{lastLabel}}</time></p><button class=\"about\">How points work</button></div>","title":"<span lang=\"{{lang}}\">{{title}}</span>{{korean}}","row":"<tr><td class=\"position\">{{position}}</td><td><a class=\"book-title\" data-key=\"{{key}}\" href=\"{{href}}\">{{title}}</a><div class=\"book-meta\"><p class=\"author\">{{author}}{{editionLabel}}</p>{{versions}}</div></td><td class=\"category-column\"><span>{{category}}</span></td><td class=\"points\"><strong>{{score}}</strong></td></tr>","table":"<table><caption class=\"sr-only\">{{caption}}</caption><thead><tr><th scope=\"col\" class=\"position\">Rank</th><th scope=\"col\">Work / author</th><th scope=\"col\" class=\"category-column\">Category</th><th scope=\"col\" class=\"points\">Points</th></tr></thead><tbody>{{rows}}</tbody></table>","versions":"<details class=\"work-versions\" data-work=\"{{key}}\"><summary>{{count}} versions</summary><div class=\"version-content\"><ul>{{rows}}</ul></div></details>","version":"<li><div><a class=\"version-title\" href=\"{{href}}\">{{title}}</a>{{details}}<p class=\"edition-isbn\">{{isbn}}</p>{{unranked}}</div><span class=\"version-score\">{{score}}</span></li>","footer":"<footer class=\"author-scope site-footer\"><p>Points combine verified versions of each work. Additional work matches may remain unresolved.</p><a href=\"{{base}}reports/\">Monthly reports</a></footer>"};
// Browser-native JavaScript: served as-is, with no framework or build runtime.
const config = JSON.parse(document.getElementById('snapshot-data').textContent);
// Carry input modality across full-page navigation and browser Back restores.
// Restored focus still anchors keyboard navigation without a pointer-only ring.
const inputModeKey='shelf-input-mode';
function restoreInputMode() {
  let mode='pointer';
  try {if(sessionStorage.getItem(inputModeKey)==='keyboard')mode='keyboard';}catch{}
  document.documentElement.dataset.inputMode=mode;
}
function setInputMode(mode) {
  document.documentElement.dataset.inputMode=mode;
  try {sessionStorage.setItem(inputModeKey,mode);}catch{}
}
restoreInputMode();
addEventListener('pageshow',restoreInputMode);
document.addEventListener('pointerdown',()=>setInputMode('pointer'),true);
document.addEventListener('keydown',e=>{
  if(!['Shift','Control','Alt','Meta'].includes(e.key))setInputMode('keyboard');
},true);
document.addEventListener('click',e=>{if(e.detail===0)setInputMode('keyboard');},true);
const base = config.base;
const url = path => base + path.replace(/^\//, '');
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const component = (name,values={}) => COMPONENTS[name].replace(/\{\{(\w+)\}\}/g,(_,key)=>values[key]);
const names = {kyobo:'Kyobo',yes24:'YES24',aladin:'Aladin'};
const periods = {today:'Today',week:'Past Week',month:'Past Month',year:'This Year',all:'All Time'};
const priority = COMPONENTS.categoryPriority;
const formatDate = (day, short=false) => new Intl.DateTimeFormat('en-GB',{day:'numeric',month:short?'short':'long',year:'numeric',timeZone:'UTC'}).format(new Date(day+'T00:00:00Z'));
const number = n => n.toLocaleString('en-US');
const title = b => b.english?.title || b.title;
const range = s => s.from===s.to ? formatDate(s.to) : `${formatDate(s.from)} – ${formatDate(s.to)}`;
const rangeLabel = s => s.from===s.to ? formatDate(s.to) : s.from.slice(0,7)===s.to.slice(0,7) ? `${Number(s.from.slice(8))}–${formatDate(s.to)}` : `${formatDate(s.from,true)} – ${formatDate(s.to,true)}`;
const titleHTML = b => component('title',{lang:b.english?'en':'ko',title:esc(title(b)),korean:b.english?` <small lang="ko">${esc(b.title)}</small>`:''});
const icon = kind => `<svg width="${kind==='search'?17:14}" height="${kind==='search'?17:14}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">${kind==='search'?'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>':kind==='close'?'<path d="m6 6 12 12M6 18 18 6"/>':'<circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7v1"/>'}</svg>`;
function author(b) {
  const name=b.english_author?.name || b.english?.author;
  const refs=b.authors || [];
  const authorLink=(a,content)=>`<a class="author-link" data-author="${esc(a.key)}" href="${esc(authorHref(a.key))}">${content}</a>`;
  if(!name) {
    const credits=new Map();
    refs.forEach(a=>(a.credits || []).forEach(n=>credits.set(n,a)));
    if(!credits.size)return esc(b.author);
    const pattern=new RegExp('('+[...credits.keys()].sort((a,b)=>b.length-a.length).map(n=>n.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')','g');
    return (b.author || '').split(pattern).map(part=>credits.has(part)?authorLink(credits.get(part),esc(part)):esc(part)).join('');
  }
  const content=name.split(/(\s*;\s*)/).map(part => {
    const hangul=AUTHOR_NAMES[part.replace(/ et al\.$/,'')];
    const content=`<span>${esc(part)}</span>${hangul && b.author?.includes(hangul)?`<span class="author-hangul" lang="ko"> ${esc(hangul)}</span>`:''}`;
    const ref=refs.find(a=>a.name===part.trim().replace(/ et al\.$/,''));
    return ref?authorLink(ref,content):content;
  }).join('');
  return content;
}
function link(href,label) {
  try { if (!['https:','http:'].includes(new URL(href).protocol)) return esc(label); } catch {return esc(label);}
  return `<a href="${esc(href)}" target="_blank" rel="noreferrer">${esc(label)} ↗</a>`;
}
const cache=new Map();
async function json(path) {
  if (!/^\/data\/[a-z]+-[a-f0-9]{24}\.json$/.test(path)) throw Error('Invalid snapshot data path.');
  if (!cache.has(path)) {
    cache.set(path, fetch(url(path)).then(r => {
      if (!r.ok) throw Error('This snapshot is unavailable. Please try again.');
      return r.json();
    }).catch(e => {
      cache.delete(path);
      throw e instanceof TypeError || e instanceof SyntaxError ? Error('The saved data could not be loaded. Please try again.') : e;
    }));
    if(cache.size>10)cache.delete(cache.keys().next().value);
  }
  return cache.get(path);
}
const params=new URLSearchParams(location.search);
let period=config.report?'report':Object.hasOwn(periods,params.get('period'))?params.get('period'):config.author||config.work||config.book?'all':'month';
let query=params.has('view')?'':params.get('q')||'';
let category=params.get('category')||'';
const originPeriod=Object.hasOwn(periods,params.get('listPeriod'))?params.get('listPeriod'):(config.author||config.work||config.book)&&!params.has('period')?'month':period;
const fromAuthor=(config.book||config.work) && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(params.get('fromAuthor')||'')?params.get('fromAuthor'):null;
// A work's period can change independently of the author page it came from.
const authorPeriod=Object.hasOwn(periods,params.get('authorPeriod'))?params.get('authorPeriod'):period;
const fromWork=config.book && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(params.get('fromWork')||'')?params.get('fromWork'):null;
const filters=()=>{
  const value=new URLSearchParams({period,q:query,category});
  if(config.author || config.work || params.has('listPeriod'))value.set('listPeriod',originPeriod);
  if(fromAuthor){value.set('fromAuthor',fromAuthor);value.set('authorPeriod',authorPeriod);}
  if(fromWork)value.set('fromWork',fromWork);
  return value.toString();
};
const returnPeriod=()=>config.author||config.work||config.book?originPeriod:period;
function authorHref(key,selectedPeriod=period) {
  if(config.report)return url('/authors/'+key+'/');
  const value=new URLSearchParams(filters());value.delete('fromAuthor');value.delete('authorPeriod');value.delete('fromWork');value.set('listPeriod',returnPeriod());value.set('period',selectedPeriod);
  return url('/authors/'+key+'/?'+value);
}
function listHref() {
  return url('/?'+new URLSearchParams({period:config.author||config.work||fromAuthor||fromWork?originPeriod:period,q:query,category}));
}
function workHref(key) {
  if(config.report)return url('/works/'+key+'/');
  const value=new URLSearchParams(filters());value.delete('fromWork');value.set('listPeriod',returnPeriod());
  if(config.author){value.set('fromAuthor',config.author.key);value.set('authorPeriod',period);}
  return url('/works/'+key+'/?'+value);
}
const editionAnchor=key=>'edition-'+key;
function versionHref(v,workKey) { return workHref(workKey)+'#'+encodeURIComponent(editionAnchor(v.key)); }
function versionHTML(v,workKey,s,inTable=false) {
  const e=v.edition,score=v.scores[period];
  const details=[e.publishers.length?'Publisher: '+e.publishers.join(' / '):'',e.translators.length?'Translator: '+e.translators.join(', '):''].filter(Boolean);
  return component('version',{href:esc(versionHref(v,workKey)),title:titleHTML(v.book),details:details.length?`<p class="edition-details">${details.map(esc).join(' · ')}</p>`:'',isbn:`${e.isbn?'ISBN '+esc(e.isbn)+' · ':''}${e.stores.map(k=>names[k]).join(', ')}${e.unresolved?' · Unresolved edition record':''}`,unranked:!score&&s.capturedDays?'<p class="edition-details">Not in captured lists during this period</p>':'',score:`${s.capturedDays?number(score):'—'}${inTable?'':' pts'}`});
}
function authorVersionHTML(v,i,s) {
  const e=v.edition,score=v.scores[period];
  const publisher=e.publishers.length?`<span lang="ko">${esc(e.publishers.join(' / '))}</span>`:'Publisher unavailable';
  const translator=e.translators.length?` · Translator <span lang="ko">${esc(e.translators.join(', '))}</span>`:'';
  return `<li><div><a class="version-title" href="${esc(versionHref(v,i.key))}">${publisher}${translator}</a>${v.book.title!==i.book.title?`<p class="edition-details" lang="ko">${esc(v.book.title)}</p>`:''}<p class="edition-isbn">${e.isbn?'ISBN '+esc(e.isbn)+' · ':''}${e.stores.map(k=>names[k]).join(', ')}${e.unresolved?' · Unresolved edition record':''}</p></div><span class="version-score">${s.capturedDays?number(score):'—'}</span></li>`;
}
function versionsHTML(i,s,compact=false) {
  return i.versions?component('versions',{key:esc(i.key),count:i.versionCount,rows:[...i.versions].sort((a,b)=>b.scores[period]-a.scores[period]||a.key.localeCompare(b.key)).map(v=>compact?authorVersionHTML(v,i,s):versionHTML(v,i.key,s,true)).join('')}):'';
}
const expandedWorks=new Set();
function layoutVersions(container) {
  container.querySelectorAll('.book-meta .work-versions[open]').forEach(d=>{
    const offset=d.getBoundingClientRect().left-d.parentElement.getBoundingClientRect().left;
    d.style.setProperty('--versions-offset',`${offset}px`);
  });
}
const versionLayoutObserver=new ResizeObserver(entries=>entries.forEach(entry=>layoutVersions(entry.target)));
function wireVersions(container) {
  versionLayoutObserver.disconnect();
  container.querySelectorAll('.work-versions').forEach(d=>{
    d.open=expandedWorks.has(d.dataset.work);
    d.ontoggle=()=>{if(d.open)expandedWorks.add(d.dataset.work);else expandedWorks.delete(d.dataset.work);layoutVersions(container);};
  });
  layoutVersions(container);
  versionLayoutObserver.observe(container);
}
const filterKey=()=>JSON.stringify([period,query,category]);
const saveReturn=state=>{try{sessionStorage.setItem('shelf-list-return',JSON.stringify(state));}catch{}};
function returnState() {
  try {
    const value=JSON.parse(sessionStorage.getItem('shelf-list-return')||'null');
    return value?.filterKey===filterKey() && Number.isInteger(value.count) && value.count>=100 && value.count<=100000 && typeof value.book==='string' && Number.isFinite(value.scroll) && value.scroll>=0 ? value:null;
  } catch{return null;}
}
function address() { history.replaceState(null,'',location.pathname+'?'+filters()+location.hash); }
function header(meta) {
  document.querySelector('header').innerHTML=component('header',{base:esc(base),first:esc(meta.first),last:esc(meta.last),firstLabel:formatDate(meta.first,true),lastLabel:formatDate(meta.last,true)});
  const dialog=document.querySelector('dialog');
  const reportHelp=config.report?'<p>This report uses the calendar month shown above. Work and author links open All Time points; their period controls use the latest complete collection as the endpoint. The work graph always shows the past 365 days ending on that date. Those detail views can cover different dates from this monthly table.</p>':'';
  dialog.innerHTML='<div class="modal-inner"><div class="modal-header"><h2 class="detail-title">How points work</h2><button class="icon-button close" aria-label="Close details">×</button></div><div class="modal-body" tabindex="0" role="region" aria-label="Points explanation">'+reportHelp+METHOD_HTML+'</div></div>';
  const opener=document.querySelector('.about');
  opener.onclick=()=>dialog.showModal();
  dialog.querySelector('.close').onclick=()=>dialog.close();
  dialog.onclick=e=>{if(e.target===dialog)dialog.close();};
  dialog.onclose=()=>opener.focus();
}
let manifest;
const categoryName=id=>manifest.meta.categoryOptions.find(c=>c.id===id)?.label || id;
function coverageHTML(s) {
  return s.missing.length ? s.capturedDays ? `<details class="coverage-note"><summary>${s.capturedDays} of ${s.expectedDays} store-days available</summary><p>Missing or incomplete days are excluded. ${s.coverage.map(c=>`${names[c.store]}: ${c.days}/${c.expected} days`).join(' · ')}.</p></details>`:'<p class="notice" role="status">No complete collections in this period.</p>':'';
}
function filteredWorkItems(items,category,query) {
  let shown=items;
  // The category's competition positions precede search or display sorting.
  if(category) {
    let previous=null,position=0;
    shown=shown.filter(i=>i.book.classification.categories.includes(category)).map((i,index)=>{if(i.score!==previous)position=index+1;previous=i.score;return {...i,position};});
  }
  let q=query.normalize('NFKC').trim().toLowerCase();
  const isbn=q.replace(/[\s-]/g,'');
  if(/^(?:\d{13}|\d{9}[\dx])$/.test(isbn))q=isbn;
  return q?shown.filter(i=>i.search.some(v=>v.includes(q))):shown;
}
function listTableHTML(items,s,category='') {
  return component('table',{caption:esc(`Work popularity scores across versions for ${range(s)} ${category?'within '+categoryName(category):'across all categories'}. Equal scores share a position.`),rows:items.map(i=>{
    const b=i.book,tag=priority.find(c=>b.classification.categories.includes(c));
    return component('row',{position:i.position,key:esc(i.key),href:esc(workHref(i.key)),title:titleHTML(b),author:author(b),editionLabel:b.edition_note?`<span class="edition-label"> · ${esc(b.edition_note.label)}</span>`:'',versions:versionsHTML(i,s),category:esc(categoryName(tag)),score:number(i.score)});
  }).join('')});
}
function reportPage() {
  const report=config.report,s=report.summary,main=document.querySelector('main');
  if(location.pathname!==url('/reports/'+report.key+'/'))throw Error('This report was not found.');
  query='';category='';
  const input=main.querySelector('input'),select=main.querySelector('[aria-label="Book category"]'),sort=main.querySelector('[aria-label="Sort monthly books"]'),clear=main.querySelector('[aria-label="Clear search"]'),results=main.querySelector('#report-results');
  // Keep the initial server-rendered rows. Every later view selects from the
  // full month before taking twenty, never just reorders the default rows.
  function render() {
    let shown=filteredWorkItems(report.items,category,query);
    const selected=sort.value;
    if(selected==='points-asc')shown=[...shown].sort((a,b)=>a.score-b.score || a.key.localeCompare(b.key));
    if(selected.startsWith('work-'))shown=[...shown].sort((a,b)=>(selected==='work-asc'?1:-1)*title(a.book).localeCompare(title(b.book),'en') || a.key.localeCompare(b.key));
    const label={'points-desc':'points','points-asc':'points · ascending','work-asc':'work · A–Z','work-desc':'work · Z–A'}[selected];
    main.querySelector('#report-ranking-heading').textContent=`Top 20 by ${label}`;
    main.querySelector('#report-count').textContent=`${number(shown.length)} ${category||query?'matching':'observed'} works`;
    clear.hidden=!query;
    results.innerHTML=shown.length?listTableHTML(shown.slice(0,20),s,category):`<div class="empty"><h3>No matching books.</h3><p>Try another category or title.</p>${query?'<button id="empty-clear">Clear search</button>':''}${category?'<button id="empty-category">All categories</button>':''}</div>`;
    if(!shown.length) {
      const reset=results.querySelector('#empty-clear');if(reset)reset.onclick=clear.onclick;
      const all=results.querySelector('#empty-category');if(all)all.onclick=()=>{category='';select.value='';render();select.focus();};
    }
    wireVersions(results);
    main.querySelector('#announcement').textContent=`${number(shown.length)} works. Showing ${Math.min(20,shown.length)} by ${label}.`;
  }
  select.onchange=()=>{category=select.value;render();};
  sort.onchange=render;
  input.oninput=()=>{query=input.value;render();};
  clear.onclick=()=>{query='';input.value='';render();input.focus();};
  wireVersions(results);
  // Browsers can restore form values when returning from a detail page after
  // the initial HTML was parsed. Restore the matching view at that point too.
  function restoreControls() {
    query=input.value;category=select.value;
    if(query || category || sort.value!=='points-desc')render();
  }
  restoreControls();
  addEventListener('pageshow',restoreControls);
}
async function listPage() {
  if(category && !manifest.categoryIds.includes(category))category='';
  let returning=returnState(), count=returning?.count||100, request=0, shown=[];
  const main=document.querySelector('main');
  main.innerHTML=`<section class="intro"><h1 class="sr-only">Chaekjang</h1><p>See which books are popular in Korea based on their rankings at three major book retailers: Kyobo, YES24, and Aladin.</p></section>
    <div class="filter-bar" aria-label="Book filters"><section class="period-picker" aria-label="Time period"><div class="period-buttons">${Object.entries(periods).map(([key,label])=>`<button data-period="${key}">${label}</button>`).join('')}</div></section>
    <select class="category-picker" aria-label="Book category"><option value="">All categories</option>${manifest.meta.categoryOptions.map(c=>`<option value="${c.id}">${esc(c.label)}</option>`).join('')}</select>
    <div class="search-controls"><label class="search">${icon('search')}<input aria-label="Search books" placeholder="Search a title, author, or ISBN…"><button type="button" aria-label="Clear search">${icon('close')}</button></label></div></div>
    <div id="coverage"></div><p id="announcement" role="status" class="sr-only" aria-live="polite"></p><section class="list-panel"><div class="list-heading"><h2></h2><p class="range-label"></p></div><div id="results"></div></section>${component('footer',{base:esc(base)})}`;
  const input=main.querySelector('input'), select=main.querySelector('select'), clear=main.querySelector('[aria-label="Clear search"]'), results=main.querySelector('#results');
  input.value=query;select.value=category;
  let timer;
  function change() {count=100;returning=null;clearTimeout(timer);render();}
  main.querySelectorAll('[data-period]').forEach(b=>b.onclick=()=>{period=b.dataset.period;change();});
  select.onchange=()=>{category=select.value;change();};
  input.oninput=()=>{query=input.value;clear.hidden=!query;address();request++;clearTimeout(timer);timer=setTimeout(change,150);};
  clear.onclick=()=>{query='';input.value='';change();input.focus();};
  async function render(focusIndex=null) {
    const token=++request; address();clear.hidden=!query;
    main.querySelectorAll('[data-period]').forEach(b=>{const active=b.dataset.period===period;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    results.innerHTML='<p class="empty" role="status">Loading the list…</p>';
    try {
      const data=await json(manifest.periods[period]);if(token!==request)return;
      const s=data.summary;shown=filteredWorkItems(data.items,category,query);
      main.querySelector('h2').innerHTML=category?`${esc(categoryName(category))}<small>${periods[period]} ranking</small>`:periods[period];
      main.querySelector('.range-label').textContent=rangeLabel(s);
      main.querySelector('#coverage').innerHTML=coverageHTML(s);
      if(!shown.length) {
        results.innerHTML=`<div class="empty"><h3>${query||category?'No matching books.':'No list for this period.'}</h3><p>Try another category, title, or period.</p>${query?'<button id="empty-clear">Clear search</button>':''}${category?'<button id="empty-category">All categories</button>':''}</div>`;
        if(query)results.querySelector('#empty-clear').onclick=clear.onclick;
        if(category)results.querySelector('#empty-category').onclick=()=>{category='';select.value='';change();};return;
      }
      results.innerHTML=listTableHTML(shown.slice(0,count),s,category)+(shown.length>count?`<button class="load-more">Show more · ${count} of ${shown.length}</button>`:'');
      if(returning && Array.isArray(returning.expanded))returning.expanded.filter(k=>typeof k==='string').forEach(k=>expandedWorks.add(k));
      wireVersions(results);
      results.querySelectorAll('.book-title,.author-link,.version-title').forEach(a=>a.onclick=()=>saveReturn({filterKey:filterKey(),count,book:a.closest('tr').querySelector('.book-title').dataset.key,scroll:scrollY,expanded:[...expandedWorks]}));
      const more=results.querySelector('.load-more');if(more)more.onclick=()=>{const start=count;count=Math.min(count+100,shown.length);main.querySelector('#announcement').textContent=`Showing ${count} of ${shown.length} books.`;render(start);};
      const links=[...results.querySelectorAll('.book-title')];
      const target=returning?links.find(a=>a.dataset.key===returning.book):focusIndex!==null?links[focusIndex]:null;
      if(target)requestAnimationFrame(()=>{target.focus({preventScroll:true});if(returning){scrollTo(0,returning.scroll);returning=null;try{sessionStorage.removeItem('shelf-list-return');}catch{}}else target.scrollIntoView({block:'nearest'});});
    } catch(e) {
      if(token!==request)return;
      results.innerHTML=`<p class="notice" role="alert">${esc(e.message)} <button id="retry">Retry</button></p>`;
      results.querySelector('#retry').addEventListener('click',()=>render());
    }
  }
  await render();
}
async function authorPage() {
  const route=location.pathname.slice(base.length).match(/^authors\/([^/]+)\/?$/);
  if(!route || route[1]!==config.author.key)throw Error('This author was not found.');
  const bundle=await json(config.author.bundle), a=bundle.author;
  if(a.key!==config.author.key)throw Error('Incorrect author snapshot.');
  const main=document.querySelector('main');main.className='author-page';
  main.innerHTML=`<nav class="book-back"><a href="${esc(listHref())}">← Back to popular books</a></nav>
    <section class="author-heading"><h1><span lang="${/[가-힣]/.test(a.name)?'ko':'en'}">${esc(a.name)}</span>${a.hangul?` <small lang="ko">${esc(a.hangul)}</small>`:''}</h1>${a.scope==='credit'?'<p>Saved contributor credit</p>':''}</section>
    <div class="list-heading"><h2 id="author-works-heading">Works in the archive <span class="author-work-count">${bundle.items.length}</span></h2></div>
    <section class="period-picker author-periods" aria-label="Time period"><div class="period-buttons">${Object.entries(periods).map(([key,label])=>`<button data-period="${key}">${label}</button>`).join('')}</div><div class="author-period-context"><p class="range-label"></p><div id="coverage"></div></div></section>
    <section class="list-panel" aria-labelledby="author-works-heading"><div id="author-results"></div></section>
    <p class="author-zero-note" hidden>0 points = no appearance in available top-50 lists during this period.</p>
    ${a.scope==='credit'?'<p class="author-scope">The saved credit does not identify an author role clearly. These books share that exact credit.</p>':''}
    <details class="author-evidence"><summary>About this list &amp; credit sources</summary><p>Points sum verified versions across Kyobo, YES24, and Aladin. Only works captured in the saved lists are included. Author credits use exact saved names and reviewed aliases.</p><ul class="source-links">${a.sources.map(s=>`<li>${link(s,a.sourceLabels?.[s] || new URL(s).hostname.replace(/^www\./,''))}</li>`).join('')}</ul></details>
    <p id="announcement" role="status" class="sr-only" aria-live="polite"></p>`;
  function render(announce=false) {
    address();const s=manifest.summaries[period];
    main.querySelectorAll('[data-period]').forEach(b=>{const active=b.dataset.period===period;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    main.querySelector('.range-label').textContent=rangeLabel(s);
    main.querySelector('#coverage').innerHTML=coverageHTML(s);
    const items=[...bundle.items].sort((a,b)=>b.scores[period]-a.scores[period] || a.key.localeCompare(b.key));
    const zeroCount=items.filter(i=>!i.scores[period]).length;
    const grouped=period!=='all' && s.capturedDays && zeroCount>0 && zeroCount<items.length;
    const titleCounts=new Map();items.forEach(i=>titleCounts.set(title(i.book),(titleCounts.get(title(i.book))||0)+1));
    main.querySelector('.author-zero-note').hidden=!s.capturedDays || !(zeroCount || items.some(i=>i.versions?.some(v=>!v.scores[period]))) || Boolean(grouped);
    main.querySelector('#author-results').innerHTML=`<table><caption class="sr-only">Works credited to ${esc(a.name)}, with points across versions for ${range(s)}. Unlisted works remain visible.</caption><thead><tr><th scope="col">Work</th><th scope="col" class="category-column">Category</th><th scope="col" class="points">Points</th></tr></thead><tbody>${items.map((i,index)=>{
      const b=i.book,tag=priority.find(c=>b.classification.categories.includes(c)),score=i.scores[period];
      const e=i.edition;
      const clue=e && titleCounts.get(title(b))>1?`<p class="author-edition-clue">${e.publishers.length?`<span lang="ko">${esc(e.publishers.join(' / '))}</span>`:'Publisher unavailable'}${e.translators.length?` · Translator <span lang="ko">${esc(e.translators.join(', '))}</span>`:''}${e.unresolved?` · ${e.stores.map(k=>names[k]).join(', ')} · Unresolved record`:''}</p>`:'';
      const divider=grouped && index===items.length-zeroCount?`<tr class="author-archive-divider"><td colspan="3"><h3>Elsewhere in the archive <span>${zeroCount}</span></h3><p>No appearances in available top-50 lists during this period.</p></td></tr>`:'';
      return `${divider}<tr class="author-work-row${index%2?' author-row-alternate':''}"><td><a class="book-title" href="${esc(workHref(i.key))}">${titleHTML(b)}</a>${clue}${versionsHTML(i,s,true)}</td><td class="category-column"><span>${esc(categoryName(tag))}</span></td><td class="points${!score&&s.capturedDays?' author-zero-points':''}"><strong>${s.capturedDays?number(score):'—'}</strong></td></tr>`;
    }).join('')}</tbody></table>`;
    wireVersions(main);
    if(announce)main.querySelector('#announcement').textContent=`${periods[period]}, ${range(s)}. ${items.length} works shown.`;
  }
  main.querySelectorAll('[data-period]').forEach(b=>b.onclick=()=>{period=b.dataset.period;render(true);});
  render();
}
function compactEditionHTML(v,b,s) {
  const e=v.edition;
  let selected=false;try{selected=decodeURIComponent(location.hash.slice(1))===editionAnchor(v.key);}catch{}
  return `<li id="${esc(editionAnchor(v.key))}"${selected?' class="edition-selected"':''}><div class="edition-inline"><span class="edition-publisher" lang="ko">${esc(e.publishers.join(' / ')||'Publisher unavailable')}</span>${v.book.title!==b.title?`<span lang="ko">${esc(v.book.title)}</span>`:''}${e.translators.length?`<span>Translator <span lang="ko">${esc(e.translators.join(', '))}</span></span>`:''}${e.isbn?`<span class="edition-identifier">ISBN ${esc(e.isbn)}</span>`:''}<span class="edition-identifier">${e.stores.map(k=>names[k]).join(', ')}${e.unresolved?' · Unresolved edition record':''}</span></div><span class="edition-points" aria-label="${s.capturedDays?number(v.scores[period])+' points':'No complete collections'}">${s.capturedDays?number(v.scores[period]):'—'}</span></li>`;
}
function workSourcesHTML(bundle,s) {
  const listings=Object.values(bundle.listings);
  const unique=(values,key)=>[...new Map(values.map(v=>[key(v),v])).values()];
  const english=unique(listings.filter(b=>b.english).map(b=>b.english),e=>JSON.stringify([e.title,e.source_url,e.relationship_url]));
  const authors=unique(listings.filter(b=>b.english_author).map(b=>b.english_author),a=>a.source_url);
  const categories=unique(listings,b=>JSON.stringify([b.store,b.category]));
  const reviews=unique(listings.filter(b=>b.classification.review).map(b=>b.classification.review),r=>r.source_url);
  const notes=unique(listings.filter(b=>b.edition_note||b.match_review),b=>JSON.stringify([b.edition_note,b.match_review]));
  return `<details><summary>Bookstore listings · all editions</summary><ul class="source-links">${listings.map(b=>`<li>${link(storeUrl(b),names[b.store]+' · '+b.title)}<small lang="ko">${esc(b.publisher)} · ${esc(b.author)}</small><small>${b.isbn?'ISBN '+esc(b.isbn):'No validated ISBN'}${b.raw_isbn&&!b.isbn?' · Saved ISBN: '+esc(b.raw_isbn):''}${b.match_status==='metadata-conflict'?' · Metadata conflict; kept separate':''}</small></li>`).join('')}</ul>${notes.map(b=>`${b.edition_note?`<p>${esc(b.edition_note.label)} · ${esc(b.edition_note.note)} ${link(b.edition_note.source_url,'Edition details')}</p>`:''}${b.match_review?`<p>${link(b.match_review.source_url,'Reviewed edition match')}</p>`:''}`).join('')}</details>
    <details><summary>Work identity &amp; English title evidence</summary><p>${bundle.review?esc(bundle.review.notes):'No additional editions have been verified for this record. Other editions may still appear separately.'}</p>${bundle.review?`<ul class="source-links">${bundle.review.sources.map((u,i)=>`<li>${link(u,'Work publication source '+(i+1))}</li>`).join('')}</ul><p>Reviewed ${esc(bundle.review.reviewed_at)}</p>`:''}${english.length?english.map(e=>`<p>${esc(e.title)} · Reviewed ${esc(e.retrieved_at)}</p><p>${esc(e.note)}</p><ul class="source-links"><li>${link(e.source_url,e.source_name||'Published English title')}</li><li>${link(e.relationship_url,'Korean edition & work relationship')}</li></ul>`).join(''):'<p>No verified English title is saved. The Korean title is preserved.</p>'}${authors.map(a=>`<p>${esc(a.name)} · ${link(a.source_url,'Author source')}</p>`).join('')}</details>
    <details><summary>Original bookstore categories</summary><ul class="source-links">${categories.map(b=>`<li>${names[b.store]} · <span lang="ko">${esc(!b.category||b.category==='nan'?'No category supplied':b.category)}</span></li>`).join('')}</ul>${reviews.map(r=>`<p>${esc(r.notes)} ${link(r.source_url,'Reviewed category source')} · ${esc(r.reviewed_at)}</p>`).join('')}${listings.some(b=>b.classification.staleOverride)?'<p>A previous category review no longer matches the source metadata; saved store labels are used.</p>':''}</details>
    <details><summary>Collection coverage · ${s.capturedDays} of ${s.expectedDays} store-days</summary><p>Missing or incomplete days are excluded. ${s.coverage.map(c=>`${names[c.store]}: ${c.days}/${c.expected} days`).join(' · ')}.</p></details>`;
}
async function workPage() {
  const route=location.pathname.slice(base.length).match(/^works\/([^/]+)\/?$/);
  if(!route || route[1]!==config.work.key)throw Error('This work was not found.');
  const bundle=await json(config.work.bundle),b=bundle.book;
  if(bundle.key!==config.work.key)throw Error('Incorrect work snapshot.');
  const main=document.querySelector('main');main.className='book-page work-page';
  main.innerHTML=`<nav class="book-back"><a href="${esc(fromAuthor?authorHref(fromAuthor,authorPeriod):listHref())}">← ${fromAuthor?'Back to author':'Back to popular books'}</a></nav>
    <article><div class="book-heading work-heading"><div class="work-identity"><h1>${titleHTML(b)}</h1><p class="book-author">${author(b)}</p><p class="book-categories">${b.classification.categories.map(categoryName).map(esc).join(' · ')}</p></div><div class="work-header-points" aria-label="Points in selected period"></div></div>
    <section class="period-picker work-periods" aria-label="Time period"><div class="period-buttons">${Object.entries(periods).map(([key,label])=>`<button data-period="${key}">${label}</button>`).join('')}</div><p class="range-label"></p></section>
    <div id="coverage"></div><div id="history"></div>
    <section class="work-editions" aria-labelledby="edition-heading"><div class="edition-heading"><h2 id="edition-heading">${bundle.versions.length} ${bundle.versions.length===1?'Edition':'Editions'}</h2><span>Individual points</span></div><ul class="compact-editions"></ul></section>
    <section class="work-sources" aria-labelledby="sources-heading"><h2 id="sources-heading">Sources &amp; publication details</h2><div class="work-source-details"></div></section>
    <p id="announcement" role="status" class="sr-only" aria-live="polite"></p></article>`;
  // Source disclosures remain open when the selected period changes.
  const sourceDetails=main.querySelector('.work-source-details');
  function render(announce=false) {
    address();const s=manifest.summaries[period];
    main.querySelector('.book-back a').href=fromAuthor?authorHref(fromAuthor,authorPeriod):listHref();
    main.querySelectorAll('[data-author]').forEach(a=>a.href=authorHref(a.dataset.author));
    main.querySelectorAll('[data-period]').forEach(button=>{const active=button.dataset.period===period;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
    main.querySelector('.range-label').textContent=rangeLabel(s);
    main.querySelector('#coverage').innerHTML=s.capturedDays?'':'<p class="notice" role="status">No complete collections in this period.</p>';
    main.querySelector('.work-header-points').innerHTML=`<strong>${s.capturedDays?number(bundle.scores[period]):'—'}</strong><p class="work-score-label">Combined points · ${periods[period]}</p><p class="work-store-points">${Object.entries(names).map(([key,name])=>`<span>${name} <b>${s.capturedDays?number(bundle.contributions[period][key]||0):'—'}</b></span>`).join('')}</p>`;
    main.querySelector('.compact-editions').innerHTML=bundle.versions.map(v=>compactEditionHTML(v,b,s)).join('');
    const open=[...sourceDetails.querySelectorAll('details')].map(d=>d.open);
    sourceDetails.innerHTML=workSourcesHTML(bundle,s);
    sourceDetails.querySelectorAll('details').forEach((d,i)=>d.open=!!open[i]);
    if(announce)main.querySelector('#announcement').textContent=`${periods[period]}. ${s.capturedDays?number(bundle.scores[period])+' points':'No complete collections'}.`;
  }
  main.querySelectorAll('[data-period]').forEach(button=>button.onclick=()=>{period=button.dataset.period;render(true);});
  render();chart(bundle);
  if(location.hash){try{document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({block:'center'});}catch{}}
}
function storeUrl(b) {
  return b.edition_note?.source_url || (b.store==='kyobo'?`https://product.kyobobook.co.kr/detail/${encodeURIComponent(b.source_id)}`:b.store==='yes24'?`https://www.yes24.com/product/goods/${encodeURIComponent(b.source_id)}`:`https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=${encodeURIComponent(b.source_id)}`);
}
async function bookPage() {
  const route=location.pathname.slice(base.length).match(/^books\/([^/]+)\/?$/);
  if(!route || decodeURIComponent(route[1])!==config.book.key)throw Error('This book was not found.');
  // Replace the alias entry so Back returns directly to the originating list.
  location.replace(workHref(config.book.work)+'#'+encodeURIComponent(editionAnchor(config.book.edition)));
}
function chart(bundle) {
  const ranks=new Map(bundle.history.weeks.map(p=>[p.from,p]));
  const points=manifest.calendar.weeks.map(p=>({...p,...ranks.get(p.from)}));
  let plotLeft=34,plotWidth=500,plotHeight=128;
  const x=i=>plotLeft+i/Math.max(1,points.length-1)*plotWidth,y=r=>12+(r-1)/49*plotHeight;
  const container=document.querySelector('#history');
  let svg,cursor,marker,readout,previousLayout='';
  let index=points.length-1;
  function select(i,announce=false) {
    index=Math.max(0,Math.min(points.length-1,i));const p=points[index];
    cursor.setAttribute('x1',x(index));cursor.setAttribute('x2',x(index));
    marker.style.display=p.rank===null?'none':'';if(p.rank!==null){marker.setAttribute('cx',x(index));marker.setAttribute('cy',y(p.rank));}
    const label=p.rank!==null?'Average rank '+new Intl.NumberFormat('en',{maximumFractionDigits:1}).format(p.rank):p.capturedDays?'Outside captured top 50':'No complete collections';
    const coverage=`${p.rankedDays}/${p.days} days ranked${p.partial?' · Partial week':''}`;
    readout.innerHTML=`<time datetime="${p.from}">Week of ${rangeLabel(p)}</time><span title="${p.observations} ranked edition–bookstore observations; ${p.capturedDays} of ${p.days*3} complete store-days">${coverage}</span><span>${label}</span>`;
    if(announce)container.querySelector('#history-announcement').textContent=`Week of ${rangeLabel(p)}. ${coverage}. ${label}.`;
  }
  function draw() {
    const mobile=matchMedia('(max-width: 700px)').matches;
    const width=container.getBoundingClientRect().width,height=mobile?185:170;
    if(!width || previousLayout===`${mobile}:${width}`)return;
    previousLayout=`${mobile}:${width}`;
    const focused=svg && document.activeElement===svg;
    plotLeft=mobile?30:34;plotWidth=width-plotLeft-12;plotHeight=height-42;
    const path=points.map((p,i)=>p.rank===null?'':`${i&&points[i-1].rank!==null?'L':'M'}${x(i)},${y(p.rank)}`).join(' ');
    const isolated=points.map((p,i)=>p.rank!==null&&points[i-1]?.rank==null&&points[i+1]?.rank==null?`<circle class="history-isolated" cx="${x(i)}" cy="${y(p.rank)}" r="1.7" stroke="none"/>`:'').join('');
    const ticks=(mobile?[0,.5,1]:[0,.25,.5,.75,1]).map(f=>{const i=Math.round(f*(points.length-1));return `<text x="${x(i)}" y="${height-7}" text-anchor="${f===0?'start':f===1?'end':'middle'}">${new Intl.DateTimeFormat('en',{month:'short',timeZone:'UTC'}).format(new Date(points[i].from+'T00:00:00Z'))}</text>`;}).join('');
    container.innerHTML=`<section class="rank-history" aria-label="Weekly average ranking history across editions"><div class="history-heading"><h2>Weekly average rank <span>· Past Year</span></h2></div><svg viewBox="0 0 ${width} ${height}" role="img" tabindex="0" aria-label="Weekly average rank across editions over the past year. Use Left and Right arrow keys to explore weeks; Home and End jump to the first and last week." aria-describedby="history-readout">${[1,25,50].map(r=>`<g><line x1="${plotLeft}" x2="${plotLeft+plotWidth}" y1="${y(r)}" y2="${y(r)}" class="history-grid"/><text x="${plotLeft-9}" y="${y(r)+4}" text-anchor="end">${r}</text></g>`).join('')}<g class="history-series"><path d="${path}"/>${isolated}</g><line id="cursor" y1="12" y2="${12+plotHeight}" class="history-cursor"/><circle id="marker" r="3" fill="#963f34" stroke="#f8f4eb" stroke-width="1.5"/>${ticks}</svg>${points.some(p=>p.rank!==null)?'':'<p class="history-empty">No rankings in the captured lists during this year.</p>'}<div class="history-readout" id="history-readout"></div><p id="history-announcement" class="sr-only" role="status" aria-live="polite" aria-atomic="true"></p></section>`;
    svg=container.querySelector('svg');cursor=container.querySelector('#cursor');marker=container.querySelector('#marker');readout=container.querySelector('#history-readout');
    svg.onkeydown=e=>{const next={ArrowLeft:index-1,ArrowRight:index+1,Home:0,End:points.length-1}[e.key];if(next!==undefined){e.preventDefault();select(next,true);}};
    const pointer=e=>{const bounds=svg.getBoundingClientRect();select(Math.round((((e.clientX-bounds.left)/bounds.width)*width-plotLeft)/plotWidth*(points.length-1)));};
    svg.onpointermove=pointer;svg.onpointerdown=pointer;select(index);
    if(focused)svg.focus({preventScroll:true});
  }
  draw();
  new ResizeObserver(draw).observe(container);
}

async function start() {
  const main=document.querySelector('main');
  // Monthly pages are self-contained: neither a failed data fetch nor delayed
  // JavaScript should replace their indexable default content with a spinner.
  if(config.archive) {
    header(config.meta);return;
  }
  if(config.report) {
    manifest={meta:config.report.meta,categoryIds:config.report.categoryIds};
    header(manifest.meta);reportPage();return;
  }
  main.className='';
  main.innerHTML='<p class="empty" role="status">Loading the page…</p>';
  try {
    if(config.version!==4 || !/^\/(?:[A-Za-z0-9_-]+\/)*$/.test(base))throw Error('Unsupported snapshot. Please reload.');
    // Every entry page pins a manifest, so a loaded page keeps one consistent
    // data release while the daily publisher updates the public branch.
    manifest=await json(config.manifest);if(manifest.version!==4)throw Error('Unsupported snapshot. Please reload.');
    header(manifest.meta);
    if(config.author)await authorPage();else if(config.work)await workPage();else if(config.book)await bookPage();else if(location.pathname===base)await listPage();else throw Error('Page not found.');
  } catch(e) {
    main.innerHTML=`<section class="empty" role="alert"><h1>Page unavailable</h1><p>${esc(e.message)}</p><button id="page-retry">Retry</button><p><a href="${esc(base)}">Back to popular books</a></p></section>`;
    main.querySelector('#page-retry').onclick=start;
  }
}
await start();
