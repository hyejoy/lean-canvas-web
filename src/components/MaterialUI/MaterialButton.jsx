import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

export default function MaterialButton() {
  return (
    <>
      <CssBaseline />
      <Button variant="contained">Contained Button</Button>
      <Button variant="outlined">OutLine Button</Button>
      <Button variant="text">Text Button</Button>
    </>
  );
}
