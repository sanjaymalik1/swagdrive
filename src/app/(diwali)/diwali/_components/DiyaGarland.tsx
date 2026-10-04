const THREAD_HEIGHTS = [18, 34, 22, 40, 18, 40, 22, 34, 18, 24, 36, 20];

export function DiyaGarland() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-nowrap justify-center gap-6 overflow-hidden px-4"
    >
      {THREAD_HEIGHTS.map((thread, i) => (
        <div key={i} className="flex flex-col items-center">
          <div
            className="w-px bg-primary/30"
            style={{ height: thread }}
          />
          <svg width="24" height="30" viewBox="0 0 26 34" fill="none">
            <path
              d="M2 20C2 20 6 26 13 26C20 26 24 20 24 20C24 24.4183 19.0751 28 13 28C6.92487 28 2 24.4183 2 20Z"
              fill="#8B2E2E"
            />
            <ellipse cx="13" cy="19" rx="11" ry="3.5" fill="#C9742F" />
            <path
              d="M13 15C13 15 9 11 13 5C17 11 13 15 13 15Z"
              fill="#E8A33D"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
