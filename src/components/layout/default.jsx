import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router';
function Default({ children }) {
    return (
        <>
            <main>
                <Header />
                <Outlet />
                <Footer />
            </main>
        </>
    );
}

export default Default;