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
    GlobeEuropeAfricaIcon,
    MicrophoneIcon,
    PuzzlePieceIcon,
    HeartIcon,
  } from "@heroicons/react/24/solid";


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
  

const Services =()=>{

    return (

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
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        </section>
    )
}

export default Services