import { makeStyles } from '@material-ui/core/styles';

export const useStylesMenu = makeStyles((theme) => ({
  menu: {
    [theme.breakpoints.up('xl')]: {
      width: '1250px',
      margin: '0 auto',
      paddingBottom: '60px',
      position: 'relative',
    },
  },
  menu__wrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    marginBottom: '20px',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  menu__text: {
    marginBottom: '20px',

    '& p': {
      ...theme.typography.h3,
    },
  },
  menu__selector: {
    width: '200px',
    height: '30px',
    background: theme.palette.primary.milk,
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    [theme.breakpoints.up('xl')]: {
      width: '290px',
      height: '48px',
    },
  },

  menu__delivery: {
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('lg')]: {
      width: '670px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  menu__delivery_group: {
    width: '310px',
    position: 'relative',

    [theme.breakpoints.up('lg')]: {
      height: '90px',
    },
  },
  menu__address: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 5,

    '& p': {
      ...theme.typography.p_1,
      marginRight: '12px',
    },
    '& input': {
      width: '210px',
      height: '30px',
      background: theme.palette.primary.milk,
      border: 'none',
      borderRadius: '4px',
      padding: '10px 0 10px 16px',

      [theme.breakpoints.up('xl')]: {
        height: '42px',
      },
    },
  },
  menu__validate: {
    padding: '9px 20px',
    background: theme.palette.primary.black,
    borderRadius: '8px',
    marginBottom: '10px',

    [theme.breakpoints.up('xl')]: {
      padding: '12px 20px',
    },
    '& img': {
      position: 'absolute',
      bottom: '7px',
      left: '50%',
      transform: 'translate(-50%)',

      [theme.breakpoints.up('lg')]: {
        bottom: '12px',
      },
      [theme.breakpoints.up('xl')]: {
        bottom: '0',
      },
    },
    '& p': {
      ...theme.typography.p_validate,
    },
  },
}));
