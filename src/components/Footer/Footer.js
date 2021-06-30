import React from 'react';

import FooterGroup from '../FooterGroup/FooterGroup';
import FooterGroupAccordion from '../FooterGroupAccordion/FooterGroupAccordion';
import { useStylesFooter } from './FooterStyles';

function Footer() {
  const classes = useStylesFooter();

  return (
    <div className={classes.footer_area}>
      <div className={classes.footer}>
        <div className={classes.footer__img}>
          <img src={'img/footer_icon.svg'} alt="" />
        </div>
        <div className={classes.footer__wrap_sections}>
          <FooterGroup />
          <FooterGroupAccordion />
        </div>

        <ul className={classes.footer__wrap_link}>
          <a href="/">
            <img src={'img/icon_vk.svg'} alt="" />
          </a>
          <a href="/">
            <img src={'img/icon_f.svg'} alt="" />
          </a>
          <a href="/">
            <img src={'img/icon_t.svg'} alt="" />
          </a>
          <a href="/">
            <img src={'img/icon_o.svg'} alt="" />
          </a>
        </ul>
        <div className={classes.footer__wrap_img}>
          <a href="/">
            <img src={'img/footer_img_1.png'} alt="" />
          </a>
          <a href="/">
            <img src={'img/footer_img_2.png'} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
