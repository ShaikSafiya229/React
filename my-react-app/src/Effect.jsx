import { useEffect } from "react";

function Data() {
    useEffect(() => {
        console.log("good morning");
    }, []);

    return <h1>Good Morning</h1>;
}

export default Data;