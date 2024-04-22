import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonPage, IonRow, useIonToast } from "@ionic/react";
import { Header } from "../../components/header/Header";
import { useState } from "react";
import { GlobalValues } from "../../global/GlobalValues";
import { useHistory } from "react-router";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [present] = useIonToast();
    const history = useHistory();

    const accounts = [{
        username: "admin",
        password: "admin"
    }];

    const handleLoginButtonClick = () => {
        var accountInfo = accounts.find(f => f.username == username);
        if (accountInfo?.password != password) {
            present({
                message: 'Senha incorreta!',
                duration: 2500,
                color: 'danger'
            });
            return;
        }

        present({
            message: 'Autenticado com sucesso!',
            duration: 2500,
            color: 'success'
        });

        GlobalValues.Username = username;
        history.push("/welcome")
    };

    return (
        <>
            <Header />

            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Usuário</IonLabel>
                                <IonInput
                                    value={username}
                                    onIonChange={e => setUsername(e.detail.value!)}
                                    type="text"
                                    required
                                />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Senha</IonLabel>
                                <IonInput
                                    value={password}
                                    onIonChange={e => setPassword(e.detail.value!)}
                                    type="password"
                                    required
                                />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block" onClick={handleLoginButtonClick}>
                                Entrar
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </>
    )
}

export { LoginPage };