import React from 'react'
import {useNavigate} from 'react-router-dom'

import '@fontsource/roboto/500.css'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'


const Cards = () => {
    const sensors = [
        {
            "id": "1",
            "name": "Basic sensor",
            "description": "Use the basic sensor to supervise the basic filed conditions or conditions in halls. ",
            "coordinates": [14.214275, 50.381043]
        },
        {
            "id": "2",
            "name": "Weatherstation",
            "description": "Plan your agro acvities according to all meteorological conditions on one rod.",
            "coordinates": [14.217792, 50.371542]
        },
        {
            "id": "3",
            "name": "Storage hall sensor",
            "description": "Make sure your harvest is well stored inside your storage halls to avoid any pests and diseases threats.",
            "coordinates": [14.221525, 50.374929]
        },
        {
            "id": "4",
            "name": "Soil sensor",
            "description": "Check soil humidity and temperature to manage your irrigation effectively and save on cost.",
            "coordinates": [14.205785, 50.364011]
        }
    ]

    const Crd = (props) => {
        const card = props.card
        const {name, description} = card
        const navigate = useNavigate()

        return (
            <div className="card">
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography sx={{ fontSize: 12}} color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button sx={{ fontSize: 11}} size="small" variant="outlined"
                                onClick={() => navigate("/geo", {state:{card}})}>Go to Detail</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }

    const cards = sensors.map((card, index) => {      // Creating array of cards
        return (
            <Crd key={index} card={card}/>
        )
    })

    return (
        <div>
            {cards}
        </div>
    );
}

export default Cards
