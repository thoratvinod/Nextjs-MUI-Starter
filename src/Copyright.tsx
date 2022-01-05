import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ bottom: '0', position: 'fixed' }}>
      {'Copyright © '}
      <MuiLink color="inherit" target="_blank" href="https://mui.com/">
        GyanDaan
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
