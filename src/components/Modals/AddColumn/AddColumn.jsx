import { useState } from 'react';
import {
  ColumnModalContainer,
  ColumnModalTitle,
  ColumnModalForm,
  ColumnModalFormInput,
  ColumnModalFormBtn,
  IconPlusWrapper,
} from '../UI/ModalCulumn.styled';
import { AiOutlinePlus } from 'react-icons/ai';
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
            <AiOutlinePlus size={16} color="white" />
          </IconPlusWrapper>
          Add
        </ColumnModalFormBtn>
      </ColumnModalForm>
    </ColumnModalContainer>
  );
};
export default AddColumn;
