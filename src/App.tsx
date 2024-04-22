import { IonApp, IonContent, IonHeader, IonPage, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { Route } from 'react-router';
import { ListGamesPage } from './pages/list-games/ListGamesPage';
import { DadosPage } from './pages/dados/DadosPage';
import { LoginPage } from './pages/login/LoginPage';
import { UserInfoPage } from './pages/user-info/UserInfoPage';
import { BadgesPage } from './pages/badges/Badges';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <IonPage>
          <IonContent fullscreen>
            <Route exact path="/" component={ListGamesPage} />
            <Route exact path="/dados" component={DadosPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/welcome" component={UserInfoPage} />
            <Route exact path="/badges" component={BadgesPage} />
          </IonContent>
        </IonPage>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;