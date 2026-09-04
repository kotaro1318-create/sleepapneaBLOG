// 睡眠時無呼吸症ブログ:記事データ
// 出典は米国国立心肺血液研究所(NHLBI)、Mayo Clinic、米国睡眠医学会(AASM)、
// The Sleep Foundation、New England Journal of Medicine、The Lancet などの
// 信頼できる医療機関サイト・査読付き論文から選定しています。
//
// date は "YYYY-MM-DD" 形式。表示形式は config.js の SITE_CONFIG.dateFormat で
// 一括変更できます(この配列の日付そのものは変更していません)。

const ARTICLES = [
  {
    title: "そのいびき、実は体からのSOSかもしれません",
    date: "2026-09-04",
    body: "「いびきうるさいよ」と言われたことはありませんか?実はいびきは、寝ている間に喉の奥の空気の通り道が狭くなっているサインなんです。特に、大きな音の後に一瞬シーンと静かになり、また「ガー」っと再開する…というパターンがあれば要注意。それは呼吸が一時的に止まる「無呼吸」が起きている可能性があります。肥満気味の人だけでなく、痩せ型でも顎の形や年齢によっては起こりうるので、「自分は太っていないから平気」とは言い切れません。単なる迷惑な音だと片付けず、パートナーや家族に指摘されたら、自分の眠りを見直す良いきっかけにしてみましょう。放置すると体への負担がじわじわ蓄積していくこともあるので、早めに気づけるだけで安心感がぐっと変わってきます。「いつからいびきをかくようになったか」「呼吸が止まっていると言われたことがあるか」を家族に聞いてみるだけでも、大事な手がかりになります。まずは知ることから始めてみませんか。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:気道の断面イメージ</p>
        <div class="viz-diagram-wrap">
          <svg viewBox="0 0 420 190" role="img" aria-label="正常な気道といびき・無呼吸時の狭くなった気道の断面比較図">
            <g transform="translate(85,90)">
              <circle r="72" class="d-wall"/>
              <path d="M -60 40 Q 0 62 60 40 L 60 72 Q 0 92 -60 72 Z" class="d-tissue"/>
              <path d="M -68 0 L 68 0" class="d-airflow" marker-end="url(#arrow)"/>
              <text y="105" text-anchor="middle" class="d-label">正常な気道</text>
              <text y="122" text-anchor="middle" class="d-sublabel">空気がスムーズに通る</text>
            </g>
            <g transform="translate(295,90)">
              <circle r="72" class="d-wall"/>
              <path d="M -66 -6 Q 0 58 66 -6 L 66 72 Q 0 96 -66 72 Z" class="d-tissue"/>
              <text y="-2" text-anchor="middle" class="d-blocked">✕</text>
              <text y="105" text-anchor="middle" class="d-label">いびき・無呼吸時</text>
              <text y="122" text-anchor="middle" class="d-sublabel">舌や軟口蓋が落ち込み塞がる</text>
            </g>
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" class="d-arrowhead"/>
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    `,
    sources: [
      { label: "Mayo Clinic「Obstructive sleep apnea - Symptoms and causes」", url: "https://www.mayoclinic.org/diseases-conditions/obstructive-sleep-apnea/symptoms-causes/syc-20352090" },
      { label: "NHLBI「Sleep Apnea - Causes and Risk Factors」", url: "https://www.nhlbi.nih.gov/health/sleep-apnea/causes" }
    ]
  },
  {
    title: "「よく寝たのに眠い」その正体、寝不足じゃないかも",
    date: "2026-09-04",
    body: "毎日ちゃんとベッドに入っているのに、日中どうしようもなく眠い…そんな経験はありませんか?それ、単純な寝不足ではなく、眠っている間に呼吸が何度も止まって、脳が浅い眠りを繰り返している「無呼吸」のサインかもしれません。体は横になっていても、脳はしっかり休めていない状態です。会議中にウトウトしてしまう、集中力が続かない、イライラしやすい、朝起きても疲れが取れた感じがしない――こうした症状に心当たりがある人は意外と多いものです。「歳のせいかな」「最近忙しいから」と自己判断で片付けてしまいがちですが、原因が別のところにある可能性も十分にあります。まずは自分の日中の眠気を軽く見ずに、「もしかしたら眠りの質そのものに原因があるかも」と考えてみることが、体調を取り戻す第一歩になります。仕事のパフォーマンスや家族との時間の質にも関わってくることなので、放っておくにはもったいない話です。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:一晩の眠りの深さ(イメージ)</p>
        <div class="viz-diagram-wrap">
          <svg viewBox="0 0 560 150" role="img" aria-label="正常な睡眠と無呼吸のある睡眠での眠りの深さの違いを示す折れ線図">
            <text x="0" y="14" class="d-sublabel">正常な眠り</text>
            <polyline points="0,40 60,38 90,70 160,74 220,72 280,40 340,38 400,70 460,72 520,40 560,38" class="line-good"/>
            <text x="0" y="90" class="d-sublabel">無呼吸のある眠り</text>
            <polyline points="0,120 20,118 34,132 48,102 62,130 80,104 96,128 112,100 128,130 146,104 162,128 180,102 198,130 214,104 232,128 250,102 268,130 286,104 304,128 322,102 340,130 358,104 376,128 394,102 412,130 430,104 448,128 466,102 484,130 502,104 520,128 538,102 556,118" class="line-bad"/>
            <text x="560" y="30" text-anchor="end" class="d-sublabel">深い睡眠が持続</text>
            <text x="560" y="146" text-anchor="end" class="d-sublabel">浅い覚醒を繰り返す</text>
          </svg>
        </div>
      </div>
    `,
    sources: [
      { label: "Mayo Clinic Press「7 signs you might have sleep apnea」", url: "https://mcpress.mayoclinic.org/sleep-apnea/7-signs-you-might-have-sleep-apnea/" },
      { label: "Sleep Education (AASM)「New data released by CDC on drowsy driving」", url: "https://sleepeducation.org/new-data-released-cdc-drowsy-driving/" }
    ]
  },
  {
    title: "そもそも「睡眠時無呼吸症候群」って何?",
    date: "2026-09-04",
    body: "睡眠時無呼吸症候群(OSA)は、眠っている間に喉の筋肉が緩んで気道が塞がり、呼吸が繰り返し止まったり浅くなったりする病気です。一晩に何十回、重症の場合は何百回も呼吸が止まることもあり、そのたびに脳は「息ができない」と気づいて浅い覚醒を繰り返します。本人は熟睡しているつもりでも、実際には体も脳も休めていないのです。肥満、首まわりの脂肪、顎の形、加齢などが主なリスク要因として知られていますが、痩せ型の人や女性、若い世代でも決してゼロではありません。決して珍しい病気ではなく、世界中で非常に多くの人が抱えていながら、自覚がないまま過ごしているケースも少なくありません。まずは「自分にも起こりうること」として知っておくのが、体を守る最初の一歩になります。幸い、原因や仕組みがはっきりしている分、対策の選択肢もいくつも用意されているのが救いです。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:重症度の分類(AHI = 1時間あたりの無呼吸・低呼吸回数)</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th>分類</th><th>AHI(回/時)</th></tr>
            </thead>
            <tbody>
              <tr><td>正常</td><td class="num">5未満</td></tr>
              <tr><td>軽度</td><td class="num">5〜14.9</td></tr>
              <tr><td>中等度</td><td class="num">15〜29.9</td></tr>
              <tr><td>重度</td><td class="num">30以上</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="viz">
        <p class="viz-title">図:世界の患者数推計(30〜69歳)</p>
        <div class="viz-bars">
          <div class="bar-row">
            <span class="bar-label">軽度〜重度<br><span class="bar-sub">AHI 5以上</span></span>
            <span class="bar-track"><span class="bar-fill" style="width:100%"></span></span>
            <span class="bar-value">9.36億人</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">中等度〜重度<br><span class="bar-sub">AHI 15以上</span></span>
            <span class="bar-track"><span class="bar-fill" style="width:45.4%"></span></span>
            <span class="bar-value">4.25億人</span>
          </div>
        </div>
        <p class="viz-note">出典:Benjafield AV, et al. Lancet Respir Med. 2019(30〜69歳人口における推計)</p>
      </div>
    `,
    sources: [
      { label: "NHLBI「Sleep Apnea - Causes and Risk Factors」", url: "https://www.nhlbi.nih.gov/health/sleep-apnea/causes" },
      { label: "Mayo Clinic「Obstructive sleep apnea - Symptoms and causes」", url: "https://www.mayoclinic.org/diseases-conditions/obstructive-sleep-apnea/symptoms-causes/syc-20352090" }
    ]
  },
  {
    title: "実は高血圧とも深い関係があるんです",
    date: "2026-09-04",
    body: "無呼吸と聞くと「いびきや眠気の話でしょ」と思われがちですが、実は血圧にも深く関わっています。ウィスコンシン睡眠コホート研究という大規模な追跡調査では、睡眠中の呼吸障害が重いほど、その後高血圧を発症するリスクが段階的に高くなることが示されました。呼吸が止まるたびに体は軽いストレス状態になり、血管がキュッと収縮することを一晩に何十回も繰り返すためと考えられています。この状態が毎晩続けば、血管や心臓に長期的な負担がかかっていくのは想像がつきますよね。降圧剤を飲んでいるのになかなか血圧が下がらない、という人の中には、背景に無呼吸が隠れているケースもあります。血圧の数値だけを追いかけるのではなく、眠りの質にも目を向けてみる価値は十分にありそうです。健康診断で血圧を指摘された、というタイミングは、無呼吸についても一緒に相談してみる良い機会かもしれません。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:AHI区分別 高血圧の発症オッズ比(4年後)</p>
        <div class="viz-bars">
          <div class="bar-row">
            <span class="bar-label">AHI 0<br><span class="bar-sub">基準</span></span>
            <span class="bar-track"><span class="bar-fill" style="width:34.6%"></span></span>
            <span class="bar-value">1.00倍</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">AHI 0.1〜4.9</span>
            <span class="bar-track"><span class="bar-fill" style="width:49.1%"></span></span>
            <span class="bar-value">1.42倍</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">AHI 5.0〜14.9</span>
            <span class="bar-track"><span class="bar-fill" style="width:70.2%"></span></span>
            <span class="bar-value">2.03倍</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">AHI 15以上</span>
            <span class="bar-track"><span class="bar-fill" style="width:100%"></span></span>
            <span class="bar-value">2.89倍</span>
          </div>
        </div>
        <p class="viz-note">出典:Peppard PE, et al. N Engl J Med. 2000;342:1378-1384(4年間の追跡、オッズ比)</p>
      </div>
    `,
    sources: [
      { label: "Peppard PE et al. “Prospective Study of the Association Between Sleep-Disordered Breathing and Hypertension.” N Engl J Med. 2000;342:1378-1384.", url: "https://www.nejm.org/doi/full/10.1056/NEJM200005113421901" },
      { label: "NHLBI「Sleep Apnea - Causes and Risk Factors」", url: "https://www.nhlbi.nih.gov/health/sleep-apnea/causes" }
    ]
  },
  {
    title: "脳卒中や心臓病のリスクにも関わっている",
    date: "2026-09-04",
    body: "少し怖い話に聞こえるかもしれませんが、大切なことなのでお伝えします。米国の追跡研究では、無呼吸のある人はそうでない人に比べて、脳卒中や死亡のリスクが有意に高いことが報告されています。また別の長期観察研究では、重症の無呼吸を治療せずに放置した人は心血管イベント(心筋梗塞などの発作)のリスクが明らかに高く、逆にCPAP治療を受けた人ではそのリスクがぐっと下がることも分かっています。呼吸が止まるたびに血中の酸素が下がり、心臓や血管に負荷がかかることが繰り返されるのが理由の一つと考えられています。つまり無呼吸は「いびきの延長」ではなく、心臓や血管の健康そのものに関わる問題だということ。逆に言えば、治療によってリスクを下げられる可能性があるというのは、とても前向きな事実でもあります。数字だけ見ると不安になるかもしれませんが、それだけ「今から手を打つ意味がある」ということでもあるのです。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:心血管イベントの発生率(人年あたり、100人年換算)</p>
        <div class="viz-bars">
          <p class="bar-group-label">致死的イベント</p>
          <div class="bar-row">
            <span class="bar-label">健常者</span>
            <span class="bar-track"><span class="bar-fill fill-calm" style="width:14.1%"></span></span>
            <span class="bar-value">0.30</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">未治療(重度)</span>
            <span class="bar-track"><span class="bar-fill fill-warn" style="width:49.8%"></span></span>
            <span class="bar-value">1.06</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">CPAP治療群</span>
            <span class="bar-track"><span class="bar-fill" style="width:16.4%"></span></span>
            <span class="bar-value">0.35</span>
          </div>
          <p class="bar-group-label">非致死的イベント</p>
          <div class="bar-row">
            <span class="bar-label">健常者</span>
            <span class="bar-track"><span class="bar-fill fill-calm" style="width:21.1%"></span></span>
            <span class="bar-value">0.45</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">未治療(重度)</span>
            <span class="bar-track"><span class="bar-fill fill-warn" style="width:100%"></span></span>
            <span class="bar-value">2.13</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">CPAP治療群</span>
            <span class="bar-track"><span class="bar-fill" style="width:30.0%"></span></span>
            <span class="bar-value">0.64</span>
          </div>
        </div>
        <p class="viz-note">出典:Marin JM, et al. Lancet. 2005;365:1046-1053(男性を対象とした観察研究)</p>
      </div>
    `,
    sources: [
      { label: "Yaggi HK et al. “Obstructive Sleep Apnea as a Risk Factor for Stroke and Death.” N Engl J Med. 2005;353:2034-2041.", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa043104" },
      { label: "Marin JM et al. “Long-term cardiovascular outcomes in men with obstructive sleep apnoea-hypopnoea with or without treatment with CPAP.” Lancet. 2005;365:1046-1053.", url: "https://www.sciencedirect.com/science/article/abs/pii/S0140673605711417" }
    ]
  },
  {
    title: "居眠り運転、その裏に無呼吸が潜んでいるかも",
    date: "2026-09-04",
    body: "信号待ちでウトウトしてしまった、高速道路でヒヤッとした経験はありませんか?米国の調査によると、居眠り運転は毎年数千件の死亡事故に関わっているとされ、その背景要因の一つとして未治療の睡眠時無呼吸症候群が挙げられています。夜にしっかり呼吸できていないと、どれだけ長く布団にいても脳は十分に回復できず、日中に強烈な眠気となって表れるのです。特に長距離運転や単調な運転、夜勤明けの運転をする人は要注意です。「ちょっと休憩すれば大丈夫」と自分では思っていても、実際には数秒の意識の途切れが命取りになることもあります。これは自分自身だけでなく、同乗者や周りの人の安全にも関わる話です。「最近、運転中に眠気が強いな」と感じたら、それは体からの重要なサインかもしれません。休憩や仮眠でその場をしのぐだけでなく、根本の原因を確かめておくと、長い目で見た安心につながります。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:居眠り運転にまつわる統計(米国)</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">4.2%</span>
            <span class="stat-label">過去30日以内に運転中「眠ってしまった」と回答した成人の割合</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">約7,500件</span>
            <span class="stat-label">居眠り運転が関わるとされる年間の死亡事故件数</span>
          </div>
        </div>
        <p class="viz-note">出典:CDCデータ(米国睡眠医学会 sleepeducation.org 掲載、2009〜2010年調査ほか)</p>
      </div>
    `,
    sources: [
      { label: "Sleep Education (AASM)「New data released by CDC on drowsy driving」", url: "https://sleepeducation.org/new-data-released-cdc-drowsy-driving/" },
      { label: "NHLBI「Sleep Apnea - Treatment」", url: "https://www.nhlbi.nih.gov/health/sleep-apnea/treatment" }
    ]
  },
  {
    title: "検査ってどんなことをするの?意外と身近です",
    date: "2026-09-04",
    body: "「無呼吸かも」と思っても、検査のハードルが高そうで足が向かない…という人は多いと思います。実際には、睡眠中の呼吸や酸素の状態を記録する「ポリソムノグラフィー(睡眠検査)」が標準的な方法で、専門施設に一泊するタイプだけでなく、近年は自宅で行える簡易検査も広く使われています。米国睡眠医学会のガイドラインでも、症状や状況に応じて自宅検査を選べることが明記されており、以前よりずっと気軽に受けられるようになっています。指先や胸にセンサーをつけて眠るだけなので、痛みなどはありません。検査結果は「無呼吸低呼吸指数」という数値で示され、これによって重症度や適切な治療方針がはっきりします。「まず知る」ことがすべての出発点です。数値というかたちで自分の眠りを客観的に見られるのは、実はちょっと安心材料にもなります。「たかが検査」と思わず、体調の見える化だと考えて、気軽な気持ちで一歩踏み出してみてください。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:検査方法の比較</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th></th><th>施設内検査(PSG)</th><th>自宅簡易検査(HSAT)</th></tr>
            </thead>
            <tbody>
              <tr><td>場所</td><td>医療機関に一泊</td><td>自宅の自分のベッド</td></tr>
              <tr><td>測定項目</td><td>脳波・呼吸・酸素など多項目</td><td>呼吸・酸素・心拍などの主要項目</td></tr>
              <tr><td>向いている人</td><td>症状が複雑、他の睡眠障害の疑いがある人</td><td>典型的な症状がある人</td></tr>
              <tr><td>特徴</td><td>詳細に分かるが予約待ちが出ることも</td><td>気軽で結果までが早い傾向</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    sources: [
      { label: "American Academy of Sleep Medicine「AASM publishes new guideline for diagnostic testing for adult sleep apnea」", url: "https://aasm.org/aasm-publishes-new-guideline-for-diagnostic-testing-for-adult-sleep-apnea/" },
      { label: "Mayo Clinic「Obstructive sleep apnea - Symptoms and causes」", url: "https://www.mayoclinic.org/diseases-conditions/obstructive-sleep-apnea/symptoms-causes/syc-20352090" }
    ]
  },
  {
    title: "CPAPってどんな治療?仕組みを知れば怖くない",
    date: "2026-09-04",
    body: "CPAP(シーパップ)は、寝ている間にマスクを通して一定の圧力の空気を送り続けることで、気道が塞がるのを物理的に防ぐ治療法です。原理はとてもシンプルで、いわば「空気の力で気道をそっと開いた状態に保つ」イメージ。喉の奥がぺしゃんと潰れなければ、呼吸は止まらず、いびきも自然と減っていきます。薬のように体内に取り込むものではなく、あくまで物理的に空気の通り道を支えるだけなので、仕組みとしても比較的シンプルで分かりやすい治療です。初めて聞くと「マスクをつけて寝るなんて大変そう」と身構えてしまうかもしれませんが、今のCPAP機器はコンパクトで静音性も高く、マスクの種類も豊富になっています。自分に合うタイプを見つけられれば、思っていたよりずっと自然に眠りに入れることに驚く人も多いです。導入時には医療スタッフが圧力設定やマスクのフィッティングを丁寧に調整してくれるので、一人で抱え込む必要はありません。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:CPAPの仕組み</p>
        <div class="viz-diagram-wrap">
          <svg viewBox="0 0 560 130" role="img" aria-label="CPAP装置からマスクを通じて空気を送り気道を開いた状態に保つ仕組みの図">
            <g transform="translate(10,35)">
              <rect width="120" height="60" rx="8" class="d-box"/>
              <text x="60" y="34" text-anchor="middle" class="d-label-s">CPAP装置</text>
            </g>
            <path d="M136 65 L 216 65" class="d-airflow" marker-end="url(#arrow2)"/>
            <g transform="translate(222,35)">
              <rect width="110" height="60" rx="8" class="d-box"/>
              <text x="55" y="34" text-anchor="middle" class="d-label-s">マスク</text>
            </g>
            <path d="M338 65 L 418 65" class="d-airflow" marker-end="url(#arrow2)"/>
            <g transform="translate(424,20)">
              <circle cx="55" cy="45" r="45" class="d-wall"/>
              <path d="M 15 70 Q 55 78 95 70 L 95 90 Q 55 96 15 90 Z" class="d-tissue-open"/>
              <path d="M 20 45 L 90 45" class="d-airflow-thin" marker-end="url(#arrow2)"/>
              <text x="55" y="108" text-anchor="middle" class="d-sublabel">開いた気道</text>
            </g>
            <defs>
              <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" class="d-arrowhead"/>
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    `,
    sources: [
      { label: "NHLBI「Sleep Apnea - Treatment」", url: "https://www.nhlbi.nih.gov/health/sleep-apnea/treatment" },
      { label: "Sleep Foundation「CPAP Machines: What They Are, How They Work, and Tips for Use」", url: "https://www.sleepfoundation.org/cpap" }
    ]
  },
  {
    title: "CPAPを始めた人が「もっと早くやればよかった」と言う理由",
    date: "2026-09-04",
    body: "CPAP治療を始めた人からよく聞くのが、「朝の目覚めが全然違う」「日中の眠気がウソみたいに減った」という声です。実際、CPAPを継続して使うことで日中の眠気や集中力、心血管系の健康状態の改善につながることが複数の研究で示されています。先ほど紹介した長期観察研究でも、CPAPで治療を受けた無呼吸の人は、未治療の人に比べて心血管イベントのリスクが明らかに低いという結果が出ています。パートナーからは「いびきがなくなって、こっちもぐっすり眠れるようになった」と喜ばれることも少なくありません。つまりCPAPは「いびきを止めるだけの道具」ではなく、これからの体調や健康寿命を左右しうる治療なのです。今の生活の質を変えたいと思ったとき、CPAPは意外と身近な選択肢になってくれます。「もっと早く始めればよかった」という声の多さこそが、CPAPの実力を物語っているのかもしれません。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:CPAP開始前後の変化</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th>項目</th><th>開始前</th><th>開始後</th></tr>
            </thead>
            <tbody>
              <tr><td>いびき</td><td>大きい</td><td>ほとんどない</td></tr>
              <tr><td>睡眠中の呼吸停止</td><td>繰り返しあり</td><td>ほぼ解消</td></tr>
              <tr><td>日中の眠気</td><td>強い</td><td>軽減</td></tr>
              <tr><td>集中力</td><td>続きにくい</td><td>保ちやすい</td></tr>
              <tr><td>心血管リスク(重度の場合)</td><td>高い</td><td>健常者に近づく</td></tr>
            </tbody>
          </table>
        </div>
        <p class="viz-note">出典:Sleep Foundation「CPAP Benefits」、Marin JM, et al. Lancet. 2005;365:1046-1053</p>
      </div>
    `,
    sources: [
      { label: "Marin JM et al. “Long-term cardiovascular outcomes in men with obstructive sleep apnoea-hypopnoea with or without treatment with CPAP.” Lancet. 2005;365:1046-1053.", url: "https://www.sciencedirect.com/science/article/abs/pii/S0140673605711417" },
      { label: "Sleep Foundation「CPAP Benefits」", url: "https://www.sleepfoundation.org/cpap/cpap-machine-benefits" }
    ]
  },
  {
    title: "CPAPを無理なく続けるための、ちょっとしたコツ",
    date: "2026-09-04",
    body: "CPAPは「使い続けてこそ」効果を発揮する治療です。目安としてよく言われるのが、一晩4時間以上、月の7割以上の夜に使うこと。とはいえ最初はマスクの違和感や空気の圧力に戸惑う人も少なくありません。コツは焦らないことです。まずは昼間の短時間から装着に慣れる、マスクは自分の顔に合うものを医療スタッフと一緒に探す、加湿機能を使って喉の乾燥を防ぐ、そしてマスクやホースはこまめに洗って清潔に保つ――こうした小さな積み重ねが継続のカギになります。うまくいかない日があっても大丈夫、その都度サイズや設定を見直せば快適さは着実に改善していきます。最初の数週間を乗り越えれば、「これなしでは眠れない」と感じるようになる人も多いです。困ったことがあれば一人で悩まず、担当のクリニックや業者にすぐ相談できる関係を作っておくのもポイントです。自分のペースで、気長に付き合っていきましょう。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:継続の目安ライン</p>
        <div class="viz-bars">
          <div class="bar-row">
            <span class="bar-label">1晩あたりの使用時間</span>
            <span class="bar-track"><span class="bar-fill" style="width:66.7%"></span><span class="bar-marker" style="left:66.7%"></span></span>
            <span class="bar-value">4時間以上</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">30日のうち使用した夜の割合</span>
            <span class="bar-track"><span class="bar-fill" style="width:70%"></span><span class="bar-marker" style="left:70%"></span></span>
            <span class="bar-value">70%以上</span>
          </div>
        </div>
        <p class="viz-note">目印(┃)がクリア目安のライン。出典:Sleep Foundation「CPAP Compliance」</p>
      </div>
    `,
    sources: [
      { label: "Sleep Foundation「CPAP Compliance: What It Is and Why It's Important」", url: "https://www.sleepfoundation.org/cpap/cpap-compliance" },
      { label: "Sleep Foundation「CPAP Machines: What They Are, How They Work, and Tips for Use」", url: "https://www.sleepfoundation.org/cpap" }
    ]
  }
];
