import React, { useState } from "react"
export const Barcontext = React.createContext()
export  function BarcontextProvider({children}){




const [Open,setOpen] = useState(false);
const [issigned,setSigned] = useState(true);


return(


<Barcontext.Provider value={{Open,setOpen,issigned,setSigned}}>

{children}

</Barcontext.Provider>




)


}