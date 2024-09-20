import { effect, signal } from "@preact/signals";

export const urlSignal = signal<string>(window.location.pathname);

effect(() => {
  const listener = () => {
    urlSignal.value = window.location.pathname;
  };
  window.addEventListener("popstate", listener);
  return () => window.removeEventListener("popstate", listener);
});
