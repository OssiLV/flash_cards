import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateCards_Page from '~/Pages/CreateCards_Page';

const cx = classNames.bind(styles);

function Button() {
    return (
        <div>
            <Link className={cx('create')} to="/create-cards">
                Creat Cards
            </Link>
        </div>
    );
}

export default Button;
