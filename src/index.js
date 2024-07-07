import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './Footer';
import picture from './images/face.jpeg';
import email_pic from './images/email.png';

function App(){
    return(
        <div className='main-div'>
            <img src={picture} alt="here" className='main-picture'/>
            <div className='name-and-role'>
                <h1>Samson Olajide</h1>
                <p>Frontend Developer</p>
                <div className='main-button-outer'>
                    <a className='main-button' href="mailto:samsonolajide03@gmail.com"><img src={email_pic} alt='here'/> <p>Email</p></a>
                </div>
            </div>
            <div className='about-and-interest-section-outer'>
                <div className='about-section'>
                    <h1>About</h1>
                    <p>Hi, I'm Samson Olajide, a frontend developer with a passion for creating beautiful and responsive web applications. I have experience with HTML, CSS, JavaScript, React, and Node.js. I am currently looking for new opportunities to grow my skills and contribute to a team.</p>
                </div>
            </div>
            <div className='about-and-interest-section-outer'>
                <div className='interests-section'>
                    <h1>Interests</h1>
                    <p>I enjoy working with React and creating responsive web applications. I am also interested in learning more about backend development and cloud services.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);