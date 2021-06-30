import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useStylesFooterGroupAccordion } from './FooterGroupAccordionStyles';

const FooterGroupAccordion = () => {
  const classes = useStylesFooterGroupAccordion();

  return (
    <div className={classes.footer__grop_accordion}>
      <Accordion className={classes.footer__accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel1"
          className={classes.footer__accordion_summary}
        >
          <Typography className={classes.footer__typography_heading}>
            Раздел 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.footer__accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel2"
          className={classes.footer__accordion_summary}
        >
          <Typography className={classes.footer__typography_heading}>
            Раздел 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.footer__accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel3"
          className={classes.footer__accordion_summary}
        >
          <Typography className={classes.footer__typography_heading}>
            Раздел 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.footer__accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel4"
          className={classes.footer__accordion_summary}
        >
          <Typography className={classes.footer__typography_heading}>
            Раздел 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.footer__accordion_details}>
          <Typography className={classes.footer__typography_text}>
            Подраздел
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FooterGroupAccordion;
