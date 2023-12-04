import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/public/AuthPage/AuthPage";
import RootLayout from "./layouts/RootLayout/RootLayout";
import HomePage from "./pages/user/HomePage/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/auth" element={<AuthPage />} />
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
