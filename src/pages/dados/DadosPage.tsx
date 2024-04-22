import { IonAlert, IonButton, IonPage } from "@ionic/react";
import { Header } from "../../components/header/Header";

import './DadosPage.css'
import { useState } from "react";

const DadosPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const isAuthenticated = (email || telefone);

    return (
        <>
            <Header />

            {isAuthenticated ? (
                <div>
                    <h1>Olá</h1>
                    <p>E-mail: {email}</p>
                    <p>Contato: {telefone}</p>
                </div>
            ) : (
                <>
                    <div id="button-dados">
                        <IonButton>Informe seus dados</IonButton >
                    </div >

                    <IonAlert
                        trigger="button-dados"
                        header="Informe seus dados"
                        inputs={[
                            {
                                name: 'email',
                                type: 'email',
                                placeholder: 'E-mail',
                            },
                            {
                                name: 'telefone',
                                type: 'tel',
                                placeholder: 'Telefone',
                            },
                        ]}
                        buttons={[
                            {
                                text: 'Cancelar',
                                role: 'cancel',
                            },
                            {
                                text: 'Enviar',
                                role: 'confirm',
                                handler: (data) => {
                                    setEmail(data.email);
                                    setTelefone(data.telefone);
                                },
                            },
                        ]}
                    ></IonAlert>
                </>)}
        </>
    )
}

export { DadosPage };