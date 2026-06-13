import PageNavArrows from '@/components/PageNavArrows'

type Props = {
  title: string
  children: React.ReactNode
}

export default function EnemyLayout({ title, children }: Props) {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">{title}</h1>

        <div className="grid gap-8">
          <article className="space-y-6">
            {children}
            <PageNavArrows />
          </article>
        </div>
      </div>
    </main>
  )
}
