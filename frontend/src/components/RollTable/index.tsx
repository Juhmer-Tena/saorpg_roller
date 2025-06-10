import { Suspense } from "react";
import { getQueryClient } from "@/lib/get-query-client";
import { rollOptions } from "@/lib/roll";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { RollTableBody, RollTableBodySkeleton } from "./RollTableBody";

function RollTableHeader() {
  return (
    <tr>
      <th scope="col" className="w-5">
        Roll ID
      </th>
      <td scope="col" className="w-1">
        BD
      </td>
      <td scope="col" className="w-1">
        CD
      </td>
      <td scope="col" className="w-1">
        LD
      </td>
      <td scope="col" className="w-1">
        MD
      </td>
      <td scope="col" className="w-30">
        Name
      </td>
      <td scope="col" className="w-3 pl-5">
        Link
      </td>
      <td scope="col">Purpose</td>
      <td scope="col">Time</td>
      <th scope="col" className="w-1"></th>
    </tr>
  );
}

export default async function RollTable() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(rollOptions({ type: "recent" }));

  return (
    <div className="relative overflow-x-auto">
      <table className="table-pin-rows table-pin-cols table table-auto">
        <thead>
          <RollTableHeader />
        </thead>
        <Suspense fallback={<RollTableBodySkeleton />}>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <RollTableBody />
          </HydrationBoundary>
        </Suspense>

        <tfoot>
          <RollTableHeader />
        </tfoot>
      </table>
    </div>
  );
}
