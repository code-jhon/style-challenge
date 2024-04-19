import PropTypes from 'prop-types';
import styles from './FirmFactCard.module.scss';

const FirmFactCard = ({ variant = 'default', children }) => (
  <div className={`${styles.firmFactCard} ${styles[variant]}`}>
    {children}
  </div>
);

FirmFactCard.propTypes = {
  variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
  children: PropTypes.node,
};

export default FirmFactCard;
