import { routerPage } from "../signals/RouterPageSignal";
import type { RoutableProps } from "preact-iso";
export function Error({ path }: RoutableProps) {
  routerPage.value = "Error";

  return (
    <section class="error w-full pt-16 pb-8 flex flex-col justify-center items-center container max-w-[600px] p-4 my-4 m-[0_auto] z-20">
      <p>
        Oops that page does not exist. If you are seeing this now, its probably
        cause this site is still in development, check back later!
      </p>
      <br />
      <pre>{path}</pre>
    </section>
  );
}
