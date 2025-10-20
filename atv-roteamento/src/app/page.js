import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const destinos = [
    {id: 'rio', nome: 'Rio de Janeiro', caminhoImagem: '/imagens/rio.jpg'},
    {id: 'sp', nome: 'São Paulo', caminhoImagem: '/imagens/sp.jpg'},
    {id: 'colombia', nome: 'Colombia', caminhoImagem: '/imagens/colombia.jpg'},
    {id: 'eua', nome: 'Estados Unidos', caminhoImagem: '/imagens/eua.jpg'}
  ];

  return (
    <section className={styles.sectionMain}>
      {destinos.map(destino => (
        <Link key={destino.id} href={`/destinos/${destino.id}`} className={styles.link}>
          <Image alt={destino.nome} src={destino.caminhoImagem} className={styles.imagemDestino} width={150} height={150}/>
          <p> {destino.nome} </p>
        </Link>
      ))}
    </section>
  );
}
