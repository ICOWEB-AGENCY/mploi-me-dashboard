import React, { useState } from "react";

import { MainNav } from "../../components";

export const Layout = function ({ children }) {
  return (
    <div className="flex" style={{ width: "100vw" }}>
      <MainNav />
      {children}
    </div>
  );
};
