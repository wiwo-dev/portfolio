import { ProjectsSection } from "components/sections";
import React from "react";

export default function Page({ projects }) {
  return (
    <>
      <ProjectsSection projects={projects} />
    </>
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
  }));
  console.log(projects);
  return {
    props: {
      projects,
    },
    revalidate: 30, // In seconds
  };
}
