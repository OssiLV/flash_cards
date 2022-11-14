import classNames from 'classnames/bind';
import styles from './Animation.module.scss';
import Home_Page from '~/Pages/Home_Page';

const cx = classNames.bind(styles);

function Animation() {
    return (
        <div className={cx('content')}>
            <a href="#">Animation</a>
        </div>
    );
}

export default Animation;
