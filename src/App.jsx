import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import HonorsAwards from "./components/HonorsAwards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const FancyVisualisationSection = lazy(() =>
  import("./components/RegressionProjection/FancyVisualisationSection").then(
    (m) => ({ default: m.FancyVisualisationSection })
  )
);

function RegressionFallback() {
  return (
    <section style={{ padding: "4rem 1.5rem", background: "var(--bg-section)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <p className="section-label">// INTERACTIVE REGRESSION GEOMETRY</p>
        <div
          style={{
            marginTop: "2rem",
            minHeight: "420px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "14px",
            border: "1px solid var(--border-soft)",
            background: "var(--surface-card)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              fontSize: "0.875rem",
              letterSpacing: "0.03em",
            }}
          >
            // loading visualization...
          </span>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="relative z-[1] min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Suspense fallback={<RegressionFallback />}>
        <FancyVisualisationSection />
      </Suspense>
      <Projects />
      <HonorsAwards />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
