import NavBar from '@/components/Navbar'
import ProjectThumbnail from '@/components/Projects/ProjectThumbnail'
import ProjectsContainer from '@/components/Projects/ProjectsContainer'
import ProjectsContainerTwo from '@/components/Projects/ProjectsContainerTwo'
import Hero from '@/components/hero/Hero'
import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'


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
