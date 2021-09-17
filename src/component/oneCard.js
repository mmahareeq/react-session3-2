import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
export default function oneCard(props) {
    
    return (
        
            <Card sx={{ maxWidth: 345 }} style={{'display':'flex','margin':'20px'}}>
                <CardContent>
                    <Typography variant="h5" color="black">
                      {props.Data.title}
                    </Typography>
                    <CardMedia
                        component="img"
                        height="194"
                        image={props.Data.picture}
                        alt="Paella dish"
                    />
                    <Typography variant="p" color="text.secondary">
                      {props.Data.firstName + ` `+ props.Data.lastName} 
                    </Typography>
                </CardContent>
            </Card>
        
    )
}