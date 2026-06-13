import PageNavArrows from '@/components/PageNavArrows'

export default function HuskPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Husk</h1>

        <div className="grid gap-8">
          <article className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                <div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">이름</p>
                      <h2 className="text-4xl font-bold text-slate-900">Husk</h2>
                    </div>
                    <div className="rounded-3xl bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-700 ring-1 ring-red-200">
                      난이도: 3
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">선택 가능 조건</p>
                      <p className="mt-2 text-sm text-slate-700">최소 레벨 1 도달</p>
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
                          <span className="text-slate-700">한 번에 2마리 스폰되어 히트박스가 넓어짐</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">관련 저주</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2 curse-list">
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">키 큰 허스크</a>
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">더 가까운 허스크</a>
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">더 먼 허스크</a>
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">무작위 허스크</a>
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">콩가 라인</a>
                        <a href="/curses" className="rounded-2xl border p-3 text-center text-sm font-medium transition">허스크 열차</a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <a href="/enemies/baby" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      ← Baby 페이지
                    </a>
                    <a href="/enemies/icbm" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                      ICBM 페이지 →
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="aspect-[4/3] rounded-3xl border border-slate-200 bg-slate-50 text-slate-500 flex items-center justify-center text-center p-4">
                    <span className="text-sm">Husk 이미지 자리</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-slate-700">
                <div>
                  <p className="text-sm font-semibold text-slate-900">외형</p>
                  <p className="mt-2">플레이어 형태를 흉내 낸 어두운 보라색 적입니다. 두 개의 눈과 긴 턱에 진주 같은 흰 이가 돋보입니다.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">특징</p>
                  <p className="mt-2">플레이어의 움직임을 그대로 따라오며, 1.2초의 딜레이를 가집니다. 접촉 시 즉사하며, 클라이언트 측에서 동작하기 때문에 다른 플레이어에게는 보이지 않습니다.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">회피법</p>
                  <p className="mt-2">되돌아가지 않는 경로를 만들고 움직임을 유지하세요. 가만히 있지 마세요. 장애물이 아니라 경로 자체를 관리하는 것이 더 안전합니다.</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">팁</p>
                  <p className="mt-2">레벨 시작 시 이동하지 않으면 Husk가 스폰되지 않으니, 처음에 경로를 확인한 뒤 이동을 시작하세요. 긴 트레일이 있다면 되돌아갈 때 유리합니다.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Notes</p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• 뒤로 돌아가는 경로를 피하면 Husk를 상대하기 쉬워집니다.</li>
                <li>• 점프로 Husk를 뛰어넘을 수 있습니다.</li>
                <li>• 긴 트레일은 되돌아가는 상황에서 도움이 됩니다.</li>
                <li>• 허스크가 여러 마리 있다면 허스크들끼리 따라오며 줄을 형성합니다.</li>
              </ul>
            </div>
            <PageNavArrows />
          </article>
        </div>
      </div>
    </main>
  )
}
