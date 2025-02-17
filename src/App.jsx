import { BrowserRouter } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserLayout />
      </BrowserRouter>
    </>
  );
}

export default App;
