

import * as React from 'react';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import LanguageIcon from '@mui/icons-material/Language';
import { IoWifiSharp } from "react-icons/io5";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LanIcon from '@mui/icons-material/Lan';
import { FaHandsHelping } from "react-icons/fa";
import AssessmentIcon from '@mui/icons-material/Assessment';

import CategoryCard from "components/client/page";
import VideocamIcon from '@mui/icons-material/Videocam';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';



import { IoBusiness } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import CloudIcon from '@mui/icons-material/Cloud';

// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
    //  Button,
    // Card,
    // CardHeader,
    //  CardBody,
    CardFooter,
    //  CardTitle,
    ListGroupItem,
    ListGroup,
    // Container,
    // Row,
    // Col,
} from "reactstrap";

import {
    //Container,
    //Card,
    CardContent,
    Typography,
    Grid,
    // Button,
    Box,
    AvatarGroup,
    Avatar,
    Alert
} from "@mui/material";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Label,
    FormGroup,
    Form,
    Input,
    FormText,
    NavItem,
    CardTitle,
    NavLink,
    Nav,
    Table,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    UncontrolledCarousel,
} from "reactstrap";
// core components

import { Stack } from "@mui/system";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import Services from 'components/PageHeader/Services';
import RouterIcon from '@mui/icons-material/Router';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ContactApi from 'components/PageHeader/Contact';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SecurityIcon from '@mui/icons-material/Security';
import CellWifiIcon from '@mui/icons-material/CellWifi';



const CATEGORIES = [
    {
        img: "#",
        icon: <AiFillAndroid />,
        title: "Frontend Web Development",
        desc: "300 Courses",
    },
    {
        img: '../image/blogs/blog-12.jpeg',
        icon: <AiFillAndroid />,
        title: "Backend Web Development",
        desc: "200 Courses",
    },
    {
        img: './image/blogs/blog-10.jpeg',
        icon: <AiFillAndroid />,
        title: "Web Security & Performance",
        desc: "240 Courses",
    },
    {
        img: '../image/blogs/blog-13.png',
        icon: <AiFillAndroid />,
        title: "Full-Stack Web Development",
        desc: "100 Courses",
    },
];



const items = [
    {
        icon: <FingerprintIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Biometric and Automatic Gates',
        pin: "/services/internet/biometric",
        description:
            "Secure your access with a modern touch,  Biometric gates protect you as much."
    },
    {
        icon: <VideocamIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'CCTVs',
        pin: "/services/internet/CCTV",
        description:
            "Watch over your space with CCTV’s view,  Keeping your premises safe and true."
    },
    {
        icon: <CloudIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Cloud Services',
        pin: "/services/internet/Cloud",
        description:
            "Store and access from anywhere high,  Cloud services reach up to the sky."
    },
    {
        icon: <SettingsRemoteIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Network Solutions',
        pin: "/services/internet/network",
        description:
            "Networks that function without a hitch,  Solutions that make your tech seamlessly switch."
    },
    {
        icon: <TravelExploreIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'SEO (Search Engine Optimization)',
        pin: "/services/internet/seo",
        description:
            "Boost your rank with SEO’s might,  Shining your website in the search results' light."
    },
    {
        icon: <RouterIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Internet Services and Hotspot',
        pin: "/services/internet/internet",
        description:
            "Connect with ease, stay online,  Our internet services are truly fine."
    },
];


