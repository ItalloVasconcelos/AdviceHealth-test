import { Link } from "react-router-dom"
import './Sidebar.scss'
import { BsHouseDoor, BsFillCalendarDateFill, BsPeople, BsCalendarPlus, BsPersonCircle, BsCaretDownFill } from "react-icons/bs";
import LogoMedicalCare from '../../assets/imgs/LOGOMEDICALCARE1.svg'
import { useState } from "react";



export const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="sidebar__itens">
                <Link to={"/"} children={<img src={LogoMedicalCare} />} />
            </div>
            <div className="sidebar__itens">
                <Link to={"/"} className="sidebar__itens-a" >
                    <BsHouseDoor size={20} />
                </Link>
            </div>

            <div className="sidebar__itens">
                <Link
                    to={"/booking"}>
                    <BsFillCalendarDateFill size={20} />
                </Link>
            </div>
            <div className="sidebar__itens">
                <Link to={"/consult"}>
                    <BsPeople size={20} />
                </Link>
            </div>
            <div className="sidebar__itens">
                <Link to={"/patient"} >
                    <BsCalendarPlus size={20} />
                </Link>
            </div>

            <div className="sidebar__itens-user">
                <Link to={"/"} >
                    <BsPersonCircle size={20} /> <BsCaretDownFill size={8} />
                </Link>
            </div>
        </nav >
    )
}