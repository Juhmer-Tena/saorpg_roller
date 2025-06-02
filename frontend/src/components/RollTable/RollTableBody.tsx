"use client";

import { useQuery } from "@tanstack/react-query";
import { useRollContext } from "../RollContext";
import { rollOptions } from "@/lib/roll";
import { RollTableRow, RollTableRowSkeleton } from "./RollTableRow";

export function RollTableBodySkeleton({ numOfRows = 3 }) {
  const getRows = (n: number) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(<RollTableRowSkeleton key={i}/>);
    }
    return arr;
  }
  
  return (
    <tbody>
      {getRows(numOfRows)}
    </tbody>
  );
}

export function RollTableBody() {
  const { params: fetchParams } = useRollContext();
  const { data, status, isFetching } = useQuery(rollOptions(fetchParams));

  if (status === "error") {
    return <p style={{ color: "red" }}>Error loading Rolls!</p>
  }

  if (status === "pending" || isFetching) {
    if (fetchParams.type === "byId") {
      return <RollTableBodySkeleton numOfRows={1}/>;
    }
    return <RollTableBodySkeleton />;
  }

  return (
    <tbody>
      {data.map((roll) => <RollTableRow key={roll.id} roll={roll} />)}
    </tbody>
  );
}
