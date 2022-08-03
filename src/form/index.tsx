import React from "react";
import { createRoot } from "react-dom/client";

import { Form } from "./Form";

const container = document.getElementById("form") ?? document.body;
createRoot(container).render(<Form />);
