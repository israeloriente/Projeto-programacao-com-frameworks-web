import React, { Component } from "react";
import BarberAPI from "../../../api/barber";
import ServiceAPI from "../../../api/service";
import BookingAPI from "../../../api/booking";
import { Alert } from "../../../components/global/Alert";

interface ModalProps {
  onClose: () => void;
  startDate: Date;
  endDate: Date;
  onSubmit: (data: any) => void;
}

interface ModalState {
  formData: {
    serviceId: string;
    barberId: string;
    date: string;
    startDate: string;
    endDate: string;
  };
  services: any[];
  barbers: any[];
}

class ModalAppointment extends Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);

    this.state = {
      formData: {
        serviceId: "",
        barberId: "",
        date: props.startDate.toISOString().split("T")[0],
        startDate: props.startDate.toISOString().split("T")[1].slice(0, 5),
        endDate: props.endDate.toISOString().split("T")[1].slice(0, 5),
      },
      services: [],
      barbers: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBookingConfirmation = this.handleBookingConfirmation.bind(this);
  }

  async componentDidMount() {
    const services = await ServiceAPI.getServices();
    const barbers = await BarberAPI.getBarbers();
    this.setState({ services, barbers });
  }

  handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  }

  async handleBookingConfirmation() {
    console.log("Booking confirmed:", this.state.formData);
    BookingAPI.createBooking(this.state.formData).then((res) => {
      Alert.showToast("Booking created!", "success");
      this.props.onClose();
      this.props.onSubmit(res);
    });
  }

  isFormValid() {
    const { serviceId, barberId, date, startDate, endDate } =
      this.state.formData;
    return serviceId && barberId && date && startDate && endDate;
  }

  render() {
    const { formData, services, barbers } = this.state;
    const isFormValid = this.isFormValid();
    const modalStyles: {
      overlay: React.CSSProperties;
      modal: React.CSSProperties;
      closeButton: React.CSSProperties;
      form: React.CSSProperties;
      formGroup: React.CSSProperties;
      button: React.CSSProperties;
    } = {
      overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 5, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 3,
        transition: "opacity 0.3s ease",
      },
      modal: {
        position: "relative",
        backgroundColor: "#fff",
        padding: "20px",
        width: "500px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      },
      closeButton: {
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "none",
        border: "none",
        fontSize: "18px",
        cursor: "pointer",
      },
      form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        marginTop: "20px",
        marginLeft: "75px",
        alignItems: "center",
      },
      formGroup: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "400px",
        textAlign: "left",
      },
      button: {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: isFormValid ? "#007BFF" : "#B0D4FF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: isFormValid ? "pointer" : "not-allowed",
        width: "100%",
        maxWidth: "400px",
        opacity: isFormValid ? 1 : 0.6,
        transition: "opacity 0.3s ease, background-color 0.3s ease",
      },
    };

    return (
      <div style={modalStyles.overlay}>
        <div style={modalStyles.modal}>
          <button
            style={modalStyles.closeButton}
            onClick={this.props.onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
          <h1>Appointment Booking</h1>
          <form style={modalStyles.form}>
            <div style={modalStyles.formGroup}>
              <label htmlFor="serviceId">Service</label>
              <select
                name="serviceId"
                id="serviceId"
                value={formData.serviceId}
                onChange={this.handleInputChange}
              >
                <option key="1" value="">
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service._id} value={service._id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            <div style={modalStyles.formGroup}>
              <label htmlFor="barberId">Barber</label>
              <select
                name="barberId"
                id="barberId"
                value={formData.barberId}
                onChange={this.handleInputChange}
              >
                <option key="2" value="">
                  Choose a barber
                </option>
                {barbers.map((service) => (
                  <option key={service._id} value={service._id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            <div style={modalStyles.formGroup}>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={this.handleInputChange}
              />
            </div>

            <div style={modalStyles.formGroup}>
              <label htmlFor="time">Start Time</label>
              <input
                type="time"
                name="time"
                id="time"
                value={formData.startDate}
                onChange={this.handleInputChange}
              />
            </div>

            <div style={modalStyles.formGroup}>
              <label htmlFor="time">End Time</label>
              <input
                type="time"
                name="time"
                id="time"
                value={formData.endDate}
                onChange={this.handleInputChange}
              />
            </div>

            <button
              type="button"
              style={modalStyles.button}
              onClick={this.handleBookingConfirmation}
              disabled={!isFormValid}
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ModalAppointment;
