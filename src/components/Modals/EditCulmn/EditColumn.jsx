import { AiOutlinePlus } from 'react-icons/ai';
import {
  ColumnModalContainer,
  ColumnModalTitle,
  ColumnModalForm,
  ColumnModalFormInput,
  ColumnModalFormBtn,
  IconPlusWrapper,
} from '../UI/ModalCulumn.styled';
import { useState } from 'react';
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
            <AiOutlinePlus size={16} color="white" />
          </IconPlusWrapper>
          Add
        </ColumnModalFormBtn>
      </ColumnModalForm>
    </ColumnModalContainer>
  );
};
export default EditColumn;
