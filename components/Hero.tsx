import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid"; 

const useStyles = makeStyles({
  image: {
    margin: "0 auto",
    maxWidth: 570,
    display: "block",
    height: "auto",
    width: "100%"
  },
  spacer: {
    height: 48
  }
});

function HeroSection(props) {
  const {
    color,
    size,
    title,
    subtitle,
    buttonOnClick,
    buttonText,
    image,
    ...otherProps
  } = props;

  const classes = useStyles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section color={color} size={size} {...otherProps}>
      <Container>
        <Grid container alignItems="center">
          <Grid
            item
            container
            direction="column"
            alignItems={small ? "center" : undefined}
            xs={12}
            md={5}
          >
            {/* <SectionHeader
              title={title}
              subtitle={subtitle}
              size={3}
              centered={small}
            /> */}
            <h1>Discover the fastest way to digitilize your Building with Lumoview</h1>
            <p>Lumoview digitizes buildings from the inside through a measurement that takes only 2 seconds per room.  Lumoview thus delivers exact floor plans, 3D models and 3D visualisations, including a room book, much faster than a conventional, manual measurement. An "as-built model" in IFC format is automatically created in the cloud. The data can be seamlessly integrated into the customer's digital building management platforms (BIM, CAFM, ERP). </p>
            <Grid item>
              {/* <SectionButton
                parentColor={color}
                size="large"
                onClick={buttonOnClick}
              >
                {buttonText}
              </SectionButton> */}
              <button>button</button>
              <button>button</button>
            </Grid>
          </Grid>
          <Grid item xs={12} md={1} className={classes.spacer} />
          <Grid item xs={12} md>
             <div style={{minHeight:'500px'}}>

            <iframe src="https://www.youtube.com/embed/d0n0scNuRxI" height="400px" width="100%" frameBorder="0"></iframe>
             </div>
 
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

HeroSection.propTypes = {
  buttonOnClick: PropTypes.func,
  buttonText: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default HeroSection;