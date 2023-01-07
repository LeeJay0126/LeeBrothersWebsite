import Navbar from "../../Components/Nav/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
// import ContentNav from "./ContentNav";
import Hero from "./Hero";
import React, {useState} from 'react';
import ProjectSection from "../../Components/ProjectSection";
import { projectOne, projectTwo, projectThree, about1, about2, Contact } from "../../Components/ProjectSection/Data";
import Footer from "../../Components/Footer";

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
            <ProjectSection {...about1} />
            <ProjectSection {...about2} />
            <ProjectSection {...projectOne} />
            <ProjectSection {...projectTwo} />
            <ProjectSection {...projectThree} />
            <ProjectSection {...Contact} />
            <Footer />
        </div>
    );
};

export default MainPage;
