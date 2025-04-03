import Image from "next/image";

export default function Home() {
  return (
    <div id="custom_img_bg" className="bg-cover bg-center">
      <div className="container pt-5 w-250 m-auto bg-base-100 p-5 max-md:w-100">
        <div className="w-180 m-auto max-md:w-90 min-lg:w-200">
        <div className="grid grid-cols-1 min-md:grid-cols-2 gap-5">
            <div id="custom_img_header" className="bg-cover bg-center">
            <div className="justify-center flex flex-col">
                <div className="w-90 m-auto min-md:w-80 min-md:flex-1 min-md:pt-20">
                    <div className="card bg-primary card-sm shadow-sm">
                        <div className="card-body">
                            <button className="text-white card-title text-2xl btn bg-primary border-primary justify-start">SAO-RPG Dice Roller</button>
                        </div>
                    </div>
                    <div className="card-xs">
                        <div className="card-body p-0">
                            <p className="bg-base-100 p-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nisi posuere, egestas lorem nec, malesuada metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>
                            <div className="flex flex-row gap-1 m-auto bg-base-100/80 border-base-100/30 border-1 rounded-lg">
                                <div>
                                    <div className="tooltip grow tooltip-top" style={{ "--tt-off": "calc(100%)" }} >
                                        <label htmlFor="modal_settings" className="btn btn-xs btn-ghost justify-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--color-base-content)" className="bi bi-gear-fill" viewBox="0 0 16 16">
                                                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                                              </svg>
                                            </label>
                                        <div className="tooltip-content text-xs">
                                            Settings
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <div className="tooltip grow tooltip-top" style={{ "--tt-off": "calc(100%)" }}>
                                        <a href="https://discord.gg/p2zsGGJ" target="_blank">
                                        <label className="btn btn-xs btn-ghost justify-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--color-base-content)" className="bi bi-discord" viewBox="0 0 16 16">
                                                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                                              </svg>
                                            </label>
                                        </a>
                                        <div className="tooltip-content text-xs">
                                            Join our Discord!
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="tooltip grow tooltip-top" style={{ "--tt-off": "calc(100%)" }} >
                                        <a href="https://www.sao-rpg.com/" target="_blank">
                                        <label className="btn btn-xs btn-ghost justify-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--color-base-content)" className="bi bi-pen-fill" viewBox="0 0 16 16">
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
                                              </svg>
                                            </label>
                                        </a>
                                        <div className="tooltip-content text-xs">
                                            Return to SAO-RPG
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="max-md:h-1.5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className="w-90">
              <div className="tabs tabs-lift">
                <label className="tab text-primary">
                  <input type="radio" name="sao_roller" defaultChecked={true}/>
                  <div className="mr-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-dice-3 bi-tab"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"
                      />
                      <path
                        d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">Dice Roller</p>
                </label>
                <div className="tab-content bg-base-100 border-base-300 p-6">
                  <div className="list gap-1.5 p-1">
                    <label className="floating-label">
                      <span>Name</span>
                      <input
                        id="field_name"
                        type="text"
                        placeholder="Name"
                        className="input input-md"
                      />
                    </label>
                    <label className="floating-label">
                      <span>Post URL</span>
                      <input
                        id="field_url"
                        type="text"
                        placeholder="Post Link"
                        className="input input-md"
                      />
                    </label>
                    <label className="floating-label">
                      <span>Roll Purpose</span>
                      <input
                        id="field_purpose"
                        type="text"
                        placeholder="Roll Purpose"
                        className="input input-md"
                      />
                    </label>
                  </div>

                  <div className="card-actions justify-end pt-3 pr-1">
                    <button
                      id="btn_roll"
                      className="btn bg-primary border-primary text-white"
                    >
                      Roll!
                    </button>
                  </div>

                  <div
                    className="bg-base-100 border-base-100 collapse-arrow collapse"
                  >
                    <input type="checkbox" />
                    <div
                      className="collapse-title text-base-content/35 text-ssm/8 pl-2 align-middle font-semibold"
                    >
                      Advanced Roll Options
                    </div>
                    <div className="collapse-content text-sm pl-2">
                      <div className="flex flex-col gap-1">
                        <div className="flex flex-row gap-0 p-0">
                          <input
                            id="bDoBasicMultiroll"
                            type="checkbox"
                            className="checkbox checkbox-sm checkbox-secondary m-1 rounded-none"
                          />
                          <div
                            className="tooltip tooltip-top grow"
                            style={{ "--tt-off": "calc(100%)" }}
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
                            style={{ "--tt-off": "calc(100%)" }}
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
                            style={{ "--tt-off": "calc(100%)" }}
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
                </div>

                <label className="tab text-primary">
                  <input type="radio" name="sao_roller" />
                  <div className="mr-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search bi-tab"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">Roll Lookup</p>
                </label>
                  <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className="min-md:h-1"></div>
                        <div className="list gap-1.5 p-1">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Search by Roll ID#</legend>
                                <input id="field_lookup_id" type="text" className="input" placeholder="Roll ID#" />
                                <div>
                                    <button id="btn_lookup_id" className="btn text-white bg-primary border-primary btn-sm">Search by ID!</button>
                                </div>
                            </fieldset>
                        </div>
                        <div className="p-0">
                    <div className="bg-base-100 collapse-arrow collapse">
                      <input type="checkbox" />
                      <div
                        className="collapse-title font-semibold text-base-content/35 text-ssm/8 pl-2"
                      >
                        Search by Name.
                      </div>
                      <div className="collapse-content text-sm pl-2">
                        <fieldset className="fieldset">
                          <input
                            id="field_lookup_name"
                            type="text"
                            className="input"
                            placeholder="Name"
                          />
                          <div>
                            <button
                              id="btn_lookup_name"
                              className="btn bg-primary border-primary btn-sm text-white"
                            >
                              Search!
                            </button>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                    <div className="bg-base-100 collapse-arrow collapse">
                      <input type="checkbox" />
                      <div
                        className="collapse-title font-semibold text-base-content/35 text-ssm/8 pl-2"
                      >
                        Search by Post Link.
                      </div>
                      <div className="collapse-content text-sm pl-2">
                        <fieldset className="fieldset">
                          <input
                            id="field_lookup_url"
                            type="text"
                            className="input"
                            placeholder="Post Link"
                          />
                          <div>
                            <button
                              id="btn_lookup_url"
                              className="btn bg-primary border-primary btn-sm text-white"
                            >
                              Search by Post Link!
                            </button>
                          </div>
                        </fieldset>
                      </div>
                      </div>
                    </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div>
          <div className="flex flex-row">
            <div className="w-250">
                <div className="flex flex-col">
                    <div className="flex flex-row pb-3">
                        <div className="grow"></div>
                        <div id="btn-copy-multiroll"></div>
                        <div className="p-3"></div>
                        <button className="btn btn-ghost btn-sm">Copy Multiple Rolls</button>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="overflow-x-auto">
            <table className="table-pin-rows table-pin-cols table table-auto">
              <thead>
                <tr>
                  <th className="w-5">Roll ID</th>
                  <td className="w-1">BD</td>
                  <td className="w-1">CD</td>
                  <td className="w-1">LD</td>
                  <td className="w-1">MD</td>
                  <td className="w-30">Name</td>
                  <td className="w-3 pl-5">Link</td>
                  <td>Purpose</td>
                  <td className="min-lg:w-50">Time</td>
                  <th className="w-1"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>A25000</th>
                  <td>10</td>
                  <td>12</td>
                  <td>20</td>
                  <td>10</td>
                  <td>Cy Ganderton</td>
                  <td>
                    <div>
                      <button className="btn btn-xs btn-ghost">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          className="bi bi-chat-square-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                  <td>2025-03-29 18:17:19</td>
                  <th className="m-0 p-0">
                    <div className="justify-center">
                      <button className="btn btn-xs btn-ghost">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          className="bi bi-clipboard-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>A25000</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Cy Ganderton</td>
                  <td>
                    <div>
                      <button className="btn btn-xs btn-ghost">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          className="bi bi-chat-square-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                  <td>2025-03-29 18:17:19</td>
                  <th className="m-0 p-0">
                    <div className="justify-center">
                      <button className="btn btn-xs btn-ghost">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          className="bi bi-clipboard-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>A25000</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Cy Ganderton</td>
                  <td>
                    <div>
                      <button className="btn btn-xs btn-ghost">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          className="bi bi-chat-square-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                  <td>2025-03-29 18:17:19</td>
                  <th className="m-0 p-0">
                    <div className="justify-center">
                      <button className="btn btn-xs btn-ghost">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          className="bi bi-clipboard-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>A25000</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Cy Ganderton</td>
                  <td>
                    <div>
                      <button className="btn btn-xs btn-ghost">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          className="bi bi-chat-square-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                  <td>2025-03-29 18:17:19</td>
                  <th className="m-0 p-0">
                    <div className="justify-center">
                      <button className="btn btn-xs btn-ghost">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          className="bi bi-clipboard-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>A25000</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Cy Ganderton</td>
                  <td>
                    <div>
                      <button className="btn btn-xs btn-ghost">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          className="bi bi-chat-square-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                  <td>2025-03-29 18:17:19</td>
                  <th className="m-0 p-0">
                    <div className="justify-center">
                      <button className="btn btn-xs btn-ghost">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          className="bi bi-clipboard-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>A25000</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Cy Ganderton</td>
                  <td>
                    <div>
                      <button className="btn btn-xs btn-ghost">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          className="bi bi-chat-square-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                  <td>2025-03-29 18:17:19</td>
                  <th className="m-0 p-0">
                    <div className="justify-center">
                      <button className="btn btn-xs btn-ghost">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          className="bi bi-clipboard-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>A25000</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Cy Ganderton</td>
                  <td>
                    <div>
                      <button className="btn btn-xs btn-ghost">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          className="bi bi-chat-square-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                  <td>2025-03-29 18:17:19</td>
                  <th className="m-0 p-0">
                    <div className="justify-center">
                      <button className="btn btn-xs btn-ghost">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          className="bi bi-clipboard-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>A25000</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Cy Ganderton</td>
                  <td>
                    <div>
                      <button className="btn btn-xs btn-ghost">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          className="bi bi-chat-square-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                  <td>2025-03-29 18:17:19</td>
                  <th className="m-0 p-0">
                    <div className="justify-center">
                      <button className="btn btn-xs btn-ghost">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="gray"
                          className="bi bi-clipboard-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <th className="w-5">Roll ID</th>
                  <td className="w-1">BD</td>
                  <td className="w-1">CD</td>
                  <td className="w-1">LD</td>
                  <td className="w-1">MD</td>
                  <td className="w-30">Name</td>
                  <td className="w-3 pl-5">Link</td>
                  <td>Purpose</td>
                  <td>Time</td>
                  <th className="w-1"></th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="divider"></div>

          <div className="m-auto w-180 max-md:w-90">
            <div>
              <div className="flex flex-row">
                <div className="grow"></div>
                <button className="btn btn-ghost btn-sm">
                  View last 100 Rolls
                </button>
                <button className="btn btn-ghost btn-sm">
                  View last 500 Rolls
                </button>
                <div className="grow"></div>
              </div>
            </div>
            <div className="flex flex-row pt-5">
              <div className="grow"></div>
              <div className="join">
                <input
                  className="join-item btn btn-square rounded-none"
                  type="radio"
                  name="options"
                  aria-label="1"
                  defaultChecked={true}
                />
                <input
                  className="join-item btn btn-square rounded-none"
                  type="radio"
                  name="options"
                  aria-label="2"
                />
                <input
                  className="join-item btn btn-square rounded-none"
                  type="radio"
                  name="options"
                  aria-label="3"
                />
                <input
                  className="join-item btn btn-square rounded-none"
                  type="radio"
                  name="options"
                  aria-label="4"
                />
              </div>
              <div className="grow"></div>
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" id="modal_settings" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box no-scrollbar">
          <h3 className="text-primary pb-3 pl-3 text-xl font-bold">Settings.</h3>
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex flex-row">
                <p
                  className="grow justify-start pt-3.5 pl-3 align-middle text-sm font-semibold"
                >
                  Change Site Theme
                </p>
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn m-1">
                    Themes
                    <div className="pl-2">
                      <svg
                        width="12px"
                        height="12px"
                        className="inline-block h-2 w-2 fill-current opacity-60"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2048 2048"
                      >
                        <path
                          d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-base-300 rounded-box z-1 w-30 p-2 shadow-2xl"
                  >
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-ghost w-full justify-start"
                        aria-label="Light"
                        value="nord"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-ghost w-full justify-start"
                        aria-label="Dark"
                        value="dark"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-ghost w-full justify-start"
                        aria-label="Retro"
                        value="retro"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost w-full justify-start"
                        aria-label="Luxury"
                        value="luxury"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost w-full justify-start"
                        aria-label="Mina"
                        value="synthwave"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost w-full justify-start"
                        aria-label="Coffee"
                        value="coffee"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <p
                    className="grow justify-start pt-3.5 pl-3 align-middle text-sm font-semibold"
                  >
                    Change Site Banner
                  </p>
                  <div className="flex flex-row">
                    <fieldset className="fieldset pt-3 pl-5">
                      <input
                        id="field_settings_sitebanner"
                        type="file"
                        className="file-input"
                      />
                    </fieldset>
                    <div className="grow"></div>
                    <div className="pt-3">
                      <button className="btn btn-primary text-white">Save</button>
                    </div>
                    <div className="p-1"></div>
                    <div className="pt-3">
                      <button className="btn btn-error text-white">Reset</button>
                    </div>
                  </div>
                </div>

                <div>
                  <p
                    className="grow justify-start pt-3.5 pl-3 align-middle text-sm font-semibold"
                  >
                    Change Site Background
                  </p>
                  <div className="flex flex-row">
                    <fieldset className="fieldset pt-3 pl-5">
                      <input
                        id="field_settings_sitebg"
                        type="file"
                        className="file-input"
                      />
                    </fieldset>
                    <div className="grow"></div>
                    <div className="pt-3">
                      <button className="btn btn-primary text-white">Save</button>
                    </div>
                    <div className="p-1"></div>
                    <div className="pt-3">
                      <button className="btn btn-error text-white">Reset</button>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="modal_settings"></label>
      </div>
    </div>
  );
}
