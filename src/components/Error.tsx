import { RouterProps } from "preact-router";

export function Error({ url }: RouterProps) {
    return (
        <section class="error grid justify-center py-16">
            <p>Oops that page does not exist.</p>
            <pre>{url}</pre>
        </section>
    );
}
