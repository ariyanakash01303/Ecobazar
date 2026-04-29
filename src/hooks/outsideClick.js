import { useEffect } from "react";

function useOutsiteClick (ref,callback,enabled = true){
    useEffect(()=>{
      if(!enabled) return;
       function handleClick (e){
        if(ref.current && !ref.current.contains(e.target)){
            callback();
        }
          
       }
       document.addEventListener("mousedown",handleClick);
       return ()=> removeEventListener("mousedown",handleClick);
    },[ref,callback,enabled]);
}
export default useOutsiteClick;