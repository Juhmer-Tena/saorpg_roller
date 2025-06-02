import { type Roll } from "@/lib/roll";
import { LocalizedTimestamp } from "../LocalizedTimestamp";

function RollTableCellSkeleton() {
  return (
    <td className="px-1">
      <div className="skeleton min-h-lh w-full rounded-full" />
    </td>
  );
}

export function RollTableRowSkeleton() {
  return (
    <tr>
      <th scope="row" className="px-1">
        <div className="skeleton min-h-lh w-full rounded-full" />
      </th>
      <RollTableCellSkeleton />
      <RollTableCellSkeleton />
      <RollTableCellSkeleton />
      <RollTableCellSkeleton />
      <RollTableCellSkeleton />
      <td className="px-2">
        <div className="skeleton w-full min-h-full p-0 rounded-full">
          <button className="btn btn-xs btn-ghost opacity-75 min-h-full w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="gray"
              className="bi bi-chat-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            </svg>
          </button>
        </div>
      </td>
      <RollTableCellSkeleton />
      <RollTableCellSkeleton />
      <td className="m-0 p-0">
        <div className="skeleton w-full min-h-full p-0 rounded-full">
          <button className="btn btn-xs btn-ghost opacity-75 w-full min-h-full">
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
      </td>
    </tr>
  );
}

export function RollTableRow({ roll }: { roll: Roll }) {
  const combinedVersion = `${roll.version.toUpperCase()}${roll.id}`;

  return (
    <tr key={combinedVersion}>
      <th scope="row">{combinedVersion}</th>
      <td>{roll.battleDie}</td>
      <td>{roll.craftDie}</td>
      <td>{roll.lootDie}</td>
      <td>{roll.mobDie}</td>
      <td>{roll.character}</td>
      <td>
        <button className="btn btn-xs btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="gray"
            className="bi bi-chat-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          </svg>
        </button>
      </td>
      <td>{roll.purpose}</td>
      <td>
        <LocalizedTimestamp timestamp={new Date(roll.timestamp)} />
      </td>
      <td className="m-0 p-0">
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
      </td>
    </tr>
  );
}