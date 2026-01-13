import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function AppSidebar({ visible, onHide }) {
    const navigate = useNavigate();

    return (
        <Sidebar visible = {visible} onHide={onHide}>
            <h3>Menu</h3>

            <div className="flex flex-column gap-2">
                <Button 
                    label= "Home"
                    icon="pi pi-home"
                    className="p-button-text"
                    onClick={() =>{
                        navigate("/");
                        onHide();
                    }}
                />

                <Button 
                    label="Sobre"
                    icon="pi pi-info-circle"
                    className="p-button-text"
                    onClick={() => {
                        navigate('/about');
                        onHide();
                    }}
                />

                <Button 
                    label="Contato"
                    icon="pi pi-envelope"
                    className="p-button-text"
                    onClick={() => {
                        navigate('/contact');
                        onHide();
                    }}
                />
            </div>
        </Sidebar>
    );
};