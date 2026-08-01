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
                    <a href="/enemies/sigil" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      ← Sigil 페이지
                    </a>
                    <a href="/enemies/voidbound-baby" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      Voidbound Baby 페이지 →
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
                  <p className="text-sm font-semibold text-slate-900">외형</p>
                  <p className="mt-2">보이드 기사가 검과 어둠의 기운을 장착한 형태입니다. 짙은 음영의 갑옷과 발끝에서 검은 에너지가 흘러나옵니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">특징</p>
                  <p className="mt-2">Voidbreaker는 주변 공간에서 검을 소환해 발사합니다. 검은 일정한 각도로 날아가며, 피격 시 넉백과 추가 데미지를 남깁니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">회피법</p>
                  <p className="mt-2">검 발사 패턴을 읽고, 발사 방향과 타이밍을 피하세요. 검이 떨어지는 지점을 미리 확보하면 안전합니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">팁</p>
                  <p className="mt-2">이동 능력이 있으면 검을 쉽게 회피할 수 있습니다. 좁은 공간에서는 측면으로 빠르게 이동하는 것이 좋습니다.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
