import FirmFactCard from '../FirmFactCard/FirmFactCard';
import Button from '../Button/Button';
import styles from './FirmFacts.module.scss';

const description = 'This is a two line button that terminates with more text than can be displayed in the button.';
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
  ]

const FirmFacts = () => (
  <div className={styles.container}>
    {dataFacts.map((fact, index) => (
      <div key={`item-${index}`} id={`grid-item`}>
        <FirmFactCard variant={fact.cardVariant}>
          {/* <Button variant={fact.buttonVariant}>{fact.description}</Button> */}
          {fact.description}
        </FirmFactCard>
      </div>
    ))
    }
  </div>
);

export default FirmFacts;
