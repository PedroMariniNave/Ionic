import { IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { Header } from "../../components/header/Header";

const BadgesPage: React.FC = () => {
    return (
        <>
            <Header />

            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>Jogador Profissional de CS:GO</IonCardSubtitle>
                        <IonCardTitle>Gabriel "FalleN" Toledo</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <p>Gabriel Toledo, conhecido como "FalleN", é um jogador profissional de CS:GO e um dos mais respeitados atiradores de AWP no mundo. Ele é também muito admirado por sua liderança e táticas estratégicas em jogo.</p>
                        <IonBadge color="success">AWP Master</IonBadge>
                        <IonBadge color="primary">Strategic Leader</IonBadge>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </>
    )
}

export { BadgesPage };