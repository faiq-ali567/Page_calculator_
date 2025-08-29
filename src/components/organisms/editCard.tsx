import React from "react";
import Edit from "../molecules/edit"
import Card from "../atoms/card";
import { theme } from "../../styles/styles";

import { makeStyles } from "tss-react/mui";
import { PageProps } from "../../screens/pageCalculator";



const EditCard = ({length, width, grammage, numberOfSheets, format, din, setLength, setWidth, setGrammage, setNumberOfSheets, setFormat, setDin
} : PageProps) => {
    return(
      <Card direction="column">
            <Edit
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
    )
}


export default EditCard;