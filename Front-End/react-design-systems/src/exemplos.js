import Button from '@mui/material/Button';
import { ButtonGroup, TextField } from "@mui/material";
import BasicRating from "./component/StarValue";
import MediaCard from "./component/Card";

export default function App() {
  
  return (
    <>

      <Button variant="contained">Contained</Button>

      <br></br>
      <br></br>

      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>



      <BasicRating></BasicRating>

      <TextField id="outlined-basic" label="Nome" variant="outlined" />

      <br></br>
      <br></br>

      <MediaCard></MediaCard>

    </>
  );
}
