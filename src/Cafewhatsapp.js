import React from 'react';

const Whatsapp = ({
  phoneNumber = '919100009049',
  message = 'Hello, I am interested in your services',
  size = 50
}) => {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: `${size}px`,
        height: `${size}px`,
        cursor: 'pointer',
        zIndex: 999
      }}
    />
  );
};

export default Whatsapp;