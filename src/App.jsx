import InitialMessage from "./components/InitialMessage";
import PersonalInfo from "./components/PersonalInfo"
import ContactInfo  from "./components/ContactInfo"
import TallerDetails from "./components/TallerDetails"
import ParticipationDetails from "./components/ParticipationDetails";
import ConfirmData from "./components/ConfirmData";
import ConfirmedData from "./components/ConfirmedData";

import { useState } from "react"
import NavigationState from "./context/NavigationState"

import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const [step, setStep] = useState('initialmessage');

  return (
    <Provider store={store} >
      <NavigationState.Provider value={{step, setStep}}>
        <div className="container">
          {step === 'initialmessage' && <InitialMessage />}
          {step === 'personalinfo' && <PersonalInfo />}
          {step === 'contactinfo' && <ContactInfo />}
          {step === 'tallerdetails' && <TallerDetails />}
          {step === 'participationdetails' && <ParticipationDetails />}
          {step === 'confirmdata' && <ConfirmData />}
          {step === 'confirmeddata' && <ConfirmedData />}
        </div>
      </NavigationState.Provider>
    </Provider>
  )
}

export default App;
