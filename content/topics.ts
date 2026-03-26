import { Topic } from "@/lib/types";

export const topics: Topic[] = [
  {
    id: "1",
    slug: "lesenlernen",
    slugEn: "reading",
    title: "Lesenlernen & Leseförderung",
    titleEn: "Reading & Literacy",
    icon: "📖",
    ages: ["0-3", "3-6", "6-10", "10-15"],
    evidence: { strength: 4, effect: "groß", cost: "gering" },
    aiStatus: "expert_reviewed",
    proSummary:
      "Die Evidenzlage zur Leseförderung ist außergewöhnlich robust. Systematische Phonics-Instruktion zeigt konsistent starke Effekte über mehrere hochwertige Meta-Analysen hinweg. Ehri et al. (2001) fanden in ihrer wegweisenden Meta-Analyse einen Effekt von d = 0,41 für systematischen Phonics-Unterricht gegenüber unsystematischen Ansätzen. Galuschka et al. (2014) bestätigten dies mit d = 0,32 für phonische Interventionen bei Lese-Rechtschreib-Schwierigkeiten. Die jüngste Meta-Analyse von Hall et al. (2023) zeigt mit g = 0,33 anhaltend positive Effekte. Besonders bedeutsam: Frühintervention multipliziert den Effekt – je früher systematische Leseförderung einsetzt, desto größer der langfristige Nutzen. Leseflüssigkeitstraining und explizite Lesestrategien ab Klasse 3 ergänzen den Phonics-Ansatz für nachhaltige Lesekompetenz.",
    proSummaryEn:
      "The evidence base for reading instruction is exceptionally robust. Systematic phonics instruction shows consistently strong effects across multiple high-quality meta-analyses. Ehri et al. (2001) found an effect size of d = 0.41 for systematic phonics instruction compared to unsystematic approaches in their landmark meta-analysis. Galuschka et al. (2014) confirmed this with d = 0.32 for phonics-based interventions targeting reading difficulties. The most recent meta-analysis by Hall et al. (2023) reports g = 0.33, demonstrating sustained positive effects. Critically, early intervention amplifies outcomes — the earlier systematic reading support begins, the greater the long-term benefit. Reading fluency training and explicit comprehension strategies from grade 3 onward complement the phonics approach for lasting literacy development.",
    proTips: [
      "Systematische Phonics-Instruktion als Kernmethode im Anfangsunterricht einsetzen – die Evidenz ist hier am stärksten (d = 0,41).",
      "Leseflüssigkeitstraining ab Ende Klasse 1 integrieren: Wiederholtes Lautlesen mit Feedback steigert Geschwindigkeit und Verständnis gleichzeitig.",
      "Ab Klasse 3 explizite Lesestrategien unterrichten: Vorhersagen treffen, Fragen stellen, Zusammenfassen und Visualisieren.",
      "Frühintervention bei Risikokindern spätestens in Klasse 1 beginnen – die Schereneffekte wachsen exponentiell.",
      "Viellese-Verfahren mit strukturierter Instruktion kombinieren – freies Lesen allein reicht nicht für den Kompetenzaufbau.",
    ],
    proTipsEn: [
      "Use systematic phonics instruction as the core method in early reading education — the evidence is strongest here (d = 0.41).",
      "Integrate reading fluency training from the end of grade 1: repeated oral reading with feedback improves both speed and comprehension simultaneously.",
      "From grade 3, teach explicit comprehension strategies: predicting, questioning, summarizing, and visualizing.",
      "Begin early intervention for at-risk readers no later than grade 1 — achievement gaps grow exponentially over time.",
      "Combine extensive reading with structured instruction — free voluntary reading alone is insufficient for building robust literacy skills.",
    ],
    parentTips: [
      "Lesen Sie Ihrem Kind täglich 15–20 Minuten vor – schon ab dem Säuglingsalter. Das ist die wirksamste Einzelmaßnahme.",
      "Spielen Sie mit Lauten und Reimen: 'Was reimt sich auf Haus?' oder 'Mit welchem Laut fängt Mama an?' fördert spielerisch die Lesefähigkeit.",
      "Besuchen Sie regelmäßig die Bibliothek und lassen Sie Ihr Kind selbst Bücher aussuchen – eigene Wahl steigert die Motivation enorm.",
      "Lassen Sie Ihr Kind laut vorlesen und hören Sie geduldig zu. Korrigieren Sie sanft, aber loben Sie den Mut.",
      "Bücher, Zeitschriften und Schrift überall sichtbar machen – eine lesefreundliche Umgebung zuhause ist der beste Nährboden.",
    ],
    parentTipsEn: [
      "Read aloud to your child for 15 to 20 minutes every day — starting from infancy. This is the single most effective thing you can do.",
      "Play with sounds and rhymes: try games like finding words that rhyme or identifying the first sound in a word. These playful activities build early reading skills.",
      "Visit the library regularly and let your child choose their own books — having a say in what they read dramatically boosts motivation.",
      "Have your child read aloud to you and listen patiently. Correct gently, but always praise the effort.",
      "Surround your home with books, magazines, and print — a literacy-rich environment is the best foundation for a lifelong love of reading.",
    ],
    parentWhy:
      "Lesen ist die wichtigste Grundfertigkeit für den gesamten Bildungsweg Ihres Kindes. Kinder, die gut lesen können, lernen in allen Fächern leichter – ob Mathe, Sachkunde oder Naturwissenschaften. Stellen Sie es sich wie einen Schlüssel vor: Wer gut lesen kann, dem öffnen sich alle Türen. Forschung zeigt klar: Kinder, denen regelmäßig vorgelesen wird, haben einen Vorsprung von bis zu einem Schuljahr. Und das Beste daran – es kostet nichts außer Zeit und macht beiden Seiten Freude.",
    parentWhyEn:
      "Reading is the single most important foundational skill for your child's entire educational journey. Children who read well learn more easily across every subject — from math and science to social studies. Think of it as a master key: strong reading skills open every door. Research is clear: children who are read to regularly have up to a full year's advantage over their peers. And the best part — it costs nothing but your time, and it brings joy to both of you.",
    sources: [
      "Ehri, L. C., Nunes, S. R., Stahl, S. A., & Willows, D. M. (2001). Systematic phonics instruction helps students learn to read: Evidence from the National Reading Panel's meta-analysis. Review of Educational Research, 71(3), 393–447.",
      "Galuschka, K., Ise, E., Krick, K., & Schulte-Körne, G. (2014). Effectiveness of treatment approaches for children and adolescents with reading disabilities: A meta-analysis of randomized controlled trials. PLoS ONE, 9(2), e89900.",
      "Hall, C., Dahl-Leonard, K., Cho, E., Solari, E. J., Capin, P., Conner, C. L., ... & Petscher, Y. (2023). Forty years of reading intervention research for elementary students with or at risk for dyslexia: A systematic review and meta-analysis. Reading Research Quarterly, 58(2), 285–312.",
    ],
    vorbilder: [
      {
        name: "Bookstart",
        country: "UK",
        desc: "Nationales Programm, das jeder Familie kostenlose Bücherpakete bei den Vorsorgeuntersuchungen schenkt. Erreicht 90% aller Familien und hat nachweislich die Vorlese-Häufigkeit gesteigert.",
        descEn: "A national program that provides every family with free book packs during routine health check-ups. It reaches 90% of all families and has demonstrably increased the frequency of reading aloud at home.",
      },
      {
        name: "Lesestart 1-2-3",
        country: "Deutschland",
        desc: "Von der Stiftung Lesen durchgeführtes Programm, das Familien in drei Phasen (1, 2 und 3 Jahre) kostenlose Lesestart-Sets mit Bilderbüchern und Tipps übergibt.",
        descEn: "A program run by the Stiftung Lesen (Reading Foundation) that provides families with free reading starter kits — including picture books and practical tips — at three stages (ages 1, 2, and 3).",
      },
      {
        name: "Finnisches Lesefördermodell",
        country: "Finnland",
        desc: "Sofortige Intervention bei ersten Leseschwierigkeiten durch spezialisierte Förderlehrkräfte. Kein Kind wird zurückgelassen – das Ergebnis: eine der niedrigsten Raten an Leseschwäche weltweit.",
        descEn: "Immediate intervention at the first signs of reading difficulty, delivered by specialized support teachers. No child is left behind — the result is one of the lowest rates of reading impairment in the world.",
      },
    ],
  },
  {
    id: "2",
    slug: "mathematik",
    slugEn: "mathematics",
    title: "Mathematik-Grundkompetenzen",
    titleEn: "Mathematics Fundamentals",
    icon: "🔢",
    ages: ["3-6", "6-10", "10-15"],
    evidence: { strength: 3, effect: "groß", cost: "gering" },
    aiStatus: "ai_reviewed",
    proSummary:
      "Die Forschung zu Mathematik-Grundkompetenzen zeigt, dass metakognitive Strategien den mit Abstand stärksten Effekt erzielen: Eine aktuelle Meta-Analyse (2025) findet d = 1,11 für metakognitives Training in Mathematik. Das CPA-Prinzip (Concrete-Pictorial-Abstract) wird durch Carbonneau et al. (2013) gestützt, die moderate bis starke Effekte für den Einsatz von Manipulatives zeigen. Gersten et al. (2009) identifizierten in ihrer Meta-Analyse Effektstärken von d = 0,21 bis d = 1,56 für verschiedene Interventionen bei mathematischen Lernschwierigkeiten, wobei explizite Instruktion und formatives Assessment die stärksten Effekte zeigten. Besonders wichtig: Fehlvorstellungen systematisch aufzugreifen und als Lernchance zu nutzen – dies wird von der kognitiven Lernforschung eindeutig gestützt.",
    proSummaryEn:
      "Research on foundational mathematics skills shows that metacognitive strategies produce by far the strongest effects: a recent meta-analysis (2025) reports d = 1.11 for metacognitive training in mathematics. The CPA approach (Concrete-Pictorial-Abstract) is supported by Carbonneau et al. (2013), who found moderate to strong effects for the use of manipulatives. Gersten et al. (2009) identified effect sizes ranging from d = 0.21 to d = 1.56 for various interventions targeting mathematical learning difficulties, with explicit instruction and formative assessment yielding the strongest results. A key finding: systematically addressing misconceptions and treating them as learning opportunities is clearly supported by cognitive learning research.",
    proTips: [
      "Das CPA-Prinzip (Concrete-Pictorial-Abstract) konsequent anwenden: Vom Anfassen über das Zeichnen zum Abstrahieren – diese Reihenfolge ist evidenzbasiert wirksam.",
      "Formatives Assessment systematisch einsetzen: Regelmäßige kurze Lernstandserhebungen ermöglichen gezielte Förderung (Effektstärke bis d = 1,56).",
      "Fehlvorstellungen aktiv nutzen: Fehler nicht nur korrigieren, sondern als Denkimpulse aufgreifen – 'Warum könnte jemand so rechnen?'",
      "Produktives Üben statt stumpfem Wiederholen: Aufgaben variieren, Muster erkennen lassen und Transfer anregen.",
      "Metakognitive Strategien explizit vermitteln: 'Welchen Rechenweg wählst du und warum?' fördert mathematisches Denken nachhaltig (d = 1,11).",
    ],
    proTipsEn: [
      "Apply the CPA principle (Concrete-Pictorial-Abstract) consistently: moving from hands-on manipulation to visual representation to abstraction — this sequence is evidence-based and effective.",
      "Use formative assessment systematically: regular, brief progress checks enable targeted support (effect sizes up to d = 1.56).",
      "Leverage misconceptions actively: rather than simply correcting errors, use them as thinking prompts — ask students why someone might solve it that way.",
      "Prioritize productive practice over rote repetition: vary tasks, encourage pattern recognition, and promote transfer to new contexts.",
      "Teach metacognitive strategies explicitly: asking students to explain which approach they chose and why fosters lasting mathematical thinking (d = 1.11).",
    ],
    parentTips: [
      "Zählen Sie im Alltag gemeinsam: Treppenstufen, Äpfel im Korb, Autos auf dem Parkplatz. Mathematik beginnt mit dem Entdecken von Mengen.",
      "Spielen Sie Würfel- und Kartenspiele – Uno, Kniffel oder Memory trainieren mathematisches Denken, ohne dass es sich nach Lernen anfühlt.",
      "Vermeiden Sie den Satz 'Mathe konnte ich auch nie' – Forschung zeigt, dass diese Haltung sich direkt auf die Kinder überträgt.",
      "Beziehen Sie Ihr Kind beim Kochen und Einkaufen ein: Abwiegen, Preise vergleichen und Wechselgeld berechnen sind gelebte Mathematik.",
      "Loben Sie den Denkweg, nicht nur das Ergebnis: 'Wie bist du darauf gekommen?' ist wertvoller als 'Richtig!'.",
    ],
    parentTipsEn: [
      "Count together in everyday life: stairs, apples in the basket, cars in the parking lot. Mathematics begins with discovering quantities.",
      "Play dice and card games — Uno, Yahtzee, or Memory train mathematical thinking without feeling like schoolwork.",
      "Avoid saying things like \"I was never good at math either\" — research shows this attitude transfers directly to children.",
      "Involve your child in cooking and shopping: weighing ingredients, comparing prices, and calculating change are math in action.",
      "Praise the thinking process, not just the answer: asking \"How did you figure that out?\" is more valuable than simply saying \"Correct!\"",
    ],
    parentWhy:
      "Mathematische Grundkompetenzen sind wie ein Muskel – sie lassen sich trainieren, und zwar von jedem Kind. Die Vorstellung, dass manche Menschen einfach kein 'Mathe-Gen' haben, ist wissenschaftlich widerlegt. Was wirklich zählt, ist die frühe Erfahrung mit Zahlen und Mengen im Alltag. Kinder, die vor der Schule regelmäßig zählen, sortieren und vergleichen, haben einen klaren Vorsprung. Und das Spannende: Die wirksamsten Mathe-Übungen passieren nicht am Schreibtisch, sondern beim Kochen, Spielen und Einkaufen.",
    parentWhyEn:
      "Mathematical skills are like a muscle — they can be trained, by every child. The notion that some people simply lack a \"math gene\" has been scientifically debunked. What truly matters is early, everyday experience with numbers and quantities. Children who regularly count, sort, and compare before starting school have a clear advantage. And here is the exciting part: the most effective math practice does not happen at a desk — it happens while cooking, playing games, and shopping.",
    sources: [
      "Carbonneau, K. J., Marley, S. C., & Selig, J. P. (2013). A meta-analysis of the efficacy of teaching mathematics with concrete manipulatives. Journal of Educational Psychology, 105(2), 380–400.",
      "Gersten, R., Chard, D. J., Jayanthi, M., Baker, S. K., Morphy, P., & Flojo, J. (2009). Mathematics instruction for students with learning disabilities: A meta-analysis of instructional components. Review of Educational Research, 79(3), 1202–1242.",
      "Dignath, C., & Büttner, G. (2008/2025). Components of fostering self-regulated learning among students. A meta-analysis on intervention studies at primary and secondary school level. Metacognition and Learning, 3(3), 231–264.",
    ],
    vorbilder: [
      {
        name: "Singapore Math",
        country: "Singapur",
        desc: "Weltweit anerkannter Ansatz, der das CPA-Prinzip (Concrete-Pictorial-Abstract) konsequent umsetzt. Singapur führt regelmäßig internationale Mathematik-Vergleichsstudien an.",
        descEn: "A globally recognized approach that rigorously implements the CPA principle (Concrete-Pictorial-Abstract). Singapore consistently ranks at the top of international mathematics assessments.",
      },
      {
        name: "PIKAS (DZLM)",
        country: "Deutschland",
        desc: "Vom Deutschen Zentrum für Lehrkräftebildung Mathematik entwickeltes Konzept für prozess- und inhaltsbezogene Kompetenzentwicklung in der Grundschule mit umfangreichen Praxismaterialien.",
        descEn: "A framework developed by the German Center for Mathematics Teacher Education (DZLM) for process- and content-oriented competency development in primary school, accompanied by extensive practical materials.",
      },
    ],
  },
  {
    id: "3",
    slug: "bildschirmzeit",
    slugEn: "screen-time",
    title: "Bildschirmzeit & digitale Medien",
    titleEn: "Screen Time & Digital Media",
    icon: "📱",
    ages: ["0-3", "3-6", "6-10", "10-15", "15-18"],
    evidence: { strength: 2, effect: "klein", cost: "keine" },
    aiStatus: "ai_draft",
    proSummary:
      "⚡ Die Evidenzlage zu Bildschirmzeit ist widersprüchlich und wird kontrovers diskutiert. Madigan et al. (2020) fanden in ihrer Meta-Analyse negative Zusammenhänge zwischen Bildschirmzeit und kindlicher Entwicklung, jedoch mit kleinen Effektstärken. Die vielbeachtete Studie von Orben & Przybylski (2019) relativierte die Befunde drastisch: Der Zusammenhang zwischen Bildschirmzeit und Wohlbefinden lag bei r ≈ 0,04 – vergleichbar mit dem Effekt von Kartoffeln essen auf die Lebenszufriedenheit. Die WHO (2019) empfiehlt dennoch klare Grenzen für Kleinkinder. Entscheidend ist die Unterscheidung zwischen passivem Konsum (Berieseln) und aktiver Nutzung (kreative Apps, Videochat mit Großeltern). Co-Viewing – also gemeinsames Anschauen und Besprechen – kann den negativen Effekt passiven Konsums deutlich abmildern.",
    proSummaryEn:
      "The evidence on screen time is contradictory and actively debated. Madigan et al. (2020) found negative associations between screen time and child development in their meta-analysis, but with small effect sizes. The widely cited study by Orben and Przybylski (2019) dramatically qualified these findings: the association between screen time and well-being was approximately r = 0.04 — comparable to the effect of eating potatoes on life satisfaction. The WHO (2019) nevertheless recommends clear limits for young children. The crucial distinction is between passive consumption (background viewing) and active use (creative apps, video calls with grandparents). Co-viewing — watching together and discussing content — can substantially mitigate the negative effects of passive consumption.",
    proTips: [
      "Zwischen passiver und aktiver Bildschirmnutzung differenzieren: Stumpfes Berieseln vs. interaktive, kreative oder kommunikative Nutzung sind grundverschieden.",
      "Co-Viewing als Strategie nutzen: Gemeinsames Anschauen mit Gespräch verwandelt passive in aktive Medienzeit.",
      "Medienvereinbarungen gemeinsam mit Schüler:innen erarbeiten statt einseitig Regeln aufzustellen – die Selbstwirksamkeit stärkt die Umsetzung.",
      "Laterales Lesen und Medienkompetenz als Querschnittsthema etablieren: Kinder brauchen kritisches Denken über Medien, nicht nur Zeitbegrenzungen.",
      "⚡ Die widersprüchliche Evidenzlage offen kommunizieren – pauschale Verbote sind wissenschaftlich nicht gerechtfertigt.",
    ],
    proTipsEn: [
      "Differentiate between passive and active screen use: mindless background viewing versus interactive, creative, or communicative engagement are fundamentally different.",
      "Use co-viewing as a deliberate strategy: watching together and talking about content transforms passive screen time into active learning.",
      "Develop media agreements collaboratively with students rather than imposing one-sided rules — a sense of ownership strengthens follow-through.",
      "Establish lateral reading and media literacy as a cross-curricular theme: children need critical thinking about media, not just time limits.",
      "Communicate the contradictory evidence base openly — blanket bans are not scientifically justified.",
    ],
    parentTips: [
      "Unter 2 Jahren: Kein Bildschirm außer Video-Telefonie mit Verwandten – das empfiehlt die Weltgesundheitsorganisation.",
      "2 bis 5 Jahre: Maximal 1 Stunde am Tag, am besten gemeinsam schauen und darüber sprechen.",
      "Qualität ist wichtiger als Quantität: Eine gute Lern-App ist besser als eine Stunde passives Fernsehen.",
      "Für Teenager: Führen Sie Gespräche statt Verbote. Fragen Sie, was sie online machen, statt nur die Zeit zu begrenzen.",
      "Bildschirmfreie Zeiten festlegen, die für alle gelten – auch für Eltern. Zum Beispiel: kein Handy beim Essen.",
    ],
    parentTipsEn: [
      "Under age 2: no screens except video calls with relatives — this is the World Health Organization recommendation.",
      "Ages 2 to 5: a maximum of one hour per day, ideally watched together so you can talk about what you see.",
      "Quality matters more than quantity: a well-designed educational app is better than an hour of passive television.",
      "For teenagers: have conversations instead of imposing bans. Ask what they do online rather than only limiting their time.",
      "Establish screen-free times that apply to everyone — parents included. For example: no phones at the dinner table.",
    ],
    parentWhy:
      "Das Thema Bildschirmzeit verunsichert viele Eltern – und das ist verständlich, denn selbst die Forschung ist sich nicht einig. Die gute Nachricht: Es kommt weniger darauf an, wie viele Minuten Ihr Kind vor dem Bildschirm verbringt, sondern was es dort tut und ob es das alleine macht. Ein gemeinsam angeschautes und besprochenes Video kann wertvoll sein. Stundenlanges Berieseln ohne Kontext ist es nicht. Denken Sie an Bildschirmzeit wie an Essen: Nicht die Menge allein entscheidet, sondern die Qualität und die gemeinsame Mahlzeit.",
    parentWhyEn:
      "Screen time is a source of anxiety for many parents — and understandably so, because even researchers disagree. The good news is that what matters most is not how many minutes your child spends in front of a screen, but what they are doing and whether they are doing it alone. A video watched and discussed together can be genuinely valuable. Hours of mindless background viewing is not. Think of screen time like food: it is not just the amount that matters, but the quality — and whether you share the meal together.",
    sources: [
      "Madigan, S., McArthur, B. A., Anhorn, C., Eirich, R., & Christakis, D. A. (2020). Associations between screen use and child language skills: A systematic review and meta-analysis. JAMA Pediatrics, 174(7), 665–675.",
      "Orben, A., & Przybylski, A. K. (2019). The association between adolescent well-being and digital technology use. Nature Human Behaviour, 3(2), 173–182.",
      "World Health Organization. (2019). Guidelines on physical activity, sedentary behaviour and sleep for children under 5 years of age. WHO.",
    ],
    vorbilder: [
      {
        name: "SCHAU HIN!",
        country: "Deutschland",
        desc: "Medienratgeber für Familien, initiiert vom Bundesfamilienministerium. Bietet altersgerechte Empfehlungen und praktische Tipps für den Medienalltag.",
        descEn: "A family media guide initiated by the German Federal Ministry for Family Affairs. It provides age-appropriate recommendations and practical tips for everyday media use.",
      },
      {
        name: "Digital Wellness Lab",
        country: "USA",
        desc: "Forschungseinrichtung am Boston Children's Hospital, die evidenzbasierte Ressourcen zu digitaler Mediennutzung für Familien und Fachkräfte bereitstellt.",
        descEn: "A research center at Boston Children's Hospital that provides evidence-based resources on digital media use for families and professionals.",
      },
    ],
    evidenceGap:
      "Die Langzeiteffekte von Bildschirmzeit auf die kindliche Entwicklung sind noch unzureichend erforscht. Bisherige Studien sind überwiegend korrelativ, kaum kausal. Zudem differenzieren die meisten Studien nicht ausreichend zwischen verschiedenen Nutzungsarten.",
    evidenceGapEn:
      "The long-term effects of screen time on child development remain insufficiently studied. Existing research is predominantly correlational rather than causal. Furthermore, most studies fail to adequately differentiate between different types of screen use.",
  },
  {
    id: "4",
    slug: "sozial-emotionales-lernen",
    slugEn: "social-emotional-learning",
    title: "Sozial-emotionales Lernen",
    titleEn: "Social-Emotional Learning",
    icon: "💛",
    ages: ["3-6", "6-10", "10-15", "15-18"],
    evidence: { strength: 4, effect: "moderat", cost: "mittel" },
    aiStatus: "expert_reviewed",
    proSummary:
      "Sozial-emotionales Lernen (SEL) gehört zu den am besten erforschten Interventionsfeldern der Bildungswissenschaft. Die wegweisende Meta-Analyse von Durlak et al. (2011) mit über 270.000 Schüler:innen zeigte Effekte von d = 0,57 für sozial-emotionale Kompetenzen und d = 0,27 für Schulleistungen – ein bemerkenswerter Befund, da SEL-Programme primär auf soziale Fähigkeiten zielen, aber auch akademische Leistungen verbessern. Cipriano et al. (2023) bestätigten diese Befunde mit aktuelleren Daten. Taylor et al. (2017) wiesen nach, dass SEL-Effekte auch Jahre nach der Intervention messbar bleiben. Entscheidend ist ein Whole-School-Ansatz: Isolierte Trainingsprogramme wirken deutlich schwächer als schulweite Integration in Kultur und Unterricht.",
    proSummaryEn:
      "Social-emotional learning (SEL) is one of the most thoroughly researched intervention areas in education science. The landmark meta-analysis by Durlak et al. (2011), encompassing over 270,000 students, found effect sizes of d = 0.57 for social-emotional competencies and d = 0.27 for academic achievement — a remarkable finding, given that SEL programs primarily target social skills yet also improve academic performance. Cipriano et al. (2023) confirmed these results with more recent data. Taylor et al. (2017) demonstrated that SEL effects remain measurable years after the intervention ends. A whole-school approach is critical: isolated training programs are substantially less effective than school-wide integration into culture and instruction.",
    proTips: [
      "Whole-School-Ansatz verfolgen: SEL als Schulkultur etablieren, nicht als einzelnes Unterrichtsprogramm – die Wirksamkeit steigt signifikant.",
      "Die fünf CASEL-Kernkompetenzen systematisch fördern: Selbstwahrnehmung, Selbststeuerung, soziales Bewusstsein, Beziehungsfähigkeit und verantwortungsvolle Entscheidungen.",
      "SEL der Lehrkräfte mitdenken: Lehrkräfte brauchen selbst sozial-emotionale Kompetenzen, um sie authentisch vermitteln zu können.",
      "Evidenzbasierte Programme nutzen, z.B. KiVa (Anti-Mobbing) oder PATHS (Promoting Alternative Thinking Strategies).",
      "SEL in den Fachunterricht integrieren: Kooperatives Lernen, Reflexionsphasen und Feedback-Kultur sind SEL im Unterrichtsalltag.",
    ],
    proTipsEn: [
      "Pursue a whole-school approach: establish SEL as part of school culture rather than a standalone curriculum — effectiveness increases significantly.",
      "Systematically develop the five CASEL core competencies: self-awareness, self-management, social awareness, relationship skills, and responsible decision-making.",
      "Address teacher SEL as well: educators need social-emotional competencies themselves in order to model and teach them authentically.",
      "Use evidence-based programs such as KiVa (anti-bullying) or PATHS (Promoting Alternative Thinking Strategies).",
      "Integrate SEL into subject instruction: cooperative learning, reflection phases, and a feedback culture bring SEL into everyday classroom practice.",
    ],
    parentTips: [
      "Benennen Sie Gefühle – Ihre eigenen und die Ihres Kindes: 'Ich sehe, dass dich das traurig macht' hilft Kindern, Emotionen einzuordnen.",
      "Seien Sie Vorbild: Zeigen Sie, wie Sie selbst mit Ärger oder Enttäuschung umgehen. Kinder lernen am meisten durch Beobachtung.",
      "Begleiten Sie Konflikte, statt sie zu lösen: 'Was könntest du tun?' ist wertvoller als sofort einzugreifen.",
      "Stellen Sie Reflexionsfragen am Abend: 'Was war heute schön? Was war schwierig? Wie hast du dich dabei gefühlt?'",
      "Empathie üben: 'Wie glaubst du, fühlt sich dein Freund gerade?' fördert Perspektivenübernahme im Alltag.",
    ],
    parentTipsEn: [
      "Name emotions — both yours and your child's. Saying something like \"I can see that made you sad\" helps children make sense of what they feel.",
      "Be a role model: show your child how you handle frustration or disappointment. Children learn most by watching the adults around them.",
      "Guide conflicts rather than solving them: asking \"What could you do?\" is more valuable than stepping in immediately.",
      "Ask reflection questions in the evening: \"What was good about today? What was hard? How did that make you feel?\"",
      "Practice empathy together: asking \"How do you think your friend is feeling right now?\" builds perspective-taking in everyday moments.",
    ],
    parentWhy:
      "Kinder, die ihre Gefühle verstehen und mit anderen gut umgehen können, sind nicht nur sozial erfolgreicher – sie lernen auch besser in der Schule. Das ist kein Wunschdenken, sondern durch hunderte Studien belegt. Sozial-emotionale Fähigkeiten sind wie ein innerer Kompass: Sie helfen Kindern, sich in der Welt zurechtzufinden, Freundschaften zu schließen, mit Frust umzugehen und kluge Entscheidungen zu treffen. Und das Beste: Diese Fähigkeiten lassen sich lernen und üben – jeden Tag, in ganz normalen Alltagssituationen.",
    parentWhyEn:
      "Children who understand their emotions and relate well to others are not only more successful socially — they also perform better in school. This is not wishful thinking; it is backed by hundreds of studies. Social-emotional skills act as an inner compass: they help children navigate the world, build friendships, cope with frustration, and make thoughtful decisions. And the best part is that these skills can be learned and practiced — every day, in perfectly ordinary situations.",
    sources: [
      "Durlak, J. A., Weissberg, R. P., Dymnicki, A. B., Taylor, R. D., & Schellinger, K. B. (2011). The impact of enhancing students' social and emotional learning: A meta-analysis of school-based universal interventions. Child Development, 82(1), 405–432.",
      "Cipriano, C., Strambler, M. J., Naples, L. H., Ha, C., Kirk, M., Wood, M., ... & Durlak, J. (2023). The state of evidence for social and emotional learning: A contemporary meta-analysis of universal school-based SEL interventions. Child Development, 94(5), 1181–1204.",
      "Taylor, R. D., Oberle, E., Durlak, J. A., & Weissberg, R. P. (2017). Promoting positive youth development through school-based social and emotional learning interventions: A meta-analysis of follow-up effects. Child Development, 88(4), 1156–1171.",
    ],
    vorbilder: [
      {
        name: "RULER",
        country: "USA (Yale)",
        desc: "Am Yale Center for Emotional Intelligence entwickelter Ansatz, der Schulen systematisch in der Förderung emotionaler Intelligenz unterstützt – mit messbaren Effekten auf Schulklima und Leistung.",
        descEn: "An approach developed at the Yale Center for Emotional Intelligence that systematically supports schools in fostering emotional intelligence — with measurable effects on school climate and academic performance.",
      },
      {
        name: "KiVa",
        country: "Finnland",
        desc: "Evidenzbasiertes Anti-Mobbing-Programm, das in finnischen Schulen flächendeckend eingesetzt wird und Mobbing nachweislich um 30–50% reduziert.",
        descEn: "An evidence-based anti-bullying program deployed across Finnish schools that has been shown to reduce bullying by 30 to 50 percent.",
      },
    ],
  },
  {
    id: "5",
    slug: "lernstrategien",
    slugEn: "learning-strategies",
    title: "Lernstrategien & Retrieval Practice",
    titleEn: "Learning Strategies & Retrieval Practice",
    icon: "🧠",
    ages: ["6-10", "10-15", "15-18"],
    evidence: { strength: 4, effect: "groß", cost: "keine" },
    aiStatus: "expert_reviewed",
    proSummary:
      "Lernstrategien, insbesondere Retrieval Practice (aktives Abrufen), gehören zu den wirksamsten und gleichzeitig kosteneffizientesten Interventionen. Adesope et al. (2017) fanden in ihrer Meta-Analyse einen Effekt von g = 0,61 für Retrieval Practice gegenüber erneutem Lesen. Latimier et al. (2021) bestätigten dies mit g = 0,74 – ein außergewöhnlich starker Effekt. Brunmair & Richter (2019) zeigten mit g = 0,42 die Wirksamkeit von Elaborationsstrategien. Besonders bemerkenswert: Diese Strategien kosten nichts, erfordern keine speziellen Materialien und wirken altersübergreifend. Spacing (verteiltes Lernen) und Interleaving (verschachteltes Üben) ergänzen Retrieval Practice optimal. Die größte Herausforderung: Schüler:innen bevorzugen intuitiv ineffektive Strategien wie Markieren und Wiederholtes Lesen.",
    proSummaryEn:
      "Learning strategies — particularly retrieval practice (active recall) — rank among the most effective and cost-efficient interventions available. Adesope et al. (2017) found an effect size of g = 0.61 for retrieval practice compared to re-reading in their meta-analysis. Latimier et al. (2021) confirmed this with g = 0.74, an exceptionally strong effect. Brunmair and Richter (2019) demonstrated the effectiveness of elaboration strategies at g = 0.42. Notably, these strategies cost nothing, require no special materials, and work across all age groups. Spacing (distributed practice) and interleaving (mixed practice) complement retrieval practice optimally. The greatest challenge remains that students intuitively prefer ineffective strategies such as highlighting and re-reading.",
    proTips: [
      "Low-Stakes-Quizzes regelmäßig einsetzen: Kurze Abrufübungen zu Beginn oder Ende der Stunde – ohne Benotung, mit maximalem Lerneffekt (g = 0,61–0,74).",
      "Spacing systematisch einplanen: Inhalte über Wochen verteilt wiederholen statt in Blöcken – der Lerneffekt ist nachweislich größer.",
      "Interleaving nutzen: Verschiedene Aufgabentypen mischen statt blockweises Üben – anfangs schwieriger, langfristig wirksamer.",
      "Metakognition explizit unterrichten: Schüler:innen müssen verstehen, WARUM diese Strategien besser sind als Markieren und Wiederlesen.",
      "Elaboration fördern: 'Erkläre es in eigenen Worten' und 'Wie hängt das mit X zusammen?' aktivieren tiefere Verarbeitung.",
    ],
    proTipsEn: [
      "Use low-stakes quizzes regularly: brief recall exercises at the start or end of class — ungraded, with maximum learning impact (g = 0.61 to 0.74).",
      "Plan spacing systematically: distribute review of content over weeks rather than massing it in blocks — the learning effect is demonstrably greater.",
      "Leverage interleaving: mix different problem types rather than practicing in blocks — it feels harder initially but produces stronger long-term retention.",
      "Teach metacognition explicitly: students need to understand WHY these strategies outperform highlighting and re-reading.",
      "Promote elaboration: prompts like \"Explain it in your own words\" and \"How does this connect to X?\" activate deeper processing.",
    ],
    parentTips: [
      "Fragen Sie abends: 'Was hast du heute in der Schule gelernt?' – allein das Erinnern und Erzählen ist eine der besten Lernstrategien.",
      "Verteiltes Lernen statt Bulimie-Lernen: Lieber 3 × 20 Minuten über die Woche als 1 × 60 Minuten am Abend vor der Arbeit.",
      "Lernkarten (Karteikarten) sind wissenschaftlich bewiesen wirksam – digital oder auf Papier, Hauptsache aktives Abrufen.",
      "Lassen Sie Ihr Kind Ihnen den Stoff erklären: 'Erkläre mir das mal, als wüsste ich nichts davon' – Erklären ist eine der besten Lernmethoden.",
      "Markieren und Durchlesen bringt wenig. Wenn Ihr Kind sagt 'Ich hab's durchgelesen', fragen Sie: 'Kannst du es mir ohne Heft erklären?'",
    ],
    parentTipsEn: [
      "Ask in the evening: \"What did you learn at school today?\" The simple act of remembering and retelling is one of the most powerful learning strategies.",
      "Distributed practice beats cramming: three 20-minute sessions spread across the week is far more effective than one 60-minute session the night before a test.",
      "Flashcards are scientifically proven to work — digital or paper, what matters is the active recall they demand.",
      "Have your child explain the material to you: \"Teach me as if I know nothing about it.\" Teaching is one of the best ways to learn.",
      "Highlighting and re-reading do very little. If your child says \"I read through it,\" ask: \"Can you explain it to me without looking at your notes?\"",
    ],
    parentWhy:
      "Viele Kinder (und Erwachsene) lernen auf die falsche Art: Sie lesen den Stoff immer wieder durch und markieren bunte Stellen. Das fühlt sich gut an, bringt aber wenig. Die Forschung zeigt klar: Wirklich im Kopf bleibt nur, was man aktiv aus dem Gedächtnis abruft. Stellen Sie es sich vor wie einen Muskel: Nur wenn das Gehirn arbeiten muss, um sich zu erinnern, wird die Erinnerung stärker. Das Beste daran: Diese Methoden kosten nichts und funktionieren bei jedem Fach und in jedem Alter.",
    parentWhyEn:
      "Many children — and adults — study the wrong way: they read the material over and over and highlight colorful passages. It feels productive, but it achieves very little. Research is unambiguous: what truly sticks in memory is what you actively retrieve from it. Think of it like a muscle: only when the brain has to work to remember something does the memory grow stronger. The best part is that these methods cost nothing and work for every subject and every age.",
    sources: [
      "Adesope, O. O., Trevisan, D. A., & Sundararajan, N. (2017). Rethinking the use of tests: A meta-analysis of practice testing. Review of Educational Research, 87(3), 659–701.",
      "Latimier, A., Peyre, H., & Ramus, F. (2021). A meta-analytic review of the benefit of spacing out retrieval practice episodes on retention. Educational Psychology Review, 33(3), 959–987.",
      "Brunmair, M., & Richter, T. (2019). Similarity matters: A meta-analysis of interleaved learning and its moderators. Psychological Bulletin, 145(11), 1029–1052.",
    ],
    vorbilder: [
      {
        name: "retrievalpractice.org",
        country: "USA",
        desc: "Von der Kognitionswissenschaftlerin Pooja Agarwal gegründete Plattform, die Lehrkräften kostenlose, forschungsbasierte Materialien für Retrieval Practice bereitstellt.",
        descEn: "A platform founded by cognitive scientist Pooja Agarwal that provides educators with free, research-based materials for implementing retrieval practice.",
      },
      {
        name: "Leitner-System",
        country: "International",
        desc: "Das von Sebastian Leitner entwickelte Karteikartensystem nutzt systematisches Spacing: Karten wandern bei richtiger Antwort in längere Intervalle, bei falscher zurück – einfach und hochwirksam.",
        descEn: "The flashcard system developed by Sebastian Leitner uses systematic spacing: cards move to longer intervals when answered correctly and return to shorter intervals when answered incorrectly — simple and highly effective.",
      },
    ],
  },
  {
    id: "6",
    slug: "fruehkindliche-lernumgebung",
    slugEn: "early-childhood-environment",
    title: "Frühkindliche Lernumgebung",
    titleEn: "Early Childhood Learning Environment",
    icon: "🏡",
    ages: ["0-3", "3-6"],
    evidence: { strength: 3, effect: "moderat", cost: "gering" },
    aiStatus: "ai_reviewed",
    proSummary:
      "Die Qualität der häuslichen Lernumgebung (Home Learning Environment, HLE) ist ein konsistenter Prädiktor für die kognitive und sprachliche Entwicklung. Eine umfassende Meta-Analyse (2022) findet eine Korrelation von r = 0,31 zwischen HLE und Kindesentwicklung – ein mittelstarker, hochsignifikanter Zusammenhang. Mol et al. (2008) zeigten mit d = 0,59 den starken Effekt von dialogischem Vorlesen auf die Sprachentwicklung. Dowdall et al. (2020) bestätigten mit d = 0,41 die Wirksamkeit von Elterntrainings zur Verbesserung der HLE. Zentrale Erkenntnis: Nicht der sozioökonomische Status an sich bestimmt die Entwicklung, sondern die konkreten Interaktionen und Lerngelegenheiten im Alltag. Das macht die HLE zu einem besonders vielversprechenden Interventionspunkt.",
    proSummaryEn:
      "The quality of the home learning environment (HLE) is a consistent predictor of cognitive and language development. A comprehensive meta-analysis (2022) found a correlation of r = 0.31 between HLE and child development — a medium-sized, highly significant association. Mol et al. (2008) demonstrated a strong effect of d = 0.59 for dialogic reading on language development. Dowdall et al. (2020) confirmed the effectiveness of parent training programs for improving the HLE at d = 0.41. The central insight: it is not socioeconomic status per se that determines development, but rather the specific interactions and learning opportunities embedded in everyday life. This makes the HLE a particularly promising point of intervention.",
    proTips: [
      "Alltagsintegrierte Sprachförderung als Kernstrategie: Jede Routine (Essen, Anziehen, Spazierengehen) ist eine Sprachlerngelegenheit.",
      "Eltern als gleichberechtigte Bildungspartner einbeziehen – nicht belehren, sondern gemeinsam die Stärken der Familie aktivieren.",
      "Dialogisches Vorlesen aktiv vermitteln: Nicht nur vorlesen, sondern Fragen stellen, kommentieren, Bezüge zum Alltag herstellen (d = 0,59).",
      "Freies Spiel als Lernform anerkennen und schützen: Strukturiertes freies Spiel fördert exekutive Funktionen, Kreativität und soziale Kompetenzen.",
      "Elterntrainings evidenzbasiert gestalten: Kurze, praktische Workshops mit Alltagsbezug wirken besser als umfangreiche Theorievermittlung (d = 0,41).",
    ],
    proTipsEn: [
      "Use everyday-integrated language support as a core strategy: every routine — meals, getting dressed, going for a walk — is a language learning opportunity.",
      "Engage parents as equal educational partners — not by lecturing, but by collaboratively activating each family's strengths.",
      "Actively teach dialogic reading: go beyond simply reading aloud by asking questions, commenting, and connecting the story to daily life (d = 0.59).",
      "Recognize and protect free play as a form of learning: structured free play builds executive functions, creativity, and social competence.",
      "Design parent training programs to be evidence-based: short, practical workshops with real-life relevance are more effective than extensive theoretical instruction (d = 0.41).",
    ],
    parentTips: [
      "Sprechen Sie viel und vielfältig mit Ihrem Kind – von Geburt an. Erzählen Sie, was Sie tun: 'Jetzt ziehen wir die Jacke an, es ist kalt draußen.'",
      "Lesen Sie täglich vor und stellen Sie dabei Fragen: 'Was glaubst du, passiert als Nächstes?' macht aus Vorlesen einen Dialog.",
      "Spielen ist Lernen – das ist keine Floskel, sondern Wissenschaft. Beim Bauen, Matschen und Verkleiden lernt Ihr Kind fürs Leben.",
      "Singen Sie gemeinsam und reimen Sie: Kinderlieder und Abzählreime fördern Sprachgefühl und Gedächtnis spielerisch.",
      "Weniger ist mehr: Ein Kind braucht keine teuren Lernprogramme, sondern aufmerksame Erwachsene, die mit ihm die Welt entdecken.",
    ],
    parentTipsEn: [
      "Talk to your child frequently and in varied ways — from birth onward. Narrate what you are doing: \"Now we are putting on your jacket because it is cold outside.\"",
      "Read aloud every day and ask questions as you go: \"What do you think happens next?\" turns reading into a conversation.",
      "Play is learning — that is not a cliche, it is science. Building, sculpting, and pretend play teach your child skills that last a lifetime.",
      "Sing together and play with rhymes: nursery songs and counting rhymes build language awareness and memory in a joyful way.",
      "Less is more: a child does not need expensive learning programs — they need attentive adults who explore the world with them.",
    ],
    parentWhy:
      "Die ersten Lebensjahre sind eine einmalige Chance: Nie wieder lernt ein Mensch so schnell und so viel wie in der Zeit von 0 bis 6. Das Gehirn bildet in dieser Phase Milliarden von Verbindungen – und welche davon stark werden, hängt davon ab, welche Erfahrungen Ihr Kind macht. Sie brauchen dafür kein teures Spielzeug und keine speziellen Kurse. Was wirklich zählt: Sprechen, Vorlesen, gemeinsam Spielen und die Welt entdecken. Forschung zeigt: Kinder, die in einer anregenden häuslichen Umgebung aufwachsen, haben einen Entwicklungsvorsprung, der sich durch die gesamte Schulzeit zieht.",
    parentWhyEn:
      "The early years represent a once-in-a-lifetime opportunity: never again does a person learn as rapidly or as much as between the ages of 0 and 6. During this period, the brain forms billions of connections — and which of those connections grow strong depends on the experiences your child has. You do not need expensive toys or special courses for this. What truly matters is talking, reading aloud, playing together, and exploring the world. Research shows that children who grow up in a stimulating home environment carry a developmental advantage that extends throughout their entire school years.",
    sources: [
      "Niklas, F., Cohrssen, C., & Tayler, C. (2022). Home learning environment and concept formation: A family intervention study with kindergarten children. Early Childhood Research Quarterly, 58, 69–79.",
      "Mol, S. E., Bus, A. G., de Jong, M. T., & Smeets, D. J. (2008). Added value of dialogic parent-child book readings: A meta-analysis. Early Education and Development, 19(1), 7–26.",
      "Dowdall, N., Melendez-Torres, G. J., Murray, L., Gardner, F., Hartford, L., & Cooper, P. J. (2020). Shared picture book reading interventions for child language development: A systematic review and meta-analysis. Child Development, 91(2), e383–e399.",
    ],
    vorbilder: [
      {
        name: "Bookstart",
        country: "UK",
        desc: "Ergänzend zur Leseförderung setzt Bookstart auf früheste Literalitätsförderung: Kostenlose Bücherpakete erreichen Familien bereits bei der Geburt.",
        descEn: "Complementing broader literacy promotion, Bookstart focuses on the earliest possible literacy support: free book packs reach families at the time of birth.",
      },
      {
        name: "HIPPY",
        country: "International",
        desc: "Home Instruction for Parents of Preschool Youngsters – ein evidenzbasiertes Hausbesuchsprogramm, das Eltern befähigt, ihre Kinder zuhause gezielt zu fördern. In über 15 Ländern erfolgreich implementiert.",
        descEn: "Home Instruction for Parents of Preschool Youngsters — an evidence-based home visiting program that empowers parents to support their children's learning at home. Successfully implemented in over 15 countries.",
      },
    ],
  },
];
