import { ArchitectureNode, ArchitectureEdge } from "@/types";
import { Info } from "lucide-react";

interface ProjectArchitectureDiagramProps {
  slug: string;
  architecture: {
    title: string;
    summary: string;
    statusNote?: string;
    nodes: ArchitectureNode[];
    edges: ArchitectureEdge[];
  };
}

export function ProjectArchitectureDiagram({
  slug,
  architecture,
}: ProjectArchitectureDiagramProps) {
  return (
    <section id="architecture" aria-labelledby="architecture-heading" className="space-y-6">
      <div className="space-y-1">
        <div className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
          System Architecture &amp; Data Flow
        </div>
        <h2 id="architecture-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          {architecture.title}
        </h2>
        <p className="text-sm sm:text-base text-muted max-w-3xl leading-relaxed">
          {architecture.summary}
        </p>
      </div>

      {/* Architecture Visual Surface */}
      <div className="rounded-xl border border-border bg-surface p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Diagram Status Tag */}
        {architecture.statusNote && (
          <div className="rounded-md border border-border/80 bg-muted-surface p-3 flex items-start gap-2.5 text-xs font-mono text-muted">
            <Info className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
            <span>{architecture.statusNote}</span>
          </div>
        )}

        {/* Project-Specific Architecture Layout */}
        {slug === "evidenceops-litebridge" && (
          <EvidenceOpsDiagram nodes={architecture.nodes} />
        )}

        {slug === "unified-markdown-converter" && (
          <MarkdownConverterDiagram nodes={architecture.nodes} />
        )}

        {slug === "schoolbridge" && (
          <SchoolBridgeDiagram nodes={architecture.nodes} />
        )}

        {/* Accessible Text Alternative */}
        <div className="border-t border-border pt-5 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
            Textual Architecture Summary (Accessible Alternative)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {architecture.nodes.map((node, index) => (
              <div
                key={node.id}
                className="rounded-md border border-border/60 bg-muted-surface/50 p-3 space-y-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono font-semibold text-foreground">
                    {index + 1}. {node.label}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/5 px-1.5 py-0.5 rounded-xs border border-accent/20">
                    {node.category}
                  </span>
                </div>
                <p className="text-muted leading-relaxed">{node.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Specialized Diagram: EvidenceOps & LiteBridge                              */
/* -------------------------------------------------------------------------- */
function EvidenceOpsDiagram({ nodes }: { nodes: ArchitectureNode[] }) {
  return (
    <div className="w-full overflow-x-auto py-2">
      <div className="min-w-[680px] max-w-4xl mx-auto space-y-4">
        {/* Step-by-step pipeline container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* Phase 1: Query & Planning */}
          <div className="rounded-lg border border-border bg-muted-surface/40 p-4 space-y-3">
            <div className="text-[11px] font-mono text-muted uppercase tracking-wider font-semibold border-b border-border/60 pb-1.5">
              1. Ingestion &amp; Plan
            </div>
            <DiagramNodeBox node={nodes[0]} />
            <DiagramArrowDown label="Search plan" />
            <DiagramNodeBox node={nodes[1]} />
          </div>

          {/* Phase 2: Retrieval & Reranking */}
          <div className="rounded-lg border border-border bg-muted-surface/40 p-4 space-y-3">
            <div className="text-[11px] font-mono text-muted uppercase tracking-wider font-semibold border-b border-border/60 pb-1.5">
              2. Search &amp; Rerank
            </div>
            <DiagramNodeBox node={nodes[2]} />
            <DiagramArrowDown label="Candidates" />
            <DiagramNodeBox node={nodes[3]} />
          </div>

          {/* Phase 3: Validation & Abstention */}
          <div className="rounded-lg border border-border bg-muted-surface/40 p-4 space-y-3">
            <div className="text-[11px] font-mono text-muted uppercase tracking-wider font-semibold border-b border-border/60 pb-1.5">
              3. Verification
            </div>
            <DiagramNodeBox node={nodes[4]} />
            <DiagramArrowDown label="Evidence check" />
            <DiagramNodeBox node={nodes[5]} />
            <DiagramArrowDown label="Sufficiency test" />
            <DiagramNodeBox node={nodes[6]} />
          </div>

          {/* Phase 4: LiteBridge Context Adaptation */}
          <div className="rounded-lg border border-accent/40 bg-accent/5 p-4 space-y-3">
            <div className="text-[11px] font-mono text-accent uppercase tracking-wider font-semibold border-b border-accent/20 pb-1.5">
              4. Adapter &amp; Output
            </div>
            <DiagramNodeBox node={nodes[7]} highlighted />
            <DiagramArrowDown label="Normalized context" />
            <DiagramNodeBox node={nodes[8]} />
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono text-muted pt-2 border-t border-border/60">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-xs border border-border bg-surface" />
            <span>Process Node</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-xs border border-accent bg-accent/10" />
            <span>LiteBridge Adapter</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-xs border border-emerald-500 bg-emerald-500/10" />
            <span>Output Payload</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Specialized Diagram: Unified Markdown Converter                            */
/* -------------------------------------------------------------------------- */
function MarkdownConverterDiagram({ nodes }: { nodes: ArchitectureNode[] }) {
  return (
    <div className="w-full overflow-x-auto py-2">
      <div className="min-w-[680px] max-w-4xl mx-auto space-y-6">
        {/* Tier 1: Input & Classifier */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
          <DiagramNodeBox node={nodes[0]} />
          <DiagramNodeBox node={nodes[1]} />
        </div>

        <div className="flex justify-center text-xs font-mono text-accent">
          &darr; Document layout profiling &amp; mode configuration
        </div>

        {/* Tier 2: Routing Decision */}
        <div className="max-w-md mx-auto">
          <DiagramNodeBox node={nodes[2]} highlighted />
        </div>

        <div className="flex justify-center text-xs font-mono text-muted">
          &darr; Dynamic engine dispatch based on MIME and complexity &darr;
        </div>

        {/* Tier 3: Specialized Engine Branches */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Branch A: Non-PDF */}
          <div className="rounded-lg border border-border bg-muted-surface/40 p-3.5 space-y-2">
            <div className="text-[11px] font-mono text-muted uppercase tracking-wider font-semibold">
              Non-PDF Office Files
            </div>
            <DiagramNodeBox node={nodes[3]} />
            <div className="text-[10px] font-mono text-muted pt-1 text-center">
              Direct text extraction
            </div>
          </div>

          {/* Branch B: Digital PDF with Fallback */}
          <div className="rounded-lg border border-border bg-muted-surface/40 p-3.5 space-y-2">
            <div className="text-[11px] font-mono text-muted uppercase tracking-wider font-semibold">
              Digital Text PDFs
            </div>
            <DiagramNodeBox node={nodes[4]} />
            <DiagramArrowDown label="Confidence check" />
            <DiagramNodeBox node={nodes[6]} />
          </div>

          {/* Branch C: Scanned / Complex PDF */}
          <div className="rounded-lg border border-border bg-muted-surface/40 p-3.5 space-y-2">
            <div className="text-[11px] font-mono text-muted uppercase tracking-wider font-semibold">
              Scanned / Layout Heavy
            </div>
            <DiagramNodeBox node={nodes[5]} />
            <div className="text-[10px] font-mono text-muted pt-1 text-center">
              OCR &amp; Table structure
            </div>
          </div>
        </div>

        <div className="flex justify-center text-xs font-mono text-muted">
          &darr; Combined Markdown assembly and asset packaging
        </div>

        {/* Tier 4: Packaged Output */}
        <div className="max-w-md mx-auto">
          <DiagramNodeBox node={nodes[7]} />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Specialized Diagram: SchoolBridge (In-Progress Architecture)               */
/* -------------------------------------------------------------------------- */
function SchoolBridgeDiagram({ nodes }: { nodes: ArchitectureNode[] }) {
  return (
    <div className="w-full overflow-x-auto py-2">
      <div className="min-w-[680px] max-w-4xl mx-auto space-y-6">
        {/* Layer 1: Actors & Access */}
        <div className="rounded-lg border border-border bg-muted-surface/30 p-4 space-y-3">
          <div className="text-[11px] font-mono text-muted uppercase tracking-wider font-semibold">
            Layer 1: Identity &amp; Scope Access
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <DiagramNodeBox node={nodes[0]} />
            <DiagramNodeBox node={nodes[1]} />
          </div>
        </div>

        <div className="flex justify-center text-xs font-mono text-accent">
          &darr; Authenticated token bound to user role &darr;
        </div>

        {/* Layer 2: Dashboard & Modules */}
        <div className="rounded-lg border border-border bg-muted-surface/30 p-4 space-y-3">
          <div className="text-[11px] font-mono text-muted uppercase tracking-wider font-semibold">
            Layer 2: Role-Aware Application Modules
          </div>
          <div className="mb-2">
            <DiagramNodeBox node={nodes[2]} highlighted />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <DiagramNodeBox node={nodes[3]} />
            <DiagramNodeBox node={nodes[4]} />
            <DiagramNodeBox node={nodes[5]} />
          </div>
        </div>

        <div className="flex justify-center text-xs font-mono text-muted">
          &darr; Express validation middleware &amp; data persistence &darr;
        </div>

        {/* Layer 3: Backend API & MongoDB */}
        <div className="rounded-lg border border-border bg-muted-surface/30 p-4 space-y-3">
          <div className="text-[11px] font-mono text-muted uppercase tracking-wider font-semibold">
            Layer 3: Backend &amp; Data-Layer Design
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <DiagramNodeBox node={nodes[6]} />
            <DiagramNodeBox node={nodes[7]} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Shared Diagram Helpers                                                     */
/* -------------------------------------------------------------------------- */
function DiagramNodeBox({
  node,
  highlighted = false,
}: {
  node?: ArchitectureNode;
  highlighted?: boolean;
}) {
  if (!node) return null;

  return (
    <div
      className={`rounded-md border p-3 text-left transition-colors ${
        highlighted
          ? "border-accent bg-accent/10 shadow-xs"
          : "border-border bg-surface hover:border-accent/60"
      }`}
    >
      <div className="flex items-center justify-between gap-1 mb-1">
        <span className="text-xs font-mono font-semibold text-foreground">
          {node.label}
        </span>
      </div>
      <p className="text-[11px] text-muted leading-tight line-clamp-2">
        {node.description}
      </p>
    </div>
  );
}

function DiagramArrowDown({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-1 text-muted text-[10px] font-mono">
      <span>&darr;</span>
      {label && <span className="text-[10px] text-muted/80">{label}</span>}
    </div>
  );
}
