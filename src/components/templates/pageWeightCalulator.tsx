import React from "react";
import WeightInfo from "../molecules/weightInfo";
import { useLocalStorage } from "@uidotdev/usehooks";
import WeightCard from "../organisms/weightCard";
import EditCard from "../organisms/editCard";
import Formats from "../molecules/formats";
import FormatCard from "../organisms/formatCard";
import {PageProps} from "../../screens/pageCalculator"



const PageWeightCalulator = ({length, width, grammage, numberOfSheets, format, din, setLength, setWidth, setGrammage, setNumberOfSheets, setFormat, setDin
} : PageProps) => {



    return (


        <>
        
            <h1>Page Calculator</h1>

            <WeightCard 
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
            <EditCard
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
            <FormatCard
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
        </>
    )
}


export default PageWeightCalulator