import { useMemo, useState } from 'react'
import { analyzeCommitMessage } from '../utils/commitMessage'
import './CommitChecker.css'

function CommitChecker() {
  const [message, setMessage] = useState('')

  const analysis = useMemo(
    () => analyzeCommitMessage(message),
    [message],
  )

  return (
    <section
      className="commit-checker"
      id="commit-checker"
    >
      <div className="commit-checker-heading">
        <div>
          <p className="section-eyebrow">
            COMMIT MESSAGE CHECKER
          </p>

          <h2>
            Write commit messages that explain the change.
          </h2>
        </div>

        <p className="section-description">
          Enter a commit message and GitScope will check
          its structure, clarity, length, and description.
        </p>
      </div>

      <div className="commit-checker-layout">
        <div className="commit-input-panel">
          <label htmlFor="commit-message">
            Commit message
          </label>

          <textarea
            id="commit-message"
            className="commit-message-input"
            value={message}
            rows={5}
            placeholder='Try: feat: add command search'
            onChange={(event) =>
              setMessage(event.target.value)
            }
          />

          <div className="commit-input-meta">
            <span>
              {message.trim().length} characters
            </span>

            <span>
              GitScope recommendation: 12–72
            </span>
          </div>

          <div className="commit-suggestion">
            <span>Suggested message</span>

            <code>{analysis.suggestion}</code>

            <button
              type="button"
              onClick={() =>
                setMessage(analysis.suggestion)
              }
            >
              Use suggestion
            </button>
          </div>
        </div>

        <div className="commit-result-panel">
          <div className="commit-score-header">
            <div>
              <span className="score-label">
                GitScope score
              </span>

              <strong>
                {analysis.score}
                <small>/100</small>
              </strong>
            </div>

            <span
              className={`commit-strength strength-${analysis.strength
                .toLowerCase()
                .replace(' ', '-')}`}
            >
              {analysis.strength}
            </span>
          </div>

          <div className="score-track">
            <div
              className="score-fill"
              style={{
                width: `${analysis.score}%`,
              }}
            />
          </div>

          <div className="commit-check-list">
            {analysis.checks.map((check) => (
              <article
                key={check.id}
                className={`commit-check-item check-${check.status}`}
              >
                <span className="check-icon">
                  {check.status === 'pass'
                    ? '✓'
                    : check.status === 'warning'
                      ? '!'
                      : '×'}
                </span>

                <div>
                  <h3>{check.label}</h3>

                  <p>{check.message}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommitChecker