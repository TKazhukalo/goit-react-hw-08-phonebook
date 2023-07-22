import React from "react";
import { InfinitySpin } from  'react-loader-spinner'
import {  LoaderAnimation } from "./Loader.styled";
 const Loader = () => {
   return ( 
    <LoaderAnimation>
      <InfinitySpin 
        width='150'
         color="#ba3b46"
      />
    </LoaderAnimation>  
    )
}

export default Loader;