import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BlockContent from "@sanity/block-content-to-react";
import React from "react";
import client from "../lib/sanity";
import useStyles from "../src/styles";
import Link from '../src/Link';

export default function Index({ data }) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="inherit">
  
  
</AppBar>
      <section
        style={{ backgroundImage: 'url("nereus-assets/img/bg/pattern2.png")' }}
      >
        <Container maxWidth="md">
          <Box 
            textAlign="center"
            color="common.white"
          >
            <Typography variant="h2" component="h2" gutterBottom={true}>
              <Typography color="secondary" variant="h2" component="span">
                {data.title}
              </Typography>
              <Typography variant="h2" component="span">
                sit amet, consectetur adipiscing elit.
              </Typography>
            </Typography>
            <Container maxWidth="sm">
              <Typography variant="h6" color="textSecondary" paragraph={true}>
                <BlockContent blocks={data.body} />
              </Typography>
            </Container>
            <Box mt={3}>
              <Button variant="contained" color="secondary">
                Action
              </Button>
              <Button variant="outlined" color="secondary">
                Action
              </Button>
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const data = await client.fetch(`*[_type == "page"][0]`);
  return { props: { data: data } };
}
