export function BackgroundOverlay() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a2e1a] z-10 opacity-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#1a2e1a] z-10 opacity-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a2e1a] z-10 opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1a2e1a] z-10 opacity-20"></div>
    </div>
  );
}
