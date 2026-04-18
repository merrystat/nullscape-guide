import SlideViewer from '@/components/SlideViewer'

const slides = [
  {
    title: 'Mart',
    content: 'Mart는 레벨 1부터 선택되는 적으로, 파란 슬라임 같은 생물입니다. 플레이어에게 천천히 다가오며, 접촉 시 즉사하고 벽을 통과할 수 있습니다. 가까이 있을 때 소리가 나므로 주의하세요. 느린 속도로 큰 위협이 아니지만, 관련 저주 Mart Slide가 활성화되면 더 빠르고 위협적입니다.',
  },
  {
    title: 'Bell',
    content: 'Bell은 레벨 1부터 선택되는 적으로, 금속 종 모양입니다. 플레이어 근처로 랜덤 텔레포트하며, 접촉 시 플레이어를 위로 튀어오르게 하고 모든 플레이어의 시야를 방해합니다. 직접 죽이지 않지만, Flesh 감염을 제거합니다. 관련 저주 More Ringing이 활성화되면 적이 종을 울릴 수 있습니다.',
  },
  {
    title: 'Baby',
    content: 'Baby는 레벨 1부터 선택되는 적으로, 아기 얼굴 마스크를 쓴 해골 같은 생물입니다. 가장 가까운 플레이어에게 직선으로 돌진하며, 접촉 시 즉사합니다. 빨간 점선과 알람 소리로 표시됩니다. 관련 저주 Pacifier는 빨간 점선을 숨기고, Problem Child는 돌진 방향을 불규칙적으로 바꾸며 웃는 소리를 냅니다.',
  },
  {
    title: 'ICBM',
    content: 'ICBM은 레벨 1부터 선택되는 적으로, 원거리 미사일 형태입니다. 일정 거리에서 폭발하며 주변을 넉백시켜 피해를 줍니다. 가까이 있으면 즉시 피격될 수 있으니 주의하세요. 관련 저주 None은 이 적의 기본 위협을 높입니다.',
  },
  {
    title: '보스형 적',
    content: '패턴 파악 후 약점 공격. 팀워크 중요.',
  },
  {
    title: '결론',
    content: '적의 유형을 파악하고 적절한 대응을 하세요.',
  },
]

export default function EnemiesPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">적 대응법</h1>
      <SlideViewer slides={slides} />
    </main>
  )
}