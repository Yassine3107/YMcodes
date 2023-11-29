import NavBar from '@/components/Navbar'
import ProjectThumbnail from '@/components/Projects/ProjectThumbnail'
import ProjectsContainer from '@/components/Projects/ProjectsContainer'
import ProjectsContainerTwo from '@/components/Projects/ProjectsContainerTwo'
import Hero from '@/components/hero/Hero'
import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'

export const metadata = {
  title: "I specialize in websites and desktop apps, transforming ideas into sleek, interactive, and user-friendly experiences.",
  description: "Welcome to my corner of the digital realm. I specialize in websites and desktop apps, transforming ideas into sleek, interactive, and user-friendly experiences. Join me on a journey where innovation meets functionality."
};

export default function Home() {
  return (
    <main>
      <Hero/>
      {/* <ProjectsContainer>
        <ProjectThumbnail/>
      </ProjectsContainer> */}
      <About/>
      <ProjectsContainerTwo/>
      <Contact/>
    </main>
  )
}
