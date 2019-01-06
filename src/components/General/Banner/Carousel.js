import React, { Component } from 'react';
import  { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from 'mdbreact';
import LoginForm from '../Login/LoginForm';
import RegisterForm from '../Register/RegisterForm';
import './banner.css';
class CarouselPage extends Component {
  render(){
    return(
        <div>
            <div className="carousel-holder">
                
                    <Carousel
                    activeItem={1}
                    length={2}
                    showControls={true}
                    showIndicators={false}
                    className="z-depth-1">
                    <CarouselInner>
                        <CarouselItem itemId="1">
                        <View>
                            <img className="d-block carouse-img" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
                            <Mask overlay="black-light"></Mask>
                        </View>
                        <CarouselCaption>
                            <h1 className="h3-responsive">Skypark Arena</h1>
                            <h3>Tuesday, 30 October 2018</h3>
                            <h3>Astro Turf Pitch 1</h3>
                            <h3>8pm - 10px</h3>
                        </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem itemId="2">
                        <View>
                            <img className="d-block carouse-img" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
                            <Mask overlay="black-strong"></Mask>
                        </View>
                        <CarouselCaption>
                        <h1 className="h3-responsive">OCBC Arena</h1>
                            <h3>Wednesday, 31 October 2018</h3>
                            <h3>Astro Turf Pitch 1</h3>
                            <h3>8pm - 10px</h3>
                        </CarouselCaption>
                        </CarouselItem>
                        
                    </CarouselInner>
                        <div className="home-btn-holder" style={{zIndex: '998'}}>
                            {/* <Link to="registration" className="green-button">Register</Link> */}
                            {/* <Link to="/" className="green-button" style={{marginTop: '20px'}} id="loginBtn" onClick={this.toggle}>Log In</Link> */}
                            <RegisterForm />
                            <LoginForm />
                        </div>
                    </Carousel>
                    
            </div>
        </div>
    );
  }
}

export default CarouselPage;