import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import SolveEquation from "../components/SolveEquation";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="small">
              <h2>Giải phương trình bậc 2</h2>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <SolveEquation />
      </IonContent>
    </IonPage>
  );
};

export default Home;
