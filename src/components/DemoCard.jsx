export default function DemoCard({ demo }) {
  return (
    <li className="demo-row">
      <span className="demo-row-label">[{demo.label}]</span>

      <div className="min-w-0 flex-1">
        <a
          href={demo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="demo-row-title"
        >
          {demo.title}
          <span className="demo-row-arrow" aria-hidden="true">↗</span>
        </a>
        <p className="demo-row-desc">{demo.description}</p>
      </div>

      <a
        href={demo.source}
        target="_blank"
        rel="noopener noreferrer"
        className="demo-source-link"
        aria-label={`${demo.title} source code on GitHub`}
      >
        &lt;/&gt; source
      </a>
    </li>
  );
}
