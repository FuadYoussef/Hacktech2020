import ContactList from "./ContactList";
import EventList from "./EventList";
import React from "react";

export default function Sidebar() {
  return(
    <div>
      <ContactList/>
      <EventList/>
    </div>
  );
}
