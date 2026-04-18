import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nullscape Visual Guide',
  description: 'Roblox 게임 Nullscape의 공략·아이템 정보를 PPT 스타일 인포그래픽 슬라이드로 제공하는 정보성 웹사이트.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}