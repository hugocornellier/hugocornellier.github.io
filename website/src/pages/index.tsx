'use client'

import type { JSX } from 'react'
import React, { useEffect, useState } from 'react'
import Layout from '@theme/Layout';
import Image from "next/image"
import Link from "next/link"

const linkStyle: React.CSSProperties = {
    backgroundColor: '#1e1e1e',
    padding: '15px 25px',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '200px',
    transition: 'background-color 0.3s',
};

export default function Home(): JSX.Element {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.protocol !== 'https:') {
            window.location.href =
                'https:' + window.location.href.substring(window.location.protocol.length);
        }
    }, []);

    const [showDownloads, setShowDownloads] = useState(false)

    // Inline SVG Icons (replacing Lucide React)
    const DownloadIcon = ({ style }: { style?: React.CSSProperties }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={style}
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    )

    const BookOpenIcon = ({ style }: { style?: React.CSSProperties }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={style}
        >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    )

    const SmartphoneIcon = ({ style }: { style?: React.CSSProperties }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={style}
        >
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
        </svg>
    )

    const MonitorIcon = ({ style }: { style?: React.CSSProperties }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={style}
        >
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <path d="M12 17v4" />
            <path d="M8 21h8" />
        </svg>
    )

    // Define styles for hover effects using state
    const [downloadBtnHover, setDownloadBtnHover] = useState(false)
    const [docBtnHover, setDocBtnHover] = useState(false)
    const [mobileBtnHover1, setMobileBtnHover1] = useState(false)
    const [mobileBtnHover2, setMobileBtnHover2] = useState(false)
    const [desktopBtnHover1, setDesktopBtnHover1] = useState(false)
    const [desktopBtnHover2, setDesktopBtnHover2] = useState(false)
    const [desktopBtnHover3, setDesktopBtnHover3] = useState(false)

    return (
        <Layout wrapperClassName="al-download-page">
            <main
                style={{
                    backgroundColor: "#18181b", // bg-zinc-900
                    color: "#ffffff", // text-white
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "24px", // p-6
                }}
            >
                {/* Embedded Styles for Animations and Media Queries */}
                <style>{`
        @keyframes fade-in-slide-from-top {
          from {
            opacity: 0;
            transform: translateY(-16px); /* slide-in-from-top-4 */
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-slide {
          animation: fade-in-slide-from-top 0.5s ease-out forwards; /* duration-500 */
        }

        /* Media query for desktop grid layout */
        @media (min-width: 768px) { /* md breakpoint */
          .desktop-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr)); /* md:grid-cols-2 */
            gap: 24px; /* gap-6 */
          }
        }
      `}</style>
                <div
                    style={{
                        maxWidth: "960px", // max-w-4xl
                        margin: "0 auto", // mx-auto
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        gap: "48px", // space-y-12
                    }}
                >
                    {/* Logo and Header */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "24px", // space-y-6
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Image
                                src="https://i.imgur.com/CmsixvW.png"
                                alt="AgeLapse Logo"
                                width={200}
                                height={200}
                                style={{ filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))" }} // drop-shadow-lg
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px", // space-y-4
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: "2.5rem", // text-4xl
                                    fontWeight: "700", // font-bold
                                    background: "linear-gradient(to right, #ffffff, #d4d4d8)", // bg-gradient-to-r from-white to-zinc-300
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Download AgeLapse
                            </h1>
                            <p
                                style={{
                                    fontSize: "1.25rem", // text-xl
                                    color: "#d4d4d8", // text-zinc-300
                                    maxWidth: "640px", // max-w-2xl
                                    margin: "0 auto", // mx-auto
                                    lineHeight: "1.625", // leading-relaxed
                                }}
                            >
                                Easily create stabilized "photo-a-day" projects with AgeLapse.
                                <br />
                                <span
                                    style={{
                                        color: "#a1a1aa", // text-zinc-400
                                        fontSize: "1.125rem", // text-lg
                                        marginTop: "8px", // mt-2
                                        display: "block",
                                    }}
                                >
                100% free and open source. Forever.
              </span>
                            </p>
                        </div>
                    </div>

                    {/* Main Action Buttons */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "16px", // gap-4
                            marginTop: "32px", // mt-8
                            width: "100%",
                            maxWidth: "384px", // max-w-sm
                            margin: "0 auto", // mx-auto
                        }}
                    >
                        <button
                            onClick={() => setShowDownloads(!showDownloads)}
                            onMouseEnter={() => setDownloadBtnHover(true)}
                            onMouseLeave={() => setDownloadBtnHover(false)}
                            onFocus={() => setDownloadBtnHover(true)}
                            onBlur={() => setDownloadBtnHover(false)}
                            style={{
                                width: "100%",
                                backgroundColor: downloadBtnHover ? "#1d4ed8" : "#2563eb", // hover:bg-blue-700 : bg-blue-600
                                color: "#ffffff",
                                fontWeight: "600", // font-semibold
                                padding: "12px 32px", // py-3 px-8
                                borderRadius: "8px", // rounded-lg
                                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", // shadow-lg
                                transition: "all 0.3s ease-in-out", // transition-all duration-300
                                transform: downloadBtnHover ? "scale(1.05)" : "scale(1)", // transform hover:scale-105
                                outline: "none", // focus:outline-none
                                border: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxSizing: "border-box",
                                ...(downloadBtnHover && {
                                    boxShadow: "0 0 0 2px #3b82f6, 0 0 0 4px #18181b", // focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900
                                }),
                            }}
                        >
                            <DownloadIcon style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                            {showDownloads ? "Hide Downloads" : "Download"}
                        </button>
                        <Link
                            href="https://www.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setDocBtnHover(true)}
                            onMouseLeave={() => setDocBtnHover(false)}
                            onFocus={() => setDocBtnHover(true)}
                            onBlur={() => setDocBtnHover(false)}
                            style={{
                                width: "100%",
                                backgroundColor: docBtnHover ? "#15803d" : "#16a34a", // hover:bg-green-700 : bg-green-600
                                color: "#ffffff",
                                fontWeight: "600", // font-semibold
                                padding: "12px 32px", // py-3 px-8
                                borderRadius: "8px", // rounded-lg
                                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", // shadow-lg
                                transition: "all 0.3s ease-in-out", // transition-all duration-300
                                transform: docBtnHover ? "scale(1.05)" : "scale(1)", // transform hover:scale-105
                                outline: "none", // focus:outline-none
                                textDecoration: "none", // Remove underline from Link
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxSizing: "border-box",
                                ...(docBtnHover && {
                                    boxShadow: "0 0 0 2px #22c55e, 0 0 0 4px #18181b", // focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-zinc-900
                                }),
                            }}
                        >
                            <BookOpenIcon style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                            Documentation
                        </Link>
                    </div>

                    {/* Conditional Download Sections */}
                    {showDownloads && (
                        <div
                            className="animate-fade-in-slide" // Apply the animation class
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "48px", // space-y-12
                                marginTop: "48px", // mt-12
                            }}
                        >
                            {/* Mobile Section */}
                            <div
                                style={{
                                    borderRadius: "12px", // rounded-xl
                                    border: "1px solid #52525b", // border border-zinc-700
                                    backgroundColor: "rgba(39, 39, 42, 0.5)", // bg-zinc-800/50
                                    backdropFilter: "blur(8px)", // backdrop-blur-sm
                                }}
                            >
                                <div style={{ padding: "32px" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "12px", // gap-3
                                            marginBottom: "24px", // mb-6
                                        }}
                                    >
                                        <SmartphoneIcon style={{ width: "24px", height: "24px", color: "#d4d4d8" }} />
                                        <h2
                                            style={{
                                                fontSize: "1.5rem", // text-2xl
                                                fontWeight: "600", // font-semibold
                                                color: "#e4e4e7", // text-zinc-100
                                            }}
                                        >
                                            Mobile
                                        </h2>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            justifyContent: "center",
                                            gap: "16px", // gap-4
                                        }}
                                    >
                                        <Link
                                            href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-android/agelapse-android-v1.5.2.apk"
                                            onMouseEnter={() => setMobileBtnHover1(true)}
                                            onMouseLeave={() => setMobileBtnHover1(false)}
                                            onFocus={() => setMobileBtnHover1(true)}
                                            onBlur={() => setMobileBtnHover1(false)}
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                whiteSpace: "nowrap",
                                                borderRadius: "6px", // rounded-md
                                                fontSize: "0.875rem", // text-sm
                                                fontWeight: "500", // font-medium
                                                height: "48px", // h-12
                                                padding: "0 24px", // px-6
                                                backgroundColor: mobileBtnHover1 ? "#52525b" : "#3f3f46", // hover:bg-zinc-600 : bg-zinc-700
                                                color: "#ffffff",
                                                border: "1px solid #52525b", // border border-zinc-600
                                                transition: "all 0.2s ease-in-out", // transition-all duration-200
                                                transform: mobileBtnHover1 ? "scale(1.05)" : "scale(1)", // hover:scale-105
                                                outline: "none",
                                                textDecoration: "none",
                                                boxSizing: "border-box",
                                            }}
                                        >
                                            <Image
                                                src="https://img.icons8.com/ios-glyphs/24/ffffff/android-os.png"
                                                alt="Android"
                                                width={24}
                                                height={24}
                                                style={{ marginRight: "8px" }}
                                            />
                                            Download for Android (.apk)
                                        </Link>
                                        <Link
                                            href="https://apps.apple.com/ca/app/agelapse/id6503668205"
                                            onMouseEnter={() => setMobileBtnHover2(true)}
                                            onMouseLeave={() => setMobileBtnHover2(false)}
                                            onFocus={() => setMobileBtnHover2(true)}
                                            onBlur={() => setMobileBtnHover2(false)}
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                whiteSpace: "nowrap",
                                                borderRadius: "6px", // rounded-md
                                                fontSize: "0.875rem", // text-sm
                                                fontWeight: "500", // font-medium
                                                height: "48px", // h-12
                                                padding: "0 24px", // px-6
                                                backgroundColor: mobileBtnHover2 ? "#52525b" : "#3f3f46", // hover:bg-zinc-600 : bg-zinc-700
                                                color: "#ffffff",
                                                border: "1px solid #52525b", // border border-zinc-600
                                                transition: "all 0.2s ease-in-out", // transition-all duration-200
                                                transform: mobileBtnHover2 ? "scale(1.05)" : "scale(1)", // hover:scale-105
                                                outline: "none",
                                                textDecoration: "none",
                                                boxSizing: "border-box",
                                            }}
                                        >
                                            <Image
                                                src="https://img.icons8.com/ios-glyphs/24/ffffff/mac-os.png"
                                                alt="iOS"
                                                width={24}
                                                height={24}
                                                style={{ marginRight: "8px" }}
                                            />
                                            Download on the App Store
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Section */}
                            <div
                                style={{
                                    borderRadius: "12px", // rounded-xl
                                    border: "1px solid #52525b", // border border-zinc-700
                                    backgroundColor: "rgba(39, 39, 42, 0.5)", // bg-zinc-800/50
                                    backdropFilter: "blur(8px)", // backdrop-blur-sm
                                }}
                            >
                                <div style={{ padding: "32px" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "12px", // gap-3
                                            marginBottom: "24px", // mb-6
                                        }}
                                    >
                                        <MonitorIcon style={{ width: "24px", height: "24px", color: "#d4d4d8" }} />
                                        <h2
                                            style={{
                                                fontSize: "1.5rem", // text-2xl
                                                fontWeight: "600", // font-semibold
                                                color: "#e4e4e7", // text-zinc-100
                                            }}
                                        >
                                            Desktop
                                        </h2>
                                    </div>
                                    <div
                                        className="desktop-grid" // Apply media query class
                                        style={{
                                            gap: "24px", // gap-6
                                            maxWidth: "640px", // max-w-3xl
                                            margin: "0 auto", // mx-auto
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "16px", // space-y-4
                                            }}
                                        >
                                            <Link
                                                href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-mac-arm64/AgeLapse.v0.4.0.Mac.arm64.zip"
                                                onMouseEnter={() => setDesktopBtnHover1(true)}
                                                onMouseLeave={() => setDesktopBtnHover1(false)}
                                                onFocus={() => setDesktopBtnHover1(true)}
                                                onBlur={() => setDesktopBtnHover1(false)}
                                                style={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    whiteSpace: "nowrap",
                                                    borderRadius: "6px", // rounded-md
                                                    fontSize: "0.875rem", // text-sm
                                                    fontWeight: "500", // font-medium
                                                    height: "48px", // h-12
                                                    padding: "0 24px", // px-6
                                                    width: "100%",
                                                    backgroundColor: desktopBtnHover1 ? "#52525b" : "#3f3f46", // hover:bg-zinc-600 : bg-zinc-700
                                                    color: "#ffffff",
                                                    border: "1px solid #52525b", // border border-zinc-600
                                                    transition: "all 0.2s ease-in-out", // transition-all duration-200
                                                    transform: desktopBtnHover1 ? "scale(1.05)" : "scale(1)", // hover:scale-105
                                                    outline: "none",
                                                    textDecoration: "none",
                                                    boxSizing: "border-box",
                                                }}
                                            >
                                                <Image
                                                    src="https://img.icons8.com/ios-glyphs/24/ffffff/mac-client.png"
                                                    alt="macOS Apple Silicon"
                                                    width={24}
                                                    height={24}
                                                    style={{ marginRight: "8px" }}
                                                />
                                                Download for Silicon Macs (arm64)
                                            </Link>
                                            <Link
                                                href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-mac-x86_64/AgeLapse.v0.4.0.Mac.x86_64.zip"
                                                onMouseEnter={() => setDesktopBtnHover2(true)}
                                                onMouseLeave={() => setDesktopBtnHover2(false)}
                                                onFocus={() => setDesktopBtnHover2(true)}
                                                onBlur={() => setDesktopBtnHover2(false)}
                                                style={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    whiteSpace: "nowrap",
                                                    borderRadius: "6px", // rounded-md
                                                    fontSize: "0.875rem", // text-sm
                                                    fontWeight: "500", // font-medium
                                                    height: "48px", // h-12
                                                    padding: "0 24px", // px-6
                                                    width: "100%",
                                                    backgroundColor: desktopBtnHover2 ? "#52525b" : "#3f3f46", // hover:bg-zinc-600 : bg-zinc-700
                                                    color: "#ffffff",
                                                    border: "1px solid #52525b", // border border-zinc-600
                                                    transition: "all 0.2s ease-in-out", // transition-all duration-200
                                                    transform: desktopBtnHover2 ? "scale(1.05)" : "scale(1)", // hover:scale-105
                                                    outline: "none",
                                                    textDecoration: "none",
                                                    boxSizing: "border-box",
                                                }}
                                            >
                                                <Image
                                                    src="https://img.icons8.com/ios-glyphs/24/ffffff/mac-client.png"
                                                    alt="macOS Intel"
                                                    width={24}
                                                    height={24}
                                                    style={{ marginRight: "8px" }}
                                                />
                                                Download for Intel Macs (x86_64)
                                            </Link>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <Link
                                                href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-windows/AgeLapse-0.4.0.exe"
                                                onMouseEnter={() => setDesktopBtnHover3(true)}
                                                onMouseLeave={() => setDesktopBtnHover3(false)}
                                                onFocus={() => setDesktopBtnHover3(true)}
                                                onBlur={() => setDesktopBtnHover3(false)}
                                                style={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    whiteSpace: "nowrap",
                                                    borderRadius: "6px", // rounded-md
                                                    fontSize: "0.875rem", // text-sm
                                                    fontWeight: "500", // font-medium
                                                    height: "48px", // h-12
                                                    padding: "0 24px", // px-6
                                                    width: "100%",
                                                    backgroundColor: desktopBtnHover3 ? "#52525b" : "#3f3f46", // hover:bg-zinc-600 : bg-zinc-700
                                                    color: "#ffffff",
                                                    border: "1px solid #52525b", // border border-zinc-600
                                                    transition: "all 0.2s ease-in-out", // transition-all duration-200
                                                    transform: desktopBtnHover3 ? "scale(1.05)" : "scale(1)", // hover:scale-105
                                                    outline: "none",
                                                    textDecoration: "none",
                                                    boxSizing: "border-box",
                                                }}
                                            >
                                                <Image
                                                    src="https://img.icons8.com/ios-glyphs/24/ffffff/windows-10.png"
                                                    alt="Windows"
                                                    width={24}
                                                    height={24}
                                                    style={{ marginRight: "8px" }}
                                                />
                                                Download for Windows (.exe)
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </Layout>
    );
}