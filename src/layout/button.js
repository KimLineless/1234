import { useState } from 'react'

export default function Btn(props) {
    const [SlideOpen,setSlideOpen]=useState(false);

    function Delete(){
        setSlideOpen(true);
    }

    function Open(){
        setSlideOpen(false)
    }
}