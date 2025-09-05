import Navbar from "../components/Navbar";

export default function Emirates() {
  return (
    <>
      <Navbar />
      <main style={{ textAlign: "center", padding: "2rem" }}>
        <h1 style={{ color: "#006233" }}>Exclusivité Emirates ✈️</h1>
        <p>
          Profitez de notre partenariat exclusif avec Emirates pour vos vols
          vers l’Algérie et le monde entier.
        </p>
        <img src="/emirates.jpg" alt="Vol Emirates" style={{ width: "70%", borderRadius: "12px", marginTop: "1rem" }}/>
      </main>
    </>
  );
}
