import React from "react";
import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

const BmiControlsx: React.FC<{
    onCalculate: () => void;
    onReset: () => void
}> = ({ onCalculate, onReset }) => {
    return (
        <IonRow style={{ maxWidth: 800, margin: '0 auto' }}>
            <IonCol className='ion-text-left'>
                <IonButton onClick={onCalculate}>
                    <IonIcon slot="start" icon={calculatorOutline} />
                    Calculer
                </IonButton>
            </IonCol>

            <IonCol className='ion-text-right'>
                <IonButton onClick={onReset} fill="outline">
                    <IonIcon slot="end" icon={refreshOutline} />
                    Reset
                </IonButton>
            </IonCol>
        </IonRow>
    )
}

export default BmiControlsx