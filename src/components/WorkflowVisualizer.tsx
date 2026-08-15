import {
    workflowEdges,
    workflowSteps,
  } from '../data/workflow'
  import './WorkflowVisualizer.css'
  
  function WorkflowVisualizer() {
    return (
      <section
        className="workflow-visualizer"
        id="workflow"
      >
        <div className="workflow-heading">
          <div>
            <p className="section-eyebrow">
              WORKFLOW VISUALIZER
            </p>
  
            <h2>
              See how branches move through a Git workflow.
            </h2>
          </div>
  
          <p className="section-description">
            Follow a feature from the stable main branch,
            through development, into a feature branch,
            and finally back into a release.
          </p>
        </div>
  
        <div className="workflow-panel">
          <div className="workflow-canvas">
            <svg
              className="workflow-svg"
              viewBox="0 0 1000 330"
              role="img"
              aria-label="Visualization of main, dev, and feature Git branches"
            >
              <text
                className="workflow-branch-label"
                x="25"
                y="76"
              >
                main
              </text>
  
              <text
                className="workflow-branch-label"
                x="25"
                y="171"
              >
                dev
              </text>
  
              <text
                className="workflow-branch-label"
                x="25"
                y="266"
              >
                feature
              </text>
  
              <g className="workflow-edges">
                {workflowEdges.map((edge) => (
                  <path
                    key={edge.id}
                    d={edge.path}
                    className="workflow-edge"
                  />
                ))}
              </g>
  
              <g className="workflow-nodes">
                {workflowSteps.map((step, index) => (
                  <g key={step.id}>
                    <circle
                      className={`workflow-node workflow-node-${step.branch}`}
                      cx={step.x}
                      cy={step.y}
                      r="15"
                    />
  
                    <text
                      className="workflow-node-number"
                      x={step.x}
                      y={step.y + 4}
                      textAnchor="middle"
                    >
                      {index + 1}
                    </text>
                  </g>
                ))}
              </g>
            </svg>
          </div>
  
          <div className="workflow-legend">
            <span>
              <i className="legend-dot legend-main" />
              main
            </span>
  
            <span>
              <i className="legend-dot legend-dev" />
              dev
            </span>
  
            <span>
              <i className="legend-dot legend-feature" />
              feature
            </span>
          </div>
        </div>
      </section>
    )
  }
  
  export default WorkflowVisualizer
  