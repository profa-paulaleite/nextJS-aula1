import Image from "next/image";
import styles from "./destinos.module.css";

export default function DestinoPage({ params }) {
    const dadosDestino = {
        rio: {
            nome: 'Rio de Janeiro',
            descricao: 'Cidade famosa no Brasil, tem muchas praias bonitas.',
            caminhoImagem: '/imagens/rio.jpg'
        },
        sp: {
            nome: 'São Paulo',
            descricao: 'Maior cidade do Brasil.',
            caminhoImagem: '/imagens/sp.jpg'
        },
        colombia: {
            nome: 'Colombia',
            descricao: 'Shakira vem da Colombia.',
            caminhoImagem: '/imagens/colombia.jpg'
        },
        eua: {
            nome: 'Estados Unidos',
            descricao: 'País bem grande, bem rico.',
            caminhoImagem: '/imagens/eua.jpg'
        },
    };

    const destino = dadosDestino[params.id];

    if (!destino) {
        return <p> Destino não encontrado. </p>
    }

    return (
        <section className={styles.sectionMain}>
            <h2> {destino.nome} </h2>

            <Image src={destino.caminhoImagem} alt={destino.descricao} width={500} height={350} className={styles.imagem}/>

            <p className={styles.descricao}> {destino.descricao} </p>
        </section>
    )
}