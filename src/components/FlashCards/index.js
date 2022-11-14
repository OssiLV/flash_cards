import classNames from 'classnames/bind';
import styles from './FlashCards.module.scss';

const cx = classNames.bind(styles);

function FlashCards() {
    return (
        <div className={cx('flip-card')}>
            <div className={cx('flip-card-inner')}>
                <div className={cx('flip-card-front')}>
                    <p>How are u today ?</p> 
                </div>
                <div className={cx('flip-card-back')}>
                    <p>Hôm nay bạn thế nào?</p>
                </div>
            </div>
        </div>
    );
}

export default FlashCards;
