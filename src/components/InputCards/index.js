import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './InputCards.module.scss';

const cx = classNames.bind(styles);

function InputCards() {
    return (
        <div className={cx('input-cards')}>
            <div className={cx('trash')}>
                <button className={cx('trash-btn')}>
                    <FontAwesomeIcon className={cx('icon-trash')} icon={faTrash} />
                </button>
            </div>

            <div className={cx('input-term')}>
                <input placeholder="Term" />
                <input />
            </div>
        </div>
    );
}

export default InputCards;
