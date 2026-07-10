import {useState, useEffect} from 'react';

function useMediaQuery(initialQuery: string) {
    const [matches, setMatches] = useState(false);

    const handleChange = (media: MediaQueryListEvent) : any => {
        setMatches(media.matches);
    }

    useEffect(() => {
        const matchMedia = window.matchMedia(initialQuery);
        setMatches(matchMedia.matches);

        matchMedia.addEventListener('change', handleChange);
        return () => {
            matchMedia.removeEventListener('change', handleChange);
        }
    }, [])

    return [matches];
}

export default useMediaQuery;