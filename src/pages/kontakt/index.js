import React from 'react'

// Vendor components

// Contact components
import Title from "./title/Title";
import Form from "./form/Form";
import CompanyInfo from "./companyInfo/CompanyInfo";
import Localization from "./localization/Localization";

// Common components
import Header from "../components/menu/Menu";
import Footer from "../components/footer/Footer";


const Contact = () => {
    return (
        <section className="contact">
            <header className="contact__header">
                <Header/>
            </header>
            <Title/>
            <Form/>
            <CompanyInfo />
            <Localization/>
            <Footer/>
        </section>
    )
}

export default Contact