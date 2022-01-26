import React from "react";

const MyModal = ({ children, visible, setVisible }) => {
  let modalVisible = "myModal";
  if (visible) {
    modalVisible += " active";
  }

  return (
    <div className={modalVisible} onClick={() => setVisible(false)}>
      <div className="myModal__content" onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default MyModal;
