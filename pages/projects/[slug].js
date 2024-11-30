import { renderOptions } from "utils/contentful";

export async function getStaticPaths() {
  const query = `
    query {
        projectCollection(limit: 50) {
          items {
            sys {
                id
            }
            title
            slug
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

  return {
    paths: data.projectCollection.items.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const query = `
  query {
    projects: projectCollection(limit: 50, order: position_ASC) {
      items {
        sys {
          id
        }
        title
        slug
        technologies
        headline
        description
        year
        cta
        githubUrl
        projectUrl
        logo {
          url
          width
          height
        }
      }
    }
    projectCollection(where: {slug: "${slug}"}, limit: 1) {
      items {
        sys {
          id
        }
        title
        headline
        slug
        githubUrl
        projectUrl
        year
        cta
        logo {
          url
          width
          height
        }
        technologies
        body {
          json
          links {
            entries {
              inline {
                sys {
                  id
                }
              }
              block {
                sys {
                  id
                }
              }
            }
            assets {
              block {
                sys {
                  id
                }
                title
                url
                width
                height
                description
              }
            }
          }
        }
      }
    }
  }
  `;
  let project = {};
  let projects = [];
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
    //console.log(json);
    project = json.data.projectCollection.items[0];
    projects = json.data.projects.items.map((project) => ({
      title: project.title,
      picture: project.logo.url,
      description: project.description,
      technologies: project.technologies,
      href: `/projects/${project.slug}`,
      year: project.year,
      cta: project.cta,
      githubUrl: project.githubUrl,
      projectUrl: project.projectUrl,
    }));
  } catch (error) {
    console.log(error);
  }

  return {
    // Passed to the page component as props
    props: { project, projects },
    revalidate: 60,
  };
}

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "components/Navbar/Navbar";
import { Button } from "components/ui";
import { ProjectHeader } from "components/project";
import { ArrowRight, GithubIcon } from "components/Icons";
import { FooterSection, ProjectsSection } from "components/sections";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

export default function Project({ project, projects }) {
  const topButtonsRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: topButtonsRef,
    offset: ["end start", "end -50px"],
  });

  const Buttons = () => {
    return (
      <div className="mx-auto max-w-screen-xl px-[32px] flex flex-wrap gap-5 py-8 justify-center md:justify-start">
        <Button href={project.projectUrl} target="_blank">
          <span className="flex items-center gap-2">
            OPEN THE PROJECT <ArrowRight color="black" />
          </span>
        </Button>
        {project.githubUrl && (
          <Button variant="light" href={project.githubUrl} target="_blank">
            <span className="flex items-center gap-3">
              CHECK THE CODE
              <GithubIcon color="black" size={24} />
            </span>
          </Button>
        )}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <ProjectHeader
        title={project.title}
        subline={project.headline}
        year={project.year}
        image={
          <Image
            src={project.logo?.url}
            width={project.logo.width}
            height={project.logo.height}
            className="w-[200px]"
            alt="logo"
          />
        }
      />
      <div ref={topButtonsRef}>
        <Buttons />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between mx-auto max-w-screen-xl px-[32px] min-h-[80vh] gap-20 py-10">
        <div className="prose max-w-full">
          {documentToReactComponents(project.body.json, renderOptions(project.body.links))}
        </div>
        <div className="md:w-[30%]">
          <div className="sticky top-14">
            <h3 className="font-bold mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {project.technologies.map((el, ind) => (
                <span key={ind} className="bg-yellow-base px-[16px] py-[8px] rounded-3xl antialiased whitespace-nowrap">
                  {el}
                </span>
              ))}
            </div>
            <motion.div style={{ opacity: scrollYProgress }} className="w-full mt-5">
              <div className="mx-auto max-w-screen-xl flex flex-wrap gap-5 py-8 justify-center md:justify-start">
                <Button href={project.projectUrl} target="_blank">
                  <span className="flex items-center gap-2">
                    OPEN THE PROJECT <ArrowRight color="black" />
                  </span>
                </Button>
                {project.githubUrl && (
                  <Button variant="light" href={project.githubUrl} target="_blank">
                    <span className="flex items-center gap-3">
                      CHECK THE CODE
                      <GithubIcon color="black" size={24} />
                    </span>
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ProjectsSection projects={projects} />
      <FooterSection />
      {/* <div>{documentToReactComponents(project.body.json, renderOptions(project.body.links))}</div>
      <pre>{JSON.stringify(project, null, 2)}</pre> */}
    </>
  );
}
