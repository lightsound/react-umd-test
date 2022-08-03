import React, { FC } from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { MPLP, STORAGE_KEY } from "../const";

export const Confirm: FC = () => {
  const { handleSubmit, watch, setValue, getValues } = useForm({
    defaultValues: {
      foo: "",
      bar: "",
    },
  });

  useFormPersist(STORAGE_KEY, {
    watch,
    setValue,
  });

  const { foo, bar } = getValues();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div>foo: {foo}</div>
      <div>bar: {bar}</div>

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
