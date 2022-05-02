import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

import MainLayout from "@layouts/MainLayout";

import "./_global.module.scss";

const Home = lazy(() => import("@pages/Home/Home"));
const Auth = lazy(() => import("@pages/Auth/Auth"));
const Page404 = lazy(() => import("@pages/ErrorPage/Page404/Page404"));

// dynamic redusers re-reselect

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<TopBarProgress />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
