export enum ToolCategory {
    NONE = "",
    HOCHSCHULORGANISATION = "Hochschulorganisation",
    LEHRE = "Lehre",
    LEARNING_AND_TEACHING_PROJECTS = "Lehr- und Lernprojekte",
    RAHMENBEDINGUNGEN = "Rahmenbedingungen",
}

export enum ToolTag {
    PARTIZIPATION = "Partizipation",
    MITBESTIMMUNG = "Mitbestimmung",
    FEEDBACK_EVALUATION = "Feedback",
    ANREIZE_ENGAGEMENT = "Engagement",
    BERATUNG_MENTORING = "Mentoring",
    LEHRKONZEPT_DIDAKTIK = "Didaktik",
    FORMAT_VERANSTALTUNG = "Format",
    STRUKTURELLE_MASSNAHME = "Struktur",
    DIGITAL_PARTICIPATION = "Digital",
    STUDENTISCHE_FORSCHUNG = "Studierendenforschung",
}

export interface Tool {
    title: string;
    shortDescription: string;
    imageURL?: string;
    category: ToolCategory;
    tags: ToolTag[];
    references: {
        title: string;
        url: string;
    }[];
    literature: {
        title: string;
        url: string;
    }[];
    updatedAt: Date;
    createdAt: Date;
}

