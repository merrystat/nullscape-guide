import FirstPage from '@/components/FirstPage'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-slate-50">
      <div className="mx-auto max-w-4xl">
        <FirstPage
          title="Nullscape Visual Guide"
          subtitle="시각 중심 공략"
          icon="NV"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a href="/curses" className="rounded-3xl border border-slate-200 bg-white p-6 text-center text-slate-900 shadow-sm transition hover:border-slate-300">저주 가이드</a>
          <a href="/classes" className="rounded-3xl border border-slate-200 bg-white p-6 text-center text-slate-900 shadow-sm transition hover:border-slate-300">클래스 가이드</a>
          <a href="/enemies" className="rounded-3xl border border-slate-200 bg-white p-6 text-center text-slate-900 shadow-sm transition hover:border-slate-300">적 가이드</a>
          <a href="/altars" className="rounded-3xl border border-slate-200 bg-white p-6 text-center text-slate-900 shadow-sm transition hover:border-slate-300">제단 가이드</a>
          <a href="/upgrades" className="rounded-3xl border border-slate-200 bg-white p-6 text-center text-slate-900 shadow-sm transition hover:border-slate-300">업그레이드 가이드</a>
        </div>
      </div>
    </main>
  )
}