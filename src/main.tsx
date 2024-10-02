import { hydrate, prerender as ssr } from 'preact-iso';
import { App } from "./app.tsx";
import "./index.css";

if (typeof window !== 'undefined') {
    // @ts-expect-error
    hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data: any) {
    return await ssr(<App {...data} />)
}
