import SlideViewer from '@/components/SlideViewer'
import FirstPage from '@/components/FirstPage'

const slides = [
  {
    title: '제단 활용법 - 소개',
    content: '제단은 게임의 핵심 요소입니다. 효과적으로 활용하세요.',
  },
  {
    title: '제단 선택 기준',
    content: '현재 상황에 맞는 버프를 선택. 체력이 낮으면 회복 우선.',
  },
  {
    title: '활용 팁',
    content: '제단은 한 번만 사용할 수 있으니 신중히. 팀원과 협의.',
  },
  {
    title: '고급 전략',
    content: '여러 제단을 조합해 시너지를 내세요.',
  },
  {
    title: '결론',
    content: '제단을 전략적으로 사용하면 승률이 올라갑니다.',
  },
]

export default function AltarsPage() {
  return (
    <main className="min-h-screen p-8">
      <FirstPage title="제단 활용법" subtitle="제단 선택과 활용" icon="A" />
      <SlideViewer slides={slides} />
    </main>
  )
}
