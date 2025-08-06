import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 pb-16">
      <div className="text-center mt-16 mb-10 w-full">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          🔥 ziny 개발실
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          아이디어와 코드를 기록하는 공간
        </p>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl" style={{ width: "70%" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                url={project.url}
                image={project.image}
                repo={project.repo}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
