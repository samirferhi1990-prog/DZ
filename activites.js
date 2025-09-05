import Navbar from "../components/Navbar";

export default function Activites() {
  return (
    <>
      <Navbar />
      <main style={{ textAlign: "center", padding: "2rem" }}>
        <h1 style={{ color: "#d32f2f" }}>Nos Activités 🇩🇿</h1>
        <p>Randonnées, excursions, visites culturelles et plages paradisiaques.</p>
        <img src="/activites.jpg" alt="Activités" style={{ width: "70%", borderRadius: "12px", marginTop: "1rem" }}/>
      </main>
    </>
  );
}
