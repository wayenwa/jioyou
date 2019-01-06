import React, { Component } from 'react';
import  { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from 'mdbreact';
import './Banner/banner.css';
class Testimonials extends Component {
  render(){
    return(
        
            <div className="testi-holder">
                
                    <Carousel
                    activeItem={1}
                    length={1}
                    showControls={true}
                    showIndicators={false}
                    className="z-depth-1">
                    <CarouselInner>
                        <CarouselItem itemId="1">
                        
                        <CarouselCaption>
                            <h3 className="h3-responsive">
                            “As a regular of Jio You Soccer sessions, I have met many strangers that have turned into great friends.”

                            </h3>
                            <h3>- John Jamal</h3>
                        </CarouselCaption>
                        </CarouselItem>
                        {/* <CarouselItem itemId="2">
                        
                        <CarouselCaption>
                        <h1 className="h3-responsive">OCBC Arena</h1>
                            <h3>Wednesday, 31 October 2018</h3>
                            <h3>Astro Turf Pitch 1</h3>
                            <h3>8pm - 10px</h3>
                        </CarouselCaption>
                        </CarouselItem> */}
                        
                    </CarouselInner>
                        
                    </Carousel>
                    
            </div>
        
    );
  }
}

export default Testimonials;