import React from "react";
import { Card, CardBody, } from "reactstrap";
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


import pic from '../image/blogs/blog-12.jpeg'

const CategoryCard = ({ img1, title, desc, icon: Icon }) => {
  return (
    <Card className=" grid min-h-[12rem]  " style={{ borderRadius: 30, margin: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', width: 400, height: 240 }}>
      <img
        width={300}
        height={150}
        src={pic}
        alt={title}
        style={{ borderRadius: 30, marginTop: 10 }}
        className=" inset-0  object-cover object-center"
      />
      <div className="absolute inset-0 h-full w-full bg-black/70" />
      <CardBody className="relative flex flex-col justify-between">

        <div>
          <h4>
            {title}
          </h4>
          <h5>
            {desc}
          </h5>
        </div>
      </CardBody>
    </Card>
  );
}

export default CategoryCard;
