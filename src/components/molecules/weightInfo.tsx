import React from "react";
import TextField from "@mui/material/TextField";
import { PageProps } from "../../screens/pageCalculator";





const WeightInfo = ({length, width, grammage, numberOfSheets, format, din, setLength, setWidth, setGrammage, setNumberOfSheets, setFormat, setDin
} : PageProps)=>{

    return(
        <div>
            <p><strong>Page size format:</strong> {format}</p>
            <p><strong>Page weight format:</strong> {din}</p>

            <p><strong>Weight:</strong> {length * width * grammage * numberOfSheets} g</p>

            <TextField
                style={{margin:10}}
                type="number"
                label="Number of sheets"
                value={numberOfSheets}
                onChange={(val)=>{setNumberOfSheets(Number(val.target.value))}}
            />
        </div>
    )
}



export default WeightInfo;