import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AiOutlineSend } from "react-icons/ai";
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Contacts({ contacts }) {
    const [message, setMessage] = useState([]);
    const [loading,setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const URL = process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_DEV_URL_FOR_BACKEND}/response` : `${process.env.REACT_APP_PRO_URL_FOR_BACKEND}/response`;
        axios.post(URL, message)
            .then(response => {
                setLoading(false);
                toast(response.data.message);
            })
            .catch(err => {
                setLoading(false);
                toast("Email Send Failed")
                console.log(err);
            })
    }

    return (
        <div ref={contacts} className='Contacts d-flex'>
            <div className='contacts-mail-model-section'>
                <h1>Contacts</h1>
                <Form onSubmit={handleSubmit}>
                    <TextField
                        InputProps={{
                            style: { width: '420px', height: '50px', borderColor: 'green', borderRadius: "20px", labelColor: 'green' }
                        }}
                        InputLabelProps={{ style: { color: 'green' } }}
                        className='contacts-textField1 mt-5 mb-2'
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        type='text'
                        placeholder='Enter Your Name'
                        onChange={(e) => setMessage({ ...message, name: e.target.value })}
                        required
                    /><br></br>
                    <TextField
                        InputProps={{
                            style: { width: '420px', height: '50px', borderColor: 'green', borderRadius: "20px", labelColor: 'green' }
                        }}
                        InputLabelProps={{ style: { color: 'green' } }}
                        className='contacts-textField1 mt-5 mb-2'
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        type='email'
                        placeholder='Enter Your Email Address'
                        onChange={(e) => setMessage({ ...message, email: e.target.value })}
                        required
                    /><br></br>
                    <TextField
                        InputProps={{
                            style: { width: '420px', borderColor: 'green', borderRadius: "20px", labelColor: 'green', textAlign: 'right' }
                        }}
                        InputLabelProps={{ style: { color: 'green' } }}
                        multiline
                        rows={6}
                        rowsMax={10}
                        className='contacts-textField1 mt-5 mb-5'
                        id="outlined-basic"
                        label="Message"
                        variant="outlined"
                        type='text'
                        placeholder='Type Your Message...'
                        onChange={(e) => setMessage({ ...message, message: e.target.value })}
                        required
                    /><br></br>
                    <Button type='submit' variant="contained" color="success" style={{ borderRadius: '20px' }}>
                        Send
                        <AiOutlineSend style={{ marginLeft: '10px', fontSize: '25px' }} />
                    </Button>
                    {loading? <p style={{color:'red'}}>Sending...</p> : <ToastContainer />}
                </Form>
            </div>
            <div className='contacts-details-model-section'>
                <div className='d-flex mb-1'>
                    <div><img src='Static Assets/email.png' width='50px' height='50px' alt='email'></img></div>
                    <div className='ms-4 mt-1'><h3>parthibanb224@gmail.com</h3></div>
                </div>
                <div className='d-flex mt-5 mb-1'>
                    <div><img src='Static Assets/phone.png' width='50px' height='50px' alt='phone'></img></div>
                    <div className='ms-4 mt-1'><h3>+91 9500501513</h3></div>
                </div>
                <div className='d-flex mt-5'>
                    <div><img src='Static Assets/location.png' width='50px' height='50px' alt='place'></img></div>
                    <div className='ms-4 mt-1'><h3>Seelayampatti,Theni(DT),Tamilnadu</h3></div>
                </div>
                <div className='contact-socialMedia'>
                    <a href="https://www.linkedin.com/in/parthibanb224/" target="_blank" rel="noreferrer"><img className='contact-social-icon' src='Static Assets/icons8-linkedin-512.png' width='65px' height='65px' alt='linkedin'></img></a>
                    <a href="https://github.com/parthibanb224" target="_blank" rel="noreferrer"><img className='contact-social-icon' src='Static Assets/icons8-github-512.png' width='65px' height='65px' alt='github'></img></a>
                    <a href="https://twitter.com/parthibanb224" target="_blank" rel="noreferrer"><img className='contact-social-icon' src='Static Assets/icons8-twitter-circled-512.png' width='65px' height='65px' alt='twitter'></img></a>
                    <a href="https://www.youtube.com/channel/UCxJwQg_SDe2XA6jYlofbcCw" target="_blank" rel="noreferrer"><img className='contact-social-icon' src='Static Assets/icons8-youtube-512.png' width='65px' height='65px' alt='youtube'></img></a>
                    <a href="https://www.instagram.com/parthiban__b/" target="_blank" rel="noreferrer"><img className='contact-social-icon' src='Static Assets/icons8-instagram-circle-512.png' width='65px' height='65px' alt='instagram'></img></a>
                </div>
            </div>
            <div className='contacts-image-section'>
                <img src='https://ajitharunai.netlify.app/static/media/contactsGreen.808a7bb5da2c3cc90faa6cc86e5e2a44.svg' alt='contact-img'></img>
            </div>
        </div>
    )
}
