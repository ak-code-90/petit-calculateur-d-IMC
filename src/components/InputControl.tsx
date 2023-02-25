import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react"

const InputControl: React.FC<{
    selectedUnits: 'mkg' | 'ftlbs';
    onChangeUnit: (value: 'mkg' | 'ftlbs') => void
}> = ({ selectedUnits, onChangeUnit }) => {

    function inputChangeHandler(event: CustomEvent) {
        onChangeUnit(event.detail.value)
    }

    return (
        <IonSegment value={selectedUnits} onIonChange={inputChangeHandler}>
            <IonSegmentButton value='mkg'>
                <IonLabel>Mètres/Kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='ftlbs'>
                <IonLabel>Ft/Lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    )
}
export default InputControl