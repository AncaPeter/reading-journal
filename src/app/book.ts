export interface Book {
  id: number;
  title: string;
  author: string,
  seriesName?: string,
  nrOfPages?: number,
  publicationDate?: Date
}
