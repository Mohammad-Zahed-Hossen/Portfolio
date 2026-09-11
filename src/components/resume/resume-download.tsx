import fs from "fs";
import path from "path";
import { Download, AlertCircle } from "lucide-react";

export function ResumeDownload() {
  const resumeRelativePath = "assets/documents/mohammad-zahed-hossen-resume.pdf";
  const resumeDiskPath = path.join(process.cwd(), "public", resumeRelativePath);
  const fileExists = fs.existsSync(resumeDiskPath);

  if (!fileExists) {
    return (
      <div className="rounded-md border border-border bg-muted-surface p-4 flex items-center gap-3 text-xs font-mono text-muted">
        <AlertCircle className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
        <span>An updated resume PDF will be available here soon.</span>
      </div>
    );
  }

  return (
    <a
      href={`/${resumeRelativePath}`}
      download="Mohammad_Zahed_Hossen_Resume.pdf"
      aria-label="Download Mohammad Zahed Hossen's resume as a PDF document"
      className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-hover focus-ring transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 hover:shadow-sm"
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      <span>Download Resume PDF</span>
    </a>
  );
}
