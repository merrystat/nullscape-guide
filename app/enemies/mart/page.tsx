import PageNavArrows from '@/components/PageNavArrows'

export default function MartPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Mart</h1>

        <div className="grid gap-8">
          <article className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                <div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">이름</p>
                      <h2 className="text-4xl font-bold text-slate-900">Mart</h2>
                    </div>
                    <div className="rounded-3xl bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
                      난이도: 1
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">선택 가능 조건</p>
                      <p className="mt-2 text-sm text-slate-700">최소 레벨 1 도달</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">난이도별 변화</p>
                      <p className="mt-2 text-sm text-slate-700">Casual · Standard - 변화 없음 / Extreme - 2배 빠름</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">관련 저주</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2 curse-list">
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">마트 슬라이드</a>
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">마트 감염</a>
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">더 큰 마트</a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <a href="/enemies/icbm" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      ← ICBM 페이지
                    </a>
                    <a href="/enemies/springer" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      Springer 페이지 →
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="aspect-[4/3] rounded-3xl border border-slate-200 bg-slate-50 text-slate-500 flex items-center justify-center text-center p-4">
                    <span className="text-sm">Mart 이미지 자리</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-slate-700">
                <div>
                  <p className="text-sm font-semibold text-slate-900">외형</p>
                  <p className="mt-2">파란색 슬라임 같은 적입니다. 회색 순록 뿔과 검은색 페도라 모자를 쓰고 있으며, 모자에는 흰색 테두리가 있습니다. 얕보이는 얼굴(:D)이 특징입니다.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">특징</p>
                  <p className="mt-2">가장 가까운 플레이어를 향해 천천히 떠다니며, 초당 10스터드 속도로 움직입니다. 접촉 시 즉사하며, 모든 물체를 통과할 수 있습니다. Mart와 다른 Mart가 충돌하면 합쳐져서 더 커지고 빨라집니다.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">회피법</p>
                  <p className="mt-2">Mart의 느린 속도를 이용해 움직임을 유지하세요. 여러 마리가 있다면 서로 합쳐지지 않도록 맵 전체에 분산시키는 것이 중요합니다. 마트 주변에 있으면 독특한 소리가 나므로 청각을 이용해 위치를 파악할 수 있습니다.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">팁</p>
                  <p className="mt-2">초기 게임에서는 느린 속도와 작은 크기 때문에 큰 위협이 아닙니다. 하지만 두 개 이상의 Mart 저주가 활성화되면, 특히 마트 슬라이드가 있으면 위험도가 크게 올라갑니다.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Notes</p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• Mart는 느린 속도로 떠다니므로 초반에는 큰 위협이 아닙니다.</li>
                <li>• 다른 Mart와 충돌하면 합쳐져서 더 커지고 빠르게 움직입니다.</li>
                <li>• 6번 합쳐지면 파란 거품이 생겨 히트박스가 표시됩니다.</li>
                <li>• Extreme에서는 Mart의 속도가 2배가 되고, 합칠 때마다 추가 속도를 얻습니다.</li>
                <li>• 타일 안에 숨을 수 있으므로 주변 소리가 크면 주의해야 합니다.</li>
              </ul>
            </div>
            <PageNavArrows />
          </article>
        </div>
      </div>
    </main>
  )
}
