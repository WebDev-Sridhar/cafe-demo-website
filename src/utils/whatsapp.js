import { cafe } from "../data/cafe";

const BASE = `https://wa.me/${cafe.whatsapp.replace(/\+/g, "")}`;

export function getWhatsAppUrl(text) {
  return `${BASE}?text=${encodeURIComponent(text)}`;
}

export function getOrderMessage(itemName) {
  return `Hi, I'd like to order: ${itemName}`;
}

export function getReserveMessage({ date, time, guests, name, phone }) {
  const parts = [
    "Hi, I’d like to reserve a table.",
    `Date: ${date}`,
    `Time: ${time}`,
    `Guests: ${guests}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
  ];
  return parts.join("\n");
}

export function getGeneralMessage(message) {
  return message || "Hi, I have a question.";
}
