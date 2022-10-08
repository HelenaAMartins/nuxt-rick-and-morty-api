export const statusClass = (status) => {
  const greenPill = "bg-green-100 text-green-800"
  const yellowPill = "bg-yellow-100 text-yellow-800"
  const redPill = "bg-red-100 text-red-800"

  const statusOptions = {
      alive: greenPill,
      unknown: yellowPill,
      dead: redPill,
  };

  const normalized = status.toLowerCase()

  return statusOptions[normalized];
};
