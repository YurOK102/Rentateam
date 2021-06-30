import React from 'react';

import { useStylesFooterGroup } from './FooterGroupStyles';

const FooterGroup = () => {
  const classes = useStylesFooterGroup();

  return (
    <>
      <div className={classes.footer__sections}>
        <div className={classes.footer__section}>
          <div className={classes.footer__section_title}>
            <span>Раздел 1</span>
          </div>

          <ul className={classes.footer__wrap_text}>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
          </ul>
        </div>

        <div className={classes.footer__section}>
          <div className={classes.footer__section_title}>
            <span>Раздел 2</span>
          </div>

          <ul className={classes.footer__wrap_text}>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={classes.footer__logo}></div>

      <div className={classes.footer__sections}>
        <div className={classes.footer__section}>
          <div className={classes.footer__section_title}>
            <span>Раздел 3</span>
          </div>

          <ul className={classes.footer__wrap_text}>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
          </ul>
        </div>

        <div className={classes.footer__section}>
          <div className={classes.footer__section_title}>
            <span>Раздел 4</span>
          </div>

          <ul className={classes.footer__wrap_text}>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
            <li className={classes.footer__section_text}>
              <a href="/">Подраздел </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterGroup;
