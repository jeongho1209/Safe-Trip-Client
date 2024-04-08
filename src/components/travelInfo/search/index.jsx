import styled from 'styled-components';
import { useState } from 'react';

const SearchBox = styled.input`
    font-size: x-large;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 850px;
    height: 70px;
    background-color: white;
    margin-top: 70px;
    border: none;
    border-radius: 30px;
    padding-left: 20px;
    outline: none;
`;

const Search = () => {
    const [text, setText] = useState('');

    const onChangeText = (e) => {
        setText(e.target.value);
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            setText('');
        }
    };

    return <SearchBox value={text} onChange={onChangeText} onKeyDown={handleEnter}></SearchBox>;
};

export default Search;
