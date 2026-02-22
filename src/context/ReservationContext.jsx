import { createContext, useContext, useState } from "react";

const ReservationContext = createContext(null);

export function ReservationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openReservation = () => setIsOpen(true);
  const closeReservation = () => setIsOpen(false);
  return (
    <ReservationContext.Provider
      value={{ isOpen, openReservation, closeReservation }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const ctx = useContext(ReservationContext);
  if (!ctx)
    throw new Error("useReservation must be used within ReservationProvider");
  return ctx;
}
