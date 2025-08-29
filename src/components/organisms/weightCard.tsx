import React from "react";
import WeightInfo from "../molecules/weightInfo";
import { theme } from "../../styles/styles";

import { makeStyles } from "tss-react/mui";
import Card from "../atoms/card";
import { PageProps } from "../../screens/pageCalculator";

const WeightCard = ({length, width, grammage, numberOfSheets, format, din, setLength, setWidth, setGrammage, setNumberOfSheets, setFormat, setDin
} : PageProps) => {
    return(

        <>
        
            <Card direction="column">

                <WeightInfo
                    length= {length}
                    width= {width}
                    grammage= {grammage}
                    numberOfSheets= {numberOfSheets}
                    format= {format}
                    din= {din}

                    setLength= {setLength}
                    setWidth= {setWidth}
                    setGrammage = {setGrammage}
                    setNumberOfSheets = {setNumberOfSheets}
                    setFormat = {setFormat}
                    setDin = {setDin}
                />

            </Card>
        
        </>


    )

}


export default WeightCard;