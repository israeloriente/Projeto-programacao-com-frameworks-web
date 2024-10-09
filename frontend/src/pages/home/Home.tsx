import React, { useState } from "react";
import "./Home.scss";
import heroImage from "../../assets/hero-image.png";
import TesteImage from "../../assets/background-barber.png";
import logo from "../../assets/logo.png";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Moment } from "../../services/moment.service";
import { ModalAppointment } from "./components/ModalAppointment";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../components/global/Alert";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  // Defina os eventos iniciais
  const [events, setEvents] = useState([
    {
      title: "Barba",
      start: "2024-09-22T12:00:00",
      end: "2024-09-22T12:30:00",
      allDay: false,
    },
  ]);

  // Função para lidar com a adição de um novo evento
  const openAppointmentModal = (selectInfo: any) => {
    const calendarApi = selectInfo.view.calendar;
    let hasOneHour = Moment.calculateHourDifference(
      selectInfo.start,
      selectInfo.end,
      1
    );
    if (!hasOneHour) {
      Alert.simpleAlert("Error", "The appointment must be at least 1 hour");
      calendarApi.unselect();
      return;
    } else setShowAppointmentModal(true);

    // if (title) {
    //   setEvents([
    //     ...events,
    //     {
    //       title,
    //       start: selectInfo.startStr,
    //       end: selectInfo.endStr,
    //       allDay: selectInfo.allDay,
    //     },
    //   ]);
    // }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const closeOnModal = () => {
    setShowAppointmentModal(false);
  };

  return (
    <div className="container">
      {showAppointmentModal && <ModalAppointment onClose={closeOnModal} />}
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Hero" />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home">Appointment</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#services">History</a>
            </li>
            <li>
              <a href="#shop">Subscription</a>
            </li>
          </ul>
        </nav>
        <div className="nav-links">
          <li>
            <a className="logout" href="#logout" onClick={logout}>
              Logout
            </a>
          </li>
        </div>
      </header>

      {/* Main Section */}
      <main>
        <section className="hero-section">
          <div>
            <img src={heroImage} alt="BroHouse Logo" />
            <h1>Make an appointment now</h1>
            <p>Have a carrefour card? get a 30% discount!</p>
          </div>
        </section>

        <section className="atmosphere-section">
          <div className="overlay">
            <h1>Booking Now</h1>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="timeGridWeek"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              events={events}
              select={openAppointmentModal}
              eventClick={openAppointmentModal}
            />
          </div>
          <div className="atmosphere-image">
            <img src={TesteImage} alt="Barber Atmosphere" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
