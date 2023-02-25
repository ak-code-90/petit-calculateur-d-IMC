import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react"

const BmiResult: React.FC<{ result: Number }> = ({ result }) => {
    return (
        <IonRow style={{ maxWidth: 400, margin: '0 auto' }}>
            <IonCol>
                <IonCard>
                    <IonCardContent className='ion-text-center'>
                        <h3 className="ion-text-sm">Votre Indice de Masse Corporelle est :</h3>
                        <h3><strong>{+result.toFixed(2)}</strong></h3>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    )
}

export default BmiResult