import Head from "next/head";
import Image from "next/image";
import { InputGroup } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        minHeight: "100vh",
      }}
    >
      <section style={{ paddingLeft: 110, paddingRight: 224.3 }}>
        <div style={{ marginTop: 196 }} className="flex align-center">
          <Image
            src="/logo.svg"
            width={32}
            height={32}
            alt="Image of company logo"
          />
          <h1
            style={{
              color: "rgba(9, 29, 110, 1)",
              fontSize: 24,
              marginLeft: 7,
            }}
          >
            Mploi-me
          </h1>
        </div>
        <div style={{ marginTop: 125 }}>
          <InputGroup />
          <InputGroup />
          <div className="flex align-center justify-between">
            <p style={{ color: "rgba(107, 119, 168, 1)" }}>
              Request new password
            </p>
            <button
              style={{
                fontSize: 16,
                backgroundColor: "rgba(9, 29, 110, 1)",
                padding: "20px 70px",
                borderRadius: 8,
                color: "#fff",
                outline: "rgba(9, 29, 110, 1)",
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </section>
      <section
        className="auth-side"
        style={{
          height: "100%",
          width: "100%",

          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            height: "100%",
            alignItems: "center",
          }}
        >
          <img
            src="images/ff.svg"
            alt="Auth image"
            style={{
              overflow: "hidden",
              objectFit: "cover",
            }}
          />
        </div>
      </section>
    </main>
  );
}
