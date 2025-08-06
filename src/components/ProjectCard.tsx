import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  url: string;
  image?: string;
  repo?: string;
};

export default function ProjectCard({
  title,
  description,
  url,
  image,
  repo,
}: Props) {
  return (
    <div className="group bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 flex flex-col items-center h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {image && (
        <div className="w-full aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col w-full">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
          {title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        <div className="mt-auto w-full flex flex-col gap-3 items-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-gray-800 dark:bg-gray-700 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all shadow-md w-full text-center transition-transform duration-300 group-hover:-translate-y-1"
          >
            프로젝트 보기
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full text-sm font-medium text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 underline underline-offset-4 mt-1"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.334-5.466-5.931 0-1.31.47-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.289-1.553 3.295-1.23 3.295-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.628-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              레포 구경하기
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
