// import FormDialog from 'components/Modals/ModalBoard/ModalBoard';
import './EmptyBoardsBaner.css';
// import { useState } from 'react';

const EmptyBoardsBaner = () => {
  // const [show, setShow] = useState(false);
  return (
    <div className="container">
      <img
        style={{ borderRadius: 8 }}
        src="https://tse4.mm.bing.net/th?id=OIP.QUM6uwS5P1N04jrce11ukQHaE6&pid=Api&P=0&h=180"
        alt=""
        loading="lazy"
      />
      <p className="text_container">
        {/* <span className="modal-shrift" onClick={() => setShow(!show)}> */}
        Create a board
        {/* </span> */}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
      {/* <FormDialog isCreateOpenModal={show} setShow={setShow} /> */}
    </div>
  );
};
export default EmptyBoardsBaner;
