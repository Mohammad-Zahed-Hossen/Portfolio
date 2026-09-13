import { ResearchArea } from "@/types";

export const researchDirectionStatement =
  "Trustworthy generative MLLMs: evidence-grounded calibration and selective abstention under missing, conflicting, or degraded visual evidence.";

export const researchApproachPoints = [
  {
    title: "Open-Weight Generative MLLMs",
    description:
      "Exploring inspectable, reproducible open-weight multimodal architectures where model behavior can be studied directly.",
  },
  {
    title: "Public Benchmark Datasets",
    description:
      "Using standardized public datasets to establish reviewable baselines for visual question answering and document reasoning.",
  },
  {
    title: "Deterministic Evaluation",
    description:
      "Planning structured fixtures and deterministic metric harnesses instead of opaque or expensive proprietary judge APIs.",
  },
  {
    title: "Inference-First & Lightweight Adaptation",
    description:
      "Considering post-hoc calibration, test-time checks, and lightweight adaptation rather than large compute-heavy retraining.",
  },
];

export const researchCurrentStatus = {
  phase: "Topic Discovery & Literature Review",
  description:
    "Current work is literature review, problem refinement, and benchmark planning for corrupted or insufficient visual inputs. The final undergraduate thesis proposal is still being formalized; no peer-reviewed publications or completed results are claimed.",
};

export const researchAreas: ResearchArea[] = [
  {
    id: "evidence-grounded-reasoning",
    title: "Evidence-Grounded Visual Reasoning & Faithfulness",
    status: "Active Literature Review",
    summary:
      "Reviewing how multimodal models can better tie generated claims to visible evidence rather than language priors.",
    focusTopics: [
      "Cross-modal attention alignment and attribution analysis",
      "Fine-grained spatial grounding verification",
      "Language prior dominance and ungrounded object hallucination",
      "Contrastive decoding strategies for visual token fidelity",
    ],
    notes:
      "A possible evaluation direction is measuring the relationship between visual-token attention and factual claims in generated descriptions.",
    methodology: [
      "Benchmarking against standard visual hallucination suites (POPE, MME)",
      "Probing token-level cross-attention during autoregressive generation",
    ],
  },
  {
    id: "calibration-and-abstention",
    title: "Calibration, Uncertainty & Selective Abstention",
    status: "Evaluation Protocol Planning",
    summary:
      "Planning how to evaluate confidence calibration and selective abstention when visual evidence is insufficient or ambiguous.",
    focusTopics: [
      "Predictive uncertainty quantification under ambiguous visual prompts",
      "Selective abstention thresholding without external verifiers",
      "Calibrated answer confidence in high-stakes reasoning scenarios",
      "Cost-sensitive evaluation metrics penalizing confident errors over abstention",
    ],
    notes:
      "The working premise is that a calibrated abstention is preferable to a confident answer without visual support.",
    methodology: [
      "Evaluating risk-coverage trade-offs on ambiguous visual QA queries",
      "Implementing entropy and mutual information-based uncertainty metrics",
    ],
  },
  {
    id: "visual-degradation-robustness",
    title: "Generalization & Robustness Under Degraded Evidence",
    status: "Benchmark Design",
    summary:
      "Planning benchmark conditions for how generative MLLMs behave with low resolution, compression artifacts, partial occlusion, or adversarial corruption.",
    focusTopics: [
      "Performance cliffs under synthetic image corruptions (blur, noise, crop)",
      "Vulnerability to deceptive visual prompts and out-of-distribution artifacts",
      "Robustness disparities between language encoders and vision backbones",
      "Zero-shot recovery methods via test-time visual augmentation",
    ],
    notes:
      "The goal is to describe reliability boundaries under difficult capture conditions and sensor limitations.",
    methodology: [
      "Simulating common image corruption distributions across benchmark suites",
      "Analyzing degradation curves of multimodal representations under stress",
    ],
  },
];
