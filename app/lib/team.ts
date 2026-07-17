// Team photos are self-hosted in /public/team (the old metroassoc.com domain is gone).
// Every team member's profile link points to Patrick's LinkedIn.
const FALLBACK_LINKEDIN = "https://www.linkedin.com/in/patricknovick/";
const PATRICK_LINKEDIN = FALLBACK_LINKEDIN;

export type Member = {
  name: string;
  role: string;
  photo?: string;
  linkedin: string;
  objectPos?: string;
};

/** Real Metro Associates team. Members without a LinkedIn use Patrick's profile. */
export const TEAM: Member[] = [
  {
    name: "Patrick Novick",
    role: "Managing Partner",
    photo: "/team/patrick.webp",
    linkedin: "https://www.linkedin.com/in/patricknovick/",
    objectPos: "object-top",
  },
  {
    name: "Tina B",
    role: "Recruiter",
    photo: "/team/tina.webp",
    linkedin: PATRICK_LINKEDIN,
    objectPos: "object-top",
  },
  {
    name: "Cai Jones",
    role: "Recruiter",
    photo: "/team/cai.webp",
    linkedin: PATRICK_LINKEDIN,
  },
  {
    name: "Nick J",
    role: "Recruiter",
    photo: "/team/nick.webp",
    linkedin: FALLBACK_LINKEDIN,
  },
  {
    name: "Cadee Jones",
    role: "Recruiter",
    photo: "/team/cadee.webp",
    linkedin: FALLBACK_LINKEDIN,
  },
  {
    name: "Rohonney Jane Crispo",
    role: "DOT Recruiter",
    photo: "/team/rohonney.webp",
    linkedin: FALLBACK_LINKEDIN,
  },
  {
    name: "Rao Muneeb",
    role: "Recruiter",
    photo: "/team/rao.webp",
    linkedin: FALLBACK_LINKEDIN,
  },
  {
    name: "Lisa Vasquez",
    role: "Recruiter",
    linkedin: PATRICK_LINKEDIN,
  },
  {
    name: "Steff Cirone",
    role: "Recruiter",
    linkedin: PATRICK_LINKEDIN,
  },
  {
    name: "Robert Garret",
    role: "Recruiter",
    linkedin: PATRICK_LINKEDIN,
  },
];
