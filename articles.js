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
    conclusion: "いびきは、眠っている間に気道が狭くなっているサインで、無呼吸が隠れている可能性があります。",
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
    conclusion: "日中の強い眠気は単純な寝不足ではなく、睡眠時無呼吸による眠りの質の低下が原因のことがあります。",
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
    conclusion: "睡眠時無呼吸症候群とは、眠っている間に呼吸が繰り返し止まる病気で、世界で9億人以上が罹患していると推計されています。",
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
    conclusion: "睡眠時無呼吸の重症度が上がるほど、高血圧を発症するリスクは段階的に高くなることが分かっています。",
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
    conclusion: "重度の睡眠時無呼吸を放置すると心血管イベントのリスクが上がりますが、CPAP治療によってそのリスクは大きく下げられます。",
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
    conclusion: "未治療の睡眠時無呼吸は日中の強い眠気を招き、居眠り運転による重大事故の一因になり得ます。",
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
    conclusion: "睡眠時無呼吸の検査は、施設での一泊検査だけでなく自宅でできる簡易検査もあり、以前より気軽に受けられます。",
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
    conclusion: "CPAPは、寝ている間に空気を送り続けて気道を開いた状態に保つことで無呼吸を防ぐ治療法です。",
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
    conclusion: "CPAPを継続すると日中の眠気や集中力が改善し、心血管イベントのリスクも下がることが研究で示されています。",
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
    conclusion: "CPAPは「1晩4時間以上・月の7割以上の夜」使い続けることで効果を発揮する治療です。",
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
  },
  {
    title: "肥満治療薬が無呼吸の重症度まで下げるかもしれません",
    date: "2026-09-06",
    conclusion: "肥満を伴う中等度から重度の睡眠時無呼吸の人がチルゼパチドという減量薬を使うと、無呼吸の重症度が大きく下がることが臨床試験で示されました。",
    body: "睡眠時無呼吸と肥満が深く関係していることは、これまでの記事でもお伝えしてきました。では体重そのものを減らす薬を使うと、無呼吸はどうなるのでしょうか。2024年に発表された「SURMOUNT-OSA」という臨床試験では、肥満を伴う中等度〜重度の無呼吸がある人にチルゼパチドという薬を1年間投与したところ、1時間あたりの無呼吸・低呼吸の回数(AHI)がプラセボ群に比べて大幅に減少し、体重も平均で2割近く落ちたという結果が出ました。すでにCPAPを使っている人が併用した場合でも、同じように大きな改善が見られたそうです。もちろんこの薬は万能ではなく、副作用や個人差もあるため自己判断での使用はできません。ただ、体重管理という切り口からも無呼吸にアプローチできる選択肢が増えてきたのは、心強いニュースと言えそうです。気になる人は、CPAPと合わせて肥満治療の専門医にも相談してみる価値がありそうです。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:チルゼパチド1年投与によるAHI改善率(SURMOUNT-OSA試験)</p>
        <div class="viz-bars">
          <p class="bar-group-label">CPAP未使用グループ</p>
          <div class="bar-row">
            <span class="bar-label">プラセボ群</span>
            <span class="bar-track"><span class="bar-fill" style="width:8.0%"></span></span>
            <span class="bar-value">-5.0%</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">チルゼパチド群</span>
            <span class="bar-track"><span class="bar-fill" style="width:87.6%"></span></span>
            <span class="bar-value">-55.0%</span>
          </div>
          <p class="bar-group-label">CPAP併用グループ</p>
          <div class="bar-row">
            <span class="bar-label">プラセボ群</span>
            <span class="bar-track"><span class="bar-fill" style="width:10.2%"></span></span>
            <span class="bar-value">-6.4%</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">チルゼパチド群</span>
            <span class="bar-track"><span class="bar-fill" style="width:100%"></span></span>
            <span class="bar-value">-62.8%</span>
          </div>
        </div>
        <p class="viz-note">出典:Malhotra A, et al. N Engl J Med. 2024;391:1193-1205(52週投与、AHIのベースラインからの変化率)</p>
      </div>
      <div class="viz">
        <p class="viz-title">図:1年後の体重変化(チルゼパチド群平均)</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">-18.1%</span>
            <span class="stat-label">CPAP未使用グループでの体重減少率(52週後、チルゼパチド群平均)</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">-20.1%</span>
            <span class="stat-label">CPAP併用グループでの体重減少率(52週後、チルゼパチド群平均)</span>
          </div>
        </div>
      </div>
    `,
    sources: [
      { label: "Malhotra A et al. “Tirzepatide for the Treatment of Obstructive Sleep Apnea and Obesity.” N Engl J Med. 2024;391:1193-1205.", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2404881" },
      { label: "American Diabetes Association「Use of Tirzepatide Shown to Improve Sleep Apnea and Cardiovascular Outcomes」", url: "https://diabetes.org/newsroom/press-releases/use-tirzepatide-shown-improve-sleep-apnea-and-cardiovascular-outcomes" }
    ]
  },
  {
    title: "「眠れない」のに「呼吸も止まる」、実はよくある組み合わせなんです",
    date: "2026-09-07",
    conclusion: "不眠症とOSAは併発しやすく、閉塞性睡眠時無呼吸の患者の4〜6割に不眠症状がみられます。",
    body: "「呼吸は止まっているのに、そもそも寝つけない」——そんな厄介な組み合わせがあります。医学的には「COMISA」と呼ばれ、閉塞性睡眠時無呼吸(OSA)の患者さんの実に4〜6割に不眠症状が併存していると報告されています。厄介なのは、この2つがお互いを悪化させやすいことです。呼吸が止まって目が覚めるたびに不安が募って寝つきが悪くなり、逆に眠れないストレスで交感神経が高ぶり、無呼吸がさらに悪化する…という悪循環に陥りやすいのです。さらにCPAPを装着しても、そもそも寝つけなければ十分な使用時間を確保できません。近年の研究では、不眠症の認知行動療法(CBT-I)とCPAPを組み合わせることで、単独の治療より良い結果が得られると分かってきました。「眠れない」と「呼吸が止まる」、両方の症状に心当たりがあるなら、どちらか一方だけでなく両面から相談してみる価値がありそうです。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:不眠症の寛解率(MATRICS試験、CBT-IとPAPの併用効果)</p>
        <div class="viz-bars">
          <div class="bar-row">
            <span class="bar-label">PAP単独</span>
            <span class="bar-track"><span class="bar-fill fill-warn" style="width:63.5%"></span></span>
            <span class="bar-value">40%</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">CBT-I先行→PAP<br><span class="bar-sub">順次併用</span></span>
            <span class="bar-track"><span class="bar-fill" style="width:100%"></span></span>
            <span class="bar-value">63%</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">CBT-IとPAP<br><span class="bar-sub">同時併用</span></span>
            <span class="bar-track"><span class="bar-fill" style="width:90.5%"></span></span>
            <span class="bar-value">57%</span>
          </div>
        </div>
        <p class="viz-note">出典:Ong JC, et al. Sleep. 2020;43(9):zsaa041(MATRICS試験、治療後の不眠症寛解率)</p>
      </div>
      <div class="viz">
        <p class="viz-title">図:OSA患者における不眠症状の併存率</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">4〜6割</span>
            <span class="stat-label">閉塞性睡眠時無呼吸(OSA)の患者のうち、不眠症状も併せ持つとされる割合</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">121人</span>
            <span class="stat-label">CBT-IとPAPの併用効果を検証したMATRICS試験の参加者数</span>
          </div>
        </div>
      </div>
    `,
    sources: [
      { label: "Sleep Foundation「Sleep Apnea vs. Insomnia」", url: "https://www.sleepfoundation.org/insomnia/sleep-apnea-vs-insomnia" },
      { label: "American Academy of Sleep Medicine「Talking Sleep: Comorbid Insomnia and Sleep Apnea (COMISA)」", url: "https://aasm.org/talking-sleep-comorbid-insomnia-sleep-apnea-comisa/" }
    ]
  },
  {
    title: "CPAPが合わなくても、実はマウスピースという選択肢があるんです",
    date: "2026-09-08",
    conclusion: "CPAPが合わない・続けにくいと感じる軽度〜中等度の無呼吸の人には、口腔内装置(マウスピース型)という治療の選択肢もあります。",
    body: "これまで紹介してきたCPAPは無呼吸治療の代表格ですが、実は他にも「口腔内装置(オーラルアプライアンス)」という選択肢があるんです。見た目はスポーツ用マウスガードのような装置で、下顎をわずかに前方へ固定することで、舌の付け根が喉に落ち込むのを防ぎ、気道を広げる仕組みです。米国睡眠医学会と歯科睡眠医学会の合同ガイドラインでは、軽度〜中等度の無呼吸の人や、CPAPのマスクがどうしても合わない・圧迫感が苦手という人への選択肢として位置づけられています。効果の強さで比べるとCPAPには一歩譲るものの、装着の負担が少ない分続けやすく、結果として得られる改善効果はCPAPと同じくらいになることも珍しくありません。ただし全員に効くわけではなく、思ったほど改善しない人もいるため、歯科医と睡眠専門医の連携した調整が欠かせません。CPAPで挫折した経験がある人ほど、一度相談してみる価値がある治療法かもしれません。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:CPAPと口腔内装置(マウスピース型)の比較</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th></th><th>CPAP</th><th>口腔内装置</th></tr>
            </thead>
            <tbody>
              <tr><td>仕組み</td><td>空気の圧力で気道を開く</td><td>下顎を前方に固定し気道を広げる</td></tr>
              <tr><td>主な対象</td><td>軽度〜重度</td><td>軽度〜中等度、CPAP不耐の人</td></tr>
              <tr><td>効果の強さ</td><td>高い</td><td>CPAPよりやや弱め</td></tr>
              <tr><td>装着の負担</td><td>マスク・ホースがある</td><td>マウスガードに近く軽い</td></tr>
              <tr><td>続けやすさ</td><td>慣れが必要な人も</td><td>比較的続けやすい傾向</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    sources: [
      { label: "Sleep Foundation「Oral Appliance Therapy for Sleep Apnea: An Overview」", url: "https://www.sleepfoundation.org/sleep-apnea/oral-appliance-for-sleep-apnea" },
      { label: "American Academy of Sleep Medicine「AASM and AADSM issue new joint clinical practice guideline for oral appliance therapy」", url: "https://aasm.org/aasm-and-aadsm-issue-new-joint-clinical-practice-guideline-for-oral-appliance-therapy/" }
    ]
  },
  {
    title: "CPAPもマウスピースも合わなかった人に、舌を動かす植込み装置という道もあるんです",
    date: "2026-09-09",
    conclusion: "CPAPやマウスピースが合わない中等度〜重度の無呼吸には、呼吸に合わせて舌の神経を刺激し気道を広げる植込み型装置(舌下神経刺激療法)という治療の選択肢もあります。",
    body: "これまでCPAPとマウスピース型の装置を紹介してきましたが、実はもう一つ「舌下神経刺激療法」という治療法があるんです。胸のあたりに小さな装置を手術で植え込み、呼吸のリズムに合わせて舌を動かす神経に軽い電気刺激を送ることで、舌の付け根が喉の奥へ落ち込むのを防ぎ、気道を確保する仕組みです。米国の大規模臨床試験(STAR試験)では、中等度〜重度の無呼吸がある人にこの装置を12か月使ってもらったところ、1時間あたりの無呼吸・低呼吸の回数が平均29.3回から9.0回へと、およそ7割減少したと報告されています。2014年に米国FDAの承認を受けたこの治療は、マスクの圧迫感でCPAPを続けられなかった人や、口腔内装置でも改善しなかった人への選択肢とされています。ただし手術を伴うため誰にでも向くわけではなく、適応があるかは事前の検査で見極める必要があります。気になる人は、まず睡眠専門医に相談してみるとよさそうです。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:舌下神経刺激療法によるAHIの変化(STAR試験、12か月後)</p>
        <div class="viz-bars">
          <div class="bar-row">
            <span class="bar-label">治療前</span>
            <span class="bar-track"><span class="bar-fill fill-warn" style="width:100%"></span></span>
            <span class="bar-value">29.3回/時</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">12か月後</span>
            <span class="bar-track"><span class="bar-fill" style="width:30.7%"></span></span>
            <span class="bar-value">9.0回/時</span>
          </div>
        </div>
        <p class="viz-note">出典:Strollo PJ, et al. N Engl J Med. 2014;370:139-149(中央値、STAR試験12か月時点)</p>
      </div>
      <div class="viz">
        <p class="viz-title">図:舌下神経刺激療法の基礎データ</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">約7割</span>
            <span class="stat-label">STAR試験12か月時点でのAHI減少率(中央値)</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">2014年</span>
            <span class="stat-label">米国FDAが装置を承認した年</span>
          </div>
        </div>
      </div>
    `,
    sources: [
      { label: "Strollo PJ et al. “Upper-Airway Stimulation for Obstructive Sleep Apnea.” N Engl J Med. 2014;370:139-149.", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1308659" },
      { label: "American Academy of Sleep Medicine「Overview of FDA-approved hypoglossal nerve stimulation devices for obstructive sleep apnea」", url: "https://aasm.org/overview-of-fda-approved-hypoglossal-nerve-stimulation-devices-for-obstructive-sleep-apnea/" }
    ]
  },
  {
    title: "むずむず脚症候群の治療薬、実は主役交代していたんです",
    date: "2026-09-10",
    conclusion: "むずむず脚症候群の治療指針は2025年に大きく改定され、長年の定番だったドパミン作動薬に代わり鉄剤とガバペンチン系の薬が新たな第一選択になりました。",
    body: "むずむず脚症候群(RLS)は、夜になると脚に「むずむず」「じっとしていられない」という不快な感覚が出て、動かすと少し楽になる病気です。夕方から夜にかけて症状が強まりやすく、寝つきや眠りの質にも影響しやすいのが厄介なところです。実はこの治療の「定番」が、2025年のAASM(米国睡眠医学会)新ガイドラインで大きく様変わりしました。長年の第一選択薬だったドパミン作動薬は、続けるうちに症状が早い時間帯から出たり範囲が広がったりする「増悪」が起きやすいと分かってきたためです。代わって新たに第一選択に位置づけられたのが、鉄剤による補充治療と、ガバペンチンなどのお薬です。実はRLSの背景には鉄不足が関わっていることが多く、貧血がなくても鉄を補うだけで症状が和らぐ人もいるそうです。もし今ドパミン作動薬を使っていて症状が以前より強くなったと感じるなら、自己判断でやめず、まずは主治医に相談してみるとよさそうです。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:RLS治療の第一選択(2012年ガイドライン → 2025年AASM新ガイドライン)</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th></th><th>2012年までの位置づけ</th><th>2025年AASM新ガイドライン</th></tr>
            </thead>
            <tbody>
              <tr><td>ドパミン作動薬</td><td>第一選択</td><td>推奨されず(増悪リスクのため)</td></tr>
              <tr><td>鉄剤(経口・静脈)</td><td>補助的な位置づけ</td><td>第一選択</td></tr>
              <tr><td>ガバペンチン系</td><td>選択肢の一つ</td><td>第一選択</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="viz">
        <p class="viz-title">図:新ガイドラインが示す鉄の目標値</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">100 ng/mL超</span>
            <span class="stat-label">治療で目指す血清フェリチン値の目安</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">20%超</span>
            <span class="stat-label">治療で目指すトランスフェリン飽和度の目安</span>
          </div>
        </div>
        <p class="viz-note">出典:AASM「Summary of new clinical practice guideline for RLS and PLMD」(2025年)</p>
      </div>
    `,
    sources: [
      { label: "American Academy of Sleep Medicine「Summary of new clinical practice guideline for RLS and PLMD」", url: "https://aasm.org/summary-of-new-clinical-practice-guideline-for-rls-and-plmd/" },
      { label: "Mayo Clinic Press「Restless legs syndrome」", url: "https://mcpress.mayoclinic.org/living-well/restless-legs-syndrome/" }
    ]
  },
  {
    title: "ナルコレプシーの薬に、原因そのものに効くタイプが登場したって知っていますか",
    date: "2026-09-11",
    conclusion: "2026年8月、FDAは脳内のオレキシン不足という原因そのものに直接働きかける経口薬「オルゼイフル」を、ナルコレプシー1型の治療薬として初めて承認しました。",
    body: "ナルコレプシーは、脳を覚醒させ続けるのに欠かせない「オレキシン」という物質を作る神経細胞が失われることで起こる病気です。日中に耐えがたい眠気に襲われたり、笑ったり驚いたりした拍子に体の力がふっと抜ける「情動脱力発作(カタプレキシー)」が起きたりします。米国では2000人に1人程度とされ、決して珍しい病気ではありません。これまでの薬は眠気やカタプレキシーをそれぞれ別々に抑える対症療法が中心でしたが、2026年8月にFDAが承認した経口薬「オルゼイフル(一般名オベポレクストン)」は、不足しているオレキシンの働きを直接補うタイプとして初めて認められた薬なんです。臨床試験では、日中に起きていられる時間を測る検査の値が平均で大きく伸び、カタプレキシーの発作回数も中央値で8割以上減ったと報告されています。無呼吸によるいびきや眠気とは別の病気ですが、「原因そのものに効く薬」の登場は睡眠医療全体にとっても心強いニュースです。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:MWT(眠気を測る検査)での平均睡眠潜時の変化(FirstLight/RadiantLight試験、高用量群)</p>
        <div class="viz-bars">
          <div class="bar-row">
            <span class="bar-label">投与前</span>
            <span class="bar-track"><span class="bar-fill fill-warn" style="width:20%"></span></span>
            <span class="bar-value">約4分</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">12週間後</span>
            <span class="bar-track"><span class="bar-fill" style="width:100%"></span></span>
            <span class="bar-value">約20分</span>
          </div>
        </div>
        <p class="viz-note">出典:FDA・AASM発表(FirstLight/RadiantLight試験、高用量群の平均値)</p>
      </div>
      <div class="viz">
        <p class="viz-title">図:承認の基礎データ</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">80%超</span>
            <span class="stat-label">カタプレキシー(情動脱力発作)の週間発作回数の減少率(中央値)</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">1/2000人</span>
            <span class="stat-label">米国におけるナルコレプシー1型の推定有病率</span>
          </div>
        </div>
      </div>
    `,
    sources: [
      { label: "FDA「FDA Approves First Drug to Treat the Full Range of Narcolepsy Type 1 Symptoms」", url: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-drug-treat-full-range-narcolepsy-type-1-symptoms" },
      { label: "American Academy of Sleep Medicine「FDA approves Orzeyful for narcolepsy type 1 in adults」", url: "https://aasm.org/fda-approves-orzeyful-for-narcolepsy-type-1-in-adults/" }
    ]
  },
  {
    title: "「錠剤を1錠飲むだけ」で無呼吸を抑える薬が登場するかもしれません",
    date: "2026-09-12",
    conclusion: "体重を減らす薬とは別に、気道の筋肉に直接働きかけて無呼吸を抑える飲み薬が、臨床試験で高い効果を示しました。",
    body: "これまで無呼吸の治療といえばCPAPやマウスピース型の装置、手術に近い植込み型の装置が中心でした。そこに新しく加わろうとしているのが、就寝前に錠剤を1錠飲むだけの治療薬です。「AD109」と呼ばれるこの薬は、2つの成分の組み合わせで、眠っている間も喉まわりの筋肉の緊張を保ち、気道が塞がりにくい状態を作ります。以前紹介した肥満治療薬のように体重を落とすのではなく、筋肉そのものに直接働きかけるのが特徴です。大規模な臨床試験では、この薬を使った人の1時間あたりの無呼吸・低呼吸の回数が、プラセボ群に比べて大きく減少し、きちんと服用できた人では半分以上も減ったと報告されています。副作用として口の渇きや不眠、吐き気が見られたものの、深刻なものはなかったそうです。マスクの圧迫感が苦手だった人にとって、選択肢が増える嬉しいニュースかもしれません。まだ承認前の段階なので、実際に使えるまでは今の治療を続けることが大切です。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:新薬AD109によるAHI(無呼吸・低呼吸指数)の変化(SynAIRgy試験)</p>
        <div class="viz-bars">
          <p class="bar-group-label">ITT解析(全参加者、モデル推定値)</p>
          <div class="bar-row">
            <span class="bar-label">プラセボ群</span>
            <span class="bar-track"><span class="bar-fill fill-warn" style="width:31.7%"></span></span>
            <span class="bar-value">-17.6%</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">AD109群</span>
            <span class="bar-track"><span class="bar-fill" style="width:79.3%"></span></span>
            <span class="bar-value">-44.1%</span>
          </div>
          <p class="bar-group-label">on-treatment解析(服薬をきちんと継続できた人)</p>
          <div class="bar-row">
            <span class="bar-label">AD109群</span>
            <span class="bar-track"><span class="bar-fill" style="width:100%"></span></span>
            <span class="bar-value">-55.6%</span>
          </div>
        </div>
        <p class="viz-note">出典:Strollo PJ, et al. Am J Respir Crit Care Med. 2026;212(7):1569(SynAIRgy試験、AHIのベースラインからの変化率)</p>
      </div>
      <div class="viz">
        <p class="viz-title">図:AD109服用後の改善データ</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">51.2%</span>
            <span class="stat-label">無呼吸の重症度区分が1段階以上改善した参加者の割合</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">22.3%</span>
            <span class="stat-label">治療後にAHIが5未満まで下がった参加者の割合</span>
          </div>
        </div>
      </div>
    `,
    sources: [
      { label: "Strollo PJ et al. “Aroxybutynin and Atomoxetine (AD109) for Obstructive Sleep Apnea: A Randomized Phase 3 Trial (SynAIRgy).” Am J Respir Crit Care Med. 2026;212(7):1569.", url: "https://academic.oup.com/ajrccm/article/212/7/1569/8680221" },
      { label: "American Academy of Sleep Medicine「Apnimed announces positive results in clinical trial of sleep apnea medication」", url: "https://aasm.org/apnimed-announces-positive-results-in-clinical-trial-of-sleep-apnea-medication/" }
    ]
  },
  {
    title: "無呼吸を放っておくと、将来の「もの忘れ」にもつながるかもしれません",
    date: "2026-09-13",
    conclusion: "睡眠時無呼吸のある人は、ない人に比べて将来認知症を発症するリスクがおよそ3割高いことが、大規模メタ解析で示されています。",
    body: "「最近ちょっと物忘れが増えたな」と感じたことはありませんか?実はその背景に、睡眠時無呼吸が関わっている可能性があるんです。2025年に発表された大規模メタ解析では、無呼吸のある人はない人に比べて、将来あらゆる種類の認知症を発症するリスクが約3割高く、アルツハイマー病に限るとリスクは約45%も高いという結果が出ました。呼吸が止まるたびに脳への酸素供給が一時的に減り、それが積み重なって脳にダメージが蓄積していくためではないかと考えられています。実際、別の調査でも、無呼吸の疑いがある人はそうでない人より軽度の認知障害や認知症と診断される割合が高いと確認されています。もの忘れは加齢のせいと片付けられがちですが、治療可能な無呼吸が隠れていることもあるんです。CPAP治療で無呼吸を改善することが、将来の脳の健康を守ることにもつながるかもしれません。心当たりのある人は専門医に相談してみましょう。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:睡眠時無呼吸と認知症・アルツハイマー病の発症リスク(メタ解析)</p>
        <div class="viz-bars">
          <p class="bar-group-label">全認知症</p>
          <div class="bar-row">
            <span class="bar-label">無呼吸なし<br><span class="bar-sub">基準</span></span>
            <span class="bar-track"><span class="bar-fill fill-calm" style="width:69.0%"></span></span>
            <span class="bar-value">1.00倍</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">無呼吸あり</span>
            <span class="bar-track"><span class="bar-fill fill-warn" style="width:91.7%"></span></span>
            <span class="bar-value">1.33倍</span>
          </div>
          <p class="bar-group-label">アルツハイマー病</p>
          <div class="bar-row">
            <span class="bar-label">無呼吸なし<br><span class="bar-sub">基準</span></span>
            <span class="bar-track"><span class="bar-fill fill-calm" style="width:69.0%"></span></span>
            <span class="bar-value">1.00倍</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">無呼吸あり</span>
            <span class="bar-track"><span class="bar-fill fill-warn" style="width:100%"></span></span>
            <span class="bar-value">1.45倍</span>
          </div>
        </div>
        <p class="viz-note">出典:Ungvari Z, et al. GeroScience. 2025(メタ解析、ハザード比)</p>
      </div>
      <div class="viz">
        <p class="viz-title">図:無呼吸の疑いがある人・ない人での認知機能の状態(米国の集団調査)</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">12.7% vs 8.0%</span>
            <span class="stat-label">軽度の認知障害(CIND)がみられた割合(無呼吸疑いあり vs なし)</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">3.2% vs 2.0%</span>
            <span class="stat-label">認知症と判定された割合(無呼吸疑いあり vs なし)</span>
          </div>
        </div>
        <p class="viz-note">出典:Shieu MM, et al. J Clin Sleep Med. 2022;18(4):1177-1185(2016年Health and Retirement Study)</p>
      </div>
    `,
    sources: [
      { label: "Ungvari Z et al. “Sleep disorders increase the risk of dementia, Alzheimer's disease, and cognitive decline: a meta-analysis.” GeroScience. 2025.", url: "https://pubmed.ncbi.nlm.nih.gov/40214959/" },
      { label: "Shieu MM et al. “The association between obstructive sleep apnea risk and cognitive disorders: a population-based study.” J Clin Sleep Med. 2022;18(4):1177-1185.", url: "https://pubmed.ncbi.nlm.nih.gov/34913866/" }
    ]
  },
  {
    title: "夜勤明けの「眠れない」、実はちゃんとした治療指針があるんです",
    date: "2026-09-14",
    conclusion: "夜勤や早朝勤務で体内時計と睡眠時間がずれる「交代勤務障害」は交代勤務者の4人に1人以上にみられ、光や薬による対処法が指針として示されています。",
    body: "夜勤や早朝勤務がある人の中には、勤務が終わって疲れているのになぜか眠れない、逆に仕事中に強い眠気に襲われるという人がいます。これは「交代勤務障害」と呼ばれる立派な睡眠障害で、体内時計が示す「眠る時間」と実際に眠らなければならない時間がずれてしまうことで起こるんです。2021年に発表されたメタ解析では、夜勤を含む交代勤務者のおよそ3割がこの障害の基準を満たすと報告されています。厄介なのは、体内時計そのものはなかなかシフトに合わせて調整されにくいこと。そこで2025年にAASMが公表した新しいガイドラインでは、体内時計を無理に合わせようとするよりも、夜勤中の光の浴び方を工夫したり、必要に応じてメラトニン受容体作動薬などの薬を使ったりして、日中の不眠や眠気そのものを和らげることに重点が置かれています。「夜勤だから仕方ない」と諦めず、症状が強いなら睡眠専門医に相談してみるのも一つの手かもしれません。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:交代勤務障害の有病率(勤務形態別)</p>
        <div class="viz-bars">
          <div class="bar-row">
            <span class="bar-label">日勤中心の労働者</span>
            <span class="bar-track"><span class="bar-fill" style="width:31.5%"></span></span>
            <span class="bar-value">10.1%</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">交代勤務者全体</span>
            <span class="bar-track"><span class="bar-fill" style="width:82.6%"></span></span>
            <span class="bar-value">26.5%</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">夜勤を含む労働者</span>
            <span class="bar-track"><span class="bar-fill fill-warn" style="width:100%"></span></span>
            <span class="bar-value">32.1%</span>
          </div>
        </div>
        <p class="viz-note">出典:Pallesen S, et al. Sleep Med Rev. 2021;56:101409(29件の研究によるメタ解析)</p>
      </div>
      <div class="viz">
        <p class="viz-title">図:交代勤務障害をめぐる基礎データ</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">2025年</span>
            <span class="stat-label">AASMが交代勤務障害の新しい治療ガイドラインを公表した年</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">約3割</span>
            <span class="stat-label">交代勤務者のうち交代勤務障害の基準を満たすとされる割合</span>
          </div>
        </div>
      </div>
    `,
    sources: [
      { label: "American Academy of Sleep Medicine「Management of Shift Work Disorder: An AASM Clinical Practice Guideline」", url: "https://aasm.org/wp-content/uploads/2025/08/Extrinsic-CRSWD-CPG_SWD_May2025.pdf" },
      { label: "Sleep Foundation「Shift Work Disorder: Signs, Diagnosis, and How to Manage It」", url: "https://www.sleepfoundation.org/shift-work-disorder" }
    ]
  },
  {
    title: "女性の無呼吸は見えにくい、更年期を境に急上昇するって知っていますか",
    date: "2026-09-15",
    conclusion: "女性の睡眠時無呼吸は男性と異なる症状で見逃されやすく、閉経後はそのリスクが閉経前のおよそ3.5倍に高まります。",
    body: "睡眠時無呼吸というと「大きないびきをかく中年男性」のイメージが強いかもしれませんが、実は女性の無呼吸は驚くほど見逃されやすいんです。というのも、女性に多い症状は男性の典型例とはちょっと違うから。大きないびきや呼吸停止の目撃ではなく、寝つきの悪さ、朝の頭痛、強い疲労感、気分の落ち込みといった、一見「更年期のせい」「ストレスのせい」と思われがちな症状で現れることが多いんです。実は女性ホルモンには気道を守る働きがあると考えられていて、閉経を境にそのバリアが薄れ、無呼吸のリスクは閉経前に比べておよそ3.5倍にも跳ね上がると報告されています。さらにMayo Clinicの研究では、更年期世代の女性の多くが経験するほてりや寝汗も、無呼吸リスクの高さと関係している可能性が示されました。「更年期だから仕方ない」と自己判断せず、気になる症状があれば一度相談してみると、案外あっさり原因が見つかるかもしれません。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:閉経前後での睡眠時無呼吸リスク(相対リスク)</p>
        <div class="viz-bars">
          <div class="bar-row">
            <span class="bar-label">閉経前<br><span class="bar-sub">基準</span></span>
            <span class="bar-track"><span class="bar-fill fill-calm" style="width:28.6%"></span></span>
            <span class="bar-value">1.00倍</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">閉経後</span>
            <span class="bar-track"><span class="bar-fill fill-warn" style="width:100%"></span></span>
            <span class="bar-value">3.5倍</span>
          </div>
        </div>
        <p class="viz-note">出典:Sleep Foundation「Sleep Apnea Symptoms in Women」</p>
      </div>
      <div class="viz">
        <p class="viz-title">図:女性の無呼吸をめぐる基礎データ</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">3.5倍</span>
            <span class="stat-label">閉経後に睡眠時無呼吸になりやすくなる、閉経前と比べた倍率</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">約8割</span>
            <span class="stat-label">更年期世代の女性がほてりや寝汗を経験する割合(無呼吸リスクとの関連が報告されている)</span>
          </div>
        </div>
      </div>
    `,
    sources: [
      { label: "Sleep Foundation「Sleep Apnea Symptoms in Women」", url: "https://www.sleepfoundation.org/sleep-apnea/sleep-apnea-symptoms-in-women" },
      { label: "Mayo Clinic News Network「Research finds hot flashes, night sweats connected to obstructive sleep apnea risk in middle-aged women」", url: "https://newsnetwork.mayoclinic.org/discussion/research-finds-hot-flashes-night-sweats-connected-to-obstructive-sleep-apnea-risk-in-middle-aged-women/" }
    ]
  }
];

// build.js（Node）から読み込むためのエクスポート。ブラウザでは無視される。
if (typeof module !== "undefined") {
  module.exports = { ARTICLES };
}
