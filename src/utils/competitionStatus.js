export function getCompetitionStatus(startDate, endDate) {
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  const start = new Date(startDate)
  const end = new Date(endDate)

  if (now < start) {
    const days = Math.ceil((start - now) / (1000 * 60 * 60 * 24))
    return {
      status: 'upcoming',
      label: days === 1 ? 'Starts tomorrow' : `Starts in ${days} days`,
      color: 'bg-blue-100 text-blue-700',
    }
  }

  if (now <= end) {
    const days = Math.ceil((end - now) / (1000 * 60 * 60 * 24))
    return {
      status: 'active',
      label: days === 0 ? 'Ends today' : days === 1 ? '1 day left' : `${days} days left`,
      color: 'bg-green-100 text-green-700',
    }
  }

  return {
    status: 'ended',
    label: 'Ended',
    color: 'bg-slate-100 text-slate-500',
  }
}
