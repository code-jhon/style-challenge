import propTypes from 'prop-types';
import SearchIcon from '../../assets/search.svg'
import styles from './Button.module.scss';

const Button = ({ variant = 'default', isDisabled = false, children }) => (
  <div className={`${styles.button} ${styles[variant]} ${isDisabled ? styles.disabled : ''}`}>
    <div>
      {variant === 'icon' && (
        <img src={SearchIcon} className={styles.buttonIcon} alt="search icon"/>
      )}
    </div>
    <div className={styles.buttonText}>{children}</div>
  </div>
);

Button.propTypes = {
  variant: propTypes.oneOf(['icon', 'default']),
  isDisabled: propTypes.bool,
  children: propTypes.node,
};

export default Button;
