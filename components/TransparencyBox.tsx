import { ShieldCheck, FileSearch, UserCheck } from "lucide-react";

interface TransparencyBoxProps {
  labels: {
    title: string;
    subtitle: string;
    description: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
}

const steps = [
  { key: "step1", icon: FileSearch, number: "01" },
  { key: "step2", icon: ShieldCheck, number: "02" },
  { key: "step3", icon: UserCheck, number: "03" },
] as const;

export function TransparencyBox({ labels }: TransparencyBoxProps) {
  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6 md:p-10">
      <div className="mb-8">
        <p className="text-xs font-medium uppercase tracking-wider text-primary-light mb-2">
          {labels.subtitle}
        </p>
        <h2 className="text-2xl font-semibold text-stone-900 text-balance mb-3">
          {labels.title}
        </h2>
        <p className="text-stone-600 leading-relaxed max-w-2xl text-pretty">
          {labels.description}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map(({ key, icon: Icon, number }) => (
          <div key={key} className="relative flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-bg text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-xs font-medium text-stone-400 tabular-nums">{number}</span>
            </div>
            <h3 className="font-medium text-stone-900">
              {labels[`${key}Title` as keyof typeof labels]}
            </h3>
            <p className="text-sm text-stone-500 leading-relaxed text-pretty">
              {labels[`${key}Desc` as keyof typeof labels]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
