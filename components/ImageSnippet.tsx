import Image from "next/image";

interface ImageSnippetProps {
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
}

export default function ImageSnippet({
  src,
  alt,
  className = "",
  rotation = 0,
}: ImageSnippetProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-primary-glow">
        <Image
          src={src}
          alt={alt}
          width={400}
          height={600}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 200px, (max-width: 1200px) 300px, 400px"
        />
      </div>
    </div>
  );
}

