import { RouterProps } from "preact-router";
import { routerPage } from "../signals/RouterPageSignal";

export function Error({ url }: RouterProps) {
    routerPage.value = "Error";

    return (
        <section class="error w-full pt-10 pb-8 flex flex-col justify-center items-center container max-w-[600px] p-4 my-4 m-[0_auto]">
            <p>Oops that page does not exist. If you are seeing this now, its probably cause this site is still in development, check back later!</p>
            <br />
            <pre>{url}</pre>
        </section>
    );
}
