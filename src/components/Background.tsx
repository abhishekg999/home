export function BackgroundOverlay() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg/30 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-bg/30 z-10"></div>
    </div>
  );
}
