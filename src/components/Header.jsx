import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useState } from "react";
import AppSidebar from "./Sidebar";



export default function Header({toggleTheme, isDark}) {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const start = (
        <Button 
            icon="pi pi-bars"
            className="p-button-text"
            onClick={() => setSidebarVisible(true)}
        />
    );

    const end = (
        <Button 
            icon= {isDark ? "pi pi-sun" : "pi pi-moon"}
            className="p-button-text"
            onClick={toggleTheme}
        />
    );

    return (
        <>
            <Menubar start={start} end={end} />
            <AppSidebar 
                visible={sidebarVisible}
                onHide={() => setSidebarVisible(false)}
            />
        </>
    );
};