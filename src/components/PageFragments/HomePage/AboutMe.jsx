import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello !! My name is Vaibhav Sharma. I'm a Deep Learning Engineer with experience in Computer
    Vision and applied knowledge in NLP & Audio Processing.
    A perpetual explorer of the DL realm, I like to experiment with different algorithms and frameworks for CV and NLP. 
    Other than Deep Learning I love building Web and Mobile apps in React/React Native.`,
  paraTwo: `Currently my professional experience mainly includes Computer Vision and I also
    have hands on experience working with cloud infrastructures like AWS/GCP. I have deployed numerous CV applications
    both personal and professional. Flask and Django are some of the
    tools I use for Deployment. I believe I'm a fast learner and am always ready to try new things out.`,
};

const AboutMe = () => {
  const description = `${stripTags(pageText.paraOne)} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Vaibhav', 'Sharma', 'Pandit', 'Research Engineer', 'Python', 'OpenCV', 'Pytorch', 'Tensorflow']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Hometown"
            textH3="Yamunanagar, Haryana"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="Book.png"
            alt="Book Image"
            textH4="Avid Reader"
            textH3="Love Reading Non-Fiction"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="icons8-spotify-256.png"
            alt="Spotify image"
            textH4="Audiophile"
            textH3="USER: vaibhavpandit687"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="mobile.png"
            alt="bike image"
            textH4="Builds Mobile Apps"
            textH3="Deep Learning on Edge Devices"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
