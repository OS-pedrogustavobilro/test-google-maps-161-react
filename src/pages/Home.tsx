import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter
} from '@ionic/react';
import { GoogleMap } from '@capacitor/google-maps';
import { useRef } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const mapRef = useRef<HTMLElement | null>(null);

  useIonViewDidEnter(() => {
    const initMap = async () => {
      if (!mapRef.current) return;

      await GoogleMap.create({
        id: 'test-map',
        element: mapRef.current,
        apiKey: 'VALID_API_KEY',
        config: {
          center: { lat: 33.6, lng: -117.9 },
          zoom: 8
        }
      });

      console.log('Map created successfully');
    };

    void initMap();
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={false}>
        <capacitor-google-map ref={mapRef}></capacitor-google-map>
      </IonContent>
    </IonPage>
  );
};

export default Home;