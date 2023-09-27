import { useState, useCallback } from "react";

const useHttp = () => {
    const [process, setProcess] = useState('waiting');

    const request = useCallback(async (url) => {
        setProcess('loading');

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.state}`);
            }

            return await response.json();
        } catch (error) {
            setProcess('error');

            throw error;
        }

    }, [])

    const clearError = useCallback(() => {
        setProcess('loading');
    }, [])

    return {process, request, clearError, setProcess};
}

export default useHttp;