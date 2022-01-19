import { TSchedulePartial } from './schedule.types';


export class Schedule {
  id: string;
  tourId: string;
  isActive: Boolean;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;


  constructor({
    id = 'id',
    tourId = 'tourId',
    isActive = true,
    startDate = 'None',
    endDate = 'None',
    createdAt = 'None',
    updatedAt = 'None'
  }: TSchedulePartial = {}) {
    this.id = id;
    this.tourId = tourId;
    this.isActive = isActive;
    this.startDate = startDate;
    this.endDate = endDate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static toResponse(schedule: Schedule) {
    // const { id, tourId, isActive, startDate, endDate, createdAt, updatedAt } = schedule;
    // return { id, tourId, isActive, startDate, endDate, createdAt, updatedAt };
    return { ...schedule };
  }
}

// module.exports = Schedule;
