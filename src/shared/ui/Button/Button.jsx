import React from 'react';
import styles from './Button.module.scss';

function Button({ children, primal, ...props }) {
  return (
    <div className={primal == 'primal' ? styles.primal : styles.button}>
      <div className={styles.text}>{children}</div>
    </div>
  );
}

export default Button;