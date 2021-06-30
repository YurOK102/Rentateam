import { makeStyles } from '@material-ui/core/styles';

export const useStylesFooter = makeStyles((theme) => ({
  footer_area: {
    width: '100%',
    background: theme.palette.primary.main,
  },

  footer: {
    position: 'relative',
    padding: '60px 0 ',
    flexDirection: 'column',

    [theme.breakpoints.up('xl')]: {
      width: '1250px',
      margin: '0 auto',
      padding: '150px 90px 50px',
    },
  },
  footer__img: {
    display: 'none',
    width: '160px',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%)',

    [theme.breakpoints.up('xl')]: {
      display: 'block',
    },
  },
  footer__wrap_link: {
    width: '192px',
    margin: '0 auto',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer__wrap_img: {
    width: '217px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: '10px',
    right: '50%',
    transform: 'translate(50%)',

    [theme.breakpoints.up('lg')]: {
      right: '15%',
      bottom: '50px',
    },
  },
  footer__wrap_sections: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginBottom: '30px',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  footer__grop: {
    display: 'none',

    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
  footer__grop_accordion: {
    display: 'block',

    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
}));
