import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ textAlign: "center", padding: "2rem", fontFamily: "sans-serif" }}>
        <h1 style={{ color: "#006233" }}>Bienvenue sur DZ-Trips 🇩🇿</h1>
        <p>Voyagez autrement en Algérie avec nos offres exclusives ✨</p>
        <img src="/algerie.jpg" alt="Algérie" style={{ width: "70%", borderRadius: "12px", marginTop: "1rem" }}/>
      </main>
    </>
  );
}
