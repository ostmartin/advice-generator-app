import { useState, useEffect } from 'react';

import useAdviceSlip from '../../services/useAdviceSlip';
import setContent from '../../utils/SetContent';
import ContentView from '../contentView/ContentView';
import GetAdviceButton from '../getAdviceButton/GetAdviceButton';

import './adviceBlock.scss';
import dividerDesktop from '../../images/pattern-divider-desktop.svg';
import dividerMobile from '../../images/pattern-divider-mobile.svg';

const AdviceBlock = () => {
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
        <div className='advice__block'>
        <div className='advice__content'>
            <div className='advice__id'>{process === 'success' ? `advice #${advice.id}` : null}</div>
                {setContent(process, ContentView, advice)}
            </div>
            <picture>
                <source
                    media='(max-width: 375px)'
                    srcSet={dividerMobile}
                />
                <img src={dividerDesktop} alt="divider" />
            </picture>
            <GetAdviceButton getNewAdvice={updateAdvice} />
        </div>
  );
}

export default AdviceBlock;