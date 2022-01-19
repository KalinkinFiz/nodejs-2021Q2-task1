export interface TPrice {
  id: String;
  scheduleId: String;
  priceValue: Number;
  priceCurrency: String;
  createdAt: String;
  updatedAt: String;
}

export interface TPriceModel extends TPrice {
  id: string;
}

export interface TPricePartial extends Partial<TPrice> {}
