import { makeStyles } from '@material-ui/core/styles';

export const useStylesFooterGroupAccordion = makeStyles((theme) => ({
  footer__grop_accordion: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  footer__accordion: {
    width: '280px',
    margin: '0 auto',
    background: theme.palette.primary.main,
    boxShadow: 'inherit',
    position: 'static',
  },
  footer__accordion_summary: {
    boxShadow: 'inherit',
    border: 0,
  },
  footer__accordion_details: {
    display: 'block',
    textAlign: 'center',
  },
}));
