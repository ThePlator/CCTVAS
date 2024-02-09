import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import img from '../assets/logo.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  return (
    <div style={{ backgroundImage: "url(https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2.0,f_auto,g_center,h_1000,q_auto:good/v1/gcs/platform-data-dsc/contentbuilder/GDG-Bevy-ProfileBanner_ZUcwHOn.png)" }}>
        <Container >
      <Row className="align-items-top" style={{
        padding: '30px',
        justifyContent: 'center',
        flexWrap: 'wrap-reverse'
      }}>
        <Col style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            margin: '15px'
        }} >
         <div className='details'>
            <Image src={img} roundedCircle style={{height: '100px', width: '100px'}} />
            <h2 style={{padding: '20px'}}>Sameer</h2>
          <p>PURNEA</p>
          <p>React - JavaScript - DSA in Java</p>
          <p>Lorem ipsum dolor sit!</p>
         </div>
        </Col>
        <Col xs={6} md={4} style={{display: 'flex', justifyContent:'flex-end', alignItems:'flex-start'}}>
          <Button variant="outline-primary" href="/edit">Edit Profile</Button> 
        </Col>
      </Row>
    </Container>
    </div>
    
  );
}

export default Profile;
