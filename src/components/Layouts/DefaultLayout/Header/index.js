import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Button from '~/components/Buttons';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('Header')}>
            <h1>Flash Cards</h1>
            <Button />
        </div>
    );
}

export default Header;
