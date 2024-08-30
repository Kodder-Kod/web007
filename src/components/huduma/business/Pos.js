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

import CategoryCard from "components/client/page";



import { IoBusiness } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import PublicIcon from '@mui/icons-material/Public';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AddCardIcon from '@mui/icons-material/AddCard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

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
import ContactApi from 'components/PageHeader/Contact';

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
        icon: <IoBusiness style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Get Business Solutions',
        description:
            "Transform your business with our custom software solutions such as POS, CRM, Payroll, ERP, and e-commerce systems."
    },
    {
        icon: <DashboardIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Management Systems',
        description:
            "Manage your organization effectively with our comprehensive systems, covering hospitals, schools, assets, warehouses, hotels, and more."
    },
    {
        icon: <LanguageIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Custom Web / App Development',
        description:
            'Create a unique presence with custom web and app development. Our creativity and expertise ensure the best functionality and experience.'
    },
    {
        icon: <FaDatabase style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Data Management and Data Science ',
        description:
            "Harness data with advanced analytics, covering visualization, predictive modeling, DBMS, and migration for comprehensive management."
    },
    {
        icon: <IoWifiSharp style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Internet and Routing Services',
        description:
            "Optimize networks with routing, internet services, CCTV, and biometrics. We design secure, scalable networks for seamless operations."
    },
    {
        icon: <SupportAgentRoundedIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'e-Cyber Services and IT Consulting',
        description:
            'Ensure smooth IT operations with our help desk and consulting providing 24/7 support for e-citizen, tax management,document handling etc.'
    },
];



const Pos = () => {


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
                                Point of Sale (POS) Systems

                            </h1>
                            <p className="text-white mb-3">
                                POS systems are vital for retail and hospitality businesses. They streamline the transaction process, manage inventory, and enhance customer interactions. These systems help in reducing errors, speeding up checkouts, and providing valuable sales data that can drive business decisions.
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
                        <Col lg="6" md="6">
                            <div style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <img
                                    alt="..."
                                    className="img-fluid"
                                    src={require("assets/img/services/pos2.png")}
                                />
                            </div>

                        </Col>
                    </Row>
                </div>
            </div>


            <section className="section " >

                <Container>
                    <Row className="justify-content-center">
                        <Col lg="12">
                            <div >
                                <h1 className="text-center">Your best benefit</h1>
                            </div>

                            <Row className="row-grid justify-content-center" >
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                            <PublicIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Efficient Transactions</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }} >
                                            Speed up sales processes with quick and accurate transaction handling, reducing wait times and improving customer satisfaction.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                            <CreditScoreIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Inventory Management</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }} >
                                            Real-time tracking of stock levels helps prevent stockouts and overstock situations, ensuring optimal inventory levels.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            <AddCardIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Sales Data</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }}>
                                            Collects valuable insights into sales trends, helping businesses make informed decisions and tailor marketing strategies.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>
                                            <ManageAccountsIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Ease of Use</h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }}>
                                            Intuitive interfaces make training staff quick and easy, reducing downtime and operational disruptions.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section >

                <Container>
                    <Row style={{ display: "flex", alignItems: "center", justifyContent: 'center' }} >
                        <Col md="4" style={{ marginTop: 100 }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                <h1>
                                    Pricing
                                    <hr className="line-info" />
                                </h1>
                            </div>

                        </Col>
                    </Row>

                    <Row style={{ marginTop: 120 }}>
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


export default Pos