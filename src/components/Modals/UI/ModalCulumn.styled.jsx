const { default: styled } = require('styled-components');

const ColumnModalContainer = styled.div`
  height: 221px;
  background-color: #151515;
  width: 335px;
  padding: 24px;
  position: relative;
  border-radius: 5px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  @media screen and (min-width: 480px) {
    width: 350px;
  }
`;
const ColumnModalTitle = styled.h3`
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  margin-top: 0;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  margin-bottom: 24px;
`;
const ColumnModalForm = styled.form`
  max-width: 302px;
  border-radius: 8px;
`;
const ColumnModalFormInput = styled.input`
  border-radius: 8px;
  border: 1px solid #bedbb0;
  opacity: 0.4;
  width: 100%;
  color: #fff;
  padding: 14px 0 14px 18px;
  background-color: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  margin-bottom: 24px;
`;
const ColumnModalFormBtn = styled.button`
  display: flex;
  padding: 10px 0px 10px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 5px;
  background: #bedbb0;
  width: 100%;
  cursor: pointer;
`;
const IconPlusWrapper = styled.div`
  width: 28px;
  height: 28px;
  background-color: #161616;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconCrossWrapper = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
`;
export {
  ColumnModalContainer,
  ColumnModalTitle,
  ColumnModalForm,
  ColumnModalFormInput,
  ColumnModalFormBtn,
  IconPlusWrapper,
  IconCrossWrapper,
};
