export interface IMenuItem {
  name: string;
  action: <T = any>() => void | Promise<T>;
}
