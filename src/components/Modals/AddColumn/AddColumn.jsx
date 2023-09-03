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

const AddColumn = () => {
  const [addColumn, setAddColumn] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(addColumn);
  };

  return (
    <ColumnModalContainer>
      <ColumnModalTitle>Add column</ColumnModalTitle>

      <ColumnModalForm>
        <ColumnModalFormInput
          placeholder="To Do"
          value={addColumn}
          onChange={e => setAddColumn(e.target.value)}
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

export default AddColumn;
