import EnemyLayout from '@/components/EnemyLayout'

export default function SpringerPage() {
  return (
    <EnemyLayout title="Springer">
      <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">이름</p>
                <h2 className="text-4xl font-bold text-slate-900">Springer</h2>
              </div>
              <div className="rounded-3xl bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">난이도: 1</div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">선택 가능 조건</p>
                <p className="mt-2 text-sm text-slate-700">최소 레벨 1 도달</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">난이도별 변화</p>
                <p className="mt-2 text-sm text-slate-700">Casual · Standard - 변화 없음 / Extreme - 충격파 훨씬 강함 + 빨간 충격파(즉사)</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">관련 저주</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2 curse-list">
                  <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">스프링 장전됨</a>
                  <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">공명 충격파</a>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <a href="/enemies/mart" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">← Mart 페이지</a>
              <div />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="aspect-[4/3] rounded-3xl border border-slate-200 bg-slate-50 text-slate-500 flex items-center justify-center text-center p-4">
              <span className="text-sm">Springer 이미지 자리</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4 text-slate-700">
          <div>
            <p className="text-sm font-semibold text-slate-900">외형</p>
            <p className="mt-2">체스의 나이트 말(기사)을 모델로 한 적입니다. 점프 시 움직임이 체스의 나이트 말처럼 독특합니다.</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">특징</p>
            <p className="mt-2">게임 시작 시 하늘에서 떨어지며, 그 후 랜덤한 타일로 점프합니다. 착지 지점은 빨간 회전 십자표시로 미리 표시됩니다. 착지하면 주변에 충격파를 생성해 플레이어를 뒤로 날려버립니다. 직접 플레이어 위에 착지하면 즉사합니다.</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">회피법</p>
            <p className="mt-2">Springer가 착지할 때 작은 점프를 하면 충격파를 피할 수 있습니다. 착지 지점을 미리 파악해 그 반대 방향으로 이동하세요. Extreme에서는 빨간 충격파를 피해야 하므로 더욱 주의가 필요합니다.</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">팁</p>
            <p className="mt-2">Grace Wings 업그레이드를 최대한 빨리 획득하는 것이 좋습니다. Charger나 Diver를 사용 중이라면 충격파를 피하며 차징/다이빙해야 하므로 각별히 주의하세요. Springer 몸 안에 선물이나 트립마인이 숨어있을 수 있습니다. 선물 수집 시에는 Springer가 떠난 것을 확인한 후 이동하세요.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Notes</p>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>• Springer는 고체 판정이므로 통과할 수 없습니다.</li>
          </ul>
        </div>
      </EnemyLayout>
  )
}
