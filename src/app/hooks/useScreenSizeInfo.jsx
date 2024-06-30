import { useEffect, useState } from "react";

const useScreenSizeInfo = () => {
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleScreenDetection = () => {
            const screenWidth = window.innerWidth;
            setScreenSize(screenWidth);
        };

        handleScreenDetection();
        window.addEventListener("resize", handleScreenDetection);

        return () => {
            window.removeEventListener("resize", handleScreenDetection);
        };
    }, [screenSize]);

    return screenSize ;
};

export default useScreenSizeInfo;
