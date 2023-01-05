import Navbar from "../../Components/Nav/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ContentNav from "./ContentNav";
import Hero from "./Hero";
import React, {useState} from 'react';

const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Hero/>
            <ContentNav/>
        </div>
    );
};

export default MainPage;
