import { useEffect, useState } from "react"

function UsePromise(promiseCreator, deps) {
    const [resolved, setResolved] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const process = async () => {
        setLoading(true);
        try {
            const result = await promiseCreator();
            setResolved(result);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        process();
        // eslint-disable-next-line
    }, deps);
    return [loading, resolved, error];
}

export default UsePromise
