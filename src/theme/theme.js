/* eslint-disable import/prefer-default-export */
import { createMuiTheme } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import CeraCondensedProRegular from '../assets/fonts/CeraCondensedPro-Regular.woff2';

const ceraCondensedPro = {
  fontFamily: 'Cera Condensed Pro',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Cera Condensed Pro Regular'),
    local('Cera-Condensed-Pro-Regular'),
    url(${CeraCondensedProRegular}) format('woff2')
  `,
};

const breakpoints = createBreakpoints({
  values: {
    xs: 480,
    sm: 600,
    md: false,
    lg: 768,
    xl: 1248,
  },
});

const palette = {
  primary: {
    main: '#fff',
    black: '#000',
    red: '#E4002B',
    milk: '#F7F6F5',
    grey: '#9D9D9D',
  },
  secondary: {
    main: '#f00',
    yellow: '#ff0',
    lime: '#58FA58',
  },
};

const typography = {
  fontFamily: 'Cera Condensed Pro',

  p_validate: {
    fontWeight: '400',
    color: palette.primary.main,
    fontSize: '14px',
    lineHeight: '16px',

    [breakpoints.up('xl')]: {
      fontSize: '18px',
      lineHeight: '21px',
    },
  },
  p_1: {
    fontWeight: '400',
    color: palette.primary.black,
    [breakpoints.up('xl')]: {
      fontSize: '32px',
      lineHeight: '40px',
    },
  },
  p_radio: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '18px',

    [breakpoints.up('xl')]: {
      fontSize: '32px',
      lineHeight: '40px',
    },
  },

  p_price: {
    fontWeight: '400',
    color: palette.primary.main,
    fontSize: '14px',
    lineHeight: '16px',

    [breakpoints.up('lg')]: {
      fontSize: '16px',
      lineHeight: '18px',
    },
    [breakpoints.up('xl')]: {
      fontSize: '20px',
      lineHeight: '25px',
    },
  },
  p_title: {
    fontWeight: '400',
    color: palette.primary.black,
    fontSize: '20px',
    lineHeight: '25px',

    [breakpoints.up('lg')]: {
      fontSize: '26px',
      lineHeight: '35px',
    },
    [breakpoints.up('xl')]: {
      fontSize: '32px',
      lineHeight: '40px',
    },
  },
  p_tabs: {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '18px',

    [breakpoints.up('lg')]: {
      fontSize: '16px',
      lineHeight: '20px',
    },
    [breakpoints.up('xl')]: {
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
  p_prod_name: {
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '20px',

    [breakpoints.up('lg')]: {
      fontSize: '20px',
      lineHeight: '25px',
    },
    [breakpoints.up('xl')]: {
      fontSize: '24px',
      lineHeight: '32px',
    },
  },
  p_prod_price: {
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '25px',
    color: palette.primary.red,

    [breakpoints.up('lg')]: {
      fontSize: '25px',
      lineHeight: '35px',
    },
    [breakpoints.up('xl')]: {
      fontSize: '32px',
      lineHeight: '40px',
    },
  },
  p_footer_title: {
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '25px',

    [breakpoints.up('lg')]: {
      fontSize: '25px',
      lineHeight: '35px',
    },
    [breakpoints.up('xl')]: {
      fontSize: '32px',
      lineHeight: '40px',
    },
  },
  p_footer_section_title: {
    fontWeight: '400',
    fontSize: '28px',
    lineHeight: '30px',
    color: palette.primary.black,

    [breakpoints.up('lg')]: {
      fontSize: '25px',
      lineHeight: '35px',
    },
    [breakpoints.up('xl')]: {
      fontSize: '32px',
      lineHeight: '40px',
    },
  },
  p_footer_section_text: {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '15px',
    color: palette.primary.black,

    [breakpoints.up('xl')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  h3: {
    fontWeight: '400',
    fontSize: '42px',
    lineHeight: '50px',

    [breakpoints.up('xl')]: {
      fontSize: '64px',
      lineHeight: '72px',
    },
  },

  // headers
  // h1: {
  //   fontFamily: 'Roboto Slab, san-serif',
  //   fontWeight: 700,
  //   fontSize: '40px',
  //   lineHeight: '52px',
  //   margin: 0,
  // },
};

export const theme = createMuiTheme({
  palette,
  breakpoints,
  typography,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [ceraCondensedPro],
        'h1, h2, h3, h4, h5, h6, p': {
          margin: 0,
        },
        ul: {
          padding: 0,
        },
        a: {
          padding: 0,
          margin: 0,
        },
      },
    },
    MuiFormControlLabel: {
      root: {
        marginRight: 0,
        marginLeft: 0,
      },
    },
    MuiAccordion: {
      root: {
        '&$expanded': {
          margin: '0 auto',
          borderRadius: '4px 4px 0 0',
          boxShadow: 'inherit',
        },
      },
    },

    // MuiContainer: {
    //   root: {
    //     [breakpoints.up('xs')]: {
    //       padding: '0 12px',
    //     },
    //     [breakpoints.up('sm')]: {
    //       padding: '0 24px',
    //     },
    //     [breakpoints.up('md')]: {
    //       padding: '0 32px',
    //     },
    //     [breakpoints.up('xl')]: {
    //       padding: '0 172px',
    //     },
    //   },
    // },
    // MuiButton: {
    //   contained: {
    //     boxShadow: 'none',
    //     '&:disabled': {
    //       color: palette.primary.gray_500,
    //       backgroundColor: palette.primary.gray_300,
    //     },
    //     '&:hover, &:focus': {
    //       boxShadow: 'none',
    //     },
    //   },
    // },
  },
});
