import { useState } from 'react';
import {
  ColumnModalContainer,
  ColumnModalTitle,
  ColumnModalForm,
  ColumnModalFormInput,
  ColumnModalFormBtn,
  IconPlusWrapper,
  IconPlus,
} from '../UI/ModalCulumn.styled';

const EditColumn = () => {
  const [change, setChange] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(change);
  };

  return (
    <ColumnModalContainer>
      <ColumnModalTitle>Edit column</ColumnModalTitle>

      <ColumnModalForm>
        <ColumnModalFormInput
          placeholder="To Do"
          value={change}
          onChange={e => setChange(e.target.value)}
        />

        <ColumnModalFormBtn onClick={handleSubmit}>
          <IconPlusWrapper>
            <IconPlus />
          </IconPlusWrapper>
          Add
        </ColumnModalFormBtn>
      </ColumnModalForm>
    </ColumnModalContainer>
  );
};

export default EditColumn;
