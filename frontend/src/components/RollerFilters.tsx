"use client";

import type { FetchByIdParams, FilterParameters } from "@/lib/roll";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useRollContext } from "./RollContext";

export function RollIDFilter() {
  const { setFetchParams } = useRollContext();

  const {
    register, handleSubmit
  } = useForm<Pick<FetchByIdParams, "id">>();

  const onSubmit: SubmitHandler<Pick<FetchByIdParams, "id">> = ({ id }) => setFetchParams({
    type: "byId",
    id,
  });

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
          className="btn bg-primary border-primary btn-sm text-white w-fit"
          value="Search by ID!"
        />
      </fieldset>
    </form>
  );
}

export function RollCharacterFilter() {
  const { setFetchParams } = useRollContext();

  const {
    register, handleSubmit
  } = useForm<FilterParameters>();

  const onSubmit: SubmitHandler<FilterParameters> = (params) => setFetchParams({
    type: "filtered",
    params,
  });

  return (
    <div className="bg-base-100 collapse-arrow collapse">
      <input type="checkbox" />
      <div className="collapse-title text-base-content/35 text-ssm/8 pl-2 font-semibold">
        Search by Name.
      </div>
      <form className="collapse-content pl-2 text-sm grid grid-cols-1 gap-1.5" onSubmit={handleSubmit(onSubmit)}>
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
          className="btn bg-primary border-primary btn-sm text-white w-fit"
          value="Search!"
        />
      </form>
    </div>
  );
}

export function RollPostFilter() {
  const { setFetchParams } = useRollContext();

  const {
    register, handleSubmit
  } = useForm<FilterParameters>();

  const onSubmit: SubmitHandler<FilterParameters> = (params) => setFetchParams({
    type: "filtered",
    params,
  });

  return (
    <div className="bg-base-100 collapse-arrow collapse">
      <input type="checkbox" />
      <div className="collapse-title text-base-content/35 text-ssm/8 pl-2 font-semibold">
        Search by Post Link.
      </div>
      <form className="collapse-content pl-2 text-sm grid grid-cols-1 gap-1.5" onSubmit={handleSubmit(onSubmit)}>
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
          className="btn bg-primary border-primary btn-sm text-white w-fit"
          value="Search by Post Link!"
        />
      </form>
    </div>
  );
}