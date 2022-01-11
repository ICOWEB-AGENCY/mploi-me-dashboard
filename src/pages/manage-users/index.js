import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { InputGroup } from "../../components";

export default function Dashboard() {
  const [userTab, setUserTab] = useState(0);
  return (
    <main style={{ width: "100%", backgroundColor: "#e5e5e5" }}>
      <header
        style={{ padding: 32, backgroundColor: "#fff", paddingRight: 60 }}
      >
        <div style={{ marginBottom: 47, maxWidth: 490 }}>
          <InputGroup bg="rgba(251, 251, 253, 1)" placeholder="Search" />
        </div>

        <ul className="flex justify-between header-container align-center">
          {[
            { title: "Employers", img: "employers.svg" },
            { title: "Workmen" },
            { title: "Transactions" },
            {
              title: "Queries",
            },
          ].map((item, idx) => (
            <li key={idx}>
              <div className="flex align-center">
                <div>
                  <Image
                    src="/images/transactions.svg"
                    width={48}
                    height={48}
                    alt="Image of company logo"
                  />
                </div>
                <div style={{ marginLeft: 11 }}>
                  <p style={{ fontSize: 24, color: "rgba(40, 40, 40, 1)" }}>
                    340
                  </p>
                  <p style={{ fontSize: 16, color: "rgba(128, 128, 128, 1)" }}>
                    {item.title}
                  </p>
                </div>
              </div>
              <div style={{ marginTop: 16 }}>
                <p>Since last week</p>
              </div>
            </li>
          ))}
          <li>
            <select style={{ padding: "10px 16px" }}>
              <option>Last week</option>
            </select>
          </li>
        </ul>
      </header>

      <div style={{ margin: 32 }}>
        <div style={{ backgroundColor: "#fff" }}>
          <nav>
            <ul className="flex" style={{ paddingBottom: 20 }}>
              {[{ name: "Employers" }, { name: "Workmen" }].map(
                (menuItem, idx) => (
                  <li
                    onClick={() => setUserTab(idx)}
                    style={{
                      padding: "16px 40px",
                      flex: 1,
                      borderBottom: `2px solid ${
                        idx === userTab
                          ? "rgba(9, 29, 110, 1)"
                          : "rgba(206, 210, 226, 1)"
                      }`,
                    }}
                    className="pointer"
                  >
                    <p
                      style={{
                        color:
                          idx === userTab
                            ? "rgba(9, 29, 110, 1)"
                            : "rgba(157, 165, 197, 1)",
                      }}
                    >
                      {menuItem.name}
                    </p>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tr>
            <th style={{ ...styles.th, paddingLeft: 47 }}>Name</th>
            <th style={styles.th}>Email Address</th>
            <th style={styles.th}>Date Joined</th>
            <th style={styles.th}>No. of Jobs</th>
            <th style={styles.th}>Vouchers</th>
            <th style={styles.th}> More</th>
          </tr>
          <tbody style={{ backgroundColor: "#fff" }}>
            {[1, 2, 3, 4, 3, 4, 2].map((employer) => (
              <tr>
                <td style={{ ...styles.td, paddingLeft: 47 }}>Brightmac Mba</td>
                <td style={styles.td}>brightmac@homail.com</td>
                <td style={styles.td}>23, Jun 2013</td>
                <td style={styles.td}>1,232</td>
                <td style={styles.td}>2323</td>
                <td style={styles.td}>
                  <button
                    style={{
                      backgroundColor: "rgba(38, 47, 86, 1)",
                      padding: "4px 18.5px",
                      borderRadius: 4,
                    }}
                  >
                    <Image
                      src="/images/arrow-right.svg"
                      width={10.5}
                      height={7}
                      alt="Image of company logo"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

const styles = {
  th: {
    textAlign: "left",
    padding: "11px 0",
  },
  td: {
    padding: "8px 0",
    color: "rgba(58, 74, 139, 1)",
    backgroundColor: "#fff",
  },
};
