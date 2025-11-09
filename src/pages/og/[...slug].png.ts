import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import fs from "fs/promises";
import path from "path";
import satori from "satori";
import sharp from "sharp";

export async function getStaticPaths() {
  const posts = await getCollection("blog");

  const paths: Array<{
    params: { slug: string };
    props: { title: string; subtitle?: string };
  }> = [
    {
      params: { slug: "home" },
      props: {
        title: "Abhishek Govindarasu",
        subtitle: "Software Engineer & Security Researcher",
      },
    },
    {
      params: { slug: "blog" },
      props: {
        title: "Technical Writings",
        subtitle: "CTF writeups and security research",
      },
    },
    {
      params: { slug: "projects" },
      props: { title: "Projects", subtitle: "Engineering and security work" },
    },
  ];

  posts.forEach((post) => {
    paths.push({
      params: { slug: post.slug },
      props: { title: post.data.title },
    });
  });

  return paths;
}

export const GET: APIRoute = async ({ props }) => {
  const { title, subtitle } = props;

  const fontSize = title.length > 60 ? 48 : title.length > 40 ? 56 : 64;

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          padding: "100px",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0a1f12 0%, #1a2e1a 50%, #0e2612 100%)",
          fontFamily: "Inter",
          overflow: "hidden",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                bottom: "-150px",
                right: "-150px",
                display: "flex",
                width: "500px",
                height: "500px",
                opacity: 0.15,
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      position: "absolute",
                      width: "500px",
                      height: "500px",
                      borderRadius: "50%",
                      border: "2px solid rgba(103, 215, 142, 0.6)",
                    },
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      position: "absolute",
                      width: "400px",
                      height: "400px",
                      borderRadius: "50%",
                      border: "2px solid rgba(59, 130, 246, 0.5)",
                      top: "50px",
                      left: "50px",
                    },
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      position: "absolute",
                      width: "300px",
                      height: "300px",
                      borderRadius: "50%",
                      border: "2px solid rgba(168, 85, 247, 0.4)",
                      top: "100px",
                      left: "100px",
                    },
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                maxWidth: "1000px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: `${fontSize}px`,
                      fontWeight: 700,
                      color: "#ffffff",
                      lineHeight: 1.1,
                      marginBottom: subtitle ? "24px" : "0",
                    },
                    children: title,
                  },
                },
                subtitle && {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "32px",
                      color: "rgba(103, 215, 142, 0.8)",
                      fontWeight: 400,
                    },
                    children: subtitle,
                  },
                },
              ].filter(Boolean),
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "16px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "rgba(103, 215, 142, 0.2)",
                      border: "2px solid rgba(103, 215, 142, 0.4)",
                    },
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "24px",
                      color: "rgba(255, 255, 255, 0.7)",
                      fontWeight: 500,
                    },
                    children: "ahh.bet",
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: await fs.readFile(
            path.resolve(
              "./node_modules/@fontsource/inter/files/inter-latin-400-normal.woff",
            ),
          ),
          weight: 400,
          style: "normal",
        },
        {
          name: "Inter",
          data: await fs.readFile(
            path.resolve(
              "./node_modules/@fontsource/inter/files/inter-latin-700-normal.woff",
            ),
          ),
          weight: 700,
          style: "normal",
        },
      ],
    },
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png as unknown as BodyInit, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
