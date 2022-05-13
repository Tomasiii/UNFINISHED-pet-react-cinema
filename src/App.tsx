import {Suspense, lazy} from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import {PersistGate} from "redux-persist/integration/react";

import Auth from "@pages/Auth/Auth";

import MainLayout from "@layouts/MainLayout";

import store, {persistor} from "@store/store";

import "@assets/styles/global.module.scss";

import ReduxToastr from "@providers/ReduxToastr";

import "react-redux-toastr/src/styles/index.scss";
import AuthProvider from "@providers/auth/AuthProvider";
import Guard from "@utils/Guard/Guard";

const Page404 = lazy(() => import("@pages/ErrorPage/Page404/Page404"));
const Home = lazy(() => import("@pages/Home/Home"));

// dynamic redusers re-reselect

const queryClient = new QueryClient();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <AuthProvider/>
                    <Suspense fallback={<TopBarProgress/>}>
                        <QueryClientProvider client={queryClient}>
                            <ReduxToastr/>
                            <Routes>
                                <Route path="/" element={<MainLayout/>}>
                                    <Route index element={<Home/>}/>
                                    {/*<Route index element={<Guard auth role><Home/></Guard>}/>*/}
                                    <Route path="auth" element={<Auth/>}/>
                                    <Route path="manage" element={<Admin/>}>
                                        <Route></Route>
                                    </Route>
                                    <Route path="*" element={<Page404/>}/>
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
