import styled from '@emotion/styled';

export const AddCard = styled.div`
  width: 335px;
  height: 522px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }

  & .titleInput {
    display: flex;
    width: 287px;
    padding: 14px 241px 14px 18px;
    align-items: center;

    @media screen and (min-width: 768px) {
      width: 302px;
      padding: 14px 256px 14px 18px;
    }

    border-radius: 8px;
    border: 1px solid #bedbb0;
    opacity: 0.4;
    background: #1f1f1f;
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  }

  & .descriptionInput {
    display: flex;
    width: 287px;
    height: 154px;
    padding: 14px 192px 122px 18px;
    align-items: center;
    flex-shrink: 0;

    @media screen and (min-width: 768px) {
      width: 302px;
      padding: 14px 207px 122px 18px;
    }

    border-radius: 8px;
    border: 1px solid #bedbb0;
    opacity: 0.4;
    background: #1f1f1f;
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  }

  & .labelColor {
    color: rgba(255, 255, 255, 0.5);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.24px;
  }

  & .colorFilter {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  & .deadline {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  & .addBtn {
    display: flex;
    padding: 10px 0px 11px 0px;
    width: 287px;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 768px) {
      width: 302px;
    }
  }
`;
