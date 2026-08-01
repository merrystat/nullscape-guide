export default function VoidbreakerPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Voidbreaker</h1>

        <div className="grid gap-8">
          <article className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                <div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">이름</p>
                      <h2 className="text-4xl font-bold text-slate-900">Voidbreaker</h2>
                    </div>
                    <div className="rounded-3xl bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-700 ring-1 ring-amber-200">
                      난이도: 2
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">선택 가능 조건</p>
                      <p className="mt-2 text-sm text-slate-700">최소 레벨 18 도달</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">난이도별 변화</p>
                      <div className="mt-2 flex flex-col gap-2">
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Casual · Standard</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">변화 없음</span>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Extreme</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">검 발사 빈도 증가</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">관련 저주</p>
                      <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">없음</div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-between">
                    <a href="/enemies/cadence" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      ← Cadence 페이지
                    </a>
                    <a href="/enemies/sigil" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      Sigil 페이지 →
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="aspect-[4/3] rounded-3xl border border-slate-200 bg-slate-50 text-slate-500 flex items-center justify-center text-center p-4">
                    <span className="text-sm">Voidbreaker 이미지 자리</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-slate-700">
                <div>
                  <p className="text-sm font-semibold text-slate-900">요약</p>
                  <p className="mt-2">Voidbreaker는 레벨 15부터 등장하는 보이드 속성의 기사형 적입니다. 플레이어 근처에 소환되어 검을 여러 개 만들어내며, 잠시 후 검들이 지정된 방향으로 발사되어 타격과 넉백을 가합니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">행동</p>
                  <p className="mt-2">방울처럼 사라졌다가 플레이어 주위에 등장해 경고한 뒤 검을 소환합니다. 공격이 끝나면 사라집니다. 추가 스택은 발동 빈도를 높입니다(스택은 등장 빈도에 영향).</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">난이도 변화</p>
                  <p className="mt-2">Casual: 1검/볼레이, Standard: 2검/볼레이, Extreme: 추가 볼레이(각 볼레이 당 2검).</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">대응</p>
                  <p className="mt-2">검의 발사 방향에서 벗어나면 안전합니다. 점프/낙하로는 회피되지 않으니 수평 이동으로 회피하세요. 벽이나 지형으로 검을 가려 피해를 줄일 수 있습니다.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
