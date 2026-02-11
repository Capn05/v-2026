import { RelationshipStats } from "@/types";

export const stats: RelationshipStats = {
  startDate: "2024-01-15",
  placesVisited: 12,
  photosTaken: 847,
  adventuresTogether: 52,
};

export function getDaysTogether(): number {
  const start = new Date(stats.startDate);
  const now = new Date();
  return Math.floor(
    (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );
}
