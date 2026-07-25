export default function CadencePage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Cadence</h1>

        <div className="grid gap-8">
          <article className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                <div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">이름</p>
                      <h2 className="text-4xl font-bold text-slate-900">Cadence</h2>
                    </div>
                    <div className="rounded-3xl bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-700 ring-1 ring-red-200">
                      난이도: 3
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">선택 가능 조건</p>
                      <p className="mt-2 text-sm text-slate-700">최소 레벨 15 도달</p>
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
                          <span className="text-slate-700">악기 1개만 있어도 타이머가 감소</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">관련 저주</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2 curse-list">
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">죽음의 멜로디</a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-start">
                    <a href="/enemies/kolona" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      ← Kolona 페이지
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="aspect-[4/3] rounded-3xl border border-slate-200 bg-slate-50 text-slate-500 flex items-center justify-center text-center p-4">
                    <span className="text-sm">Cadence 이미지 자리</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-slate-700">
                <div>
                  <p className="text-sm font-semibold text-slate-900">외형</p>
                  <p className="mt-2">덩굴로 덮인 시계 안에 숨겨진 적입니다. 분노하면 시계가 깨지고 검은 연기와 4개의 손, 그리고 큰 눈이 드러납니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">특징</p>
                  <p className="mt-2">패시브 상태에서 플레이어 근처에 악기가 소환됩니다. 악기가 생성될 때 Cadence와 악기가 검은 줄로 연결되고, 악기 2개 이상일 때 타이머가 감소합니다. 타이머가 만료되면 분노하여 가장 가까운 플레이어를 추격합니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">회피법</p>
                  <p className="mt-2">악기를 먼저 회수하거나 파괴하고, 분노 전에 거리를 벌리세요.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">팁</p>
                  <p className="mt-2">트립마인을 조심하면서 악기를 빠르게 수거하세요. Extreme에서는 분노 시 속도가 더 빨라집니다.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Notes</p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• 타이머 만료 시 분노 상태가 되며, 악기는 더 이상 생성되지 않습니다.</li>
                <li>• 플레이어를 처치하면 잠시 멈춘 뒤 다음 목표를 추적합니다.</li>
                <li>• Extreme에서는 분노 상태 속도가 130 studs/s로 증가합니다.</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
