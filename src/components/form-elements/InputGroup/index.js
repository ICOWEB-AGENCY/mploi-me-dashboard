import React from "react";

export const InputGroup = function ({ bg = "transparent", ...rest }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <input
        placeholder="Your work email address"
        {...rest}
        style={{
          width: "100%",
          padding: "20px 40px",
          border: "1px solid rgba(206, 210, 226, 1)",
          borderRadius: 8,
          fontSize: 16,
          color: "rgba(157, 165, 197, 1)",
          backgroundColor: bg,
        }}
        type="email"
      />
    </div>
  );
};
