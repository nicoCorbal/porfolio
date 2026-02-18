import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
}

export function CasesCarousel({ cases }: CasesCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [activeImageIndex, setActiveImageIndex] = React.useState<Record<number, number>>({})
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi])

  const getActiveImage = (slideIndex: number) => activeImageIndex[slideIndex] ?? 0

  const setActiveImage = (slideIndex: number, imageIndex: number) => {
    setActiveImageIndex(prev => ({ ...prev, [slideIndex]: imageIndex }))
  }

  return (
    <div className="relative">
      {/* Carousel viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {cases.map((cs, slideIndex) => {
            const images = cs.images ?? []
            const active = getActiveImage(slideIndex)

            return (
              <div key={cs.id} className="flex-[0_0_100%] min-w-0">
                <div className="flex flex-col lg:flex-row gap-8 px-2">
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
                            onClick={() => setActiveImage(slideIndex, imgIndex)}
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
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
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
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation */}
      {cases.length > 1 && (
        <div className="flex items-center justify-between mt-6">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="flex items-center justify-center w-10 h-10 border border-gray-300 hover:border-black transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {cases.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="flex items-center justify-center w-10 h-10 border border-gray-300 hover:border-black transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  )
}
