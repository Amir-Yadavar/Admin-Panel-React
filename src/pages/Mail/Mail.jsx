import React, { useState } from "react";
import MailCard from "./MailCard/MailCard";
import { userMailData } from "../../dataChart";
import "./Mail.css";

export default function Mail() {
  const [userMail, setUserMail] = useState(userMailData);

  const removeHandler = (mailId) => {
    setUserMail(userMail.filter(item => item.id != mailId));
    console.log(userMail)
  };

  return (
    <section className="container-mail">
      {userMail.map((item) => (
        <MailCard
          key={item.id}
          img={item.avatar}
          title={item.username}
          id={item.id}
          onRemove={removeHandler}
        />
      ))}
    </section>
  );
}
