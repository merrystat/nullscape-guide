export default function KolonaPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Kolóna</h1>

        <div className="grid gap-8">
          <article className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                <div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">이름</p>
                      <h2 className="text-4xl font-bold text-slate-900">Kolóna</h2>
                    </div>
                    <div className="rounded-3xl bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-700 ring-1 ring-sky-200">
                      난이도: 2
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">선택 가능 조건</p>
                      <p className="mt-2 text-sm text-slate-700">최소 레벨 10 도달</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">난이도별 변화</p>
                      <div className="mt-2 flex flex-col gap-2">
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Casual</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">숫자 범위 8~10</span>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Standard · Extreme</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">숫자 범위 5~15</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">관련 저주</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2 curse-list">
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">불타는 꽃다발</a>
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition curse-yellow">잃어버린 불씨</a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <a href="/enemies/telefragger" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      ← Telefragger 페이지
                    </a>
                    <div />
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="aspect-[4/3] rounded-3xl border border-slate-200 bg-slate-50 text-slate-500 flex items-center justify-center text-center p-4">
                    <span className="text-sm">Kolóna 이미지 자리</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-slate-700">
                <div>
                  <p className="text-sm font-semibold text-slate-900">외형</p>
                  <p className="mt-2">3개의 눈을 가진 불꽃 형태로, 뒤에 기둥과 화환이 있습니다. 화면 왼쪽에 나타나며 카운트마다 기둥이 시계 방향으로 회전합니다.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">특징</p>
                  <p className="mt-2">무작위로 활성화되어 목표 숫자를 잠깐 보여준 뒤 1부터 카운트합니다. 목표 숫자 도달 시 어빌리티를 사용하고 있으면 사라집니다. 실패 시 화환이 빨갛게 변하고 잠시 후 처치합니다. Prisoner는 어빌리티가 없어 등장하지 않으며, Flesh 감염 시 타이머가 일시 정지됩니다.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">회피법</p>
                  <p className="mt-2">처음 표시된 숫자를 기억하고 그 숫자에 어빌리티를 사용하세요. 숫자를 놓쳤다면 5 이후 매 카운트마다 어빌리티를 준비하세요.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">팁</p>
                  <p className="mt-2">설정에서 '중앙 적 표시' 옵션을 켜면 목표 숫자가 화면 중앙에 표시됩니다. 기둥은 매 카운트마다 22.5°씩 회전하므로 각도로 현재 카운트를 역산할 수 있습니다.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Notes</p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• Patch 5에서 Kookoo의 대체 적으로 도입되었습니다. (Kookoo 범위 8~12 → Kolóna 범위 5~15)</li>
                <li>• Medal 획득 시 해당 라운드에서 더 이상 등장하지 않습니다.</li>
                <li>• Lost Embers 저주 적용 시 카운트 중 현재 숫자가 표시되지 않습니다.</li>
                <li>• Kolóna는 그리스어·슬로바키아어로 '기둥'을 의미합니다.</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
