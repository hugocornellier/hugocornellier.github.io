/* Component.tsx */
"use client"

import { ArrowDown, Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Component() {
    const beforeRef = useRef<HTMLVideoElement>(null)
    const afterRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const before = beforeRef.current
        const after  = afterRef.current
        if (!before || !after) return

        let ready = 0
        let syncInterval: NodeJS.Timeout | undefined

        const start = () => {
            before.currentTime = 0
            after.currentTime  = 0
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
        <>
            <div className="outer-container">
                {/* blurred background blobs */}
                <div className="blur-circle blur-1" />
                <div className="blur-circle blur-2" />
                <div className="blur-circle blur-3" />

                <div className="inner-wrapper">
                    <div className="card">
                        <div className="shine-overlay" />

                        {/* BEFORE */}
                        <div className="section group">
                            <div className="badge">
                                <Sparkles className="icon" />
                                BEFORE
                            </div>

                            <div className="video-container">
                                <div className="video-frame">
                                    <video
                                        ref={beforeRef}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="video"
                                    >
                                        <source src="https://github.com/hugocornellier/hugocornellier.github.io/raw/refs/heads/main/website/public/videos/raw_15fps.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>

                        {/* arrows / heading */}
                        <div className="arrows">
                            <h1 className="gradient-text-1">
                                Easily turn this...
                            </h1>

                            <div className="arrow-row">
                                <div className="line" />
                                <div className="arrow-icon">
                                    <ArrowDown className="arrow" />
                                </div>
                                <div className="line" />
                            </div>

                            <h2 className="gradient-text-2">
                                ...into this!
                            </h2>
                        </div>

                        {/* AFTER */}
                        <div className="section group">
                            <div className="video-container">
                                <div className="video-frame after">
                                    <video
                                        ref={afterRef}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="video"
                                    >
                                        <source src="https://github.com/hugocornellier/hugocornellier.github.io/raw/refs/heads/main/website/public/videos/stab_15fps.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>

                            <div className="badge after-badge">
                                <Sparkles className="icon" />
                                AFTER
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RAW CSS  (no Tailwind) */}
            <style>{`
        /* layout */
        .outer-container {
          min-height: 100vh;
          background: #0f172a;
          background: linear-gradient(135deg, #0f172a 0%, #0f172a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }
        .inner-wrapper {
          width: 100%;
          max-width: 64rem;
          position: relative;
          z-index: 10;
        }
        .card {
          position: relative;
          overflow: hidden;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1.5rem;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          padding: 2rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .shine-overlay {
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
          pointer-events: none;
        }

        /* blurred decorative circles */
        .blur-circle {
          position: absolute;
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(80px);
          opacity: 0.2;
          animation: pulse 6s ease-in-out infinite;
        }
        .blur-1 {
          top: -10rem;
          right: -10rem;
          width: 20rem;
          height: 20rem;
          background: #a855f7;
        }
        .blur-2 {
          bottom: -10rem;
          left: -10rem;
          width: 20rem;
          height: 20rem;
          background: #3b82f6;
          animation-delay: 2s;
        }
        .blur-3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 24rem;
          height: 24rem;
          background: #f97316;
          opacity: 0.1;
          animation-delay: 4s;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.05); }
        }

        /* BEFORE & AFTER sections */
        .section {
          width: 100%;
          max-width: 75%;
          margin: 0 auto 3rem;
          text-align: center;
          position: relative;
        }
        .badge {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 700;
          background: linear-gradient(90deg, #475569, #64748b);
          color: #ffffff;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px);
          margin-bottom: 1.5rem;
        }
        .after-badge { margin-top: 1.5rem; }
        .icon { width: 1rem; height: 1rem; margin-right: 0.5rem; vertical-align: text-bottom; }

        /* video frames */
        .video-container { position: relative; }
        .video-frame {
          height: 20rem;
          border-radius: 1rem;
          border: 1px solid rgba(203, 213, 225, 0.3);
          overflow: hidden;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.9);
          transition: transform 0.5s, filter 0.5s;
        }
        .group:hover .video-frame { transform: scale(1.02); }
        .video { width: 83.333%; height: 83.333%; object-fit: contain; transition: filter 0.5s; }
        .group:hover .video { filter: brightness(1.1); }
        .after .video { width: 100%; height: 100%; object-fit: cover; }

        /* headline & arrow block */
        .arrows { text-align: center; margin-bottom: 3rem; }
        .gradient-text-1,
        .gradient-text-2 {
          font-weight: 700;
          font-size: clamp(2.5rem, 6vw, 3.75rem);
          margin-bottom: 1.5rem;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        .gradient-text-1 { background: linear-gradient(90deg, #ffffff, #e9d5ff, #ffffff); }
        .gradient-text-2 { background: linear-gradient(90deg, #ffffff, #bae6fd, #ffffff); }

        .arrow-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .line {
          flex: 1;
          max-width: 8rem;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        }
        .arrow-icon { position: relative; }
        .arrow-icon::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: #a855f7;
          filter: blur(8px);
          opacity: 0.5;
          animation: pulse 4s ease-in-out infinite;
        }
        .arrow {
          position: relative;
          width: 2.5rem;
          height: 2.5rem;
          color: #ffffff;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.6));
        }

        /* responsive tweaks */
        @media (max-width: 768px) {
          .section { max-width: 100%; }
          .gradient-text-1,
          .gradient-text-2 { font-size: 2.25rem; }
        }
      `}</style>
        </>
    )
}