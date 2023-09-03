import {
  ColumnModalContainer,
  ColumnModalTitle,
  ColumnModalForm,
  ColumnModalFormInput,
  ColumnModalFormBtn,
  IconPlusWrapper,
  IconPlus,
} from '../UI/ModalCulumn.styled';

const AddColumn = () => {
  const [addColumn, setAddColumn] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(addColumn);
  };

//   IconCrossWrapper,
// } from '../UI/ModalCulumn.styled';
// import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
// const ModalAddColumn = ({
//   handleSubmit,
//   setOpenAddModal,
//   setAddColumn,
//   addColumn,
// }) => {


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
        <AiOutlineClose size={18} color="#161616" />
      </IconCrossWrapper>
    </ColumnModalContainer>
  );
};

export default AddColumn;
// export default ModalAddColumn;
