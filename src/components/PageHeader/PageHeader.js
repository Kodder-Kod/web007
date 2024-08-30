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


import { IoBusiness } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";

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
import { AiFillAndroid } from "react-icons/ai";

import { Line } from "react-chartjs-2";
// reactstrap components

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";


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
import { Stack } from "@mui/system";
import ContactApi from './Contact';

const items = [
  {
    icon: <IoBusiness style={{ color: "#00bbff", fontSize: 50 }} />,
    title: 'Get Business Solutions',
    pin: "/services/business",
    description:
      "Transform your business with our custom software solutions such as POS, CRM, Payroll, ERP, and e-commerce systems."
  },
  {
    icon: <DashboardIcon style={{ color: "#00bbff", fontSize: 50 }} />,
    title: 'Management Systems',
    pin: "/services/management",
    description:
      "Manage your organization effectively with our comprehensive systems, covering hospitals, schools, assets, warehouses, hotels, and more."
  },
  {
    icon: <LanguageIcon style={{ color: "#00bbff", fontSize: 50 }} />,
    title: 'Custom Web / App Development',
    pin: "/services/web",
    description:
      'Create a unique presence with custom web and app development. Our creativity and expertise ensure the best functionality and experience.'
  },
  {
    icon: <FaDatabase style={{ color: "#00bbff", fontSize: 50 }} />,
    title: 'Data Management and Data Science ',
    pin: "/services/data",
    description:
      "Harness data with advanced analytics, covering visualization, predictive modeling, DBMS, and migration for comprehensive management."
  },
  {
    icon: <IoWifiSharp style={{ color: "#00bbff", fontSize: 50 }} />,
    title: 'Internet and Routing Services',
    pin: "/services/internet",
    description:
      "Optimize networks with routing, internet services, CCTV, and biometrics. We design secure, scalable networks for seamless operations."
  },
  {
    icon: <SupportAgentRoundedIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
    title: 'e-Cyber Services and IT Consulting',
    pin: "/services/cyber",
    description:
      'Ensure smooth IT operations with our help desk and consulting providing 24/7 support for e-citizen, tax management,document handling etc.'
  },
];



const followerCard = [
  {
    title: "Andrew Omondi",
    para: "Leading a workshop requires more than just tools. Mariwa VCT's Motor Vehicle Mechanics course gave me the knowledge to manage projects efficiently.",
    opp: " Workshop Supervisor",
    location: "Nairobi , Kenya",
    avatar:
      "https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-1.jpg"
  },
  {
    title: "Irene Atieno",
    para: "Managing a spa demands expertise. Mariwa VCT's Beauty Therapy course gave me the edge I needed to excel in this competitive industry.",
    opp: "Spa Manager",
    location: "Kakamega , Kenya ",
    avatar:
      "https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-2.jpg"
  },
  {
    title: "Brian Wafula",
    para: "Mariwa VCT's Motor Vehicle Mechanics course was hands-on and up-to-date. Now, I confidently diagnose and repair vehicles every day.",
    opp: "Automotive Technician",
    location: "Kisumu , Kenya ",
    avatar:
      "https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-3.jpg"
  },
  {
    title: "Scott Summers",
    para: "Mariwa VCT's training gave me the confidence to start my own electrical contracting business. I'm now a successful entrepreneur!",
    opp: "Electrical Contractor",
    location: "Nairobi , Kenya",
    avatar:
      "https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-4.jpg"
  }
];


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




