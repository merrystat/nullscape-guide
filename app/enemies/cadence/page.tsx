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
                      <p className="mt-2 text-sm text-slate-700">레벨 15 이상</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">난이도별 변화</p>
                      <div className="mt-2 flex flex-col gap-2">
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Casual · Standard</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">악기 2개 이상일 때만 타이머가 감소</span>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Extreme</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">악기 1개만 있어도 타이머 감소, 분노 시 속도 130 studs/s</span>
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
                  <p className="text-sm font-semibold text-slate-900">설명</p>
                  <p className="mt-2">Cadence는 레벨 15부터 등장하는 패시브 적입니다. 평상시에는 덩굴로 가려진 시계 안에 숨겨져 있고, 양옆에 쇠사슬이 늘어져 있습니다. 분노하면 시계가 깨지며 검은 연기와 4개의 검은 손이 나타나고, 위아래 이빨 사이로 큰 눈인 Cadence가 드러납니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">행동</p>
                  <p className="mt-2">패시브 상태에서는 움직이지 않으며 플레이어를 죽일 수 없습니다. 25초마다 하나의 악기가 플레이어 근처에 무작위로 생성됩니다. 악기는 생성 지점에서 소리를 내며, 악기와 Cadence를 검은 전기 줄이 연결합니다.</p>
                  <p className="mt-2">악기가 2개 이상 남아 있으면 타이머가 감소하고, 그렇지 않으면 증가합니다. Solo에서는 타이머가 50초에서 최대화됩니다.</p>
                  <p className="mt-2">타이머가 끝나면 Cadence가 분노하여 가장 가까운 플레이어를 80 studs/s로 쫓아 죽입니다. 분노 상태에서는 악기가 생성되지 않으며, 플레이어를 처치하면 잠시 멈춘 뒤 다음 목표를 추적합니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">난이도 변화</p>
                  <ul className="mt-2 space-y-2 text-slate-700">
                    <li>• Casual · Standard: 악기 2개 이상일 때만 타이머가 감소합니다.</li>
                    <li>• Extreme: 악기 1개만 있어도 타이머가 감소하며, 분노 상태의 속도가 130 studs/s로 증가합니다.</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">팁</p>
                  <ul className="mt-2 space-y-2 text-slate-700">
                    <li>• 악기를 우선적으로 회수하거나 파괴하세요.</li>
                    <li>• 악기가 많을수록 타이머가 빨라지니 빠르게 수거해야 합니다.</li>
                    <li>• 트립마인이 있는지 확인하고, 필요하면 공중이나 측면에서 수거하세요.</li>
                    <li>• Extreme에서는 분노 상태에서 속도가 크게 증가하므로 미리 악기를 정리하는 것이 안전합니다.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Notes</p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• Cadence는 패시브 상태에서 1마리만 등장합니다. Extreme에서도 기본 한계는 1마리입니다.</li>
                <li>• Trap Card 또는 레벨 50에서 ??? 대신 선택하면 1마리 제한을 우회할 수 있습니다.</li>
                <li>• 패시브 상태에서는 이동이나 처치가 불가능하며, 꾸준히 똑딱거리는 소리가 들립니다.</li>
                <li>• 악기 2개 이상이 남아 있으면 타이머가 감소하고, 1개 또는 0개일 때는 증가합니다.</li>
                <li>• 타이머 만료 시 분노 상태가 되며, 악기는 더 이상 생성되지 않습니다.</li>
                <li>• 플레이어를 처치하면 잠시 멈춘 뒤 다음 목표를 추적합니다.</li>
                <li>• Extreme에서는 분노 상태 속도가 130 studs/s로 증가합니다.</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
