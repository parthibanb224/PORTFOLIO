import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Projects({ projects }) {
    return (
        <div ref={projects} className='AllProjects'>
            <h1>ALL PROJECTS</h1>
            <div className='projects-all'>
                <div className='me-5 project-card' style={{borderRadius:'20px'}}>
                    <Card style={{ height: '400px', backgroundColor: 'rgb(87, 215, 80)',borderRadius:'20px' }} sx={{ maxWidth: 300, width: 300 }}>
                        <CardContent>
                            <Typography className='text-center' style={{ fontWeight: '600' }} gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                        <CardMedia
                            sx={{ height: 250, width: 20, paddingLeft: 40 }}
                            image="Static Assets/simplistic-web-development-and-coding-on-pc.png"
                            title="green iguana"
                        />
                        <CardActions className='d-flex justify-content-between'>
                            <Button size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></Button>
                            <Button size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></Button>
                        </CardActions>
                    </Card>
                </div>
                <div className='me-5 project-card' style={{borderRadius:'20px'}}>
                    <Card style={{ height: '400px', backgroundColor: 'rgb(87, 215, 80)',borderRadius:'20px' }} sx={{ maxWidth: 300, width: 300 }}>
                        <CardContent>
                            <Typography className='text-center' style={{ fontWeight: '600' }} gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                        <CardMedia
                            sx={{ height: 250, width: 20, paddingLeft: 40 }}
                            image="Static Assets/simplistic-web-development-and-coding-on-pc.png"
                            title="green iguana"
                        />
                        <CardActions className='d-flex justify-content-between'>
                            <Button size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></Button>
                            <Button size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></Button>
                        </CardActions>
                    </Card>
                </div>
                <div className='project-card' style={{borderRadius:'20px'}}> 
                    <Card style={{ height: '400px', backgroundColor: 'rgb(87, 215, 80)',borderRadius:'20px' }} sx={{ maxWidth: 300, width: 300 }}>
                        <CardContent>
                            <Typography className='text-center' style={{ fontWeight: '600' }} gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                        <CardMedia
                            sx={{ height: 250, width: 20, paddingLeft: 40 }}
                            image="Static Assets/simplistic-web-development-and-coding-on-pc.png"
                            title="green iguana"
                        />
                        <CardActions className='d-flex justify-content-between'>
                            <Button size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></Button>
                            <Button size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <div className='projects-all'>
                <div className='me-5 project-card' style={{borderRadius:'20px'}}>
                    <Card style={{ height: '400px', backgroundColor: 'rgb(87, 215, 80)',borderRadius:'20px' }} sx={{ maxWidth: 300, width: 300 }}>
                        <CardContent>
                            <Typography className='text-center' style={{ fontWeight: '600' }} gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                        <CardMedia
                            sx={{ height: 250, width: 20, paddingLeft: 40 }}
                            image="Static Assets/simplistic-web-development-and-coding-on-pc.png"
                            title="green iguana"
                        />
                        <CardActions className='d-flex justify-content-between'>
                            <Button size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></Button>
                            <Button size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></Button>
                        </CardActions>
                    </Card>
                </div>
                <div className='me-5 project-card' style={{borderRadius:'20px'}}>
                    <Card style={{ height: '400px', backgroundColor: 'rgb(87, 215, 80)',borderRadius:'20px' }} sx={{ maxWidth: 300, width: 300 }}>
                        <CardContent>
                            <Typography className='text-center' style={{ fontWeight: '600' }} gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                        <CardMedia
                            sx={{ height: 250, width: 20, paddingLeft: 40 }}
                            image="Static Assets/simplistic-web-development-and-coding-on-pc.png"
                            title="green iguana"
                        />
                        <CardActions className='d-flex justify-content-between'>
                            <Button size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></Button>
                            <Button size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></Button>
                        </CardActions>
                    </Card>
                </div>
                <div className='project-card' style={{borderRadius:'20px'}}> 
                    <Card style={{ height: '400px', backgroundColor: 'rgb(87, 215, 80)',borderRadius:'20px' }} sx={{ maxWidth: 300, width: 300 }}>
                        <CardContent>
                            <Typography className='text-center' style={{ fontWeight: '600' }} gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                        <CardMedia
                            sx={{ height: 250, width: 20, paddingLeft: 40 }}
                            image="Static Assets/simplistic-web-development-and-coding-on-pc.png"
                            title="green iguana"
                        />
                        <CardActions className='d-flex justify-content-between'>
                            <Button size="small"><img src='Static Assets/icons8-play-button-90.png' alt='play button' width='50px' height='50px'></img></Button>
                            <Button size="small"><img src='Static Assets/icons8-code-96.png' alt='code button' width='50px' height='50px'></img></Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    )
}
