import styled from 'styled-components';

export const BoardCardStyle = styled.div`
  position: relative;
  margin-top: 8px;

  width: 334px;
  height: 154px;
  padding: 14px 20px 14px 24px;
  border-radius: 8px;
  background: rgb(143, 161, 208);
  background: linear-gradient(
    90deg,
    rgba(143, 161, 208, 1) 4px,
    rgba(255, 255, 255, 1) 4px
  );
  & p,
  h3 {
    margin: 0;
    padding: 0;
  }
  & .title {
    margin-bottom: 8px;
    color: #161616;
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.28px;
  }
  & .description {
    margin-bottom: 14px;
    color: rgba(22, 22, 22, 0.7);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.24px;
  }
  & hr {
    margin-bottom: 14px;
  }
  & .clip {
    -ms-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    -ms-line-clamp: 2;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    display: -webkit-box;
    display: box;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    box-orient: vertical;
  }
  & .priorityTitle {
    margin-bottom: 4px;
    color: rgba(22, 22, 22, 0.5);
    font-size: 8px;
    line-height: normal;
    letter-spacing: -0.16px;
  }
  & .priorityText {
    color: #161616;
    font-size: 10px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.2px;
  }
  & .priorityColor {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #e09cb5;
  }
  & .containerCardIcon {
    position: absolute;
    bottom: 14px;
    right: 14px;
    display: flex;
    gap: 8px;
  }
`;
