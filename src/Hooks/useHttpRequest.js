import { useCallback, useState } from 'react';

const useHttpRequest = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const changeOptionHandler = useCallback(async (abortController, requestConfiguration, workingWithData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfiguration.url, {
                signal: abortController.signal
            });
            if (!response.ok) {
                throw new Error("An error occured");
            }
            const data = await response.json();
            workingWithData(data);
        } catch (error) {
            if (abortController.signal.aborted) {
                setError(error.message);
            } else {
                throw error;
            }
        }
        setIsLoading(false);
    }, [])

    return {
        error: error,
        isLoading: isLoading,
        changeOptionHandler: changeOptionHandler
    }
}

export default useHttpRequest;