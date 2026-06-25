"use client";

interface MasterCardProps {
  name: string;
  service: string;
  rating: number;
  reviewCount: number;
  minPrice: number;
  distance?: string;
  verified?: boolean;
  online?: boolean;
  photo?: string;
}

export default function MasterCard({
  name,
  service,
  rating,
  reviewCount,
  minPrice,
  distance,
  verified,
  online,
  photo,
}: MasterCardProps) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <div className="flex-shrink-0 w-[140px] bg-[var(--bg-card)] rounded-xl p-3 shadow-sm border border-[var(--border-light)] hover:shadow-md transition-shadow cursor-pointer">
      {/* Avatar */}
      <div className="relative w-full aspect-square rounded-lg mb-2 overflow-hidden bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)]">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
            {initials}
          </div>
        )}
        {online && (
          <span className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
        )}
      </div>

      {/* Info */}
      <h4 className="text-[11px] font-semibold leading-tight truncate">
        {name}
      </h4>
      <p className="text-[9px] text-[var(--text-secondary)] mt-0.5 truncate">
        {service}
        {distance && ` · ${distance}`}
      </p>
      <div className="flex items-center justify-between mt-1.5">
        <span className="text-[9px] font-semibold text-[var(--accent-dark)]">
          ⭐ {rating}
        </span>
        <span className="text-[10px] font-bold text-[var(--text)]">
          від {minPrice}₴
        </span>
      </div>
    </div>
  );
}
