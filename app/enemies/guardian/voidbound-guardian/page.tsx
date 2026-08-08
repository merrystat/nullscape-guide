export default function VoidboundGuardianPage() {
  return (
    <main className="min-h-screen bg-violet-50 p-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-violet-200 bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Voidbound Guardian</h1>

        <div className="grid gap-8">
          <article className="space-y-6">
            <div className="rounded-3xl border border-violet-200 bg-violet-100/70 p-8 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                <div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">이름</p>
                      <h2 className="text-4xl font-bold text-slate-900">Voidbound Guardian</h2>
                    </div>
                    <div className="rounded-3xl bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-700 ring-1 ring-violet-200">
                      난이도: 3
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">선택 가능 조건</p>
                      <p className="mt-2 text-sm text-slate-700">레벨 20 이상, Guardian 보유 시 등장</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">난이도별 변화</p>
                      <div className="mt-2 flex flex-col gap-2">
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Casual</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">느린 투사체가 충돌하면 2개의 빔으로 분해</span>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Standard</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">빠른 투사체가 4개의 빔으로 분해</span>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Extreme</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">4개 투사체, 더 빠른 발사 속도와 속도로 6개의 빔 폭발</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">관련 저주</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2 curse-list">
                        <a href="/curses/" className="rounded-2xl border p-3 text-center text-sm font-medium transition">관련 저주 (위키 참조)</a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-between">
                    <a href="/enemies/guardian" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">← Guardian 페이지</a>
                    <a href="/enemies/telefragger" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">Telefragger 페이지 →</a>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="aspect-[4/3] rounded-3xl border border-slate-200 bg-slate-50 text-slate-500 flex items-center justify-center text-center p-4">
                    <span className="text-sm">Voidbound Guardian 이미지 자리</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-slate-700">
                <div>
                  <p className="text-sm font-semibold text-slate-900">외형</p>
                  <p className="mt-2">Guardian의 파생형으로, 보라색 빛과 가시 같은 덩굴, 꽃, 부러진 턱을 가진 어두운 형태입니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">특징</p>
                  <p className="mt-2">Guardian처럼 공격하지만 탄환이 더 빠르고, 표면에 닿으면 빔으로 폭발하는 추가 공격을 합니다. 알터 사용 시 더 빨리 움직이고 사격합니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">회피법</p>
                  <p className="mt-2">지속적으로 이동하며 피하고, 빔이 남는 영역에 오래 머무르지 마세요. 정지하면 위험합니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">팁</p>
                  <p className="mt-2">스피드 업그레이드와 레이더 모듈로 대응하면 훨씬 안전합니다. 초반에 선택하면 도망치기 어려우니 여유가 있을 때 고르는 것이 좋습니다.</p>
                </div>
              </div>
            </div>

          </article>
        </div>
      </div>
    </main>
  )
}
