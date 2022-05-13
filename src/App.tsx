import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import { PersistGate } from "redux-persist/integration/react";

import Auth from "@pages/Auth/Auth";

import MainLayout from "@layouts/MainLayout";

import store, { persistor } from "@store/store";

import "@assets/styles/global.module.scss";

import ReduxToastr from "@providers/ReduxToastr";

import "react-redux-toastr/src/styles/index.scss";

const Page404 = lazy(() => import("@pages/ErrorPage/Page404/Page404"));
const Home = lazy(() => import("@pages/Home/Home"));

// dynamic redusers re-reselect

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Suspense fallback={<TopBarProgress />}>
            <QueryClientProvider client={queryClient}>
              <ReduxToastr />
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="auth" element={<Auth />} />
                  <Route path="*" element={<Page404 />} />
                </Route>
              </Routes>
            </QueryClientProvider>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
