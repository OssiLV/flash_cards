import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('Footer')}>
            <h1>About</h1>
            <h2>OssiLV</h2>
        </div>
    );
}

export default Footer;
