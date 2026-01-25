'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { slides } from '@/components/pitch-deck/slides'
import { AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PitchDeckPage() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, [])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }, [])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') nextSlide()
            if (e.key === 'ArrowLeft') prevSlide()
            if (e.key === 'f') toggleFullscreen()
            if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false)
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [nextSlide, prevSlide, isFullscreen])

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`)
            })
            setIsFullscreen(true)
        } else {
            document.exitFullscreen()
            setIsFullscreen(false)
        }
    }

    const SlideComponent = slides[currentSlide]

    return (
        <main className={`fixed inset-0 bg-black flex items-center justify-center transition-all duration-500 ${isFullscreen ? 'p-0' : 'p-4 md:p-8 lg:p-12'}`}>
            <div className={`relative w-full h-full max-w-[1920px] max-h-[1080px] aspect-video bg-white overflow-hidden shadow-2xl transition-all duration-500 ${isFullscreen ? 'rounded-0' : 'rounded-[2rem]'}`}>

                {/* Navigation Layer */}
                <div className="absolute inset-0 z-50 pointer-events-none">
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 pointer-events-auto bg-black/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={prevSlide}
                            className="text-white hover:bg-white/20 h-10 w-10"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>

                        <div className="flex gap-2">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-[#11D4D8]' : 'w-2 bg-white/30'}`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={nextSlide}
                            className="text-white hover:bg-white/20 h-10 w-10"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>

                        <div className="w-px h-6 bg-white/20 mx-2" />

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleFullscreen}
                            className="text-white hover:bg-white/20 h-10 w-10"
                        >
                            <Maximize2 className="w-5 h-5" />
                        </Button>
                    </div>

                    {!isFullscreen && (
                        <div className="absolute top-8 left-8 pointer-events-auto">
                            <Button
                                variant="outline"
                                className="bg-white/10 border-white/20 text-white backdrop-blur-md hover:bg-white/20"
                                onClick={() => window.history.back()}
                            >
                                <X className="w-4 h-4 mr-2" /> Exit Presentation
                            </Button>
                        </div>
                    )}

                    <div className="absolute top-8 right-8 pointer-events-auto text-white/40 font-bold tracking-widest text-xs">
                        {currentSlide + 1} / {slides.length}
                    </div>
                </div>

                {/* Slide Content */}
                <div className="w-full h-full">
                    <AnimatePresence mode="wait">
                        <SlideComponent key={currentSlide} />
                    </AnimatePresence>
                </div>

            </div>
        </main>
    )
}
