import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';


export interface ModalProps {
    isShown: boolean;
    hide: () => void;
    modalContent: JSX.Element;
    headerText: string;
  }

  export const Modal: FunctionComponent<ModalProps> = ({
    isShown,
    hide,
    modalContent,
    headerText,
  }) => {
    const modal = (
      <React.Fragment>
     
   
     
            <div>
              <div>{headerText}</div>
              <div onClick={hide}>X</div>
            </div>
            <div>{modalContent}</div>
    
      </React.Fragment>
    );
  
    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
  };