import { makeStyles } from '@material-ui/core/styles';

export const useStylesFooterGroup = makeStyles((theme) => ({
  footer__sections: {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    [theme.breakpoints.up('xl')]: {
      marginBottom: '120px',
    },
  },
  footer__section: {
    [theme.breakpoints.up('sm')]: {
      width: '150px',
    },
  },
  footer__section_title: {
    marginBottom: '23px',
    textAlign: 'center',

    '& span': {
      ...theme.typography.p_footer_section_title,
    },
  },
  footer__section_text: {
    listStyle: 'none',
    marginBottom: '16px',
    textAlign: 'center',

    '& a': {
      ...theme.typography.p_footer_section_text,
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },
  footer__logo: {
    display: 'none',
    width: '227px',
    height: '227px',
    borderRadius: '50%',
    background: '#C4C4C4',
    marginTop: '30px',

    [theme.breakpoints.up('xl')]: {
      display: 'block',
    },
  },
}));
