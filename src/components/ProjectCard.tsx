// components/ProjectCard.tsx

import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  url: string;
  image?: string;
};

export default function ProjectCard({ title, description, url, image }: Props) {
  return (
    <div className="group flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-pink-100 dark:border-pink-900/50">
      {image && (
        <div className="w-full aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-xl font-bold text-pink-800 dark:text-pink-200 mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors">
          {title}
        </h2>
        <p className="text-pink-700 dark:text-pink-300 mb-6 flex-1">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg hover:opacity-90 transition-opacity shadow-md hover:shadow-pink-200 dark:hover:shadow-pink-900/50 w-full text-center"
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
      </div>
    </div>
  );
}