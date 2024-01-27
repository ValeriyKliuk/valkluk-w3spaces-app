export const getPath = (path: string | undefined) =>
  path ? path.replace('/', '') : '/';

export const errorMessage = (page: string) =>
  `Oops! There was an error on the ${page} page.`;
