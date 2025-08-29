import React, { useEffect } from "react";
import PageWeightCalulator from "/Users/faiqali/Documents/page_weight/src/components/templates/pageWeightCalulator";
import useLocalStorage from "../hooks/useLocalStorage";


export const paperSizes = {
  "A2": { length: 100, width: 150 },
  "A3": { length: 200, width: 250 },
  "A4": { length: 300, width: 350 },
  "A5": { length: 400, width: 450 },
  "A6": { length: 500, width: 450 },
  "DL": { length: 500, width: 350 }
};

export const dins = {
  "DIN A": 80,
  "DIN B": 100,
  "DIN C": 90,
  "JIS B": 85,
  "US Formats": 75
};



export interface PageProps {
    length: number;
    width: number;
    grammage: number;
    numberOfSheets: number;
    format: string;
    din: string;

    setLength: (value: number) => void;
    setWidth: (value: number) =>void;
    setGrammage: (value: number) =>void;
    setNumberOfSheets: (value: number) =>void;
    setFormat: (value: string) => void;
    setDin: (value: string) => void;
}



const PageCalculator = () =>{

    const [length, setLength] = useLocalStorage<number>("length", 10);
    const [width, setWidth] = useLocalStorage<number>("width",10);
    const [grammage, setGrammage] = useLocalStorage<number>("grammage",10);
    const [numberOfSheets, setNumberOfSheets] = useLocalStorage<number>("numberOfSheets",10);
    const [format, setFormat] = useLocalStorage<string>("format", "A2");
    const [din, setDin] = useLocalStorage<string>("din", "DIN A")
    useEffect(()=> {
        let ok = 0;
        for (const key in paperSizes) {
            if (
                length === paperSizes[key as keyof typeof paperSizes].length &&
                width === paperSizes[key as keyof typeof paperSizes].width
            ) {
                ok++;
                setFormat(key)
            }
        }
        if(ok == 0){
            setFormat("Custom Format")
        }
    },[length, width])

    useEffect(()=>{
        let ok = 0;
        for (const key in dins) {
            if (
                grammage === dins[key as keyof typeof dins]
            ) {
                ok++;
                setDin(key)
            }
        }
        if(ok == 0){
            setDin("Custom Grammage")
        }
    },[grammage, din])

    return(
        <>
           <PageWeightCalulator
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


export default PageCalculator;