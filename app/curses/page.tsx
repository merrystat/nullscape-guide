import SlideViewer from '@/components/SlideViewer'
import FirstPage from '@/components/FirstPage'

const slides = [
  {
    title: '저주 선택 가이드 - 소개' ,
    content: 'Nullscape에서 저주 선택은 게임의 난이도와 플레이 스타일을 결정합니다. 이 가이드를 통해 최적의 저주를 선택하세요.',
  },
  {
    title: '저주 유형 1: 공격형',
    content: '공격력을 높이는 저주. 빠른 클리어를 원한다면 추천.',
  },
  {
    title: '저주 유형 2: 방어형',
    content: '체력과 방어력을 높이는 저주. 생존에 초점을 맞춘 플레이어에게 적합.',
  },
  {
    title: '저주 유형 3: 유틸리티형',
    content: '이동속도나 회복력을 높이는 저주. 전략적인 플레이를 즐기는 분에게.',
  },
  {
    title: '결론',
    content: '자신의 플레이 스타일에 맞는 저주를 선택하세요. 게임을 즐기면서 최적의 선택을 하세요!',
  },
]

export default function CursesPage() {
  return (
    <main className="min-h-screen p-8">
      <FirstPage title="저주 선택 가이드" subtitle="저주 선택을 돕는 가이드" icon="C" />
      <SlideViewer slides={slides} />
    </main>
  )
}