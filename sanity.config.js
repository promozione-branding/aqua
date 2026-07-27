// sanity.config.js
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";


const blog = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "date", title: "Publish Date", type: "datetime" },
    { name: "excerpt", title: "Excerpt", type: "text" },

 
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [


 {
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              {
                name: "href",
                title: "URL",
                type: "url",
              },
            ],
          },

              {
                name: "color",
                title: "Text Color",
                type: "object",
                fields: [
                  {
                    name: "hex",
                    title: "Hex Color",
                    type: "string",
                  },
                ],
              },
            ],
          },
        },
      ],
    },

    // ✅ SEO Fields
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "SEO title for search engines (max ~60 characters)",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      description: "SEO description for search engines (max ~160 characters)",
    },
  ],
};

const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
};

export default defineConfig({
  name: "JNJaqua-studio",
  title: "JNJ Aqua Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-06-01",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  
  schema: {
    types: [blog], // ✅ Blog now includes SEO fields
  },
  
});
