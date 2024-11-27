import apiClient from "./apiClient";
import moment from "moment";

namespace BookingAPI {
  export const createBooking = async (formData: any) => {
    const startDate = moment(
      formData.date + "|" + formData.startDate,
      "YYYY-MM-DD|HH:mm"
    ).toDate();
    const endDate = moment(
      formData.date + "|" + formData.endDate,
      "YYYY-MM-DD|HH:mm"
    ).toDate();

    return (
      await apiClient.post("/booking", {
        barberId: formData.barberId,
        customerName: "João da Silva",
        startDate: startDate,
        endDate: endDate,
        serviceId: formData.serviceId,
      })
    ).data;
  };
}

export default BookingAPI;