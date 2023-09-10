import React from 'react'
import Card from 'react-bootstrap/Card';
import { ReactComponent as Cap } from "../Assets/graduation-cap-circular-button-svgrepo-com.svg"

export default function Education({education}) {
    return (
        <div ref={education} className='Education d-flex'>
            <div>
            <h1 className='Education-heading'>Education</h1>
            <Card className='Education-card' body>
                <div className='d-flex'>
                    <div><Cap /></div>
                    <div className='edu-card-content'>
                        <h6 style={{ color: 'green', fontWeight: '700' }}>2023</h6>
                        <h4>Full Stack Developer</h4>
                        <h5 style={{ fontWeight: 'normal' }}>Guvi Institute, Chennai</h5>
                    </div>
                </div>
            </Card>
            <Card className='Education-card' body>
                <div className='d-flex'>
                    <div><Cap /></div>
                    <div className='edu-card-content'>
                        <h6 style={{ color: 'green', fontWeight: '700' }}>2015-2019</h6>
                        <h4>Bachelor Of Engineering</h4>
                        <h5 style={{ fontWeight: 'normal' }}>Karpagam College Of Enginnering, Coimbatore</h5>
                    </div>
                </div>
            </Card>
            <Card className='Education-card' body>
                <div className='d-flex'>
                    <div><Cap /></div>
                    <div className='edu-card-content'>
                        <h6 style={{ color: 'green', fontWeight: '700' }}>2014-2015</h6>
                        <h4>Higher Secondary School</h4>
                        <h5 style={{ fontWeight: 'normal' }}>Nadar Saraswathi Higher Secondary School, Theni</h5>
                    </div>
                </div>
            </Card>
            </div>
            <div className='Education-img'>
                <img src='https://ajitharunai.netlify.app/static/media/eduGreen.7d2ee27248c9c15b20216aa2368078d8.svg' alt='education-img'></img>
            </div>
        </div>
    )
}
