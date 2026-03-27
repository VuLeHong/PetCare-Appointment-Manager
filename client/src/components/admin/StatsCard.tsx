'use client';

interface Props {
  label: string;
  value: number;
  icon: string;
}

export default function StatsCard({ label, value, icon }: Props) {
  return (
    <div className="bg-white border border-vc rounded-vc p-5">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-vc-muted">{label}</p>
          <p className="text-2xl font-bold text-vc-primary mt-1">
            {value}
          </p>
        </div>

        <div className="w-10 h-10 flex items-center justify-center bg-vc-primary-pale rounded-vc text-lg">
          {icon}
        </div>
      </div>
    </div>
  );
}