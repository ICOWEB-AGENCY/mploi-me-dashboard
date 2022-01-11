import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { InputGroup } from "../../components";

export const MainNav = function () {
  const [mainTab, setMainTab] = useState("dashboard");
  console.log(mainTab);
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(109, 20, 222, 1),rgba(9, 29, 110, 1))",
        width: "fit-content",
        height: "100vh",
        minWidth: 260,
      }}
    >
      <div
        style={{
          padding: "36px 22px",
        }}
        className="flex align-center"
      >
        <Image
          src="/images/logo-without.svg"
          width={32}
          height={32}
          alt="Image of company logo"
        />
        <h1
          style={{
            color: "#fff",
            fontSize: 24,
            marginLeft: 7,
          }}
        >
          Mploi-me
        </h1>
      </div>

      <div
        style={{
          margin: "0px 22px",
          padding: "40px 0",
          borderTop: "1px solid rgba(255, 255, 255, 0.4)",
        }}
      >
        <div
          style={{
            padding: "12px 16px",
            borderRadius: 8,
            backgroundColor: "rgba(255, 255, 255, 0.26)",
          }}
          className="flex align-center"
        >
          <div>
            <Image
              src="/images/avatar.svg"
              width={40}
              height={40}
              alt="Image of company logo"
            />
          </div>
          <div style={{ marginLeft: 16 }}>
            <p style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
              Admin
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              Management
            </p>
          </div>
        </div>
      </div>
      <section style={{ marginTop: 51 }}>
        <nav>
          <ul>
            {[
              {
                name: "Dashboard",
                inActiveImage: "dashboard-inactive.svg",
                link: "dashboard",
              },
              {
                name: "Manage Users",
                activImage: "users-active.svg",
                inActiveImage: "users-inactive.svg",
                link: "manage-users",
              },
              {
                name: "Chat",
                inActiveImage: "chat-inactive.svg",
                link: "chat",
              },
            ].map((menuItem, idx) => (
              <li onClick={() => setMainTab(menuItem.link)} key={idx}>
                <Link href={`/${menuItem.link}`}>
                  <a
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: 18,
                      padding: "15px 16px",
                    }}
                    className="flex align-center"
                  >
                    <Image
                      src={`/images/${menuItem.inActiveImage}`}
                      height={20}
                      width={20}
                    />
                    <p
                      style={{
                        color:
                          mainTab === menuItem.link
                            ? "#fff"
                            : "rgba(255,255,255,0.4)",
                        fontSize: 18,
                        marginLeft: 18,
                      }}
                    >
                      {menuItem.name}
                    </p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <h3
            style={{
              marginBottom: 10,
              fontSize: 14,
              color: "rgba(255,255,255,0.4)",
              marginTop: 20,
              marginLeft: 16,
              fontWeight: "600",
            }}
          >
            OTHERS
          </h3>
          <ul>
            {[{ name: "Query" }, { name: "Settings" }].map((menuItem, idx) => (
              <li key={idx}>
                <Link href="/">
                  <a
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: 18,
                      padding: "15px 16px",
                      display: "block",
                    }}
                  >
                    {menuItem.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <div
        style={{
          padding: "40px 16px",
          borderRadius: 8,
        }}
        className="flex align-center"
      >
        <div>
          <Image
            src="/images/avatar.svg"
            width={40}
            height={40}
            alt="Image of company logo"
          />
        </div>
        <div style={{ marginLeft: 16 }}>
          <p style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
            Bright Mba
          </p>
        </div>
      </div>
    </section>
  );
};
