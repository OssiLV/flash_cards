import classNames from 'classnames/bind';

import styles from './HeaderOnly2.module.scss';
import Header from './Header2';
import Card from '~/components/Card';

const cx = classNames.bind(styles)

function HeaderOnly2({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                {children}
                <div className={cx('wrapper')}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default HeaderOnly2;
