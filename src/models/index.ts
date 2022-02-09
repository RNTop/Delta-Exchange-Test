export * from './navigation';

export interface IBuyItem {
  limit_price: string;
  size: string;
  depth: string;
}
export interface ISellItem {
  limit_price: string;
  size: string;
  depth: string;
}

export enum ORDERBOOK_TYPE {
  BUY = 'BUY',
  SELL = 'SELL',
  BOTH = 'BOTH',
}
