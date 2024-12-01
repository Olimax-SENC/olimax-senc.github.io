import "@mantine/core/styles.css";
import "./main.css";

import { MantineProvider } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Base from "./routes/Base";
import Eula from "./routes/Eula";
import Home from "./routes/Home";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import Security from "./routes/Security";
import UCPCDocumentation from "./routes/ucpc/Documentation";

const root = document.getElementById("root");
if (!root) throw new Error("No root element found");

createRoot(root).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Home />} />
            <Route path="eula" element={<Eula />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="security" element={<Security />} />
            <Route path="ucpc">
              <Route path="docs" element={<UCPCDocumentation />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
);
