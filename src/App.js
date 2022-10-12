import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Geo from './Geo'
import Cards from './Cards'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Cards />} />
                <Route path="geo" element={<Geo />} />
            </Routes>
        </div>
    )
}

export default App
