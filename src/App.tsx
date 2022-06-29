import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MetroBundler} from "./modules/Metro";
import {Home} from "./modules/Home";
import {Global} from "./modules/Global";
import {QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<Global/>}>
                    <Route index element={<Home/>}/>
                    <Route path="metro" element={<MetroBundler/>}/>
                </Route>
            </Routes>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;

