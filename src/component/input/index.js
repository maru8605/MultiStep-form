import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import InputSelect from './select';
import InputRadio from './radio';
import InputText from './text';
import InputCheckbox from './checkbox';

import * as atoms from '../../atoms/form';

const InputContainer = styled.div`
  margin: 20px 0;
  width: 100%;
`;

export const Input = (props) => {
  const { question } = props;
  const allValuesObj = useRecoilValue(atoms.allValuesObj);

  if (question.requiredBy) {
    const reportValue = allValuesObj[question.requiredBy].value;
    if (!question.requiredByValue.includes(reportValue)) {
      return null;
    }
  }

  switch (question.type) {
    case 'select':
      return (
        <InputContainer>
          <InputSelect question={question} />
        </InputContainer>
      );
    case 'checkbox':
      return (
        <InputContainer>
          <InputCheckbox question={question} />
        </InputContainer>
      );
    case 'radio':
      return (
        <InputContainer>
          <InputRadio question={question} />
        </InputContainer>
      );
    case 'text':
      return (
        <InputContainer>
          <InputText question={question} />
        </InputContainer>
      );
    default:
      return null;
  }
};
