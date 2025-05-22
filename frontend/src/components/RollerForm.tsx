"use client";

import { getBaseURL } from "@/lib/get-query-client";
import { GenerateRollParameters, performRoll } from "@/lib/roll";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRollContext } from "./RollContext";


export function RollerForm() {
  const baseUrl = getBaseURL();

  const queryClient = useQueryClient();

  const { params } = useRollContext();

  const {
    register, handleSubmit
  } = useForm<GenerateRollParameters>();

  const mutation = useMutation({
    mutationFn: (params: GenerateRollParameters) => performRoll(baseUrl, params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rolls", params] });
    }
  });

  const onSubmit: SubmitHandler<GenerateRollParameters> = (data) => mutation.mutate(data);

  return (
    <form className="tab-content bg-base-100 border-base-300 p-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="list gap-1.5 p-1">
        <label className="floating-label">
          <span>Name</span>
          <input
            id="field_name"
            type="text"
            placeholder="Name"
            className="input input-md"
            {...register("character")}
          />
        </label>
        <label className="floating-label">
          <span>Post Link</span>
          <input
            id="field_url"
            type="text"
            placeholder="Post Link"
            className="input input-md"
            {...register("postLink")}
          />
        </label>
        <label className="floating-label">
          <span>Roll Purpose</span>
          <input
            id="field_purpose"
            type="text"
            placeholder="Roll Purpose"
            className="input input-md"
            {...register("purpose")}
          />
        </label>
      </div>

      <div className="card-actions justify-end pt-3 pr-1">
        <input
          id="btn_roll"
          type="submit"
          className="btn bg-primary border-primary text-white"
          value="Roll"
        />
      </div>

      <div className="bg-base-100 border-base-100 collapse-arrow collapse">
        <input type="checkbox" />
        <div className="collapse-title text-base-content/35 text-ssm/8 pl-2 align-middle font-semibold">
          Advanced Roll Options
        </div>
        <div className="collapse-content pl-2 text-sm">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-0 p-0">
              <input
                id="bDoBasicMultiroll"
                type="checkbox"
                className="checkbox checkbox-sm checkbox-secondary m-1 rounded-none"
              />
              <div
                className="tooltip tooltip-top grow"
              >
                <p className="m-1.5 text-xs">Do Multi-Roll.</p>
                <div className="tooltip-content text-xs">
                  Perform a standard roll multiple times.
                </div>
              </div>
              <input
                id="int_BasicMultiRoll"
                type="number"
                className="input validator input-xs w-15 justify-end rounded-none p-3"
                placeholder="2"
                min="1"
                max="10"
                ng-disabled="bDoMultiroll"
              />
            </div>
            <div className="flex flex-row gap-0 p-0 pr-3">
              <input
                id="bDoAoERoll"
                type="checkbox"
                className="checkbox checkbox-sm checkbox-secondary m-1 rounded-none"
              />
              <div
                className="tooltip tooltip-top grow"
              >
                <p className="m-1.5 text-xs">Do AoE Roll.</p>
                <div className="tooltip-content text-xs">
                  Rolls the BD four (4) times in each standard roll.
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-0 p-0">
              <input
                id="bDoMultiMDRoll"
                type="checkbox"
                className="checkbox checkbox-sm checkbox-secondary m-1 rounded-none"
              />
              <div
                className="tooltip tooltip-top grow"
              >
                <p className="m-1.5 text-xs">Do Multi-MD Roll.</p>
                <div className="tooltip-content text-xs">
                  Rolls the MD multiple times in each standard roll.
                </div>
              </div>
              <input
                id="int_MultiMDRoll"
                type="number"
                className="input validator input-xs w-15 justify-end rounded-none p-3"
                placeholder="2"
                min="1"
                max="10"
                ng-disabled="bDoMultiroll"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
