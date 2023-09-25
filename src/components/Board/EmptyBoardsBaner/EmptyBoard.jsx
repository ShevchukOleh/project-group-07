import './EmptyBoardsBaner.css';

const EmptyBoardsBaner = () => {
  return (
    <div className="container">
      <img
        style={{ borderRadius: 8 }}
        src="https://tse4.mm.bing.net/th?id=OIP.QUM6uwS5P1N04jrce11ukQHaE6&pid=Api&P=0&h=180"
        alt=""
        loading="lazy"
      />
      <p className="text_container">
        Create a board
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
    </div>
  );
};
export default EmptyBoardsBaner;
