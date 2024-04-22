import { Header } from "../../components/header/Header";
import { GlobalValues } from "../../global/GlobalValues";

const UserInfoPage: React.FC = () => {
    return (
        <>
            <Header />

            {GlobalValues.Username ? (
                <div>
                    <h1>Seja bem-vindo</h1>
                    <p>{GlobalValues.Username}</p>
                </div>
            ) : (
                <>
                    <p>Você não está autenticado!</p>
                </>)}
        </>
    )
}

export { UserInfoPage };