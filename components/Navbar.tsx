import React from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Hidden from "@material-ui/core/Hidden";
import Logo from './../assets/logo.svg';


// import { Link } from "../../util/router.js";
// import { useAuth } from "../../util/auth.js";
import Link from "next/link";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "1.0rem 1.5rem 0",
  },
  toolBar: {
    height: 84,
  },
  link: {
    lineHeight: 1,
  },
  Navlink: {
    margin: ".5em 1em",
    textDecoration: "none",
  },
  image: {
    height: "48px",
    marginRight: theme.spacing(2),
  },
  spacer: {
    flexGrow: 1,
  },
  dialog: {
    width: "calc(100% - 32px)",
    maxWidth: "calc(100% - 32px)",
    margin: 0,
    position: "absolute",
    top: "80px",
  },
  button: {
    textTransform: "none",
  },
  buttonIcon: {
    marginLeft: theme.spacing(1),
  },
}));

function Navbar(props) {
  const { logo, spaced, ...otherProps } = props;
  const classes = useStyles(); 
  const theme = useTheme();
  const xSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleOpenMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleCloseMenu() {
    setAnchorEl(null);
  }

  function handleSignout(event) {
    // event.preventDefault();
    // auth.signout();
    // handleCloseMenu();
  }

 

  return (
    <div className={classes.wrapper} {...otherProps}>
      <Container component="nav">
        <Toolbar variant={spaced ? "regular" : "dense"} disableGutters>
          <Link href="/" className={classes.link}>
            <img className={classes.image} src={Logo} alt="Logo" />
          </Link>
          <div className={classes.spacer} />
          {false && (
            <Button component={Link} to="/signin" className={classes.button}>
              Sign in
            </Button>
          )}
          {true && (
            <div>
              <Hidden smUp implementation="css">
                <IconButton
                  aria-label="User account"
                  aria-controls="appbar-menu"
                  aria-haspopup="true"
                  onClick={handleOpenMenu}
                  color="inherit"
                >
                 🍔s
                  {/* <MenuIcon /> */}
                </IconButton>
              </Hidden>
              <Hidden xsDown>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className={classes.Navlink}>
                    <Link href="/">Link 1</Link>
                  </div>
                  <div className={classes.Navlink}>
                    <Link href="/">Link 2</Link>
                  </div>
                  <div className={classes.Navlink}>
                    <Link href="/">Link 3</Link>
                  </div>
                  <div className={classes.Navlink}>
                    <Link href="/">Link 4</Link>
                  </div>

                  <Button
                    aria-label="User account"
                    aria-controls="appbar-menu"
                    aria-haspopup="true"
                    onClick={handleOpenMenu}
                    className={classes.button}
                  >
                    LOGIN
                    {/* <ExpandMoreIcon className={classes.buttonIcon} /> */}
                  </Button>
                </div>
              </Hidden>
              {xSmall ? (
                <Dialog
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                  id="appbar-menu"
                  PaperProps={{ className: classes.dialog }}
                >
                  <DialogContent> <div className={classes.Navlink}>
                    <Link href="/">asd</Link>
                  </div>
                  <div className={classes.Navlink}>
                    <Link href="/">asd</Link>
                  </div>
                  <div className={classes.Navlink}>
                    <Link href="/">asd</Link>
                  </div>
                  <div className={classes.Navlink}>
                    <Link href="/">asd</Link>
                  </div>
</DialogContent>
                </Dialog>
              ) : (
                <Menu
                  id="appbar-menu"
                  anchorEl={anchorEl}
                  getContentAnchorEl={undefined}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                >
                  <div className={classes.Navlink}>
                    <Link href="/">asd</Link>
                  </div>
                  <div className={classes.Navlink}>
                    <Link href="/">asd</Link>
                  </div>
                  <div className={classes.Navlink}>
                    <Link href="/">asd</Link>
                  </div>
                  <div className={classes.Navlink}>
                    <Link href="/">asd</Link>
                  </div>

                </Menu>
              )}
            </div>
          )}
        </Toolbar>
      </Container>
    </div>
  );
}

Navbar.propTypes = {
  logo: PropTypes.string,
  spaced: PropTypes.bool,
};

export default Navbar;