export const Tools: Tool[] = [
    {
        title: "Studentischer Vizepräsident",
        shortDescription: "Der Studentische Vizepräsident ist eine zusätzliche Position in der Hochschulleitung, die von einem Studierenden besetzt wird.",
        category: ToolCategory.HOCHSCHULORGANISATION,
        tags: [
            ToolTag.MITBESTIMMUNG,
            ToolTag.STRUKTURELLE_MASSNAHME
        ],
        references: [
            {
                title: "Fachhochschule Potsdam",
                url: "https://www.fh-potsdam.de/hochschule-karriere/organisation/hochschulleitung"
            },
            {
                title: "Universität Marburg",
                url: "https://www.uni-marburg.de/de/universitaet/administration/praesidium"
            }
        ],
        literature: [
            {
                title: "Puqja, Lorena; Rockenmaier, Sophia: Mitgestaltung auf Augenhöhe: Eine studentische Vizepräsidentschaft für die Universität Passau - In: Bartosch, Ulrich [Hrsg.]: Die Idee der Universität – heute. Passauer Perspektiven. Bad Heilbrunn : Verlag Julius Klinkhardt 2024, S. 149-155 - URN: urn:nbn:de:0111-pedocs-289758 - DOI: 10.25656/01:28975; 10.35468/6071-18",
                url: "https://doi.org/10.25656/01"
            }
        ],
        updatedAt: new Date("2026-01-12"),
        createdAt: new Date("2026-01-12"),
    },
    {
        title: "Social Scoring im Hochschulkontext",
        shortDescription: "Das Social-Scoring-System ist eine partizipative Methode zur Bewertung von ehrenamtlichem Engagement von Studierenden. Studierende können ihre ehrenamtlichen Aktivitäten einreichen, die dann in einer öffentlich zugänglichen Rangliste veröffentlicht werden. Die Bewertung erfolgt auf Basis von quantitativen und qualitativen Kriterien, die von den Studierenden selbst erarbeitet werden. Ziel ist es, Studierende zu ehrenamtlichem Engagement zu motivieren und zu einer höheren Wertschätzung von ehrenamtlichem Engagement in der Hochschulgemeinde beizutragen.",
        category: ToolCategory.HOCHSCHULORGANISATION,
        tags: [
            ToolTag.ANREIZE_ENGAGEMENT,
            ToolTag.STRUKTURELLE_MASSNAHME
        ],
        references: [],
        literature: [
            {
                title: "PartiDeck",
                url: "https://github.com/henicosa/PartiDeck"
            }
        ],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Randomisierte Auswahl von Studierenden durch E-Mail im Namen des Präsidiums",
        shortDescription: "Zur Gewinnung von Studierenden für Partizpationsprozesse soll eine zufällige Auswahl von Studierenden erfolgen, die per E-Mail vom Präsidium angefragt werden.",
        category: ToolCategory.HOCHSCHULORGANISATION,
        tags: [
            ToolTag.PARTIZIPATION,
            ToolTag.STRUKTURELLE_MASSNAHME
        ],
        references: [],
        literature: [
            {
                title: "PartiDeck",
                url: "https://github.com/henicosa/PartiDeck"
            }
        ],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Townhall",
        shortDescription: "Ein Townhall ist eine Veranstaltung, bei der ein Fachbereich, eine Einrichtung oder andere Personengruppen zusammenkommen, um gemeinsam an einer Diskussion / an einen Entwicklungsprozess teilnehmen. Die Studierenden haben dabei die Möglichkeit, ihre Perspektiven und Ideen einzubringen und an der Erarbeitung von Zielen und Maßnahmen mitzuwirken.",
        category: ToolCategory.HOCHSCHULORGANISATION,
        tags: [
            ToolTag.FORMAT_VERANSTALTUNG,
            ToolTag.PARTIZIPATION,
            ToolTag.MITBESTIMMUNG
        ],
        references: [
            {
                title: "Technische Universität Braunschweig",
                url: "https://www.tu-braunschweig.de/praesidentin/dialog-formate/digital-town-hall"
            }
        ],
        literature: [
            {
                title: "Guide Inc: How to Organize a Town Hall Meeting A Planning Guide",
                url: "https://guideinc.org/wp-content/uploads/2015/07/Organizing-a-Town-Hall-Meeting.pdf"
            }
        ],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Surreallabor Hochschulpolitik",
        shortDescription: "Das Surreallabor Hochschulpolitik ist eine Plattform für Studierende, um sich aktiv an der Hochschulpolitik zu beteiligen und eigene Ideen und Vorschläge einzubringen. Hierbei soll besonderes Augenmerk auf die bürokratischen Strukturen im Hochschulbereich gelegt werden, die oft eine effektive Partizipation erschweren oder sogar unmöglich machen. Das Surreallabor ermöglicht es Studierenden, ihre Erfahrungen und Erlebnisse bei der Partizipation transparent zu machen und gezielte Verbesserungsvorschläge zu entwickeln.",
        category: ToolCategory.HOCHSCHULORGANISATION,
        tags: [
            ToolTag.PARTIZIPATION,
            ToolTag.MITBESTIMMUNG,
            ToolTag.FORMAT_VERANSTALTUNG
        ],
        references: [],
        literature: [
            {
                title: "PartiDeck",
                url: "https://github.com/henicosa/PartiDeck"
            }
        ],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Goldene Mensakarte",
        shortDescription: "Das Projekt 'Die goldene Mensakarte' soll Studierende dazu motivieren, sich ehrenamtlich zu engagieren. Im Gegenzug wird den Teilnehmenden eine goldene Mensakarte ausgehändigt, mit der sie in der Mensa die Warteschlange überspringen und direkt zur Essensausgabe gehen können. Hierdurch wird sowohl das ehrenamtliche Engagement der Studierenden gefördert als auch die Wartezeit in der Mensa verkürzt.",
        category: ToolCategory.HOCHSCHULORGANISATION,
        tags: [
            ToolTag.ANREIZE_ENGAGEMENT,
            ToolTag.STRUKTURELLE_MASSNAHME
        ],
        references: [],
        literature: [
            {
                title: "PartiDeck",
                url: "https://github.com/henicosa/PartiDeck"
            }
        ],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Newsletter über studentisches Engagement",
        shortDescription: "Ein Newsletter soll gezielt über Möglichkeiten und Mehrwert des studentischen Engagements informieren, niedrigschwellige Beteiligungsangebote außerhalb der Gremien aufzeigen, die Vereinbarkeit mit dem Studium thematisieren und von Studierenden initiierte Veränderungen hochschulweit sichtbar machen.",
        category: ToolCategory.HOCHSCHULORGANISATION,
        tags: [
            ToolTag.ANREIZE_ENGAGEMENT,
            ToolTag.PARTIZIPATION,
            ToolTag.STRUKTURELLE_MASSNAHME
        ],
        references: [],
        literature: [
            {
                title: "Wissenschaftsrat (2022): Empfehlungen für eine zukunftsfähige Ausgestaltung von Studium und Lehre; Köln. https://doi.org/10.57674/q1f4-g978 - vgl. S.52",
                url: "https://doi.org/10.57674/q1f4-g978"
            }
        ],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Teaching Canvas",
        shortDescription: "Der Teaching Canvas verbindet didaktische Impulse mit spezifischen Aspekten studentischer Partizipation und unterstützt Lehrende dabei, Lehrkonzepte zu reflektieren, anzupassen und weiterzuentwickeln. Er schärft den Blick für Beteiligungsmöglichkeiten im Semesterverlauf und kann als Grundlage für Austausch und Feedback mit Kolleg*innen und Studierenden dienen.",
        category: ToolCategory.LEHRE,
        tags: [
            ToolTag.LEHRKONZEPT_DIDAKTIK,
            ToolTag.PARTIZIPATION,
            ToolTag.FEEDBACK_EVALUATION
        ],
        references: [
            {
                title: "Universität Bielefeld",
                url: "https://www.uni-bielefeld.de/lehre/innovative-lehrprojekte/bilinked/studentische-partizipation/"
            }
        ],
        literature: [
            {
                title: "Bachus L., Gostmann I., Springhorn J.: Teaching Canvas - studentische Partizipation an Lehrveranstaltungen",
                url: "https://www.uni-bielefeld.de/lehre/innovative-lehrprojekte/bilinked/studentische-partizipation/Teaching-Canvas_Studentische-Partizipation-an-Lehrveranstaltungen.pdf"
            }
        ],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Student Digital Transformation Agents",
        shortDescription: "Zur Institutionalisierung studentischer Partizipation wurden zwei Student Digital Transformation Agents als Senatsbeauftragte mit dem Schwerpunkt Digitalisierung legitimiert, organisatorisch mit der Studierendenversammlung verknüpft und als studentische Hilfskräfte in strategisch relevanten Bereichen angestellt. Dadurch sind studentische Impulse in Strategie- und Qualitätsprozessen verankert und breit in die Hochschule eingebunden.",
        category: ToolCategory.HOCHSCHULORGANISATION,
        tags: [
            ToolTag.MITBESTIMMUNG,
            ToolTag.STRUKTURELLE_MASSNAHME,
            ToolTag.DIGITAL_PARTICIPATION,
            ToolTag.PARTIZIPATION
        ],
        references: [
            {
                title: "SRH University - Learning Innovation Centre",
                url: "https://www.srh-university.de/de/srh-university/learning-innovation-center/"
            }
        ],
        literature: [
            {
                title: "Kling P. (2021): Die Einführung von Student Digital Transformation Agents an der SRH Hochschule Heidelberg. https://hochschulforumdigitalisierung.de/die-einfuehrung-von-student-digital-transformation-agents-an-der-srh-hochschule-heidelberg/",
                url: "https://hochschulforumdigitalisierung.de/die-einfuehrung-von-student-digital-transformation-agents-an-der-srh-hochschule-heidelberg/"
            }
        ],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Bauhaus.Module",
        shortDescription: "Das interdisziplinäre Lehrangebot ermöglicht Studierenden aller Studiengänge den Zugang zu multi-, inter- und transdisziplinären Lehrveranstaltungen. Ziel ist es, den fachlichen Horizont zu erweitern, gemeinsames Lernen mit anderen Disziplinen zu fördern und Reflexions- sowie Kooperationskompetenzen zu stärken. Das Angebot umfasst geöffnete Lehrveranstaltungen sowie akademische und studentische Bauhaus.Module.",
        category: ToolCategory.LEHRE,
        tags: [
            ToolTag.LEHRKONZEPT_DIDAKTIK,
            ToolTag.FORMAT_VERANSTALTUNG
        ],
        references: [
            {
                title: "Bauhaus-Universität Weimar",
                url: "https://www.uni-weimar.de/bauhausmodule/faq/lehrangebot/"
            }
        ],
        literature: [],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "YOUniversity",
        shortDescription: "YOUniversity integriert studentische Online-Partizipation in die Lehrplanung: Studierende können Seminarinhalte digital mitgestalten, Themen priorisieren und Abstimmungen durchführen. Die Maßnahme fördert Motivation, fachliche Auseinandersetzung sowie digitale und partizipative Kompetenzen.",
        category: ToolCategory.LEHRE,
        tags: [
            ToolTag.LEHRKONZEPT_DIDAKTIK,
            ToolTag.DIGITAL_PARTICIPATION,
            ToolTag.PARTIZIPATION
        ],
        references: [
            {
                title: "Heinrich Heine Universität Düsseldorf",
                url: "https://www.diid.hhu.de/leistungen/youniversity"
            }
        ],
        literature: [
            {
                title: "Seim J., Wähner M., Dechow A. (2023): YOUniversity. Lehre und Lernen gemeinsam gestalten. Leitfaden für Dozierende. DOI: 10.36200/0022",
                url: "https://www.diid.hhu.de/fileadmin/redaktion/DIID/Daten/YOUniversity_Leitfaden-fuer-DozierendeKonzept.pdf"
            }
        ],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "SHIFT! Evaluation",
        shortDescription: "Shift! ist ein qualitatives Feedbackformat, in dem Studierende und Lehrende mit externer Moderation in den Dialog treten, gegenseitig Feedback geben und gemeinsam Verantwortung für gelingende Lehr-Lern-Situationen übernehmen. Das Format fördert Perspektivwechsel, Transparenz und die Reflexion der Lehr-Lern-Beziehung.",
        category: ToolCategory.LEHRE,
        tags: [
            ToolTag.FEEDBACK_EVALUATION,
            ToolTag.LEHRKONZEPT_DIDAKTIK,
            ToolTag.PARTIZIPATION
        ],
        references: [
            {
                title: "Leuphana Universität",
                url: "https://www.leuphana.de/lehre/qualitaetsmanagement/evaluation-feedback/shift.html"
            }
        ],
        literature: [],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Peer Adivsing",
        shortDescription: "Im Peer Advising werden Studierende in kleinen Gruppen unterstützt, um ein gutes Ankommen in der Hochschule zu fördern und die Findung von Lern- und Studienziele zu unterstützen. Die Gruppen werden von Studierenden geleitet, die bereits Erfahrung in der betreffenden Disziplin haben.",
        category: ToolCategory.LEHRE,
        tags: [
            ToolTag.BERATUNG_MENTORING,
            ToolTag.FORMAT_VERANSTALTUNG,
            ToolTag.STRUKTURELLE_MASSNAHME
        ],
        references: [
            {
                title: "Leuphana Universität",
                url: "https://www.leuphana.de/college/bachelor/studium-individuale/faq.html"
            }
        ],
        literature: [],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Akademisches Mentorrat",
        shortDescription: "Im akademischen Mentorat führen Lehrende mit Studierenden Feedback- und Reflexionsgespräche außerhalb der Lehrveranstaltung. Die individuelle Begleitung unterstützt Studienorientierung, Selbstreflexion und den Dialog zwischen Studierenden und Lehrenden.",
        category: ToolCategory.LEHRE,
        tags: [
            ToolTag.BERATUNG_MENTORING,
            ToolTag.LEHRKONZEPT_DIDAKTIK
        ],
        references: [],
        literature: [
            {
                title: "Wissenschaftsrat (2022): Empfehlungen für eine zukunftsfähige Ausgestaltung von Studium und Lehre; Köln. https://doi.org/10.57674/q1f4-g978 - vgl. S.11",
                url: "https://doi.org/10.57674/q1f4-g978"
            }
        ],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Qualitätszirkel",
        shortDescription: "Qualitätszirkel sind ein niedrigschwelliges Dialog- und Feedbackformat, in dem Studierende und Lehrende gemeinsam Stärken und Schwächen eines Studienprogramms diskutieren und Weiterentwicklungsmaßnahmen ableiten. Ergebnisse und Maßnahmen werden dokumentiert und im nächsten Durchlauf rückgemeldet.",
        category: ToolCategory.LEHRE,
        tags: [
            ToolTag.FEEDBACK_EVALUATION,
            ToolTag.PARTIZIPATION,
            ToolTag.STRUKTURELLE_MASSNAHME
        ],
        references: [
            {
                title: "Leuphana Universität",
                url: "https://www.leuphana.de/lehre/qualitaetsmanagement/evaluation-feedback/qualitaetszirkel.html"
            }
        ],
        literature: [],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Soundingboard",
        shortDescription: "Das Soundingboard ermöglicht Studierenden, Lehr- und Lernprojekte in frühen Entwicklungsphasen zu spiegeln und Verbesserungsvorschläge einzubringen. Durch wiederkehrende Feedbackschleifen werden Lehrelemente nutzerorientiert weiterentwickelt und an Bedarfe und Nutzungssituationen von Studierenden angepasst.",
        category: ToolCategory.LEARNING_AND_TEACHING_PROJECTS,
        tags: [
            ToolTag.FEEDBACK_EVALUATION,
            ToolTag.PARTIZIPATION,
            ToolTag.FORMAT_VERANSTALTUNG
        ],
        references: [],
        literature: [],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Community Lunch",
        shortDescription: "Der Community-Lunch ist ein offenes Austauschformat, das Studierende in die kooperative Entwicklung eines Lernraums einbindet. Durch lockeren, aber moderierten Dialog entsteht ein Ort für Community-Building, Bedürfnisartikulation, gemeinsames Visionieren, Feedback und Rollenfindung. Das Format unterstützt agency, Transparenz und kurzzyklische partizipative Rückkopplungen.",
        category: ToolCategory.LEARNING_AND_TEACHING_PROJECTS,
        tags: [
            ToolTag.FORMAT_VERANSTALTUNG,
            ToolTag.PARTIZIPATION,
            ToolTag.FEEDBACK_EVALUATION
        ],
        references: [],
        literature: [
            {
                title: "Konrad, T. (2024). Wöchentlicher Community Lunch. In Stifterverband für die Deutsche Wissenschaft e.V. (Hrsg.), Studierendenpartizipation in der Lernraumgestaltung: Sammlung von Partizipationsmethoden aus dem Programm „Raumlabore“. Essen.",
                url: "https://www.stifterverband.org/sites/default/files/2025-02/raumlabore_handbuch_studierendenpartizipation_in_der_lernraumgestaltung.pdf"
            }
        ],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Fokusgruppen",
        shortDescription: "Fokusgruppen ermöglichen die qualitative Erhebung von Meinungen, Bedürfnissen und Ideen von Studierenden (und ggf. Lehrenden) in einem moderierten Gruppengespräch. Das Format schafft Raum für offenen Austausch in Peer-Groups, fördert Perspektivenvielfalt und unterstützt die nutzer*innenorientierte Gestaltung partizipativer Lernräume.",
        category: ToolCategory.LEARNING_AND_TEACHING_PROJECTS,
        tags: [
            ToolTag.FEEDBACK_EVALUATION,
            ToolTag.FORMAT_VERANSTALTUNG,
            ToolTag.PARTIZIPATION
        ],
        references: [],
        literature: [
            {
                title: "Lindner, M., & Borello, M. M. (2024). Fokusgruppen. In Stifterverband für die Deutsche Wissenschaft e.V. (Hrsg.), Studierendenpartizipation in der Lernraumgestaltung: Sammlung von Partizipationsmethoden aus dem Programm „Raumlabore“. Essen.",
                url: "https://www.stifterverband.org/sites/default/files/2025-02/raumlabore_handbuch_studierendenpartizipation_in_der_lernraumgestaltung.pdf"
            }
        ],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Tagung für studentische Forschung",
        shortDescription: "Eine Tagung für studentische Forschung bindet Studierende aktiv in wissenschaftliche Prozesse ein, indem sie eigene Forschungsprojekte präsentieren, begutachten lassen und diskutieren. Dadurch werden wissenschaftliche Kommunikation, kritisches Denken, Eigenständigkeit und Vernetzung gefördert und studentische Forschung institutionell sichtbar gemacht.",
        category: ToolCategory.LEARNING_AND_TEACHING_PROJECTS,
        tags: [
            ToolTag.STUDENTISCHE_FORSCHUNG,
            ToolTag.FORMAT_VERANSTALTUNG,
            ToolTag.PARTIZIPATION
        ],
        references: [
            {
                title: "Carl von Ossietzky Universität Oldenburg",
                url: "https://uol.de/forschen-at-studium/konferenz-fuer-studentische-forschung"
            }
        ],
        literature: [],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Anerkennung von Ehrenamt als ECTS-Punkte",
        shortDescription: "Studierendes Engagement außerhalb der Curricula wird in Hochschulen durch die Vergabe von ECTS-Punkten anerkannt. Dadurch werden studentische Aktivitäten formal im Studium verankert, studienrelevant bewertet und zeitlich entlastet. Die Maßnahme fördert Sichtbarkeit, Wertschätzung und Beteiligung an studentischem Engagement.",
        category: ToolCategory.RAHMENBEDINGUNGEN,
        tags: [
            ToolTag.ANREIZE_ENGAGEMENT,
            ToolTag.STRUKTURELLE_MASSNAHME
        ],
        references: [],
        literature: [],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Reduktion von Präsenzveranstaltungen",
        shortDescription: "Die Reduktion verpflichtender Präsenzzeiten schafft zeitliche Flexibilität für studentisches Engagement und ermöglicht die Vereinbarkeit von ehrenamtlichen Tätigkeiten, Beschäftigung oder Care-Arbeit mit dem Studium. Digitale oder hybride Formate können ergänzend eingesetzt werden.",
        category: ToolCategory.RAHMENBEDINGUNGEN,
        tags: [
            ToolTag.LEHRKONZEPT_DIDAKTIK,
            ToolTag.DIGITAL_PARTICIPATION
        ],
        references: [],
        literature: [
            {
                title: "Wissenschaftsrat (2022): Empfehlungen für eine zukunftsfähige Ausgestaltung von Studium und Lehre; Köln. https://doi.org/10.57674/q1f4-g978 - vgl. S.51",
                url: "https://doi.org/10.57674/q1f4-g978"
            }
        ],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Bereitstellung von Räumen für studentisches Engagement",
        shortDescription: "Durch die Bereitstellung von Räumen für studentische Gruppen und Initiativen werden organisatorische, soziale und kreative Arbeitsprozesse unterstützt. Die Maßnahme stärkt Community-Building, Sichtbarkeit und die strukturelle Verankerung studentischer Aktivitäten.",
        category: ToolCategory.RAHMENBEDINGUNGEN,
        tags: [
            ToolTag.STRUKTURELLE_MASSNAHME,
            ToolTag.PARTIZIPATION
        ],
        references: [],
        literature: [],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Ausnahmeregelungen für Langzeitstudiengebühren und Maximalstudienzeiten",
        shortDescription: "Studierende, die sich in Hochschulgremien, Initiativen oder anderen gemeinwohlorientierten Bereichen engagieren, können von Langzeitstudiengebühren oder Maximalstudienzeiten ausgenommen werden. Dies schafft Anreize für Engagement und verhindert strukturelle Benachteiligung aktiver Studierender.",
        category: ToolCategory.RAHMENBEDINGUNGEN,
        tags: [
            ToolTag.ANREIZE_ENGAGEMENT,
            ToolTag.STRUKTURELLE_MASSNAHME
        ],
        references: [],
        literature: [],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    },
    {
        title: "Einführung von TVStud",
        shortDescription: "TVStud bezeichnet einen tarifvertraglichen Rahmen für studentische Beschäftigte an Hochschulen, um faire Arbeitsbedingungen, Entlohnung und Mitbestimmung sicherzustellen. Die Maßnahme stärkt die arbeits- und hochschulpolitische Position studentischer Beschäftigter.",
        category: ToolCategory.RAHMENBEDINGUNGEN,
        tags: [
            ToolTag.STRUKTURELLE_MASSNAHME,
            ToolTag.MITBESTIMMUNG
        ],
        references: [],
        literature: [],
        updatedAt: new Date("2026-01-19"),
        createdAt: new Date("2026-01-19"),
    }
];
