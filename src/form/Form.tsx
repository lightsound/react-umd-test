import React, { FC } from "react";

import { MPLP } from "../shared/const";
import { usePersistForm } from "../shared/usePersistForm";

export const Form: FC = () => {
  const { register, handleSubmit, formState } = usePersistForm();

  return (
    <form
      onSubmit={handleSubmit(() => {
        if (!MPLP.confirmUrl) return;
        location.href = MPLP.confirmUrl;
      })}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <label>
        name:
        <input {...register("name")} />
      </label>

      <label>
        email (required):
        <input {...register("email", { required: "必須" })} />
        {formState.errors.email && (
          <span>{formState.errors.email.message}</span>
        )}
      </label>

      <button type="submit">確認画面へ</button>
    </form>
  );
};
