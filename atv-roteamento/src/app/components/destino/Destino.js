import Link from "next/link";
import Image from "next/image";
import styles from "./destino.module.css";

const Destino = ({ destino }) => {
    return (
        <Link key={destino.id} href={`/destinos/${destino.id}`} className={styles.link}>
          <Image alt={destino.nome} src={destino.caminhoImagem} className={styles.imagemDestino} width={150} height={150}/>
          <p> {destino.nome} </p>
        </Link>
    );
}

export default Destino;