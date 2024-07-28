import React, { useState ,useEffect} from 'react';
import CivilityOptions from './CivilityOptions';
import CivilityLabel from './CivilityLabel';

function Civility() {
  const texte = 'Veuillez indiquer votre civilité';
  const [civility, setCivility] = useState('Monsieur');
  const [cunter,setCunter] = useState(0)
  const handleSelectedCivility = (selectedCivility) => {
    setCivilite(selectedCivility);
    setCunter(cunter+1);
  };

useEffect(() => {
 setCunter(cunter+1)
},[civility]);

  return (
    <div className="border border-warning border-4 container text-center">
      <h2 className='text-center'>{texte}</h2>
      <span>{cunter}</span>
      <CivilityLabel civility={civility} />
      <CivilityOptions handleSelectedOptions={handleSelectedCivility} />
    </div>
  );
}

export default Civility;
