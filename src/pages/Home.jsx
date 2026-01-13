import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <Card title="Bem-vindo" className="shadow-4">
            <p>Projeto React usando PrimeReact e React Router.</p>
            <Button 
                label="Ver usuário 1"
                icon="pi pi-user"
                onClick={() => navigate("/user/1")}
            />
        </Card>
    );
};
