export interface ISimpleRequest {
  headers: {};
  parsedUrl: {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    readonly origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    readonly searchParams: any;
    username: string;
    toString: () => string;
    toJSON: () => string;
  };
  body?: string | object | Buffer;
}

export interface ISimpleResponse {
  headers: { [key: string]: string };
  body: string;
}
export type IRenderFunction = (req: ISimpleRequest) => Promise<ISimpleResponse>;
