import { useState } from "react";

export function useDropdown () {
    const [drop, setDrop] = useState(false);

    const shuldDrop = () => {
        if(drop === true){
            setDrop(false);
        }else{
            setDrop(true);
        }
    }

    return {drop, shuldDrop};
}

/*Kan återanvända till drop down för filter av den versa data. */