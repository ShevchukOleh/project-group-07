import { CloseBtn } from 'components/Buttons/CloseBtn';
import {
  ColumnModalContainer,
  ColumnModalTitle,
  ColumnModalForm,
  ColumnModalFormInput,
  ColumnModalFormBtn,
  IconPlusWrapper,
  IconPlus,
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

      <CloseBtn onClick={() => setOpenEditModal(prev => !prev)} />
    </ColumnModalContainer>
  );
};

export default ModalEditColumn;
