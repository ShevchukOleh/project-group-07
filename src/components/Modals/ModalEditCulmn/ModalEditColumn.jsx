import {
  ColumnModalContainer,
  ColumnModalTitle,
  ColumnModalForm,
  ColumnModalFormInput,
  ColumnModalFormBtn,
  IconPlusWrapper,
  IconCrossWrapper,
  IconPlus,
  IconClose,
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
        <IconClose />
      </IconCrossWrapper>
    </ColumnModalContainer>
  );
};

export default ModalEditColumn;
