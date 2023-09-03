import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import {
  ColumnModalContainer,
  ColumnModalTitle,
  ColumnModalForm,
  ColumnModalFormInput,
  ColumnModalFormBtn,
  IconPlusWrapper,
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
            <AiOutlinePlus size={16} color="white" />
          </IconPlusWrapper>
          Add
        </ColumnModalFormBtn>
      </ColumnModalForm>
      <IconCrossWrapper onClick={() => setOpenEditModal(prev => !prev)}>
        <AiOutlineClose size={18} color="#fff" />
      </IconCrossWrapper>
    </ColumnModalContainer>
  );
};
export default ModalEditColumn;
