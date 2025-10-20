import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Destino from "./components/destino/Destino";

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
        <Destino key={destino.id} destino={destino}/>
      ))}
    </section>
  );
}
