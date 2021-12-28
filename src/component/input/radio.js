import { useRecoilState } from 'recoil';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

import * as atoms from '../../atoms/form';

const InputRadio = (props) => {
  const { question } = props;
  const [values, setValues] = useRecoilState(atoms.values);

  const inputValue = values[question.id] || question.options[0].id;

  const onChange = (e) => {
    setValues((old) => {
      return {
        ...old,
        [question.id]: e.target.value,
      };
    });
  };

  return (
    <div>
      <FormControl component="fieldset" fullWidth>
        <FormLabel component="legend">{question.title}</FormLabel>
        <RadioGroup value={inputValue} onChange={onChange}>
          {question.options.map((option) => (
            <FormControlLabel
              key={option.id}
              value={option.id}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default InputRadio;
