import React from 'react';

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  radio_group__control: {
    width: '100px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.up('xl')]: {
      width: '145px',
      height: '48px',
    },
  },
  radio_group__control_label: {
    '& span': {
      padding: 0,
    },
  },
  radio_group__item_checked: {
    width: '100px',
    height: '30px',
    borderRadius: '4px',
    background: theme.palette.primary.red,
    color: theme.palette.primary.main,
    ...theme.typography.p_radio,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.up('xl')]: {
      width: '145px',
      height: '48px',
    },
  },
  radio_group__item_no_checked: {
    width: '100px',
    height: '30px',
    borderRadius: '4px',
    background: theme.palette.primary.milk,
    color: theme.palette.primary.grey,
    ...theme.typography.p_radio,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.up('xl')]: {
      width: '145px',
      height: '48px',
    },
  },
}));

function RadioButtonGroup({ checkSelector }) {
  const classes = useStyles();

  const [value, setValue] = React.useState('pickup');

  const handleChange = (event) => {
    setValue(event.target.value);
    checkSelector(event.target.value);
  };

  return (
    <FormControl component="fieldset" className={classes.radio_group__form}>
      <RadioGroup
        name="gender1"
        value={value}
        onChange={handleChange}
        className={classes.radio_group__control}
      >
        <FormControlLabel
          value="delivery"
          className={classes.radio_group__control_label}
          control={
            <Radio
              checkedIcon={
                <div className={classes.radio_group__item_checked}>
                  Доставка
                </div>
              }
              icon={
                <div className={classes.radio_group__item_no_checked}>
                  Доставка
                </div>
              }
            />
          }
        />

        <FormControlLabel
          value="pickup"
          className={classes.radio_group__control_label}
          control={
            <Radio
              checkedIcon={
                <div className={classes.radio_group__item_checked}>
                  Самовывоз
                </div>
              }
              icon={
                <div className={classes.radio_group__item_no_checked}>
                  Самовывоз
                </div>
              }
            />
          }
        />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonGroup;
