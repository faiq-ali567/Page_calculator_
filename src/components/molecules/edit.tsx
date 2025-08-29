import React, { useState } from "react";
import Slider from '@mui/material/Slider';
import { PageProps } from "../../screens/pageCalculator";




const Edit = ({length, width, grammage, numberOfSheets, format, din, setLength, setWidth, setGrammage, setNumberOfSheets, setFormat, setDin
} : PageProps) => {

    return (
        <>
            <p>Length: {length}mm</p>
            <Slider
            value={length}
            onChange={(_, newValue) => setLength(newValue as number)}
            min={1}
            max={500}
            step={5}
            />

            <p>Width: {width}mm</p>
            <Slider
            value={width}
            onChange={(_, newValue) => setWidth(newValue as number)}
            min={1}
            max={500}
            step={5}
            />

            <p>Grammage: {grammage}g</p>
            <Slider
            value={grammage}
            onChange={(_, newValue) => setGrammage(newValue as number)}
            min={10}
            max={1000}
            step={5}
            />
        </>
    );
}




export default Edit;