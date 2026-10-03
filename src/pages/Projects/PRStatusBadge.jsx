const STATUS_CONFIG = {
  merged: {
    label: "Merged",
    className: "bg-[#EDE9FE] text-[#6D28D9] border-[#C4B5FD]",
    icon: (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm6.293 11.293l-3-3a1 1 0 0 1 1.414-1.414L11 12.172l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0z"/>
      </svg>
    ),
  },
  open: {
    label: "Open",
    className: "bg-[#E4F2EB] text-[#2A7A4B] border-[#BBE3CE]",
    icon: (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
  },
  closed: {
    label: "Closed",
    className: "bg-[#FEE2E2] text-[#DC2626] border-[#FECACA]",
    icon: (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    ),
  },
};

function PRStatusBadge({ status }) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.open;
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-[2px] rounded-full border ${config.className}`}>
      {config.icon}
      {config.label}
    </span>
  );
}

export default PRStatusBadge;