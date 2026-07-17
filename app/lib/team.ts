const U = "https://metroassoc.com/wp-content/uploads/2026/04/";
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
    photo: `${U}ChatGPT-Image-Mar-12-2026-02_04_03-PM.webp`,
    linkedin: "https://www.linkedin.com/in/patricknovick/",
    objectPos: "object-top",
  },
  {
    name: "Tina B",
    role: "Recruiter",
    photo: `${U}ChatGPT-Image-Apr-4-2026-06_50_51-PM.png`,
    linkedin: PATRICK_LINKEDIN,
    objectPos: "object-top",
  },
  {
    name: "Cai Jones",
    role: "Recruiter",
    photo: `${U}ChatGPT-Image-Apr-5-2026-05_55_35-AM.png`,
    linkedin: PATRICK_LINKEDIN,
  },
  {
    name: "Nick J",
    role: "Recruiter",
    photo: `${U}1773418019229.jpeg`,
    linkedin: FALLBACK_LINKEDIN,
  },
  {
    name: "Cadee Jones",
    role: "Recruiter",
    photo: `${U}c792789a-6dd2-4e2f-a895-f37ed9608d93.webp`,
    linkedin: FALLBACK_LINKEDIN,
  },
  {
    name: "Rohonney Jane Crispo",
    role: "DOT Recruiter",
    photo: `${U}ChatGPT-Image-Apr-4-2026-06_35_14-PM.webp`,
    linkedin: FALLBACK_LINKEDIN,
  },
  {
    name: "Rao Muneeb",
    role: "Recruiter",
    photo: `${U}1776504727356.jpeg`,
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
