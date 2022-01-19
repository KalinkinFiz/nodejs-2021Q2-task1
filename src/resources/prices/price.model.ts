export class Price {
  id: String;
  scheduleId: String;
  priceValue: Number;
  priceCurrency: String;
  createdAt: String;
  updatedAt: String;

  constructor(
    id: String = 'id',
    scheduleId: String = 'scheduleId',
    priceValue: Number = 1,
    priceCurrency: String = 'priceCurrency',
    createdAt: String = 'createdAt',
    updatedAt: String = 'updatedAt',
  ) {
    this.id = id;
      this.scheduleId = scheduleId;
      this.priceValue = priceValue;
      this.priceCurrency = priceCurrency;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
  }

  static toResponse(price: Price) {
    const { id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt } = price;
    return { id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt };
  }
}

// module.exports = Price;
