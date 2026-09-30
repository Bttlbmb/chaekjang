const METHOD_HTML="<p>Every captured top 50 contributes points: <strong> rank 1 earns 50, rank 2 earns 49, down to 1 point for rank 50. </strong> Points are added across all three stores throughout the selected period. Daily points accumulate across the period. All stores have equal weight.</p>\n<p>This is a dashboard popularity score, not sales, market share, or an official national chart. Longer periods reward sustained presence. Equal scores share a position; the next position skips the tied entries.</p>\n<p>Matching uses validated ISBNs with compatible titles and contributors. Different editions and uncertain matches stay separate. If an edition has multiple listings in one store, only its highest-ranked listing on each day contributes; all source listings remain visible in its notes.</p>\n<p>Absence from a complete top 50 contributes zero points. A missing or incomplete store collection is excluded and flagged; its ranks are unknown. A score using fewer stores has a lower possible maximum.</p>\n<p>Presets end on the latest collection date in the archive. Today means that latest day; Past Week covers 7 days and Past Month covers 30 days, including the last day. This Year starts on January 1. Exact dates are always shown.</p>\n<p>Dates are collection dates. Store reporting windows may differ. Kyobo’s broad list can include merchandise, which retains its source position.</p>\n<p>The history chart averages the book’s observed top-50 ranks across all three stores. Missing collections and unlisted stores are excluded; the readout shows how many stores contribute. The line uses light three-day smoothing, with twice the weight on the central day. Gaps stay empty, and the marker and readout retain the actual daily average.</p>\n<p>English titles are sourced published titles or sourced English originals. Open a title to see its evidence. Unmatched titles remain in Korean.</p>\n<p>Categories use saved bookstore labels and reviewed corrections. A book may belong to several categories. Literature includes mixed labels such as novels, poetry and drama; Fiction requires more specific evidence. Categories use all matched source listings. Category filters keep points unchanged and rank books within that category. Search retains positions in the current list. The overview shows one primary category; all categories are shown on book pages. These are books from the captured overall top 50, not complete genre charts.</p>\n";
const AUTHOR_NAMES={"Yang Gui-ja":"양귀자","Kim Ae-ran":"김애란","Choi TaeSung":"최태성","HANRORO":"한로로","Rando Kim":"김난도","POSTERSHOP":"유래혁","Song Huigu":"송희구","Seong Haena":"성해나","Hwang Sok-yong":"황석영","Na Min-ae":"나민애","Gu Byeong-mo":"구병모","Na Taejoo":"나태주","Rhyu Simin":"유시민","Taesoo":"태수","Hyung Bae Moon":"문형배","Park Min-gyu":"박민규","Song Gilyoung":"송길영","Kim Hye-young":"김혜영","Jung Dae-gun":"정대건","Han Kang":"한강","Eunmi Chae":"채은미","Jeong Ji A":"정지아","Lee Hae-chan":"이해찬","Luly":"루리","Cheon Seonran":"천선란","Jo Jung-Rae":"조정래","Choi Kang-rok":"최강록","Common Siblings":"흔한남매","Choi Eunyoung":"최은영","Su-young Ryu":"류수영","Baek Heena":"백희나","Park Sung-jun":"박성준","Woo Hyouk Lee":"이우혁","Cheon Myeong-kwan":"천명관","Yoo Hwi-woon":"유휘운","Jeong You-jeong":"정유정","MK Kim":"김미경","Taewoong Park":"박태웅","Park Jun-cheol":"박준철","Kim Cho Yeop":"김초엽","Hong Min-jung":"홍민정","Lee Hae-In":"이해인","Kim Jin-myung":"김진명","Park Wan-seo":"박완서","Eun Heekyung":"은희경","Yi Mun-yol":"이문열","Oh Tae-min":"오태민","Pomnyun Sunim":"법륜","Sang Young Park":"박상영","Miye Lee":"이미예","Lee Yeongdo":"이영도","Choi Yuna":"최유나","Illhong":"일홍","Wi Soo Jung":"위수정","Hackers Language Research Institute":"해커스 어학연구소","Hwang Seong-gu":"황성구","Jang Hang-jun":"장항준"};
// Browser-native JavaScript: served as-is, with no framework or build runtime.
const config = JSON.parse(document.getElementById('snapshot-data').textContent);
const base = config.base;
const url = path => base + path.replace(/^\//, '');
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const names = {kyobo:'Kyobo',yes24:'YES24',aladin:'Aladin'};
const periods = {today:'Today',week:'Past Week',month:'Past Month',year:'This Year',all:'All Time'};
const priority = ['non-book','comics','study','poetry-drama','self-help','business','children','fiction','nonfiction','literature','unclassified'];
const formatDate = (day, short=false) => new Intl.DateTimeFormat('en-GB',{day:'numeric',month:short?'short':'long',year:'numeric',timeZone:'UTC'}).format(new Date(day+'T00:00:00Z'));
const number = n => n.toLocaleString('en-US');
const title = b => b.english?.title || b.title;
const range = s => s.from===s.to ? formatDate(s.to) : `${formatDate(s.from)} – ${formatDate(s.to)}`;
const titleHTML = b => `<span lang="${b.english?'en':'ko'}">${esc(title(b))}</span>${b.english?` <small lang="ko">${esc(b.title)}</small>`:''}`;
const icon = kind => `<svg width="${kind==='search'?17:14}" height="${kind==='search'?17:14}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">${kind==='search'?'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>':kind==='close'?'<path d="m6 6 12 12M6 18 18 6"/>':'<circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7v1"/>'}</svg>`;
function author(b) {
  const name=b.english_author?.name || b.english?.author || b.author || '';
  return name.split(/(\s*;\s*)/).map(part => {
    const hangul=AUTHOR_NAMES[part.replace(/ et al\.$/,'')];
    return `<span>${esc(part)}</span>${hangul && b.author?.includes(hangul)?`<span class="author-hangul" lang="ko"> ${esc(hangul)}</span>`:''}`;
  }).join('');
}
function link(href,label) {
  try { if (!['https:','http:'].includes(new URL(href).protocol)) return esc(label); } catch {return esc(label);}
  return `<a href="${esc(href)}" target="_blank" rel="noreferrer">${esc(label)} ↗</a>`;
}
const cache=new Map();
async function json(path) {
  if (!/^\/data\/[a-z]+-[a-f0-9]{24}\.json$/.test(path)) throw Error('Invalid snapshot data path.');
  if (!cache.has(path)) {
    cache.set(path, fetch(url(path)).then(r=>{if(!r.ok)throw Error('This snapshot is unavailable. Please reload and try again.');return r.json();}).catch(e=>{cache.delete(path);throw e;}));
    if(cache.size>10)cache.delete(cache.keys().next().value);
  }
  return cache.get(path);
}
const params=new URLSearchParams(location.search);
let period=Object.hasOwn(periods,params.get('period'))?params.get('period'):'month';
let query=params.has('view')?'':params.get('q')||'';
let category=params.get('category')||'';
const filters=()=>new URLSearchParams({period,q:query,category}).toString();
const filterKey=()=>JSON.stringify([period,query,category]);
const saveReturn=state=>{try{sessionStorage.setItem('shelf-list-return',JSON.stringify(state));}catch{}};
function returnState() {
  try {
    const value=JSON.parse(sessionStorage.getItem('shelf-list-return')||'null');
    return value?.filterKey===filterKey() && Number.isInteger(value.count) && value.count>=100 && value.count<=100000 && typeof value.book==='string' && Number.isFinite(value.scroll) && value.scroll>=0 ? value:null;
  } catch{return null;}
}
function address() { history.replaceState(null,'',location.pathname+'?'+filters()); }
function header(meta) {
  document.querySelector('header').innerHTML=`<a class="brand" href="${esc(base)}" aria-label="Chaekjang home"><span class="brand-mark" lang="ko" aria-hidden="true">책장</span><span>Chaekjang</span></a><div class="header-meta"><p class="collection-date">Data coverage: <time datetime="${meta.first}">${formatDate(meta.first)}</time> – <time datetime="${meta.last}">${formatDate(meta.last)}</time></p><button class="about">${icon('info')} How points work</button></div>`;
  const dialog=document.querySelector('dialog');
  dialog.innerHTML='<div class="modal-inner"><button class="icon-button close" aria-label="Close details">×</button><h2 class="detail-title">How the list works</h2>'+METHOD_HTML+'</div>';
  const opener=document.querySelector('.about');
  opener.onclick=()=>dialog.showModal();
  dialog.querySelector('.close').onclick=()=>dialog.close();
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  dialog.addEventListener('close',()=>opener.focus());
}
let manifest;
const categoryName=id=>manifest.meta.categoryOptions.find(c=>c.id===id)?.label || id;
async function listPage() {
  document.title='Chaekjang — Korean Bookstore Rankings';
  if(category && !manifest.categoryIds.includes(category))category='';
  let returning=returnState(), count=returning?.count||100, request=0, shown=[];
  const main=document.querySelector('main');
  main.innerHTML=`<section class="intro"><h1 class="sr-only">Chaekjang</h1><p>See which books are popular in Korea, based on daily snapshots of top-50 lists from three major book retailers: Kyobo, YES24, and Aladin.</p></section>
    <div class="filter-bar" aria-label="Book filters"><section class="period-picker" aria-label="Time period"><div class="period-buttons">${Object.entries(periods).map(([key,label])=>`<button data-period="${key}">${label}</button>`).join('')}</div></section>
    <select class="category-picker" aria-label="Book category"><option value="">All categories</option>${manifest.meta.categoryOptions.map(c=>`<option value="${c.id}">${esc(c.label)}</option>`).join('')}</select>
    <div class="search-controls"><label class="search">${icon('search')}<input aria-label="Search books" placeholder="Search a title, author, or ISBN…"><button type="button" aria-label="Clear search">${icon('close')}</button></label></div></div>
    <div id="coverage"></div><p id="announcement" role="status" class="sr-only" aria-live="polite"></p><section class="list-panel"><div class="list-heading"><h2></h2><p class="range-label"></p></div><div id="results"></div></section>`;
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
      const s=data.summary;shown=data.items;
      if(category) {
        let previous=null,position=0;
        shown=shown.filter(i=>i.book.classification.categories.includes(category)).map((i,index)=>{if(i.score!==previous)position=index+1;previous=i.score;return {...i,position};});
      }
      const q=query.normalize('NFKC').trim().toLowerCase();
      if(q)shown=shown.filter(i=>i.search.some(v=>v.includes(q)));
      main.querySelector('h2').innerHTML=category?`${esc(categoryName(category))}<small>${periods[period]} ranking</small>`:periods[period];
      main.querySelector('.range-label').textContent=range(s);
      main.querySelector('#coverage').innerHTML=s.missing.length ? s.capturedDays ? `<details class="coverage-note"><summary>${s.capturedDays} of ${s.expectedDays} store-days available</summary><p>Missing or incomplete days are excluded. ${s.coverage.map(c=>`${names[c.store]}: ${c.days}/${c.expected} days`).join(' · ')}.</p></details>`:'<p class="notice" role="status">No complete collections in this period.</p>':'';
      if(!shown.length) {
        results.innerHTML=`<div class="empty"><h3>${query||category?'No matching books.':'No list for this period.'}</h3><p>Try another category, title, or period.</p>${query?'<button id="empty-clear">Clear search</button>':''}${category?'<button id="empty-category">All categories</button>':''}</div>`;
        if(query)results.querySelector('#empty-clear').onclick=clear.onclick;
        if(category)results.querySelector('#empty-category').onclick=()=>{category='';select.value='';change();};return;
      }
      results.innerHTML=`<table><caption class="sr-only">Popularity scores for ${range(s)} ${category?'within '+esc(categoryName(category)):'across all categories'}. Equal scores share a position.</caption><thead><tr><th class="position">Rank</th><th>Book / author</th><th class="category-column">Category</th><th class="points">Points</th></tr></thead><tbody>${shown.slice(0,count).map(i=>{
        const b=i.book,tag=priority.find(c=>b.classification.categories.includes(c));
        return `<tr><td class="position ${i.position<=3?'leading':''}">${String(i.position).padStart(2,'0')}</td><td><a class="book-title" data-key="${esc(i.key)}" href="${esc(url('/books/'+encodeURIComponent(b.key)+'/?'+filters()))}">${titleHTML(b)}</a><p class="author">${author(b)}${b.edition_note?`<span class="edition-label"> · ${esc(b.edition_note.label)}</span>`:''}</p></td><td class="category-column"><span>${esc(categoryName(tag))}</span></td><td class="points"><strong>${number(i.score)}</strong></td></tr>`;
      }).join('')}</tbody></table>${shown.length>count?`<button class="load-more">Show more · ${count} of ${shown.length}</button>`:''}`;
      results.querySelectorAll('.book-title').forEach(a=>a.onclick=()=>saveReturn({filterKey:filterKey(),count,book:a.dataset.key,scroll:scrollY}));
      const more=results.querySelector('.load-more');if(more)more.onclick=()=>{const start=count;count=Math.min(count+100,shown.length);main.querySelector('#announcement').textContent=`Showing ${count} of ${shown.length} books.`;render(start);};
      const links=[...results.querySelectorAll('.book-title')];
      const target=returning?links.find(a=>a.dataset.key===returning.book):focusIndex!==null?links[focusIndex]:null;
      if(target)requestAnimationFrame(()=>{target.focus({preventScroll:true});if(returning){scrollTo(0,returning.scroll);returning=null;try{sessionStorage.removeItem('shelf-list-return');}catch{}}else target.scrollIntoView({block:'nearest'});});
    } catch(e) {if(token===request)results.innerHTML=`<p class="notice" role="alert">${esc(e.message)} <button id="retry">Retry</button></p>`;results.querySelector('#retry')?.addEventListener('click',()=>render());}
  }
  await render();
}
function storeUrl(b) {
  return b.edition_note?.source_url || (b.store==='kyobo'?`https://product.kyobobook.co.kr/detail/${encodeURIComponent(b.source_id)}`:b.store==='yes24'?`https://www.yes24.com/product/goods/${encodeURIComponent(b.source_id)}`:`https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=${encodeURIComponent(b.source_id)}`);
}
async function bookPage() {
  const route=location.pathname.slice(base.length).match(/^books\/([^/]+)\/?$/);
  if(!route || decodeURIComponent(route[1])!==config.book.key)throw Error('This book was not found.');
  address();const bundle=await json(config.book.bundle), keys=Object.values(bundle.listings), page=bundle.periods[period];
  const book=page?bundle.listings[page.book]:keys.find(b=>b.english)||keys.find(b=>b.english_author)||bundle.listings[config.book.key];
  if(!book)throw Error('This book was not found.');
  const s=manifest.summaries[period], c=book.classification, e=book.english;
  document.title=title(book)+' · Chaekjang';
  const main=document.querySelector('main');main.className='book-page';
  main.innerHTML=`<nav class="book-back"><a href="${esc(url('/?'+filters()))}">← Back to popular books</a></nav><article><div class="book-heading"><h1>${titleHTML(book)}</h1><p class="book-author">${author(book)}${book.edition_note?`<span class="edition-label"> · ${esc(book.edition_note.label)}</span>`:''}</p><p class="book-categories">${c.categories.map(categoryName).map(esc).join(' · ')}</p></div>
  <div class="book-page-grid"><div class="book-primary"><div id="history"></div><div class="book-sources"><h3>Categories</h3><p>Based on saved labels across all matched stores.${c.status==='conflicting'?' Conflicting labels leave the broad classification unresolved.':''}${c.staleOverride?' A previous review no longer matches the source metadata; saved store labels are used.':''}</p><ul class="source-links">${c.evidence.map(r=>`<li>${names[r.store]} · <span lang="ko">${esc(!r.category||r.category==='nan'?'No category supplied':r.category)}</span></li>`).join('')}</ul>${c.review?`<p>${esc(c.review.notes)} ${link(c.review.source_url,'Reviewed source')} · ${esc(c.review.reviewed_at)}</p>`:''}
  <h3>Source listings</h3>${book.edition_note?`<p>${esc(book.edition_note.note)} ${link(book.edition_note.source_url,'Edition details')}</p>`:''}<p class="small">Validated ISBNs and compatible metadata connect editions. Uncertain matches stay separate.</p><ul class="source-links">${keys.map(b=>`<li>${link(storeUrl(b),names[b.store]+' · '+b.title)}<small>${esc(b.author)} · ${esc(b.isbn||'No validated ISBN')}${b.match_status==='metadata-conflict'?' · Metadata conflict; kept separate':''}</small></li>`).join('')}</ul>${book.match_review?`<p class="small">Same edition verified from publication details. ${link(book.match_review.source_url,'Edition source')}</p>`:''}
  <h3>English sources</h3>${book.english_author?`<p>${author(book)} · ${link(book.english_author.source_url,'Author source')}</p>`:''}${e?`<p>Reviewed ${esc(e.retrieved_at)}</p><p>${esc(e.note)}</p><p>${link(e.source_url,e.source_name)}</p><p>${link(e.relationship_url,'Korean edition & work relationship')}</p>`:'<p>No verified English title is saved for this edition. Its Korean title is preserved.</p>'}</div></div>
  <aside class="book-points" aria-label="Points in selected period"><p class="detail-score"><strong>${number(page?.score||0)}</strong> points · ${range(s)}</p><h3>Where the points come from</h3><ul class="contributions">${s.coverage.map(c=>{
    const contribution=page?.contributions.find(r=>r.store===c.store),rank=contribution?.rank;
    const label=rank!==undefined?(s.days===1?'Rank #':'Best rank #')+rank:c.days?'Not in captured top 50':'No complete collections';
    return `<li><span><i class="dot ${c.store}"></i>${names[c.store]} <small>${label}</small></span><strong>${number(contribution?.points||0)} pts</strong></li>`;
  }).join('')}</ul>${s.missing.length?`<p>Stores with excluded missing or incomplete days: ${s.missing.map(k=>names[k]).join(', ')}.</p>`:''}${page?.duplicateListings?'<p>Multiple listings share this edition in a store. Only the highest-ranked listing each day contributes points.</p>':''}</aside></div></article>`;
  chart(bundle);
}
function chart(bundle) {
  const ranks=new Map(bundle.ranks.map(([day,rank,score,count])=>[day,{rank,score,count}]));
  const points=manifest.calendar.days.map(([day,captured])=>({day,captured,...(ranks.get(Date.parse(day+'T00:00:00Z')/86400000)||{rank:null,count:0})}));
  const x=i=>34+i/Math.max(1,points.length-1)*500,y=r=>12+(r-1)/49*142;
  const smooth=points.map((p,i)=>{if(p.rank===null)return null;let sum=p.rank*2,weight=2;for(const j of [i-1,i+1])if(points[j]?.rank!=null){sum+=points[j].rank;weight++;}return sum/weight;});
  const path=smooth.map((r,i)=>r===null?'':`${i&&smooth[i-1]!==null?'L':'M'}${x(i)},${y(r)}`).join(' ');
  const isolated=points.map((p,i)=>p.rank!==null&&points[i-1]?.rank==null&&points[i+1]?.rank==null?`<circle cx="${x(i)}" cy="${y(p.rank)}" r="2" fill="#963f34"/>`:'').join('');
  const ticks=[0,.25,.5,.75,1].map(f=>{const i=Math.round(f*(points.length-1));return `<text x="${x(i)}" y="177" text-anchor="${f===0?'start':f===1?'end':'middle'}">${new Intl.DateTimeFormat('en',{month:'short',timeZone:'UTC'}).format(new Date(points[i].day+'T00:00:00Z'))}</text>`;}).join('');
  document.querySelector('#history').innerHTML=`<section class="rank-history" aria-label="Average bookstore ranking history"><div class="history-heading"><h3>Average Rank · Past Year</h3></div><svg viewBox="0 0 550 184" role="img" tabindex="0" aria-label="Average bookstore rank over the past year. Use Left and Right arrow keys to explore dates; Home and End jump to the first and last day." aria-describedby="history-readout">${[1,25,50].map(r=>`<g><line x1="34" x2="534" y1="${y(r)}" y2="${y(r)}" class="history-grid"/><text x="25" y="${y(r)+4}" text-anchor="end">${r}</text></g>`).join('')}<g fill="none" stroke="#963f34" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"><path d="${path}"/>${isolated}</g><line id="cursor" y1="12" y2="154" class="history-cursor"/><circle id="marker" r="3" fill="#963f34" stroke="#f8f4eb" stroke-width="1.5"/>${ticks}</svg>${points.some(p=>p.rank!==null)?'':'<p class="history-empty">No rankings in the captured lists during this year.</p>'}<div class="history-readout" id="history-readout"></div></section>`;
  const svg=document.querySelector('.rank-history svg'),cursor=document.querySelector('#cursor'),marker=document.querySelector('#marker'),readout=document.querySelector('#history-readout');
  let index=points.length-1;
  function select(i) {
    index=Math.max(0,Math.min(points.length-1,i));const p=points[index];
    cursor.setAttribute('x1',x(index));cursor.setAttribute('x2',x(index));
    marker.style.display=p.rank===null?'none':'';if(p.rank!==null){marker.setAttribute('cx',x(index));marker.setAttribute('cy',y(p.rank));}
    const label=p.rank!==null?'Average rank '+new Intl.NumberFormat('en',{maximumFractionDigits:1}).format(p.rank):p.captured?'Outside captured top 50':'No complete collections';
    const coverage=[];if(p.count)coverage.push(`${p.count} of 3 stores ranked this book`);if(p.captured-p.count)coverage.push(`unlisted in ${p.captured-p.count}`);if(3-p.captured)coverage.push(`${3-p.captured} without a complete collection`);
    readout.innerHTML=`<time datetime="${p.day}">${formatDate(p.day,true)}</time><strong>${label}</strong><span>${coverage.join(' · ')}</span>`;
  }
  svg.onkeydown=e=>{const next={ArrowLeft:index-1,ArrowRight:index+1,Home:0,End:points.length-1}[e.key];if(next!==undefined){e.preventDefault();select(next);}};
  const pointer=e=>{const bounds=svg.getBoundingClientRect();select(Math.round((((e.clientX-bounds.left)/bounds.width)*550-34)/500*(points.length-1)));};
  svg.onpointermove=pointer;svg.onpointerdown=pointer;select(index);
}
try {
  if(config.version!==3 || !/^\/(?:[A-Za-z0-9_-]+\/)*$/.test(base))throw Error('Unsupported snapshot. Please reload.');
  manifest=await json(config.manifest);if(manifest.version!==3)throw Error('Unsupported snapshot. Please reload.');
  header(manifest.meta);
  if(config.book)await bookPage();else if(location.pathname===base)await listPage();else throw Error('Page not found.');
} catch(e) {
  document.querySelector('main').innerHTML=`<section class="empty" role="alert"><h1>Page unavailable</h1><p>${esc(e.message)}</p><a href="${esc(base)}">Back to popular books</a></section>`;
}
