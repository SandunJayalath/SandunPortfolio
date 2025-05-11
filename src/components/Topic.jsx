import { useEffect, useRef, useState } from "react";

function Topic({title}) {

    const domRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });

        observer.observe(domRef.current);

    return () => observer.disconnect();
    }, [])

    return (
        <>
        <div className="d-flex justify-content-center align-items-center">
            <h3 className={`topic ${isVisible ? 'visible' : ''}`} ref={domRef}>{title}</h3>
        </div>
        </>
    );
}
export default Topic;
