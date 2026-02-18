import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CaseStat {
  label: string
  value: string
}

interface CaseStudy {
  id: string
  title: string
  client: string
  headline: string
  summary: string
  stats: CaseStat[]
  images?: string[]
  results: string[]
}

interface CasesCarouselProps {
  cases: CaseStudy[]
  lang: string
  viewMoreLabel: string
}

export function CasesCarousel({ cases, lang, viewMoreLabel }: CasesCarouselProps) {
  const [activeImageIndex, setActiveImageIndex] = React.useState<Record<number, number>>({})

  const getActiveImage = (slideIndex: number) => activeImageIndex[slideIndex] ?? 0

  const setActiveImage = (slideIndex: number, imageIndex: number) => {
    setActiveImageIndex(prev => ({ ...prev, [slideIndex]: imageIndex }))
  }

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className="w-full"
    >
      <CarouselContent>
        {cases.map((cs, slideIndex) => {
          const images = cs.images ?? []
          const active = getActiveImage(slideIndex)

          return (
            <CarouselItem key={cs.id}>
              <a
                href={`/${lang}/impacto/${cs.id}`}
                className="group block"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Images */}
                  <div className="lg:w-1/2 flex flex-col gap-3">
                    {/* Main image */}
                    <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                      {images.length > 0 ? (
                        <img
                          src={images[active]}
                          alt={`${cs.title} - ${active + 1}`}
                          className="w-full h-full object-cover transition-opacity duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                          <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {/* Preview thumbnails */}
                    {images.length > 1 && (
                      <div className="grid grid-cols-2 gap-3">
                        {images.slice(0, 4).map((img, imgIndex) => (
                          <button
                            key={imgIndex}
                            type="button"
                            onClick={(e) => {
                              e.preventDefault()
                              setActiveImage(slideIndex, imgIndex)
                            }}
                            className={`aspect-[16/10] bg-gray-100 overflow-hidden transition-all duration-200 ${
                              imgIndex === active
                                ? "ring-2 ring-black"
                                : "opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img
                              src={img}
                              alt={`${cs.title} - preview ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: Text */}
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <p className="text-sm text-gray-500 mb-2">{cs.client}</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 group-hover:underline">
                      {cs.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{cs.summary}</p>

                    {cs.stats.length > 0 && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {cs.stats.slice(0, 3).map((stat, i) => (
                          <div key={i}>
                            <p className="text-xl font-bold text-black font-['Orbitron',sans-serif]">
                              {stat.value}
                            </p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <span className="inline-flex items-center text-sm font-semibold text-black group-hover:translate-x-1 transition-transform duration-200">
                      {viewMoreLabel} →
                    </span>
                  </div>
                </div>
              </a>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      {cases.length > 1 && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  )
}
