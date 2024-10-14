import ProjectDetail from '@/components/Projects/ProjectDetail';
import React from 'react'

const projects = [
    { image: '/ex-findiful.png', alt: 'findiful', defaultText: 'Findiful', hoverText: 'Findiful', tech: ['NodeJs', 'ElectronJs', 'React', 'Firebase', 'Stripe'], website: 'https://findiful.com'},
    { image: '/ex-epc247.png', alt: 'epc247', defaultText: 'EPC247', hoverText: 'EPC247',tech: ['NextJs', 'Styled Components', 'tailwind', 'Firebase', 'Strapi CMS'], website: 'https://epc247.be'},
    { image: '/ex-naturesglitch.png', alt: 'naturesglitch', defaultText: 'Natures Glitch', hoverText: 'NaturesGlitch', tech: ['NextJs', 'NodeJs', 'Tailwind', 'CMS', 'nginx', 'mysql'], website: null},
    { image: '/ex-nightshop.png', alt: 'nsapp', defaultText: 'Nightshop App', hoverText: 'Nightshop App', tech: ['NextJs', 'Tailwind', 'Google maps API', 'IN PROGRESS...'], website: 'https://stingray-app-3ozgo.ondigitalocean.app'},
    { image: '/ex-taxirover.png', alt: 'taxirover', defaultText: 'Taxi Rover', hoverText: 'Taxi Rover', tech: ['React', 'NextJs', 'Tailwind', 'wordpress'], website: null},

  ];

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.alt, 
        project: project
    }))
  }

function page({params}) {
    const {slug, project} = params;
    const filteredProject = slug
    ? projects.filter(project => project.alt.toLowerCase().includes(slug.toLowerCase()))
    : projects;
  return (
    <div>
        <ProjectDetail project={filteredProject[0]}/>
    </div>
  )
}

export default page