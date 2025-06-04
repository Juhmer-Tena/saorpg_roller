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
    register, handleSubmit, formState: { errors },
  } = useForm<GenerateRollParameters>({
    // Use HTML5 form validation
    shouldUseNativeValidation: true,
  });

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
            className="input input-md validator"
            {...register("character", {
              required: "Enter the character name.",
            })}
          />
          <p className="validator-hint min-h-lh">{errors.character?.message}</p>
        </label>
        <label className="floating-label">
          <span>Post Link</span>
          <input
            id="field_url"
            type="url"
            placeholder="Post Link"
            className="input input-md validator"
            {...register("postLink", {
              required: "URL to post is required",
              // This regex is not really ideal but it works. It requires https, any optional
              // subdomains, the explicit hostname sao-rpg.com, and prevents any additional domains
              // from being added to the end while allowing any path. It is not ideal because it was
              // handwritten, but it should cover most cases. This validation is really only for UX
              // and the backend performs validation as well.
              pattern: {
                value: /^https:\/\/(.*\.)?sao-rpg\.com(\/\.*)*$/,
                message: "URL must be to a page on SAO-RPG"
              },
            })}
          />
          <p className="validator-hint min-h-lh">{errors.postLink?.message}</p>
        </label>
        <label className="floating-label">
          <span>Roll Purpose</span>
          <input
            id="field_purpose"
            type="text"
            placeholder="Roll Purpose"
            className="input input-md validator"
            {...register("purpose", {
              required: "Enter the purpose for the roll.",
            })}
          />
          <p className="validator-hint min-h-lh">{errors.purpose?.message}</p>
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
