import { useState } from "react";
import { Title } from "../Title/Title";

export const CommentsSection = () => {
  const [active, setActive] = useState(true);
  const [read, setRead] = useState(true)

  const toggleClass = () => {
    setActive(false);
  };

  const readNotification = () => {
    
  }

  return (
    <section className="notifications-section-container">
      <Title toggleClass={toggleClass} />
      <div
        className={
          active ? "notification-container active" : "notification-container"
        }
      >
        <img
          className="notification-image"
          src="/images/avatar-mark-webber.webp"
          alt="Profile"
        />
        <article className="notification-content">
          <div className="notification-main-content">
            <span className="user-name-notification">Mark Webber</span> reacted
            to your recent post{" "}
            <span className="post-reaction">My first tournament today!</span>{" "}
          </div>
          <span className="timelapse-notification">1m ago</span>
        </article>
      </div>
      <div
        className={
          active ? "notification-container active" : "notification-container"
        }
      >
        <img
          className="notification-image"
          src="/images/avatar-angela-gray.webp"
          alt="Profile"
        />
        <article className="notification-content">
          <div className="notification-main-content">
            <span className="user-name-notification">Angela Gray</span> followed
            you
          </div>
          <span className="timelapse-notification">5m ago</span>
        </article>
      </div>
      <div
        className={
          active ? "notification-container active" : "notification-container"
        }
      >
        <img
          className="notification-image"
          src="/images/avatar-jacob-thompson.webp"
          alt="Profile"
        />
        <article className="notification-content">
          <div className="notification-main-content">
            <span className="user-name-notification">Jacob Thompson</span> has
            joined your group{" "}
            <a className="links" href="!#">
              Chess Club
            </a>{" "}
          </div>
          <span className="timelapse-notification">1 day ago</span>
        </article>
      </div>
      <div className="notification-container">
        <img
          className="notification-image"
          src="/images/avatar-rizky-hasanuddin.webp"
          alt="Profile"
        />
        <article className="notification-content">
          <div className="notification-main-content">
            <span className="user-name-notification">Rizky Hasanuddin</span>{" "}
            sent you a private message{" "}
          </div>
          <span className="timelapse-notification">5 days ago</span>
          <div className="message-box">
            <p>
              Hello, thanks for setting up the Chess Club. I've been a member
              for a few weeks now and I'm already having lots of fun and
              improving my game.
            </p>
          </div>
        </article>
      </div>
      <div className="notification-container">
        <img
          className="notification-image"
          src="/images/avatar-kimberly-smith.webp"
          alt="Profile"
        />
        <article className="notification-content">
          <div className="notification-main-content">
            <span className="user-name-notification">Kimberly Smith</span>{" "}
            commented on your picture{" "}
          </div>
          <span className="timelapse-notification">1 week ago</span>
        </article>
        <img
          className="shared-image"
          src="/images/image-chess.webp"
          alt="Shared post"
        />
      </div>
      <div className="notification-container">
        <img
          className="notification-image"
          src="/images/avatar-nathan-peterson.webp"
          alt="Profile"
        />
        <article className="notification-content">
          <div className="notification-main-content">
            <span className="user-name-notification">Nathan Peterson</span>{" "}
            reacted to your recent post{" "}
            <span className="post-reaction">
              5 end-game strategies to increase your win rate
            </span>{" "}
          </div>
          <span className="timelapse-notification">2 weeks ago</span>
        </article>
      </div>
      <div className="notification-container">
        <img
          className="notification-image"
          src="/images/avatar-anna-kim.webp"
          alt="Profile"
        />
        <article className="notification-content">
          <div className="notification-main-content">
            <span className="user-name-notification">Anna Kim</span> left the
            group{" "}
            <a className="links" href="!#">
              Chess Club
            </a>{" "}
          </div>
          <span className="timelapse-notification">2 weeks ago</span>
        </article>
      </div>
    </section>
  );
};
