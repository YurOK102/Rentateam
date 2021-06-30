import { makeStyles } from '@material-ui/core/styles';

export const useStylesProductCard = makeStyles((theme) => ({
  product: {
    width: '100%',
    borderRadius: '8px',
    padding: '20px 30px 70px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
    transitionDuration: '0.6s',

    [theme.breakpoints.up('sm')]: {
      padding: '23px 10px 70px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '30px 10px 100px',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '30px 10px 135px',
    },
    '&:hover': {
      background: theme.palette.primary.main,
      transitionDuration: '0.6s',
    },
  },
  product__banner_new: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    position: 'absolute',
    top: '5%',
    left: '20%',
    background: theme.palette.primary.red,
    color: theme.palette.primary.main,
    fontSize: '15px',
    lineHeight: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.up('sm')]: {
      top: '10%',
      left: '5%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '48px',
      height: '48px',
      top: '10%',
      left: '15%',
    },
  },
  product__banner_hit: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    position: 'absolute',
    top: '5%',
    left: '20%',
    background: theme.palette.primary.black,
    color: theme.palette.primary.main,
    fontSize: '15px',
    lineHeight: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.up('sm')]: {
      top: '10%',
      left: '5%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '48px',
      height: '48px',
      top: '10%',
      left: '15%',
    },
  },
  product__remove_icon: {
    transform: 'rotate(45deg)',
  },
  product__wrap_img: {
    '& img': {
      width: '100%',
      height: '130px',
      objectFit: 'contain',

      [theme.breakpoints.up('lg')]: {
        height: '150px',
      },
      [theme.breakpoints.up('xl')]: {
        height: '190px',
      },
    },
  },
  product__wrap_double_btn: {
    width: '90px',
    height: '36px',
    position: 'absolute',
    top: '115px',
    right: '70px',
    zIndex: 2,
    background: theme.palette.primary.black,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: '50px',

    [theme.breakpoints.up('xs')]: {
      top: '120px',
      right: '30px',
    },
    [theme.breakpoints.up('sm')]: {
      top: '120px',
      right: '15px',
    },
    [theme.breakpoints.up('lg')]: {
      top: '140px',
      right: '40px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '104px',
      height: '40px',
      top: '168px',
      right: '56px',
    },
    '& button': {
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      background: theme.palette.primary.black,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& p': {
      color: theme.palette.primary.main,
      fontSize: '16px',
      lineHeight: '18px',
    },
  },
  product__white_btn: {
    width: '36px',
    height: '36px',
    position: 'absolute',
    top: '115px',
    right: '70px',
    zIndex: 2,
    background: theme.palette.primary.main,
    border: 'none',
    outline: 'none',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.08)',
    cursor: 'pointer',

    [theme.breakpoints.up('xs')]: {
      top: '120px',
      right: '30px',
    },
    [theme.breakpoints.up('sm')]: {
      top: '120px',
      right: '15px',
    },
    [theme.breakpoints.up('lg')]: {
      top: '140px',
      right: '40px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '40px',
      height: '40px',
      top: '168px',
      right: '56px',
    },
  },
  product__text: {
    width: '100%',
    position: 'absolute',
    bottom: '6px',
    left: 0,

    [theme.breakpoints.up('xl')]: {
      width: '100%',
      position: 'absolute',
      bottom: '16px',
      left: 0,
    },
  },
  product__name: {
    marginBottom: '10px',

    [theme.breakpoints.up('xl')]: {
      marginBottom: '20px',
    },
    '& p': {
      ...theme.typography.p_prod_name,
      textAlign: 'center',
      color: theme.palette.primary.grey,
    },
  },
  product__price: {
    ...theme.typography.p_prod_price,
    textAlign: 'center',
  },
}));
