"use client"
import About from '@/components/About'
import CTA from '@/components/CTA'
import Countdown from '@/components/Countdown'
import Hero from '@/components/Hero'
import Hobbies from '@/components/Hobbies'
import MenuBox from '@/components/MenuBox'
import { menuBoxes } from '@/constants/menus'
import { MusicProvider } from '@/contexts/MusicContext'

export default function Home() {
  return (
    <MusicProvider>
      <main>
        <Hero />
        <Countdown />
        <About />
        <Hobbies />
        <CTA />
        {/* <div className="h-screen flex flex-col items-center justify-center">
          <h1>Welcome to <strong>Thu Hue's</strong> world!</h1>
          <div className="grid grid-cols-2 mt-8 gap-4">
            {
              menuBoxes.map((box, index) => <MenuBox key={index} box={box} />)
            }
          </div>
        </div> */}
      </main>
    </MusicProvider>
  )
}
