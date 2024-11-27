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
import ModalAppointment from "./modal/ModalAppointment";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../components/global/Alert";
import AboutUs from "./components/AboutUs";
import Subscription from "./components/Subscription";

interface IselectedDate {
  startDate: Date;
  endDate: Date;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<IselectedDate | null>(null);

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
      Alert.simpleAlert("Error", "The appointment must last exactly one hour");
      calendarApi.unselect();
      return;
    } else {
      setSelectedDate({ startDate: selectInfo.start, endDate: selectInfo.end });
      setShowAppointmentModal(true);
    }

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

  // Função para rolar até a seção desejada
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="container">
      {showAppointmentModal && (
        <ModalAppointment
          startDate={selectedDate?.startDate || new Date()}
          endDate={selectedDate?.endDate || new Date()}
          onClose={closeOnModal}
        />
      )}

      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Hero" />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#booking" onClick={() => scrollToSection("home")}>
                Appointment
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>
                About us
              </a>
            </li>
            <li>
              <a
                href="#subscription"
                onClick={() => scrollToSection("subscription")}
              >
                Subscription
              </a>
            </li>
          </ul>
        </nav>
        <div className="nav-links">
          <li>
            <p className="logout" onClick={logout}>
              Logout
            </p>
          </li>
        </div>
      </header>

      {/* Main Section */}
      <main>
        <section id="home" className="hero-section">
          <div>
            <img src={heroImage} alt="BroHouse Logo" />
            <h1>Make an appointment now</h1>
            <p>Have a Carrefour card? Get a 30% discount!</p>
          </div>
        </section>

        <section id="booking" className="atmosphere-section">
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

        {/* History Section */}
        <section id="about" className="history-section">
          <h2>AboutUs</h2>
          <AboutUs></AboutUs>
        </section>

        {/* Subscription Section */}
        <section id="subscription" className="subscription-section">
          <h2>Subscription</h2>
          <Subscription></Subscription>
        </section>
      </main>
    </div>
  );
};

export default Home;