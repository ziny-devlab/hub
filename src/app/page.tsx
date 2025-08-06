
import { fetchReposFromGitHub } from "../lib/github";
import ProjectCard from "../components/ProjectCard";

export default async function Home() {
  const repos = await fetchReposFromGitHub();
  const filtered = repos.filter((repo: any) => !repo.archived && !repo.private);

  return (
    <main className="p-4">
      <div className="text-center my-16">
        <h1 className="text-5xl font-bold text-pink-700 dark:text-pink-300 mb-4">🔥 JJIN의 GitHub 레포 허브</h1>
        <p className="text-xl text-pink-600 dark:text-pink-400">
          개발자로서의 여정을 담은 프로젝트 모음
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filtered.map((repo: any) => (
          <ProjectCard
            key={repo.id}
            title={repo.name}
            description={repo.description}
            url={repo.homepage || repo.html_url}
            image={repo.owner.avatar_url}
          />
        ))}
      </div>
    </main>
  );
}

export const revalidate = 3600;

