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

const ModalAddColumn = ({
  handleSubmit,
  setOpenAddModal,
  setAddColumn,
  addColumn,
}) => {
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

      <IconCrossWrapper onClick={() => setOpenAddModal(prev => !prev)}>
        <IconClose />
      </IconCrossWrapper>
    </ColumnModalContainer>
  );
};

export default ModalAddColumn;
