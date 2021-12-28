import { useRecoilState } from 'recoil';
import {
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  OutlinedInput,
} from '@mui/material';

import * as atoms from '../../atoms/form';

const InputSelect = (props) => {
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
      <FormControl variant="standard" fullWidth>
        <InputLabel>{question.title}</InputLabel>
        <br />
        <Select
          value={inputValue}
          onChange={onChange}
          label={question.title}
          input={<OutlinedInput />}
          fullWidth
        >
          {question.options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default InputSelect;
