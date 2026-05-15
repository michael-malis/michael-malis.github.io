import { RegressionProjectionCard } from './RegressionProjectionCard';

export function FancyVisualisationSection() {
  return (
    <section id="fancy-visualisation" className="fancy-visualisation-section">
      <div className="mx-auto px-6 sm:px-8">
        <div className="fancy-visualisation-header">
          <p className="section-label">// INTERACTIVE REGRESSION GEOMETRY</p>
          <h2>Linear Regression as Projection</h2>
          <p>
            An interactive 3D visualization showing linear regression as orthogonal projection onto the column space of X.
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
              <span className="math-sym-y"><em>y</em></span><span className="math-sym-x"> = </span><span className="math-sym-x"><em>X</em></span>{' '}<span className="math-sym-beta">β</span> + <span className="math-sym-eps">ε</span>
            </div>
            <ul className="regression-math-list">
              <li><span className="regression-math-symbol math-sym-y"><em>Y</em></span> observed response</li>
              <li><span className="regression-math-symbol math-sym-x"><em>X</em></span> design matrix</li>
              <li><span className="regression-math-symbol math-sym-beta">β</span> coefficients</li>
              <li><span className="regression-math-symbol math-sym-eps">ε</span> residual vector</li>
            </ul>

            <div className="regression-formula">
              <span className="math-sym-x">span(<em>X</em>)</span><span className="math-sym-x"> = </span><span className="math-sym-x">&#123;</span><span className="math-sym-x"><em>x</em><sub>i</sub></span><span className="math-sym-x">, </span><span className="math-sym-x"><em>x</em><sub>j</sub></span><span className="math-sym-x">&#125;</span>
            </div>
            <p className="regression-formula-note">column space of X</p>

            <div className="regression-formula">
              <span className="regression-betahat math-sym-beta">β<span className="regression-betahat-hat">ˆ</span></span><span className="math-sym-x"> = (</span><span className="math-sym-x"><em>X</em></span><sup>T</sup><span className="math-sym-x"><em>X</em></span><span className="math-sym-x">)</span><sup className="math-sym-x">−1</sup><span className="math-sym-x"><em>X</em></span><sup>T</sup><span className="math-sym-y"><em>y</em></span>
            </div>
            <p className="regression-formula-note">LS estimate, XᵀX invertible</p>

            <div className="regression-formula">
              <span className="math-sym-yhat"><em>ŷ</em></span><span className="math-sym-x"> = </span><span className="math-sym-x"><em>P</em><sub>X</sub></span>{' '}<span className="math-sym-y"><em>y</em></span>
            </div>
            <div className="regression-formula">
              <span className="math-sym-x"><em>P</em><sub>X</sub></span><span className="math-sym-x"> = </span><span className="math-sym-x"><em>X</em></span><span className="math-sym-x">(</span><span className="math-sym-x"><em>X</em></span><sup>T</sup><span className="math-sym-x"><em>X</em></span><span className="math-sym-x">)</span><sup className="math-sym-x">−1</sup><span className="math-sym-x"><em>X</em></span><sup>T</sup>
            </div>
            <p className="regression-formula-note">projection onto span(X)</p>

            <div className="regression-formula">
              <span className="math-sym-eps">ε</span><span className="math-sym-x"> = </span><span className="math-sym-y"><em>y</em></span><span className="math-sym-x"> − </span><span className="math-sym-yhat"><em>ŷ</em></span>
            </div>
            <div className="regression-formula">
              <span className="math-sym-x"><em>X</em></span><sup>T</sup><span className="math-sym-eps">ε</span><span className="math-sym-x"> = 0</span>
            </div>
            <p className="regression-formula-note">residual is orthogonal to span(X)</p>
          </aside>
        </div>

        <p className="regression-visual-description">
          I chose to visualize linear regression as a central concept in prediction and machine learning. I find it beautiful how this makes the geometric idea of projection clear.
        </p>
      </div>
    </section>
  );
}
