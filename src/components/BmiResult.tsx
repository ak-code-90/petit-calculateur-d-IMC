import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react"

const BmiResult: React.FC<{ result: Number | String }> = ({ result }) => {
    return (
        <IonRow>
            <IonCol >
                <IonCard>
                    <IonCardContent className='ion-text-center'>
                        <h2>{+result}</h2>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    )
}

export default BmiResult