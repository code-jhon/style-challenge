import FirmFactCard from '../FirmFactCard/FirmFactCard';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './FirmFacts.module.scss';

const description = 'This is a two line button that terminates with...';
const shortDesc = "This is a one line button"

const dataFacts = [
  { 
    description,
    cardVariant: 'default',
    buttonVariant: 'icon',
  },
  { 
    description,
    cardVariant: 'default',
    buttonVariant: 'icon',
  },
  { 
    description: shortDesc,
    cardVariant: 'default',
    buttonVariant: 'default',
  },
  { 
    description,
    cardVariant: 'default',
    buttonVariant: 'icon',
  },
  { 
    description,
    cardVariant: 'default',
    buttonVariant: 'icon',
  },
  { 
    description,
    cardVariant: 'default',
    buttonVariant: 'icon',
    disabled: true
  },
  { 
    description,
    cardVariant: 'default',
    buttonVariant: 'icon',
  },
  ]

const FirmFacts = ({ onClose }) => (
  <div className='container hidden'>
    <header className="app--header">
      <div className="close-button" onClick={onClose}>
        <svg width="44" height="44" xmlns="http://www.w3.org/2000/svg">
          <line x1="2" y1="2" x2="42" y2="42" stroke="white" strokeWidth="1"/>
          <line x1="42" y1="2" x2="2" y2="42" stroke="white" strokeWidth="1"/>
        </svg>
      </div>
      <div className="app--title">Firm Facts</div>
      <div className="app--sepparator"></div>
    </header>
    <div className={styles.container}>
      {dataFacts.map((fact, index) => (
        <div key={`item-${index}`} className={styles.gridItem}>
          <FirmFactCard variant={fact.cardVariant} isDisabled={fact.disabled}>
            <Button variant={fact.buttonVariant} isDisabled={fact.disabled}>{fact.description}</Button>
          </FirmFactCard>
        </div>
      ))
      }
    </div>
  </div>
);

FirmFacts.propTypes = {
  onClose: PropTypes.func,
};

export default FirmFacts;
