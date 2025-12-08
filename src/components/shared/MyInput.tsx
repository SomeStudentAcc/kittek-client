import React from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  requied?: boolean;
  placeholder: string;
  heading: string;
  value: string;
  onChange: (value: string) => void;
}

export default function MyInput({
  className,
  requied,
  value,
  placeholder,
  heading,
  onChange,
}: Props) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <p>
        {heading}
        {requied && <span className="text-red-500">*</span>}
      </p>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-10"
      />
    </div>
  );
}
