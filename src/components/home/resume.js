import React from "react";
import {Button} from "@mui/material";
import { saveAs } from "file-saver";

const Resume = () => {
    const saveFile = () => {
        saveAs(
          "https://docs.google.com/document/d/1T7wLWy8NPfee-fOd3y3heTqpsbfkNOGc8epGZIrpZ1A/edit?usp=sharing",
          "nicole.pdf"
        );
      };
 return (
  <>
      <Button
         variant="contained"
         type="button"
         value="download"
         onClick={saveFile}
       >
         Download my resume
       </Button>
  </>
 )
}

export default Resume;