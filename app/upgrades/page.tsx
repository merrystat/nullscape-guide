import SlideViewer from '@/components/SlideViewer'

const slides = [
  {
    title: '초반 업그레이드 우선순위 - 소개',
    content: 'Nullscape 초반에 올바른 업그레이드를 선택하면 게임이 훨씬 수월해집니다. 이 가이드를 참고하세요.',
  },
  {
    title: '1순위: 체력 업그레이드',
    content: '체력을 먼저 올리면 생존율이 높아집니다. 초반에 추천.',
  },
  {
    title: '2순위: 공격력 업그레이드',
    content: '적을 빠르게 처치할 수 있어 클리어 속도가 빨라집니다.',
  },
  {
    title: '3순위: 이동속도 업그레이드',
    content: '맵 탐험이 용이해지며, 전략적 플레이에 유리.',
  },
  {
    title: '결론',
    content: '업그레이드는 상황에 따라 조정하세요. 균형 잡힌 선택이 중요합니다.',
  },
]

export default function UpgradesPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">초반 업그레이드 우선순위</h1>
      <SlideViewer slides={slides} />
    </main>
  )
}