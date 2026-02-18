import './style.css'
import img001 from './assets/001.png'
import img002 from './assets/002.png'
import img003 from './assets/003.png'
import img004 from './assets/004.png'
import img005 from './assets/005.png'
import img006 from './assets/006.png'
import img100 from './assets/100.png'

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
        {/* ===== ヒーローセクション ===== */}
        <section className="hero" id="top">
          <div className="hero-bg" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="pill">令和7年度補正予算対応</div>
              <h1>
                地域を支えるDX
                <br />
                人材育成エコシステム
                <span className="hero-subtitle">N-E.X.T.ハイスクール 支援パッケージ</span>
              </h1>
              <p className="lead">
                教育と採用が循環する「地域共創モデル」を戦略・人材・ツールまでワンストップで実装。
                <br />
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

        {/* ===== 課題認識セクション ===== */}
        <section className="section problem" id="problem">
          <div className="container">
            <div className="section-head">
              <p className="kicker">課題認識</p>
              <h2>
                なぜ「システム導入」だけでは、
                <br />
                現場で定着しないのか？
              </h2>
              <p className="lead">
                多くの自治体で、AI・DXツールは「導入されたが使われない投資」になっています。
                <br />
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
                <div className="card-illustration-wrap">
                  <img src={img001} alt="リテラシーギャップ" className="card-illustration" />
                </div>
              </article>
              <article className="card">
                <div className="card-icon">02</div>
                <h3>指導法の硬直化（OS未更新）</h3>
                <p>
                  知識伝達型授業のままAIを導入しても、検索装置にしかならない。
                </p>
                <div className="card-illustration-wrap">
                  <img src={img002} alt="OS未更新" className="card-illustration" />
                </div>
              </article>
              <article className="card">
                <div className="card-icon">03</div>
                <h3>伴走の不在（翻訳者不在）</h3>
                <p>
                  技術を教育の言葉に翻訳し、授業設計まで落とせる人材がいない。
                </p>
                <div className="card-illustration-wrap">
                  <img src={img003} alt="翻訳者不在" className="card-illustration" />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ===== 国の方針セクション ===== */}
        <section className="section policy" id="policy">
          <div className="container">
            <div className="section-head split">
              <div>
                <p className="kicker">国の方針と整合</p>
                <h2>
                  「N-E.X.T. ハイスクール構想」を
                  <br />
                  自治体で実装する設計図
                </h2>
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

        {/* ===== 地域共創モデルセクション ===== */}
        <section className="section model" id="model">
          <div className="container">
            <div className="section-head">
              <p className="kicker">地域共創モデル</p>
              <h2>教育と採用が循環する「地域共創モデル」</h2>
              <p className="lead">
                人財の「共創」と「補足」のサイクルをスクールAIを使って実現。
                <br />
                地元企業のノウハウや技術を専門アプリとして提供し、学校へ提供。
              </p>
            </div>
            <div className="model-image-area">
              <img src={img004} alt="人材育成エコシステム" className="model-image" />
            </div>
          </div>
        </section>

        {/* ===== 3つの類型セクション ===== */}
        <section className="section types" id="types">
          <div className="container">
            <div className="section-head">
              <p className="kicker">3つの類型</p>
              <h2>N-E.X.T.ハイスクール構想3つの類型への完全対応</h2>
            </div>
            <div className="types-image-area">
              <img src={img005} alt="3つの類型" className="types-image" />
            </div>
          </div>
        </section>

        {/* ===== 類型① エッセンシャルワーカー型-1 ===== */}
        <section className="section type-detail" id="type-essential-1">
          <div className="container">
            <h2 className="type-detail-title">
              <span className="type-detail-border" />
              x 類型① エッセンシャルワーカー型-1
            </h2>
            <div className="type-detail-grid">
              <div className="type-detail-left">
                <div className="type-purpose-card">
                  <div className="type-purpose-header">
                    <span className="type-purpose-icon blue">◎</span>
                    <span className="type-purpose-label">本類型の目的</span>
                  </div>
                  <p className="type-purpose-text">
                    地域産業と深く連携し、実社会で即戦力となる「<strong>高度な専門性</strong>」と「<strong>技術活用能力</strong>」をスクールAIの活用で育成
                  </p>
                </div>
                <div className="type-measures">
                  <div className="type-measure-item">
                    <div className="type-measure-header">
                      <span className="measure-icon blue">👤</span>
                      <span className="measure-label">施策 01</span>
                    </div>
                    <h3>地元企業監修「バーチャル熟練工・専門家アプリ」</h3>
                    <p>熟練者のノウハウをAI化し、PBLでの共同開発プロセス自体を学びに変える</p>
                  </div>
                  <div className="type-measure-item">
                    <div className="type-measure-header">
                      <span className="measure-icon blue">👤</span>
                      <span className="measure-label">施策 02</span>
                    </div>
                    <h3>企業の「匠の技」を継承する個別最適トレーニング</h3>
                    <p>24時間体制の専門指導と、業界基準の高度なフィードバック環境を提供</p>
                  </div>
                  <div className="type-measure-item">
                    <div className="type-measure-header">
                      <span className="measure-icon blue">🤝</span>
                      <span className="measure-label">施策 03</span>
                    </div>
                    <h3>キャリア意識の醸成と地域愛着の向上</h3>
                    <p>「地元のプロ」AIとの継続対話で、地域産業への解像度と貢献意欲を高める</p>
                  </div>
                </div>
              </div>
              <div className="type-detail-right">
                <div className="data-driven-card">
                  <div className="data-driven-header">
                    <span className="data-driven-icon">📊</span>
                    <h3>Data Driven</h3>
                    <p>成果の可視化</p>
                  </div>
                  <div className="data-driven-divider" />
                  <div className="data-driven-item">
                    <span className="data-driven-item-icon">👁</span>
                    <div>
                      <h4>ログ分析による意欲の把握</h4>
                      <p>生徒が企業監修アプリに「どんな質問をし、何に興味を持っているか」を分析。</p>
                    </div>
                  </div>
                  <div className="data-driven-arrow">↓</div>
                  <div className="data-driven-bottom">
                    <h4>的確な進路指導へ</h4>
                    <p>隠れた適性や関心に基づき、マッチ度の高い地域企業への就職や進学をサポート。</p>
                  </div>
                  <div className="data-driven-footer">Teacher's Dashboard</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 類型① エッセンシャルワーカー型-2 ===== */}
        <section className="section type-detail" id="type-essential-2">
          <div className="container">
            <h2 className="type-detail-title">
              <span className="type-detail-border" />
              類型① エッセンシャルワーカー型-2
            </h2>
            <p className="type-detail-subtitle">3つの施策詳細と実装を支える強み</p>
            <div className="type-detail-grid">
              <div className="type-detail-left">
                <div className="type-measures">
                  <div className="type-measure-item has-border">
                    <div className="type-measure-header">
                      <span className="measure-icon blue">👤</span>
                      <span className="measure-label">施策01</span>
                    </div>
                    <h3>バーチャル熟練工・専門家アプリの開発</h3>
                    <div className="measure-checks">
                      <div className="measure-check">
                        <span className="check-icon">✓</span>
                        <div>
                          <strong>専門知のデジタル化</strong>
                          <p>熟練者のノウハウ（製造・農業・医療等）をプロンプト化しAIに実装</p>
                        </div>
                      </div>
                      <div className="measure-check">
                        <span className="check-icon">✓</span>
                        <div>
                          <strong>実務シミュレーション＆PBL</strong>
                          <p>「施工管理」「病害虫診断」等のAI開発プロセス自体を高度な学びに</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="type-measure-item has-border">
                    <div className="type-measure-header">
                      <span className="measure-icon blue">🎓</span>
                      <span className="measure-label">施策02</span>
                    </div>
                    <h3>匠の技を継承する個別最適トレーニング</h3>
                    <div className="measure-checks">
                      <div className="measure-check">
                        <span className="check-icon">✓</span>
                        <div>
                          <strong>24時間体制の専門指導</strong>
                          <p>プロの思考プロセスをいつでも擬似体験できる自習環境</p>
                        </div>
                      </div>
                      <div className="measure-check">
                        <span className="check-icon">✓</span>
                        <div>
                          <strong>高度なフィードバック</strong>
                          <p>専門用語、報告書様式、安全基準に沿った記述をAIが即時添削</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="type-measure-item has-border">
                    <div className="type-measure-header">
                      <span className="measure-icon blue">❤️</span>
                      <span className="measure-label">施策03</span>
                    </div>
                    <h3>キャリア意識の醸成と地域愛着</h3>
                    <div className="measure-checks">
                      <div className="measure-check">
                        <span className="check-icon">✓</span>
                        <div>
                          <strong>「地元のプロ」との継続的対話</strong>
                          <p>ログ分析で生徒の興味・関心を可視化、進路指導へ活用</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="type-detail-right">
                <div className="strengths-card">
                  <div className="strengths-header">
                    <span className="strengths-icon">🚀</span>
                    <h3>実装に向けた強み</h3>
                  </div>
                  <div className="strengths-divider" />
                  <div className="strengths-item">
                    <span className="strengths-item-icon yellow">⚡</span>
                    <div>
                      <h4>ノーコードで迅速開発</h4>
                      <p>プログラミング不要。企業の助言を即座にプロンプトへ反映し、技術変化の速い業界ニーズに柔軟対応。</p>
                    </div>
                  </div>
                  <div className="strengths-item">
                    <span className="strengths-item-icon blue">🛡</span>
                    <div>
                      <h4>安全な共有環境</h4>
                      <p>Azure OpenAI Service準拠。作成した高度な専門アプリは学内・グループ内だけで安全に共有可能。</p>
                    </div>
                  </div>
                  <div className="strengths-item">
                    <span className="strengths-item-icon cyan">📈</span>
                    <div>
                      <h4>確かな共同研究実績</h4>
                      <p>「赤本AI」や多数の大学との共同研究により、産学官連携の基盤として高い信頼性を確保。</p>
                    </div>
                  </div>
                  <div className="strengths-bottom">
                    <p className="strengths-mission-label">OUR MISSION</p>
                    <p className="strengths-mission">地域企業の知恵を、教育現場へ。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 類型② 理数・探究型 ===== */}
        <section className="section type-detail" id="type-research">
          <div className="container">
            <div className="type-detail-gradient-line blue" />
            <h2 className="type-detail-title">
              <span className="type-detail-border" />
              類型② 理数・探究型
            </h2>
            <div className="type-detail-grid">
              <div className="type-detail-left">
                <div className="type-purpose-card purple">
                  <div className="type-purpose-header">
                    <span className="type-purpose-icon purple">◎</span>
                    <span className="type-purpose-label">本類型の目的</span>
                  </div>
                  <p className="type-purpose-text">
                    専門教科の文脈の中でAIを活用し、文理融合の学びを支える「<strong>実践的な理数活用</strong>」をスクールAI活用により促進
                  </p>
                </div>
                <div className="type-measures">
                  <div className="type-measure-item">
                    <div className="type-measure-header">
                      <span className="measure-icon cyan">📋</span>
                      <span className="measure-label">施策 01</span>
                    </div>
                    <h3>専門高校向けテンプレートで即実践</h3>
                    <p>工業・農業など各分野に特化したアプリ群で、データ分析や技術計算学習を開始</p>
                  </div>
                  <div className="type-measure-item">
                    <div className="type-measure-header">
                      <span className="measure-icon purple">👥</span>
                      <span className="measure-label">施策 02</span>
                    </div>
                    <h3>専門家ネットワークとの連携</h3>
                    <p>認定アドバイザー・認定ティーチャーとの共同開発や出張授業で、高度な知見を導入</p>
                  </div>
                  <div className="type-measure-item">
                    <div className="type-measure-header">
                      <span className="measure-icon gray">➕</span>
                      <span className="measure-label">施策 03</span>
                    </div>
                    <h3>「自律的・探究的」な研究活動の実現</h3>
                    <p>探究課題発見アプリ等を用い、自ら問いを立て仮説検証を行うプロセスを支援</p>
                  </div>
                </div>
              </div>
              <div className="type-detail-right">
                <div className="visualization-card">
                  <div className="visualization-header">
                    <span className="visualization-icon">📊</span>
                    <div>
                      <h3>Visualization</h3>
                      <p>思考の可視化と接続</p>
                    </div>
                  </div>
                  <div className="visualization-divider" />
                  <div className="visualization-item">
                    <span className="visualization-item-icon">🌐</span>
                    <div>
                      <h4>思考プロセスの客観把握</h4>
                      <p>会話ログや語彙分析を通じ、生徒の探究プロセスを客観的なデータとして可視化。</p>
                    </div>
                  </div>
                  <div className="visualization-arrow">↓</div>
                  <div className="visualization-bottom">
                    <h4>大学教育（高等教育）への接続</h4>
                    <p>大学レベルの研究手法やシミュレーターを活用し、高大接続をスムーズに実現。</p>
                  </div>
                  <div className="visualization-footer">Research Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 類型③ 多様な学習ニーズ対応型 ===== */}
        <section className="section type-detail" id="type-diverse">
          <div className="container">
            <div className="type-detail-gradient-line green" />
            <h2 className="type-detail-title">
              <span className="type-detail-border" />
              類型③ 多様な学習ニーズに対応した教育機会の確保
            </h2>
            <div className="type-detail-grid">
              <div className="type-detail-left">
                <div className="type-purpose-card green">
                  <div className="type-purpose-header">
                    <span className="type-purpose-icon green">◎</span>
                    <span className="type-purpose-label">本類型の目的</span>
                  </div>
                  <p className="type-purpose-text">
                    時間や場所、特性を問わず「個」に寄り添い、
                    <br />
                    「<strong>誰一人取り残さない</strong>」安全な教育環境をスクールAIにより実現
                  </p>
                </div>
                <div className="type-measures">
                  <div className="type-measure-item">
                    <div className="type-measure-header">
                      <span className="measure-icon blue">💙</span>
                      <span className="measure-label">施策 01</span>
                    </div>
                    <h3>24時間「個」に寄り添う学習パートナー</h3>
                    <p>不登校傾向や学び直しが必要な生徒へ、心理的安全性の高い学びの場を提供</p>
                  </div>
                  <div className="type-measure-item">
                    <div className="type-measure-header">
                      <span className="measure-icon blue">🔤</span>
                      <span className="measure-label">施策 02</span>
                    </div>
                    <h3>多様な習熟度・言語背景への対応</h3>
                    <p>「ふりがな付与」や「やさしい日本語」機能で、学習の障壁を取り除く</p>
                  </div>
                  <div className="type-measure-item">
                    <div className="type-measure-header">
                      <span className="measure-icon blue">👪</span>
                      <span className="measure-label">施策 03</span>
                    </div>
                    <h3>保護者・家庭との連携サポート</h3>
                    <p>学校外（家庭）でのAI活用を促進し、放課後の学習内容を実践的に高度化</p>
                  </div>
                </div>
              </div>
              <div className="type-detail-right">
                <div className="monitoring-card">
                  <div className="monitoring-header">
                    <span className="monitoring-icon">🛡</span>
                    <div>
                      <h3>Monitoring &amp; Care</h3>
                      <p>見守りの強化</p>
                    </div>
                  </div>
                  <div className="monitoring-divider" />
                  <div className="monitoring-item">
                    <span className="monitoring-item-icon">👤</span>
                    <div>
                      <h4>会話ログによる予兆検知</h4>
                      <p>顔が見えにくい遠隔・家庭学習でも、生徒の興味関心や頑き、メンタル変化を早期に把握。</p>
                    </div>
                  </div>
                  <div className="monitoring-arrow">↓</div>
                  <div className="monitoring-bottom">
                    <h4>プロセス評価の高度化</h4>
                    <p>感情・頻度分析により、数値化しにくい「主体的・対話的で深い学び」のプロセスを可視化。</p>
                  </div>
                  <div className="monitoring-footer">
                    <span>Teacher's Dashboard</span>
                    <span>05</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 思考を深化させる5つの専門AIアプリ ===== */}
        <section className="section ai-apps" id="ai-apps">
          <div className="container">
            <h2 className="type-detail-title">
              <span className="type-detail-border" />
              思考を深化させる5つの専門AIアプリ（例）
            </h2>
            <div className="ai-apps-image">
              <img src={img006} alt="5つの専門AIアプリ" />
            </div>
          </div>
        </section>

        {/* ===== 専門スタッフによる3層の支援フレームワーク ===== */}
        <section className="section support-framework" id="support-framework">
          <div className="container">
            <h2 className="type-detail-title">
              <span className="type-detail-border" />
              専門スタッフによる3層の支援フレームワーク
            </h2>
            <div className="framework-grid">
              <div className="framework-card">
                <div className="framework-card-top blue" />
                <div className="framework-card-icon">🎓</div>
                <p className="framework-level">HIGH LEVEL</p>
                <h3>1. 認定ティーチャー</h3>
                <div className="framework-role">
                  <p><strong>主な役割：</strong></p>
                  <ul>
                    <li>授業案作成支援</li>
                    <li>出前授業の実施</li>
                  </ul>
                </div>
                <div className="framework-value">
                  <p><strong>価値：</strong></p>
                  <p>高度な教育知見とAIの融合により、次世代の学習体験を創造。</p>
                </div>
              </div>
              <div className="framework-card">
                <div className="framework-card-top green" />
                <div className="framework-card-icon">🖥</div>
                <p className="framework-level">MID LEVEL</p>
                <h3>2. 認定アドバイザー</h3>
                <div className="framework-role">
                  <p><strong>主な役割：</strong></p>
                  <ul>
                    <li>教員研修の実施</li>
                    <li>研究授業の指導助言</li>
                  </ul>
                </div>
                <div className="framework-value">
                  <p><strong>価値：</strong></p>
                  <p>組織全体のICTリテラシーを底上げし、教員の自走を強力に後押し。</p>
                </div>
              </div>
              <div className="framework-card">
                <div className="framework-card-top gray" />
                <div className="framework-card-icon">🔧</div>
                <p className="framework-level">BASE LEVEL</p>
                <h3>3. AI-ICT支援員</h3>
                <div className="framework-role">
                  <p><strong>主な役割：</strong></p>
                  <ul>
                    <li>授業内外のトラブル対応</li>
                    <li>プロンプト作成支援</li>
                  </ul>
                </div>
                <div className="framework-value">
                  <p><strong>価値：</strong></p>
                  <p>技術的な壁を取り除き、AI活用に対する現場の安心感を醸成。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 学習ログと質保証セクション（そのまま残す） ===== */}
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

        {/* ===== 人 × AI セクション（そのまま残す） ===== */}
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

        {/* ===== 安全性とガバナンス ===== */}
        <section className="section safety" id="safety">
          <div className="container">
            <div className="section-head split">
              <div>
                <p className="kicker">安全性とガバナンス</p>
                <h2 className="safety-title-compact">世界基準の安全性と教育的設計</h2>
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

        {/* ===== 導入実績と信頼（新デザイン） ===== */}
        <section className="section trust-new" id="trust">
          <div className="container">
            <h2 className="type-detail-title">
              <span className="type-detail-border" />
              導入実績と信頼
            </h2>
            <div className="trust-new-image">
              <img src={img100} alt="導入実績と信頼 - 日本e-learning大賞受賞、導入校数1,000校、アクティブユーザー数12万人超" className="trust-image" />
            </div>
            <p className="trust-footer-text">
              認定ティーチャー（プロンプトエキスパート）のエコシステムによる持続可能な運用。
            </p>
          </div>
        </section>

        {/* ===== CTAセクション ===== */}
        <section className="section cta" id="contact">
          <div className="container cta-inner">
            <div>
              <h2 className="cta-title-compact">2040年の地域を支える人材を、共に育てませんか。</h2>
              <p className="lead">
                まずはあなたの自治体専用DX人材育成ロードマップ無料相談から。
              </p>
            </div>
            <div className="cta-actions">
              <a className="cta-button primary" href="#materials">
                お問い合わせ・資料請求
              </a>
              <p className="cta-note">オンライン相談／現状ヒアリング</p>
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
