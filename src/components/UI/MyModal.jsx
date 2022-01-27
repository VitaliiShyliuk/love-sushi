import React from "react";

const MyModal = ({ children, visibleModal, setVisibleModal }) => {
  let modalClass = ["myModal"];
  if (visibleModal) {
    modalClass.push("active");
  }

  return (
    <div className={modalClass.join(' ')} onClick={() => setVisibleModal(false)}>
      <div className="myModal__content" onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default MyModal;
