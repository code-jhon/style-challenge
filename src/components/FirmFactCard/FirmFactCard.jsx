import PropTypes from 'prop-types';
import styles from './FirmFactCard.module.scss';

const FirmFactCard = ({ variant = 'default', isDisabled, children }) => (
  <div className={`${styles.firmFactCard} ${styles[variant]} ${styles[isDisabled && "disabled"]}`}>
    {children}
  </div>
);

FirmFactCard.propTypes = {
  variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
  isDisabled: PropTypes.bool,
  children: PropTypes.node,
};

export default FirmFactCard;
