import { Sparkles } from "lucide-react";

export default function AiBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
      <Sparkles className="w-4 h-4 text-blue-600" />
      <span className="text-sm font-medium text-blue-600">
        Powered by AI Technology
      </span>
    </div>
  );
}
