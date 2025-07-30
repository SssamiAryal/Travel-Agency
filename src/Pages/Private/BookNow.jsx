// frontend/src/components/BookNow.jsx
import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaUsers,
  FaStickyNote,
} from "react-icons/fa";
import { createBooking, fetchDestinations } from "../../Services/api";
import BookingDone from "./BookingDone";
import "../../Styles/BookNow.css";

function BookNow() {
  const { destinationId } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    travelers: "1",
    requests: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [calendarOpen, setCalendarOpen] = useState(false);
  const calendarRef = useRef(null);

  const [calendarYear, setCalendarYear] = useState(
    formData.travelDate
      ? new Date(formData.travelDate).getFullYear()
      : new Date().getFullYear()
  );
  const [calendarMonth, setCalendarMonth] = useState(
    formData.travelDate
      ? new Date(formData.travelDate).getMonth()
      : new Date().getMonth()
  );

  useEffect(() => {
    fetchDestinations()
      .then((res) => {
        const found = res.data.find((d) => d.id.toString() === destinationId);
        if (!found) {
          navigate("/");
        } else {
          setDestination(found);
        }
      })
      .catch(() => {
        navigate("/");
      });
  }, [destinationId, navigate]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        event.target.name !== "travelDateDisplay"
      ) {
        setCalendarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (formData.travelDate) {
      const d = new Date(formData.travelDate);
      setCalendarYear(d.getFullYear());
      setCalendarMonth(d.getMonth());
    }
  }, [formData.travelDate]);

  const formatDisplayDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const formatISODate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();

    const year = calendarYear;
    const month = calendarMonth;

    const firstDay = new Date(year, month, 1).getDay();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const firstDayAdjusted = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = 0; i < firstDayAdjusted; i++) {
      days.push(null);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      days.push(new Date(year, month, d));
    }

    return days;
  };

  const handleDateSelect = (date) => {
    const isoDate = formatISODate(date);
    setFormData((prev) => ({ ...prev, travelDate: isoDate }));
    setCalendarOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createBooking({
        ...formData,
        travelers: Number(formData.travelers),
        destination: destination.name,
      });
      setSubmitted(true);
    } catch (error) {
      alert(
        "Booking failed: " + (error.response?.data?.message || error.message)
      );
    } finally {
      setLoading(false);
    }
  };

  if (!destination) return null;

  const days = generateCalendarDays();

  const calendarMonthName = new Date(
    calendarYear,
    calendarMonth
  ).toLocaleString(undefined, { month: "long" });

  const todayISO = formatISODate(new Date());

  const prevMonth = () => {
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear((y) => y - 1);
    } else {
      setCalendarMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear((y) => y + 1);
    } else {
      setCalendarMonth((m) => m + 1);
    }
  };

  return (
    <div className="booknow-container">
      <button className="btn-back" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back
      </button>

      <div className="destination-info">
        <img
          src={`http://localhost:5000${
            destination.image_url
              ? destination.image_url
              : `/${destination.image}`
          }`}
          alt={destination.name}
        />
        <h1>{destination.name}</h1>
        <p>{destination.description}</p>
      </div>

      {!submitted ? (
        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <h2>Book Your Trip</h2>

          <label>
            <div className="input-icon-wrapper">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Full Name"
                disabled={loading}
                autoComplete="name"
              />
            </div>
          </label>

          <label>
            <div className="input-icon-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                disabled={loading}
                autoComplete="email"
              />
            </div>
          </label>

          <label>
            <div className="input-icon-wrapper">
              <FaPhone className="input-icon" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                disabled={loading}
                autoComplete="tel"
              />
            </div>
          </label>

          <label className="custom-date-label">
            <div
              className="input-icon-wrapper"
              onClick={() => setCalendarOpen((v) => !v)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  setCalendarOpen((v) => !v);
              }}
            >
              <FaCalendarAlt className="input-icon" />
              <input
                type="text"
                name="travelDateDisplay"
                value={formatDisplayDate(formData.travelDate)}
                placeholder="Select Travel Date"
                readOnly
                disabled={loading}
                autoComplete="off"
              />
            </div>
            {calendarOpen && !loading && (
              <div
                className="calendar-popup"
                ref={calendarRef}
                role="dialog"
                aria-modal="true"
              >
                <div className="calendar-header">
                  <button
                    type="button"
                    className="calendar-nav-btn"
                    onClick={prevMonth}
                    aria-label="Previous Month"
                  >
                    &#8592;
                  </button>
                  <strong>
                    {calendarMonthName} {calendarYear}
                  </strong>
                  <button
                    type="button"
                    className="calendar-nav-btn"
                    onClick={nextMonth}
                    aria-label="Next Month"
                  >
                    &#8594;
                  </button>
                </div>
                <div className="calendar-weekdays">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (d) => (
                      <div key={d} className="calendar-weekday">
                        {d}
                      </div>
                    )
                  )}
                </div>
                <div className="calendar-days">
                  {days.map((day, idx) => {
                    if (!day)
                      return <div key={idx} className="calendar-day empty" />;

                    const dayISO = formatISODate(day);
                    const disabled = dayISO < todayISO;
                    const selected = dayISO === formData.travelDate;

                    return (
                      <button
                        type="button"
                        key={idx}
                        className={`calendar-day${selected ? " selected" : ""}`}
                        onClick={() => !disabled && handleDateSelect(day)}
                        disabled={disabled}
                        aria-label={`Select ${day.toDateString()}`}
                      >
                        {day.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </label>

          <label>
            <div className="input-icon-wrapper">
              <FaUsers className="input-icon" />
              <select
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                disabled={loading}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} Traveler{i > 0 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
          </label>

          <label>
            <div className="input-icon-wrapper">
              <FaStickyNote className="input-icon" />
              <textarea
                name="requests"
                value={formData.requests}
                onChange={handleChange}
                placeholder="Special Requests (optional)"
                disabled={loading}
              />
            </div>
          </label>

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      ) : (
        <BookingDone
          fullName={formData.fullName}
          destination={destination.name}
          travelDate={formData.travelDate}
          onClose={() => navigate("/home")}
        />
      )}
    </div>
  );
}

export default BookNow;
