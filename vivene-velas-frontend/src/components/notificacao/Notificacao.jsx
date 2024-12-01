import React, { useState, useEffect } from "react";
import st from './Notificacao.module.css';

const Alert = ({ message, duration = 5000, onClose, type, icon }) => {
    const [progress, setProgress] = useState(100);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => Math.max(prev - (100 / (duration / 100)), 0));
      }, 100);
  
      const timer = setTimeout(() => {
        onClose && onClose();
      }, duration);
  
      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }, [duration, onClose]);
  
    return (
      <div className={st[`alert-container-${type}`]}>
        <div className={st["alert-message"]}><i class={`${icon}`}></i>{message}</div>
        <div className={st[`alert-progress-${type}`]} style={{ width: `${progress}%` }}></div>
      </div>
    );
  };
  
  export default Alert;
