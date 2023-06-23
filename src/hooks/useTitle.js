import { useEffect } from "react"

const useTitle = title =>{
    useEffect( () =>{
        document.title = `${title} - e-waste`;
    }, [title])
}


export default useTitle;