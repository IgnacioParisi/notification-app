import { useState } from "react";

export const Title = ({ toggleClass }) => {
  const [notifications, setNotifications] = useState(3);

  const cleanBadge = () => {
    toggleClass(false);
    setNotifications(0);
  };

  return (
    <section className="title-container">
      <h1>Notifications</h1>
      <span className="notifications-badge">{notifications}</span>
      <button onClick={() => cleanBadge()} className="read-notifications-btn">
        Mark all as read
      </button>
    </section>
  );
};
