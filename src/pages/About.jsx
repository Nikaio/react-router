import { Card } from "primereact/card";
import { Divider } from "primereact/divider";

export default function About() {

    return (
        <div className="grid">  
            <div className="col-12 md:col-8 md:col-offset-2">
                <Card title="Sobre este projeto" className="shadow-3">
                    <p className="line-height-3">
                        Este projeto foi desenvolvido com o objetivo de praticar conceitos
                        fundamentais do React, como navegação entre páginas, reutilização de
                        componentes e organização de layouts de forma profissional.
                    </p>

                    <Divider />

                    <h3>Tecnologias utilizadas</h3>
                    
                    <ul className="list-none p-0 flex-column gap-2">
                        <li>⚛️ React com Vite</li>
                        <li>🧭 React Router DOM</li>
                        <li>🎨 PrimeReact</li>
                        <li>📐 PrimeFlex</li>
                        <li>🌗 Dark / Light Theme</li>
                    </ul>

                    <Divider />

                    <p className="text-sm text-600">
                        Projeto desenvolvido com foco em boas práticas e estrutura utilizada
                        em aplicações reais do mercado.
                    </p>
                </Card>
            </div>
        </div>
    );
};