export default function SigilPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Sigil</h1>

        <div className="grid gap-8">
          <article className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                <div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">이름</p>
                      <h2 className="text-4xl font-bold text-slate-900">Sigil</h2>
                    </div>
                    <div className="rounded-3xl bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-700 ring-1 ring-red-200">
                      난이도: 3
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">선택 가능 조건</p>
                      <p className="mt-2 text-sm text-slate-700">최소 레벨 20 도달</p>
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
                          <span className="text-slate-700">변화 없음</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">관련 저주</p>
                      <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">없음</div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-start">
                    <a href="/enemies/cadence" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      ← Cadence 페이지
                    </a>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="aspect-[4/3] rounded-3xl border border-slate-200 bg-slate-50 text-slate-500 flex items-center justify-center text-center p-4">
                    <span className="text-sm">Sigil 이미지 자리</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-slate-700">
                <div>
                  <p className="text-sm font-semibold text-slate-900">외형</p>
                  <p className="mt-2">노란-주황색 별 모양 룬 형태의 적입니다. 4개의 신경 같은 팔과 다이아몬드형 눈을 가집니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">행동</p>
                  <p className="mt-2">Sigil은 플레이어를 무작위로 락온하고, 충전 후 추적 레이저를 발사합니다. 레이저는 목표를 천천히 따라갑니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">특징</p>
                  <p className="mt-2">빔은 락온된 플레이어에게만 보이며 다른 플레이어는 피해를 받지 않습니다. 6명 미만 생존 시 빔 재사용 시간이 늘어납니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">팁</p>
                  <p className="mt-2">빔에 락온되면 원을 그리며 이동하세요. 근접 시에는 높이 차이를 활용하세요.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
