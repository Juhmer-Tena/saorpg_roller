import { CopyToClipboardIcon } from "./CopyToClipboardIcon";
import { PostLinkIcon } from "./PostLinkIcon";

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
          <span className="btn btn-xs btn-ghost opacity-75 w-full min-h-full">
            <PostLinkIcon />
          </span>
        </div>
      </td>
      <RollTableCellSkeleton />
      <RollTableCellSkeleton />
      <th className="m-0 p-0">
        <div className="skeleton w-full min-h-full p-0 rounded-full">
          <span className="btn btn-xs btn-ghost opacity-75 w-full min-h-full">
            <CopyToClipboardIcon />
          </span>
        </div>
      </th>
    </tr>
  );
}