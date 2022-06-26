import { useState } from "react";
import "./App.css";
import Footer from "./component/Footer/Footer.component";
import InputCard from "./component/InputCard/InputCard.component";
import UserDetailsCard from "./component/UserDetailsCard/UserDetailsCard.component";

function App() {
  const [userData, setUserData] = useState(null);
  return (
    <div className="w-screen min-h-screen bg-gray-200 flex flex-col items-center font-outfit">
      <header className="font-outfit flex justify-center items-center h-1/6 mt-6">
        <h1 className="text-2xl md:text-4xl">
          <ion-icon name="logo-github"></ion-icon>
          <span className="ml-2 md:ml-4 font-semibold">GitHub User Search</span>
        </h1>
      </header>
      <InputCard setUserData={setUserData} />
      {userData && <UserDetailsCard userDetails={userData} />}
      <Footer />
    </div>
  );
}

export default App;
