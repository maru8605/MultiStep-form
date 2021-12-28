import { useRecoilState } from 'recoil';
import { TextField } from '@mui/material';

import * as atoms from '../../atoms/form';

const InputText = (props) => {
  const { question } = props;
  const [values, setValues] = useRecoilState(atoms.values);

  const inputValue = values[question.id] || '';

  const onChange = (e) => {
    setValues((old) => {
      return {
        ...old,
        [question.id]: e.target.value,
      };
    });
  };

  return (
    <TextField
      id="outlined-basic"
      multiline
      rows={4}
      label={question.title}
      variant="outlined"
      value={inputValue}
      onChange={onChange}
      fullWidth
    />
  );
};
export default InputText;
