import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';


import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';

// import './main.css';

function ListCard() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>FLAGS</IonCardTitle>
        <IonCardSubtitle> flags of five countries</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://images.unsplash.com/photo-1558730009-5f80ddf97dec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80.jpg" />
            </IonThumbnail>
            <IonLabel>USA Flag</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://images.unsplash.com/photo-1619428752198-44bc70f4b27f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80.jpg" />
            </IonThumbnail>
            <IonLabel>South Africa Flag</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://images.unsplash.com/photo-1571175475562-83600102a315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80.jpg" />
            </IonThumbnail>
            <IonLabel>French Flag</IonLabel>
          </IonItem>

          <IonItem lines="full">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://images.unsplash.com/photo-1595181766648-0d0fbe2142f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80.jpg" />
            </IonThumbnail>
            <IonLabel>German Flag</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://images.unsplash.com/photo-1633270100217-f07fe4d92fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80.jpg" />
            </IonThumbnail>
            <IonLabel>Ukranian Flag</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
}
export default ListCard;