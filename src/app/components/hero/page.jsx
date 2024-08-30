import { Container } from "reactstrap";
import React from "react";


const Hero = () => {

    return (

        <div className="page-header header-filter">
            <div className="squares square1" />
            <div className="squares square2" />
            <div className="squares square3" />
            <div className="squares square4" />
            <div className="squares square5" />
            <div className="squares square6" />
            <div className="squares square7" />
            <Container>
                <div className="content-center brand">
                    <h1 className="h1-seo">Chi-Send</h1>
                    <h3 className="d-none d-sm-block">
                        Transforming Technology into wealth
                    </h3>
                </div>
            </Container>
        </div>
    )
}


export default Hero;