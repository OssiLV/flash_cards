import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Input.module.scss';
import Set from '..';
import InputCards from '~/components/InputCards';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Input() {
    return (
        <div className={cx('wrapper-input')}>
            <Set>
                <div className={cx('Input')}></div>
            </Set>
            <InputCards />
            <InputCards />
            <InputCards />
            <InputCards />
            <InputCards />
            <InputCards />
            <div className={cx('addcards')}>
                <FontAwesomeIcon className={cx('icon-plus')} icon={faPlus} />
                <Link to="/cards-added">ADD CARDS</Link>
            </div>
        </div>
    );
}

export default Input;
