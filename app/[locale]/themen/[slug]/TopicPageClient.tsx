"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { topics } from "@/content/topics";
import { getMessages, getLocaleFromParams } from "@/lib/i18n";
import { useAudience } from "@/lib/audience-context";
import { AGE_GROUPS } from "@/lib/types";
import { AIStatusBanner } from "@/components/AIStatusBanner";
import { ProView } from "@/components/ProView";
import { ParentView } from "@/components/ParentView";
import { ArrowLeft } from "lucide-react";

export default function TopicPageClient() {
  const params = useParams<{ locale: string; slug: string }>();
  const locale = getLocaleFromParams(params.locale);
  const messages = getMessages(locale);
  const { audience } = useAudience();

  const topic = topics.find((t) => t.slug === params.slug);

  if (!topic) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-stone-900 text-balance">Thema nicht gefunden</h1>
      </div>
    );
  }

  const title = locale === "en" ? topic.titleEn : topic.title;

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-8 md:px-6 md:py-14">
      <nav aria-label={locale === "de" ? "Brotkrumen" : "Breadcrumb"}>
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900 transition-colors mb-8"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {messages.topic.backToOverview}
        </Link>
      </nav>

      <AIStatusBanner
        status={topic.aiStatus}
        locale={locale}
        howWeReviewLabel={messages.aiStatus.howWeReview}
        progressLabel={messages.aiStatus.validationProgress}
      />

      <header className="mt-8 mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl" aria-hidden="true">{topic.icon}</span>
          <h1 className="text-3xl font-bold text-stone-900 tracking-tight text-balance">
            {title}
          </h1>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {topic.ages.map((ageId) => {
            const group = AGE_GROUPS.find((g) => g.id === ageId);
            if (!group) return null;
            return (
              <span
                key={ageId}
                className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600"
              >
                <span aria-hidden="true">{group.emoji}</span>
                {group.label} {group.name}
              </span>
            );
          })}
        </div>
      </header>

      <section className="border-t border-stone-200 pt-10">
        {audience === "pro" ? (
          <ProView
            topic={topic}
            labels={messages.topic}
            effectLabel={messages.evidence.effectLabels[topic.evidence.effect]}
            costLabel={messages.evidence.costLabels[topic.evidence.cost]}
          />
        ) : (
          <ParentView topic={topic} labels={messages.topic} />
        )}
      </section>
    </article>
  );
}
