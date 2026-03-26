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
    <section className="border-l-4 border-primary bg-white rounded-r-lg p-8 md:p-12">
      <div className="mb-10">
        <div className="dot-accent" />
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-light mb-3">
          {labels.subtitle}
        </p>
        <h2 className="text-3xl font-semibold text-stone-900 text-balance mb-4">
          {labels.title}
        </h2>
        <p className="text-stone-500 leading-relaxed max-w-2xl text-pretty">
          {labels.description}
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-3">
        {steps.map(({ key, icon: Icon, number }) => (
          <div key={key} className="relative flex flex-col gap-4">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-4xl font-light text-primary tabular-nums leading-none">
                {number}
              </span>
              <span className="flex size-8 items-center justify-center text-primary-light">
                <Icon className="size-4" aria-hidden="true" />
              </span>
            </div>
            <h3 className="font-medium text-stone-900 text-balance">
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
