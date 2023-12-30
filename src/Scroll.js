import React, { useEffect } from "react"
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { close } from './redux/openCart'

const Scroll = () => {
    const path = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(close())
    }, [path]);

  return <></>
}

export default Scroll