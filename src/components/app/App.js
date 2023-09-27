import { useState, useEffect } from 'react';

import useAdviceSlip from '../../services/useAdviceSlip';
import setContent from '../../utils/SetContent';
import ContentView from '../contentView/ContentView';

import './app.scss';

const App = () => {
  const [advice, setAdvice] = useState(null);
  const {process, clearError, setProcess, getAdvice} = useAdviceSlip();

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
    <div className="App">
      {setContent(process, ContentView, advice)}
    </div>
  );
}

export default App;