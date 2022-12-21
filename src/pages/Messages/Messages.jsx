import React, { useState } from "react";
import "./Messages.css";
import CardBox from "../../components/Card/CardBox";
import { messagesData } from "./../../dataChart";

export default function Messages() {
  const [dataMessages, setDataMessages] = useState(messagesData);
  return (
    <section className="container-messages">
      {dataMessages.map((message) => (
        <CardBox title={message.title} name={message.name} key={message.id} />
      ))}
    </section>
  );
}
