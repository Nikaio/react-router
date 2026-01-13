import { useState, useRef } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export default function Contact() {
  const toast = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });


  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.current.show({
        severity: "warn",
        summary: "Atenção",
        detail: "Preencha todos os campos",
        life: 3000
      });
      return;
    }

    toast.current.show({
      severity: "success",
      summary: "Mensagem enviada",
      detail: "Entraremos em contato em breve!",
      life: 3000
    });

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <div className="grid">
      <Toast ref={toast} />

      <div className="col-12 md:col-6 md:col-offset-3">
        <Card title="Contato">
          <form onSubmit={handleSubmit} className="flex flex-column gap-3">
            
            <span className="p-float-label">
              <InputText
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full"
              />
              <label htmlFor="name">Nome</label>
            </span>

            <span className="p-float-label">
              <InputText
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full"
              />
              <label htmlFor="email">E-mail</label>
            </span>

            <span className="p-float-label">
              <InputTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full"
              />
              <label htmlFor="message">Mensagem</label>
            </span>

            <Button
              type="submit"
              label="Enviar Mensagem"
              icon="pi pi-send"
              className="mt-2"
            />
          </form>
        </Card>
      </div>
    </div>
  );
}
