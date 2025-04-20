import { Roll } from "@/lib/roll";

function RollTableHeader() {
  return <tr>
    <th scope="col" className="w-5">Roll ID</th>
    <td scope="col" className="w-1">BD</td>
    <td scope="col" className="w-1">CD</td>
    <td scope="col" className="w-1">LD</td>
    <td scope="col" className="w-1">MD</td>
    <td scope="col" className="w-30">Name</td>
    <td scope="col" className="w-3 pl-5">Link</td>
    <th scope="col">Purpose</th>
    <th scope="col">Time</th>
    <th scope="col" className="w-1"></th>
  </tr>;
}

function RollTableRow({ roll }: { roll: Roll }) {
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
      <td>{new Date(roll.timestamp).toLocaleString()}</td>
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

export default function RollTable({ rolls }: { rolls: Array<Roll> }) {
  return (
    <table className="table-pin-rows table-pin-cols table table-auto">
      <thead>
        <RollTableHeader />
      </thead>
      <tbody>
        {rolls.map((roll) => <RollTableRow key={roll.id} roll={roll} />)}
      </tbody>

      <tfoot>
        <RollTableHeader />
      </tfoot>
    </table>
  );
}