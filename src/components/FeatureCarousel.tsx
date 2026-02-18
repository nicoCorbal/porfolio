import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"
import { LucideIcon } from "@/components/LucideIcon"
import type { Feature } from "@/data/products-multilingual"

const VIDEO_EXTENSIONS = [".mp4", ".webm"]

function isVideo(src: string) {
  return VIDEO_EXTENSIONS.some((ext) => src.toLowerCase().endsWith(ext))
}

interface FeatureCarouselProps {
  features: Feature[]
}

export function FeatureCarousel({ features }: FeatureCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <div className="px-12">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {features.map((feature, i) => (
            <CarouselItem key={i}>
              <div className="relative w-full aspect-video border border-gray-200 overflow-hidden">
                {/* Media background */}
                {feature.media && (
                  <div className="absolute inset-0">
                    {isVideo(feature.media) ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={feature.media} />
                      </video>
                    ) : (
                      <img
                        src={feature.media}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                )}

                {/* Feature info overlay */}
                <div className={`relative z-10 flex items-center justify-center h-full p-8 md:p-12 ${feature.media ? "bg-black/50" : "bg-white"}`}>
                  <div className="max-w-md text-center">
                    <div className={`w-12 h-12 flex items-center justify-center mb-5 mx-auto ${feature.media ? "bg-white" : "bg-black"}`}>
                      <LucideIcon name={feature.icon} className={feature.media ? "text-black" : "text-white"} size={24} />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${feature.media ? "text-white" : "text-black"}`}>
                      {feature.title}
                    </h3>
                    <p className={`leading-relaxed ${feature.media ? "text-gray-200" : "text-gray-600"}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Dot indicators */}
      {features.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
