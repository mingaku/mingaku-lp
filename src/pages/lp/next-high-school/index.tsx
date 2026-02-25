import { useEffect } from "react";
import "./style.css";
import img001 from "./assets/001.png";
import img002 from "./assets/002.png";
import img003 from "./assets/003.png";
import img004 from "./assets/004.png";
import img005 from "./prompt/構想3.png";
import img006 from "./assets/006.png";
import heroImg from "./assets/hero.jpeg";
/* 修正1 */
import logoSvg from "./prompt/logo.svg";


const svgProps = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, width: 20, height: 20 };

/* Reusable SVG inline icons */
const Icon = {
  User: () => <svg {...svgProps}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  Handshake: () => <svg {...svgProps}><path d="M11 17a1 1 0 0 1-1 1H6l-4 2V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10z" /><path d="M14 9h4a2 2 0 0 1 2 2v10l-4-2h-2" /><path d="M9 12h.01M15 12h.01" /></svg>,
  BarChart: () => <svg {...svgProps}><path d="M3 3v18h18" /><rect x="7" y="10" width="3" height="8" rx="1" /><rect x="14" y="5" width="3" height="13" rx="1" /></svg>,
  Eye: () => <svg {...svgProps}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
  GraduationCap: () => <svg {...svgProps}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" /></svg>,
  Heart: () => <svg {...svgProps}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  Rocket: () => <svg {...svgProps}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
  Zap: () => <svg {...svgProps}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
  Shield: () => <svg {...svgProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  TrendingUp: () => <svg {...svgProps}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
  Clipboard: () => <svg {...svgProps}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>,
  Users: () => <svg {...svgProps}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  PlusCircle: () => <svg {...svgProps}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>,
  Globe: () => <svg {...svgProps}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  HeartHandshake: () => <svg {...svgProps}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" /><path d="m18 15-2-2" /><path d="m15 18-2-2" /></svg>,
  Type: () => <svg {...svgProps}><polyline points="4 7 4 4 20 4 20 7" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="12" y1="4" x2="12" y2="20" /></svg>,
  Family: () => <svg {...svgProps}><circle cx="6" cy="5" r="2.5" /><path d="M3 13v-1a3 3 0 0 1 6 0v1" /><circle cx="18" cy="5" r="2.5" /><path d="M15 13v-1a3 3 0 0 1 6 0v1" /><circle cx="12" cy="11" r="2.5" /><path d="M9 21v-2a3 3 0 0 1 6 0v2" /></svg>,
  Monitor: () => <svg {...svgProps}><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
  Wrench: () => <svg {...svgProps}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
};

function NextHighSchool() {
  useEffect(() => {
    document.title = "みんがく | N-E.X.T. ハイスクール構想";
  }, []);

  return (
    <div className="lp">
      <header className="lp-header">
        <div className="container header-inner">
          {/* 修正1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={logoSvg} alt="logo" style={{ height: '32px', width: 'auto' }} />
            <div className="brand">
              <span className="brand-mark">N-E.N.T.</span>
              <span className="brand-name">ハイスクール構想 支援パッケージ</span>
            </div>
          </div>
          <nav className="header-nav">
            <a href="#problem">課題</a>
            <a href="#model">地域共創</a>
            <a href="#support-framework">支援内容</a>

            {/* 修正4 */}
            <a className="cta-button primary" href="https://mingaku.net/contact" target="_blank" rel="noopener noreferrer">
              無料相談・資料請求
            </a>
            {/* リンク修正 */}
          </nav>
        </div>
      </header>

      <main>
        {/* ===== ヒーローセクション ===== */}
        <section className="hero" id="top">
          <div className="hero-bg" aria-hidden="true" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>
                スクールAIだからできる
                <br />
                地域を支えるDX人材育成エコシステム
                <span className="hero-subtitle">
                  N-E.X.T.ハイスクール 支援パッケージ
                </span>
              </h1>
              {/* 修正2 */}
              <p className="lead">
                地域と教育の共創。生徒の振り返りと効率化 が生む「先生の余白」 を活かし、
                <br />
                先生自身が想いをのせて現場に最適なアプリをサクッと自作できる
                <br />
                唯一の教育プラットフォームで産業に即した教育を実装。
              </p>
              <p className="lead" style={{ marginTop: '1em' }}>
                ICT支援員派遣や全国の先生ネットワークと連携し定着まで伴走。2040年 高度人材が循環する基盤を構築します。
              </p>
              {/* 修正3 */}
              <div className="hero-actions">
                {/* 修正5 */}
                <a className="cta-button primary" href="https://mingaku.net/contact" target="_blank" rel="noopener noreferrer">
                  無料相談・資料請求
                </a>
                {/* リンク修正 */}
              </div>
            </div>
            <div className="hero-visual">
              {/* 修正5 */}
              <img src={heroImg} alt="エコシステム" className="hero-ecosystem-image" />
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
                失敗の原因はツールの性能ではなく、
                <strong>人と運用の設計不在</strong>です。
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
                  <img
                    src={img001}
                    alt="リテラシーギャップ"
                    className="card-illustration"
                  />
                </div>
              </article>
              <article className="card">
                <div className="card-icon">02</div>
                <h3>指導法の硬直化（OS未更新）</h3>
                <p>
                  知識伝達型授業のままAIを導入しても、検索装置にしかならない。
                </p>
                <div className="card-illustration-wrap">
                  <img
                    src={img002}
                    alt="OS未更新"
                    className="card-illustration"
                  />
                </div>
              </article>
              <article className="card">
                <div className="card-icon">03</div>
                <h3>伴走の不在（翻訳者不在）</h3>
                <p>
                  技術を教育の言葉に翻訳し、授業設計まで落とせる人材がいない。
                </p>
                <div className="card-illustration-wrap">
                  <img
                    src={img003}
                    alt="翻訳者不在"
                    className="card-illustration"
                  />
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
                New Education / New Excellence / New Transformation
                の実現を、地方創生と結びつけて具体化。
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
                  言語能力、情報活用、問題解決、協働する力を育成。Society
                  5.0に対応するSTEAM教育を、産業界と連携して推進。
                </p>
              </div>
              <div className="policy-card accent">
                <h3>財政的裏付け</h3>
                <p className="big">2,955億円規模の基金活用</p>
                <p>
                  令和7年度補正予算で「高等学校等教育改革促進事業」の予算を盛り込み、公募を実施している。
                </p>
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
              <img
                src={img004}
                alt="人材育成エコシステム"
                className="model-image"
              />
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

        {/* ===== 類型① エッセンシャルワーカー型-2 ===== */}
        <section className="section type-detail" id="type-essential-2">
          <div className="container">
            <h2 className="type-detail-title">
              <span className="type-detail-border" />
              類型① 「エッセンシャルワーカー型」
            </h2>
            <p className="type-detail-subtitle">
              3つの施策詳細と実装を支える強み
            </p>
            <div className="type-detail-grid">
              <div className="type-detail-left">
                <div className="type-measures">
                  <div className="type-measure-item has-border">
                    <div className="type-measure-header">
                      <span className="measure-icon blue"><Icon.User /></span>
                      <span className="measure-label">施策01</span>
                    </div>
                    <h3>バーチャル熟練工・専門家テンプレートの開発</h3>
                    <div className="measure-checks">
                      <div className="measure-check">
                        <span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><polyline points="20 6 9 17 4 12" /></svg></span>
                        <div>
                          <strong>専門知のデジタル化</strong>
                          <p>
                            熟練者のノウハウ（製造・農業・医療等）をプロンプト化しAIに実装
                          </p>
                        </div>
                      </div>
                      <div className="measure-check">
                        <span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><polyline points="20 6 9 17 4 12" /></svg></span>
                        <div>
                          <strong>実務シミュレーション＆PBL</strong>
                          <p>
                            「施工管理」「病害虫診断」等のAI開発プロセス自体を高度な学びに
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="type-measure-item has-border">
                    <div className="type-measure-header">
                      <span className="measure-icon blue"><Icon.GraduationCap /></span>
                      <span className="measure-label">施策02</span>
                    </div>
                    <h3>匠の技を継承する個別最適トレーニングテンプレートの開発</h3>
                    <div className="measure-checks">
                      <div className="measure-check">
                        <span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><polyline points="20 6 9 17 4 12" /></svg></span>
                        <div>
                          <strong>24時間体制の専門指導</strong>
                          <p>
                            プロの思考プロセスをいつでも擬似体験できる自習環境
                          </p>
                        </div>
                      </div>
                      <div className="measure-check">
                        <span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><polyline points="20 6 9 17 4 12" /></svg></span>
                        <div>
                          <strong>高度なフィードバック</strong>
                          <p>
                            専門用語、報告書様式、安全基準に沿った記述をAIが即時添削
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="type-measure-item has-border">
                    <div className="type-measure-header">
                      <span className="measure-icon blue"><Icon.Heart /></span>
                      <span className="measure-label">施策03</span>
                    </div>
                    <h3>キャリア意識の醸成と地域愛着促進テンプレートの開発</h3>
                    <div className="measure-checks">
                      <div className="measure-check">
                        <span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><polyline points="20 6 9 17 4 12" /></svg></span>
                        <div>
                          <strong>「地元のプロ」との継続的対話</strong>
                          <p>
                            ログ分析で生徒の興味・関心を可視化、進路指導へ活用
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="type-detail-right">
                <div className="strengths-card">
                  <div className="strengths-header">
                    <span className="strengths-icon"><Icon.Rocket /></span>
                    <h3>実装に向けた強み</h3>
                  </div>
                  <div className="strengths-divider" />
                  <div className="strengths-item">
                    <span className="strengths-item-icon yellow"><Icon.Eye /></span>
                    <div>
                      <h4 style={{ color: "white" }}>ログ分析による意欲の把握</h4>
                      <p style={{ color: "white" }}>
                        生徒が企業監修アプリに「どんな質問をし、何に興味を持っているか」を分析。
                      </p>
                    </div>
                  </div>
                  <div className="strengths-item">
                    <span className="strengths-item-icon blue"><Icon.Shield /></span>
                    <div>
                      <h4>安全な共有環境</h4>
                      <p>
                        Azure OpenAI
                        Service準拠。作成した高度な専門アプリは学内・グループ内だけで安全に共有可能。
                      </p>
                    </div>
                  </div>
                  <div className="strengths-item">
                    <span className="strengths-item-icon cyan"><Icon.TrendingUp /></span>
                    <div>
                      <h4 style={{ color: "white" }}>的確な進路指導へ</h4>
                      <p style={{ color: "white" }}>
                        隠れた適性や関心に基づき、マッチ度の高い地域企業への就職や進学をサポート。
                      </p>
                    </div>
                  </div>
                  <div className="strengths-bottom">
                    <p className="strengths-mission-label">OUR MISSION</p>
                    <p className="strengths-mission">
                      地域企業の知恵を、教育現場へ。
                    </p>
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
                    <span className="type-purpose-icon purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></span>
                    <span className="type-purpose-label">本類型の目的</span>
                  </div>
                  <p className="type-purpose-text">
                    理数学習の文脈の中でAIを活用し、文理融合の学びを支える「
                    <strong>実践的な理数活用</strong>
                    」をスクールAI活用により促進
                  </p>
                </div>
                <div className="type-measures">
                  <div className="type-measure-item">
                    <div className="type-measure-header">
                      <span className="measure-icon cyan"><Icon.Clipboard /></span>
                      <span className="measure-label">施策 01</span>
                    </div>
                    <h3>理数探求に特化したAI教材の開発</h3>
                    <p>
                      理数学習など各分野に特化したアプリ群で、データ分析や技術計算学習を開始
                    </p>
                  </div>
                  <div className="type-measure-item">
                    <div className="type-measure-header">
                      <span className="measure-icon purple"><Icon.Users /></span>
                      <span className="measure-label">施策 02</span>
                    </div>
                    <h3>専門家ネットワークとの連携テンプレートの開発</h3>
                    <p>
                      認定アドバイザー・認定ティーチャーとの共同開発や出張授業で、高度な知見を導入
                    </p>
                  </div>
                  <div className="type-measure-item">
                    <div className="type-measure-header">
                      <span className="measure-icon gray"><Icon.PlusCircle /></span>
                      <span className="measure-label">施策 03</span>
                    </div>
                    <h3>「自律的・探究的」な研究活動の実現</h3>
                    <p>
                      探究課題発見アプリ等を用い、自ら問いを立て仮説検証を行うプロセスを支援
                    </p>
                  </div>
                </div>
              </div>
              <div className="type-detail-right">
                <div className="visualization-card">
                  <div className="visualization-header">
                    <span className="visualization-icon"><Icon.BarChart /></span>
                    <div>
                      <h3>Visualization</h3>
                      <p>思考の可視化と接続</p>
                    </div>
                  </div>
                  <div className="visualization-divider" />
                  <div className="visualization-item">
                    <span className="visualization-item-icon"><Icon.Globe /></span>
                    <div>
                      <h4>思考プロセスの客観把握</h4>
                      <p>
                        会話ログや語彙分析を通じ、生徒の探究プロセスを客観的なデータとして可視化。
                      </p>
                    </div>
                  </div>
                  <div className="visualization-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg></div>
                  <div className="visualization-bottom">
                    <h4>大学教育（高等教育）への接続</h4>
                    <p>
                      大学レベルの研究手法やシミュレーターを活用し、高大接続をスムーズに実現。
                    </p>
                  </div>
                  {/* 修正2: Research Support 削除 */}
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
                    <span className="type-purpose-icon green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></span>
                    <span className="type-purpose-label">本類型の目的</span>
                  </div>
                  <p className="type-purpose-text">
                    時間や場所、特性を問わず「個」に寄り添い、
                    <br />「<strong>誰一人取り残さない</strong>
                    」安全な教育環境をスクールAIにより実現
                  </p>
                </div>
                <div className="type-measures">
                  <div className="type-measure-item">
                    <div className="type-measure-header">
                      <span className="measure-icon blue"><Icon.HeartHandshake /></span>
                      <span className="measure-label">施策 01</span>
                    </div>
                    {/* 修正4 */}
                    <h3>24時間「個」に寄り添うオンライン自習室と学習パートナー</h3>
                    <p>
                      不登校傾向や学び直しが必要な生徒へ、心理的安全性の高い学びの場を提供
                    </p>
                  </div>
                  <div className="type-measure-item">
                    <div className="type-measure-header">
                      <span className="measure-icon blue"><Icon.Type /></span>
                      <span className="measure-label">施策 02</span>
                    </div>
                    <h3>多様な習熟度・言語背景への対応</h3>
                    <p>
                      「ふりがな付与」や「やさしい日本語」機能で、学習の障壁を取り除く
                    </p>
                  </div>
                  <div className="type-measure-item">
                    <div className="type-measure-header">
                      <span className="measure-icon blue"><Icon.Family /></span>
                      <span className="measure-label">施策 03</span>
                    </div>
                    <h3>保護者・家庭との連携サポート</h3>
                    <p>
                      学校外（家庭）でのAI活用を促進し、放課後の学習内容を実践的に高度化
                    </p>
                  </div>
                </div>
              </div>
              <div className="type-detail-right">
                <div className="monitoring-card">
                  <div className="monitoring-header">
                    <span className="monitoring-icon"><Icon.Shield /></span>
                    <div>
                      <h3>Monitoring &amp; Care</h3>
                      <p>見守りの強化</p>
                    </div>
                  </div>
                  <div className="monitoring-divider" />
                  <div className="monitoring-item">
                    <span className="monitoring-item-icon"><Icon.Eye /></span>
                    <div>
                      <h4>会話ログによる予兆検知</h4>
                      <p>
                        顔が見えにくい遠隔・家庭学習でも、生徒の興味関心や頑き、メンタル変化を早期に把握。
                      </p>
                    </div>
                  </div>
                  <div className="monitoring-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg></div>
                  <div className="monitoring-bottom">
                    <h4>プロセス評価の高度化</h4>
                    <p>
                      感情・頻度分析により、数値化しにくい「主体的・対話的で深い学び」のプロセスを可視化。
                    </p>
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
                <div className="framework-card-icon"><Icon.GraduationCap /></div>
                <p className="framework-level">HIGH LEVEL</p>
                {/* 修正7 */}
                <h3>1. DXアドバイザー</h3>
                <div className="framework-role">
                  <p>
                    <strong>主な役割：</strong>
                  </p>
                  <ul>
                    <li>年間のロードマップ</li>
                    <li>実施計画</li>
                  </ul>
                </div>
                <div className="framework-value">
                  <p>
                    <strong>価値：</strong>
                  </p>
                  <p>
                    高度な教育知見とAIの融合により、次世代の学習体験を創造。
                  </p>
                </div>
              </div>
              <div className="framework-card">
                <div className="framework-card-top green" />
                <div className="framework-card-icon"><Icon.Monitor /></div>
                <p className="framework-level">MID LEVEL</p>
                {/* 修正7 */}
                <h3>2. 認定ティーチャー</h3>
                <div className="framework-role">
                  <p>
                    <strong>主な役割：</strong>
                  </p>
                  <ul>
                    <li>出前授業、教員研修の実施</li>
                    <li>事業案作成授業</li>
                  </ul>
                </div>
                <div className="framework-value">
                  <p>
                    <strong>価値：</strong>
                  </p>
                  <p>
                    組織全体のICTリテラシーを底上げし、教員の自走を強力に後押し。
                  </p>
                </div>
              </div>
              <div className="framework-card">
                <div className="framework-card-top gray" />
                <div className="framework-card-icon"><Icon.Wrench /></div>
                <p className="framework-level">BASE LEVEL</p>
                <h3>3. AIに強いICT支援員</h3>
                <div className="framework-role">
                  <p>
                    <strong>主な役割：</strong>
                  </p>
                  <ul>
                    <li>授業内外のトラブル対応</li>
                    <li>プロンプト作成支援</li>
                  </ul>
                </div>
                <div className="framework-value">
                  <p>
                    <strong>価値：</strong>
                  </p>
                  <p>
                    技術的な壁を取り除き、AI活用に対する現場の安心感を醸成。
                  </p>
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
                  <p>
                    ログデータに基づく客観的な習得証明で、地元企業の採用判断を支援。
                  </p>
                </div>
                <div className="mini-card" style={{ textAlign: "left" }}>
                  <h3>ダッシュボード</h3>
                  <p>活用状況・成果を自治体単位で可視化し、継続改善へ。</p>
                </div>
              </div>
            </div>
            <div className="analytics-visual">
              <div className="chart-card">
                <h3>学習ログの蓄積と成果</h3>
                <svg
                  viewBox="0 0 320 180"
                  role="img"
                  aria-label="学習ログの可視化チャート"
                >
                  <rect
                    x="20"
                    y="20"
                    width="280"
                    height="120"
                    rx="12"
                    fill="#F5F7FA"
                  />
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
                  <line
                    x1="30"
                    y1="120"
                    x2="280"
                    y2="120"
                    stroke="#D5DEE8"
                    strokeWidth="2"
                  />
                </svg>
                <p className="chart-caption">
                  導入校数・対話数の伸長を想定した活用指標。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 人 × AI セクション（そのまま残す） ===== */}
        <section className="section human-ai" id="human-ai">
          <div className="container">
            <div className="section-head">
              <p className="kicker">人 × AI</p>
              <h2>AI認定資格×ICT支援員×教員免許保持者</h2>
            </div>
            <div className="split-grid">
              <div className="info-card">
                {/* 全体修正1 */}
                <h3>ICT支援員（人）</h3>
                <ul>
                  <li>AI認定資格</li>
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
                <h2 className="safety-title-compact">
                  世界基準の安全性と教育的設計
                </h2>
              </div>
              <p className="lead">
                Microsoft
                Azure基盤、データ学習非利用、文科省ガイドライン完全準拠。
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



        {/* ===== CTAセクション ===== */}
        <section className="section cta" id="contact">
          <div className="container cta-inner">
            <div>
              <h2 className="cta-title-compact">
                2040年の地域を支える人材を、共に育てませんか。
              </h2>
              <p className="lead">
                まずはあなたの自治体専用DX人材育成ロードマップ無料相談から。
              </p>
            </div>
            <div className="cta-actions">
              {/* リンク修正 */}
              <a className="cta-button primary" href="https://mingaku.net/contact" target="_blank" rel="noopener noreferrer">
                無料相談・資料請求
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
            {/* 修正3: 無料相談テキスト＆リンク削除 */}
          </div>
        </div>
        <p className="footer-copy">
          &copy; 2026 みんがく. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default NextHighSchool;
