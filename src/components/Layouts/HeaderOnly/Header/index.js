import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './HeaderOnly.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark, faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('home')}>
                HOME
            </Link>

            <div className={cx('setting')}>
                <button className={cx('remove')}>
                    <FontAwesomeIcon className={cx('icon-remove')} icon={faMinus} />
                    Clear All
                </button>

                <button className={cx('add')}>
                    <FontAwesomeIcon className={cx('icon-add')} icon={faPlus} />
                    CARD
                </button>
            </div>
            <div className={cx('storage')}>
                <button className={cx('save')}>
                    <FontAwesomeIcon className={cx('icon-save')} icon={faFloppyDisk} />
                    SAVE
                </button>
                <button className={cx('download')}>
                    <FontAwesomeIcon className={cx('icon-download')} icon={faDownload} />
                    DOWNLOAD
                </button>
            </div>
        </div>
    );
}

export default Header;
