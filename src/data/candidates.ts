export interface CandidateLink {
    title: string;
    url: string;
}

export interface AreaCouncil {
    name: string;
    description: string;
    links: CandidateLink[];
}

export const areaCouncils: AreaCouncil[] = [
    {
        name: "Abaji",
        description: "Abaji Area Council candidates for Chairman, Vice Chairman, and Councillorship positions.",
        links: [
            {
                title: "Chairman & Vice Chairman",
                url: "https://www.inecnigeria.org/list-of-candidates-for-the-february-2026-fct-area-council-elections/abaji-chairman-and-vice/"
            },
            {
                title: "Councillorship",
                url: "https://www.inecnigeria.org/list-of-candidates-for-the-february-2026-fct-area-council-elections/abaji-councillorship/"
            }
        ]
    },
    {
        name: "AMAC (Abuja Municipal Area Council)",
        description: "AMAC Area Council candidates for Chairman, Vice Chairman, and Councillorship positions.",
        links: [
            {
                title: "Chairman & Vice Chairman",
                url: "https://www.inecnigeria.org/list-of-candidates-for-the-february-2026-fct-area-council-elections/amac-chairman-and-vice/"
            },
            {
                title: "Councillorship (2026)",
                url: "https://www.inecnigeria.org/list-of-candidates-for-the-february-2026-fct-area-council-elections/amac-councillorship-2026/"
            }
        ]
    },
    {
        name: "Bwari",
        description: "Bwari Area Council candidates for Chairman, Vice Chairman, and Councillorship positions.",
        links: [
            {
                title: "Chairmanship & Vice",
                url: "https://www.inecnigeria.org/list-of-candidates-for-the-february-2026-fct-area-council-elections/bwari-chairmanship-and-vice/"
            },
            {
                title: "Councillorship List (PDF)",
                url: "https://www.inecnigeria.org/wp-content/uploads/BWARI-COUNCILLORSHIP-LIST.pdf"
            }
        ]
    },
    {
        name: "Gwagwalada",
        description: "Gwagwalada Area Council candidates for Chairman, Vice Chairman, and Councillorship positions.",
        links: [
            {
                title: "Chairmanship & Vice",
                url: "https://www.inecnigeria.org/list-of-candidates-for-the-february-2026-fct-area-council-elections/gwagwalada-chairmanship-and-vice/"
            },
            {
                title: "Councillorship",
                url: "https://www.inecnigeria.org/list-of-candidates-for-the-february-2026-fct-area-council-elections/gwagwalada-councillorship/"
            }
        ]
    },
    {
        name: "Kuje",
        description: "Kuje Area Council candidates for Chairman, Vice Chairman, and Councillorship positions.",
        links: [
            {
                title: "Chairmanship & Vice",
                url: "https://www.inecnigeria.org/list-of-candidates-for-the-february-2026-fct-area-council-elections/kuje-chairmanship-and-vice/"
            },
            {
                title: "Councillorship",
                url: "https://www.inecnigeria.org/list-of-candidates-for-the-february-2026-fct-area-council-elections/kuje-councillorship/"
            }
        ]
    },
    {
        name: "Kwali",
        description: "Kwali Area Council candidates for Chairman, Vice Chairman, and Councillorship positions.",
        links: [
            {
                title: "Chairmanship & Vice",
                url: "https://www.inecnigeria.org/list-of-candidates-for-the-february-2026-fct-area-council-elections/kwali-chairmanship-and-vice/"
            },
            {
                title: "Councillorship",
                url: "https://www.inecnigeria.org/list-of-candidates-for-the-february-2026-fct-area-council-elections/kwali-councillorship/"
            }
        ]
    },
    {
        name: "Additional Updates",
        description: "Further updates including court ordered candidates for specific parties.",
        links: [
            {
                title: "2026 FCT Court Ordered Candidates (ADC) - PDF",
                url: "https://wp1.inecnigeria.org/wp-content/uploads/2026-FCT-COURT-ORDERED-CANDIDATES-ADC.pdf"
            }
        ]
    }
];
