


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
import SchoolIcon from '@mui/icons-material/School';
import LanIcon from '@mui/icons-material/Lan';
import { FaHandsHelping } from "react-icons/fa";
import CategoryCard from "components/client/page";
import StoreIcon from '@mui/icons-material/Store';



import { IoBusiness } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

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
import IndexNavbar from 'components/Navbars/IndexNavbar';
import HotelIcon from '@mui/icons-material/Hotel';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ContactApi from 'components/PageHeader/Contact';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

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
        icon: <SchoolIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'School Management System',
        pin: "/services/management/School",
        description:
            "For schools and classes, manage with grace,  Our system keeps every detail in place."
    },
    {
        icon: <MedicationLiquidIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Hospital Management System',
        pin: "/services/management/Hospital",
        description:
            "Hospitals run smoothly with our smart plan,  Managing health with a touch of our hand."
    },
    {
        icon: <LocalShippingIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Supply Chain Management System',
        pin: "/services/management/Supplychain",
        description:
            "From supplier to store, we manage the flow,  Optimizing chains to make business grow."
    },
    {
        icon: <HotelIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Hospitality and Hotel Management System',
        pin: "/services/management/Hospitality",
        description:
            "For hotels and guests, our system's the key,  Managing stays with efficiency."
    },
    {
        icon: <StoreIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Asset Management System',
        pin: "/services/management/Asset",
        description:
            "Track your assets with ease and cheer,  Our system ensures everything’s near."
    },
    {
        icon: <WarehouseIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Warehouse Management System',
        pin: "/services/management/Warehouse",
        description:
            "In your warehouse, our system will aid, Managing stock so your plans don’t fade."
    },
];


const Management = () => {

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
                                Management Systems
                            </h1>
                            <p className="text-white mb-3">
                                Management systems are designed to streamline and optimize various operations within different industries. They help organizations manage resources efficiently, improve service delivery, and enhance overall productivity. This guide provides an overview of key management systems and their benefits
                            </p>
                            <div className="btn-wrapper mb-3">
                                <p className="category text-success d-inline">
                                    Download App
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
                        <Col lg="6" md="5">
                            <img
                                alt="..."
                                className="img-fluid floating"
                                src={require("assets/img/services/manage2.png")}
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
        Advanced Management Systems
    </h3>
    <h3 className="sm:text-xl font-semibold text-white text-center mb-5" style={{ fontSize: 16 }}>
        Elevate your operations with our cutting-edge management systems. Designed to streamline and optimize processes across various industries, our solutions enhance resource management, improve service delivery, and boost overall productivity. Explore how our management systems can transform your organization, making it more efficient and responsive to your needs.
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

                                        <NavLink href={item.pin}  >

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
                                  
                                         
                                            <MoreTimeIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Efficient Resource Management</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }} >
                                        Management systems streamline how resources are allocated and utilized, reducing inefficiencies and minimizing waste.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            <PrecisionManufacturingIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                      
                                           
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Increased Operational Productivity</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }}>
                                        By automating routine tasks and improving communication channels, management systems empower teams to work more effectively, resulting in higher overall productivity. </p>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>
                                     
                                            <MiscellaneousServicesIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                           
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Enhanced Service Delivery</h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }}>
                                        These systems organize and optimize workflows, leading to more consistent, reliable, and timely delivery of services.
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


export default Management