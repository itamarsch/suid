import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@suid/material";

export default function RadioButtonsGroupExample() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="female"
          control={() => <Radio />}
          label="Female"
        />
        <FormControlLabel value="male" control={() => <Radio />} label="Male" />
        <FormControlLabel
          value="other"
          control={() => <Radio />}
          label="Other"
        />
      </RadioGroup>
    </FormControl>
  );
}
