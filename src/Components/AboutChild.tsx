const AboutChild = () => {
  return (
    <>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#333",
          lineHeight: 1.6,
        }}
      >
        <section
          style={{
            padding: "2rem",
            textAlign: "center",
            backgroundColor: "#f8f8f8",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            <strong>Welcome to Bel Hajj</strong>
          </h1>
          <p
            style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}
          >
            At <strong>Bel Hajj</strong>, we are passionate about creating
            memorable dining experiences for our guests. Our culinary journey is
            inspired by rich traditions and a commitment to serving only the
            finest flavors.
          </p>
        </section>

        <section style={{ padding: "2rem" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <div style={{ maxWidth: "400px", textAlign: "center" }}>
              <img
                src="src/assets/brochette.webp"
                alt="Our Story"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
              <h2 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
                Our Story
              </h2>
              <p>
                Founded with love and dedication, Bel Hajj was born to celebrate
                the joy of authentic cuisine. Every dish tells a story, blending
                tradition and creativity to create flavors that linger in your
                memory.
              </p>
            </div>

            <div style={{ maxWidth: "400px", textAlign: "center" }}>
              <img
                src="src/assets/sbagette.jpeg"
                alt="Our Values"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
              <h2 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
                Our Values
              </h2>
              <p>
                We believe in quality, community, and sustainability. Our
                ingredients are locally sourced, and our team is dedicated to
                providing the best service for every guest.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: "2rem", backgroundColor: "#f8f8f8" }}>
          <h2
            style={{
              fontSize: "2rem",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            <strong>Why Choose Bel Hajj?</strong>
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              maxWidth: "800px",
              margin: "0 auto",
              textAlign: "left",
            }}
          >
            <li style={{ marginBottom: "1rem" }}>
              🍴 <strong>Authentic Cuisine:</strong> Experience flavors that
              celebrate heritage and innovation.
            </li>
            <li style={{ marginBottom: "1rem" }}>
              🌿 <strong>Fresh Ingredients:</strong> We prioritize quality and
              freshness in every dish we serve.
            </li>
            <li style={{ marginBottom: "1rem" }}>
              🤝 <strong>Community Focus: </strong> Supporting local farmers and
              building strong relationships.
            </li>
          </ul>
        </section>

        <section style={{ padding: "2rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            <strong>Visit Us</strong>
          </h2>
          <p>
            Located in the heart of your city, Bel Hajj invites you to explore
            our carefully curated menu in a warm and welcoming atmosphere.
          </p>
          <p>
            <strong>Address:</strong> Hassan II Street
          </p>
          <p>
            <strong>Contact:</strong> +212 456 7890 | info@belhajj.com
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutChild;
