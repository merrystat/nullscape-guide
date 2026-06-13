import SlideViewer from '@/components/SlideViewer'
import FirstPage from '@/components/FirstPage'

const slides = [
  {
    title: '클래스별 플레이 팁 - 소개',
    content: 'Nullscape의 클래스별 특징과 플레이 방법을 알아보세요.',
  },
  {
    title: '전사 클래스',
    content: '근접 전투에 강함. 탱킹과 딜링을 담당.',
  },
  {
    title: '마법사 클래스',
    content: '원거리 마법 공격. 전략적 위치 선점 중요.',
  },
  {
    title: '치유사 클래스',
    content: '팀 서포트. 체력 관리와 버프 제공.',
  },
  {
    title: '결론',
    content: '클래스에 맞는 역할을 수행하며 팀 플레이를 즐기세요.',
  },
]

export default function ClassesPage() {
  return (
    <main className="min-h-screen p-8">
      <FirstPage title="클래스별 플레이 팁" subtitle="클래스별 특징과 팁" icon="K" />
      <SlideViewer slides={slides} />
    </main>
  )
}
