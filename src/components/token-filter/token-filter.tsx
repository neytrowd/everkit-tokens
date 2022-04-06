import React from 'react';
import styles from './token-filter.module.scss';
import {useAppDispatch, useAppSelector} from "../../store";
import {categories} from "../../tokens";
import {tokenActions} from "../../store/slices/tokenSlice";

const TokenFilter = () => {
    const dispatch = useAppDispatch()
    const filterCategory = useAppSelector(store => store.tokens.filterCategory)

    const categoryHandler = (type: string) => {
        dispatch(tokenActions.filter(type))
    }

    return (
        <div>
            <div className={styles.filter}>
                {categories.map(item => (
                    <button
                        key={item.id}
                        onClick={() => categoryHandler(item.id)}
                        className={
                            item.id === filterCategory ? `${styles.filter_btn} ${styles.active}` : `${styles.filter_btn}`
                        }
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TokenFilter;