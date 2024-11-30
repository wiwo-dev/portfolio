import Head from "next/head";
import Navbar from "components/Navbar/Navbar";

import {
  HeroHeader,
  IntroSection,
  AboutMeSection,
  TechnologiesSection,
  TheProcessSection,
  ProjectsSection,
  ContactSection,
  FooterSection,
  WhatICanHelpYouWithSection,
} from "../components/sections";

export default function Home({ projects }) {
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroHeader />
      <IntroSection />
      <WhatICanHelpYouWithSection />
      <AboutMeSection id="aboutme" />
      <section className="bg-gray -mt-[250px] pt-[240px]"></section>
      <ProjectsSection id="projects" projects={projects} />
      <section className="bg-gray pb-20 lg:pb-28"></section>
      <ContactSection id="contact" />
      <FooterSection />
    </div>
  );
}

export async function getStaticProps() {
  const query = `
    query {
        projectCollection(limit: 50, order: position_ASC) {
          items {
            sys {
                id
            }
            title
            slug
            technologies
            headline
            description
            githubUrl
            projectUrl
            cta
            year
            logo {
                url
                width
                height
              }
          }
        }
      }
    `;

  let data;

  try {
    const response = await fetch(
      "https://graphql.contentful.com/content/v1/spaces/9lwq5y1zam6x?access_token=j65pOJCqWBWD6f-7L3VLuWOMA_eRuX-43-PaK3hYnr0",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }
    );
    const json = await response.json();
    data = json.data;
  } catch (error) {
    console.error(error);
  }
  const projects = data.projectCollection.items.map((project) => ({
    title: project.title,
    picture: project.logo.url,
    description: project.description,
    technologies: project.technologies,
    href: `/projects/${project.slug}`,
    cta: project.cta,
    githubUrl: project.githubUrl,
    projectUrl: project.projectUrl,
    year: project.year,
  }));

  return {
    props: {
      projects,
    },
    revalidate: 30, // In seconds
  };
}
