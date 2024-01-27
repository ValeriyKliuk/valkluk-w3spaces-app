export const getPath = (path: string | undefined) =>
  path != null ? path.replace('/', '') : '/'

export const errorMessage = (page: string) =>
  `Oops! There was an error on the ${page} page.`
