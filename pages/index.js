import HomePageHeader from '../components/header'
import AboutSection from '../components/home/about'
import ContactSection from '../components/home/contact'



export default function Home() {
  return (
    <div>
      <HomePageHeader />
      <AboutSection />
      <ContactSection />
      <div className='bg-red-500'>
        <h1>part2</h1>
      </div>

    </div>
  )
}
