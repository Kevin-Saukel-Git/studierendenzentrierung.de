export enum ToolCategory {
    NONE = "",
    HOCHSCHULORGANISATION = "Hochschulorganisation",
    LEHRE = "Lehre",
    LEARNING_AND_TEACHING_PROJECTS = "Lehr- und Lernprojekte",
    RAHMENBEDINGUNGEN = "Rahmenbedingungen",
}

export enum ToolTag {
    METHOD = "Methode",
    FRAMEWORK = "Framework",
    RICHTLINIE = "Richtlinie",
    MASSNAHME = "Maßnahme",
    STRUKTUR = "Struktur"
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
        shortDescription: "Der Studentische Vizepräsident ist ein Vertreter der Studierenden in der Hochschulleitung.",
        category: ToolCategory.HOCHSCHULORGANISATION,
        tags: [ToolTag.STRUKTUR],
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
                url: "https://doi.org/10.25656/01:28975;"
            }
        ],
        updatedAt: new Date("01-12-2026"),
        createdAt: new Date("01-12-2026"),
    }
]
