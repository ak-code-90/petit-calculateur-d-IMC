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
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  setupIonicReact,
  useIonAlert
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
import InputControl from './components/InputControl';

setupIonicReact();

const App: React.FC = () => {

  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const [result, setResult] = useState<number | null>()
  const [errorAlert] = useIonAlert()
  const [selectedUnits, setSelectedUnits] = useState<'mkg' | 'ftlbs'>('mkg')

  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;

    if (!enteredHeight ||
      !enteredWeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
    ) {
      errorAlert({
        header: 'Erreur de saisie',
        subHeader: '',
        message: 'Veuillez entrer une taille et un poids valides (non négatifs/non nuls)',
        buttons: ['OK'],
      })
      return;
    }

    const weightConversionFactor = selectedUnits === 'ftlbs' ? 2.2 : 1;
    const heightConversionFactor = selectedUnits === 'ftlbs' ? 3.28 : 1;
    const weight = +enteredWeight / weightConversionFactor;
    const height = +enteredHeight / heightConversionFactor

    const bmi = weight / (height * height);

    setResult(bmi);

  };

  function resetInputs() {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
    setResult(null);
  }

  function setUnitsHandler(selectedUnits: 'mkg' | 'ftlbs') {
    setSelectedUnits(selectedUnits)
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

          <IonCol>
            <InputControl onChangeUnit={setUnitsHandler} selectedUnits={selectedUnits} />
          </IonCol>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Entre ta taille ({selectedUnits === 'mkg' ? 'mètres' : 'feet'})</IonLabel>
                <IonInput
                  type='number'
                  ref={heightInputRef}
                  placeholder="1.80"
                />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Entre ton poids ({selectedUnits === 'mkg' ? 'kg' : 'lbs'})</IonLabel>
                <IonInput
                  type='number'
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
