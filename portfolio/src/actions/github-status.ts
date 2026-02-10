"use server";

export interface GitHubStatus {
    isOnline: boolean;
    lastCommit: string;
    lastCommitDate: string;
}

/**
 * Server Action that checks GitHub activity to determine "live" status.
 * Currently simulated — replace with a real GitHub API call:
 *
 *   const res = await fetch(
 *     `https://api.github.com/users/sudoshreya/events?per_page=1`,
 *     { next: { revalidate: 300 } }
 *   );
 */
export async function getGitHubStatus(): Promise<GitHubStatus> {
    // Simulate a recent commit (within last 24 hours = online)
    const now = new Date();
    const lastCommitDate = new Date(now.getTime() - 2 * 60 * 60 * 1000); // 2 hours ago

    return {
        isOnline: true,
        lastCommit: "feat: add agentic RAG pipeline",
        lastCommitDate: lastCommitDate.toISOString(),
    };
}
