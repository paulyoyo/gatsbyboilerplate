import * as React from "react";
import Seo from "@components/seo";
import { headerData, footerData } from "@constants";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";

const IndexPage = ({ location }) => {
    return (
        <Layout location={location}>
            <Seo title="Inicio" />
            <Header data={headerData} />
            <main className="site-wrapper-reveal">Hola</main>
            <Footer data={footerData} />
        </Layout>
    );
};

export default IndexPage;
