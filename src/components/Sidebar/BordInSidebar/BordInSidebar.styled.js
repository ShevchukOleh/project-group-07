import styled from '@emotion/styled';

const EditIcon = styled.div`
  margin-right: 8px;
`;

const ImgIcon = styled.img``;

const ImgBox = styled.div`
  margin-right: 16px;

  svg {
    path {
      transition: all 0.3s ease-out;

      stroke: ${props => {
        if (props.$currentTheme === 'Dark') return '#FFFFFF';

        return '#161616';
      }};

      stroke-opacity: ${props => (props.$isSelected ? 1 : 0.5)};
    }
  }
`;

export { EditIcon, ImgIcon, ImgBox };
