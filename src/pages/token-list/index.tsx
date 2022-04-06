import React, {useEffect} from 'react';
import {tokens} from "../../tokens";
import TokenCard from "../../components/token-card";
import TokenFilter from "../../components/token-filter";
import {useAppDispatch, useAppSelector} from "../../store";
import {tokenActions} from "../../store/slices/tokenSlice";
import {IToken} from "../../types/token";

const TokenList = () => {
    const dispatch = useAppDispatch()
    const {tokens: data, filterCategory} = useAppSelector(store => store.tokens)

    useEffect(() => {
        (async () => {
            try {
                // fetch real data
                dispatch(tokenActions.loadToken(tokens))

            } catch (err: unknown) {
                (err instanceof Error) && console.log(err.message)
            }
        })()
    }, [])


    const filterList = (arr: IToken[], filter: string) => {
        if (filter === 'all') return arr;
        return arr.filter(item => item.categories.includes(filter))
    }

    return (
        <>
            <div className='title'>
                <p className='title_desc'>Токены Everscale</p>
                <TokenFilter/>
            </div>

            {filterList(data, filterCategory).map((item) => (
                <TokenCard key={item.id} data={item}/>
            ))}
        </>
    );
};

export default TokenList;