import React from "react";
const contentful = require("contentful");
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import UnderlineText from "components/ui/UnderlineText";

// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked block entries e.g. code blocks)
// INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)
// https://www.contentful.com/blog/rendering-linked-assets-entries-in-contentful/
function renderOptions(links) {
  // create an asset map
  const assetMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  // create an entry map
  const entryMap = new Map();
  // loop through the block linked entries and add them to the map
  for (const entry of links.entries.block) {
    entryMap.set(entry.sys.id, entry);
  }

  // loop through the inline linked entries and add them to the map
  for (const entry of links.entries.inline) {
    entryMap.set(entry.sys.id, entry);
  }

  return {
    // other options..
    renderMark: {
      [MARKS.BOLD]: (children) => {
        return <b className="font-extrabold">{children}</b>;
      },
      [MARKS.UNDERLINE]: (children) => {
        return <UnderlineText>{children}</UnderlineText>;
      },
      [MARKS.CODE]: (children) => {
        return (
          <span className="bg-red-400">
            <span className="font-mono text-gray">{children}</span>
          </span>
        );
      },
    },

    renderNode: {
      // other options...
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id);

        // render the entries as needed
        if (entry.__typename === "BlogPost") {
          return <a href={`/blog/${entry.slug}`}>{entry.title}</a>;
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id);

        // render the entries as needed by looking at the __typename
        // referenced in the GraphQL query
        if (entry.__typename === "CodeBlock") {
          return (
            <pre>
              <code>{entry.code}</code>
            </pre>
          );
        }
        if (entry.__typename === "VideoEmbed") {
          return (
            <iframe
              width="560"
              height="315"
              src={entry.embedUrl}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          );
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return <img src={asset.url} alt="My image alt text" />;
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="mt-2">{children}</p>;
      },
      [BLOCKS.HEADING_1]: (node, children) => {
        return <h1 className="text-xl font-bold">{children}</h1>;
      },
      [BLOCKS.QUOTE]: (node, children) => {
        return <div className="border-l-4 pl-3 ml-2 border-gray font-bold italic">{children}</div>;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a className="underline font-bold" href={node.data.uri}>
            {children}
          </a>
        );
      },
      // [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      //   console.log("NODE");
      //   console.log(node);
      //   return (
      //     <p className="mt-2">
      //       ASSET: {children} / {node.data.target.sys.id}
      //     </p>
      //   );
      // },
    },
  };
}

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="mt-2">{children}</p>;
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1 className="text-xl font-bold">{children}</h1>;
    },
    [BLOCKS.QUOTE]: (node, children) => {
      return <div className="border-l-4 pl-3 ml-2 border-gray font-bold italic">{children}</div>;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a className="underline font-bold" href={node.data.uri}>
          {children}
        </a>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      console.log("NODE");
      console.log(node);
      return (
        <p className="mt-2">
          ASSET: {children} / {node.data.target.sys.id}
        </p>
      );
    },
  },
  renderMark: {
    [MARKS.BOLD]: (children) => {
      return <b className="font-extrabold">{children}</b>;
    },
    [MARKS.UNDERLINE]: (children) => {
      return <UnderlineText>{children}</UnderlineText>;
    },
    [MARKS.CODE]: (children) => {
      return (
        <span className="bg-red-400">
          <span className="font-mono text-gray">{children}</span>
        </span>
      );
    },
  },
};

export default function trip({ data }) {
  const { trip } = data;
  return (
    <>
      <h1>{trip.title}</h1>
      <img src={`${trip.mainImage?.url}?fit=pad&w=200`} />
      {/* <ContentfulDocument document={trip.description.json} /> */}
      <div>{documentToReactComponents(trip.description.json, renderOptions(trip.description.links))}</div>
    </>
  );
}

export async function getStaticProps(context) {
  let trip = {};

  const query = `
  query {
    trip(id: "3TwqcEf4uf6kDWmnY5UjlB") {
      title
      description {
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
              __typename
              ... on VideoEmbed {
                embedUrl
                title
              }
            }
          }
          assets {
            block {
              sys {
                id
              }
              url
              title
              width
              height
              description
            }
          }
        }
      }
    }
  }
  
  `;

  let assetsIds = [];
  const assetsArray = [];

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
    trip = json.data;

    // const embededAssetBlocks = json.data.trip.description.json.content.filter(
    //   (el) => el.nodeType === "embedded-asset-block"
    // );
    // if (embededAssetBlocks) {
    //   console.log("🚀🚀🚀");
    //   console.log(embededAssetBlocks);
    //   console.log("🚀🚀🚀");
    //   embededAssetBlocks.forEach((el) => {
    //     assetsIds.push(el.data.target.sys.id);
    //   });
    //   const newQuery = `
    //   query {
    //     ${assetsIds
    //       .map(
    //         (el, ind) => `el${ind} : asset(id : "${el}") {
    //       sys {
    //         id
    //       }
    //       url
    //     }
    //     `
    //       )
    //       .filter((el) => el !== ",")}
    //     }
    //   `;
    //   console.log(newQuery);
    //   const assetsResponse = await fetch(
    //     "https://graphql.contentful.com/content/v1/spaces/9lwq5y1zam6x?access_token=j65pOJCqWBWD6f-7L3VLuWOMA_eRuX-43-PaK3hYnr0",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ query: newQuery }),
    //     }
    //   );
    //   const assetsJson = await assetsResponse.json();
    //   console.log(assetsJson);

    //   for (const key in assetsJson.data) {
    //     if (Object.hasOwnProperty.call(assetsJson.data, key)) {
    //       const element = assetsJson.data[key];
    //       assetsArray.push({ id: element.sys.id, url: element.url });
    //     }
    //   }
    //   console.log(assetsArray);
    // }
  } catch (error) {
    console.error(error);
  }
  return {
    props: { data: trip }, // will be passed to the page component as props
  };
}
