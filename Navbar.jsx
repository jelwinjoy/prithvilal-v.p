import { AppBar, Button, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Navbar = () => {
  return (

    <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    Movies
                </Typography>

                <Button><Link to = '/Movie1' style={{color:"white"}}>movies</Link></Button>

                <Button><Link to = '/Addmovie' style={{color:"white"}}></Link>addmovies</Button>
            </Toolbar>
        </AppBar>

    </Box>
    <div>
      
    </div>
  )
}

export default Navbar
