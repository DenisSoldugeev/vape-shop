export const removeFirstPathSegment = (path: string): string => {
  const segments = path.split('/');
  return '/' + segments.slice(2).join('/');
};
