import { BackDropStyle } from './BackDrop.styled';
export default function BackDrop({ hideModal, children }) {
  const clickBackdrop = event => {
    if (event.target === event.currentTarget) {
      hideModal();
    }
  };
  return <BackDropStyle onClick={clickBackdrop}>{children}</BackDropStyle>;
}
