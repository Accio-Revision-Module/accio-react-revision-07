/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { useState } from "react";
import "../styles/notification.css";

function Notification({
  showNotif,
  content,
  handleNotificationClose,
  duration = 3000,
  closeOnHover = false,
  ...styleProps
}) {
  const [show, setShow] = useState(showNotif);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const showNotification = () => {
    setShow(true);
  };

  const closeNotification = () => {
    if (!isHovered) {
      setShow(false);
      handleNotificationClose();
    }
  };

  const closeNotificationBtn = () => {
    setShow(false);
    handleNotificationClose();
  };

  useEffect(() => {
    if (isHovered) {
      clearTimeout(timeoutRef.current);
      return;
    }
    if (!isHovered && show) {
      timeoutRef.current = setTimeout(closeNotification, duration);
    }
  }, [show, isHovered, showNotif, duration]);

  useEffect(() => {
    if (showNotif) showNotification();
  }, [showNotif]);

  if (!show) return null;

  return (
    <div
      style={styleProps}
      className="notification"
      onMouseEnter={() => {
        if (!closeOnHover) setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
      <div className="close-btn" onClick={closeNotificationBtn}>
        x
      </div>
    </div>
  );
}

export default Notification;
