import styled from 'styled-components';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { UseDebounce } from '@hooks/useDebounce.tsx';
import { UseSafeInfoSearch } from '@apis/safeInfo';

export const SafeInfoSearch = () => {
    const [text, setText] = useState('');

    const debouncedQuery = UseDebounce(text, 500);

    const { data } = UseSafeInfoSearch(debouncedQuery, text);

    // const safeInfoListData = UseSafeInfoListSearch(debouncedQuery, text, text)?.data?.safeInfoElement;

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
            <ValueBox>
                <ValueContainer>
                    {data && <TitleText>제목 : {data?.title}</TitleText>}
                    {data && <CountryText>국가 : {data?.name}</CountryText>}
                    <ContentText>{data?.content}</ContentText>
                </ValueContainer>
                {/*<ul>*/}
                {/*    {safeInfoListData?.map((s) => {*/}
                {/*        return (*/}
                {/*            <MyContainer>*/}
                {/*                <TitleText>제목 : {s?.title}</TitleText>*/}
                {/*                <CountryText>국가 : {s?.name}</CountryText>*/}
                {/*                <ContentText>{s?.content}</ContentText>*/}
                {/*            </MyContainer>*/}
                {/*        );*/}
                {/*    })}*/}
                {/*</ul>*/}
            </ValueBox>
        </>
    );
};

const SearchBox = styled.input`
    font-size: x-large;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 850px;
    height: 70px;
    background-color: lightskyblue;
    margin-top: 70px;
    border: none;
    border-radius: 30px;
    padding-left: 20px;
    outline: none;
`;

const ValueBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const ValueContainer = styled.ul`
    display: flex;
    flex-direction: column;
`;

// const MyContainer = styled.li`
//     margin-top: 20px;
// `;

const TitleText = styled.li`
    display: flex;
    justify-content: center;
    font-size: 28px;
`;

const CountryText = styled.li`
    display: flex;
    justify-content: center;
    font-size: 25px;
`;

const ContentText = styled.li`
    width: 600px;
    display: flex;
    justify-content: center;
    font-size: 20px;
`;
