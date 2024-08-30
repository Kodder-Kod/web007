import ServiceContact from "@/app/servicecomponents/servicecontact/page";
import ServiceFeatures from "@/app/servicecomponents/servicefeatures/page";
import ServiceHero from "@/app/servicecomponents/servicehero/page";
import ServiceIntro from "@/app/servicecomponents/serviceintro/page";
import ServicePrice from "@/app/servicecomponents/serviceprice/page";
import ServiceStats from "@/app/servicecomponents/servicestats/page";
import ServiceTestimony from "@/app/servicecomponents/servicetestimony/page";

const Servicepage = () => {

    return (

        <>
            <ServiceHero />
            <ServiceIntro />
            <ServiceFeatures />
            <ServiceStats />
            <ServicePrice />
            <ServiceTestimony />
            <ServiceContact />
        </>
    )
}


export default Servicepage;