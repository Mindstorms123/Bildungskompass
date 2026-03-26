export type AgeGroup = "0-3" | "3-6" | "6-10" | "10-15" | "15-18";

export type AIStatus = "ai_draft" | "ai_reviewed" | "expert_reviewed";

export type EvidenceStrength = 1 | 2 | 3 | 4;

export type EffectSize = "groß" | "moderat" | "klein" | "unklar";

export type Audience = "pro" | "parent";

export interface Topic {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  icon: string;
  ages: AgeGroup[];
  evidence: {
    strength: EvidenceStrength;
    effect: EffectSize;
    cost: "keine" | "gering" | "mittel" | "hoch";
  };
  aiStatus: AIStatus;
  proSummary: string;
  proTips: string[];
  parentTips: string[];
  parentWhy: string;
  sources: string[];
  vorbilder: { name: string; country: string; desc: string }[];
  evidenceGap?: string;
}

export interface AgeGroupInfo {
  id: AgeGroup;
  label: string;
  name: string;
  emoji: string;
}

export const AGE_GROUPS: AgeGroupInfo[] = [
  { id: "0-3", label: "0–3", name: "Säugling & Kleinkind", emoji: "🌱" },
  { id: "3-6", label: "3–6", name: "Vorschule", emoji: "🎨" },
  { id: "6-10", label: "6–10", name: "Grundschule", emoji: "📚" },
  { id: "10-15", label: "10–15", name: "Sekundarstufe I", emoji: "🔬" },
  { id: "15-18", label: "15–18", name: "Sekundarstufe II", emoji: "🎓" },
];

export const AI_STATUS_CONFIG = {
  ai_draft: {
    label: "KI-Entwurf",
    labelEn: "AI Draft",
    icon: "⚡",
    color: "orange" as const,
    progress: 33,
    description:
      "Dieser Inhalt wurde von KI erstellt und noch nicht fachlich geprüft. Quellen sind verlinkt – prüfen Sie selbst.",
    descriptionEn:
      "This content was created by AI and has not yet been professionally reviewed. Sources are linked – please verify yourself.",
  },
  ai_reviewed: {
    label: "Redaktionell geprüft",
    labelEn: "Editorially reviewed",
    icon: "✓",
    color: "blue" as const,
    progress: 66,
    description:
      "Dieser Inhalt wurde KI-gestützt erstellt und redaktionell geprüft. Expert:innen-Validierung ausstehend.",
    descriptionEn:
      "This content was created with AI support and editorially reviewed. Expert validation pending.",
  },
  expert_reviewed: {
    label: "Expert:innen-validiert",
    labelEn: "Expert-validated",
    icon: "✓✓",
    color: "green" as const,
    progress: 100,
    description:
      "Dieser Inhalt wurde von Fachexpert:innen geprüft und freigegeben.",
    descriptionEn:
      "This content has been reviewed and approved by subject matter experts.",
  },
};
