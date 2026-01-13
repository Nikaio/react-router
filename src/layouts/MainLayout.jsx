import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/useTheme";

export default function MainLayout() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`min-h-screen ${theme === "dark" ? "surface-900" : "surface-0"}`}>
            <Header toggleTheme={toggleTheme} isDark={theme === "dark"} />
            <main className="p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};