class Price {
    constructor({
      id = 'id',
      scheduleId = 'scheduleId',
      priceValue = 1,
      priceCurrency = 1,
      createdAt = 'None',
      updatedAt = 'None'
    } = {}) {
      this.id = id;
      this.scheduleId = scheduleId;
      this.priceValue = priceValue;
      this.priceCurrency = priceCurrency;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  
    static toResponse(price) {
      const { id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt } = price;
      return { id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt };
    }
  }
  
  module.exports = Price
;