import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Pagination({ total }) {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="flex items-center justify-between border-t-[1.5px] border-slate-100 flex-wrap gap-3">
      <div className="flex items-center gap-2 text-[12px] text-slate-500">
        <span>Showing</span>
        <div className="relative">
          <select
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
            className="appearance-none pl-2 pr-6 py-1 border-[1.5px] border-slate-200 rounded-[7px] text-[12px] text-slate-600 bg-white outline-none cursor-pointer font-[inherit]"
          >
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <ChevronDown
            size={10}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>
        <span>of {total}</span>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="w-7.5 h-7.5 rounded-lg border-[1.5px] border-slate-200 bg-white text-slate-400 text-sm flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-all"
          aria-label="Halaman sebelumnya"
        >
          <ChevronLeft size={14} />
        </button>
        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map(
          (p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-7.5 h-7.5 rounded-lg border-[1.5px] text-[12px] font-semibold flex items-center justify-center transition-all ${
                page === p
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-slate-200 bg-white text-slate-500 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              {p}
            </button>
          ),
        )}
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="w-7.5 h-7.5 rounded-lg border-[1.5px] border-slate-200 bg-white text-slate-400 text-sm flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-all"
          aria-label="Halaman berikutnya"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
