import { BaseBtn } from 'components/Buttons/BaseBtn';
import { CloseBtn } from 'components/Buttons/CloseBtn';
import { ModalTitle } from '../ModalTitle';
import {
  ColumnModalContainer,
  ColumnModalForm,
  ColumnModalFormInput,
} from '../UI/ModalCulumn.styled';

const ModalEditColumn = ({
  handleSubmit,
  setOpenEditModal,
  setEditColumn,
  editColumn,
}) => {
  return (
    <ColumnModalContainer>
      <ModalTitle title={'Edit column'} />

      <ColumnModalForm>
        <ColumnModalFormInput
          placeholder="Title"
          value={editColumn}
          onChange={e => setEditColumn(e.target.value)}
        />

        <BaseBtn type={'submit'} label={'Edit'} onClick={handleSubmit} />
      </ColumnModalForm>

      <CloseBtn onClick={() => setOpenEditModal(prev => !prev)} />
    </ColumnModalContainer>
  );
};

export default ModalEditColumn;
