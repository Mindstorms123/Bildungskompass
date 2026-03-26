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

export default function TopicPageClient() {
  const params = useParams<{ locale: string; slug: string }>();
  const locale = getLocaleFromParams(params.locale);
  const messages = getMessages(locale);
  const { audience } = useAudience();

  const topic = topics.find((t) => t.slug === params.slug);

  if (!topic) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="font-serif text-2xl font-normal text-stone-900 text-balance">Thema nicht gefunden</h1>
      </div>
    );
  }

  const title = locale === "en" ? topic.titleEn : topic.title;

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-8 md:px-6 md:py-14">
      <nav aria-label={locale === "de" ? "Brotkrumen" : "Breadcrumb"}>
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-1 text-xs text-stone-400 uppercase tracking-wide hover:text-stone-700 mb-10"
        >
          <span aria-hidden="true">←</span>
          {messages.topic.backToOverview}
        </Link>
      </nav>

      <AIStatusBanner
        status={topic.aiStatus}
        locale={locale}
        howWeReviewLabel={messages.aiStatus.howWeReview}
        progressLabel={messages.aiStatus.validationProgress}
      />

      <header className="mt-10 mb-0">
        <div className="flex items-start gap-4 mb-3">
          <span className="text-5xl leading-none" aria-hidden="true">{topic.icon}</span>
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-normal text-stone-900 tracking-tight text-balance leading-tight">
              {title}
            </h1>

            <div className="flex flex-wrap gap-2 mt-4">
              {topic.ages.map((ageId) => {
                const group = AGE_GROUPS.find((g) => g.id === ageId);
                if (!group) return null;
                return (
                  <span
                    key={ageId}
                    className="inline-flex items-center gap-1 rounded-sm border border-stone-200 px-2 py-0.5 text-xs text-stone-500"
                  >
                    <span aria-hidden="true">{group.emoji}</span>
                    {group.label} {locale === "en" ? group.nameEn : group.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      <hr className="border-t border-stone-200 my-10" />

      <section>
        {audience === "pro" ? (
          <ProView
            topic={topic}
            locale={locale}
            labels={messages.topic}
            effectLabel={messages.evidence.effectLabels[topic.evidence.effect]}
            costLabel={messages.evidence.costLabels[topic.evidence.cost]}
          />
        ) : (
          <ParentView topic={topic} locale={locale} labels={messages.topic} />
        )}
      </section>
    </article>
  );
}
