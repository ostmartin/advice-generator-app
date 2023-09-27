import { useCallback } from "react";

import useHttp from "../hooks/http.hook";

const useAdviceSlip = () => {
    const _url = 'https://api.adviceslip.com/advice';

    const {process, request, clearError, setProcess} = useHttp();

    const getAdvice = useCallback(async () => {
        const slipObj = await request(_url);
        
        return slipObj.slip;
        // eslint-disable-next-line
    }, [])

    return {process, clearError, setProcess, getAdvice};
}

export default useAdviceSlip;