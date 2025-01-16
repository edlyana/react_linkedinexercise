import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Diplomas from "./Diplomas";
import Module from "./Module";
import Header from "./Header";
import Session from "./Session";
import Register from "./Register";
import Confirmation from "./Confirmation";
import Faq from "./Faq";

function App() {
  return (
    <div className="app">

      {/* To call Header into the App */}
      <Header />  

      <Routes>
        <Route path="/" element={<Home title="Welcome RP School of Infocomm" />} />
        <Route path="faq" element={<Faq/> }/>

        <Route path="diplomas" element={<Diplomas />}>
        {/* path = ":catId" lets you declare a dynamic route, it can match any values in the category portion of the URL */}
          <Route path=":moduleId" element={<Module />}>
            <Route path=":sessionId" element={<Session />}/> 
          </Route>
          <Route index element={<h3>Select a diploma from above</h3>} />
        </Route>

        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation/> } />
        <Route
          path="*"  // VALUE OF PATH = '*', SPECIAL NO MATCH ROUTE GETS CALLED TO DISPLAY ERROR MSG 404
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;2025 | <a href="https://www.rp.edu.sg/home">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
