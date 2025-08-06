export async function fetchReposFromGitHub() {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const org = process.env.NEXT_PUBLIC_GITHUB_ORG;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json"
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const url = `https://api.github.com/orgs/${org}/repos`;
  const res = await fetch(url, {
    headers
  });

  if (!res.ok) {
    console.error("GitHub API error:", await res.text());
    throw new Error("Failed to fetch repos");
  }

  const data = await res.json();
  return data;
}