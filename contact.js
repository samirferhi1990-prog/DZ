import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main style={{ textAlign: "center", padding: "2rem" }}>
        <h1 style={{ color: "#d32f2f" }}>Contactez-nous 📞</h1>
        <p>Pour toute réservation ou information :</p>
        <p>
          WhatsApp : <a href="https://wa.me/+213770000000" style={{ color: "green", fontWeight: "bold" }}>+213 770 00 00 00</a>
        </p>
        <p>Email : contact@dz-trips.com</p>
      </main>
    </>
  );
}
