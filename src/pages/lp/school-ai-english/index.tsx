import './style.css'

function SchoolAiEnglish() {
  return (
    <div className="lp">
      <header className="lp-header">
        <div className="container header-inner">
          <div className="brand">
            <span className="brand-mark">N-E.X.T.</span>
            <span className="brand-name">ハイスクール構想 推進パッケージ</span>
          </div>
          <nav className="header-nav">
            <a href="#problem">課題</a>
            <a href="#model">地域共創</a>
            <a href="#support">支援内容</a>
            <a href="#trust">実績</a>
            <a className="cta-button primary" href="#contact">無料相談</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-bg" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="pill">令和7年度補正予算対応</div>
              <h1>
                地域を支えるDX人材育成エコシステム
                <span>N-E.X.T.ハイスクール 支援パッケージ</span>
              </h1>
              <p className="lead">
                教育と採用が循環する「地域共創モデル」を戦略・人材・ツールまでワンストップで実装。
                自治体の教育DXを、不可逆な定着と地域活性化へつなげます。
              </p>
              <p className="tagline">導入で終わらせない、定着まで伴走。</p>
              <div className="hero-actions">
                <a className="cta-button primary" href="#contact">
                  無料相談を申し込む
                </a>
                <a className="cta-button ghost" href="#materials">
                  資料請求
                </a>
              </div>
              <div className="hero-meta">
                <div className="meta-card">
                  <p className="meta-label">国の指針との整合</p>
                  <p className="meta-value">N-E.X.T.ハイスクール構想対応</p>
                </div>
                <div className="meta-card">
                  <p className="meta-label">財源</p>
                  <p className="meta-value">高等学校教育改革促進基金</p>
                </div>
                <div className="meta-card">
                  <p className="meta-label">対象</p>
                  <p className="meta-value">教育委員会・高校・地元企業</p>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="diagram-card">
                <div className="diagram-header">
                  <p className="kicker">地域共創モデル</p>
                  <h3>スキル自給自足エコシステム</h3>
                </div>
                <div className="diagram">
                  <svg viewBox="0 0 320 220" role="img" aria-label="自治体・学校・企業の循環モデル">
                    <defs>
                      <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#2FA4A9" />
                        <stop offset="100%" stopColor="#0B2D4F" />
                      </linearGradient>
                    </defs>
                    <circle cx="160" cy="110" r="82" fill="none" stroke="#E1E8F0" strokeWidth="2" />
                    <circle cx="160" cy="110" r="56" fill="url(#heroGrad)" opacity="0.08" />
                    <g fill="#0B2D4F" fontSize="12" fontWeight="600" fontFamily="'Noto Sans JP', sans-serif">
                      <rect x="118" y="12" width="84" height="40" rx="14" fill="#F5F7FA" />
                      <text x="160" y="37" textAnchor="middle">自治体</text>
                      <rect x="26" y="142" width="84" height="40" rx="14" fill="#F5F7FA" />
                      <text x="68" y="167" textAnchor="middle">学校</text>
                      <rect x="210" y="142" width="84" height="40" rx="14" fill="#F5F7FA" />
                      <text x="252" y="167" textAnchor="middle">地元企業</text>
                      <rect x="112" y="90" width="96" height="40" rx="18" fill="#2FA4A9" />
                      <text x="160" y="114" textAnchor="middle" fill="#ffffff">DX人材</text>
                    </g>
                    <path d="M160 52 L88 142" stroke="#2FA4A9" strokeWidth="2" fill="none" />
                    <path d="M160 52 L232 142" stroke="#2FA4A9" strokeWidth="2" fill="none" />
                    <path d="M88 142 L232 142" stroke="#2FA4A9" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <p className="diagram-caption">
                  学校で育てた人材が地域で活躍し、再び学びに還流する循環を設計します。
                </p>
              </div>
              <div className="signal-card">
                <h4>2040年を見据えた自治体の生存戦略</h4>
                <p>
                  地域の担い手不足に備え、高校を「地方創生・産業振興」のエンジンへ再定義。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section problem" id="problem">
          <div className="container">
            <div className="section-head">
              <p className="kicker">課題認識</p>
              <h2>なぜ「システム導入」だけでは、現場で定着しないのか？</h2>
              <p className="lead">
                多くの自治体で、AI・DXツールは「導入されたが使われない投資」になっています。
                失敗の原因はツールの性能ではなく、<strong>人と運用の設計不在</strong>です。
              </p>
            </div>
            <div className="card-grid">
              <article className="card">
                <div className="card-icon">01</div>
                <h3>現場の乖離（リテラシーギャップ）</h3>
                <p>
                  高機能なツールほど、現場との乖離が拡大。一部の教員しか使えず、多くは放置状態に。
                </p>
              </article>
              <article className="card">
                <div className="card-icon">02</div>
                <h3>指導法の硬直化（OS未更新）</h3>
                <p>
                  知識伝達型授業のままAIを導入しても、検索装置にしかならない。
                </p>
              </article>
              <article className="card">
                <div className="card-icon">03</div>
                <h3>伴走の不在（翻訳者不在）</h3>
                <p>
                  技術を教育の言葉に翻訳し、授業設計まで落とせる人材がいない。
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section policy" id="policy">
          <div className="container">
            <div className="section-head split">
              <div>
                <p className="kicker">国の方針と整合</p>
                <h2>「N-E.X.T. ハイスクール構想」を自治体で実装する設計図</h2>
              </div>
              <p className="lead">
                New Education / New Excellence / New Transformation の実現を、地方創生と結びつけて具体化。
                補正予算の基金活用を見据え、実行可能なロードマップへ落とし込みます。
              </p>
            </div>
            <div className="policy-grid">
              <div className="policy-card">
                <h3>高校改革の3つの視点</h3>
                <ul>
                  <li>個性の伸長</li>
                  <li>社会・経済の発展</li>
                  <li>多様なアクセスの確保</li>
                </ul>
              </div>
              <div className="policy-card">
                <h3>理数・DX・AI活用能力の必須化</h3>
                <p>
                  言語能力、情報活用、問題解決、協働する力を育成。Society 5.0に対応するSTEAM教育を、産業界と連携して推進。
                </p>
              </div>
              <div className="policy-card accent">
                <h3>財政的裏付け</h3>
                <p className="big">3,009億円規模の基金活用</p>
                <p>令和7年度補正予算の高等学校教育改革促進基金を活かし、令和9年度以降の交付金制度へ接続。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section model" id="model">
          <div className="container">
            <div className="section-head">
              <p className="kicker">地域共創モデル</p>
              <h2>「育成 → 実装 → 採用」が循環する地域スキルエコシステム</h2>
              <p className="lead">
                自治体・地元企業・学校が三位一体となり、DX人材を地域で育て、地域に定着させる循環を設計します。
              </p>
            </div>
            <div className="flow">
              <div className="flow-step">
                <h3>高校</h3>
                <p>探究・課題解決・AI活用を通じた人材育成。</p>
              </div>
              <div className="flow-step">
                <h3>地元企業</h3>
                <p>業務課題や産業データを教育へ提供。実践の場を創出。</p>
              </div>
              <div className="flow-step">
                <h3>自治体</h3>
                <p>地域戦略と人材政策を統合し、共創のハブとして機能。</p>
              </div>
            </div>
            <div className="callout">
              <div>
                <h3>目的</h3>
                <p>2040年の地域経済の競争力維持と、若者の地域外流出の抑止。</p>
              </div>
              <div>
                <h3>成果</h3>
                <p>産業構造の更新と、官民共創による地域活性化。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section types" id="types">
          <div className="container">
            <div className="section-head">
              <p className="kicker">3つの類型</p>
              <h2>地域特性に合わせた3つのアプローチ</h2>
            </div>
            <div className="card-grid">
              <article className="card">
                <div className="card-icon">A</div>
                <h3>エッセンシャルワーカー型</h3>
                <p>
                  地元企業のノウハウをAIアプリ化。実習・事務自動化を学び、地域産業をアップデートする即戦力を輩出。
                </p>
              </article>
              <article className="card">
                <div className="card-icon">B</div>
                <h3>理数・探究型</h3>
                <p>
                  クリティカルシンキング支援AIで「真の問い」を立てる探究学習を推進。地域産業データを活用した高度な学び。
                </p>
              </article>
              <article className="card">
                <div className="card-icon">C</div>
                <h3>多様なニーズ型</h3>
                <p>
                  離島・小規模校、不登校生徒へのAIアバター支援で「誰一人取り残さない」教育インフラを実現。
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section analytics" id="analytics">
          <div className="container analytics-grid">
            <div className="analytics-copy">
              <p className="kicker">学習ログと質保証</p>
              <h2>個別最適な学びを実現するデータ基盤</h2>
              <p className="lead">
                全対話ログの記録・分析で、生徒一人ひとりの思考プロセスとスキル習得を可視化。
                AIが最適なタイミングでヒントや課題をパーソナライズして提示します。
              </p>
              <div className="analytics-cards">
                <div className="mini-card">
                  <h3>スキル証明書</h3>
                  <p>ログデータに基づく客観的な習得証明で、地元企業の採用判断を支援。</p>
                </div>
                <div className="mini-card">
                  <h3>EBPMダッシュボード</h3>
                  <p>活用状況・成果を自治体単位で可視化し、継続改善へ。</p>
                </div>
              </div>
            </div>
            <div className="analytics-visual">
              <div className="chart-card">
                <h3>学習ログの蓄積と成果</h3>
                <svg viewBox="0 0 320 180" role="img" aria-label="学習ログの可視化チャート">
                  <rect x="20" y="20" width="280" height="120" rx="12" fill="#F5F7FA" />
                  <polyline
                    points="30,120 90,100 150,84 210,60 280,40"
                    fill="none"
                    stroke="#2FA4A9"
                    strokeWidth="3"
                  />
                  <circle cx="90" cy="100" r="4" fill="#2FA4A9" />
                  <circle cx="150" cy="84" r="4" fill="#2FA4A9" />
                  <circle cx="210" cy="60" r="4" fill="#2FA4A9" />
                  <circle cx="280" cy="40" r="4" fill="#2FA4A9" />
                  <line x1="30" y1="120" x2="280" y2="120" stroke="#D5DEE8" strokeWidth="2" />
                </svg>
                <p className="chart-caption">導入校数・対話数の伸長を想定した活用指標。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section support" id="support">
          <div className="container">
            <div className="section-head">
              <p className="kicker">三段構えの支援</p>
              <h2>戦略から現場まで。3層で支えるトータルサポート</h2>
            </div>
            <div className="layer-stack">
              <div className="layer-card">
                <div>
                  <p className="layer-label">Strategy</p>
                  <h3>戦略層（教育委員会幹部向け）</h3>
                  <p>地域独自のDX人材育成ロードマップ策定。施策を点ではなく構想として設計。</p>
                </div>
                <span className="layer-tag">Layer 1</span>
              </div>
              <div className="layer-card">
                <div>
                  <p className="layer-label">Management</p>
                  <h3>管理層（事務局向け）</h3>
                  <p>EBPMダッシュボードで活用状況・成果を可視化。</p>
                </div>
                <span className="layer-tag">Layer 2</span>
              </div>
              <div className="layer-card">
                <div>
                  <p className="layer-label">Execution</p>
                  <h3>実行層（学校現場）</h3>
                  <p>人 × ツールによる実装支援。</p>
                </div>
                <span className="layer-tag">Layer 3</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section human-ai" id="human-ai">
          <div className="container">
            <div className="section-head">
              <p className="kicker">人 × AI</p>
              <h2>最強の伴走者：AI認定資格 × 教員免許保持者</h2>
            </div>
            <div className="split-grid">
              <div className="info-card">
                <h3>AI-ITC支援員（人）</h3>
                <ul>
                  <li>教員免許保持</li>
                  <li>授業設計支援</li>
                  <li>即時トラブル対応</li>
                  <li>研修・改善まで伴走</li>
                </ul>
              </div>
              <div className="info-card accent">
                <h3>スクールAI（ツール）</h3>
                <ul>
                  <li>教育特化設計</li>
                  <li>Azure基準セキュリティ</li>
                  <li>思考を促す設計</li>
                </ul>
              </div>
            </div>
            <div className="callout">
              <div>
                <h3>コーディネーター機能</h3>
                <p>学校と地元企業の橋渡し役として、地域の課題と学びを接続。</p>
              </div>
              <div>
                <h3>不可逆な定着</h3>
                <p>補助金終了後も自走可能な運営体制を確立。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section safety" id="safety">
          <div className="container">
            <div className="section-head split">
              <div>
                <p className="kicker">安全性とガバナンス</p>
                <h2>世界基準の安全性と教育的設計</h2>
              </div>
              <p className="lead">
                Microsoft Azure基盤、データ学習非利用、文科省ガイドライン完全準拠。
                「答えを出さずにヒントを出す」教育的設計を徹底しています。
              </p>
            </div>
            <div className="safety-grid">
              <div className="safety-item">
                <h3>セキュアな運用</h3>
                <p>閉域ネットワーク対応、アクセス制御、ログ監査を標準装備。</p>
              </div>
              <div className="safety-item">
                <h3>ガバナンス設計</h3>
                <p>自治体ごとの運用ルールや権限設計を支援。</p>
              </div>
              <div className="safety-item">
                <h3>教育的アラインメント</h3>
                <p>思考促進型の回答設計で、主体的な学びを守る。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section trust" id="trust">
          <div className="container">
            <div className="section-head">
              <p className="kicker">信頼の実績</p>
              <h2>導入実績と受賞歴</h2>
            </div>
            <div className="trust-grid">
              <div className="trust-card">
                <h3>受賞</h3>
                <p>日本e-Learning大賞</p>
                <p>経済産業大臣賞／総務大臣賞</p>
              </div>
              <div className="trust-card">
                <h3>導入規模</h3>
                <p className="big">1,000校</p>
                <p className="big">12万人</p>
              </div>
              <div className="trust-card">
                <h3>パートナー企業</h3>
                <p>サクシード / AIUEO / みんがく</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta" id="contact">
          <div className="container cta-inner">
            <div>
              <p className="kicker">結び</p>
              <h2>2040年の地域を支える人材を、共に育てませんか。</h2>
              <p className="lead">
                まずはあなたの自治体専用DX人材育成ロードマップ無料相談から。
              </p>
            </div>
            <div className="cta-actions">
              <a className="cta-button primary" href="#materials">
                お問い合わせ・資料請求
              </a>
              <p className="cta-note">オンライン60分 / 現状ヒアリング付き</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="lp-footer" id="materials">
        <div className="container footer-inner">
          <div>
            <h3>N-E.X.T.ハイスクール 支援パッケージ</h3>
            <p>自治体教育DXの不可逆な定着と官民共創による地域活性化へ。</p>
          </div>
          <div className="footer-links">
            <a href="#top">トップへ戻る</a>
            <a href="#contact">無料相談</a>
          </div>
        </div>
        <p className="footer-copy">&copy; 2026 みんがく. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default SchoolAiEnglish
