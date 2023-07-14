import InitialMessage from "./components/InitialMessage";
import PersonalInfo from "./components/PersonalInfo"
import ContactInfo  from "./components/ContactInfo"
import TallerDetails from "./components/TallerDetails"
import ParticipationDetails from "./components/ParticipationDetails"

import { useState } from "react"

import NavigationState from "./context/NavigationState"

function App() {

  const [step, setStep] = useState('initialmessage');

  return (
    <NavigationState.Provider value={{step, setStep}}>
      <div className="container">
        {step === 'initialmessage' && <InitialMessage />}
        {step === 'personalinfo' && <PersonalInfo />}
        {step === 'contactinfo' && <ContactInfo />}
        {step === 'tallerdetails' && <TallerDetails />}
        {step === 'participationdetails' && <ParticipationDetails />}
      </div>
    </NavigationState.Provider>
  )
}

export default App;
