import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'

export default function Projects({ projects }) {
    return (
        <div ref={projects} className='Projects'>
            <h1>Projects</h1>
            <div className='projects-all'>
                <div className='me-5 project-card' style={{borderRadius:'20px'}}>
                    <Card style={{ height: '400px', backgroundColor: 'rgb(87, 215, 80)',borderRadius:'20px' }} sx={{ maxWidth: 300, width: 300 }}>
                        <CardContent>
                            <Typography className='text-center' style={{ fontWeight: '600' }} gutterBottom variant="h5" component="div">
                            PASSWORD-RESET
                            </Typography>
                        </CardContent>
                        <CardMedia
                            sx={{ height: 250, width: 20, paddingLeft: 40 }}
                            image="Static Assets/bubble-gum-otp-verification.gif"
                            title="green iguana"
                        />
                        <CardActions className='d-flex justify-content-between'>
                            <a href='https://github.com/parthibanb224/password-reset-FE' target='_blank' rel='noreferror noopener' style={{cursor:"pointer"}} size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></a>
                            <a href='https://password-resets-frontend.netlify.app/' target='_blank' rel='noreferror noopener' style={{cursor:"pointer"}} size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></a>
                        </CardActions>
                    </Card>
                </div>
                <div className='me-5 project-card' style={{borderRadius:'20px'}}>
                    <Card style={{ height: '400px', backgroundColor: 'rgb(87, 215, 80)',borderRadius:'20px' }} sx={{ maxWidth: 300, width: 300 }}>
                        <CardContent>
                            <Typography className='text-center' style={{ fontWeight: '600' }} gutterBottom variant="h5" component="div">
                             ONLINE SHOPPING
                            </Typography>
                        </CardContent>
                        <CardMedia
                            sx={{ height: 250, width: 20, paddingLeft: 40 }}
                            image="Static Assets/sammy-shopping.gif"
                            title="green iguana"
                        />
                        <CardActions className='d-flex justify-content-between'>
                            <a href='https://github.com/parthibanb224/GUVI-DAY32-REACT-REDUX-TASK' target='_blank' rel='noreferror noopener' style={{cursor:"pointer"}} size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></a>
                            <a href='https://reacts-redux-tasks.netlify.app/' target='_blank' rel='noreferror noopener' style={{cursor:"pointer"}} size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></a>
                        </CardActions>
                    </Card>
                </div>
                <div className='project-card' style={{borderRadius:'20px'}}> 
                    <Card style={{ height: '400px', backgroundColor: 'rgb(87, 215, 80)',borderRadius:'20px' }} sx={{ maxWidth: 300, width: 300 }}>
                        <CardContent>
                            <Typography className='text-center' style={{ fontWeight: '600' }} gutterBottom variant="h5" component="div">
                            LIBRARY MANAGER
                            </Typography>
                        </CardContent>
                        <CardMedia
                            sx={{ height: 250, width: 20, paddingLeft: 40 }}
                            image="Static Assets/library.gif"
                            title="green iguana"
                        />
                        <CardActions className='d-flex justify-content-between'>
                            <a href='https://github.com/parthibanb224/GUVI-DAY31-REACT-FORMIK-VALIDATION-TASK' target='_blank' rel='noreferror noopener' style={{cursor:"pointer"}} size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></a>
                            <a href='https://react-formik-validation-task.netlify.app/' target='_blank' rel='noreferror noopener' style={{cursor:"pointer"}} size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></a>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <div className='project-view-button'>
                <Link to='/projects'><Button style={{color:'black'}}>View All<img style={{marginLeft:'20px'}} src='Static Assets/icons8-arrow-96.png' alt='go to' width='40px' height='40px'></img></Button></Link>
            </div>
        </div>
    )
}
