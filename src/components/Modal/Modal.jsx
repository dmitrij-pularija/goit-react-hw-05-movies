import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { ReactComponent as IconClose } from '../../img/clear.svg';
import { Overlay, Mod, Close } from './Modal.styled';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const closeEsc = event => {
      if (event.code === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', closeEsc);
    return () => {
      window.removeEventListener('keydown', closeEsc);
    };
  }, [onClose]);

  const handleClick = event => {
    if (event.currentTarget === event.target) onClose();
  };

  return (
    <Overlay onClick={handleClick}>
      <Mod>
      <Suspense fallback={<Loader />}>
        {children}
      </Suspense>  
        <Close onClick={onClose} title="Сlick to close">
          <IconClose stroke="currentColor" />
        </Close>
      </Mod>
    </Overlay>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;