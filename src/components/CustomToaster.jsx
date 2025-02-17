import React from 'react';
import { Toaster, ToastBar } from 'react-hot-toast';


const CustomToaster = () => {
  return (
    <Toaster
      position="bottom-center"
      gutter={8}
      toastOptions={{
        duration: 2000,
        className: "toast text-white p-16",
        style : {
            backgroundColor: '#333',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            color:'white'
        }
      }}
    >
      {(t) => (
        <ToastBar
          toast={t}
          className={`fade-in ${t.visible ? 'custom-enter' : 'custom-exit'}`}
          style={{
            opacity:'0',
            animation: 'fadeIn 0.5s ease-in-out forwards'
          }}
        >
          <div className="flex justify-between items-center w-full pr-2">
            {t.message}
          </div>
        </ToastBar>
      )}
    </Toaster>
  );
};

export default CustomToaster;
