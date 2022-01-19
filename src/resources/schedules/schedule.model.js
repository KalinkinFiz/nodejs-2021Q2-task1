class Schedule {
    constructor({
      id = 'id',
      tourId = 'productId',
      isActive = true,
      startDate = 'None',
      endDate = 'None',
      createdAt = 'None',
      updatedAt = 'None'
    } = {}) {
      this.id = id;
      this.tourId = tourId;
      this.isActive = isActive;
      this.startDate = startDate;
      this.endDate = endDate;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  
    static toResponse(schedule) {
      const { id, tourId, isActive, startDate, endDate, createdAt, updatedAt } = schedule;
      return { id, tourId, isActive, startDate, endDate, createdAt, updatedAt };
    }
  }
  
  module.exports = Schedule
;