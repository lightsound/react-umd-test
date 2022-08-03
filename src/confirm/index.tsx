import React from "react";
import { createRoot } from "react-dom/client";

import { Confirm } from "./Confirm";

const container = document.getElementById("confirm") ?? document.body;
createRoot(container).render(<Confirm />);
