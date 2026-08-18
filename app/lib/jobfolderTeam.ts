import "server-only";
import { JOBFOLDER_API_URL } from "./site";
import { FALLBACK_LINKEDIN, type Member } from "./team";

/* Recruiters approved (by a JobFolder admin, from the recruiter's detail page
   in the JobFolder console) to appear on this site's public "Meet Our Team"
   page. JobFolder exposes them at GET /api/team — public, unauthenticated,
   no email/phone — and this is the only place that endpoint gets called. */

type JobFolderTeamMember = {
  name: string;
  headline: string;
  photoURL: string;
  linkedin: string;
};

/** Never throws: a slow or unreachable JobFolder instance must not break this
    site's team page, so any failure just yields no JobFolder-sourced members. */
export async function getJobFolderTeam(): Promise<Member[]> {
  if (!JOBFOLDER_API_URL) return [];

  try {
    const res = await fetch(`${JOBFOLDER_API_URL}/api/team`, {
      // Kept in step with TEAM_REVALIDATE_SECONDS (../meet-our-team/page.tsx)
      // and JobFolder's own Cache-Control on /api/team — see the comment
      // there on what happens when these drift out of sync.
      next: { revalidate: 30 },
    });
    if (!res.ok) return [];

    const data = (await res.json()) as JobFolderTeamMember[];
    return data
      .filter((m) => m.name?.trim())
      .map((m) => ({
        name: m.name,
        role: m.headline || "Recruiter",
        photo: m.photoURL || undefined,
        linkedin: m.linkedin || FALLBACK_LINKEDIN,
      }));
  } catch {
    return [];
  }
}
