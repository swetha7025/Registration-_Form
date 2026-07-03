import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RegistrationForm from "./components/RegistrationForm";
import Products from "./components/Products";
import Terms from "./components/Terms";

import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="main">
        <Sidebar />

        <div className="form-area">
          <h2>Please Fill Out The Registration Form Below</h2>

          <RegistrationForm />

          <Products />

          <Terms />
        </div>
      </div>
    </div>
  );
}

export default App