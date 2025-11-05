export const isErrorPage = (path: string | undefined): boolean => {
  if (!path) return false;
  return (
    !["/", "/projects", "/blog"].includes(path) && !path.startsWith("/blog/")
  );
};
