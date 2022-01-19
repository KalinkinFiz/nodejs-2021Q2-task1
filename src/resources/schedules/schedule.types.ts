export interface TSchedule {
  id: string;
  tourId: string;
  isActive: Boolean;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface TScheduleModel extends TSchedule {
  id: string;
}

export interface TSchedulePartial extends Partial<TSchedule> {}
