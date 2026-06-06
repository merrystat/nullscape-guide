import React from 'react'

interface FirstPageProps {
  title: string
  subtitle?: string
  minimalLevel?: number
  icon?: string
  wiki?: string
}

export default function FirstPage({ title, subtitle, minimalLevel, icon = 'E', wiki }: FirstPageProps) {
  return (
    <header className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
      <div className="flex items-center gap-6">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-900 text-4xl font-black text-white">
          {icon}
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-slate-600">{subtitle}</p>}
          <div className="mt-3 flex items-center gap-3">
            {typeof minimalLevel === 'number' && (
              <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">Lv {minimalLevel}+</div>
            )}
            {wiki && (
              <a
                href={wiki}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-sky-600 px-3 py-1 text-sm font-medium text-white hover:bg-sky-700"
              >
                Wiki
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
