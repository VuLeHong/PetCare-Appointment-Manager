'use client';

interface Props {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ title, onClose, children }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-vc w-full max-w-md shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-vc">
          <h2 className="font-semibold text-vc-main">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-vc-muted hover:text-vc-main"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}