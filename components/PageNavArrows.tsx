'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const pages = [
  { href: '/', label: '홈' },
  { href: '/curses', label: '저주' },
  { href: '/classes', label: '클래스' },
  { href: '/enemies', label: '적' },
  { href: '/altars', label: '제단' },
  { href: '/upgrades', label: '업그레이드' },
]

export default function PageNavArrows() {
  const pathname = usePathname()
  const currentIndex = pages.findIndex((page) => page.href === pathname)

  if (currentIndex === -1) {
    return null
  }

  const prev = currentIndex > 0 ? pages[currentIndex - 1] : null
  const next = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null

  return (
    <div className="mt-10 flex items-center justify-between gap-4">
      {prev ? (
        <Link
          href={prev.href}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300"
        >
          ← {prev.label}
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300"
        >
          {next.label} →
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
