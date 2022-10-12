import React, { useEffect, useRef } from 'react'
import {useLocation, useNavigate} from "react-router-dom"

import {Feature, Map, View} from 'ol/index'
import {OSM, Vector as VectorSource} from 'ol/source'
import {Point} from 'ol/geom'
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer'
import {useGeographic} from 'ol/proj'

import Button from '@mui/material/Button'
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import CardActions from "@mui/material/CardActions"

const Geo = () => {
    useGeographic()

    const loc = useLocation()
    const {name, coordinates} = loc.state.card

    const navigate = useNavigate()

    const point = new Point(coordinates);
    const mapElement = useRef()             // pull refs

    // Initialize map on first render
    useEffect( () => {
        // create map
        const map = new Map({
            target: mapElement.current,
            view: new View({
                center: coordinates,
                zoom: 14,
            }),
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                new VectorLayer({
                    source: new VectorSource({
                        features: [new Feature(point)],
                    }),
                    style: {
                        'circle-radius': 6,
                        'circle-fill-color': 'red',
                    },
                }),
            ],
        })
    })

    return (
        <div>
            <div className="map" ref={mapElement}/>

            <div className="card">
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6">
                            {name}
                        </Typography>
                        <Typography sx={{ fontSize: 12}} >
                            <i>{coordinates[0]} &nbsp;&nbsp; {coordinates[1]}</i>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button sx={{ fontSize: 11}} size="small" variant="outlined"
                                onClick={() => navigate("/")}>Go Back</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default Geo
