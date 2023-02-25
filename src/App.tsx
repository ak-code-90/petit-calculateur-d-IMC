import {
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { useState, useRef } from 'react';
import BmiControlsx from './components/BmiControls';
import BmiResult from './components/BmiResult';


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

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {

  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const [result, setResult] = useState<number | null>()

  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;

    if (!enteredHeight || !enteredWeight) {
      return;
    }

    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);

    setResult(bmi);

  };

  function resetInputs() {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
    setResult(null);
  }

  return (
    <IonApp>

      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>
            Calculateur d'IMC
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Entre ta taille en mètres</IonLabel>
                <IonInput
                  ref={heightInputRef}
                  placeholder="1.80"
                />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Entre ton poids en kg</IonLabel>
                <IonInput
                  ref={weightInputRef}
                  placeholder="75" />
              </IonItem>
            </IonCol>
          </IonRow>

          <BmiControlsx onCalculate={calculateBMI} onReset={resetInputs} />
          {result &&
            <BmiResult result={result} />
          }

        </IonGrid>
      </IonContent>

    </IonApp>
  )
};

export default App;
