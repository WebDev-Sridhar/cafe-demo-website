import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { getWhatsAppUrl, getReserveMessage } from "../utils/whatsapp";

const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TIME_SLOTS = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];

export default function ReservationModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: 2,
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (fields = form) => {
    const next = {};
    if (!fields.date?.trim()) next.date = "Pick a date";
    if (!fields.time?.trim()) next.time = "Pick a time";
    if (!fields.name?.trim()) next.name = "Name is required";
    if (!fields.phone?.trim()) next.phone = "Phone is required";
    else if (fields.phone.replace(/\D/g, "").length < 10)
      next.phone = "Enter a valid phone number";
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const nextErrors = validate({ ...form, [name]: e.target.value });
    setErrors((prev) => ({ ...prev, [name]: nextErrors[name] ?? null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      date: true,
      time: true,
      guests: true,
      name: true,
      phone: true,
    });
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ date: "", time: "", guests: 2, name: "", phone: "" });
    setErrors({});
    setTouched({});
    onClose();
  };

  const whatsappUrl = submitted
    ? getWhatsAppUrl(
        getReserveMessage({
          date: form.date,
          time: form.time,
          guests: form.guests,
          name: form.name,
          phone: form.phone,
        }),
      )
    : null;

  const formatDateForDisplay = (d) => {
    if (!d) return "";
    const [y, m, day] = d.split("-");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${day} ${months[Number(m) - 1]} ${y}`;
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Reserve a table">
      {submitted ? (
        <div className="space-y-6">
          <div className="rounded-xl bg-[#4a3728]/10 p-5 text-[#3d2914]">
            <p className="font-semibold">Request received</p>
            <p className="mt-1 text-sm">
              We’ll confirm your table shortly. For instant confirmation, send
              the details via WhatsApp.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button variant="primary" className="w-full">
              Confirm via WhatsApp
            </Button>
          </a>
          <p className="text-center text-sm text-neutral-500">
            {formatDateForDisplay(form.date)} at {form.time} · {form.guests}{" "}
            guest{form.guests !== 1 ? "s" : ""}
          </p>
          <button
            type="button"
            onClick={handleClose}
            className="w-full text-center text-sm font-medium text-neutral-600 underline hover:text-[#111827]"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="res-date"
                className="block text-sm font-medium text-[#111827]"
              >
                Date <span className="text-red-500">*</span>
              </label>
              <input
                id="res-date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                onBlur={handleBlur}
                min={new Date().toISOString().slice(0, 10)}
                className={`mt-1.5 h-12 w-full rounded-xl border px-4 text-[#111827] transition focus:outline-none focus:ring-2 focus:ring-[#5c4033] focus:ring-offset-2 ${
                  touched.date && errors.date
                    ? "border-red-400"
                    : "border-neutral-300"
                }`}
              />
              {touched.date && errors.date && (
                <p className="mt-1.5 text-sm text-red-500">{errors.date}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="res-time"
                className="block text-sm font-medium text-[#111827]"
              >
                Time <span className="text-red-500">*</span>
              </label>
              <select
                id="res-time"
                name="time"
                value={form.time}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-1.5 h-12 w-full rounded-xl border px-4 text-[#111827] transition focus:outline-none focus:ring-2 focus:ring-[#5c4033] focus:ring-offset-2 ${
                  touched.time && errors.time
                    ? "border-red-400"
                    : "border-neutral-300"
                }`}
              >
                <option value="">Select time</option>
                {TIME_SLOTS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {touched.time && errors.time && (
                <p className="mt-1.5 text-sm text-red-500">{errors.time}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="res-guests"
              className="block text-sm font-medium text-[#111827]"
            >
              Guests
            </label>
            <select
              id="res-guests"
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className="mt-1.5 h-12 w-full rounded-xl border border-neutral-300 px-4 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#5c4033] focus:ring-offset-2"
            >
              {GUEST_OPTIONS.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="res-name"
              className="block text-sm font-medium text-[#111827]"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="res-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1.5 h-12 w-full rounded-xl border px-4 text-[#111827] transition focus:outline-none focus:ring-2 focus:ring-[#5c4033] focus:ring-offset-2 ${
                touched.name && errors.name
                  ? "border-red-400"
                  : "border-neutral-300"
              }`}
              placeholder="Your name"
              autoComplete="name"
            />
            {touched.name && errors.name && (
              <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="res-phone"
              className="block text-sm font-medium text-[#111827]"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="res-phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1.5 h-12 w-full rounded-xl border px-4 text-[#111827] transition focus:outline-none focus:ring-2 focus:ring-[#5c4033] focus:ring-offset-2 ${
                touched.phone && errors.phone
                  ? "border-red-400"
                  : "border-neutral-300"
              }`}
              placeholder="+91 98765 43210"
              autoComplete="tel"
            />
            {touched.phone && errors.phone && (
              <p className="mt-1.5 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>
          <Button type="submit" variant="primary" className="w-full">
            Request reservation
          </Button>
        </form>
      )}
    </Modal>
  );
}
