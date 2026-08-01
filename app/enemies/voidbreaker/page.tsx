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
                    <div>
                      <p className="text-sm font-semibold text-slate-900">대응</p>
                      <p className="mt-2">검의 발사 방향에서 벗어나면 안전합니다. 점프/낙하로는 회피되지 않으니 수평 이동으로 회피하세요.</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">선택 가능 조건</p>
                      <p className="mt-2 text-sm text-slate-700">최소 레벨 15 도달</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">난이도별 변화</p>
                      <div className="mt-2 flex flex-col gap-2">
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Casual</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">1 sword per volley</span>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Standard</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">2 swords per volley</span>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm flex gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">Extreme</span>
                          <span className="text-slate-400">—</span>
                          <span className="text-slate-700">Each volley fires 2 swords; an additional volley is added</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">관련 저주</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2 curse-list">
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">블레이드 회전목마</a>
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition curse-yellow">검의 발레</a>
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition curse-yellow">블레이드 폭격</a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-between">
                    <a href="/enemies/cadence" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      ← Cadence 페이지
                    </a>
                    <a href="/enemies/sigil" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      Sigil 페이지 →
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
                  <p className="mt-2">검과 붉은 보석이 박힌 긴 검을 든 갑옷 입은 기사 모습입니다. 손잡이는 가시 형태로 장식되어 있으며, 어두운 분위기의 모델입니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">특징</p>
                  <p className="mt-2">플레이어 근처에 나타나 검을 소환한 뒤 일정 시간 후 검을 발사합니다. 검은 지정 방향으로 공격하며 추가 스택은 등장 빈도를 높입니다. 클라이언트 사이드 적으로 레벨 15부터 등장합니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">회피법</p>
                  <p className="mt-2">검의 발사 방향에서 벗어나 수평으로 이동해 피하세요. 점프나 낙하로는 회피되지 않습니다. 벽이나 지형으로 검을 가려 피해를 줄일 수 있습니다.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">팁</p>
                  <p className="mt-2">등 뒤의 검은 보통 무시해도 괜찮고, 빠른 이동 능력이 있으면 회피가 쉬워집니다. 관련 강화(예: Ballet of Blades, Blade Bombardment)가 조합될 경우 난이도가 달라질 수 있으니 주의하세요.</p>
                </div>
                
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
