"use client"

import { ArrowDown, Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Component() {
    const beforeRef = useRef<HTMLVideoElement>(null)
    const afterRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const before = beforeRef.current
        const after = afterRef.current
        if (!before || !after) return

        let ready = 0
        let syncInterval: NodeJS.Timeout | undefined

        const start = () => {
            before.currentTime = 0
            after.currentTime = 0
            void before.play()
            void after.play()

            syncInterval = setInterval(() => {
                const diff = before.currentTime - after.currentTime
                if (Math.abs(diff) > 0.02) after.currentTime = before.currentTime
            }, 100)
        }

        const onReady = () => {
            if (++ready === 2) start()
        }

        before.addEventListener("canplaythrough", onReady)
        after.addEventListener("canplaythrough", onReady)

        return () => {
            before.removeEventListener("canplaythrough", onReady)
            after.removeEventListener("canplaythrough", onReady)
            if (syncInterval) clearInterval(syncInterval)
        }
    }, [])

    return (
        <div className="bg-gradient-to-br from-slate-900 to-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="max-w-4xl w-full relative z-10">
                <div className="max-w-6xl w-full border border-white/20 rounded-3xl bg-black/40 backdrop-blur-xl p-8 shadow-2xl flex flex-col items-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>

                    <div className="group mb-12 w-full md:w-3/4 relative z-10">
                        <div className="mb-6 text-center">
              <span className="inline-block bg-gradient-to-r from-slate-600 to-slate-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20">
                <Sparkles className="w-4 h-4 inline mr-2" />
                BEFORE
              </span>
                        </div>
                        <div className="relative">
                            <div className="relative bg-black rounded-2xl border border-slate-300/30 overflow-hidden h-80 shadow-2xl flex items-center justify-center backdrop-blur-sm transform group-hover:scale-[1.02] transition-all duration-500">
                                <video
                                    ref={beforeRef}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-5/6 h-5/6 object-contain filter group-hover:brightness-110 transition-all duration-500"
                                >
                                    <source src="../../public/videos/raw_15fps.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-12 relative z-10">
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-6 drop-shadow-lg">
                            Easily turn this...
                        </h1>
                        <div className="flex items-center justify-center gap-6 mb-6">
                            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent flex-1 max-w-32"></div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-500 rounded-full blur-md opacity-50 animate-pulse"></div>
                                <ArrowDown className="w-10 h-10 text-white relative z-10 drop-shadow-lg" />
                            </div>
                            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent flex-1 max-w-32"></div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent drop-shadow-lg">
                            into this!
                        </h2>
                    </div>

                    <div className="group w-full md:w-3/4 relative z-10">
                        <div className="relative">
                            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-300/30 overflow-hidden h-80 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                                <video
                                    ref={afterRef}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover filter group-hover:brightness-110 transition-all duration-500"
                                >
                                    <source src="../../public/videos/stab_15fps.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
              <span className="inline-block bg-gradient-to-r from-slate-600 to-slate-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20">
                <Sparkles className="w-4 h-4 inline mr-2" />
                AFTER1
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}