import PageNavArrows from '@/components/PageNavArrows'

export default function ICBMPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">ICBM</h1>

        <div className="grid gap-8">
          <article className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                <div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">이름</p>
                      <h2 className="text-4xl font-bold text-slate-900">ICBM</h2>
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
                      <p className="mt-2 text-sm text-slate-700">Casual · Standard - 변화 없음 / Extreme - 플레이어 이동을 예측해 낙하 위치를 조정</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">관련 저주</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2 curse-list">
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">더 큰 폭발</a>
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">불타는 땅</a>
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition curse-yellow">빈 타일</a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <a href="/enemies/husk" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      ← Husk 페이지
                    </a>
                    <a href="/enemies/mart" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      Mart 페이지 →
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="aspect-[4/3] rounded-3xl border border-slate-200 bg-slate-50 text-slate-500 flex items-center justify-center text-center p-4">
                    <span className="text-sm">대륙간탄도미사일 이미지 자리</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-slate-700">
                <div>
                  <p className="text-sm font-semibold text-slate-900">외형</p>
                  <p className="mt-2">아이템 이름 그대로 대륙간탄도미사일 형태의 적입니다. 단계별 로켓 엔진과 안정 핀, 금속 외부가 특징이며, 탄두 기부의 체크무늬 패턴이 돋보입니다.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">특징</p>
                  <p className="mt-2">랜덤 플레이어를 락온한 뒤 경고음과 빨간 원으로 위치를 표시합니다. 약 2.5초 후 정해진 위치로 낙하하며, 추가 1.5초 뒤 폭발하여 주변을 강하게 피해 줍니다.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">회피법</p>
                  <p className="mt-2">락온 표시가 보이면 즉시 빨간 원 밖으로 벗어나세요. 폭발 반경이 넓으므로 안전한 거리를 충분히 확보해야 합니다.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">팁</p>
                  <p className="mt-2">막힌길이나 좁은 공간에서는 피하기 어려우므로 미리 피해야 합니다. 폭발 반경이 크기 때문에 팀원과 떨어져 있으면 팀원을 보호하는 데 도움이 됩니다.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Notes</p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• 랜덤 플레이어 한 명을 락온합니다.</li>
                <li>• 락온 후 2.5초 뒤 낙하가 시작됩니다.</li>
                <li>• 낙하 위치는 한 번 정해지면 추가 조정 없이 떨어집니다.</li>
                <li>• Extreme에서는 플레이어 이동을 예측해 위치를 조정합니다.</li>
                <li>• 이후 약 5초 뒤 다시 락온하며, 솔로일 때 지연이 크게 늘어납니다.</li>
              </ul>
            </div>
            <PageNavArrows />
          </article>
        </div>
      </div>
    </main>
  )
}
