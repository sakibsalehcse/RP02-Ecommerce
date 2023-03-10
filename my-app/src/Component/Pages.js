import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Pages = () => {
  const images = [
    { src: "https://picsum.photos/400/200?random=1", alt: "slide 1" },
    { src: "https://picsum.photos/400/200?random=2", alt: "slide 2" },
    { src: "https://picsum.photos/400/200?random=3", alt: "slide 3" },
  ];

  const renderThumbs = () => {
    return images.map((image, index) => {
      return (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
        </div>
      );
    });
  };

  return (
    <div>
      <Carousel autoPlay interval={1000} transitionTime={500} stopOnHover infiniteLoop swipeScrollTolerance={-100} renderThumbs={renderThumbs}>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img src={image.src} alt={image.alt} />
              <p className="legend">{image.alt}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Pages;



// // import React from 'react';
// // import { Carousel } from 'react-responsive-carousel';
// // import 'react-responsive-carousel/lib/styles/carousel.min.css';

// // const Pages = () => {
// //   return (
// //     <div>
// //       <Carousel autoPlay interval={1000} transitionTime={500} stopOnHover infiniteLoop swipeScrollTolerance={-100} showIndicators={true}>
// //         <div>
// //           <img src="https://picsum.photos/400/200?random=1" alt="slide 1" />
// //           <p className="legend">Slide 1</p>
// //         </div>
// //         <div>
// //           <img src="https://picsum.photos/400/200?random=2" alt="slide 2" />
// //           <p className="legend">Slide 2</p>
// //         </div>
// //         <div>
// //           <img src="https://picsum.photos/400/200?random=3" alt="slide 3" />
// //           <p className="legend">Slide 3</p>
// //         </div>
// //       </Carousel>
// //     </div>
// //   );
// // };

// // export default Pages;