const Internet = () => {

    React.useEffect(() => {
        document.body.classList.toggle("landing-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("landing-page");
        };
    }, []);

    return (
        <>
            <IndexNavbar />
            <div className="page-header">
                <img
                    alt="..."
                    className="path"
                    src={require("assets/img/blob.png")}
                />
                <img
                    alt="..."
                    className="path2"
                    src={require("assets/img/path2.png")}
                />
                <img
                    alt="..."
                    className="shapes triangle"
                    src={require("assets/img/triunghiuri.png")}
                />
                <img
                    alt="..."
                    className="shapes wave"
                    src={require("assets/img/waves.png")}
                />
                <img
                    alt="..."
                    className="shapes squares"
                    src={require("assets/img/patrat.png")}
                />
                <img
                    alt="..."
                    className="shapes circle"
                    src={require("assets/img/cercuri.png")}
                />
                <div className="content-center">
                    <Row className="row-grid justify-content-between align-items-center text-left">
                        <Col lg="6" md="6">
                            <h1 className="text-white">
                                Internet and Routing Services
                            </h1>
                            <p className="text-white mb-3">
                                Internet and routing services are essential for connecting devices and networks, ensuring seamless communication and data transfer. These services include configuring and managing internet connections, setting up routers and network infrastructure, and providing secure and reliable internet access. This guide provides an overview of various categories within internet and routing services, focusing on Biometric and Automatic Gates, CCTVs, Cloud Services, Internet Services and Hotspot, Network Solutions, and SEO.
                            </p>
                            <div className="btn-wrapper mb-3">
                                <p className="category text-success d-inline">
                                    Order Now
                                </p>
                                <Button
                                    className="btn-link"
                                    color="success"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    size="sm"
                                >
                                    <i className="tim-icons icon-minimal-right" />
                                </Button>
                            </div>
                            <div className="btn-wrapper">
                                <div className="button-container">
                                    <Button
                                        className="btn-icon btn-simple btn-round btn-neutral"
                                        color="default"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-simple btn-round btn-neutral"
                                        color="default"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-dribbble" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-simple btn-round btn-neutral"
                                        color="default"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-facebook" />
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="5">
                            <img
                                alt="..."
                                className="img-fluid"
                                src={require("assets/img/etherum.png")}
                            />
                        </Col>
                    </Row>
                </div>
            </div>



            <section id="#Services">
                <Box
                    id="highlights"
                    sx={{
                        pt: { xs: 4, sm: 12 },
                        pb: { xs: 8, sm: 16 },
                        color: 'white',


                    }}
                >
                    <Container
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: { xs: 3, sm: 6 },
                        }}
                    >


<div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
    <h3 className="sm:text-4xl font-semibold text-white text-center" style={{ fontSize: 30, fontWeight: "bold" }}>
        Internet & Routing Services
    </h3>
    <h3 className="sm:text-xl font-semibold text-white text-center mb-5" style={{ fontSize: 16 }}>
        Ensure seamless connectivity and efficient communication with our expert internet and routing services. We specialize in configuring and managing internet connections, setting up routers and network infrastructure, and delivering secure, reliable internet access. Explore our comprehensive offerings including Biometric and Automatic Gates, CCTV systems, Cloud Services, Internet and Hotspot solutions, Network Solutions, and SEO services, all designed to optimize and protect your digital environment.
    </h3>
