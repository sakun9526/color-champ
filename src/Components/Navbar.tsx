import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Color Champ
          </Typography>
          <Button color="inherit">About Game</Button>
          <GitHubIcon
            color="inherit"
            onClick={() => console.log("hi")}
            sx={{ ml: 2 }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
