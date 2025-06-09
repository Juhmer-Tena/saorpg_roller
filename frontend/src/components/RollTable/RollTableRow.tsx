"use client";

import { type Roll } from "@/lib/roll";
import { LocalizedTimestamp } from "../LocalizedTimestamp";
import Link from "next/link";
import { CopyToClipboardIcon } from "./CopyToClipboardIcon";
import { PostLinkIcon } from "./PostLinkIcon";

export function RollTableRow({ roll }: { roll: Roll }) {
  const combinedVersion = `${roll.version.toUpperCase()}${roll.id}`;

  const copyToKeyboard = async () => {
    await window.navigator.clipboard.writeText(
      `ID: ${combinedVersion} | BD: ${roll.battleDie} | CD: ${roll.craftDie} | ` +
      `LD: ${roll.lootDie} | MD: ${roll.mobDie}`);
  };

  return (
    <tr key={combinedVersion}>
      <th scope="row">{combinedVersion}</th>
      <td>{roll.battleDie}</td>
      <td>{roll.craftDie}</td>
      <td>{roll.lootDie}</td>
      <td>{roll.mobDie}</td>
      <td>{roll.character}</td>
      <td>
        <Link href={roll.post} className="btn btn-xs btn-ghost">
          <PostLinkIcon />
        </Link>
      </td>
      <td>{roll.purpose}</td>
      <td>
        <LocalizedTimestamp timestamp={new Date(roll.timestamp)} />
      </td>
      <th className="m-0 p-0">
        <span onClick={copyToKeyboard} className="btn btn-xs btn-ghost">
          <CopyToClipboardIcon />
        </span>
      </th>
    </tr>
  );
}