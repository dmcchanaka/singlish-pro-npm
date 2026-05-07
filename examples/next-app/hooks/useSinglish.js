import { useEffect, useRef } from 'react';
import Singlish from 'singlish-pro';

export function useSinglish(options = {}) {
    const singlishRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && !singlishRef.current) {
            const SinglishClass = Singlish.default || Singlish;
            singlishRef.current = new SinglishClass({
                showUI: true,
                enabled: false,
                ...options
            });
        }

        return () => {
            if (singlishRef.current) {
                singlishRef.current.destroy();
                singlishRef.current = null;
            }
        };
    }, []);

    return singlishRef.current;
}
