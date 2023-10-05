import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from './Sidebar'



const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    {children}
                </div>
                <Sidebar />

            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout