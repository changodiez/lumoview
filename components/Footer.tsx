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
    border:'1px solid black',
    margin: '0 3px'
  },
  buttonIcon: {
    marginLeft: theme.spacing(1),
  },
}));

function Footer(props) {
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
          <div>

          <Link href="/">
            <img className={classes.image} src={Logo} alt="Logo" />
          </Link>
          </div>
          <div className={classes.spacer} />
         
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
                 🍔
                  {/* <MenuIcon /> */}
                </IconButton>
              </Hidden>
              <Hidden xsDown>
                <div style={{ display: "flex", flexDirection: "row", width:'50%', margin:'0 auto' }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
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
                    <Link href="/">About us</Link>
                  </div>
                  <div className={classes.Navlink}>
                    <Link href="/">Product</Link>
                  </div>
                  <div className={classes.Navlink}>
                    <Link href="/">Teams</Link>
                  </div>
                  <div className={classes.Navlink}>
                    <Link href="/">News</Link>
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
                    <Link href="/">About us</Link>
                  </div>
                  <div className={classes.Navlink}>
                    <Link href="/">Product</Link>
                  </div>
                  <div className={classes.Navlink}>
                    <Link href="/">Teams</Link>
                  </div>
                  <div className={classes.Navlink}>
                    <Link href="/">News</Link>
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

Footer.propTypes = {
  logo: PropTypes.string,
  spaced: PropTypes.bool,
};

export default Footer;
