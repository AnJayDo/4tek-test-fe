"use client";

import { cn } from "@/lib/utils";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function SubscribeEmailInput({
  placeholder,
  theme = "black",
}: {
  placeholder?: string;
  theme?: "black" | "white";
}) {
  const [value, setValue] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("email", value);
    const response = await fetch("/api/send", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    if (data?.id) {
      toast.success("Subscribe successfully!");
    }
    setValue("");
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-lg border border-white h-14 flex justify-between",
        theme === "white" ? "bg-white" : ""
      )}
    >
      <input
        id="subscribe-email"
        type="email"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
        className={cn(
          "text-[14px] bg-transparent text-white placeholder:text-white w-full pl-[14px] focus:ring-transparent focus:outline-none",
          theme === "white" ? "text-black placeholder:text-[#545454]" : ""
        )}
      ></input>
      <button
        type="submit"
        className="h-14 w-14 flex justify-center items-center rounded-lg bg-transparent focus:ring-transparent"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.43 18.8201C14.24 18.8201 14.05 18.7501 13.9 18.6001C13.61 18.3101 13.61 17.8301 13.9 17.5401L19.44 12.0001L13.9 6.46012C13.61 6.17012 13.61 5.69012 13.9 5.40012C14.19 5.11012 14.67 5.11012 14.96 5.40012L21.03 11.4701C21.32 11.7601 21.32 12.2401 21.03 12.5301L14.96 18.6001C14.81 18.7501 14.62 18.8201 14.43 18.8201Z"
            fill={theme === "white" ? "black" : "white"}
          />
          <path
            d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
            fill={theme === "white" ? "black" : "white"}
          />
        </svg>
      </button>
    </form>
  );
}
