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
                    <div className="rounded-3xl bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-700 ring-1 ring-amber-200">
                      난이도: 2
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">선택 가능 조건</p>
                      <p className="mt-2 text-sm text-slate-700">맵에 악기 오브젝트가 생성된 후 등장</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">난이도별 변화</p>
                      <div className="mt-2 flex flex-col gap-2">
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Casual · Standard</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">악기 생성과 행동 패턴이 일정</span>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Extreme</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">악기 출현 속도와 분노 빈도 증가</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">관련 저주</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2 curse-list">
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">리듬의 무게</a>
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">박자 흐트러짐</a>
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">시간 끌기</a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <a href="/enemies" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      ← Bell 페이지
                    </a>
                    <a href="/enemies/baby" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      Baby 페이지 →
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
                  <p className="mt-2">악기 요소가 결합된 시계 모양의 적입니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">특징</p>
                  <p className="mt-2">악기를 맵에 생성. 일정 시간 후 분노하기 시작.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">대응</p>
                  <p className="mt-2">악기를 우선 회수·파괴. 팀 분업으로 회수 담당 지정.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">팁</p>
                  <p className="mt-2">악기가 많을수록 타이머가 빨라지니 신속 수거 중요.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Notes</p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• 악기를 남겨두면 Cadence가 더 빠르게 분노합니다.</li>
                <li>• 분노 상태에서는 이동 속도와 공격 빈도가 증가합니다.</li>
                <li>• 악기는 우선적으로 회수하거나 파괴하는 것이 안전합니다.</li>
                <li>• 시각 및 음향 신호를 함께 사용해 대응하세요.</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
