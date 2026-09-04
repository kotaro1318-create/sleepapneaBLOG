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
    title: "肥満とOSA、実は「悪循環」の関係です",
    date: "2026-09-04",
    conclusion: "肥満は無呼吸を悪化させ、無呼吸はさらに太りやすい体を作るという、双方向の悪循環があります。",
    body: "肥満とOSAは、片方がもう片方を悪化させる「悪循環」の関係にあることが知られています。体重が増えると首まわりや喉の奥に脂肪がつき、気道が狭くなって無呼吸が起こりやすくなります。逆にOSAがあると眠りが浅くなって日中の活動量が落ち、食欲を調整するホルモンのバランスも乱れやすくなるため、さらに体重が増えやすくなるのです。「太ったから息苦しい」だけでなく「息苦しいから太りやすい」という側面もあるということ。どちらか一方だけを頑張るのではなく、無呼吸の治療と体重管理を同時に進めることが、この悪循環を断ち切る近道になります。CPAPで眠りの質が上がると、日中動く元気も出やすくなったという声もよく聞かれます。まずは自分がこのループのどこにいるか、意識してみましょう。体重が落ちにくいと感じている人ほど、実は無呼吸が隠れているサインかもしれません。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:肥満とOSAの悪循環</p>
        <div class="viz-diagram-wrap">
          <svg viewBox="0 0 620 165" role="img" aria-label="体重増加、気道が狭くなる、OSA、ホルモン変化と活動量低下が円環的につながる悪循環の図">
            <g transform="translate(10,20)">
              <rect width="130" height="55" rx="8" class="d-box"/>
              <text x="65" y="24" text-anchor="middle" class="d-label-s">体重増加</text>
              <text x="65" y="40" text-anchor="middle" class="d-sublabel">首・喉に脂肪</text>
            </g>
            <path d="M144 47 L166 47" class="d-airflow" marker-end="url(#arrowc1)"/>
            <g transform="translate(172,20)">
              <rect width="130" height="55" rx="8" class="d-box"/>
              <text x="65" y="24" text-anchor="middle" class="d-label-s">気道が狭くなる</text>
              <text x="65" y="40" text-anchor="middle" class="d-sublabel">OSA発症</text>
            </g>
            <path d="M306 47 L328 47" class="d-airflow" marker-end="url(#arrowc1)"/>
            <g transform="translate(334,20)">
              <rect width="130" height="55" rx="8" class="d-box"/>
              <text x="65" y="24" text-anchor="middle" class="d-label-s">眠りが浅くなる</text>
              <text x="65" y="40" text-anchor="middle" class="d-sublabel">日中の活動量低下</text>
            </g>
            <path d="M468 47 L490 47" class="d-airflow" marker-end="url(#arrowc1)"/>
            <g transform="translate(480,20)">
              <rect width="130" height="55" rx="8" class="d-box"/>
              <text x="65" y="24" text-anchor="middle" class="d-label-s">食欲ホルモンの乱れ</text>
              <text x="65" y="40" text-anchor="middle" class="d-sublabel">食欲が増しやすい</text>
            </g>
            <path d="M545 75 C 545 135, 75 135, 75 75" class="d-airflow" fill="none" marker-end="url(#arrowc1)"/>
            <defs>
              <marker id="arrowc1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" class="d-arrowhead"/>
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    `,
    sources: [
      { label: "NHLBI「Sleep Apnea - Causes and Risk Factors」", url: "https://www.nhlbi.nih.gov/health/sleep-apnea/causes" },
      { label: "PMC「Interactions Between Obesity and Obstructive Sleep Apnea: Implications for Treatment」", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3021364/" }
    ]
  },
  {
    title: "お腹まわりの脂肪が、なぜ喉に影響するの?",
    date: "2026-09-04",
    conclusion: "内臓脂肪は気道を支える力を弱め、皮下脂肪よりも無呼吸の重症度と強く関係しています。",
    body: "「お腹が出てきたら、いびきもひどくなった」という話はよく聞きますが、実は内臓脂肪と気道の間には医学的なつながりがあります。首や喉の奥に脂肪がつくと物理的に空気の通り道が狭くなるのはもちろん、お腹まわりの脂肪が増えることで胸郭が圧迫され、気道を縦方向に引っぱる力が弱まることも分かっています。さらに気道を支える筋肉そのものに脂肪が入り込むと、筋肉が気道を開いておく力も落ちてしまうのです。皮下脂肪よりも内臓脂肪の方がOSAの重症度と関係が強いという報告もあります。見た目の体重だけでなく、お腹まわりの脂肪こそが気道に効いてくる、というのは知っておいて損はない知識です。ウエストまわりのサイズが気になり始めたら、体重計の数字だけでなく、喉への影響も意識してみてください。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:肥満が気道を狭くする主な経路</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th>経路</th><th>内容</th></tr>
            </thead>
            <tbody>
              <tr><td>咽頭周囲への脂肪沈着</td><td>物理的に空気の通り道が狭くなる</td></tr>
              <tr><td>胸郭・腹部の圧迫</td><td>気道を縦に引っぱる力が弱まる</td></tr>
              <tr><td>気道の筋肉への脂肪沈着</td><td>気道を開いておく筋力が落ちる</td></tr>
              <tr><td>内臓脂肪の蓄積</td><td>皮下脂肪より重症度との関連が強い</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    sources: [
      { label: "Frontiers in Physiology「The impact of obesity on upper airway anatomy...」", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12521235/" },
      { label: "European Respiratory Society「Adipose tissue in obesity and obstructive sleep apnoea」", url: "https://publications.ersnet.org/content/erj/39/3/746" }
    ]
  },
  {
    title: "体重を減らすとAHIはどれくらい下がる?",
    date: "2026-09-04",
    conclusion: "生活習慣の改善による体重減少は無呼吸を有意に改善し、その効果は10年後も持続することが示されています。",
    body: "「痩せたら無呼吸も良くなる」というのは本当なのでしょうか。2型糖尿病と肥満のある人を対象にした大規模な臨床試験Sleep AHEADでは、生活習慣改善によって体重を減らしたグループは、そうでないグループに比べてAHI(無呼吸低呼吸指数)が有意に改善しました。しかも効果は一時的なものではなく、10年後の追跡調査でも、体重の一部がリバウンドしていたにもかかわらず、無呼吸の改善効果は持続していたと報告されています。つまり、たとえ理想の体重まで届かなくても、少し減らすだけで眠りの質に良い変化が期待できるということ。CPAPと並行して体重管理に取り組むことは、遠回りに見えて実は効果的なアプローチなのです。数字だけを追うのではなく、日中の眠気や体調の変化にも目を向けながら、無理のないペースで取り組んでいきましょう。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:Sleep AHEAD試験における体重減少の推移</p>
        <div class="viz-bars">
          <div class="bar-row">
            <span class="bar-label">1年後</span>
            <span class="bar-track"><span class="bar-fill" style="width:100%"></span></span>
            <span class="bar-value">-10.7kg</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">2年後</span>
            <span class="bar-track"><span class="bar-fill" style="width:69.2%"></span></span>
            <span class="bar-value">-7.4kg</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">4年後</span>
            <span class="bar-track"><span class="bar-fill" style="width:47.7%"></span></span>
            <span class="bar-value">-5.1kg</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">10年後</span>
            <span class="bar-track"><span class="bar-fill" style="width:66.4%"></span></span>
            <span class="bar-value">-7.1kg</span>
          </div>
        </div>
        <p class="viz-note">体重の一部がリバウンドしても、無呼吸の改善効果は10年後も持続。出典:Sleep AHEAD研究(JAMA Intern Med 2009 / Am J Respir Crit Care Med 2020)</p>
      </div>
    `,
    sources: [
      { label: "Foster GD, et al. “A Randomized Study on the Effect of Weight Loss on Obstructive Sleep Apnea Among Obese Patients With Type 2 Diabetes: The Sleep AHEAD Study.” JAMA Intern Med. 2009.", url: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/224770" },
      { label: "“Effects of Weight Loss on Obstructive Sleep Apnea Severity. Ten-Year Results of the Sleep AHEAD Study.” Am J Respir Crit Care Med. 2020.", url: "https://www.atsjournals.org/doi/full/10.1164/rccm.201912-2511OC" }
    ]
  },
  {
    title: "話題のやせ薬とOSA治療、2024年の最新研究",
    date: "2026-09-04",
    conclusion: "2024年のNEJM掲載試験で、肥満治療薬チルゼパチドが体重とあわせてAHIや血圧も改善することが示されました。",
    body: "近年注目されているGLP-1/GIP受容体作動薬(チルゼパチドなど)は、もともと2型糖尿病や肥満の治療薬ですが、2024年にNEJM(ニューイングランド医学誌)に発表された大規模臨床試験SURMOUNT-OSAで、中等度から重度のOSAと肥満のある人に投与したところ、体重の減少とあわせてAHIの改善、炎症マーカー(hsCRP)の低下、収縮期血圧の低下など、複数の指標が同時に良くなったことが報告されました。CPAPのように気道を物理的に広げる治療とは異なり、体重そのものにアプローチする新しい選択肢として注目されています。まだ研究段階の部分もありますが、「肥満とOSAを同時に治療する」という発想は、今後の治療の幅を広げてくれそうです。使用にあたっては医師との相談が前提になりますが、選択肢が増えること自体は心強いニュースといえるでしょう。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:SURMOUNT-OSA試験で改善が見られた項目</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th>項目</th><th>結果</th></tr>
            </thead>
            <tbody>
              <tr><td>体重</td><td>減少</td></tr>
              <tr><td>AHI(無呼吸低呼吸指数)</td><td>改善</td></tr>
              <tr><td>hsCRP(炎症マーカー)</td><td>低下</td></tr>
              <tr><td>収縮期血圧</td><td>低下</td></tr>
            </tbody>
          </table>
        </div>
        <p class="viz-note">中等度〜重度のOSAと肥満がある成人469人を対象とした2件の第3相試験。出典:Malhotra A, et al. N Engl J Med. 2024.</p>
      </div>
    `,
    sources: [
      { label: "Malhotra A, et al. “Tirzepatide for the Treatment of Obstructive Sleep Apnea and Obesity.” N Engl J Med. 2024.", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2404881" },
      { label: "American Diabetes Association「Use of Tirzepatide Shown to Improve Sleep Apnea and Cardiovascular Outcomes」", url: "https://diabetes.org/newsroom/press-releases/use-tirzepatide-shown-improve-sleep-apnea-and-cardiovascular-outcomes" }
    ]
  },
  {
    title: "減量手術でOSAはどれだけ改善する?",
    date: "2026-09-04",
    conclusion: "減量手術はAHIを平均で1時間あたり約19回減少させ、約65%の人でOSAが寛解したと報告されています。",
    body: "食事や運動だけでは体重が落ちにくい重度の肥満がある場合、減量手術(bariatric surgery)という選択肢が検討されることがあります。2023年に発表されたメタ分析では、32件の研究・2,310人のOSA患者を対象に減量手術の効果を調べたところ、AHIが平均で1時間あたり19.3回も減少し、OSAが「寛解」したと判断された人の割合は65%にのぼりました。食事療法などの保存的な体重管理と比較しても、AHIの改善幅は減量手術の方が大きかったと報告されています。もちろん手術には相応のリスクや適応条件があるため誰にでも勧められるものではありませんが、重度の肥満合併OSAに対する有力な選択肢の一つとして知られています。CPAPと手術のどちらが向いているかは体格や重症度によっても変わるため、専門医とじっくり相談しながら決めていくことが大切です。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:AHIの改善幅(1時間あたりの減少回数)</p>
        <div class="viz-bars">
          <div class="bar-row">
            <span class="bar-label">保存的な体重管理</span>
            <span class="bar-track"><span class="bar-fill" style="width:54.9%"></span></span>
            <span class="bar-value">-14.0回</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">減量手術</span>
            <span class="bar-track"><span class="bar-fill" style="width:100%"></span></span>
            <span class="bar-value">-25.5回</span>
          </div>
        </div>
        <p class="viz-note">32件の研究・2,310人を対象としたメタ分析。OSA寛解率は65%。出典:Sleep Breath. 2023.</p>
      </div>
    `,
    sources: [
      { label: "「Bariatric surgery and obstructive sleep apnea: a systematic review and meta-analysis.」Sleep Breath. 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/37145243/" },
      { label: "Frontiers in Sleep「The impact of bariatric surgery on breathing-related polysomnography parameters」", url: "https://www.frontiersin.org/journals/sleep/articles/10.3389/frsle.2023.1212936/full" }
    ]
  },
  {
    title: "メタボリックシンドロームとOSAの深い関係",
    date: "2026-09-04",
    conclusion: "重度の睡眠時無呼吸がある人の約8割はメタボリックシンドロームを合併しているという報告があります。",
    body: "高血圧、高血糖、脂質異常、内臓脂肪型肥満が重なる「メタボリックシンドローム」は、実はOSAととても仲が悪い組み合わせです。研究によると、AHIが15以上の中等度以上のOSAがある人のうち73.3%が、AHI30以上の重度のOSAがある人では80.0%がメタボリックシンドロームの基準を満たしていたと報告されています。一般的な集団でのメタボリックシンドロームの割合が2〜4割程度とされていることを考えると、これはかなり高い数字です。無呼吸による低酸素状態が繰り返されることで、血糖や血圧のコントロールがさらに乱れやすくなるという悪循環も指摘されています。健康診断でメタボを指摘された方は、無呼吸についても一度チェックしてみる価値がありそうです。血糖値や血圧の薬を増やす前に、眠りの質を見直すという選択肢も、覚えておいて損はありません。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:メタボリックシンドロームの有病率</p>
        <div class="viz-bars">
          <div class="bar-row">
            <span class="bar-label">一般集団<br><span class="bar-sub">目安</span></span>
            <span class="bar-track"><span class="bar-fill fill-calm" style="width:37.5%"></span></span>
            <span class="bar-value">約30%</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">AHI 15以上</span>
            <span class="bar-track"><span class="bar-fill fill-warn" style="width:91.6%"></span></span>
            <span class="bar-value">73.3%</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">AHI 30以上</span>
            <span class="bar-track"><span class="bar-fill fill-warn" style="width:100%"></span></span>
            <span class="bar-value">80.0%</span>
          </div>
        </div>
        <p class="viz-note">出典:Frontiers in Medicine(severity-stratified meta-analysis)、PMC系統的レビュー</p>
      </div>
    `,
    sources: [
      { label: "Frontiers in Medicine「Association between obstructive sleep apnea syndrome and metabolic syndrome: a severity-stratified meta-analysis」", url: "https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2026.1850790/full" },
      { label: "「The association between obstructive sleep apnea and metabolic syndrome: a systematic review and meta-analysis」", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4578823/" }
    ]
  },
  {
    title: "生活習慣でOSA・肥満を予防するには",
    date: "2026-09-04",
    conclusion: "禁酒・禁煙・横向き寝・体重管理といった小さな生活習慣の積み重ねが、無呼吸と肥満の両方の予防につながります。",
    body: "無呼吸も肥満も、日々の生活習慣が大きく関わっています。とはいえ「今日から完璧な生活を」と意気込む必要はありません。まずは無理のない範囲で、体を動かす習慣を増やす、寝る前のアルコールを控える、禁煙する、規則正しい時間に眠る、といった小さな積み重ねが効果を発揮します。仰向けで眠ると舌が喉の奥に落ち込みやすいため、横向きで眠る工夫をするだけでもいびきが軽くなる人がいます。体重を減らすことは気道の脂肪を減らすことにも直結するため、無呼吸の予防と改善の両方につながる、数少ない「自分でできる対策」でもあります。CPAPなどの治療と並行して取り組むことで、相乗効果も期待できます。完璧を目指すよりも、続けられることを一つずつ増やしていく方が、結果的に長続きしやすいものです。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:今日からできる小さな習慣</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th>習慣</th><th>ポイント</th></tr>
            </thead>
            <tbody>
              <tr><td>体を動かす</td><td>無理のない範囲で活動量を増やす</td></tr>
              <tr><td>寝る前のお酒を控える</td><td>気道が緩みやすくなるのを防ぐ</td></tr>
              <tr><td>禁煙</td><td>気道の炎症・むくみを減らす</td></tr>
              <tr><td>横向きで眠る</td><td>舌が喉に落ち込みにくくなる</td></tr>
              <tr><td>規則正しい睡眠時間</td><td>睡眠の質を底上げする</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    sources: [
      { label: "NHLBI「Sleep Apnea - Treatment」", url: "https://www.nhlbi.nih.gov/health/sleep-apnea/treatment" },
      { label: "Mayo Clinic「Obstructive sleep apnea - Symptoms and causes」", url: "https://www.mayoclinic.org/diseases-conditions/obstructive-sleep-apnea/symptoms-causes/syc-20352090" }
    ]
  },
  {
    title: "不眠症とOSA、実は併発しやすいんです(COMISA)",
    date: "2026-09-04",
    conclusion: "不眠症と睡眠時無呼吸は同時に起こりやすく、不眠治療のCBT-Iだけでは改善しきれないケースがあります。",
    body: "「眠れないから疲れている」と「無呼吸で眠りが浅い」は、実はセットで起こることが少なくありません。不眠症とOSAが同時に存在する状態は「COMISA」とも呼ばれ、双方向に影響し合う関係にあることが分かっています。不眠治療の第一選択とされる認知行動療法(CBT-I)は、6〜8回程度のセッションで7〜8割の人に効果があり、約4割は症状が寛解するとされる、薬に頼らない有効な治療法です。ただしOSAが背景にある不眠の場合、CBT-Iだけでは改善しきれず、無呼吸そのものへの対応も欠かせません。「眠れない」と感じたら不眠症だけを疑うのではなく、無呼吸が隠れていないかもあわせて確認してみることをおすすめします。両方を併せ持つ人ほど、症状が重くなりやすいという報告もあるため、早めの見極めが回復への近道になります。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:CBT-I(不眠の認知行動療法)の効果</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">70〜80%</span>
            <span class="stat-label">治療に反応(症状が改善)した人の割合</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">約40%</span>
            <span class="stat-label">症状が寛解した人の割合</span>
          </div>
        </div>
        <p class="viz-note">出典:米国内科学会(ACP)診療ガイドライン、慢性不眠症へのCBT-I第一選択の推奨</p>
      </div>
    `,
    sources: [
      { label: "American College of Physicians「ACP Recommends Cognitive Behavioral Therapy as Initial Treatment for Chronic Insomnia」", url: "https://www.acponline.org/acp-newsroom/acp-recommends-cognitive-behavioral-therapy-as-initial-treatment-for-chronic-insomnia" },
      { label: "「Bidirectional relationships of comorbidity with obstructive sleep apnoea.」Eur Respir Rev.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9488957/" }
    ]
  },
  {
    title: "むずむず脚症候群(RLS)って知っていますか?",
    date: "2026-09-04",
    conclusion: "むずむず脚症候群は脳内の鉄不足が関係する病気で、近年は鉄剤の補充が優先される治療に変わってきています。",
    body: "布団に入ると脚がむずむずして、動かさずにいられない――そんな症状に心当たりはありませんか?それは「むずむず脚症候群(レストレスレッグス症候群)」かもしれません。じっとしていると悪化し、脚を動かすと和らぐのが特徴で、夕方から夜にかけて症状が強くなる傾向があります。原因の一つとして、脳内でドパミンを作るのに必要な「鉄」の不足が関係していると考えられており、妊娠中の人や腎臓病のある人、鉄欠乏のある人に多くみられます。近年のガイドラインでは、重症の場合はドパミン作動薬よりも鉄剤の補充がまず優先されるようになってきました。無呼吸と同じく「寝ている間の話」として見過ごされがちですが、治療で改善が期待できる病気です。カフェインの摂りすぎを控える、脚を動かす軽い運動を取り入れるといった工夫も、症状の緩和に役立つとされています。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:症状が出やすい人の特徴</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th>背景</th><th>関連</th></tr>
            </thead>
            <tbody>
              <tr><td>鉄欠乏・貧血</td><td>脳内の鉄不足がドパミン合成に影響</td></tr>
              <tr><td>妊娠中</td><td>発症・悪化しやすい時期</td></tr>
              <tr><td>腎臓病(透析中など)</td><td>有病率が高いとされる</td></tr>
              <tr><td>遺伝的な要因</td><td>家族内での発症がみられることも</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    sources: [
      { label: "Medscape「Iron Over Dopamine? Restless Legs Syndrome Guidelines Revamp」", url: "https://www.medscape.com/viewarticle/iron-over-dopamine-restless-legs-syndrome-guidelines-revamp-2025a1000ekh" },
      { label: "「Restless legs syndrome: pathophysiology and the role of iron and folate.」", url: "https://pubmed.ncbi.nlm.nih.gov/17604457/" }
    ]
  },
  {
    title: "ナルコレプシー:眠気の「重症版」かもしれません",
    date: "2026-09-04",
    conclusion: "ナルコレプシーは覚醒を保つ神経細胞が失われることで起こる神経の病気で、OSAとは原因も治療法も異なります。",
    body: "授業中や会議中に強烈な眠気に襲われる、笑ったり驚いたりした瞬間に体の力が抜ける――こうした症状がある場合、単なる寝不足ではなく「ナルコレプシー」という神経の病気の可能性があります。原因は、脳内で覚醒を保つ働きをする「オレキシン(ヒポクレチン)」という物質を作る神経細胞が、自己免疫的な仕組みによって失われてしまうことだと考えられています。研究では、亡くなった患者の脳を調べたところ、オレキシンを作る神経細胞が最大95%も失われていたと報告されています。診断には脳脊髄液中のオレキシン濃度の測定なども使われます。似たような日中の眠気でもOSAとは原因も治療法もまったく異なるため、正しい診断がとても重要です。適切な治療を受ければ、日常生活や学業・仕事への影響を大きく減らせる可能性があります。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:ナルコレプシー(タイプ1)にみられる特徴</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">最大95%</span>
            <span class="stat-label">失われているオレキシン産生神経細胞の割合(剖検研究)</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">90%超</span>
            <span class="stat-label">脳脊髄液オレキシン低値+特定のHLA型を持つ患者の割合</span>
          </div>
        </div>
      </div>
    `,
    sources: [
      { label: "PMC「Orexin Deficiency in Narcolepsy: Molecular Mechanisms, Clinical Phenotypes, and Emerging Therapeutic Frontiers」", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12515106/" },
      { label: "Stanford Medicine「The Science of Narcolepsy」", url: "https://med.stanford.edu/narcolepsy/faq1.html" }
    ]
  },
  {
    title: "レム睡眠行動障害と、将来のパーキンソン病リスク",
    date: "2026-09-04",
    conclusion: "レム睡眠行動障害のある人は、発症から14年でおよそ97%が神経変性疾患に移行するという報告があります。",
    body: "眠っている間に大声で寝言を言ったり、夢の内容そのままに手足を激しく動かしてしまったりする「レム睡眠行動障害(RBD)」という病気があります。通常レム睡眠中は体が動かないよう筋肉の力が抜けているはずなのですが、その仕組みがうまく働かなくなることで起こります。注目すべきは、この病気がパーキンソン病など神経変性疾患の「前触れ」であるケースが多いという点です。複数の追跡研究をまとめた解析では、発症から5年で約33.5%、10.5年で約82.4%、14年では96.6%もの人が何らかの神経変性疾患に移行したと報告されています。「寝ている間のことだから」と軽視せず、家族から指摘された場合は神経内科への相談も検討する価値があります。早期に気づくことで、将来に向けた心の準備や生活の工夫を始められるという側面もあります。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:RBD発症からの経過年数別・神経変性疾患への移行リスク</p>
        <div class="viz-bars">
          <div class="bar-row">
            <span class="bar-label">5年後</span>
            <span class="bar-track"><span class="bar-fill" style="width:34.7%"></span></span>
            <span class="bar-value">33.5%</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">10.5年後</span>
            <span class="bar-track"><span class="bar-fill fill-warn" style="width:85.3%"></span></span>
            <span class="bar-value">82.4%</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">14年後</span>
            <span class="bar-track"><span class="bar-fill fill-warn" style="width:100%"></span></span>
            <span class="bar-value">96.6%</span>
          </div>
        </div>
        <p class="viz-note">パーキンソン病・レビー小体型認知症など。出典:複数の縦断研究を統合したメタ解析</p>
      </div>
    `,
    sources: [
      { label: "「The risk of neurodegeneration in REM sleep behavior disorder: A systematic review and meta-analysis of longitudinal studies.」", url: "https://www.sciencedirect.com/science/article/abs/pii/S1087079218300819" },
      { label: "Nature Communications「Longitudinal network changes and phenoconversion risk in isolated REM sleep behavior disorder」2024.", url: "https://www.nature.com/articles/s41467-024-54695-z" }
    ]
  },
  {
    title: "交代勤務と体内時計、乱れるとどうなる?",
    date: "2026-09-04",
    conclusion: "交代勤務者のおよそ3人に1人が不眠や過眠の症状を抱え、メタボリックシンドロームのリスクもほぼ倍増します。",
    body: "夜勤や交代勤務をしていると、日中に眠って夜に働くという、体本来のリズムに逆らった生活を強いられます。体内時計は光の影響を強く受けるため、太陽が出ている間の睡眠はどうしても浅く、途切れがちになります。調査によると、交代勤務をする人のおよそ3人に1人が、持続的な不眠や過眠といった「交代勤務障害」の症状を抱えているとされています。さらに夜勤はメタボリックシンドロームのリスクをほぼ倍増させるという報告もあり、心血管疾患やうつ、消化器系のトラブルとの関連も指摘されています。仕事上避けられない場合でも、遮光カーテンで睡眠環境を整える、勤務前後の光の浴び方を工夫するといった対策が、体への負担を減らす助けになります。夜勤明けはすぐに強い光を浴びず、サングラスなどで体内時計への刺激を和らげるのも一つの工夫です。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:交代勤務にまつわる統計</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">約1/3</span>
            <span class="stat-label">持続的な交代勤務障害の症状を抱える夜勤労働者の割合</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">ほぼ倍増</span>
            <span class="stat-label">夜勤によるメタボリックシンドロームのリスク上昇</span>
          </div>
        </div>
      </div>
    `,
    sources: [
      { label: "PMC「Shiftwork-Mediated Disruptions of Circadian Rhythms and Sleep Homeostasis Cause Serious Health Problems」", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5828540/" },
      { label: "CDC NIOSH「Shift Work and Sleep」Science Bulletin.", url: "https://www.cdc.gov/niosh/bulletin/2016/shift-work.html" }
    ]
  },
  {
    title: "歯ぎしり(ブラキシズム)とOSAの関係",
    date: "2026-09-04",
    conclusion: "OSAのある人の歯ぎしりの85%以上は、無呼吸からの覚醒の直前・直後に起きていることが分かっています。",
    body: "朝起きたら顎がだるい、パートナーに歯ぎしりを指摘された――そんな経験はありませんか?睡眠中の歯ぎしり(睡眠時ブラキシズム)は、実はOSAと同時に起こりやすいことが分かっています。研究では、OSAのある人に見られる歯ぎしりのイベントのうち85%以上が、無呼吸からの覚醒の直前・直後に集中して起きていたと報告されています。つまり、呼吸が止まって脳が「息をしなければ」と覚醒する瞬間に、顎の筋肉がぎゅっと働いてしまうと考えられているのです。実際にCPAP治療を始めたことで、いびきや無呼吸だけでなく歯ぎしりまで軽くなったという報告もあります。歯の負担が気になる方は、その裏に無呼吸が隠れていないか、一度確認してみるとよいかもしれません。マウスピースだけで様子を見るのではなく、根本にある無呼吸の有無を調べることが、歯の健康を守ることにもつながります。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:OSAに伴う歯ぎしりが起こるタイミング</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">85%以上</span>
            <span class="stat-label">無呼吸からの覚醒の直前・直後に集中して起きる歯ぎしりイベントの割合</span>
          </div>
        </div>
      </div>
    `,
    sources: [
      { label: "Sleep Foundation「The Connection Between Sleep Apnea and Teeth Grinding (or Bruxism)」", url: "https://www.sleepfoundation.org/sleep-apnea/link-between-sleep-apnea-and-teeth-grinding" },
      { label: "PMC「Is sleep bruxism in obstructive sleep apnea only an oral health related problem?」", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11094952/" }
    ]
  },
  {
    title: "心不全と「中枢性」睡眠時無呼吸の関係",
    date: "2026-09-04",
    conclusion: "心不全患者の30〜50%は、脳からの呼吸指令が止まる中枢性睡眠時無呼吸を合併しているとされています。",
    body: "これまで紹介してきた無呼吸の多くは、喉が物理的にふさがる「閉塞性」睡眠時無呼吸(OSA)でした。しかし無呼吸にはもう一種類、脳からの呼吸の指令そのものが一時的に止まってしまう「中枢性睡眠時無呼吸(CSA)」もあります。特に心不全のある人では、呼吸が徐々に大きくなり、また小さくなって止まる「チェーン・ストークス呼吸」と呼ばれる周期的な呼吸パターンを伴うCSAが多く見られ、心不全患者の30〜50%に合併するという報告があります。CSAは心不全そのものの進行や予後の悪化とも関係していると考えられており、心臓の治療とあわせた呼吸管理が重要になります。いびきが目立たないタイプの無呼吸もあるという点は、意外と知られていない事実です。心不全の治療を担当する循環器の医師と、睡眠を専門とする医師が連携して診ていくことが望ましいとされています。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:閉塞性(OSA)と中枢性(CSA)の違い</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th></th><th>閉塞性(OSA)</th><th>中枢性(CSA)</th></tr>
            </thead>
            <tbody>
              <tr><td>原因</td><td>喉が物理的にふさがる</td><td>脳からの呼吸指令が止まる</td></tr>
              <tr><td>いびき</td><td>目立つことが多い</td><td>目立たないことも多い</td></tr>
              <tr><td>多い合併症</td><td>肥満、高血圧</td><td>心不全(30〜50%に合併)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    sources: [
      { label: "「Congestive heart failure and central sleep apnea.」", url: "https://pubmed.ncbi.nlm.nih.gov/26118916/" },
      { label: "American Academy of Sleep Medicine「Central Sleep Apnea Guideline Update」", url: "https://aasm.org/resources/practiceparameters/csa.pdf" }
    ]
  },
  {
    title: "女性は閉経後にOSAリスクが上がります",
    date: "2026-09-04",
    conclusion: "女性は閉経、特に卵巣摘出による外科的閉経を境に、睡眠時無呼吸のリスクが約2倍に高まります。",
    body: "OSAというと男性のイメージが強いかもしれませんが、女性も決して無縁ではありません。特に閉経を境にリスクが大きく上がることが、複数の研究で報告されています。ある大規模コホート研究では、自然閉経に比べて卵巣を摘出する「外科的閉経」を経験した女性はOSAを発症するリスクが有意に高く、両側の卵巣を摘出した場合はリスクがおよそ2倍になっていました。背景には、女性ホルモンの急激な変化に加え、閉経後に内臓脂肪がつきやすくなることが関係していると考えられています。「いびきなんて自分には関係ない」と思っていた女性ほど、症状が見過ごされやすいという指摘もあります。閉経前後で急に眠りの質が落ちたと感じたら、一度チェックしてみる価値があります。「年齢のせいだから仕方ない」と諦めず、更年期以降の体調変化の一つとして無呼吸も選択肢に入れてみてください。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:閉経とOSAリスクにまつわる統計</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">約2倍</span>
            <span class="stat-label">両側卵巣摘出による外科的閉経後のOSAリスク上昇</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">HR 1.27</span>
            <span class="stat-label">自然閉経と比べた外科的閉経のOSA発症ハザード比</span>
          </div>
        </div>
      </div>
    `,
    sources: [
      { label: "American Journal of Epidemiology「Type of Menopause, Age at Menopause, and Risk of Developing Obstructive Sleep Apnea in Postmenopausal Women」", url: "https://academic.oup.com/aje/article/187/7/1370/4819319" },
      { label: "BMC Endocrine Disorders「Menopause and obstructive sleep apnea: revealing an independent mediating role of visceral fat」2025.", url: "https://bmcendocrdisord.biomedcentral.com/articles/10.1186/s12902-025-01850-2" }
    ]
  },
  {
    title: "うつ・不安と睡眠の、見過ごせない悪循環",
    date: "2026-09-04",
    conclusion: "うつ病とOSAは双方向に発症リスクを高め合う関係にあり、併発すると治療への反応も悪くなりやすいとされています。",
    body: "気分の落ち込みと眠りの問題は、切っても切り離せない関係にあります。研究では、OSAのある人はその後うつ病と診断されるリスクが高くなる一方、うつ病がある人はその後OSAを発症するリスクも高くなるという、双方向の関連が報告されています。うつ病がある人のうちOSAを併発している割合はおよそ2割、研究によっては4割近くにのぼるという報告もあり、その背景には不眠の関与も指摘されています。厄介なのは、OSAを併発したうつ病は治療への反応が悪くなりやすく、自傷リスクとの関連も報告されている点です。気分の不調が続くとき、その原因を心の問題だけに求めるのではなく、眠りの質そのものに目を向けてみることが、回復への近道になることもあります。気分の治療とあわせて睡眠の状態を医師に伝えることが、より的確な治療につながる第一歩です。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:うつ病とOSAの併発率</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">約20%</span>
            <span class="stat-label">うつ病患者のうちOSAを併発している割合(目安)</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">最大39%</span>
            <span class="stat-label">研究によって報告されている併発率の上限</span>
          </div>
        </div>
      </div>
    `,
    sources: [
      { label: "「Bidirectional relationships of comorbidity with obstructive sleep apnoea.」Eur Respir Rev.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9488957/" },
      { label: "American Journal of Psychiatry「The Evolving Nexus of Sleep and Depression」", url: "https://psychiatryonline.org/doi/full/10.1176/appi.ajp.2021.21080821" }
    ]
  },
  {
    title: "妊娠中の睡眠時無呼吸に、実は要注意です",
    date: "2026-09-04",
    conclusion: "妊娠中のOSAは妊娠高血圧腎症や妊娠糖尿病のリスクを有意に高めることが報告されています。",
    body: "妊娠中は体重増加やむくみ、ホルモンの変化によって、もともと無呼吸のリスクが高くなる時期です。大規模な研究では、OSAのある妊婦は、そうでない妊婦に比べて妊娠高血圧腎症(妊娠高血圧症候群の一種)のリスクが約2.2倍、子癇のリスクが約3倍、妊娠糖尿病のリスクが約1.5倍高くなっていたと報告されています。妊娠中の体調不良やいびきの悪化を「一時的なもの」と見過ごしてしまいがちですが、実は母体にも赤ちゃんにも関わる重要なサインである可能性があります。妊娠中・妊娠を考えている方でいびきや強い眠気が気になる場合は、自己判断せずに産婦人科医に相談してみることをおすすめします。出産後は症状が自然に軽くなることも多いですが、油断せず経過を見てもらうと安心です。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:OSAのある妊婦のリスク倍率(補正後オッズ比)</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th>合併症</th><th>リスク倍率</th></tr>
            </thead>
            <tbody>
              <tr><td>妊娠高血圧腎症</td><td class="num">約2.2倍</td></tr>
              <tr><td>子癇</td><td class="num">約3.0倍</td></tr>
              <tr><td>妊娠糖尿病</td><td class="num">約1.5倍</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    sources: [
      { label: "「Obstructive sleep apnea in pregnancy is associated with adverse maternal outcomes: a national cohort.」", url: "https://www.sciencedirect.com/science/article/abs/pii/S1389945717303076" },
      { label: "PMC「Obstructive Sleep Apnea in Pregnancy: A Comprehensive Review of Maternal and Fetal Implications」", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11130811/" }
    ]
  },
  {
    title: "夢遊病・夜驚症って、実はよくあることです",
    date: "2026-09-04",
    conclusion: "夢遊病や夜驚症は子どもによくみられる現象で、多くは成長とともに自然に治まります。",
    body: "眠っている間に歩き回ったり、突然大声で叫んで飛び起きたりする「夢遊病」や「夜驚症」は、まとめて「パラソムニア」と呼ばれる睡眠時随伴症の仲間です。実はそれほど珍しいものではなく、夢遊病は子どもの最大17%、大人でも4%程度に見られると報告されています。夜驚症も子どもで1〜6.5%程度に見られ、5歳未満に限れば一時的な出現も含めて4人に1人ほどに見られるという報告もあります。多くは成長とともに自然に落ち着き、夜驚症についてはほとんどのケースが思春期までに治まるとされています。本人に記憶がないことも多く心配になりがちですが、頻度が高い、怪我につながる、大人になってから急に始まったという場合は、他の睡眠障害が隠れていないか相談してみましょう。子どもの成長過程では珍しくない出来事だと知っておくだけでも、家族の安心感につながります。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:パラソムニアの有病率</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th>分類</th><th>子ども</th><th>成人</th></tr>
            </thead>
            <tbody>
              <tr><td>夢遊病(睡眠時遊行症)</td><td class="num">最大17%</td><td class="num">約4%</td></tr>
              <tr><td>夜驚症(睡眠時驚愕症)</td><td class="num">1〜6.5%</td><td class="num">約2.2%</td></tr>
            </tbody>
          </table>
        </div>
        <p class="viz-note">夜驚症はほとんどのケースが思春期までに自然に治まるとされる。出典:AASM、JAMA Pediatrics</p>
      </div>
    `,
    sources: [
      { label: "American Academy of Sleep Medicine「Sleepwalking & Sleep Talking」ファクトシート", url: "https://aasm.org/resources/factsheets/sleepwalkingtalking.pdf" },
      { label: "JAMA Pediatrics「Sleep Terrors and Sleepwalking: Common Parasomnias of Childhood」", url: "https://jamanetwork.com/journals/jamapediatrics/fullarticle/2337224" }
    ]
  },
  {
    title: "寝酒は逆効果?お酒とOSAの関係",
    date: "2026-09-04",
    conclusion: "就寝前のアルコールは喉の筋肉を緩めて気道を塞がりやすくするため、無呼吸のある人には逆効果です。",
    body: "「お酒を飲むとよく眠れる気がする」という人は多いですが、無呼吸がある人、あるいはその疑いがある人にとって、寝る前のアルコールはむしろ逆効果です。アルコールには喉や舌の筋肉を緩める作用があり、気道が塞がりやすくなることで無呼吸のイベントが増えることが報告されています。さらにアルコールは覚醒しにくい状態(覚醒閾値の上昇)を招くため、呼吸が止まってもなかなか目が覚めず、無呼吸の時間そのものが長引きやすくなるという指摘もあります。加えて鼻の粘膜のうっ血を招き、鼻呼吸がしづらくなることも分かっています。寝つきをよくするための「寝酒」が、実は眠りの質を大きく損なっているかもしれません。心当たりのある方は、まず数日試しにやめてみるのもおすすめです。どうしても寝酒がやめられない場合も、それ自体が眠りの質に関わるサインとして受け止めてみましょう。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:アルコールがOSAを悪化させる経路</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th>作用</th><th>結果</th></tr>
            </thead>
            <tbody>
              <tr><td>喉・舌の筋肉の弛緩</td><td>気道が塞がりやすくなる</td></tr>
              <tr><td>覚醒閾値の上昇</td><td>無呼吸の時間が長引きやすくなる</td></tr>
              <tr><td>鼻粘膜のうっ血</td><td>鼻呼吸がしづらくなる</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    sources: [
      { label: "Sleep Foundation「The Link Between Alcohol and Sleep Apnea」", url: "https://www.sleepfoundation.org/sleep-apnea/alcohol-and-sleep-apnea" },
      { label: "PMC「Alcohol and airway calibre: Does motor or muscle depression contribute to increased likelihood of obstruction?」", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10103867/" }
    ]
  },
  {
    title: "睡眠負債の正体 ー 眠りはすべての土台です",
    date: "2026-09-04",
    conclusion: "米国成人の約3割は推奨される7時間未満しか眠れておらず、短い睡眠は肥満から心疾患まで幅広い病気と関連しています。",
    body: "ここまで無呼吸、肥満、不眠、その他さまざまな睡眠の問題を紹介してきましたが、根っこにあるのは「睡眠不足・睡眠の質の低下が、体に静かに借金のようにたまっていく」という共通の構造です。米国CDCの2024年の調査では、成人の30.5%が1日あたり7時間未満しか眠れていないと報告されています。推奨される7時間という基準を下回る短い睡眠は、肥満、糖尿病、高血圧、心疾患、脳卒中、不安、うつなど、実に幅広い病気のリスクと関連することが分かっています。無呼吸による睡眠の質の低下も、この「睡眠負債」の大きな原因の一つです。特別なことをする前に、まずは自分の眠りの量と質を振り返ってみること。それが、これまで紹介してきたすべての対策の出発点になります。眠りは我慢するものではなく、整えることで日々の体調を底上げできる、いちばん身近な健康資産です。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:短い睡眠(7時間未満)と関連する主なリスク</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">30.5%</span>
            <span class="stat-label">1日7時間未満しか眠れていない米国成人の割合(2024年)</span>
          </div>
        </div>
        <div class="viz-table-wrap" style="margin-top:12px;">
          <table class="viz-table">
            <thead>
              <tr><th colspan="2">短い睡眠と関連が報告されている主な病気</th></tr>
            </thead>
            <tbody>
              <tr><td>肥満・糖尿病</td><td>高血圧・心疾患・脳卒中</td></tr>
              <tr><td>不安障害</td><td>うつ病</td></tr>
            </tbody>
          </table>
        </div>
        <p class="viz-note">出典:CDC「FastStats: Sleep in Adults」、CDC「Short Sleep Duration and Sleep Difficulties Among Adults, 2024」</p>
      </div>
    `,
    sources: [
      { label: "CDC「FastStats: Sleep in Adults」", url: "https://www.cdc.gov/sleep/data-research/facts-stats/adults-sleep-facts-and-stats.html" },
      { label: "CDC「Short Sleep Duration and Sleep Difficulties Among Adults: United States, 2024」", url: "https://www.cdc.gov/nchs/products/databriefs/db559.htm" }
    ]
  },
  {
    title: "日本のOSA患者、実は9割以上が治療を受けていません",
    date: "2026-09-05",
    conclusion: "日本には推定約900万人のOSA患者がいるとされますが、実際に治療を受けているのはそのうち約8%、70万人ほどにとどまっています。",
    body: "睡眠時無呼吸症候群(OSA)は決して珍しい病気ではありません。国内の潜在患者数は約900万人にのぼると推計されていますが、実際にCPAPなどの治療を受けている人はおよそ70万人、割合にしてわずか8%ほどにとどまっているという報告があります。つまり、多くの人が「自分は無呼吸かもしれない」と気づかないまま、あるいは気づいていても医療機関を受診しないまま過ごしているということです。いびきや日中の眠気を「体質」「年のせい」と片付けてしまいがちですが、その裏に治療可能な病気が隠れているケースは少なくありません。この大きなギャップこそが、この記事を読んでいるあなたにできる最初の一歩の大きさを物語っています。「もしかして」と思ったら、それだけで十分な受診のきっかけになります。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:日本国内の推定患者数と治療率</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">約900万人</span>
            <span class="stat-label">国内のOSA潜在患者数の推計</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">約8%</span>
            <span class="stat-label">実際に治療を受けている人の割合(約70万人)</span>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "CPAPが合わない人への新しい選択肢、舌下神経電気刺激療法",
    date: "2026-09-05",
    conclusion: "CPAPがどうしても使えない中等症〜重症OSAの人には、舌の筋肉を電気刺激で働かせて気道を広げる「舌下神経電気刺激療法」という治療の選択肢があります。",
    body: "CPAPは無呼吸治療の基本ですが、マスクがどうしても合わない、圧迫感に耐えられないという人も一定数います。そうした人向けに近年登場したのが、舌下神経電気刺激療法(HNS)という治療法です。胸に植え込んだ小さな装置が呼吸のタイミングを感知し、眠っている間に舌を動かす神経へ電気刺激を送ることで、舌の付け根が喉の奥に落ち込むのを防ぎ、気道を開いた状態に保ちます。日本では2021年に保険適用となり、CPAP不耐・不忍容の中等症〜重症OSA(AHI20以上)が対象です。この治療の基礎研究は、実は1980年代に日本の大学の呼吸生理学グループが世界に先駆けて始めたものだったというのも、興味深い事実です。CPAPを諦める前に、専門医に相談してみる価値のある選択肢です。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:舌下神経電気刺激療法(HNS)の仕組み</p>
        <div class="viz-diagram-wrap">
          <svg viewBox="0 0 620 120" role="img" aria-label="呼吸を感知し舌下神経を電気刺激することで舌の筋肉が働き気道が開く仕組みの図">
            <g transform="translate(10,32)">
              <rect width="135" height="55" rx="8" class="d-box"/>
              <text x="67" y="24" text-anchor="middle" class="d-label-s">呼吸を感知</text>
              <text x="67" y="40" text-anchor="middle" class="d-sublabel">吸気のタイミング</text>
            </g>
            <path d="M150 60 L172 60" class="d-airflow" marker-end="url(#arrowh1)"/>
            <g transform="translate(178,32)">
              <rect width="135" height="55" rx="8" class="d-box"/>
              <text x="67" y="24" text-anchor="middle" class="d-label-s">舌下神経を刺激</text>
              <text x="67" y="40" text-anchor="middle" class="d-sublabel">電気パルス</text>
            </g>
            <path d="M318 60 L340 60" class="d-airflow" marker-end="url(#arrowh1)"/>
            <g transform="translate(346,32)">
              <rect width="135" height="55" rx="8" class="d-box"/>
              <text x="67" y="24" text-anchor="middle" class="d-label-s">舌の筋肉が働く</text>
              <text x="67" y="40" text-anchor="middle" class="d-sublabel">オトガイ舌筋など</text>
            </g>
            <path d="M486 60 L508 60" class="d-airflow" marker-end="url(#arrowh1)"/>
            <g transform="translate(474,10)">
              <circle cx="55" cy="50" r="45" class="d-wall"/>
              <path d="M 15 75 Q 55 83 95 75 L 95 95 Q 55 101 15 95 Z" class="d-tissue-open"/>
              <text x="55" y="113" text-anchor="middle" class="d-sublabel">気道が開く</text>
            </g>
            <defs>
              <marker id="arrowh1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" class="d-arrowhead"/>
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    `
  },
  {
    title: "「睡眠障害科」という診療科、まもなく誕生するかもしれません",
    date: "2026-09-05",
    conclusion: "2026年3月、厚生労働省の審議会が「睡眠障害」を診療科名として組み合わせ表示できるようにすることを了承し、今後「内科(睡眠障害)」のような掲示が可能になる見通しです。",
    body: "「いびきや眠気が気になるけれど、何科を受診すればいいのか分からない」——そんな声に応えるように、日本で新しい動きがありました。2026年3月、医道審議会の診療科名標榜部会において、「睡眠障害」を他の診療科と組み合わせて標榜できる名称に追加することが了承されたのです。これが正式に制度化されれば、「内科(睡眠障害)」「耳鼻咽喉科(睡眠障害)」といった掲示を掲げる医療機関が登場し、患者が受診先を選びやすくなることが期待されます。診療科の名称に関するこうした見直しは実に17年ぶりとのこと。背景には、不眠を訴える人が国民の23.5%にのぼるなど、睡眠に関する悩みを抱える人が非常に多いという実態があります。制度が整えば、「まず何科に行けばいいか」で迷う時間が減っていくはずです。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:見直しの背景にある睡眠の悩み(国内調査より)</p>
        <div class="viz-stats">
          <div class="stat-tile">
            <span class="stat-value">23.5%</span>
            <span class="stat-label">不眠を訴える人の割合(国内の大規模疫学調査)</span>
          </div>
          <div class="stat-tile">
            <span class="stat-value">34.8%</span>
            <span class="stat-label">「日中眠気を感じた」と回答した割合(国民健康・栄養調査)</span>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "CPAPは今、スマホとクラウドで遠隔管理できる時代です",
    date: "2026-09-05",
    conclusion: "通信機能付きのCPAP装置なら、使用時間やAHIなどのデータが自動でクラウドに送られ、毎月通院しなくても治療状況を医師が確認できるようになっています。",
    body: "少し前まで、CPAPの使用状況を確認するには、装置からSDカードを取り出して外来に持参する必要がありました。しかし近年は通信機能を搭載したCPAP装置が普及し、使用日数や時間、AHI、マスクの空気漏れの量といったデータが自動的にクラウドサーバーへ送られる仕組みが一般的になっています。実際に約500人のOSA患者を対象にした試験では、3か月ごとの対面診療に遠隔モニタリングを組み合わせた場合と、毎月対面で診療した場合とを比べたところ、治療の継続率は変わらず、むしろ遠隔モニタリングを併用したグループの方が患者満足度が高かったと報告されています。今後はスマートフォンアプリと連携し、AIが異常を自動で検知したり、血圧や体重といった生活データも一緒に見守ったりする、よりきめ細かな管理も期待されています。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:CPAP管理の変化</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th></th><th>従来</th><th>現在</th></tr>
            </thead>
            <tbody>
              <tr><td>データの確認方法</td><td>SDカードを外来に持参</td><td>クラウドへ自動送信</td></tr>
              <tr><td>通院頻度</td><td>基本は毎月</td><td>数か月ごと+遠隔確認</td></tr>
              <tr><td>患者満足度</td><td>-</td><td>遠隔併用群でより高い傾向</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    title: "その鼻づまり、無呼吸を悪化させているかもしれません",
    date: "2026-09-05",
    conclusion: "人は本来、鼻で呼吸する生き物であり、鼻づまりによる口呼吸の慢性化は気道を狭くしてOSAの発症・悪化につながります。",
    body: "鼻づまりは単に「息苦しい」だけの症状ではありません。人は本来、鼻呼吸をする生き物で、鼻を通った空気は加温・加湿されてから気道に届きます。鼻づまりによって口呼吸が習慣化すると、舌の位置が下がって下顎が後退し、喉の奥の気道が狭くなることで、無呼吸を発症・悪化させる方向に働いてしまうのです。その主な原因の一つがアレルギー性鼻炎で、粘膜の腫れが鼻の通りを悪くし、口呼吸を誘発することが近年の研究で注目されています。さらに鼻づまりは、CPAP治療がうまく続かなくなる主な原因の一つでもあり、鼻の通りを改善しないままではCPAP治療の成功も難しいとされています。いびきや無呼吸が気になる人は、鼻の状態にも目を向けてみる価値がありそうです。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:鼻づまりが無呼吸につながる経路</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th>状態</th><th>結果</th></tr>
            </thead>
            <tbody>
              <tr><td>慢性的な口呼吸</td><td>舌の位置が下がり、下顎が後退</td></tr>
              <tr><td>アレルギー性鼻炎</td><td>鼻の粘膜が腫れ、口呼吸を誘発</td></tr>
              <tr><td>鼻づまりの放置</td><td>CPAPの継続率が下がりやすい</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    title: "子どものいびき、「アデノイド顔貌」のサインかもしれません",
    date: "2026-09-05",
    conclusion: "子どもの慢性的な口呼吸は、開口・面長・狭い歯列弓を特徴とする「アデノイド顔貌」や顎の発達異常を招き、将来のOSAリスクを高めることがあります。",
    body: "子どものいびきは「かわいい寝顔の一部」と見過ごされがちですが、実は注意が必要なサインであることがあります。慢性的な口呼吸が続くと、口を開けたままの状態や面長な輪郭、上の歯列が狭くなるといった特徴を持つ「アデノイド顔貌」と呼ばれる顔つきの変化や、顎・顔面の発達異常が起こることがあり、これが将来的なOSAのリスクを高めると考えられています。興味深いことに、子どもの場合はAHIの数値そのものよりも、習慣的ないびきの存在自体が、集中力や記憶力といった認知・行動面の問題と関連するという報告もあります。つまり、検査の数値が診断基準に届いていない段階でも、鼻づまりや口呼吸、いびきに早めに対応することが大切だということです。お子さんのいびきが気になる場合は、耳鼻咽喉科や小児科に相談してみましょう。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:アデノイド顔貌の主な特徴</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th>特徴</th></tr>
            </thead>
            <tbody>
              <tr><td>口が開いたままになりやすい</td></tr>
              <tr><td>面長な輪郭</td></tr>
              <tr><td>上顎の歯列弓が狭い</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    title: "その眠気、数字にすると分かりやすくなります",
    date: "2026-09-05",
    conclusion: "エプワース眠気尺度(ESS)は8つの場面でのうとうとしやすさを0〜3点で答える自己評価ツールで、合計11点以上は「日中の過度な眠気あり」の目安とされます。",
    body: "「自分の眠気が普通なのか、それとも治療が必要なレベルなのか」を判断するのは、意外と難しいものです。そこで医療現場でよく使われているのが、エプワース眠気尺度(Epworth Sleepiness Scale、ESS)という自己評価ツールです。「座って読書をしているとき」「テレビを見ているとき」「会議中に座っているとき」など8つの具体的な場面を挙げ、それぞれで「うとうとする可能性」を0(まったくない)から3(高い)の4段階で答え、合計する仕組みになっています。満点は24点で、合計が11点以上になると「日中の過度な眠気あり」の目安とされます。もちろんこれだけで診断が確定するわけではありませんが、自分の眠気を客観的な数字に置き換えられる、身近で便利なセルフチェックの方法です。気になる方は、一度自分の生活場面に当てはめて数えてみてはいかがでしょうか。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:ESS合計点の目安</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th>合計点</th><th>目安</th></tr>
            </thead>
            <tbody>
              <tr><td class="num">0〜10点</td><td>正常範囲の目安</td></tr>
              <tr><td class="num">11〜24点</td><td>日中の過度な眠気ありの目安</td></tr>
            </tbody>
          </table>
        </div>
        <p class="viz-note">8つの場面それぞれを0〜3点(満点24点)で自己評価する方式。</p>
      </div>
    `
  },
  {
    title: "心不全、脳卒中…病気ごとに見る無呼吸の合併リスク",
    date: "2026-09-05",
    conclusion: "慢性心不全や脳卒中がある人は、健常者と比べて約4倍、不整脈のある人は約3倍の頻度で睡眠時無呼吸を合併しているとされています。",
    body: "睡眠時無呼吸は特定の一つの病気というより、様々な心臓・血管の病気と隣り合わせにある存在です。報告によると、慢性心不全や脳卒中がある人は、健常な人と比べておよそ4倍の頻度で睡眠時無呼吸を合併しているとされ、不整脈ではおよそ3倍、虚血性心疾患ではおよそ2〜3倍、高血圧や糖尿病でもおよそ2倍というデータがあります。特に、複数の降圧薬を使っても血圧が下がりきらない「治療抵抗性高血圧」や、夜間から明け方にかけて血圧がむしろ上昇する「riser型」と呼ばれるパターンの高血圧は、無呼吸との関連が強く、心血管リスクが高い血圧パターンとして注目されています。こうした数字は、心臓や血管の治療を最適化するうえでも、無呼吸の評価を欠かせないものにしています。心臓や血管の持病がある方こそ、一度無呼吸の可能性を考えてみる意味があります。",
    visual: `
      <div class="viz">
        <p class="viz-title">図:各疾患における無呼吸の合併頻度(健常者比)</p>
        <div class="viz-bars">
          <div class="bar-row">
            <span class="bar-label">慢性心不全</span>
            <span class="bar-track"><span class="bar-fill fill-warn" style="width:100%"></span></span>
            <span class="bar-value">約4倍</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">脳卒中</span>
            <span class="bar-track"><span class="bar-fill fill-warn" style="width:100%"></span></span>
            <span class="bar-value">約4倍</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">不整脈</span>
            <span class="bar-track"><span class="bar-fill" style="width:75%"></span></span>
            <span class="bar-value">約3倍</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">虚血性心疾患</span>
            <span class="bar-track"><span class="bar-fill" style="width:62.5%"></span></span>
            <span class="bar-value">約2〜3倍</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">高血圧</span>
            <span class="bar-track"><span class="bar-fill fill-calm" style="width:50%"></span></span>
            <span class="bar-value">約2倍</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">糖尿病</span>
            <span class="bar-track"><span class="bar-fill fill-calm" style="width:50%"></span></span>
            <span class="bar-value">約2倍</span>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "CPAP以外の選択肢、マウスピース治療(口腔内装置療法)とは",
    date: "2026-09-05",
    conclusion: "軽症〜中等症のOSAでは、下顎や舌を前方に固定するマウスピース型の「口腔内装置」による治療が保険診療の選択肢として使われています。",
    body: "OSAの治療というとCPAPのイメージが強いかもしれませんが、症状が軽症〜中等症の場合には、マウスピース型の「口腔内装置(OA)」による治療という選択肢もあります。代表的なのは、下顎を前方に固定して気道を広げる「下顎前方固定型」と、舌を前方に引っ張って動きを制限する「舌前方牽引型」の2種類で、近年は上下の顎を分離できるタイプも登場し、開口したまま眠れるなど使用感が改善されてきています。日本では、医療機関でOSAの診断を受けたうえで軽症〜中等症と判定された場合に、健康保険の適用対象となります。一方で、口の乾燥や顎関節の違和感、噛み合わせの変化といった副作用が報告されており、長期的には歯科医師による定期的な管理が欠かせません。CPAPが体質的に合わない人にとって、検討する価値のある選択肢です。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:代表的な口腔内装置の2タイプ</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th></th><th>下顎前方固定型(MAD)</th><th>舌前方牽引型(TRD)</th></tr>
            </thead>
            <tbody>
              <tr><td>動かす部位</td><td>下顎を前方に固定</td><td>舌を前方に牽引</td></tr>
              <tr><td>下顎の動き</td><td>前方に固定される</td><td>下顎は動かさない</td></tr>
            </tbody>
          </table>
        </div>
        <p class="viz-note">近年は上下顎分離型など、開口したまま使える改良型も登場している。</p>
      </div>
    `
  },
  {
    title: "職業ドライバーの無呼吸、海外ではどう扱われている?",
    date: "2026-09-05",
    conclusion: "海外では職業運転手に客観的な眠気検査を義務づける国もあり、無呼吸のスクリーニングにどの方法を使うべきかは今も世界的に結論が出ていません。",
    body: "以前の記事で、無呼吸が居眠り運転のリスクを高めることを紹介しましたが、特に走行距離の長い職業運転手にとっては切実な問題です。ある調査では、無呼吸のある運転手の事故リスクは走行距離が長くなるほど高まり、無呼吸の重症度そのものよりも、睡眠時間の短さや本人が感じる眠気の強さの方が、居眠り運転や事故・ヒヤリハットと関連していたと報告されています。海外に目を向けると、オーストラリアでは職業運転手に対して客観的な眠気検査(MSLTやMWTと呼ばれる検査)を用いることが基準として記載されている例もあります。一方で、無呼吸のスクリーニングにSTOP-Bang質問票、ベルリン質問票、エプワース眠気尺度のどれを使うべきかについては、世界的にもまだ結論が出ていません。長時間運転をする方は、重症度だけでなく、睡眠時間そのものを見直すことが事故防止の第一歩になりそうです。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:無呼吸スクリーニングに使われる代表的な質問票</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th>名称</th><th>概要</th></tr>
            </thead>
            <tbody>
              <tr><td>STOP-Bang質問票</td><td>いびき・疲労感・体格などから簡易判定</td></tr>
              <tr><td>ベルリン質問票</td><td>いびき・眠気・肥満/高血圧の3領域で評価</td></tr>
              <tr><td>エプワース眠気尺度(ESS)</td><td>日中の眠気の強さを自己評価</td></tr>
            </tbody>
          </table>
        </div>
        <p class="viz-note">どれを使うべきかは世界的にもまだ結論が出ていない。</p>
      </div>
    `
  },
  {
    title: "在宅酸素療法(HOT)とCPAP、何が違うのでしょうか",
    date: "2026-09-05",
    conclusion: "HOTは血液中の酸素そのものが不足する呼吸不全の人に酸素を補う治療、CPAPは気道の閉塞を防いで無呼吸を防ぐ治療で、対象となる病気も仕組みも異なります。",
    body: "「在宅酸素療法(HOT)」と「CPAP」は、どちらも自宅で使う呼吸に関する医療機器のため混同されがちですが、目的も仕組みもまったく異なります。HOTは、COPD(慢性閉塞性肺疾患)などによって血液中の酸素そのものが慢性的に不足している「呼吸不全」の人に対し、酸素濃縮装置や携帯用の酸素ボンベを使って酸素を補う治療です。一方CPAPは、血液中の酸素濃度は保たれていても、眠っている間に喉の気道が塞がってしまうOSAの人に対し、空気を送り続けて気道を開いた状態に保つための治療です。ただし心不全に伴う中枢性睡眠時無呼吸のように、両方が関係してくる病態も存在します。HOT導入の判断には、動脈血ガス分析や時間内歩行試験といった検査が使われ、酸素濃縮装置には設置場所を選ばず使える据置型と、外出時にも使いやすい携帯型があります。自分がどちらの治療を受けているのか、その理由も含めて理解しておくと安心です。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:HOTとCPAPの違い</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th></th><th>在宅酸素療法(HOT)</th><th>CPAP</th></tr>
            </thead>
            <tbody>
              <tr><td>主な対象</td><td>COPDなどによる呼吸不全</td><td>閉塞性睡眠時無呼吸(OSA)</td></tr>
              <tr><td>目的</td><td>不足する酸素を補う</td><td>気道の閉塞を防ぐ</td></tr>
              <tr><td>導入時の検査</td><td>動脈血ガス分析、歩行試験など</td><td>睡眠検査(PSG/HSAT)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    title: "いびきだけじゃない、無呼吸が全身に及ぼすリスク一覧",
    date: "2026-09-05",
    conclusion: "無呼吸は喉の症状にとどまらず、認知機能から心臓・血管まで全身の様々なリスクと結びついている、体全体の問題です。",
    body: "これまでの記事で、無呼吸と高血圧や心臓病、うつ、居眠り運転などとの関係を個別に紹介してきましたが、まとめて俯瞰してみると、無呼吸が全身に及ぼす影響の広さがよく分かります。大きく分けると、集中力や記憶力の低下、日中の眠気、作業ミスによる労働災害や交通事故、うつ、生産性の低下といった「認知機能系」のリスクと、高血圧、心血管障害、糖尿病、心不全、不整脈、脳卒中、夜間の突然死といった「心・血管系」のリスクの2つの領域に整理できます。どちらも、無呼吸によって眠っている間に呼吸が繰り返し止まり、脳や体が十分に休めていないこと、そして血中の酸素が下がったり上がったりを繰り返すことが背景にあります。いびきや眠気を「よくあること」と軽く見ずに、体全体の問題として捉え直してみることが、治療への一歩につながります。",
    visual: `
      <div class="viz">
        <p class="viz-title">表:無呼吸が及ぼす全身への影響マップ</p>
        <div class="viz-table-wrap">
          <table class="viz-table">
            <thead>
              <tr><th>認知機能系のリスク</th><th>心・血管系のリスク</th></tr>
            </thead>
            <tbody>
              <tr><td>集中力・記憶力の低下</td><td>高血圧</td></tr>
              <tr><td>日中の眠気</td><td>心血管障害・心不全</td></tr>
              <tr><td>作業ミス・労働災害</td><td>不整脈</td></tr>
              <tr><td>交通事故</td><td>脳卒中</td></tr>
              <tr><td>うつ・生産性の低下</td><td>夜間の突然死</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  }
];

// build.js（Node）から読み込むためのエクスポート。ブラウザでは無視される。
if (typeof module !== "undefined") {
  module.exports = { ARTICLES };
}
