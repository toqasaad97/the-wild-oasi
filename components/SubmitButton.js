"use client";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  pendingLabel: string;
  label: string;
}

export default function SubmitButton({
  pendingLabel,
  label,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLabel : label}
    </button>
  );
}
