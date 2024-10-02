import { hydrate, prerender as ssr } from 'preact-iso';
import { App } from "./app.tsx";
import "./index.css";

if (typeof window !== 'undefined') {
    // @ts-expect-error
    hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data: any) {
    const { url } = data;
    const { html, links } = await ssr(<App {...data} />);

    let title, description;
    if (url === '/') {
        title = 'Abhishek Govindarasu - Home';
        description = "Hi, I'm Abhishek Govindarasu. a developer, computer science student, and a CTF player.";
    }
    else if (url === '/projects') {
        title = 'Abhishek Govindarasu - Projects';
        description = "Here are some of the projects I have worked on, I have many more work in progress projects that I will be adding soon!";
    } 
    else {
        title = 'Abhishek Govindarasu - 404';
        description = "The page you are looking for does not exist.";
        console.error(`404: ${url}`);
    }

    return {
        html,
        links,
        head: {
            lang: 'en',
            title: title,
            elements: new Set([
                { type: 'meta', props: { charset: 'UTF-8' } },
                { type: 'link', props: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
                { type: 'link', props: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' } },
                { type: 'link', props: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' } },
                { type: 'link', props: { rel: 'manifest', href: '/site.webmanifest' } },
                { type: 'meta', props: { name: 'viewport', content: 'width=device-width, initial-scale=1.0' } },
                { type: 'meta', props: { name: 'title', content: title } },
                { type: 'meta', props: { name: 'description', content: description } },
                { type: 'meta', props: { property: 'og:type', content: 'website' } },
                { type: 'meta', props: { property: 'og:url', content: 'https://ahh.bet/' } },
                { type: 'meta', props: { property: 'og:title', content: title } },
                { type: 'meta', props: { property: 'og:description', content: description } },
                { type: 'meta', props: { property: 'twitter:card', content: 'summary_large_image' } },
                { type: 'meta', props: { property: 'twitter:url', content: 'https://ahh.bet/' } },
                { type: 'meta', props: { property: 'twitter:title', content: title } },
                { type: 'meta', props: { property: 'twitter:description', content: description } },
                { type: 'meta', props: { name: 'theme-color', content: '#131E16' } }
            ])
        }
    };
}
