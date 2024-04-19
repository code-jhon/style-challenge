import propTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ variant = 'default', disabled = false, children }) => (
  <button className={`${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''}`}>
    {children}
  </button>
);

Button.propTypes = {
  variant: propTypes.oneOf(['default', 'primary', 'secondary']),
  disabled: propTypes.bool,
  children: propTypes.node,
};

export default Button;
