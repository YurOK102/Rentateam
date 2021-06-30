import { makeStyles } from '@material-ui/core/styles';

export const useStylesMain = makeStyles((theme) => ({
  main_area: {
    width: '100%',
    height: '56px',
    background: theme.palette.primary.main,
    position: 'sticky',
    top: 0,
    zIndex: 100,
    padding: '0 10px',
  },

  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '15px',
    overflow: 'auto',

    [theme.breakpoints.up('xl')]: {
      width: '1250px',
      margin: '0 auto',
    },
  },
  main__tabs: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 10px',
    paddingBottom: '15px',
    borderBottom: `1px solid transparent`,

    '& a': {
      width: '100%',
      ...theme.typography.p_tabs,
      color: theme.palette.primary.grey,
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      padding: 0,
      background: theme.palette.primary.main,
      textDecoration: 'none',
    },
    '&.active': {
      borderBottom: `1px solid ${theme.palette.primary.red}`,
      '& a': {
        color: theme.palette.primary.red,
      },
    },
  },

  products_area: {
    width: '100%',
    padding: '0 10px',
    background: theme.palette.primary.milk,

    '&:nth-child(2n)': {
      background: theme.palette.primary.main,
    },
  },
  products: {
    padding: '60px 0 40px',

    [theme.breakpoints.up('xl')]: {
      width: '1250px',
      margin: '0 auto',
    },
  },
  products__title: {
    [theme.breakpoints.up('lg')]: {
      marginBottom: '20px',
    },
    [theme.breakpoints.up('xl')]: {
      marginBottom: '32px',
    },
    '& p': {
      ...theme.typography.p_title,
    },
  },
  products__wrapper: {
    // width: '100%',
    // display: 'flex',
    // justifyContent: 'space-between',
    // flexWrap: 'wrap',

    display: 'grid',
    gridTemplateColumns: '1fr',
    gridColumnGap: '15px',
    gridRowGap: '5px',

    [theme.breakpoints.up('xs')]: {
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: '10px',
      gridRowGap: '10px',
    },
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
      gridColumnGap: '10px',
      gridRowGap: '10px',
    },
    [theme.breakpoints.up('xl')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridColumnGap: '32px',
      gridRowGap: '32px',
    },
  },
}));
