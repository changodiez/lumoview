import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { ButtonGroup } from '@material-ui/core';

export default function Index() {
  return (

      <section  style={{ backgroundImage: 'url("nereus-assets/img/bg/pattern2.png")' }}>
  <Container maxWidth="md">
    <Box textAlign="center" color="common.white">
      <Typography variant="h2" component="h2" gutterBottom={true}>
        <Typography color="secondary" variant="h2" component="span">Milton apesta </Typography>
        <Typography variant="h2" component="span">sit amet, consectetur adipiscing elit.</Typography>
      </Typography>
      <Container maxWidth="sm">
        <Typography variant="subtitle1" color="textSecondary" paragraph={true} >Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus.</Typography>
      </Container>
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
    
  );
}
