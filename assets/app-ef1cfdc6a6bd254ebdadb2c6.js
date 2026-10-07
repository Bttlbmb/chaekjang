const AUTHOR_NAMES={"Yang Gui-ja":"양귀자","Kim Ae-ran":"김애란","Choi TaeSung":"최태성","HANRORO":"한로로","Rando Kim":"김난도","POSTERSHOP":"유래혁","Song Huigu":"송희구","Seong Haena":"성해나","Hwang Sok-yong":"황석영","Na Min-ae":"나민애","Gu Byeong-mo":"구병모","Na Taejoo":"나태주","Rhyu Simin":"유시민","Taesoo":"태수","Hyung Bae Moon":"문형배","Park Min-gyu":"박민규","Song Gilyoung":"송길영","Kim Hye-young":"김혜영","Jung Dae-gun":"정대건","Han Kang":"한강","Eunmi Chae":"채은미","Jeong Ji A":"정지아","Lee Hae-chan":"이해찬","Luly":"루리","Cheon Seonran":"천선란","Jo Jung-Rae":"조정래","Choi Kang-rok":"최강록","Common Siblings":"흔한남매","Choi Eunyoung":"최은영","Su-young Ryu":"류수영","Baek Heena":"백희나","Park Sung-jun":"박성준","Woo Hyouk Lee":"이우혁","Cheon Myeong-kwan":"천명관","Yoo Hwi-woon":"유휘운","Jeong You-jeong":"정유정","MK Kim":"김미경","Taewoong Park":"박태웅","Park Jun-cheol":"박준철","Kim Cho Yeop":"김초엽","Hong Min-jung":"홍민정","Lee Hae-In":"이해인","Kim Jin-myung":"김진명","Park Wan-seo":"박완서","Eun Heekyung":"은희경","Yi Mun-yol":"이문열","Oh Tae-min":"오태민","Pomnyun Sunim":"법륜","Sang Young Park":"박상영","Miye Lee":"이미예","Lee Yeongdo":"이영도","Choi Yuna":"최유나","Illhong":"일홍","Wi Soo Jung":"위수정","Hackers Language Research Institute":"해커스 어학연구소","Hwang Seong-gu":"황성구","Jang Hang-jun":"장항준"};
const COMPONENTS={"categoryPriority":["non-book","comics","study","poetry-drama","self-help","business","children","fiction","nonfiction","literature","unclassified"],"header":"<a class=\"brand\" href=\"{{base}}\" aria-label=\"{{homeLabel}}\"><span class=\"brand-mark\" lang=\"ko\" aria-hidden=\"true\">책장</span><span>Chaekjang</span></a><div class=\"header-meta\"><button class=\"about\" disabled><span class=\"help-mark\" aria-hidden=\"true\">?</span><span class=\"about-label\">{{pointsHelpLabel}}</span></button></div>","title":"<span lang=\"{{lang}}\">{{title}}</span>{{korean}}","row":"<tr><td class=\"position\">{{position}}</td><td><div class=\"book-row\"><div class=\"book-primary\"><a class=\"book-title\" data-key=\"{{key}}\" href=\"{{href}}\">{{title}}</a><div class=\"book-meta\"><p class=\"author\">{{author}}{{editionLabel}}</p>{{versions}}</div></div></div></td><td class=\"category-column\"><span>{{category}}</span></td><td class=\"points\"><strong>{{score}}</strong></td></tr>","table":"<table><caption class=\"sr-only\">{{caption}}</caption><thead><tr><th scope=\"col\" class=\"position\"><button type=\"button\" class=\"table-sort\" data-sort=\"rank\" disabled>{{rankLabel}}</button></th><th scope=\"col\"><button type=\"button\" class=\"table-sort\" data-sort=\"work\" disabled>{{workAuthorLabel}}</button></th><th scope=\"col\" class=\"category-column\"><button type=\"button\" class=\"table-sort\" data-sort=\"category\" disabled>{{categoryLabel}}</button></th><th scope=\"col\" class=\"points\" aria-sort=\"descending\"><button type=\"button\" class=\"table-sort\" data-sort=\"points\" disabled>{{pointsLabel}}</button></th></tr></thead><tbody>{{rows}}</tbody></table>","versions":"<details class=\"work-versions\" data-work=\"{{key}}\"><summary>{{versionsLabel}}</summary><div class=\"version-content\"><ul class=\"compact-editions\">{{rows}}</ul></div></details>","editionFields":"<span class=\"edition-title\">{{identity}}</span><span class=\"edition-metadata\">{{publisher}}{{format}}{{translator}}{{isbn}}{{stores}}{{unresolved}}{{unranked}}</span>","version":"<li><a class=\"edition-inline version-title\" href=\"{{href}}\">{{fields}}</a><span class=\"edition-points\" aria-label=\"{{scoreLabel}}\">{{score}}</span></li>","footer":"<footer class=\"author-scope site-footer\"><p>{{workScope}}</p><a href=\"{{base}}reports/\">{{reportsLabel}}</a></footer>","releaseRow":"<tr><td><div class=\"book-row\"><div class=\"book-primary\"><a class=\"book-title\" data-key=\"{{key}}\" href=\"{{href}}\">{{title}}</a><div class=\"book-meta\"><p class=\"author release-byline\">{{author}}</p>{{versions}}</div></div></div></td><td class=\"category-column\"><span>{{category}}</span></td><td class=\"points\"><strong aria-label=\"{{scoreLabel}}\">{{score}}</strong></td></tr>","releaseTable":"<table><caption class=\"sr-only\">{{caption}}</caption><thead><tr><th scope=\"col\"><button type=\"button\" class=\"table-sort\" data-sort=\"work\" disabled>{{workAuthorLabel}}</button></th><th scope=\"col\" class=\"category-column\"><button type=\"button\" class=\"table-sort\" data-sort=\"category\" disabled>{{categoryLabel}}</button></th><th scope=\"col\" class=\"points\" aria-sort=\"descending\"><button type=\"button\" class=\"table-sort\" data-sort=\"points\" disabled><span class=\"sort-label\">{{pointsLabel}}</span></button></th></tr></thead><tbody>{{rows}}</tbody></table>"};
const TRANSLATIONS={"common_points":{"en":"Points","ko":"점수"},"common_rank":{"en":"Rank","ko":"순위"},"common_work":{"en":"Work","ko":"작품"},"common_work_author":{"en":"Work / author","ko":"작품 / 저자"},"common_category":{"en":"Category","ko":"분야"},"common_all_categories":{"en":"All categories","ko":"전체 분야"},"store_kyobo":{"en":"Kyobo","ko":"교보문고"},"store_yes24":{"en":"YES24","ko":"YES24"},"store_aladin":{"en":"Aladin","ko":"알라딘"},"period_today":{"en":"Today","ko":"오늘"},"period_week":{"en":"Past Week","ko":"최근 7일"},"period_month":{"en":"Past Month","ko":"최근 30일"},"period_year":{"en":"This Year","ko":"올해"},"period_all":{"en":"All Time","ko":"전체 기간"},"header_home":{"en":"Chaekjang home","ko":"책장 홈"},"header_data_coverage":{"en":"Data coverage:","ko":"수집 기간:"},"header_how_points":{"en":"How points work","ko":"점수 산정 방식"},"dataset_provenance":{"en":"Saved dataset","ko":"저장된 데이터"},"dataset_first_collection":{"en":"First saved collection: {date}","ko":"첫 수집일: {date}"},"dataset_snapshot":{"en":"Data snapshot: {date}","ko":"데이터 기준일: {date}"},"language_switch":{"en":"Language","ko":"언어 선택"},"language_english":{"en":"Switch to English","ko":"영어로 보기"},"language_korean":{"en":"Switch to Korean","ko":"한국어로 보기"},"footer_scope":{"en":"Points combine verified versions of each work. Additional work matches may remain unresolved.","ko":"각 작품의 점수는 동일 작품으로 확인된 판본의 점수를 합산한 값입니다. 아직 같은 작품인지 확인되지 않은 도서가 있을 수 있습니다."},"monthly_reports":{"en":"Monthly reports","ko":"월별 리포트"},"search_books":{"en":"Search books","ko":"도서 검색"},"search_placeholder":{"en":"Search a title, author, or ISBN…","ko":"제목, 저자 또는 ISBN 검색…"},"search_clear":{"en":"Clear search","ko":"검색어 지우기"},"book_category":{"en":"Book category","ko":"도서 분야"},"edition_publisher_unavailable":{"en":"Publisher unavailable","ko":"출판사 정보 없음"},"edition_print":{"en":"Print edition","ko":"종이책"},"edition_ebook":{"en":"Ebook edition","ko":"전자책"},"edition_translator":{"en":"Translator","ko":"옮긴이"},"edition_saved_isbn":{"en":"Saved ISBN","ko":"저장된 ISBN"},"edition_unresolved":{"en":"Unresolved edition record","ko":"판본 확인 미완료"},"edition_unresolved_record":{"en":"Unresolved record","ko":"판본 확인 미완료"},"edition_unranked":{"en":"Not in captured lists during this period","ko":"이 기간에 수집한 순위 목록에 없음"},"versions_count":{"en":"{count} versions","ko":"판본 {count}개"},"editions_count":{"en":"{count} editions","ko":"판본 {count}개"},"edition_count":{"en":"{count} Edition","ko":"판본 {count}개"},"points_count":{"en":"{count} points","ko":"{count}점"},"table_caption":{"en":"Work popularity scores across versions for {range} across all categories. Equal scores share a position.","ko":"{range} 전체 분야의 작품별 인기 점수입니다. 판본별 점수를 합산하며, 점수가 같으면 같은 순위를 부여합니다."},"table_caption_category":{"en":"Work popularity scores across versions for {range} within {category}. Equal scores share a position.","ko":"{range} {category} 분야의 작품별 인기 점수입니다. 판본별 점수를 합산하며, 점수가 같으면 같은 순위를 부여합니다."},"home_intro":{"en":"See which books are popular in Korea based on their rankings at three major book retailers: Kyobo, YES24, and Aladin.","ko":"교보문고, YES24, 알라딘의 순위 목록에서 어떤 책이 인기를 얻고 있는지 살펴보세요."},"home_filters":{"en":"Book filters","ko":"도서 필터"},"time_period":{"en":"Time period","ko":"기간 선택"},"home_js_notice":{"en":"Search, category filters, sorting, and additional results require JavaScript.","ko":"검색, 분야 필터, 정렬, 추가 결과를 이용하려면 JavaScript를 활성화해야 합니다."},"home_start_error":{"en":"The default ranking is shown. Interactive controls could not load. Reload the page to try again.","ko":"기본 순위가 표시됩니다. 검색과 필터 기능을 불러오지 못했습니다. 페이지를 새로고침해 다시 시도해 주세요."},"home_no_list":{"en":"No list for this period.","ko":"이 기간의 순위 목록이 없습니다."},"home_empty_hint":{"en":"Try another category, title, or period.","ko":"다른 분야, 제목 또는 기간으로 다시 찾아보세요."},"show_more_count":{"en":"Show more · {shown} of {total}","ko":"더 보기 · {total}개 중 {shown}개"},"loading_books":{"en":"Loading books…","ko":"도서를 불러오는 중…"},"detail_js_notice":{"en":"Enable JavaScript to search and explore the saved rankings.","ko":"저장된 순위 정보를 검색하고 살펴보려면 JavaScript를 활성화해 주세요."},"coverage_available":{"en":"{captured} of {expected} store-days available","ko":"서점별 일일 목록 {expected}개 중 {captured}개 수집 완료"},"coverage_none":{"en":"No complete collections in this period.","ko":"이 기간에 완전히 수집된 순위 목록이 없습니다."},"coverage_no_complete":{"en":"No complete collections","ko":"완전히 수집된 목록 없음"},"coverage_excluded":{"en":"Missing or incomplete days are excluded. {stores}.","ko":"누락되거나 불완전한 일일 목록은 제외합니다. {stores}."},"coverage_store":{"en":"{store}: {days}/{expected} days","ko":"{store}: {expected}일 중 {days}일"},"coverage_collection":{"en":"Collection coverage · {captured} of {expected} store-days","ko":"수집 현황 · 서점별 일일 목록 {expected}개 중 {captured}개"},"report_title":{"en":"{month} Most Popular Books in Korea","ko":"{month} 서점 인기 도서"},"report_window":{"en":"Observation window:","ko":"집계 기간:"},"report_snapshot":{"en":"Data snapshot:","ko":"데이터 기준일:"},"report_filters":{"en":"Monthly book filters","ko":"월별 도서 필터"},"report_sort":{"en":"Sort monthly books","ko":"월별 도서 정렬"},"sort_points_desc":{"en":"Points descending","ko":"점수 높은 순"},"sort_points_asc":{"en":"Points ascending","ko":"점수 낮은 순"},"sort_work_asc":{"en":"Work A–Z","ko":"제목 오름차순"},"sort_work_desc":{"en":"Work Z–A","ko":"제목 내림차순"},"sort_category_asc":{"en":"Category A–Z","ko":"분야 오름차순"},"sort_category_desc":{"en":"Category Z–A","ko":"분야 내림차순"},"sort_rank_asc":{"en":"Rank ascending","ko":"순위 높은 순"},"sort_rank_desc":{"en":"Rank descending","ko":"순위 낮은 순"},"sort_announcement":{"en":"Sorted by {sort}.","ko":"{sort}으로 정렬했습니다."},"sort_action":{"en":"Sort by {sort}","ko":"{sort}으로 정렬"},"report_js_notice":{"en":"The default ranking is shown. Search, category filters, and sorting require JavaScript to load.","ko":"기본 순위가 표시됩니다. 검색, 분야 필터, 정렬 기능을 이용하려면 JavaScript가 실행되어야 합니다."},"report_top_points":{"en":"Top {count} by points","ko":"점수 상위 {count}개 작품"},"report_results":{"en":"Monthly results","ko":"월별 결과"},"report_observed":{"en":"{count} works observed","ko":"수집된 작품 {count}개"},"report_observed_one":{"en":"{count} work observed","ko":"수집된 작품 {count}개"},"report_matching":{"en":"{count} matching works","ko":"조건에 맞는 작품 {count}개"},"report_matching_one":{"en":"{count} matching work","ko":"조건에 맞는 작품 {count}개"},"report_showing":{"en":"Showing {count} works · {sort}","ko":"작품 {count}개 표시 · {sort}"},"report_showing_one":{"en":"Showing {count} work · {sort}","ko":"작품 {count}개 표시 · {sort}"},"report_announcement":{"en":"{total} works. Showing {shown}. {sort}.","ko":"작품 {total}개 중 {shown}개를 표시합니다. {sort}."},"report_announcement_one":{"en":"{total} work. Showing {shown}. {sort}.","ko":"작품 {total}개 중 {shown}개를 표시합니다. {sort}."},"report_no_list":{"en":"No list for this month.","ko":"이달의 순위 목록이 없습니다."},"archive_intro":{"en":"Calendar-month rankings from captured Kyobo, YES24, and Aladin lists.","ko":"교보문고, YES24, 알라딘에서 수집한 순위 목록을 월별로 살펴보세요."},"archive_empty_title":{"en":"No monthly reports yet.","ko":"아직 월별 리포트가 없습니다."},"archive_empty_body":{"en":"Reports appear after a complete calendar month falls within the saved observation range.","ko":"저장된 관측 기간에 1일부터 말일까지 포함된 달이 생기면 리포트가 표시됩니다."},"no_matching_books":{"en":"No matching books.","ko":"조건에 맞는 도서가 없습니다."},"matching_empty_hint":{"en":"Try another category or title.","ko":"다른 분야나 제목으로 다시 찾아보세요."},"showing_books":{"en":"Showing {shown} of {total} books.","ko":"도서 {total}개 중 {shown}개를 표시합니다."},"loading_more_books":{"en":"Loading more books…","ko":"도서를 더 불러오는 중…"},"loading_list":{"en":"Loading the list…","ko":"목록을 불러오는 중…"},"period_ranking":{"en":"{period} ranking","ko":"{period} 순위"},"list_existing_error":{"en":"Showing {count} existing books. Additional books could not load.","ko":"현재 도서 {count}개를 표시합니다. 추가 도서를 불러오지 못했습니다."},"list_load_error":{"en":"The list could not be loaded.","ko":"목록을 불러오지 못했습니다."},"retry":{"en":"Retry","ko":"다시 시도"},"back_popular":{"en":"Back to popular books","ko":"인기 도서로 돌아가기"},"back_report":{"en":"Back to {month} report","ko":"{month} 리포트로 돌아가기"},"back_author":{"en":"Back to author","ko":"저자 페이지로 돌아가기"},"help_close":{"en":"Close details","ko":"설명 닫기"},"help_region":{"en":"Points explanation","ko":"점수 산정 설명"},"author_saved_credit":{"en":"Saved contributor credit","ko":"저장된 참여자 표기"},"author_works_heading":{"en":"Works in the archive","ko":"수집된 작품"},"author_zero_note":{"en":"0 points = no appearance in available top-50 lists during this period.","ko":"0점은 이 기간에 수집된 상위 50위 목록에 등장하지 않았다는 뜻입니다."},"author_credit_scope":{"en":"The saved credit does not identify an author role clearly. These books share that exact credit.","ko":"저장된 참여자 표기만으로는 저자 역할을 명확히 확인할 수 없습니다. 이 도서들은 같은 표기를 공유합니다."},"author_evidence_heading":{"en":"About this list & credit sources","ko":"목록 안내 및 저자·참여자 표기 출처"},"author_evidence_body":{"en":"Points sum verified versions across Kyobo, YES24, and Aladin. Only works captured in the saved lists are included. Author credits use exact saved names and reviewed aliases.","ko":"점수는 같은 작품으로 확인된 판본들이 교보문고, YES24, 알라딘에서 얻은 점수를 합산한 값입니다. 저장된 순위 목록에 등장한 작품만 포함합니다. 저자·참여자 표기는 저장된 이름과 검토된 다른 표기를 그대로 사용합니다."},"author_table_caption":{"en":"Works credited to {name}, with points across versions for {range}. Unlisted works remain visible.","ko":"‘{name}’ 표기가 있는 작품의 {range} 판본별 합산 점수입니다. 해당 기간의 순위 목록에 등장하지 않은 작품도 표시합니다."},"author_elsewhere":{"en":"Elsewhere in the archive","ko":"다른 기간에 수집된 작품"},"author_no_appearances":{"en":"No appearances in available top-50 lists during this period.","ko":"이 기간에 수집된 상위 50위 목록에는 등장하지 않았습니다."},"author_announcement":{"en":"{period}, {range}. {count} works shown.","ko":"{period}, {range}. 작품 {count}개를 표시합니다."},"work_points_label":{"en":"Points in selected period","ko":"선택한 기간의 점수"},"work_combined_points":{"en":"Combined points · {period}","ko":"합산 점수 · {period}"},"work_individual_points":{"en":"Individual points","ko":"판본별 점수"},"work_sources_heading":{"en":"Sources & publication details","ko":"출처 및 출판 정보"},"work_no_review":{"en":"No additional editions have been verified for this record. Other editions may still appear separately.","ko":"이 기록과 같은 작품의 다른 판본은 아직 확인되지 않았습니다. 다른 판본이 별도로 표시될 수 있습니다."},"work_review_summary":{"en":"These editions are grouped using saved publication evidence. Original review notes and sources are available below.","ko":"저장된 출판 근거를 바탕으로 이 판본들을 묶었습니다. 원본 검토 메모와 출처는 아래에서 확인할 수 있습니다."},"work_review_notes":{"en":"Full review notes","ko":"검토 메모 전문"},"work_publication_source":{"en":"Work publication source {number}","ko":"작품 출판 정보 출처 {number}"},"reviewed_date":{"en":"Reviewed {date}","ko":"검토일: {date}"},"sources_listings":{"en":"Bookstore listings · all editions","ko":"서점 상품 정보 · 전체 판본"},"isbn_no_validated":{"en":"No validated ISBN","ko":"검증된 ISBN 없음"},"isbn_saved":{"en":"Saved ISBN: {isbn}","ko":"저장된 ISBN: {isbn}"},"metadata_conflict":{"en":"Metadata conflict; kept separate","ko":"도서 정보가 일치하지 않아 별도 유지"},"edition_details":{"en":"Edition details","ko":"판본 정보"},"reviewed_edition_match":{"en":"Reviewed edition match","ko":"판본 연결 검토 근거"},"sources_work_identity":{"en":"Work identity & English title evidence","ko":"작품 연결 및 영문 제목 근거"},"published_english_title":{"en":"Published English title","ko":"출판물의 영문 제목"},"edition_work_relationship":{"en":"Korean edition & work relationship","ko":"한국어 판본과 작품의 관계"},"no_verified_english":{"en":"No verified English title is saved. The Korean title is preserved.","ko":"확인된 영문 제목이 저장되어 있지 않아 한국어 제목을 그대로 표시합니다."},"author_source":{"en":"Author source","ko":"저자 정보 출처"},"original_categories":{"en":"Original bookstore categories","ko":"서점의 원래 분야 분류"},"no_category":{"en":"No category supplied","ko":"분야 정보 없음"},"reviewed_category_source":{"en":"Reviewed category source","ko":"분야 분류 검토 근거"},"category_stale":{"en":"A previous category review no longer matches the source metadata; saved store labels are used.","ko":"이전 분야 검토 내용이 현재 원본 도서 정보와 맞지 않아 저장된 서점 분류를 사용합니다."},"work_announcement":{"en":"{period}. {points}.","ko":"{period}. {points}."},"chart_average_rank":{"en":"Average rank {rank}","ko":"평균 순위 {rank}위"},"chart_outside":{"en":"Outside captured top 50","ko":"수집한 상위 50위 목록에 없음"},"chart_days_ranked":{"en":"{ranked}/{days} days ranked","ko":"{days}일 중 {ranked}일 순위에 등장"},"chart_partial_week":{"en":"Partial week","ko":"일부 날짜만 포함된 주"},"chart_week_of":{"en":"Week of {range}","ko":"{range} 주간"},"chart_observations":{"en":"{observations} ranked edition–bookstore observations; {captured} of {expected} complete store-days","ko":"판본·서점별 순위 관측 {observations}건; 서점별 일일 목록 {expected}개 중 {captured}개 완전 수집"},"chart_announcement":{"en":"Week of {range}. {coverage}. {rank}.","ko":"{range} 주간. {coverage}. {rank}."},"chart_region":{"en":"Weekly average ranking history across editions","ko":"판본별 관측 순위를 바탕으로 한 주간 평균 순위 추이"},"chart_heading":{"en":"Weekly average rank","ko":"주간 평균 순위"},"chart_past_year":{"en":"Past Year","ko":"최근 1년"},"chart_hint":{"en":"Tap or hover for week details.","ko":"누르거나 마우스를 올려 주간 정보를 확인하세요."},"chart_accessible":{"en":"Weekly average rank across editions over the past year.","ko":"최근 1년간 판본별 관측 순위를 바탕으로 한 주간 평균 순위입니다."},"chart_empty":{"en":"No rankings in the captured lists during this year.","ko":"최근 1년간 수집한 목록에 순위 기록이 없습니다."},"error_data_path":{"en":"Invalid snapshot data path.","ko":"데이터 파일 경로가 올바르지 않습니다."},"error_snapshot_unavailable":{"en":"This snapshot is unavailable. Please try again.","ko":"해당 데이터를 불러올 수 없습니다. 다시 시도해 주세요."},"error_data_load":{"en":"The saved data could not be loaded. Please try again.","ko":"저장된 데이터를 불러오지 못했습니다. 다시 시도해 주세요."},"error_report_not_found":{"en":"This report was not found.","ko":"해당 리포트를 찾을 수 없습니다."},"error_author_not_found":{"en":"This author was not found.","ko":"해당 저자 페이지를 찾을 수 없습니다."},"error_author_snapshot":{"en":"Incorrect author snapshot.","ko":"저자 데이터가 올바르지 않습니다."},"error_work_not_found":{"en":"This work was not found.","ko":"해당 작품을 찾을 수 없습니다."},"error_work_snapshot":{"en":"Incorrect work snapshot.","ko":"작품 데이터가 올바르지 않습니다."},"error_unsupported":{"en":"Unsupported snapshot. Please reload.","ko":"이 데이터는 현재 페이지에서 지원되지 않습니다. 새로고침해 주세요."},"loading_page":{"en":"Loading the page…","ko":"페이지를 불러오는 중…"},"error_page_not_found":{"en":"Page not found.","ko":"페이지를 찾을 수 없습니다."},"page_loaded":{"en":"Page loaded.","ko":"페이지를 불러왔습니다."},"page_unavailable":{"en":"Page unavailable","ko":"페이지를 불러올 수 없습니다"},"category_fiction":{"en":"Fiction","ko":"소설"},"category_nonfiction":{"en":"Non-fiction","ko":"논픽션"},"category_literature":{"en":"Literature","ko":"문학"},"category_poetry_drama":{"en":"Poetry & drama","ko":"시 / 희곡"},"category_self_help":{"en":"Self-help","ko":"자기계발"},"category_business":{"en":"Business & money","ko":"경제 / 경영"},"category_children":{"en":"Children & teens","ko":"어린이 / 청소년"},"category_comics":{"en":"Comics & light novels","ko":"만화 / 라이트노벨"},"category_study":{"en":"Study & exams","ko":"학습 / 수험"},"category_non_book":{"en":"Non-book items","ko":"도서 외 상품"},"category_unclassified":{"en":"Unclassified","ko":"미분류"},"seo_home_title":{"en":"Chaekjang — Korean Bookstore Rankings","ko":"책장 — 한국 서점 인기 순위"},"seo_home_description":{"en":"Explore popular books across Kyobo, YES24, and Aladin using collected top-50 lists and rank-derived points.","ko":"교보문고, YES24, 알라딘에서 수집한 상위 50위 목록과 순위 기반 점수로 인기 도서를 살펴보세요."},"seo_period_title":{"en":"{period} Korean Bookstore Rankings · Chaekjang","ko":"{period} 한국 서점 인기 순위 · 책장"},"seo_period_description":{"en":"{period} rankings from captured Kyobo, YES24, and Aladin top-50 lists, combining verified versions with rank-derived points and collection coverage.","ko":"교보문고, YES24, 알라딘에서 수집한 상위 50위 목록을 바탕으로 한 {period} 순위입니다. 확인된 판본의 순위 기반 점수를 합산하고 수집 현황을 함께 제공합니다."},"seo_archive_title":{"en":"Monthly reports · Chaekjang","ko":"월별 리포트 · 책장"},"seo_archive_description":{"en":"Browse calendar-month rankings from captured Kyobo, YES24, and Aladin lists, with rank-derived points and collection coverage.","ko":"교보문고, YES24, 알라딘에서 수집한 순위 목록의 월별 집계와 순위 기반 점수, 수집 현황을 살펴보세요."},"seo_report_title":{"en":"{month} Most Popular Books in Korea · Chaekjang","ko":"{month} 서점 인기 도서 · 책장"},"seo_report_description":{"en":"{month} rankings from captured Kyobo, YES24, and Aladin top-50 lists. The top 20 by rank-derived points, with collection coverage.","ko":"교보문고, YES24, 알라딘에서 수집한 {month} 상위 50위 목록을 바탕으로 점수 상위 20개 작품과 수집 현황을 제공합니다."},"seo_author_title":{"en":"{name} — {context} · Chaekjang","ko":"{name} — {context} · 책장"},"seo_author_description":{"en":"Explore captured works credited to {name} in the Kyobo, YES24, and Aladin lists, with rank-derived points and saved edition details.","ko":"교보문고, YES24, 알라딘에서 수집한 목록에서 ‘{name}’ 표기가 있는 작품과 순위 기반 점수, 저장된 판본 정보를 살펴보세요."},"seo_credit_context":{"en":"Contributor Credit","ko":"참여자 표기"},"seo_author_context":{"en":"Books in the Archive","ko":"수집된 도서"},"seo_work_title":{"en":"{name} — Bookstore Rankings · Chaekjang","ko":"{name} — 서점 인기 순위 · 책장"},"seo_work_description":{"en":"{name}. {credits}Explore captured Kyobo, YES24, and Aladin rankings, rank-derived points, and edition details.","ko":"{name}. {credits}교보문고, YES24, 알라딘에서 수집한 순위와 순위 기반 점수, 판본 정보를 살펴보세요."},"seo_saved_credits":{"en":"Saved credits: {credits}. ","ko":"저장된 저자·참여자 표기: {credits}. "},"method_report_note":{"en":"This report uses the calendar month shown above. Work and author links open All Time points; their period controls use the latest complete collection as the endpoint. The work graph always shows the past 365 days ending on that date. Those detail views can cover different dates from this monthly table.","ko":"이 리포트는 위에 표시된 달의 1일부터 말일까지를 집계합니다. 작품·저자 링크는 전체 기간 점수로 열리며, 상세 페이지의 기간 선택은 완전히 수집된 목록의 마지막 날짜를 기준으로 합니다. 작품 그래프는 항상 그 날짜까지의 최근 365일을 보여줍니다. 따라서 상세 페이지와 이 월별 표의 집계 기간은 다를 수 있습니다."},"method_html":{"en":"<p>We collect snapshots of the top 50 entries from the popularity lists published by Kyobo, YES24, and Aladin. Each snapshot is dated when we collect it; the stores may use different reporting periods and list scopes.</p>\n<p class=\"method-scoring\">Each version earns 50 points for first place, 49 for second, down to 1 for fiftieth. A work’s score adds the points of its verified versions across all three stores and the selected dates. If two versions place first and tenth at one store, they contribute 50 + 41 = 91 points to the work. Duplicate listings of one matched edition count only once per store and day.</p>\n<p>A book absent from a complete collected top 50 earns zero for that store and day. Missing or incomplete collections are excluded and shown in the coverage note. These scores describe visibility in the lists we captured—not sales or an official nationwide ranking.</p>\n\n<p>The work graph shows weekly average ranks over the past year. Each day averages the observed ranks of its editions across bookstores; each Monday–Sunday point then averages the ranked days equally. Missing and unlisted observations are left out, empty weeks remain gaps, and partial weeks are labeled. There is no additional smoothing.</p>\n","ko":"<p>교보문고, YES24, 알라딘이 공개하는 인기 순위 목록에서 상위 50개 항목을 수집합니다. 각 목록의 날짜는 수집한 날을 기준으로 하며, 서점마다 집계 기간이나 목록의 범위가 다를 수 있습니다.</p>\n<p class=\"method-scoring\">각 판본은 1위에 50점, 2위에 49점, 50위에 1점을 받습니다. 작품 점수는 같은 작품으로 확인된 판본들이 세 서점에서 선택한 기간 동안 얻은 점수를 합산한 값입니다. 한 서점에서 두 판본이 각각 1위와 10위라면 작품에 50 + 41 = 91점이 더해집니다. 같은 판본으로 연결된 중복 상품은 서점별로 하루에 한 번만 계산합니다.</p>\n<p>완전히 수집된 상위 50위 목록에 없는 도서는 해당 서점과 날짜에 0점을 받습니다. 누락되거나 불완전한 목록은 집계에서 제외하고 수집 현황에 표시합니다. 이 점수는 수집한 목록에서의 순위와 등장 빈도를 반영하며, 판매량이나 공식 전국 순위를 뜻하지 않습니다.</p>\n\n<p>작품 그래프는 최근 1년의 주간 평균 순위를 보여줍니다. 먼저 날짜별로 각 서점에서 관측된 판본별 순위를 모아 평균 낸 뒤, 월요일부터 일요일까지 순위 기록이 있는 날의 일별 평균을 동일한 비중으로 평균 냅니다. 누락된 관측과 순위 목록에 없는 도서는 평균에서 제외하며, 기록이 없는 주는 빈 구간으로 남깁니다. 일부 날짜만 포함된 주는 별도로 표시합니다. 추가 평활화는 적용하지 않습니다.</p>\n"},"language_english_name":{"en":"ENG","ko":"ENG"},"language_korean_name":{"en":"한국어","ko":"한국어"},"nav_popular":{"en":"Popular books","ko":"인기 도서"},"list_navigation":{"en":"Book lists","ko":"도서 목록"},"new_releases_title":{"en":"New releases","ko":"신간"},"new_releases_intro":{"en":"Books we track that were published in the last 30 days, with average daily points since release.","ko":"수집한 도서 가운데 최근 30일 동안 출간된 책과 출간 이후의 일평균 점수를 보여드립니다."},"daily_points":{"en":"Points/day","ko":"일평균 점수"},"daily_points_count":{"en":"{count} points per day","ko":"일평균 {count}점"},"new_releases_caption":{"en":"Tracked books published {range}, with average daily points since publication.","ko":"{range}에 출간된 수집 도서의 출간 이후 일평균 점수 목록입니다."},"new_releases_empty":{"en":"No recent releases to show","ko":"표시할 신간이 없습니다"},"new_releases_empty_hint":{"en":"This list includes tracked books with a confirmed publication date in the last 30 days.","ko":"수집한 도서 가운데 최근 30일 동안 출간된 것으로 확인된 책만 포함합니다."},"new_releases_score_unknown":{"en":"Daily points unavailable: at least one bookstore has no complete collections since publication.","ko":"일평균 점수를 계산할 수 없습니다. 출간 이후 완전히 수집된 목록이 없는 서점이 있습니다."},"new_releases_announcement":{"en":"{count} recent releases, {sort}.","ko":"신간 {count}종, {sort}."},"sort_daily_points_desc":{"en":"Highest daily points first","ko":"일평균 점수 높은 순"},"sort_daily_points_asc":{"en":"Lowest daily points first","ko":"일평균 점수 낮은 순"},"back_releases":{"en":"Back to new releases","ko":"신간 목록으로"},"seo_releases_title":{"en":"New Book Releases · Chaekjang","ko":"최근 출간 도서 · 책장"},"seo_releases_description":{"en":"Tracked books published in the last 30 days, ranked by average daily points since release across captured Kyobo, YES24, and Aladin lists.","ko":"최근 30일 동안 출간된 수집 도서를 교보문고, YES24, 알라딘 목록에서 얻은 출간 이후 일평균 점수로 살펴보세요."},"method_releases_html":{"en":"<h3>New releases</h3><p>New releases includes tracked editions published in the 30 days ending at the saved snapshot. Publication dates come from accepted YES24 metadata matches and refer to the edition, rather than a work’s first publication. Unknown and future dates are excluded.</p><p>For each recent edition, we average its points since publication separately at each bookstore, then add the three averages. Absence from a complete list counts as zero; missing or incomplete collections are excluded. Pre-publication rankings do not count. A work’s Points/day adds only its recent editions, each averaged from its own publication date. The date shown is its newest qualifying edition’s date. A dash means at least one store has no complete collections for the required interval. Book and author links open All Time points; those totals and the past-year graph use different periods.</p>","ko":"<h3>신간</h3><p>신간 목록에는 수집한 도서 가운데 데이터 기준일을 포함한 최근 30일 동안 출간된 판본을 담았습니다. 출간일은 YES24의 도서 정보를 대조해 확인했으며, 작품의 최초 출간일이 아니라 해당 판본의 출간일입니다. 출간일을 확인할 수 없거나 기준일 이후에 출간되는 판본은 제외합니다.</p><p>최근 출간된 판본마다 출간일부터 서점별 일평균 점수를 계산한 뒤 세 서점의 평균을 합산합니다. 완전히 수집된 목록에 없는 날은 0점으로 계산하고, 누락되거나 불완전한 목록은 제외합니다. 출간 전 순위는 집계하지 않습니다. 작품의 일평균 점수는 최근 출간된 판본만 합산하며, 각 판본의 출간일부터 따로 평균을 계산합니다. 표시된 날짜는 해당 판본들 가운데 가장 최근 출간일입니다. 필요한 기간에 완전히 수집된 목록이 없는 서점이 있으면 점수를 대시로 표시합니다. 작품·저자 링크는 전체 기간 점수로 열리며, 상세 페이지의 점수와 최근 1년 그래프는 신간 목록과 집계 기간이 다릅니다.</p>"}};
// Browser-native JavaScript: served as-is, with no framework or build runtime.
const config = JSON.parse(document.getElementById('snapshot-data').textContent);
// The URL-pinned locale serves the same data release in either language.
const locale=config.locale==='ko'?'ko':'en';
const browserLocale=locale==='ko'?'ko-KR':'en-GB';
function t(key,values={}) {
  const text=TRANSLATIONS[key]?.[locale];
  if(typeof text!=='string')throw Error('Missing translation: '+key);
  return text.replace(/\{([A-Za-z][A-Za-z0-9_]*)\}/g,(_,name)=>{
    if(!Object.hasOwn(values,name))throw Error('Missing translation value: '+name);
    return String(values[name]);
  });
}
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
function canRestoreRetryFocus() {
  // Do not interrupt a reader who moved to another control while loading.
  return document.hasFocus() && document.activeElement===document.body && !document.querySelector('dialog[open]');
}
function focusRecoveryHeading(container,selector='h1,h2,h3') {
  const heading=container.querySelector(selector);
  if(!heading)return;
  heading.tabIndex=-1;
  heading.dataset.recoveryFocus='';
  heading.focus();
}
const base = config.base;
const siteBase = config.siteBase || base;
const url = path => siteBase + path.replace(/^\//, '');
const dataUrl = path => base + path.replace(/^\//, '');
const escapedCharacters = {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};
// Saved metadata is data: escape it at every HTML-template boundary.
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => escapedCharacters[c]);
const componentLabels = {
  rankLabel:esc(t('common_rank')),workAuthorLabel:esc(t('common_work_author')),
  categoryLabel:esc(t('common_category')),pointsLabel:esc(t('common_points')),
  workScope:esc(t('footer_scope')),reportsLabel:esc(t('monthly_reports'))
};
const component = (name,values={}) => COMPONENTS[name].replace(/\{\{(\w+)\}\}/g,(_,key)=>values[key]??componentLabels[key]);
const names = Object.fromEntries(['kyobo','yes24','aladin'].map(k=>[k,t('store_'+k)]));
const periods = Object.fromEntries(['today','week','month','year','all'].map(k=>[k,t('period_'+k)]));
const priority = COMPONENTS.categoryPriority;
// Reuse locale formatters: large tables and graph updates call these frequently.
const dateFormatters = [false,true].map(short=>new Intl.DateTimeFormat(browserLocale,{
  day:'numeric',month:short?'short':'long',year:'numeric',timeZone:'UTC'
}));
const monthYearFormatter = new Intl.DateTimeFormat(browserLocale,{month:'long',year:'numeric',timeZone:'UTC'});
const monthFormatter = new Intl.DateTimeFormat(browserLocale,{month:'short',timeZone:'UTC'});
const rankFormatter = new Intl.NumberFormat(browserLocale,{maximumFractionDigits:1});
const numberFormatter = new Intl.NumberFormat(locale==='ko'?'ko-KR':'en-US');
const formatDate = (day, short=false) => dateFormatters[Number(short)].format(new Date(day+'T00:00:00Z'));
const number = n => numberFormatter.format(n);
const title = b => locale==='ko'?b.title:b.english?.title || b.title;
const range = s => s.from===s.to ? formatDate(s.to) : locale==='ko'&&s.from.slice(0,7)===s.to.slice(0,7)?`${Number(s.from.slice(0,4))}년 ${Number(s.from.slice(5,7))}월 ${Number(s.from.slice(8))}–${Number(s.to.slice(8))}일`:`${formatDate(s.from)} – ${formatDate(s.to)}`;
const rangeLabel = s => locale==='ko'?range(s):s.from===s.to ? formatDate(s.to) : s.from.slice(0,7)===s.to.slice(0,7) ? `${Number(s.from.slice(8))}–${formatDate(s.to)}` : `${formatDate(s.from,true)} – ${formatDate(s.to,true)}`;
const titleHTML = b => component('title',{lang:locale==='en'&&b.english?'en':'ko',title:esc(title(b)),korean:b.english?locale==='ko'?` <small lang="en">${esc(b.english.title)}</small>`:` <small lang="ko">${esc(b.title)}</small>`:''});
function author(b) {
  const name=locale==='ko'?null:b.english_author?.name || b.english?.author;
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
function sourceTitleLink(href,storeLabel,savedTitle) {
  try { if (!['https:','http:'].includes(new URL(href).protocol)) return esc(storeLabel+' · '+savedTitle); } catch {return esc(storeLabel+' · '+savedTitle);}
  const korean=/[\uac00-\ud7a3\u1100-\u11ff\u3130-\u318f]/.test(savedTitle);
  return `<a class="source-title" href="${esc(href)}" target="_blank" rel="noreferrer">${esc(storeLabel)} · <span${korean?' lang="ko"':''}>${esc(savedTitle)}</span> ↗</a>`;
}
function authorSourceLabel(savedLabel,href) {
  if(!savedLabel)return new URL(href).hostname.replace(/^www\./,'');
  if(locale==='en')return savedLabel;
  // These are generated label prefixes; the saved titles/names stay verbatim.
  for(const [prefix,key] of [['Published title · ','published_english_title'],['Author credit · ','author_source'],['Kyobo · ','store_kyobo'],['YES24 · ','store_yes24'],['Aladin · ','store_aladin']]) {
    if(savedLabel.startsWith(prefix))return t(key)+' · '+savedLabel.slice(prefix.length);
  }
  return savedLabel;
}
const cache=new Map();
async function json(path) {
  if (!/^\/data\/[a-z]+-[a-f0-9]{24}\.json$/.test(path)) throw Error(t('error_data_path'));
  if (!cache.has(path)) {
    cache.set(path, fetch(dataUrl(path)).then(r => {
      if (!r.ok) throw Error(t('error_snapshot_unavailable'));
      return r.json();
    }).catch(e => {
      cache.delete(path);
      throw e instanceof TypeError || e instanceof SyntaxError ? Error(t('error_data_load')) : e;
    }));
    if(cache.size>10)cache.delete(cache.keys().next().value);
  }
  return cache.get(path);
}
const params=new URLSearchParams(location.search);
const sortLabels=Object.fromEntries(['points-desc','points-asc','work-asc','work-desc','category-asc','category-desc','rank-asc','rank-desc'].map(k=>[k,t('sort_'+k.replace('-','_'))]));
const validSort=(value,author=false)=>Object.hasOwn(sortLabels,value)&&(!author||!value.startsWith('rank-'))?value:'points-desc';
const reportOrigin=params.get('fromReport')||'';
const fromReport=config.report?.key || (/^\d{4}-(?:0[1-9]|1[0-2])$/.test(reportOrigin)?reportOrigin:null);
let reportSort=validSort(params.get(config.report?'sort':'reportSort'));
let listSort=validSort(params.get(config.home?'sort':'listSort'));
const fromReleases=Boolean(config.releases)||params.get('fromReleases')==='1';
let releaseSort=validSort(params.get(config.releases?'sort':'releaseSort'),true);
let authorSort=validSort(params.get(config.author?'sort':'authorSort'),true);
let period=config.report?'report':Object.hasOwn(periods,params.get('period'))?params.get('period'):config.home?.period||(config.author||config.work?'all':'month');
let query=params.has('view')?'':params.get('q')||'';
let category=params.get('category')||'';
const originPeriod=Object.hasOwn(periods,params.get('listPeriod'))?params.get('listPeriod'):(config.author||config.work)&&!params.has('period')?'month':period;
const fromAuthor=config.work && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(params.get('fromAuthor')||'')?params.get('fromAuthor'):null;
// A work's period can change independently of the author page it came from.
const authorPeriod=Object.hasOwn(periods,params.get('authorPeriod'))?params.get('authorPeriod'):period;
const filters=()=>{
  const value=new URLSearchParams({period,q:query,category});
  if(config.author || config.work || params.has('listPeriod'))value.set('listPeriod',originPeriod);
  if(fromAuthor){value.set('fromAuthor',fromAuthor);value.set('authorPeriod',authorPeriod);}
  if(fromReport){value.set('fromReport',fromReport);value.set('reportSort',reportSort);}
  if(fromReleases){value.set('fromReleases','1');if(releaseSort!=='points-desc')value.set('releaseSort',releaseSort);}
  if(listSort!=='points-desc')value.set('listSort',listSort);
  if(authorSort!=='points-desc')value.set('authorSort',authorSort);
  return value.toString();
};
const returnPeriod=()=>config.author||config.work?originPeriod:period;
function authorHref(key,selectedPeriod=period) {
  const value=new URLSearchParams(filters());value.delete('fromAuthor');value.delete('authorPeriod');
  value.delete('authorSort');
  if(authorSort!=='points-desc')value.set('sort',authorSort);
  if(config.report)value.delete('listPeriod');else value.set('listPeriod',returnPeriod());
  value.set('period',config.report||config.releases?'all':selectedPeriod);
  return url('/authors/'+key+'/?'+value);
}
function listHref() {
  if(fromReleases) {
    return url('/new-releases/')+(releaseSort!=='points-desc'?'?sort='+releaseSort:'');
  }
  if(fromReport) {
    const value=new URLSearchParams();if(query)value.set('q',query);if(priority.includes(category))value.set('category',category);
    if(reportSort!=='points-desc')value.set('sort',reportSort);
    return url('/reports/'+fromReport+'/')+(value.size?'?'+value:'');
  }
  const p=config.author||config.work||fromAuthor?originPeriod:period;
  const value=new URLSearchParams();if(query)value.set('q',query);if(category)value.set('category',category);
  if(listSort!=='points-desc')value.set('sort',listSort);
  return listPeriodHref(p)+(value.size?'?'+value:'');
}
const listBackLabel=()=>fromReleases?t('back_releases'):fromReport?t('back_report',{month:monthYearFormatter.format(new Date(fromReport+'-01T00:00:00Z'))}):t('back_popular');
// A failed work page should offer the same immediate return as a loaded one.
const detailBackHref=()=>fromAuthor?authorHref(fromAuthor,authorPeriod):listHref();
const detailBackLabel=()=>fromAuthor?t('back_author'):listBackLabel();
const listPeriodHref=p=>url(p==='month'?'/':'/'+p+'/');
function workHref(key) {
  const value=new URLSearchParams(filters());
  if(config.report||config.releases){value.delete('listPeriod');value.set('period','all');}else value.set('listPeriod',returnPeriod());
  if(config.author){value.set('fromAuthor',config.author.key);value.set('authorPeriod',period);}
  return url('/works/'+key+'/?'+value);
}
const editionAnchor=key=>'edition-'+key;
function versionHref(v,workKey) { return workHref(workKey)+'#'+encodeURIComponent(editionAnchor(v.key)); }
function editionFieldsHTML(v,b,unranked=false) {
  const e=v.edition,display=e.display||{};
  let publisher=e.publishers.join(' / ')||t('edition_publisher_unavailable');
  const publisherLanguage=e.publishers.length?' lang="ko"':'';
  let format=display.format==='print'?t('edition_print'):display.format==='ebook'?t('edition_ebook'):'';
  let translator=e.translators.length?`${esc(t('edition_translator'))} <span lang="ko">${esc(e.translators.join(', '))}</span>`:'';
  let identity;
  if(v.book.title!==b.title)identity=`<span lang="ko">${esc(v.book.title)}</span>`;
  else if(format){identity=format;format='';}
  else if(translator){identity=translator;translator='';}
  else {identity=`<span${publisherLanguage}>${esc(publisher)}</span>`;publisher='';}
  return component('editionFields',{identity,publisher:publisher?`<span class="edition-publisher"${publisherLanguage}>${esc(publisher)}</span>`:'',format:format?`<span class="edition-format">${esc(format)}</span>`:'',translator:translator?`<span>${translator}</span>`:'',isbn:e.isbn?`<span class="edition-identifier">${display.savedIsbnConflict?esc(t('edition_saved_isbn')):'ISBN'} ${esc(e.isbn)}</span>`:'',stores:`<span class="edition-identifier">${esc(e.stores.map(k=>names[k]).join(', '))}</span>`,unresolved:e.unresolved?`<span class="edition-identifier">${esc(t('edition_unresolved'))}</span>`:'',unranked:unranked?`<span class="edition-identifier">${esc(t('edition_unranked'))}</span>`:''});
}
function versionHTML(v,i,s) {
  const score=v.scores[period];
  return component('version',{href:esc(versionHref(v,i.key)),fields:editionFieldsHTML(v,i.book,!config.author&&!score&&s.capturedDays),score:s.capturedDays?number(score):'—',scoreLabel:esc(s.capturedDays?t('points_count',{count:number(score)}):t('coverage_no_complete'))});
}
function versionsHTML(i,s) {
  return i.versions?component('versions',{key:esc(i.key),versionsLabel:esc(t('versions_count',{count:number(i.versionCount)})),rows:[...i.versions].sort((a,b)=>b.scores[period]-a.scores[period]||a.key.localeCompare(b.key)).map(v=>versionHTML(v,i,s)).join('')}):'';
}
// CSS places edition rows. JavaScript only remembers disclosures across renders.
const expandedWorks=new Set();
function wireVersions(container) {
  container.querySelectorAll('.work-versions').forEach(details=>{
    details.open=expandedWorks.has(details.dataset.work);
    details.ontoggle=()=>{
      if(details.open)expandedWorks.add(details.dataset.work);
      else expandedWorks.delete(details.dataset.work);
    };
  });
}
const filterKey=()=>JSON.stringify([period,query,category,listSort]);
const saveReturn=state=>{try{sessionStorage.setItem('shelf-list-return',JSON.stringify(state));}catch{}};
function returnState() {
  try {
    const value=JSON.parse(sessionStorage.getItem('shelf-list-return')||'null');
    return value?.filterKey===filterKey() && Number.isInteger(value.count) && value.count>=100 && value.count<=100000 && typeof value.book==='string' && Number.isFinite(value.scroll) && value.scroll>=0 ? value:null;
  } catch{return null;}
}
function address() {
  const value=config.home||config.report||config.releases?new URLSearchParams():new URLSearchParams(filters());
  if(config.home||config.report){if(query)value.set('q',query);if(category)value.set('category',category);}
  if(config.report&&reportSort!=='points-desc')value.set('sort',reportSort);
  if(config.home&&listSort!=='points-desc')value.set('sort',listSort);
  if(config.releases&&releaseSort!=='points-desc')value.set('sort',releaseSort);
  if(config.author)value.delete('authorSort');
  if(config.author&&authorSort!=='points-desc')value.set('sort',authorSort);
  history.replaceState(null,'',location.pathname+(value.size?'?'+value:'')+location.hash);
  syncLanguageLinks();
}
function syncLanguageLinks() {
  const route=location.pathname.slice(siteBase.length);
  document.querySelectorAll('a.language-switch[data-language]').forEach(a=>{
    a.href=base+(a.dataset.language==='ko'?'ko/':'')+route+location.search+location.hash;
    a.setAttribute('aria-label',t(a.dataset.language==='ko'?'language_korean':'language_english'));
    a.onclick=e=>{
      if(e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||!config.home)return;
      try {sessionStorage.setItem('shelf-period-state',JSON.stringify({period,expanded:[...expandedWorks],keyboard:e.detail===0}));}catch{}
    };
  });
}
addEventListener('pageshow',syncLanguageLinks);
addEventListener('hashchange',syncLanguageLinks);
function header(meta) {
  initializeHelp();
  syncLanguageLinks();
}
function initializeHelp() {
  const dialog=document.querySelector('dialog'),opener=document.querySelector('.about');
  if(!dialog||!opener)return;
  // Help uses bundled prose, so it remains usable before or after a failed fetch.
  // Preserve an open dialog and its scroll/focus while metadata replaces the header.
  if(!dialog.querySelector('.modal-inner')) {
    dialog.innerHTML=`<div class="modal-inner"><div class="modal-header"><h2>${esc(t('header_how_points'))}</h2><button class="icon-button close" aria-label="${esc(t('help_close'))}">×</button></div><div class="modal-body" tabindex="0" role="region" aria-label="${esc(t('help_region'))}">${t('method_html')}${t('method_releases_html')}</div></div>`;
    if(config.report) {
      const body=dialog.querySelector('.modal-body');
      const scoring=body.querySelector('.method-scoring');if(scoring)body.prepend(scoring);
      body.insertAdjacentHTML('beforeend',`<p>${esc(t('method_report_note'))}</p>`);
    }
    const provenance=document.querySelector('#dataset-provenance');
    if(provenance) {
      const section=document.createElement('section');section.className='help-provenance';
      const heading=document.createElement('h3');heading.textContent=provenance.querySelector('summary').textContent;
      section.append(heading,provenance.querySelector('.dataset-provenance-content').cloneNode(true));
      dialog.querySelector('.modal-body').append(section);
      provenance.hidden=true;
    }
  }
  opener.onclick=()=>dialog.showModal();
  dialog.querySelector('.close').onclick=()=>dialog.close();
  dialog.onclick=e=>{if(e.target===dialog)dialog.close();};
  dialog.onclose=()=>{
    // The queued close event must not override a later focus choice.
    if(document.activeElement===document.body||dialog.contains(document.activeElement))opener.focus();
  };
  opener.disabled=false;
}
let manifest;
const categoryName=id=>t('category_'+id.replaceAll('-','_'));
const coverageStores=s=>s.coverage.map(c=>t('coverage_store',{store:names[c.store],days:number(c.days),expected:number(c.expected)})).join(' · ');
function coverageHTML(s) {
  return s.missing.length ? s.capturedDays ? `<details class="coverage-note"><summary>${esc(t('coverage_available',{captured:number(s.capturedDays),expected:number(s.expectedDays)}))}</summary><p>${esc(t('coverage_excluded',{stores:coverageStores(s)}))}</p></details>`:`<p class="notice" role="status">${esc(t('coverage_none'))}</p>`:'';
}
// Search text is computed lazily and reused as filters change. Weak keys let
// discarded period data leave memory together with its normalized strings.
const searchTextCache=new WeakMap();
function normalizedSearchText(value) {
  // Fold Latin accents for search only; preserve other scripts and non-accent marks.
  return value.normalize('NFKC').toLowerCase().replace(
    /\p{Script=Latin}[\p{Script=Latin}\p{M}]*/gu,
    text=>text.normalize('NFD').replace(/\p{M}/gu,mark=>/\p{Diacritic}/u.test(mark)?'':mark));
}
function filteredWorkItems(items,category,query) {
  let shown=items;
  // The category's competition positions precede search or display sorting.
  if(category) {
    let previous=null,position=0;
    shown=shown.filter(i=>i.book.classification.categories.includes(category)).map((i,index)=>{if(i.score!==previous)position=index+1;previous=i.score;return {...i,position};});
  }
  let q=normalizedSearchText(query).trim();
  const isbn=q.replace(/[\s-]/g,'');
  if(/^(?:\d{13}|\d{9}[\dx])$/.test(isbn))q=isbn;
  if(!q)return shown;
  return shown.filter(item=>{
    let text=searchTextCache.get(item.search);
    if(!text) {
      text=item.search.map(normalizedSearchText);
      searchTextCache.set(item.search,text);
    }
    return text.some(value=>value.includes(q));
  });
}
function sortedWorkItems(items,selected,score=item=>item.score) {
  const [column,direction]=selected.split('-'),order=direction==='asc'?1:-1;
  const primaryCategory=item=>categoryName(priority.find(c=>item.book.classification.categories.includes(c)));
  return [...items].sort((a,b)=>{
    let comparison=0;
    if(column==='work')comparison=title(a.book).localeCompare(title(b.book),browserLocale);
    else if(column==='category')comparison=primaryCategory(a).localeCompare(primaryCategory(b),browserLocale);
    else if(column==='rank')comparison=a.position-b.position;
    else {
      const first=score(a),second=score(b);
      // Unknown scores always follow known scores; they are never treated as zero.
      if(first===null||first===undefined)return second===null||second===undefined?a.key.localeCompare(b.key):1;
      if(second===null||second===undefined)return -1;
      comparison=first-second;
    }
    return order*comparison||a.key.localeCompare(b.key);
  });
}
function nextSort(selected,column) {
  return selected.startsWith(column+'-')?column+'-'+(selected.endsWith('-asc')?'desc':'asc'):column+'-'+(column==='points'?'desc':'asc');
}
function wireTableSorting(container,selected,onSort,restoreFocus=null,labels=sortLabels) {
  container.querySelectorAll('.table-sort').forEach(button=>{
    const column=button.dataset.sort,active=selected.startsWith(column+'-');
    button.closest('th').setAttribute('aria-sort',active?(selected.endsWith('-asc')?'ascending':'descending'):'none');
    button.disabled=false;
    button.setAttribute('aria-label',t('sort_action',{sort:labels[nextSort(selected,column)]}));
    button.onclick=()=>onSort(nextSort(selected,column),{column,previous:button});
  });
  if(restoreFocus && document.hasFocus() && !document.querySelector('dialog[open]') &&
     (document.activeElement===document.body||document.activeElement===restoreFocus.previous)) {
    container.querySelector(`[data-sort="${restoreFocus.column}"]`)?.focus({preventScroll:true});
  }
}
function listTableHTML(items,s,category='') {
  return component('table',{caption:esc(category?t('table_caption_category',{range:range(s),category:categoryName(category)}):t('table_caption',{range:range(s)})),rows:items.map(i=>{
    const b=i.book,tag=priority.find(c=>b.classification.categories.includes(c));
    return component('row',{position:i.position,key:esc(i.key),href:esc(workHref(i.key)),title:titleHTML(b),author:author(b),editionLabel:b.edition_note?`<span class="edition-label"> · ${esc(b.edition_note.label)}</span>`:'',versions:versionsHTML(i,s),category:esc(categoryName(tag)),score:number(i.score)});
  }).join('')});
}
function tableStatusHTML(content,s,category='') {
  return listTableHTML([],s,category).replace('<tbody></tbody>',`<tbody><tr class="table-status"><td colspan="4">${content}</td></tr></tbody>`);
}
const dailyPointsFormatter=new Intl.NumberFormat(locale==='ko'?'ko-KR':'en-US',{minimumFractionDigits:1,maximumFractionDigits:1});
const dailyPoints=score=>score===null?'—':dailyPointsFormatter.format(score);
const dailyPointsLabel=score=>score===null?t('new_releases_score_unknown'):t('daily_points_count',{count:dailyPoints(score)});
function releaseTableHTML(items,summary) {
  return component('releaseTable',{
    caption:esc(t('new_releases_caption',{range:range(summary)})),
    workAuthorLabel:esc(t('common_work_author')),categoryLabel:esc(t('common_category')),
    pointsLabel:esc(t('daily_points')).replace('/','<wbr>/'),
    rows:items.map(i=>{
      const b=i.book,tag=priority.find(c=>b.classification.categories.includes(c));
      const credits=author(b),byline=credits+`<span class="release-date${credits?' after-credits':''}"><time datetime="${i.date}">${esc(formatDate(i.date,true))}</time></span>`;
      const versions=i.versionCount>1?component('versions',{
        key:esc(i.key),versionsLabel:esc(t('versions_count',{count:number(i.versionCount)})),
        rows:i.versions.map(v=>component('version',{
          href:esc(versionHref(v,i.key)),
          fields:editionFieldsHTML(v,b)+`<span class="release-edition-date"><time datetime="${v.date}">${esc(formatDate(v.date,true))}</time></span>`,
          score:dailyPoints(v.score),scoreLabel:esc(dailyPointsLabel(v.score))
        })).join('')
      }):'';
      return component('releaseRow',{key:esc(i.key),href:esc(workHref(i.key)),title:titleHTML(b),author:byline,versions,
        category:esc(categoryName(tag)),score:dailyPoints(i.score),scoreLabel:esc(dailyPointsLabel(i.score))});
    }).join('')
  });
}
function releasesPage() {
  const releases=config.releases,results=document.querySelector('#release-results');
  query='';category='';
  const labels={...sortLabels,'points-desc':t('sort_daily_points_desc'),'points-asc':t('sort_daily_points_asc')};
  let returning=null;
  try {
    const saved=JSON.parse(sessionStorage.getItem('shelf-release-return')||'null');
    if(saved?.sort===releaseSort&&typeof saved.key==='string'&&Number.isFinite(saved.scroll)&&saved.scroll>=0) {
      returning=saved;
      if(Array.isArray(saved.expanded))saved.expanded.filter(k=>typeof k==='string').forEach(k=>expandedWorks.add(k));
    }
    sessionStorage.removeItem('shelf-release-return');
  } catch{}
  function wire(restoreFocus=null) {
    wireVersions(results);
    wireTableSorting(results,releaseSort,(selected,focus)=>{releaseSort=selected;render(focus);},restoreFocus,labels);
    results.querySelectorAll('.book-title,.author-link,.version-title').forEach(a=>a.onclick=()=>{
      try {sessionStorage.setItem('shelf-release-return',JSON.stringify({sort:releaseSort,key:a.closest('tr').querySelector('.book-title').dataset.key,scroll:scrollY,expanded:[...expandedWorks]}));}catch{}
    });
  }
  function render(restoreFocus=null) {
    if(releases.items.length)results.innerHTML=releaseTableHTML(sortedWorkItems(releases.items,releaseSort),releases.summary);
    address();wire(restoreFocus);
    document.querySelector('#announcement').textContent=t('new_releases_announcement',{count:number(releases.items.length),sort:labels[releaseSort]});
  }
  render();
  if(returning)requestAnimationFrame(()=>{
    const target=[...results.querySelectorAll('.book-title')].find(a=>a.dataset.key===returning.key);
    if(target){target.focus({preventScroll:true});scrollTo(0,returning.scroll);}
  });
}
// Reports already contain their full monthly population; filtering needs no fetch.
function reportPage() {
  const report=config.report,s=report.summary,main=document.querySelector('main');
  if(location.pathname!==url('/reports/'+report.key+'/'))throw Error(t('error_report_not_found'));
  if(!report.categoryIds.includes(category))category='';
  const input=main.querySelector('input'),select=main.querySelector('.category-picker'),clear=main.querySelector('.search button'),results=main.querySelector('#report-results');
  input.value=query;select.value=category;
  // Keep the initial server-rendered rows. Every later view selects from the
  // full month before taking twenty, never just reorders the default rows.
  function render(restoreFocus=null) {
    const shown=sortedWorkItems(filteredWorkItems(report.items,category,query),reportSort);
    const selected=reportSort;address();
    const count=Math.min(20,shown.length),label=sortLabels[selected];
    main.querySelector('#report-ranking-heading').textContent=!count?t('report_results'):selected==='points-desc'?t('report_top_points',{count:number(count)}):t(count===1?'report_showing_one':'report_showing',{count:number(count),sort:label});
    main.querySelector('#report-count').textContent=t('report_'+(category||query?'matching':'observed')+(shown.length===1?'_one':''),{count:number(shown.length)});
    clear.hidden=!query;
    results.innerHTML=shown.length?listTableHTML(shown.slice(0,20),s,category):tableStatusHTML(`<div class="empty"><h3>${esc(t('no_matching_books'))}</h3><p>${esc(t('matching_empty_hint'))}</p>${query?`<button id="empty-clear">${esc(t('search_clear'))}</button>`:''}${category?`<button id="empty-category">${esc(t('common_all_categories'))}</button>`:''}</div>`,s,category);
    if(!shown.length) {
      const reset=results.querySelector('#empty-clear');if(reset)reset.onclick=clear.onclick;
      const all=results.querySelector('#empty-category');if(all)all.onclick=()=>{category='';select.value='';render();select.focus();};
    }
    wireVersions(results);
    wireTableSorting(results,reportSort,(selected,focus)=>{reportSort=selected;render(focus);},restoreFocus);
    main.querySelector('#announcement').textContent=t(shown.length===1?'report_announcement_one':'report_announcement',{total:number(shown.length),shown:number(count),sort:label});
  }
  select.onchange=()=>{category=select.value;render();};
  input.oninput=()=>{query=input.value;render();};
  clear.onclick=()=>{query='';input.value='';render();input.focus();};
  wireVersions(results);
  wireTableSorting(results,reportSort,(selected,focus)=>{reportSort=selected;render(focus);});
  // Browsers can restore form values when returning from a detail page after
  // the initial HTML was parsed. Restore the matching view at that point too.
  function restoreControls() {
    const changed=input.value!==query||select.value!==category;
    query=input.value;category=select.value;
    if(changed||query||category||reportSort!=='points-desc')render();
  }
  address();
  restoreControls();
  addEventListener('pageshow',restoreControls);
  for(const control of [input,select,clear])control.disabled=false;
  main.querySelector('#report-static-notice')?.remove();
}
// Popular lists start with saved HTML and fetch full data only on demand.
async function listPage() {
  if(category && !manifest.categoryIds.includes(category))category='';
  const home=config.home;
  let returning=returnState(), count=returning?.count||100, request=0, shown=null;
  let displayedCount=home.initialCount, lastRenderedKey=query||category||listSort!=='points-desc'?null:filterKey();
  const main=document.querySelector('main');
  const input=main.querySelector('input'), select=main.querySelector('select'), clear=main.querySelector('.search button'), results=main.querySelector('#results');
  const initialResults=results.innerHTML;
  const pagingStatus=document.createElement('div');pagingStatus.id='paging-status';pagingStatus.className='paging-status';
  input.value=query;select.value=category;input.disabled=false;select.disabled=false;clear.disabled=false;
  try {
    const saved=JSON.parse(sessionStorage.getItem('shelf-period-state')||'null');
    sessionStorage.removeItem('shelf-period-state');
    if(saved?.period===period) {
      if(Array.isArray(saved.expanded))saved.expanded.filter(k=>typeof k==='string').forEach(k=>expandedWorks.add(k));
      if(saved.keyboard)requestAnimationFrame(()=>main.querySelector(`[data-period="${period}"]`).focus({preventScroll:true}));
    }
  } catch{}
  let timer;
  function periodLinks() {
    main.querySelectorAll('[data-period]').forEach(a=>{
      const p=a.dataset.period,value=new URLSearchParams();if(query)value.set('q',query);if(category)value.set('category',category);if(listSort!=='points-desc')value.set('sort',listSort);
      a.href=listPeriodHref(p)+(value.size?'?'+value:'');
      a.onclick=e=>{
        if(e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
        try {sessionStorage.setItem('shelf-period-state',JSON.stringify({period:p,expanded:[...expandedWorks],keyboard:e.detail===0}));}catch{}
      };
    });
  }
  function change(restoreFocus=null) {count=100;returning=null;clearTimeout(timer);render(null,false,restoreFocus);}
  select.onchange=()=>{category=select.value;change();};
  input.oninput=()=>{query=input.value;clear.hidden=!query;pagingStatus.innerHTML='';results.inert=true;results.setAttribute('aria-busy','true');address();periodLinks();request++;clearTimeout(timer);timer=setTimeout(change,150);};
  clear.onclick=()=>{query='';input.value='';change();input.focus();};
  function wireResults(focusIndex=null,restoreFocus=null) {
    if(returning && Array.isArray(returning.expanded))returning.expanded.filter(k=>typeof k==='string').forEach(k=>expandedWorks.add(k));
    wireVersions(results);
    wireTableSorting(results,listSort,(selected,focus)=>{listSort=selected;change(focus);},restoreFocus);
    results.querySelectorAll('.book-title,.author-link,.version-title').forEach(a=>a.onclick=()=>saveReturn({filterKey:filterKey(),count:Math.max(100,displayedCount),book:a.closest('tr').querySelector('.book-title').dataset.key,scroll:scrollY,expanded:[...expandedWorks]}));
    const more=results.querySelector('.load-more');if(more){more.after(pagingStatus);more.disabled=false;more.onclick=()=>{
      const total=shown?shown.length:home.total,start=displayedCount;
      count=Math.min(displayedCount+100,total);render(start);
    };}
    const links=[...results.querySelectorAll('.book-title')];
    const target=returning?links.find(a=>a.dataset.key===returning.book):focusIndex!==null?links[focusIndex]:null;
    if(target)requestAnimationFrame(()=>{
      target.focus({preventScroll:true});
      if(returning){scrollTo(0,returning.scroll);returning=null;try{sessionStorage.removeItem('shelf-list-return');}catch{}}
      else target.scrollIntoView({block:'nearest'});
    });
  }
  async function render(focusIndex=null,retryFocused=false,restoreFocus=null) {
    // A newer filter or retry owns the screen, even if an older fetch finishes later.
    const token=++request, requestedCount=count, keepRows=lastRenderedKey===filterKey();
    const pagingFocused=keepRows && document.documentElement.dataset.inputMode==='keyboard' && (document.activeElement===results.querySelector('.load-more')||document.activeElement===pagingStatus.querySelector('#retry'));
    address();periodLinks();clear.hidden=!query;pagingStatus.innerHTML='';
    document.documentElement.classList.remove('list-filter-pending');
    results.inert=false;
    if(!query&&!category&&count<=100&&listSort==='points-desc') {
      // Clearing filters can always restore this release's HTML, even if the
      // optional full-data request failed or is still in flight.
      shown=null;displayedCount=home.initialCount;lastRenderedKey=filterKey();
      results.innerHTML=initialResults;results.removeAttribute('aria-busy');
      main.querySelector('h2').textContent=periods[period];
      main.querySelector('.range-label').textContent=rangeLabel(home.summary);
      main.querySelector('#coverage').innerHTML=coverageHTML(home.summary);
      main.querySelector('#announcement').textContent=t('showing_books',{shown:number(displayedCount),total:number(home.total)});
      wireResults(focusIndex,restoreFocus);return;
    }
    results.setAttribute('aria-busy','true');
    if(keepRows) {
      results.append(pagingStatus);
      pagingStatus.innerHTML=`<p class="notice" role="status">${esc(t('loading_more_books'))}</p>`;
      main.querySelector('#announcement').textContent=t('loading_more_books');
      const more=results.querySelector('.load-more');if(more)more.disabled=true;
    } else {
      lastRenderedKey=null;results.innerHTML=tableStatusHTML(`<p class="empty" role="status">${esc(t('loading_list'))}</p>`,home.summary,category);
      wireTableSorting(results,listSort,(selected,focus)=>{listSort=selected;change(focus);},restoreFocus);
    }
    try {
      const data=await json(manifest.periods[period]);if(token!==request)return;
      const s=data.summary;shown=sortedWorkItems(filteredWorkItems(data.items,category,query),listSort);
      pagingStatus.innerHTML='';results.removeAttribute('aria-busy');lastRenderedKey=filterKey();displayedCount=Math.min(count,shown.length);
      main.querySelector('h2').innerHTML=category?`${esc(categoryName(category))}<small>${esc(t('period_ranking',{period:periods[period]}))}</small>`:esc(periods[period]);
      main.querySelector('.range-label').textContent=rangeLabel(s);
      main.querySelector('#coverage').innerHTML=coverageHTML(s);
      if(!shown.length) {
        results.innerHTML=tableStatusHTML(`<div class="empty"><h3>${esc(query||category?t('no_matching_books'):t('home_no_list'))}</h3><p>${esc(t('home_empty_hint'))}</p>${query?`<button id="empty-clear">${esc(t('search_clear'))}</button>`:''}${category?`<button id="empty-category">${esc(t('common_all_categories'))}</button>`:''}</div>`,s,category);
        if(query)results.querySelector('#empty-clear').onclick=clear.onclick;
        if(category)results.querySelector('#empty-category').onclick=()=>{category='';select.value='';change();select.focus();};
        wireTableSorting(results,listSort,(selected,focus)=>{listSort=selected;change(focus);},restoreFocus);
        main.querySelector('#announcement').textContent=t('no_matching_books');
        if(retryFocused&&canRestoreRetryFocus())focusRecoveryHeading(results);
        return;
      }
      results.innerHTML=listTableHTML(shown.slice(0,count),s,category)+(shown.length>count?`<button class="load-more">${esc(t('show_more_count',{shown:number(displayedCount),total:number(shown.length)}))}</button>`:'');
      main.querySelector('#announcement').textContent=t('showing_books',{shown:number(displayedCount),total:number(shown.length)})+' · '+t('sort_announcement',{sort:sortLabels[listSort]});
      wireResults(focusIndex,restoreFocus);
      if(retryFocused&&focusIndex===null&&canRestoreRetryFocus())focusRecoveryHeading(main,'.list-heading h2');
    } catch(e) {
      if(token!==request)return;
      results.removeAttribute('aria-busy');
      if(keepRows){count=displayedCount;const more=results.querySelector('.load-more');if(more)more.disabled=false;}
      main.querySelector('#announcement').textContent=keepRows?t('list_existing_error',{count:number(displayedCount)}):t('list_load_error');
      const target=keepRows?pagingStatus:results;
      const errorHTML=`<p class="notice" role="alert">${esc(e.message)} <button id="retry">${esc(t('retry'))}</button></p>`;
      target.innerHTML=keepRows?errorHTML:tableStatusHTML(errorHTML,home.summary,category);
      if(!keepRows)wireTableSorting(results,listSort,(selected,focus)=>{listSort=selected;change(focus);},restoreFocus);
      const retry=target.querySelector('#retry');
      retry.onclick=e=>{if(token!==request)return;count=requestedCount;render(focusIndex,e.detail===0,restoreFocus);};
      if((pagingFocused||retryFocused)&&canRestoreRetryFocus())retry.focus({preventScroll:true});
    }
  }
  address();periodLinks();clear.hidden=!query;
  addEventListener('pageshow',()=>{
    const restoredCategory=manifest.categoryIds.includes(select.value)?select.value:'';
    if(input.value!==query||restoredCategory!==category){query=input.value;category=restoredCategory;change();}
  });
  if(query||category||listSort!=='points-desc'||count>home.initialCount && home.total>home.initialCount)await render();
  else {document.documentElement.classList.remove('list-filter-pending');wireResults();}
}
// Detail pages load the bundles pinned by their HTML entry.
async function authorPage() {
  const route=location.pathname.slice(siteBase.length).match(/^authors\/([^/]+)\/?$/);
  if(!route || route[1]!==config.author.key)throw Error(t('error_author_not_found'));
  const bundle=await json(config.author.bundle), a=bundle.author;
  if(a.key!==config.author.key)throw Error(t('error_author_snapshot'));
  const savedCredit=bundle.items.flatMap(i=>i.book.authors||[]).filter(r=>r.key===a.key).flatMap(r=>r.credits||[]).find(n=>/[가-힣]/.test(n));
  const authorName=locale==='ko'?(a.hangul||savedCredit||a.name):a.name;
  const main=document.querySelector('main');main.className='author-page';
  main.innerHTML=`<nav class="book-back"><a href="${esc(listHref())}">← ${esc(listBackLabel())}</a></nav>
    <section class="author-heading"><h1><span lang="${/[가-힣]/.test(authorName)?'ko':'en'}">${esc(authorName)}</span>${locale==='en'&&a.hangul?` <small lang="ko">${esc(a.hangul)}</small>`:locale==='ko'&&authorName!==a.name?` <small lang="en">${esc(a.name)}</small>`:''}</h1>${a.scope==='credit'?`<p>${esc(t('author_saved_credit'))}</p>`:''}</section>
    <div class="list-heading"><h2 id="author-works-heading">${esc(t('author_works_heading'))} <span class="author-work-count">${number(bundle.items.length)}</span></h2></div>
    <section class="period-picker author-periods" aria-label="${esc(t('time_period'))}"><div class="period-buttons">${Object.entries(periods).map(([key,label])=>`<button data-period="${key}">${esc(label)}</button>`).join('')}</div><div class="author-period-context"><p class="range-label"></p><div id="coverage"></div></div></section>
    <section class="list-panel" aria-labelledby="author-works-heading"><div id="author-results"></div></section>
    <p class="author-zero-note" hidden>${esc(t('author_zero_note'))}</p>
    ${a.scope==='credit'?`<p class="author-scope">${esc(t('author_credit_scope'))}</p>`:''}
    <details class="author-evidence"><summary>${esc(t('author_evidence_heading'))}</summary><p>${esc(t('author_evidence_body'))}</p><ul class="source-links">${a.sources.map(s=>`<li>${link(s,authorSourceLabel(a.sourceLabels?.[s],s))}</li>`).join('')}</ul></details>
    <p id="announcement" role="status" class="sr-only" aria-live="polite"></p>`;
  function render(announce=false,restoreFocus=null) {
    address();const s=manifest.summaries[period];
    main.querySelectorAll('[data-period]').forEach(b=>{const active=b.dataset.period===period;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    main.querySelector('.range-label').textContent=rangeLabel(s);
    main.querySelector('#coverage').innerHTML=coverageHTML(s);
    const items=sortedWorkItems(bundle.items,authorSort,item=>s.capturedDays?item.scores[period]:null);
    const zeroCount=items.filter(i=>!i.scores[period]).length;
    const grouped=authorSort==='points-desc' && period!=='all' && s.capturedDays && zeroCount>0 && zeroCount<items.length;
    const titleCounts=new Map();items.forEach(i=>titleCounts.set(title(i.book),(titleCounts.get(title(i.book))||0)+1));
    main.querySelector('.author-zero-note').hidden=!s.capturedDays || !(zeroCount || items.some(i=>i.versions?.some(v=>!v.scores[period]))) || Boolean(grouped);
    main.querySelector('#author-results').innerHTML=`<table><caption class="sr-only">${esc(t('author_table_caption',{name:authorName,range:range(s)}))}</caption><thead><tr><th scope="col"><button class="table-sort" data-sort="work" disabled>${esc(t('common_work'))}</button></th><th scope="col" class="category-column"><button class="table-sort" data-sort="category" disabled>${esc(t('common_category'))}</button></th><th scope="col" class="points"><button class="table-sort" data-sort="points" disabled>${esc(t('common_points'))}</button></th></tr></thead><tbody>${items.map((i,index)=>{
      const b=i.book,tag=priority.find(c=>b.classification.categories.includes(c)),score=i.scores[period];
      const e=i.edition;
      const clue=e && titleCounts.get(title(b))>1?`<p class="author-edition-clue">${e.publishers.length?`<span lang="ko">${esc(e.publishers.join(' / '))}</span>`:esc(t('edition_publisher_unavailable'))}${e.translators.length?` · ${esc(t('edition_translator'))} <span lang="ko">${esc(e.translators.join(', '))}</span>`:''}${e.unresolved?` · ${esc(e.stores.map(k=>names[k]).join(', '))} · ${esc(t('edition_unresolved_record'))}`:''}</p>`:'';
      const divider=grouped && index===items.length-zeroCount?`<tr class="author-archive-divider"><td colspan="3"><h3>${esc(t('author_elsewhere'))} <span>${number(zeroCount)}</span></h3><p>${esc(t('author_no_appearances'))}</p></td></tr>`:'';
      return `${divider}<tr class="author-work-row${index%2?' author-row-alternate':''}"><td><div class="book-row"><div class="book-primary"><a class="book-title" href="${esc(workHref(i.key))}">${titleHTML(b)}</a>${clue}</div>${versionsHTML(i,s)}</div></td><td class="category-column"><span>${esc(categoryName(tag))}</span></td><td class="points${!score&&s.capturedDays?' author-zero-points':''}"><strong>${s.capturedDays?number(score):'—'}</strong></td></tr>`;
    }).join('')}</tbody></table>`;
    wireVersions(main);
    wireTableSorting(main.querySelector('#author-results'),authorSort,(selected,focus)=>{authorSort=selected;render(true,focus);},restoreFocus);
    if(announce)main.querySelector('#announcement').textContent=t('author_announcement',{period:periods[period],range:range(s),count:number(items.length)})+' · '+t('sort_announcement',{sort:sortLabels[authorSort]});
  }
  main.querySelectorAll('[data-period]').forEach(b=>b.onclick=()=>{period=b.dataset.period;render(true);});
  render();
}
function compactEditionHTML(v,b,s) {
  let selected=false;try{selected=decodeURIComponent(location.hash.slice(1))===editionAnchor(v.key);}catch{}
  return `<li id="${esc(editionAnchor(v.key))}"${selected?' class="edition-selected"':''}><div class="edition-inline">${editionFieldsHTML(v,b)}</div><span class="edition-points" aria-label="${esc(s.capturedDays?t('points_count',{count:number(v.scores[period])}):t('coverage_no_complete'))}">${s.capturedDays?number(v.scores[period]):'—'}</span></li>`;
}
function workReviewHTML(review) {
  if(!review)return `<p>${esc(t('work_no_review'))}</p>`;
  const summary=locale==='ko'?t('work_review_summary'):review.summary||t('work_review_summary');
  return `<p>${esc(summary)}</p><details class="review-notes"><summary>${esc(t('work_review_notes'))}</summary>${locale==='ko'&&review.summary?`<p lang="en">${esc(review.summary)}</p>`:''}<p lang="en">${esc(review.notes)}</p></details><ul class="source-links">${review.sources.map((u,i)=>`<li>${link(u,t('work_publication_source',{number:i+1}))}</li>`).join('')}</ul><p>${esc(t('reviewed_date',{date:formatDate(review.reviewed_at)}))}</p>`;
}
function workSourcesHTML(bundle) {
  const listings=Object.values(bundle.listings);
  // Collapse repeated evidence entries without merging the underlying editions.
  const unique=(values,key)=>[...new Map(values.map(v=>[key(v),v])).values()];
  const english=unique(listings.filter(b=>b.english).map(b=>b.english),e=>JSON.stringify([e.title,e.source_url,e.relationship_url]));
  const authors=unique(listings.filter(b=>b.english_author).map(b=>b.english_author),a=>a.source_url);
  const categories=unique(listings,b=>JSON.stringify([b.store,b.category]));
  const reviews=unique(listings.filter(b=>b.classification.review).map(b=>b.classification.review),r=>r.source_url);
  const notes=unique(listings.filter(b=>b.edition_note||b.match_review),b=>JSON.stringify([b.edition_note,b.match_review]));
  return `<details><summary>${esc(t('sources_listings'))}</summary><ul class="source-links">${listings.map(b=>`<li>${sourceTitleLink(storeUrl(b),names[b.store],b.title)}<small lang="ko">${esc(b.publisher)} · ${esc(b.author)}</small><small>${b.isbn?'ISBN '+esc(b.isbn):esc(t('isbn_no_validated'))}${b.raw_isbn&&!b.isbn?' · '+esc(t('isbn_saved',{isbn:b.raw_isbn})):''}${b.match_status==='metadata-conflict'?' · '+esc(t('metadata_conflict')):''}</small></li>`).join('')}</ul>${notes.map(b=>`${b.edition_note?`<p><span lang="en">${esc(b.edition_note.label)} · ${esc(b.edition_note.note)}</span> ${link(b.edition_note.source_url,t('edition_details'))}</p>`:''}${b.match_review?`<p>${link(b.match_review.source_url,t('reviewed_edition_match'))}</p>`:''}`).join('')}</details>
    <details><summary>${esc(t('sources_work_identity'))}</summary>${workReviewHTML(bundle.review)}${english.length?english.map(e=>`<p><span lang="en">${esc(e.title)}</span> · ${esc(t('reviewed_date',{date:formatDate(e.retrieved_at)}))}</p><p lang="en">${esc(e.note)}</p><ul class="source-links"><li>${link(e.source_url,e.source_name&&e.source_name!=='Title source'?e.source_name:t('published_english_title'))}</li><li>${link(e.relationship_url,t('edition_work_relationship'))}</li></ul>`).join(''):`<p>${esc(t('no_verified_english'))}</p>`}${authors.map(a=>`<p><span lang="en">${esc(a.name)}</span> · ${link(a.source_url,t('author_source'))}</p>`).join('')}</details>
    <details><summary>${esc(t('original_categories'))}</summary><ul class="source-links">${categories.map(b=>`<li>${esc(names[b.store])} · <span${!b.category||b.category==='nan'?'':' lang="ko"'}>${esc(!b.category||b.category==='nan'?t('no_category'):b.category)}</span></li>`).join('')}</ul>${reviews.map(r=>`<p><span lang="en">${esc(r.notes)}</span> ${link(r.source_url,t('reviewed_category_source'))} · ${esc(t('reviewed_date',{date:formatDate(r.reviewed_at)}))}</p>`).join('')}${listings.some(b=>b.classification.staleOverride)?`<p>${esc(t('category_stale'))}</p>`:''}</details>
    <details class="work-collection-coverage"><summary></summary><p></p></details>`;
}
async function workPage() {
  const route=location.pathname.slice(siteBase.length).match(/^works\/([^/]+)\/?$/);
  if(!route || route[1]!==config.work.key)throw Error(t('error_work_not_found'));
  const bundle=await json(config.work.bundle),b=bundle.book;
  if(bundle.key!==config.work.key)throw Error(t('error_work_snapshot'));
  const main=document.querySelector('main');main.className='book-page work-page';
  main.innerHTML=`<nav class="book-back"><a href="${esc(detailBackHref())}">← ${esc(detailBackLabel())}</a></nav>
    <article><div class="book-heading work-heading"><div class="work-identity"><h1>${titleHTML(b)}</h1><p class="book-author">${author(b)}</p><p class="book-categories">${b.classification.categories.map(categoryName).map(esc).join(' · ')}</p></div><div class="work-header-points" aria-label="${esc(t('work_points_label'))}"></div></div>
    <section class="period-picker work-periods" aria-label="${esc(t('time_period'))}"><div class="period-buttons">${Object.entries(periods).map(([key,label])=>`<button data-period="${key}">${esc(label)}</button>`).join('')}</div><p class="range-label"></p></section>
    <div id="coverage"></div><div id="history"></div>
    <section class="work-editions" aria-labelledby="edition-heading"><div class="edition-heading"><h2 id="edition-heading">${esc(t(bundle.versions.length===1?'edition_count':'editions_count',{count:number(bundle.versions.length)}))}</h2><span>${esc(t('work_individual_points'))}</span></div><ul class="compact-editions"></ul></section>
    <section class="work-sources" aria-labelledby="sources-heading"><h2 id="sources-heading">${esc(t('work_sources_heading'))}</h2><div class="work-source-details"></div></section>
    <p id="announcement" role="status" class="sr-only" aria-live="polite"></p></article>`;
  // Publication evidence does not change with the points period. Keep its DOM
  // intact to retain native disclosure state, focus and scroll position.
  const sourceDetails=main.querySelector('.work-source-details');
  sourceDetails.innerHTML=workSourcesHTML(bundle);
  const collectionDetails=sourceDetails.querySelector('.work-collection-coverage');
  function render(announce=false) {
    address();const s=manifest.summaries[period];
    main.querySelector('.book-back a').href=detailBackHref();
    main.querySelectorAll('[data-author]').forEach(a=>a.href=authorHref(a.dataset.author));
    main.querySelectorAll('[data-period]').forEach(button=>{const active=button.dataset.period===period;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
    main.querySelector('.range-label').textContent=rangeLabel(s);
    main.querySelector('#coverage').innerHTML=s.capturedDays?'':`<p class="notice" role="status">${esc(t('coverage_none'))}</p>`;
    main.querySelector('.work-header-points').innerHTML=`<strong>${s.capturedDays?number(bundle.scores[period]):'—'}</strong><p class="work-score-label">${esc(t('work_combined_points',{period:periods[period]}))}</p><p class="work-store-points">${Object.entries(names).map(([key,name])=>`<span>${esc(name)} <b>${s.capturedDays?number(bundle.contributions[period][key]||0):'—'}</b></span>`).join('')}</p>`;
    main.querySelector('.compact-editions').innerHTML=bundle.versions.map(v=>compactEditionHTML(v,b,s)).join('');
    collectionDetails.querySelector('summary').textContent=t('coverage_collection',{captured:number(s.capturedDays),expected:number(s.expectedDays)});
    collectionDetails.querySelector('p').textContent=t('coverage_excluded',{stores:coverageStores(s)});
    if(announce)main.querySelector('#announcement').textContent=t('work_announcement',{period:periods[period],points:s.capturedDays?t('points_count',{count:number(bundle.scores[period])}):t('coverage_no_complete')});
  }
  main.querySelectorAll('[data-period]').forEach(button=>button.onclick=()=>{period=button.dataset.period;render(true);});
  render();chart(bundle);
  if(location.hash){try{document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({block:'center'});}catch{}}
}
function storeUrl(b) {
  return b.edition_note?.source_url || (b.store==='kyobo'?`https://product.kyobobook.co.kr/detail/${encodeURIComponent(b.source_id)}`:b.store==='yes24'?`https://www.yes24.com/product/goods/${encodeURIComponent(b.source_id)}`:`https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=${encodeURIComponent(b.source_id)}`);
}
// Weekly observations are separate from the selected points period.
function chart(bundle) {
  const ranks=new Map(bundle.history.weeks.map(p=>[p.from,p]));
  const points=manifest.calendar.weeks.map(p=>({...p,...ranks.get(p.from)}));
  let plotLeft=34,plotWidth=500,plotHeight=128;
  const x=i=>plotLeft+i/Math.max(1,points.length-1)*plotWidth,y=r=>12+(r-1)/49*plotHeight;
  const container=document.querySelector('#history');
  let svg,cursor,marker,readout,previousLayout='';
  let index=points.length-1;
  function select(i,announce=false) {
    const next=Math.max(0,Math.min(points.length-1,i));
    // Pointer movement within one week does not need another DOM update.
    if(!announce && next===index && readout.childElementCount)return;
    index=next;const p=points[index];
    cursor.setAttribute('x1',x(index));cursor.setAttribute('x2',x(index));
    marker.style.display=p.rank===null?'none':'';if(p.rank!==null){marker.setAttribute('cx',x(index));marker.setAttribute('cy',y(p.rank));}
    const label=p.rank!==null?t('chart_average_rank',{rank:rankFormatter.format(p.rank)}):p.capturedDays?t('chart_outside'):t('coverage_no_complete');
    const coverage=t('chart_days_ranked',{ranked:number(p.rankedDays),days:number(p.days)})+(p.partial?' · '+t('chart_partial_week'):'');
    readout.innerHTML=`<time datetime="${p.from}">${esc(t('chart_week_of',{range:rangeLabel(p)}))}</time><span title="${esc(t('chart_observations',{observations:number(p.observations),captured:number(p.capturedDays),expected:number(p.days*3)}))}">${esc(coverage)}</span><span>${esc(label)}</span>`;
    if(announce)container.querySelector('#history-announcement').textContent=t('chart_announcement',{range:rangeLabel(p),coverage,rank:label});
  }
  function draw() {
    const mobile=matchMedia('(max-width: 700px)').matches;
    const width=container.getBoundingClientRect().width,height=mobile?185:170;
    if(!width || previousLayout===`${mobile}:${width}`)return;
    previousLayout=`${mobile}:${width}`;
    const focused=svg && document.activeElement===svg;
    plotLeft=mobile?30:34;plotWidth=width-plotLeft-12;plotHeight=height-42;
    const path=points.map((p,i)=>p.rank===null?'':`${i&&points[i-1].rank!==null?'L':'M'}${x(i)},${y(p.rank)}`).join(' ');
    const sparse=points.filter(p=>p.rank!==null).length<=3;
    const isolated=points.map((p,i)=>p.rank!==null&&(sparse||points[i-1]?.rank==null&&points[i+1]?.rank==null)?`<circle class="history-isolated" cx="${x(i)}" cy="${y(p.rank)}" r="3.5" stroke="none"/>`:'').join('');
    const ticks=(mobile?[0,.5,1]:[0,.25,.5,.75,1]).map(f=>{const i=Math.round(f*(points.length-1));return `<text x="${x(i)}" y="${height-7}" text-anchor="${f===0?'start':f===1?'end':'middle'}">${monthFormatter.format(new Date(points[i].from+'T00:00:00Z'))}</text>`;}).join('');
    container.innerHTML=`<section class="rank-history" aria-label="${esc(t('chart_region'))}"><div class="history-heading"><h2>${esc(t('chart_heading'))} <span>· ${esc(t('chart_past_year'))}</span></h2></div><p class="history-hint">${esc(t('chart_hint'))}</p><svg viewBox="0 0 ${width} ${height}" role="img" tabindex="0" aria-label="${esc(t('chart_accessible'))}" aria-describedby="history-readout">${[1,25,50].map(r=>`<g><line x1="${plotLeft}" x2="${plotLeft+plotWidth}" y1="${y(r)}" y2="${y(r)}" class="history-grid"/><text x="${plotLeft-9}" y="${y(r)+4}" text-anchor="end">${r}</text></g>`).join('')}<g class="history-series"><path d="${path}"/>${isolated}</g><line id="cursor" y1="12" y2="${12+plotHeight}" class="history-cursor"/><circle id="marker" r="4" fill="#963f34" stroke="#f8f4eb" stroke-width="1.5"/>${ticks}</svg>${points.some(p=>p.rank!==null)?'':`<p class="history-empty">${esc(t('chart_empty'))}</p>`}<div class="history-readout" id="history-readout"></div><p id="history-announcement" class="sr-only" role="status" aria-live="polite" aria-atomic="true"></p></section>`;
    svg=container.querySelector('svg');cursor=container.querySelector('#cursor');marker=container.querySelector('#marker');readout=container.querySelector('#history-readout');
    svg.onkeydown=e=>{const next={ArrowLeft:index-1,ArrowRight:index+1,Home:0,End:points.length-1}[e.key];if(next!==undefined){e.preventDefault();select(next,true);}};
    const pointer=e=>{const bounds=svg.getBoundingClientRect();select(Math.round((((e.clientX-bounds.left)/bounds.width)*width-plotLeft)/plotWidth*(points.length-1)));};
    svg.onpointermove=pointer;svg.onpointerdown=pointer;select(index);
    if(focused)svg.focus({preventScroll:true});
  }
  draw();
  new ResizeObserver(draw).observe(container);
}

async function start(retryFocused=false) {
  initializeHelp();
  syncLanguageLinks();
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
  if(config.releases) {
    manifest={meta:config.releases.meta};
    header(manifest.meta);releasesPage();return;
  }
  if(config.home) {
    // The HTML is already useful. Full period data is only needed for filters
    // or additional rows; enhancement must not clear the initial table.
    try {
      if(config.version!==4||!Object.hasOwn(periods,config.home.period))throw Error(t('error_unsupported'));
      if(period!==config.home.period){location.replace(listPeriodHref(period)+location.search+location.hash);return;}
      manifest={meta:config.home.meta,categoryIds:config.home.categoryIds,periods:config.home.periods};
      header(manifest.meta);await listPage();
    } catch(e) {
      document.documentElement.classList.remove('list-filter-pending');
      const message=document.createElement('p');message.className='notice';message.setAttribute('role','alert');
      message.textContent=e.message;main.prepend(message);
    }
    return;
  }
  main.className='';
  main.innerHTML=`<p class="empty" role="status">${esc(t('loading_page'))}</p>`;
  try {
    if(config.version!==4 || !/^\/(?:[A-Za-z0-9_-]+\/)*$/.test(base))throw Error(t('error_unsupported'));
    // Every entry page pins a manifest, so a loaded page keeps one consistent
    // data release while the daily publisher updates the public branch.
    manifest=await json(config.manifest);if(manifest.version!==4)throw Error(t('error_unsupported'));
    header(manifest.meta);
    if(config.author)await authorPage();else if(config.work)await workPage();else throw Error(t('error_page_not_found'));
    if(retryFocused) {
      const announcement=main.querySelector('#announcement');
      if(announcement)announcement.textContent=t('page_loaded');
      if(canRestoreRetryFocus())focusRecoveryHeading(main);
    }
  } catch(e) {
    main.innerHTML=`<section class="empty" role="alert"><h1>${esc(t('page_unavailable'))}</h1><p>${esc(e.message)}</p><button id="page-retry">${esc(t('retry'))}</button><p><a href="${esc(detailBackHref())}">${esc(detailBackLabel())}</a></p></section>`;
    const retry=main.querySelector('#page-retry');
    retry.onclick=e=>start(e.detail===0);
    if(retryFocused&&canRestoreRetryFocus())retry.focus({preventScroll:true});
  }
}
await start();
