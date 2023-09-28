import { useState, useEffect } from 'react';

import useAdviceSlip from '../../services/useAdviceSlip';
import setContent from '../../utils/SetContent';
import ContentView from '../contentView/ContentView';

import './app.scss';
import dividerDesktop from '../../images/pattern-divider-desktop.svg';
import dividerMobile from '../../images/pattern-divider-mobile.svg'

const App = () => {
  const [advice, setAdvice] = useState(null);
  const {process, clearError, setProcess, getAdvice} = useAdviceSlip();
  console.log('render')
  const updateAdvice = () => {
    clearError();

    getAdvice()
      .then(res => setAdvice(prev => res))
      .then(() => setProcess('success'));
  }

  useEffect(() => {
    updateAdvice();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {setContent(process, ContentView, advice)}
      <picture>
        <source
            media='(max-width: 375px)'
            srcSet={dividerMobile}
        />
        <img src={dividerDesktop} alt="divider" />
      </picture>
    </>
  );
}

export default App;