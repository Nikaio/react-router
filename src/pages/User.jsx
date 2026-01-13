import { useParams } from "react-router-dom";
import { Card } from "primereact/card";

export default function User() {
    const { id } = useParams();

    return (
        <Card title="Perfil do Usuário">
            <p>ID do usuário: {id}</p>
        </Card>
    );
};