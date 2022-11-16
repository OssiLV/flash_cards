import classNames from 'classnames/bind';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card() {
    return (
        <div className={cx('card-wrapper')}>
            <h4>Hello</h4>
            <p>Xin Chào</p>
        </div>
    );
}

export default Card;
