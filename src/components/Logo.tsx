import Image from "next/image";

/**
 * Logo component — renders the krypex brand mark + wordmark.
 * The green icon (#22c55e) reads clearly on both light and dark backgrounds,
 * matching the two brand images (light-bg and dark-bg variants).
 */
export function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  if (size === "lg") {
    return (
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/logo-icon.svg"
          alt="krypex"
          width={80}
          height={80}
          className="h-20 w-auto sm:h-24"
          priority
        />
        {/* Wordmark: lowercase "krypex" in brand green, matching both theme screenshots */}
        <span
          className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          style={{ color: "#22c55e" }}
        >
          krypex
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/logo-icon.svg"
        alt="krypex"
        width={32}
        height={32}
        className="h-8 w-auto"
      />
      {/* Wordmark: lowercase, green — visible on both light white and dark navy backgrounds */}
      <span
        className="text-xl font-extrabold tracking-tight"
        style={{ color: "#22c55e" }}
      >
        krypex
      </span>
    </div>
  );
}
