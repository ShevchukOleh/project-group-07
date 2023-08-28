import { BackDropStyle } from './BackDrop.styled';
export default function BackDrop({ hideModal }) {
  const clickBackdrop = event => {
    if (event.target === event.currentTarget) {
      hideModal();
    }
  };
  return <BackDropStyle onClick={clickBackdrop}></BackDropStyle>;
}
