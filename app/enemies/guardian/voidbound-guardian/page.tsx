export default function VoidboundGuardianPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Voidbound Guardian</h1>

        <div className="grid gap-8">
          <article className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                <div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">이름</p>
                      <h2 className="text-4xl font-bold text-slate-900">Voidbound Guardian</h2>
                    </div>
                    <div className="rounded-3xl bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-700 ring-1 ring-amber-200">
                      난이도: 3
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">선택 가능 조건</p>
                      <p className="mt-2 text-sm text-slate-700">최소 레벨 20, Guardian 보유 시 등장</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">난이도별 변화</p>
                      <div className="mt-2 flex flex-col gap-2">
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Casual</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">느린 투사체, 플러스(+) 모양의 2개 빔으로 폭발</span>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Standard</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">빠른 투사체, 별 모양의 4개 빔으로 폭발</span>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Extreme</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">4개 투사체, 증가된 속도와 발사 속도로 6개 빔 폭발</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">관련 저주</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2 curse-list">
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">산탄</a>
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">위장</a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a href="/enemies/guardian" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      ← Guardian 페이지
                    </a>
                    <a href="/enemies/telefragger" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      Telefragger 페이지 →
                    </a>
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
                  <p className="mt-2">Guardian의 변질된 버전으로, 어두운 보라색 골격과 가시 같은 굵은 보라색 덩굴이 두개골 위와 옆면을 덮고 있습니다. Guardian처럼 덩굴과 두개골에서 꽃이 피어나 있으며, 아래턱이 반으로 부러져 날카로운 톱니 같은 이빨이 드러나 있습니다.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">특징</p>
                  <p className="mt-2">Guardian과 유사하게 공격하지만 추가 발사체를 쏘며, 탄환이 더 빠르고 표면에 닿으면 빔으로 폭발합니다. 대시와 공격 사이의 쿨다운이 단축되어 더 많은 회피가 필요합니다. 알터 오브 패시지(Altar of Passage)를 사용하면 격노 상태가 되어 더 빠르게 움직이고 사격합니다.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">회피법</p>
                  <p className="mt-2">폭발 탄환의 반경을 피하고, 빔 영역에 머무르지 마세요. 지속적인 이동이 필수적입니다.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">팁</p>
                  <p className="mt-2">스포츠 슈즈(Sport Shoes) 같은 스피드 업그레이드가 반응 시간을 주므로 권장됩니다. Voidbound Guardian을 마지막 선택지로 두고, 충분한 업그레이드 없이 초반에 선택하면 런을 빠르게 끝낼 수 있습니다. 레이더 모듈: 적(Radar Module: Enemies)과 대부분의 스피드 업그레이드를 보유한 상태에서 만나는 것을 권장합니다.</p>
                </div>
              </div>
            </div>

          </article>
        </div>
      </div>
    </main>
  )
}