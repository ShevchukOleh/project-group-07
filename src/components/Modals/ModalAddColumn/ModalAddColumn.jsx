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

      <CloseBtn onClick={() => setOpenAddModal(prev => !prev)} />
    </ColumnModalContainer>
  );
};

export default ModalAddColumn;
