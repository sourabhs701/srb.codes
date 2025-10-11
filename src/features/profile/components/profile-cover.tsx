import { SrbBrandmark } from "@/components/srb-mark";
// import { Tag } from "@/components/ui/tag";
// import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";

export function ProfileCover() {
  // const currentMonth = new Date().toLocaleString("default", { month: "short" });

  return (
    <div
      className={cn(
        "aspect-2/1 border-x border-edge select-none sm:aspect-3/1",
        "flex items-center justify-center text-black dark:text-white",
        "screen-line-before screen-line-after before:-top-px after:-bottom-px",
        "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5",
        "relative"
      )}
    >
      {/* hover to animate */}
      <div className="flex flex-col items-center justify-center gap-2">
        <SrbBrandmark />
        <span className="mt-4 text-xs text-zinc-400 dark:text-zinc-600">
          hover ? WorkMark : BrandMark{" "}
        </span>
      </div>

      {/* {USER.available !== undefined && (
        <div className="absolute top-2 right-2">
          {USER.available ? (
            <Tag className="border-green-200 bg-green-100 text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400">
              <span className="relative flex items-center gap-1.5">
                <span className="absolute inline-flex size-2 animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-green-500" />
                Available for {currentMonth}
              </span>
            </Tag>
          ) : (
            <Tag className="border-red-200 bg-red-100 text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
              <span className="relative flex items-center gap-1.5">
                <span className="relative inline-flex size-1.5 rounded-full bg-red-500" />
                Not Available for {currentMonth}
              </span>
            </Tag>
          )}
        </div>
      )} */}
    </div>
  );
}
