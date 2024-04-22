import { IonItem, IonLabel, IonList, IonListHeader, IonPage, useIonToast } from '@ionic/react';
import { Header } from '../../components/header/Header';

import './ListGamesPage.css';

const ListGamesPage: React.FC = () => {
    const [present, dismiss] = useIonToast();
    const games = ['Pokémon Yellow', 'Mega Man X', 'The Legend of Zelda', 'Pac-Man', 'Super Mario World'];

    const showGameName = (gameName: string) => {
        showToast(gameName);
    }

    const showToast = (gameName: string) => {
        dismiss().then(() => {
            present({
                message: `Jogo selecionado: ${gameName}`,
                duration: 2500,
                color: 'success'
            });
        });
    }

    return (
        <>
            <Header />

            <IonList>
                <IonListHeader>
                    <IonLabel>Video Games</IonLabel>
                </IonListHeader>

                {games.map(item => (
                    <IonItem className='list-item' onClick={() => showGameName(item)}>
                        <IonLabel>{item}</IonLabel>
                    </IonItem>
                ))}
            </IonList>
        </>
    );
}

export { ListGamesPage };