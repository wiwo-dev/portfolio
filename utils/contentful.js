import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import UnderlineText from "components/ui/UnderlineText";
import Image from "next/image";

// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked block entries e.g. code blocks)
// INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)
// https://www.contentful.com/blog/rendering-linked-assets-entries-in-contentful/
export function renderOptions(links) {
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
        return <UnderlineText color="yellow-base">{children}</UnderlineText>;
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
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          );
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);
        // render the asset accordingly
        return <Image src={asset.url} alt={asset.title} width={asset.width} height={asset.height} />;
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="">{children}</p>;
      },
      [BLOCKS.HEADING_1]: (node, children) => {
        return <h1 className="text-xl font-bold">{children}</h1>;
      },
      [BLOCKS.QUOTE]: (node, children) => {
        return <div className="border-l-4 pl-3 ml-2 border-gray font-bold italic">{children}</div>;
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return <ul className="list-disc">{children}</ul>;
      },
      [BLOCKS.OL_LIST]: (node, children) => {
        return <ol className="list-decimal">{children}</ol>;
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <li className="list-item">{children}</li>;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a className="underline font-bold" href={node.data.uri}>
            {children}
          </a>
        );
      },
    },
  };
}
