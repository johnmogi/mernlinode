import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from 'mdbreact';

const Carousel = () => {
  return (
    <MDBContainer className='mt-5'>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className='z-depth-1'
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId='1'>
            <MDBView>
              <img
                className='d-block w-100'
                src='/images/wisy-1630x758.jpg'
                alt='Wisy - CTO'
              />
              <MDBMask overlay='black-strong' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>wisy</h3>
              <p> - סוכנות בוטיק לשיווק</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='2'>
            <MDBView>
              <img
                className='d-block w-100'
                src='/images/milesa-1630x809.jpg'
                alt='Second slide'
              />
              <MDBMask overlay='black-strong' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>Campaign</h3>
              <p>Miles</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='3'>
            <MDBView>
              <img
                className='d-block w-100'
                src='/images/spark-1630x758.jpg'
                alt='Third slide'
              />
             <MDBMask overlay='black-strong' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>Spark Towing</h3>
              <p>franchise for US and canade service providers</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Carousel;
