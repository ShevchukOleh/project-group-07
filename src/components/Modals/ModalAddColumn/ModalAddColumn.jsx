import { BaseBtn } from 'components/Buttons/BaseBtn';
import { CloseBtn } from 'components/Buttons/CloseBtn';
import { ModalTitle } from '../ModalTitle';
import {
  ColumnModalContainer,
  ColumnModalForm,
  ColumnModalFormInput,
} from '../UI/ModalCulumn.styled';

const ModalAddColumn = ({
  handleSubmit,
  setOpenAddModal,
  setAddColumn,
  addColumn,
}) => {
  return (
    <ColumnModalContainer>
      <ModalTitle title={'Add column'} />

      <ColumnModalForm>
        <ColumnModalFormInput
          placeholder="To Do"
          value={addColumn}
          onChange={e => setAddColumn(e.target.value)}
        />

        <BaseBtn type={'submit'} label={'Add'} onClick={handleSubmit} />
      </ColumnModalForm>

      <CloseBtn onClick={() => setOpenAddModal(prev => !prev)} />
    </ColumnModalContainer>
  );
};

export default ModalAddColumn;
