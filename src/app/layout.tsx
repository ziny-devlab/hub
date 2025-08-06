import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ziny 개발실 | 프로젝트 & 포트폴리오 허브",
  description:
    "ziny의 개발 프로젝트와 아이디어를 모아놓은 공간. AI, 웹, 유틸리티 등 다양한 개발 결과물을 한눈에 확인하세요.",
  keywords: [
    "ziny",
    "개발자",
    "포트폴리오",
    "프로젝트",
    "AI",
    "웹",
    "오픈소스",
    "개발 블로그",
    "Doc-Summary",
    "Auto-Docs",
    "Next.js",
  ],
  authors: [{ name: "ziny", url: "https://github.com/ziny" }],
  openGraph: {
    title: "ziny 개발실 | 프로젝트 & 포트폴리오 허브",
    description:
      "ziny의 개발 프로젝트와 아이디어를 모아놓은 공간. AI, 웹, 유틸리티 등 다양한 개발 결과물을 한눈에 확인하세요.",
    url: "https://ziny-devlab.vercel.app/",
    siteName: "ziny 개발실",
    images: [
      {
        url: "images/og-main.png",
        width: 1200,
        height: 630,
        alt: "ziny 개발실 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ziny 개발실 | 프로젝트 & 포트폴리오 허브",
    description:
      "ziny의 개발 프로젝트와 아이디어를 모아놓은 공간. AI, 웹, 유틸리티 등 다양한 개발 결과물을 한눈에 확인하세요.",
    images: [
      {
        url: "images/og-main.png",
        alt: "ziny 개발실 대표 이미지",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