export default function PageHeader() {
  return (
    <>
      <div id='home' className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand " >
            <h1 className="h1-seo " >Chi-Send</h1>
            <h3 className="d-none d-sm-block">
              Experience Technology into Wealth
            </h3>

          </div>
        </Container>

      </div>

      <section className="section section-md section-safe">
        <img
          alt="..."
          className="path"
          src={require("assets/img/path5.png")} />

        <Container>
          <Row className="row-grid justify-content-between">

            <Col lg="6">
              <div className="px-md-5">
                <h1>Who are we </h1>
                <hr className="line-success" />
                <div style={{ margin: 50 }}></div>

                <p style={{ fontSize: 16 }}>
                  At Chi-Send, we are a dynamic startup based in Nairobi, Kenya, dedicated to transforming technology into wealth. Founded in 2024, we specialize in using the latest models to develop advanced solutions for real-world situations. Our goal is to help businesses, institutions, and individuals save resources, increase productivity, and enhance networking. Our commitment to innovation and excellence drives us to create impactful software that meets the diverse needs of our clients across Kenya.
                </p>
                {/**
 * 
  *        <ul className="list-unstyled mt-5">
                    <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-vector" />
                      </div>
                      <div className="ml-3">
                        <h4>Carefully crafted components</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-tap-02" />
                      </div>
                      <div className="ml-3">
                        <h4>Amazing page examples</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <div className="ml-3">
                        <h4>Super friendly support team</h4>
                      </div>
                    </div>
                  </li>
                </ul>   
 * 
 */}

              </div>
            </Col>
            <Col lg="6">
              <img
                alt="..."
                className="img-fluid floating"
                src={require("assets/img/kanairo/kanairo2.jpg")}
              />
              {/**
 * 
              <Card className="card-stats bg-danger">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">100%</CardTitle>
                      <p className="card-category text-white">Safe</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-stats bg-info">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">573 K</CardTitle>
                      <p className="card-category text-white">
                        Satisfied customers
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-stats bg-default">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">10 425</CardTitle>
                      <p className="card-category text-white">Business</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
 */}

            </Col>

          </Row>
        </Container>
      </section>


      <>
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

                <h3 className=" sm:text-5xl font-semibold text-black text-center " style={{ fontSize: 40, fontWeight: "bold", }}>Services </h3>

                <h3 className=" sm:text-5xl font-semibold text-black text-center mb-5" style={{ fontSize: 15, }}>Explore our IT solutions: tailored software, management systems, custom web/app development, data analysis, networking infrastructure, and help desk services. Transform your business with our expertise. </h3>
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
                      <NavLink href={item.pin} >

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


      </>

      <section id="#about" className="section section-md section-safe">
        <img
          alt="..."
          className="path"
          src={require("assets/img/path5.png")} />

        <Container>
          <Row className="row-grid justify-content-between">

            <Col md="6">
              <div className="px-5">
                <h1 style={{ fontSize: 40 }}>About Us</h1>
                <hr className="line-success m" />
                <p style={{ fontSize: 16 }}>
                  Chi-Send began its journey in 2024 with our flagship product, ChiSend POS. Since then, we have expanded our portfolio to include three websites, one mobile app, and a SACCO management system, serving a growing list of clients across Kenya. Our team consists of skilled professionals who bring a wealth of experience and a deep understanding of the latest technologies. We believe in fostering a culture of continuous learning, collaboration, and integrity, which reflects in the quality of our work and our relationships with clients.
                </p>
                {/**
                 * 
                 * 
                 *    <ul className="list-unstyled mt-5">
                  <li className="py-0">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success ">
                        <i className="tim-icons icon-vector" />
                      </div>
                      <div className="ml-3">
                        <p style={{ fontSize: 16 }}>Integrity</p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success ">
                        <i className="tim-icons icon-tap-02" />
                      </div>
                      <div className="ml-3">
                        <p style={{ fontSize: 16 }}>Community.</p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success ">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <div className="ml-3">
                        <p style={{ fontSize: 16 }}>Innovation</p>
                      </div>
                    </div>
                  </li>

                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success ">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <div className="ml-3">
                        <p style={{ fontSize: 16 }}>Excellence</p>
                      </div>
                    </div>
                  </li>
                </ul>
                 */}


              </div>
            </Col>
            <Col md="5">
              <img
                alt="..."
                style={{ width: 900, height: 300 }}
                className="img-fluid floating"
                src={require("assets/img/kanairo/compter.png")}
              />
              <Card className="card-stats bg-danger">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">100%</CardTitle>
                      <p className="card-category text-white">Safe</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-stats bg-info">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">20</CardTitle>
                      <p className="card-category text-white">
                        Satisfied customers
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-stats bg-default">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">5</CardTitle>
                      <p className="card-category text-white">Business</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
      </section>


      <>
        {/** 
 *  <div className="mb-20 grid place-items-center text-center">
          <Typography variant="h4" color="blue-gray" className="my-3">
            Portfolio
          </Typography>
          <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
            A comprehensive selection of courses designed to empower you with the
            skills you need to thrive in the dynamic world of web development.
          </Typography>
        </div>

        <div style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
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
 * 
*/}

      </>
      <section className="section">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <h3 className=" sm:text-5xl font-semibold text-black text-center " style={{ fontSize: 40, fontWeight: "bold", }}> The Chi-Send Experience </h3>
        </div>

        <img
          alt="..."
          className="path"
          src={require("assets/img/path4.png")}
        />
        <Container>
          <Row className="row-grid justify-content-between">
            <Col className="mt-lg-5" md="6">
              <Row>
                <Col className="px-2 py-2" lg="6" sm="12">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="tim-icons icon-trophy text-warning" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <CardTitle tag="p">3</CardTitle>
                            <p />
                            <p className="card-category">Awards</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="px-2 py-2" lg="6" sm="12">
                  <Card className="card-stats upper bg-default">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="tim-icons icon-coins text-white" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <CardTitle tag="p">1197</CardTitle>
                            <p />
                            <p className="card-category">Commits</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="px-2 py-2" lg="6" sm="12">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <LanIcon style={{ fontSize: 60, color: "#00bbff", }} />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <CardTitle tag="p">15</CardTitle>
                            <p />
                            <p className="card-category">Running projects</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="px-2 py-2" lg="6" sm="12">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <FaHandsHelping style={{ fontSize: 60, color: "#00f2c3", }} />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <CardTitle tag="p">13</CardTitle>
                            <p />
                            <p className="card-category">Partners</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <div className="pl-md-5">

                <p style={{ fontSize: 16 }}>
                  Expertise: Our team of skilled professionals has extensive experience in software development, ensuring high-quality, reliable solutions.
                </p>
                <br />
                <p style={{ fontSize: 16 }}>
                  Innovation: We leverage the latest technologies and methodologies to provide innovative and future-proof solutions.
                </p>
                <br />
                <p style={{ fontSize: 16 }}>
                  Proven Track Record: Our portfolio of successful projects across various industries demonstrates our ability to deliver results.
                </p>
                <br />
                <p style={{ fontSize: 16 }}>
                  Customer-Centric Approach: We prioritize our clients' needs, working closely with them to tailor solutions that meet their specific requirements.
                </ p>
                <br />
                <p style={{ fontSize: 16 }}>
                  Comprehensive Services: From initial consultation to post-launch support, we offer a full suite of services to cover every stage of the software development lifecycle.
                </p>
                <br />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <>

        <section className="section">
          < div id="#testimony">

            <div className="mx-auto max-w-2xl py-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">

              <h3 className=" sm:text-5xl font-semibold text-black text-center my-3" style={{ fontSize: 40, fontWeight: "bold", }}>Reviews</h3>
            </div>

            <Grid container spacing={2}  >
              {followerCard.map((card, index) => (
                <Grid item xs={10} sm={3} lg={3} key={index}>
                  <Card variant="outlined" style={{ borderRadius: 20 }}>

                    <CardContent>
                      <Avatar
                        src={card.avatar}
                        sx={{ height: 80, width: 80 }}
                      ></Avatar>
                      <Stack direction="row" spacing={2} mt={3}>
                        <Box>
                          <Typography variant="h5" mb={1}>
                            {card.title}
                          </Typography>
                          <Stack direction="row" spacing={2} alignItems="center">

                            <p variant="subtitle2" color="textSecondary">
                              {card.opp}
                            </p>

                            <Typography variant="subtitle2" color="textSecondary">
                              {card.location}
                            </Typography>
                          </Stack>
                          <div style={{ margin: 15 }}></div>
                          <p variant="subtitle2" color="textSecondary">
                            {card.para}
                          </p>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}

            </Grid>
          </div>
        </section >
      </>

      <ContactApi />
    </>

  );
}
