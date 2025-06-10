"use client";

import { useQuery } from "@tanstack/react-query";
import { useRollContext } from "../RollContext";
import { rollOptions } from "@/lib/roll";
import { RollTableRow } from "./RollTableRow";
import { RollTableRowSkeleton } from "./RollTableRowSkeleton";
import { toast } from "react-toastify";
import { useEffect } from "react";

export function RollTableBodySkeleton({ numOfRows = 3 }) {
  const getRows = (n: number) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(<RollTableRowSkeleton key={i} />);
    }
    return arr;
  };

  return <tbody>{getRows(numOfRows)}</tbody>;
}

export function RollTableBody() {
  const { params: fetchParams } = useRollContext();
  const { data, status, isFetching, isFetchedAfterMount } = useQuery(
    rollOptions(fetchParams),
  );

  useEffect(() => {
    if (status === "error") {
      switch (fetchParams.type) {
        case "byId":
          toast.error(`Failed to fetch roll with id ${fetchParams.id}`);
          break;
        case "filtered":
          toast.error("Failed to fetch rolls filtered by character or post.");
          break;
        case "recent":
        default:
          toast.error("Failed to retrieve recent rolls.");
          break;
      }
    } else if (status !== "pending" && !isFetching && isFetchedAfterMount) {
      switch (fetchParams.type) {
        case "byId":
          toast.success(`Fetched roll with id ${fetchParams.id}.`);
          break;
        case "filtered":
          toast.success("Fetched rolls filtered by character or post.");
          break;
        case "recent":
        default:
          toast.success("Fetched recent rolls.");
          break;
      }
    }
  }, [fetchParams, status, isFetchedAfterMount]);

  if (status === "error") {
    return (
      <tbody>
        <tr>
          <td colSpan={10}>
            <div role="alert" className="alert alert-error">
              <span>Error loading Rolls!</span>
            </div>
          </td>
        </tr>
      </tbody>
    );
  }

  if (status === "pending" || isFetching) {
    if (fetchParams.type === "byId") {
      return <RollTableBodySkeleton numOfRows={1} />;
    }
    return <RollTableBodySkeleton />;
  }

  return (
    <tbody>
      {data.map((roll) => (
        <RollTableRow key={roll.id} roll={roll} />
      ))}
    </tbody>
  );
}
