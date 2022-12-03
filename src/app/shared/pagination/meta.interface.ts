export interface MetaPagination {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface EntityListResponse<T> {
  items: T[];
  meta: MetaPagination;
}

export class MetaPaginationModel implements MetaPagination {
  totalItems: number = 0;
  itemCount: number = 0;
  itemsPerPage: number = 0;
  totalPages: number = 0;
  currentPage: number = 0;
}

export interface IPagination {
  page?: number;
  limit?: number;
}