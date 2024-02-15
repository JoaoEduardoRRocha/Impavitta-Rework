import React from 'react';
import "./index.css";

interface ModalProps {
  url: string;
}

const Modal: React.FC<ModalProps> = ({ url }) => {
    return (
      <div className='modal-container'>
        <div className='modal-content'>
          <video
            className='video-size'
            src={url}
            controls
            width={800}
            autoPlay
            muted={true}
          />
        </div>
      </div>
    );
};

export default Modal;
