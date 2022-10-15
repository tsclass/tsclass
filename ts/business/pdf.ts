export interface IPdf {
  name: string;
  id: string;
  metadata: {
    textExtraction: string;
  };
  buffer: ArrayBufferLike;
}
