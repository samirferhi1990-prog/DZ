import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      background: "#006233",
      color: "white",
      padding: "1rem",
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      fontWeight: "bold"
    }}>
      <Link href="/">Accueil</Link>
      <Link href="/activites">Activités</Link>
      <Link href="/emirates">Exclusivité Emirates</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
