import React, { useState } from "react";
import "./MovieTicketBookingForm.css";

const MovieTicketBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    movie: "",
    date: "",
    time: "",
    tickets: "",
    seatingPreference: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("movieTicketFormData", JSON.stringify(formData));
    alert(
      "Thank you  " +
        formData.name +
        " 😄, for successfully booking your movie ticket 🎫 ! Enjoy the show! "
    );
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Movie Ticket Booking Form</h1>
      <div className="container">
        <br />
        <br />
        <div className="for_input mb-3">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <br />

          <input
            type="text"
            id="movie"
            name="movie"
            placeholder="Movie Name"
            value={formData.movie}
            onChange={handleChange}
            required
          />
          <br />

          <input
            type="date"
            id="date"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <br />

          <input
            type="time"
            id="time"
            name="time"
            placeholder="Time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          <br />

          <input
            type="number"
            id="tickets"
            name="tickets"
            placeholder="Number of tickets"
            value={formData.tickets}
            onChange={handleChange}
            required
          />
          <br />

          <input
            type="text"
            id="seatingPreference"
            name="seatingPreference"
            placeholder="SeatingPreference"
            value={formData.seatingPreference}
            onChange={handleChange}
          />
          <br />

          <select
            id="paymentMethod"
            type="text"
            name="paymentMethod"
            placeholder="Payment Method"
            class="form-select"
          >
            <option value="" disabled selected>
              Payment method
            </option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>Cash</option>
          </select>

          <br />
          <button type="submit">Submit</button>
          <button className="back-button" onClick={handleGoBack}>
            Previous
          </button>
        </div>
      </div>
    </form>
  );
};
export default MovieTicketBookingForm;
