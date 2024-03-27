import styled from 'styled-components';
import png from '../../../assets/image.png';

export const Image = styled.img`
    width: 100vw;
    height: 100vh;
`;

export const MainImage = () => {
    return <Image src={png}></Image>;
};
