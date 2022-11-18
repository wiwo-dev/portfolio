import React from "react";
const contentful = require("contentful");
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import UnderlineText from "components/ui/UnderlineText";

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
      <div>{documentToReactComponents(trip.description.json, RICHTEXT_OPTIONS)}</div>
    </>
  );
}

export async function getStaticProps(context) {
  let trip = {};

  const query = `
  query {
    trip(id: "3TwqcEf4uf6kDWmnY5UjlB") {
      title
      startDate
      mainImage {
        url
      }
      imagesCollection {
        items {
          url
        }
      }
      description {
        json
      }
    }
  }
  `;

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
  } catch (error) {
    console.error(error);
  }
  return {
    props: { data: trip }, // will be passed to the page component as props
  };
}

const ContentfulParagraph = ({ paragraph }) => {
  const { content } = paragraph;
  return (
    <>
      {content.map((el, ind) => (
        <span key={ind}>{el.value}</span>
      ))}
    </>
  );
};

const ContentfulDocument = ({ document }) => {
  const { content } = document;

  return (
    <>
      {content.map((el, ind) => (
        <p key={ind}>
          <ContentfulParagraph key={ind} paragraph={el}></ContentfulParagraph>
        </p>
      ))}
    </>
  );
};
