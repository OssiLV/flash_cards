import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Footer from './Footer';
import Animation from '~/components/Animations';
import FlashCards from '~/components/FlashCards';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                {children}
                {/* <Animation/> */}
                <div className={cx('flashcard')}><FlashCards/></div>
            </div>
        </div>
    );
}

export default DefaultLayout;
