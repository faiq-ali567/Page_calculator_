import React from "react";
import { Card } from "@mui/material";
import { theme } from "../../styles/styles";
import { makeStyles } from "tss-react/mui";
import { dins, PageProps, paperSizes } from "../../screens/pageCalculator";


const useStyles = makeStyles()(() => ({
    div:{
        display: theme.display.flex,
        flexDirection: "row",
        alignItems: theme.display.alignCenter,
        justifyContent: theme.display.justifyContentCenter,
    },
  button: {
    padding: theme.spacing.lg,
    margin: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.background,
     
    textAlign: "center",
  },
}));



const Formats = ({length, width, grammage, numberOfSheets, format, din, setLength, setWidth, setGrammage, setNumberOfSheets, setFormat, setDin
} : PageProps) =>{
    const { classes } = useStyles();

    
    return(
        <>
        <div className={classes.div}>
            {
            Object.keys(paperSizes).map((key) => (
            <button
                key={key}
                className={classes.button}
                onClick={() => {
                    setLength(paperSizes[key as keyof typeof paperSizes].length);
                    setWidth(paperSizes[key as keyof typeof paperSizes].width);
                }}>
                {key}
            </button>
            ))}       
        </div>
        <div className={classes.div}>

            {
            Object.keys(dins).map((key) => (
            <button
                key={key}
                className={classes.button}
                onClick={() => {
                    setGrammage(dins[key as keyof typeof dins]);
                }}>
                {key}
            </button>
            ))} 

        </div>
        
        
        </>
        

    )
}



export default Formats;