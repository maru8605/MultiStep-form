import { useRecoilState } from 'recoil';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

import * as atoms from '../../atoms/form';

const InputCheckbox = (props) => {
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
      <FormControl>
        <FormLabel>{question.title}</FormLabel>
        <FormGroup value={inputValue} onChange={onChange}>
          {question.options.map((option) => (
            <FormControlLabel
              key={option.id}
              value={option.id}
              control={<Checkbox />}
              label={option.label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default InputCheckbox;
