import styled from 'styled-components';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

const SearchBox = styled.input`
    font-size: x-large;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 850px;
    height: 70px;
    background-color: lightpink;
    margin-top: 70px;
    border: none;
    border-radius: 30px;
    padding-left: 20px;
    outline: none;
`;

export const Search = () => {
    const [text, setText] = useState('');

    // const debouncedQuery = UseDebounce(text, 1000);

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setText('');
        }
    };

    return (
        <>
            <SearchBox value={text} onChange={onChangeText} onKeyDown={handleEnter}></SearchBox>
        </>
    );
};
