import styled from 'styled-components';
import png from '../../../assets/image.png';

const Image = styled.img`
    position: absolute;
    z-index: -100;
`;

export const MainImage = () => {
    return <Image src={png}></Image>;
};
