import {
  RollCharacterFilter,
  RollIDFilter,
  RollPostFilter,
} from "@/components/RollerFilters";
import { RollerForm } from "@/components/RollerForm";
import RollTable from "@/components/RollTable";
import Link from "next/link";

export default function Home() {
  return (
    <div id="custom_img_bg" className="bg-cover bg-center">
      <div className="bg-base-100 container m-auto w-250 p-5 pt-5 max-md:w-100">
        <div className="m-auto w-180 max-md:w-90 min-lg:w-200">
          <div className="grid grid-cols-1 gap-5 min-md:grid-cols-2">
            <div id="custom_img_header" className="bg-cover bg-center">
              <div className="flex flex-col justify-center">
                <div className="m-auto w-90 min-md:w-80 min-md:flex-1 min-md:pt-20">
                  <div className="card bg-primary card-sm shadow-sm">
                    <div className="card-body">
                      <button className="card-title btn bg-primary border-primary justify-start text-2xl text-white">
                        SAO-RPG Dice Roller
                      </button>
                    </div>
                  </div>
                  <div className="card-xs">
                    <div className="card-body p-0">
                      <p className="bg-base-100 p-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc quis nisi posuere, egestas lorem nec, malesuada
                        metus. Orci varius natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.
                      </p>
                      <div className="bg-base-100/80 border-base-100/30 m-auto flex flex-row gap-1 rounded-lg border-1">
                        <div>
                          <div className="tooltip tooltip-top grow">
                            <label
                              htmlFor="modal_settings"
                              className="btn btn-xs btn-ghost justify-start"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="var(--color-base-content)"
                                className="bi bi-gear-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                              </svg>
                            </label>
                            <div className="tooltip-content text-xs">
                              Settings
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="tooltip tooltip-top grow">
                            <Link
                              href="https://discord.gg/p2zsGGJ"
                              target="_blank"
                            >
                              <label className="btn btn-xs btn-ghost justify-start">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="var(--color-base-content)"
                                  className="bi bi-discord"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                                </svg>
                              </label>
                            </Link>
                            <div className="tooltip-content text-xs">
                              Join our Discord!
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="tooltip tooltip-top grow">
                            <Link
                              href="https://www.sao-rpg.com/"
                              target="_blank"
                            >
                              <label className="btn btn-xs btn-ghost justify-start">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="var(--color-base-content)"
                                  className="bi bi-pen-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                                </svg>
                              </label>
                            </Link>
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
                  <input type="radio" name="sao_roller" defaultChecked={true} />
                  <div className="mr-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-dice-3 bi-tab"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z" />
                      <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    </svg>
                  </div>
                  <p className="font-semibold">Dice Roller</p>
                </label>

                <RollerForm />

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
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </div>
                  <p className="font-semibold">Roll Lookup</p>
                </label>
                <div className="tab-content bg-base-100 border-base-300 p-6">
                  <div className="min-md:h-1"></div>
                  <RollIDFilter />
                  <div className="p-0">
                    <RollCharacterFilter />
                    <RollPostFilter />
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
                  <button className="btn btn-ghost btn-sm">
                    Copy Multiple Rolls
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <RollTable />
          <div className="divider"></div>

          <div className="m-auto w-180 max-md:w-90">
            <div>
              <div className="flex flex-row">
                <div className="grow"></div>
                {/* <button className="btn btn-ghost btn-sm" onClick={loadLast50Rolls}> */}
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

        {/* TODO: Make this better and not just something at the bottom */}
        <div>
          <Link href="/dependency_licenses.txt">
            Link to licenses for dependencies (legal stuff)
          </Link>
        </div>
      </div>
      <input type="checkbox" id="modal_settings" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box no-scrollbar">
          <h3 className="text-primary pb-3 pl-3 text-xl font-bold">
            Settings.
          </h3>
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex flex-row">
                <p className="grow justify-start pt-3.5 pl-3 align-middle text-sm font-semibold">
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
                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
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
                  <p className="grow justify-start pt-3.5 pl-3 align-middle text-sm font-semibold">
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
                      <button className="btn btn-primary text-white">
                        Save
                      </button>
                    </div>
                    <div className="p-1"></div>
                    <div className="pt-3">
                      <button className="btn btn-error text-white">
                        Reset
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="grow justify-start pt-3.5 pl-3 align-middle text-sm font-semibold">
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
                      <button className="btn btn-primary text-white">
                        Save
                      </button>
                    </div>
                    <div className="p-1"></div>
                    <div className="pt-3">
                      <button className="btn btn-error text-white">
                        Reset
                      </button>
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
