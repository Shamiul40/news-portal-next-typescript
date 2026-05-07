"use-client"

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function MobileMenu() {

    const [isOpenMenu, setOpenMenu] = useState(false);

    const openMenu =()=>{
        setOpenMenu(!isOpenMenu)
    }


  return (
    <Button onClick={openMenu} className="lg:hidden">
         {
        isOpenMenu ? <Menu size={24} /> : <X size={24} />
      }
    </Button>
    
     
    
  )
}

