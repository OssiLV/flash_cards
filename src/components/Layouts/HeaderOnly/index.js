import styles from './HeaderOnly.module.scss';
import Header from './Header';
import Input from '~/components/Set/Input';
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                {children}
                <Input/>
            </div>
        </div>
    );
}

export default HeaderOnly;
