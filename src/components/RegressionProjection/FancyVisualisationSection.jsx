import { RegressionProjectionCard } from './RegressionProjectionCard';

export function FancyVisualisationSection() {
  return (
    <section id="fancy-visualisation" className="fancy-visualisation-section">
      <div className="mx-auto px-6 sm:px-8">
        <div className="fancy-visualisation-header">
          <p className="section-label">// FEATURED TECHNICAL DEMO</p>
          <h2>Linear Regression as Projection</h2>
          <p>
            A small interactive demo of a geometric idea at the heart of modern data science.
          </p>
          <p className="fancy-visualisation-caption">
            <strong className="regression-note-label">note:</strong>{' '}
            drag <span className="math-var">y</span>, <span className="math-var">x<sub>i</sub></span>, and <span className="math-var">x<sub>j</sub></span> to explore.
          </p>
        </div>

        <div className="regression-layout">
          {/* Left column: 75% — Canvas visualization */}
          <div className="regression-visual-column">
            <RegressionProjectionCard />
          </div>

          {/* Right column: 25% — Math reference panel */}
          <aside className="regression-math-panel" aria-label="Linear regression math reference">
            <h3 className="regression-math-title">ΔLGEBRΔIC DERIVΔTION</h3>

            <div className="regression-formula">
              <span className="math-sym-y"><em>y</em></span> = <span className="math-sym-x"><em>X</em></span>{' '}<span className="math-sym-beta">β</span> + <span className="math-sym-eps">ε</span>
            </div>
            <ul className="regression-math-list">
              <li><span className="regression-math-symbol math-sym-y"><em>Y</em></span> observed response</li>
              <li><span className="regression-math-symbol math-sym-x"><em>X</em></span> design matrix</li>
              <li><span className="regression-math-symbol math-sym-beta">β</span> coefficients</li>
              <li><span className="regression-math-symbol math-sym-eps">ε</span> residual vector</li>
            </ul>

            <div className="regression-formula">
              <span className="math-sym-x">span(<em>X</em>)</span> = &#123;<span className="math-sym-x"><em>x</em><sub>i</sub></span>, <span className="math-sym-x"><em>x</em><sub>j</sub></span>&#125;
            </div>
            <p className="regression-formula-note">all linear combos of columns of X</p>

            <div className="regression-formula">
              <span className="regression-betahat math-sym-beta">β<span className="regression-betahat-hat">ˆ</span></span> = (<span className="math-sym-x"><em>X</em></span><sup>T</sup><span className="math-sym-x"><em>X</em></span>)<sup>−1</sup><span className="math-sym-x"><em>X</em></span><sup>T</sup><span className="math-sym-y"><em>y</em></span>
            </div>
            <p className="regression-formula-note">least-squares estimate (<em>X</em><sup>T</sup><em>X</em> invertible)</p>

            <div className="regression-formula">
              <span className="math-sym-yhat"><em>ŷ</em></span> = <span className="math-sym-x"><em>P</em><sub>X</sub></span>{' '}<span className="math-sym-y"><em>y</em></span>
            </div>
            <div className="regression-formula">
              <span className="math-sym-x"><em>P</em><sub>X</sub></span> = <span className="math-sym-x"><em>X</em></span>(<span className="math-sym-x"><em>X</em></span><sup>T</sup><span className="math-sym-x"><em>X</em></span>)<sup>−1</sup><span className="math-sym-x"><em>X</em></span><sup>T</sup>
            </div>
            <p className="regression-formula-note">projection onto span(X)</p>

            <div className="regression-formula">
              <span className="math-sym-eps">ε</span> = <span className="math-sym-y"><em>y</em></span> − <span className="math-sym-yhat"><em>ŷ</em></span>
            </div>
            <div className="regression-formula">
              <span className="math-sym-x"><em>X</em></span><sup>T</sup><span className="math-sym-eps">ε</span> = 0
            </div>
            <p className="regression-formula-note">residual is orthogonal to span(X)</p>
          </aside>
        </div>

        <p className="regression-visual-description">
          I like how something as simple and visual as projection can sit at the foundation of machine learning, prediction, and many of the powerful results we see in the real world.
        </p>
      </div>
    </section>
  );
}
