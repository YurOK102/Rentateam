import { makeStyles } from '@material-ui/core/styles';

export const useStylesHeader = makeStyles((theme) => ({
  header_area: {
    width: '100%',
    background: theme.palette.primary.main,
    padding: '0 10px',
  },

  header: {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    marginBottom: '10px',

    [theme.breakpoints.up('lg')]: {
      height: '88px',
      marginBottom: '20px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '1250px',
      margin: '0 auto',
    },
  },
  header__bg_img: {
    width: '60px',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%)',

    [theme.breakpoints.up('lg')]: {
      width: '70px',
    },
    '& img': {
      width: '100%',
    },
  },
  header__link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

  },
  header__btn: {
    padding: '6px 10px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.palette.primary.red,
    color: theme.palette.primary.main,

    [theme.breakpoints.up('xl')]: {
      marginRight: '15px',
    },
    '& p': {
      ...theme.typography.p_price,
    },
  },
  header__btn_img: {
    marginLeft: '10px',
    width: '20px',
    height: '20px',

    [theme.breakpoints.up('lg')]: {
      width: '24px',
      height: '24px',
    },
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
  },
}));
