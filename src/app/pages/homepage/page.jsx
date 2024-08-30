import Aboutus from "../../components/aboutus/page";
import Client from "../../components/client/page";
import Contact from "../../components/contact/page";
import Hero from "../../components/hero/page";
import Intro from "../../components/intro/page";
import Services from "../../components/services/page";
import Testimony from "../../components/testimony/page";
import Whyus from "../../components/whyus/page";

const Homepage = () => {

    return (

        <>

        <Hero/>
        <Intro/>
        <Services/>
        <Aboutus/>
        <Client/>
        <Whyus/>
        <Testimony/>
        <Contact/>
        
        </>
    )
}


export default Homepage;