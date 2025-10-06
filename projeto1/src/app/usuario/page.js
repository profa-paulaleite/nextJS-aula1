import styles from "./usuario.module.css";

export default function Usuario() {
    const usuario = { nome: "Paula", email: "paula.leite@mackenzie.br", cidade: "São Paulo"};

    return (
        <section>
            <h1 className={styles.nomeUsuario}>Usuario: {usuario.nome} </h1>
            <p> Email: {usuario.email} </p>
            <p> Cidade: {usuario.cidade} </p>
        </section>
    );
}