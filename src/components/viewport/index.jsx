import { useEffect, useState } from "react";

const ViewPort = () => {
    const [size, setSize] = useState({
        width: window.screen.width, height:
            window.screen.height
    });
    useEffect(() => {
        const updateWindow = () => {
            let { innerWidth, innerHeight } = window;
            setSize({ width: innerWidth, height: innerHeight });
        }
        return () => {

        window.addEventListener('resize', updateWindow);
        }
    });
    return (
    
        <div> 
            <h1 class="h1">
                
                Your ViewPort size is:
                
            </h1>
            <div> 
                <h2 class="h2">
                {size.width} px X {size.height} px 
                
                </h2>
            </div>
            <hr /> 
        
        </div>
        
    );
    
}
export default ViewPort;