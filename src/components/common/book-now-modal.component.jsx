import React, { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "971527074847";

/**
 * Builds WhatsApp share URL with pre-filled message from form data.
 */
export function buildWhatsAppBookMessage(payload) {
  const lines = [
    "Hi, I would like to book a car.",
    "",
    `*Car:* ${payload.carTitle || "—"}`,
    `*Name:* ${payload.name || "—"}`,
    `*Phone:* ${payload.phone || "—"}`,
    `*From:* ${payload.from || "—"}`,
    `*To:* ${payload.to || "—"}`,
    `*Pickup time:* ${payload.pickupTime || "—"}`,
    `*Drop-off time:* ${payload.dropOffTime || "—"}`,
  ];
  if (payload.address) {
    lines.push(`*Address:* ${payload.address}`);
  }
  return lines.join("\n");
}

export function openWhatsAppWithMessage(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

const BookNowModal = ({ show, onClose, carDetail = null, allCars = [] }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");
  const [selectedCarId, setSelectedCarId] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      if (carDetail != null) {
        const id = carDetail.car_id ?? carDetail.id;
        setSelectedCarId(id != null ? String(id) : "");
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show, carDetail]);

  const carTitle =
    carDetail?.title ||
    (allCars?.find((c) => String(c.car_id ?? c.id) === String(selectedCarId))?.title) ||
    "";

  const generateTimeSlots = () => {
    const times = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 15) {
        times.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
      }
    }
    return times;
  };
  const timeSlots = generateTimeSlots();

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = buildWhatsAppBookMessage({
      carTitle,
      name,
      phone,
      from,
      to,
      pickupTime,
      dropOffTime,
      address: address || undefined,
    });
    openWhatsAppWithMessage(message);
    onClose();
  };

  if (!show) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="bookNowModalTitle"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom">
            <h5 className="modal-title" id="bookNowModalTitle">
              Book Now
            </h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Your Name *</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Full name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone *</label>
                <input
                  type="tel"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="e.g. +971 50 123 4567"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Car</label>
                <select
                  className="form-select"
                  value={selectedCarId}
                  onChange={(e) => setSelectedCarId(e.target.value)}
                >
                  <option value="">Select car</option>
                  {allCars?.map((car) => {
                    const carId = car.car_id ?? car.id;
                    return (
                      <option key={carId} value={carId != null ? String(carId) : ""}>
                        {car.title}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="row g-2 mb-3">
                <div className="col-6">
                  <label className="form-label">From</label>
                  <input
                    type="date"
                    className="form-control"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">To</label>
                  <input
                    type="date"
                    className="form-control"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  />
                </div>
              </div>
              <div className="row g-2 mb-3">
                <div className="col-6">
                  <label className="form-label">Pickup time</label>
                  <select
                    className="form-select"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                  >
                    <option value="">Select</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label">Drop-off time</label>
                  <select
                    className="form-select"
                    value={dropOffTime}
                    onChange={(e) => setDropOffTime(e.target.value)}
                  >
                    <option value="">Select</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Address (optional)</label>
                <input
                  type="text"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Delivery address if needed"
                />
              </div>
            </div>
            <div className="modal-footer border-top">
              <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="modal-backdrop fade show"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        onClick={onClose}
        aria-hidden="true"
      />
    </div>
  );
};

export default BookNowModal;
