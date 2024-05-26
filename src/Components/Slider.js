// Import components
import Carousel from 'react-bootstrap/Carousel';

// Render slider
function ImageSlider() {
  const carouselItemStyle = {
    height: '90vh'
};
  return (
    <Carousel>
      <Carousel.Item style={carouselItemStyle}>
        <img src='https://plus.unsplash.com/premium_photo-1661274152189-e5a04efbaf95?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='d-block w-100' alt='dancing newlyweds' />
      </Carousel.Item>
      <Carousel.Item style={carouselItemStyle}>
        <img src='https://images.unsplash.com/photo-1596485952606-35cd3df9f3e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='d-block w-100' alt='wedding dj' />
      </Carousel.Item>
      <Carousel.Item style={carouselItemStyle}>
        <img src='https://images.unsplash.com/photo-1714972383523-7c636d2f0e9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='d-block w-100' alt='wedding reception' />
      </Carousel.Item>
    </Carousel>
  );
}

// Export component
export default ImageSlider;