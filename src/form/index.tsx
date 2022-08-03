import React from "react";
import { createRoot } from "react-dom/client";

import { Form } from "./Form";

const container = document.getElementById("form");
if (container) {
  createRoot(container).render(<Form />);
}
