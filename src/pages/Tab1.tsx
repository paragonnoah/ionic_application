import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';


function Example() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle><strong>IONIC APP</strong></IonCardTitle>

        <IonCardSubtitle><sub>buiding ionic app using card components</sub></IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      <h1 >IONIC APP</h1>
       <p>Ionic is a complete open-source SDK for hybrid
         mobile app development created by <br />
        <i>Max Lynch, Ben Sperry, and Adam Bradley of Drifty Co. in 2013.</i> <br /> The original version was released in 2013 and built on top of <b>AngularJS and Apache Cordova</b> 
        </p> 
      </IonCardContent>
    </IonCard>
  );
}


export default Example;