<<<<<<< HEAD
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { ButtonGroup } from '@material-ui/core';
=======
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import BlockContent from "@sanity/block-content-to-react";
import React from "react";
import client from "../lib/sanity";
>>>>>>> 5ed26e6406766df67fd32fea8b3c9bc72e05ba24

export default function Index({ data }) {
  return (
    <section
      style={{ backgroundImage: 'url("nereus-assets/img/bg/pattern2.png")' }}
    >
      <Container maxWidth="md">
        <Box textAlign="center" color="common.white">
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
<<<<<<< HEAD
      <ProTip />
      <Link href="#" >HOLA PANCHO</Link>
      <Copyright></Copyright>
      <ButtonGroup mt={3}>
        <Button variant="contained" color="secondary" >secondary</Button>
        <Button variant="contained" color="primary" >Primary</Button>
      </ButtonGroup>
    </Box>
    </Container>
</section>
    
=======
    </section>
>>>>>>> 5ed26e6406766df67fd32fea8b3c9bc72e05ba24
  );
}

export async function getStaticProps() {
  const data = await client.fetch(`*[_type == "page"][0]`);
  return { props: { data: data } };
}
