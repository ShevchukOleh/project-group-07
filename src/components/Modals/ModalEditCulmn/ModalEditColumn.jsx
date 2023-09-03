import { useState } from 'react';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import {
  ColumnModalContainer,
  ColumnModalTitle,
  ColumnModalForm,
  ColumnModalFormInput,
  ColumnModalFormBtn,
  IconPlusWrapper,

  //   IconPlus,
// } from '../UI/ModalCulumn.styled';

// const EditColumn = () => {
//   const [change, setChange] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(change);
//   };

  IconCrossWrapper,
} from '../UI/ModalCulumn.styled';
const ModalEditColumn = ({
  handleSubmit,
  setOpenEditModal,
  setEditColumn,
  editColumn,
}) => {
  return (
    <ColumnModalContainer>
      <ColumnModalTitle>Edit column</ColumnModalTitle>

      <ColumnModalForm>
        <ColumnModalFormInput
          placeholder="Title"
          value={editColumn}
          onChange={e => setEditColumn(e.target.value)}
        />

        <ColumnModalFormBtn onClick={handleSubmit}>
          <IconPlusWrapper>
            <IconPlus />
          </IconPlusWrapper>
          Add
        </ColumnModalFormBtn>
      </ColumnModalForm>
      <IconCrossWrapper onClick={() => setOpenEditModal(prev => !prev)}>
        <AiOutlineClose size={18} color="#161616" />
      </IconCrossWrapper>
    </ColumnModalContainer>
  );
};

// export default EditColumn;
export default ModalEditColumn;
