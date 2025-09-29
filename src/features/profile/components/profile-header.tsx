"use client";
import Image from "next/image";

import { RealTimeClock } from "@/components/real-time-clock";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { VerifiedIcon } from "./verified-icon";
export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          <Image
            priority
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            width={160}
            height={160}
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            unoptimized
          />
        </div>
        {/* Flag of India */}
        <svg
          className="absolute top-0 -left-px h-8 sm:h-9"
          viewBox="0 0 30 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top saffron stripe */}
          <rect width="30" height="6.67" y="0" fill="#FF9933" />

          {/* Middle white stripe */}
          <rect width="30" height="6.67" y="6.67" fill="#FFFFFF" />

          {/* Bottom green stripe */}
          <rect width="30" height="6.67" y="13.33" fill="#138808" />

          {/* Ashoka Chakra */}
          <circle
            cx="15"
            cy="10"
            r="3"
            stroke="#000080"
            strokeWidth="0.6"
            fill="none"
          />
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1="15"
              y1="10"
              x2={15 + 3 * Math.cos((i * 15 * Math.PI) / 180)}
              y2={10 + 3 * Math.sin((i * 15 * Math.PI) / 180)}
              stroke="#000080"
              strokeWidth="0.3"
            />
          ))}
        </svg>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-start justify-end pr-4 pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="py-2 font-mono text-xs text-zinc-400 dark:text-zinc-600">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <RealTimeClock
                timeZone="Asia/Kolkata"
                showSeconds={true}
                hour12={true}
              />{" "}
              : Jaipur, India
            </div>
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
            </SimpleTooltip>
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
