import PropTypes from 'prop-types';
import styles from './FirmFacts.module.scss';

const FirmFacts = ({ children }) => (
  <div className={styles.firmFacts}>
    {children}
  </div>
);

FirmFacts.propTypes = {
  children: PropTypes.node,
};

export default FirmFacts;
