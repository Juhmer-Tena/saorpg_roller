export type Roll = {
  id: number;
  timestamp: string;
  version: string;
  post: string;
  purpose: string;
  character: string;
  battleDie: number;
  lootDie: number;
  craftDie: number;
  mobDie: number;
}

export async function retrieveLast50Rolls() {
  const response = await fetch("http://localhost:8080/api/roll/last50");
  return await response.json() as Array<Roll>;
}
