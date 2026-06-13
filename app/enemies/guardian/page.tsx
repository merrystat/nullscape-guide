export default function GuardianPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Guardian</h1>

        <div className="grid gap-8">
          <article className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                <div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">이름</p>
                      <h2 className="text-4xl font-bold text-slate-900">Guardian</h2>
                    </div>
                    <div className="rounded-3xl bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-700 ring-1 ring-amber-200">
                      난이도: 2
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">선택 가능 조건</p>
                      <p className="mt-2 text-sm text-slate-700">최소 레벨 8 도달</p>
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
                          <span className="text-slate-700">투사체 4발, 속도·발사 속도 증가, 정지 시 투명화</span>
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
                  <div className="mt-4 flex justify-between">
                    <a href="/enemies/operator" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      ← Operator 페이지
                    </a>
                    <a href="/enemies/telefragger" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      Telefragger 페이지 →
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="aspect-[4/3] rounded-3xl border border-slate-200 bg-slate-50 text-slate-500 flex items-center justify-center text-center p-4">
                    <span className="text-sm">Guardian 이미지 자리</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-slate-700">
                <div>
                  <p className="text-sm font-semibold text-slate-900">외형</p>
                  <p className="mt-2">머리, 눈, 입 곳곳에 꽃이 피어 있는 분홍색 해골 형태의 적입니다.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">특징</p>
                  <p className="mt-2">몇 초마다 가장 가까운 플레이어 근처로 대시한 뒤, 잠시 멈추고 분홍 불꽃과 함께 투사체를 발사합니다. 투사체는 플레이어의 이동 방향을 예측하며, 고체 물체를 통과하지 못합니다. Guardian 본체는 무해하며 투사체에만 즉사 판정이 있습니다.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">회피법</p>
                  <p className="mt-2">투사체를 향해 직진하거나 반대로 도망치지 말고 옆으로 이동하세요. 발사 준비 중에는 가까이 가지 마세요.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">팁</p>
                  <p className="mt-2">이동 및 발사 준비 시 큰 소리가 나므로 근처에 있으면 쉽게 파악할 수 있습니다. 카메라를 줌 아웃하면 투사체를 더 일찍 발견할 수 있습니다.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Notes</p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• Guardian을 영구 선택하면 레벨 20부터 Voidbound Guardian이 선택지에 추가됩니다.</li>
                <li>• Altar of Passage 사용 시 분노 상태가 되어 이동 및 발사 속도가 빨라집니다.</li>
                <li>• Extreme에서는 정지 중 투명화되므로 소리에 더 의존해야 합니다.</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
