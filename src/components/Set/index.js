import classNames from 'classnames/bind';
import styles from './Set.module.scss';
import Input from './Input';
const cx = classNames.bind(styles);

function Set({ children }) {
    return (
        <div className={cx('set')}>
            {children}
            <div className={cx('input-set')}>
                <input placeholder="Name" />
                <input placeholder="Description" />
                <div className={cx('input-option')}>
                    <input type="checkbox" />
                    <p>Multiple Answers</p>
                </div>
            </div>
        </div>
    );
}

export default Set;
