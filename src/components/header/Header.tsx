import { IonButton, IonHeader, IonToolbar } from "@ionic/react";
import { useHistory } from "react-router";

import './Header.css'

const Header = () => {
    const history = useHistory();

    return (
        <IonHeader>
            <IonToolbar>
                <div className="header-items">
                    <h2>Portfólio</h2>

                    <IonButton onClick={() => history.push("/")}>Lista de Jogos</IonButton>
                    <IonButton onClick={() => history.push("/login")}>Login</IonButton>
                    <IonButton onClick={() => history.push("/badges")}>Badges</IonButton>
                </div>
            </IonToolbar>
        </IonHeader>
    );
}

export { Header }