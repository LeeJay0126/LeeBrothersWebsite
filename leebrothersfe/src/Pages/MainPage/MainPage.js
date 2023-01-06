import Navbar from "../../Components/Nav/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ContentNav from "./ContentNav";
import Hero from "./Hero";
import React, {useState} from 'react';
import ProjectSection from "../../Components/ProjectSection";
import { projectOne, projectTwo, projectThree } from "../../Components/ProjectSection/Data";

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
            <ProjectSection {...projectOne} />
            <ProjectSection {...projectTwo} />
            <ProjectSection {...projectThree} />
        </div>
    );
};

export default MainPage;
