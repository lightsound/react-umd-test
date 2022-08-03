import React, { FC } from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { MPLP, STORAGE_KEY } from "../const";

export const Form: FC = () => {
  const { register, handleSubmit, watch, setValue, formState } = useForm({
    defaultValues: { foo: "", bar: "" },
  });
  useFormPersist(STORAGE_KEY, { watch, setValue });

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
        foo:
        <input {...register("foo")} />
      </label>

      <label>
        bar (required):
        <input {...register("bar", { required: "必須！" })} />
        {formState.errors.bar && <span>{formState.errors.bar.message}</span>}
      </label>

      <button type="submit">確認画面へ</button>
    </form>
  );
};
