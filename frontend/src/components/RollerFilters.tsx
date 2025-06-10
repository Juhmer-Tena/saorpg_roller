"use client";

import type { FilterParameters } from "@/lib/roll";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useRollContext } from "./RollContext";
import { startTransition } from "react";

export function RollIDFilter() {
  const { setFetchParamsAction } = useRollContext();

  const { register, handleSubmit } = useForm<{ id: string }>();

  const onSubmit: SubmitHandler<{ id: string }> = ({ id }) => {
    startTransition(() => {
      setFetchParamsAction({
        type: "byId",
        id,
      });
    });
  };

  return (
    <form className="gap-1.5 p-1" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">
          <label htmlFor="field_lookup_id">Search by Roll ID#</label>
        </legend>
        <input
          id="field_lookup_id"
          type="text"
          className="input"
          placeholder="Roll ID#"
          {...register("id")}
        />
        <input
          id="btn_lookup_id"
          type="submit"
          className="btn bg-primary border-primary btn-sm w-fit text-white"
          value="Search by ID!"
        />
      </fieldset>
    </form>
  );
}

export function RollCharacterFilter() {
  const { setFetchParamsAction } = useRollContext();

  const { register, handleSubmit } = useForm<FilterParameters>();

  const onSubmit: SubmitHandler<FilterParameters> = async (params) => {
    startTransition(() => {
      setFetchParamsAction({
        type: "filtered",
        params,
      });
    });
  };

  return (
    <div className="bg-base-100 collapse-arrow collapse">
      <input type="checkbox" />
      <div className="collapse-title text-base-content/35 text-ssm/8 pl-2 font-semibold">
        Search by Name.
      </div>
      <form
        className="collapse-content grid grid-cols-1 gap-1.5 pl-2 text-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          id="field_lookup_name"
          type="text"
          className="input"
          placeholder="Name"
          {...register("character")}
        />
        <input
          id="btn_lookup_name"
          type="submit"
          className="btn bg-primary border-primary btn-sm w-fit text-white"
          value="Search!"
        />
      </form>
    </div>
  );
}

export function RollPostFilter() {
  const { setFetchParamsAction } = useRollContext();

  const { register, handleSubmit } = useForm<FilterParameters>();

  const onSubmit: SubmitHandler<FilterParameters> = (params) => {
    startTransition(() => {
      setFetchParamsAction({
        type: "filtered",
        params,
      });
    });
  };

  return (
    <div className="bg-base-100 collapse-arrow collapse">
      <input type="checkbox" />
      <div className="collapse-title text-base-content/35 text-ssm/8 pl-2 font-semibold">
        Search by Post Link.
      </div>
      <form
        className="collapse-content grid grid-cols-1 gap-1.5 pl-2 text-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          id="field_lookup_url"
          type="text"
          className="input"
          placeholder="Post Link"
          {...register("post")}
        />
        <input
          id="btn_lookup_url"
          type="submit"
          className="btn bg-primary border-primary btn-sm w-fit text-white"
          value="Search by Post Link!"
        />
      </form>
    </div>
  );
}
