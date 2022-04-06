import React, {useState} from 'react';
import styles from './token-card.module.scss';
import userIcon from '../../assets/images/users.svg';
import arrowIcon from '../../assets/images/arrow.svg';
import {IToken} from "../../types/token";
import {useNavigate} from "react-router-dom";

interface ITokenCard {
    data: IToken
}

const TokenCard = ({data}: ITokenCard) => {
    const navigate = useNavigate();
    const [openCard, setOpenCard] = useState(false)

    let {
        id,
        logoURI,
        name,
        symbol,
        price,
        priceChange,
        volume,
        volumeChangePercentage,
        tvl,
        tvlChangePercentage,
        users, description
    } = data

    const handleNavigate = () => {
        navigate(`/tokenInfo/${id}`)
    }

    const handleOpen = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        setOpenCard(prevState => !prevState)
    }

    return (
        <div className={styles.token} onClick={handleNavigate}>
            <div className={styles.token_block}>
                <div className={styles.token_order}>#{id}</div>

                <div>
                    <div className={styles.token_logo}>
                        <img src={logoURI} alt=""/>
                    </div>
                </div>

                <div className={styles.token_name}>
                    <p>{name}</p>
                    <p>{symbol}</p>
                </div>

                <div className={styles.token_price}>
                    <p>{price}</p>
                    <p>
                        {priceChange.hours24 > 0
                            ? <span className={styles.token_priceUp}>+{priceChange.hours24}%</span>
                            : priceChange.hours24 < 0 ?
                                <span className={styles.token_priceDown}>{priceChange.hours24}%</span>
                                : <span className={styles.token_priceZero}>{priceChange.hours24}%</span>
                        }
                        .
                        {priceChange.days7 > 0
                            ? <span className={styles.token_priceUp}>+{priceChange.days7}%</span>
                            : priceChange.days7 < 0 ?
                                <span className={styles.token_priceDown}>{priceChange.days7}%</span>
                                : <span className={styles.token_priceZero}>{priceChange.days7}%</span>
                        }
                        .
                        {priceChange.days365 > 0
                            ? <span className={styles.token_priceUp}>+{priceChange.days365}%</span>
                            : priceChange.days365 < 0 ?
                                <span className={styles.token_priceDown}>{priceChange.days365}%</span>
                                : <span className={styles.token_priceZero}>{priceChange.days365}%</span>
                        }
                    </p>
                </div>

                <div className={styles.token_changes}>
                    <span>{volume} $</span>
                    <span>{volumeChangePercentage}%</span>
                </div>

                <div className={styles.token_changes}>
                    <span>{tvl} $</span>
                    <span>{tvlChangePercentage}%</span>
                </div>

                <div className={styles.token_users}>
                    <img src={userIcon} alt=""/>
                    <span>{users}</span>
                </div>

                <div
                    className={openCard ? `${styles.token_arrow} ${styles.token_open}` : `${styles.token_arrow}`}
                    onClick={handleOpen}
                >
                    <img src={arrowIcon} alt=""/>
                </div>
            </div>

            {openCard && (
                <div className={styles.token_description}>
                    {description}
                </div>
            )}
        </div>
    );
};

export default TokenCard;