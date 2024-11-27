export interface IBooking {
  id?: string;
  barberId: string;
  customerName: string;
  startDate: Date;
  endDate: Date;
  serviceId: string;
}
