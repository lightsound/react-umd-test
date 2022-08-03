import React, { FC } from "react";

import { MPLP } from "../shared/const";
import { usePersistForm } from "../shared/usePersistForm";

export const Confirm: FC = () => {
  const { handleSubmit, getValues } = usePersistForm();
  const { name, email } = getValues();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        const obj = { 商品ID: MPLP.id, ...data };
        alert(JSON.stringify(obj, null, 2));
      })}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div>name: {name}</div>
      <div>email: {email}</div>

      <button
        type="button"
        onClick={() => {
          if (!MPLP.formUrl) return;
          location.href = MPLP.formUrl;
        }}
      >
        戻る
      </button>
      <button type="submit">送信</button>
    </form>
  );
};
