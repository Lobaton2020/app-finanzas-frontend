export const buildQueryPaginator = (page: number, limit: number) => {
  return `?page=${(page || 0) + 1}&limit=${limit || 0}`;
};
