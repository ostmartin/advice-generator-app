import { useState, useEffect } from 'react';

import useAdviceSlip from '../../services/useAdviceSlip';
import setContent from '../../utils/SetContent';
import ContentView from '../contentView/ContentView';

import './app.scss';
import dividerDesktop from '../../images/pattern-divider-desktop.svg';
import dividerMobile from '../../images/pattern-divider-mobile.svg'

const App = () => {
  const [advice, setAdvice] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const {process, clearError, setProcess, getAdvice} = useAdviceSlip();

  const updateAdvice = () => {
    clearError();

    getAdvice()
      .then(res => setAdvice(prev => res))
      .then(() => setProcess('success'));
  }

  const handleResize = () => {
    console.log('listener')
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    updateAdvice();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {setContent(process, ContentView, advice)}
      {windowWidth >= 376 ? 
        (<img src={dividerDesktop} alt="divider" />) :
        (<img src={dividerMobile} alt="divider" />)
      }
    </>
  );
}

export default App;