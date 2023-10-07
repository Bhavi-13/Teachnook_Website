import { useState } from 'react';
import '../Style/Mentorship.css';

function MentorshipProgram() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [heading, setHeading] = useState('Heading');
  const [paragraph, setParagraph] = useState('This is a paragraph of text');

  const handleImageClick = (imageSrc, newHeading, newParagraph) => {
    setSelectedImage(imageSrc);
    setHeading(newHeading);
    setParagraph(newParagraph);
  };

  const images = [
    {
      src: 'image1.jpg',
      heading: 'Heading for Image 1',
      paragraph: 'Paragraph for Image 1',
    },
    {
      src: 'image2.jpg',
      heading: 'Heading for Image 2',
      paragraph: 'Paragraph for Image 2',
    },
    {
      src: 'image3.jpg',
      heading: 'Heading for Image 3',
      paragraph: 'Paragraph for Image 3',
    },
  ];

  return (
    <div className="container">
      <div className="left">
        <h1>{heading}</h1>
        <p>{paragraph}</p>
        <button onClick={() => handleImageClick('', 'New Heading', 'New paragraph content')}>
          Replace Content
        </button>
      </div>

      <div className="circle-container">
        <div className="big-circle">
          {selectedImage && <img src={selectedImage} alt="Big Circle" />}
        </div>
        <div className="small-circles">
          {images.map((image, index) => (
            <div
              key={index}
              className={`small-circle ${selectedImage === image.src ? 'selected' : ''}`}
              onClick={() => handleImageClick(image.src, image.heading, image.paragraph)}
            >
              <img src={image.src} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="dashed-connections">
          {images.map((_, index) => (
            <div key={index} className="dashed-connection"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MentorshipProgram;