</div>

                        <Grid container spacing={1}>
                            {items.map((item, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Stack
                                        direction="column"
                                        color="inherit"
                                        component={Card}
                                        spacing={1}
                                        useFlexGap
                                        sx={{
                                            p: 3,
                                            height: '90%',
                                            border: '1px solid',
                                            borderColor: '#5e72e4',
                                            background: 'transparent',
                                            borderRadius: 15,
                                            backgroundColor: 'grey.900',
                                        }}
                                    >


                                        <NavLink href={item.pin}>

                                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                                <Box>{item.icon} </Box>
                                            </div>

                                            <div style={{ marginBottom: 15 }}>

                                                <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>

                                                    <Typography fontWeight="Bold" gutterBottom>
                                                        {item.title}
                                                    </Typography>

                                                </div>
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                                <Typography variant="body2" sx={{ color: 'grey.400', }} style={{ fontStyle: "light" }} >
                                                    {item.description}
                                                </Typography>
                                            </div>
                                            <div style={{ marginTop: 20 }}>
                                                <NavLink href={item.pin} style={{ color: "#00bbff", }} >
                                                    Read More  ...
                                                </NavLink>
                                            </div>
                                        </NavLink>
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

            </section>

            <section className="section " >

                <Container>
                    <Row className="justify-content-center">
                        <Col lg="12">
                            <div >
                                <h1 className="text-center">Your best benefit</h1>
                            </div>

                            <Row className="row-grid justify-content-center" >
                                <Col lg="4">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                       
                                            <AccountTreeIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Enhanced Network Performance</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }} >
                                            By setting up routers and optimizing network infrastructure, internet and routing services improve network performance, ensuring faster data transmission and better overall efficiency.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            < SecurityIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Secure and Reliable Access</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }}>
                                            These services provide secure and reliable internet access, essential for maintaining privacy, protecting data integrity, and preventing unauthorized access.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>
                                            <CellWifiIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Seamless Connectivity</h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }}>
                                            Internet and routing services facilitate seamless communication and data transfer by configuring and managing internet connections, ensuring devices and networks are interconnected effectively.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>


            <>
                <div className="mb-20 grid place-items-center text-center">
                    <Typography variant="h4" color="blue-gray" className="my-3">
                        Portfolio
                    </Typography>
                    <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
                        A comprehensive selection of courses designed to empower you with the
                        skills you need to thrive in the dynamic world of web development.
                    </Typography>
                </div>
                <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', }}>
                    <Row  >
                        <Card
                            color="gray"
                            className="  place-items-center overflow-hidden text-center"
                            style={{ height: 490, width: 400, margin: 10, borderRadius: 20 }}>
                            <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
                            <CardBody >
                                <Typography color="white" className="text-xs font-bold opacity-50">
                                    Chi-Send POS
                                </Typography>

                                <Typography
                                    color="white"
                                    className="mt-4 mb-14 font-normal opacity-50"
                                >
                                    Ready to start your web development journey?
                                </Typography>
                                <Button size="sm" color="white">
                                    Enroll Now
                                </Button>
                            </CardBody>
                        </Card>
                        <div className="col-span-1 flex flex-col gap-6" style={{ margin: 10 }}>
                            {CATEGORIES.slice(0, 2).map((props, key) => (
                                <CategoryCard key={key} {...props} />
                            ))}
                        </div>
                        <div className="col-span-1 flex flex-col gap-6" style={{ margin: 10 }}>
                            {CATEGORIES.slice(2, 4).map((props, key) => (
                                <CategoryCard key={key} {...props} />
                            ))}
                        </div>
                    </Row>

                </div>
            </>


            <section >

                <Container>
                    <Row style={{ display: "flex", alignItems: "center", justifyContent: 'center' }} >
                        <Col md="4" style={{ marginTop: 100 }}>
                            <h1>
                                Pricing
                                <hr className="line-info" />
                            </h1>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: 120, marginBottom: 60 }}>
                        <Col md="4">
                            <Card className="card-coin card-plain">
                                <CardHeader>
                                    <img
                                        alt="..."
                                        className="img-center img-fluid"
                                        src={require("assets/img/bitcoin.png")}
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col className="text-center" md="12">
                                            <h4 className="text-uppercase">Light Coin</h4>
                                            <span>Plan</span>
                                            <hr className="line-primary" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <ListGroup>
                                            <ListGroupItem>50 messages</ListGroupItem>
                                            <ListGroupItem>100 emails</ListGroupItem>
                                            <ListGroupItem>24/7 Support</ListGroupItem>
                                        </ListGroup>
                                    </Row>
                                </CardBody>
                                <CardFooter className="text-center">
                                    <Button className="btn-simple" color="primary">
                                        Get plan
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-coin card-plain">
                                <CardHeader>
                                    <img
                                        alt="..."
                                        className="img-center img-fluid"
                                        src={require("assets/img/etherum.png")}
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col className="text-center" md="12">
                                            <h4 className="text-uppercase">Dark Coin</h4>
                                            <span>Plan</span>
                                            <hr className="line-success" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <ListGroup>
                                            <ListGroupItem>150 messages</ListGroupItem>
                                            <ListGroupItem>1000 emails</ListGroupItem>
                                            <ListGroupItem>24/7 Support</ListGroupItem>
                                        </ListGroup>
                                    </Row>
                                </CardBody>
                                <CardFooter className="text-center">
                                    <Button className="btn-simple" color="success">
                                        Get plan
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-coin card-plain">
                                <CardHeader>
                                    <img
                                        alt="..."
                                        className="img-center img-fluid"
                                        src={require("assets/img/ripp.png")}
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col className="text-center" md="12">
                                            <h4 className="text-uppercase">Bright Coin</h4>
                                            <span>Plan</span>
                                            <hr className="line-info" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <ListGroup>
                                            <ListGroupItem>350 messages</ListGroupItem>
                                            <ListGroupItem>10K emails</ListGroupItem>
                                            <ListGroupItem>24/7 Support</ListGroupItem>
                                        </ListGroup>
                                    </Row>
                                </CardBody>
                                <CardFooter className="text-center">
                                    <Button className="btn-simple" color="info">
                                        Get plan
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <ContactApi />

            <Footer />
        </>
    )
}


export default Internet