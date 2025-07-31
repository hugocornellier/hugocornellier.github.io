/* eslint-disable @typescript-eslint/consistent-type-assertions */
'use client'

import type { JSX } from 'react'
import React, { useEffect, useState } from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'

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
}

export default function Home(): JSX.Element {
    useEffect(() => {
        // only enforce HTTPS on real domains, not on localhost HTTP
        if (
            typeof window !== 'undefined' &&
            window.location.protocol === 'http:' &&
            window.location.hostname !== 'localhost'
        ) {
            window.location.href =
                'https:' + window.location.href.substring(window.location.protocol.length);
        }
    }, []);

    const [showDownloads, setShowDownloads] = useState(false)

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
                    backgroundColor: '#18181b', // bg-zinc-900
                    color: '#ffffff', // text-white
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '24px', // p-6
                }}
            >
                <style>{`
          @keyframes fade-in-slide-from-top {
            from {
              opacity: 0;
              transform: translateY(-16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-slide {
            animation: fade-in-slide-from-top 0.5s ease-out forwards;
          }

          @media (min-width: 768px) {
            .desktop-grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 24px;
            }
          }
        `}</style>

                <div
                    style={{
                        maxWidth: '960px',
                        margin: '0 auto',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '48px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src="https://i.imgur.com/CmsixvW.png"
                                alt="AgeLapse Logo"
                                style={{
                                    filter:
                                        'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                            }}
                        >
                            <p
                                style={{
                                    fontSize: '1.25rem',
                                    color: '#d4d4d8',
                                    maxWidth: '640px',
                                    margin: '0 auto',
                                    lineHeight: '1.625',
                                }}
                            >
                                Easily create stabilized &quot;photo-a-day&quot; projects with
                                AgeLapse.
                                <br />
                                <span
                                    style={{
                                        color: '#a1a1aa',
                                        fontSize: '1.125rem',
                                        marginTop: '8px',
                                        display: 'block',
                                    }}
                                >
                                  100% free and open source.
                                </span>
                            </p>
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '16px',
                            marginTop: '32px',
                            width: '100%',
                            maxWidth: '384px',
                            margin: '0 auto',
                        }}
                    >
                        <button
                            onClick={() => setShowDownloads(!showDownloads)}
                            onMouseEnter={() => setDownloadBtnHover(true)}
                            onMouseLeave={() => setDownloadBtnHover(false)}
                            onFocus={() => setDownloadBtnHover(true)}
                            onBlur={() => setDownloadBtnHover(false)}
                            style={{
                                width: '100%',
                                backgroundColor: downloadBtnHover ? '#1d4ed8' : '#2563eb',
                                color: '#ffffff',
                                fontWeight: 600,
                                padding: '12px 32px',
                                borderRadius: '8px',
                                boxShadow:
                                    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                                transition: 'all 0.3s ease-in-out',
                                transform: downloadBtnHover ? 'scale(1.05)' : 'scale(1)',
                                outline: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxSizing: 'border-box',
                                ...(downloadBtnHover && {
                                    boxShadow: '0 0 0 2px #3b82f6, 0 0 0 4px #18181b',
                                }),
                            }}
                        >
                            <DownloadIcon style={{ width: 20, height: 20, marginRight: 8 }} />
                            {showDownloads ? 'Hide Downloads' : 'Download'}
                        </button>

                        <Link
                            href="/docs/intro"
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setDocBtnHover(true)}
                            onMouseLeave={() => setDocBtnHover(false)}
                            onFocus={() => setDocBtnHover(true)}
                            onBlur={() => setDocBtnHover(false)}
                            style={{
                                width: '100%',
                                backgroundColor: docBtnHover ? '#15803d' : '#16a34a',
                                color: '#ffffff',
                                fontWeight: 600,
                                fontSize: '13px',
                                padding: '12px 32px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                boxShadow:
                                    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                                transition: 'all 0.3s ease-in-out',
                                transform: docBtnHover ? 'scale(1.05)' : 'scale(1)',
                                outline: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxSizing: 'border-box',
                                ...(docBtnHover && {
                                    boxShadow: '0 0 0 2px #3b82f6, 0 0 0 4px #18181b',
                                }),
                            }}
                        >
                            <BookOpenIcon style={{ width: 20, height: 20, marginRight: 8 }} />
                            Documentation
                        </Link>
                    </div>

                    {showDownloads && (
                        <div
                            className="animate-fade-in-slide"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '48px',
                                marginTop: '48px',
                            }}
                        >
                            <div
                                style={{
                                    borderRadius: '12px',
                                    border: '1px solid #52525b',
                                    backgroundColor: 'rgba(39, 39, 42, 0.5)',
                                    backdropFilter: 'blur(8px)',
                                }}
                            >
                                <div style={{ padding: '32px' }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '12px',
                                            marginBottom: '24px',
                                        }}
                                    >
                                        <SmartphoneIcon
                                            style={{ width: 24, height: 24, color: '#d4d4d8' }}
                                        />
                                        <h2
                                            style={{
                                                fontSize: '1.5rem',
                                                fontWeight: 600,
                                                color: '#e4e4e7',
                                            }}
                                        >
                                            Mobile
                                        </h2>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            justifyContent: 'center',
                                            gap: '16px',
                                        }}
                                    >
                                        <Link
                                            href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-android/agelapse-android-v1.5.2.apk"
                                            onMouseEnter={() => setMobileBtnHover1(true)}
                                            onMouseLeave={() => setMobileBtnHover1(false)}
                                            onFocus={() => setMobileBtnHover1(true)}
                                            onBlur={() => setMobileBtnHover1(false)}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                whiteSpace: 'nowrap',
                                                borderRadius: '6px',
                                                fontSize: '0.875rem',
                                                fontWeight: 500,
                                                height: '48px',
                                                padding: '0 24px',
                                                backgroundColor: mobileBtnHover1 ? '#52525b' : '#3f3f46',
                                                color: '#ffffff',
                                                border: '1px solid #52525b',
                                                transition: 'all 0.2s ease-in-out',
                                                transform: mobileBtnHover1 ? 'scale(1.05)' : 'scale(1)',
                                                outline: 'none',
                                                textDecoration: 'none',
                                                boxSizing: 'border-box',
                                            }}
                                        >
                                            <img
                                                src="https://img.icons8.com/ios-glyphs/24/ffffff/android-os.png"
                                                alt="Android"
                                                width={24}
                                                height={24}
                                                style={{ marginRight: 8 }}
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
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                whiteSpace: 'nowrap',
                                                borderRadius: '6px',
                                                fontSize: '0.875rem',
                                                fontWeight: 500,
                                                height: '48px',
                                                padding: '0 24px',
                                                backgroundColor: mobileBtnHover2 ? '#52525b' : '#3f3f46',
                                                color: '#ffffff',
                                                border: '1px solid #52525b',
                                                transition: 'all 0.2s ease-in-out',
                                                transform: mobileBtnHover2 ? 'scale(1.05)' : 'scale(1)',
                                                outline: 'none',
                                                textDecoration: 'none',
                                                boxSizing: 'border-box',
                                            }}
                                        >
                                            <img
                                                src="https://img.icons8.com/ios-glyphs/24/ffffff/mac-os.png"
                                                alt="iOS"
                                                width={24}
                                                height={24}
                                                style={{ marginRight: 8 }}
                                            />
                                            Download on the App Store
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div
                                style={{
                                    borderRadius: '12px',
                                    border: '1px solid #52525b',
                                    backgroundColor: 'rgba(39, 39, 42, 0.5)',
                                    backdropFilter: 'blur(8px)',
                                }}
                            >
                                <div style={{ padding: '32px' }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '12px',
                                            marginBottom: '24px',
                                        }}
                                    >
                                        <MonitorIcon
                                            style={{ width: 24, height: 24, color: '#d4d4d8' }}
                                        />
                                        <h2
                                            style={{
                                                fontSize: '1.5rem',
                                                fontWeight: 600,
                                                color: '#e4e4e7',
                                            }}
                                        >
                                            Desktop
                                        </h2>
                                    </div>
                                    <div
                                        className="desktop-grid"
                                        style={{
                                            gap: '24px',
                                            maxWidth: '640px',
                                            margin: '0 auto',
                                        }}
                                    >
                                        {/* macOS */}
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '16px',
                                            }}
                                        >
                                            <Link
                                                href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-mac-arm64/AgeLapse.v0.4.0.Mac.arm64.zip"
                                                onMouseEnter={() => setDesktopBtnHover1(true)}
                                                onMouseLeave={() => setDesktopBtnHover1(false)}
                                                onFocus={() => setDesktopBtnHover1(true)}
                                                onBlur={() => setDesktopBtnHover1(false)}
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    whiteSpace: 'nowrap',
                                                    borderRadius: '6px',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 500,
                                                    height: '48px',
                                                    padding: '0 24px',
                                                    width: '100%',
                                                    backgroundColor: desktopBtnHover1
                                                        ? '#52525b'
                                                        : '#3f3f46',
                                                    color: '#ffffff',
                                                    border: '1px solid #52525b',
                                                    transition: 'all 0.2s ease-in-out',
                                                    transform: desktopBtnHover1
                                                        ? 'scale(1.05)'
                                                        : 'scale(1)',
                                                    outline: 'none',
                                                    textDecoration: 'none',
                                                    boxSizing: 'border-box',
                                                }}
                                            >
                                                <img
                                                    src="https://img.icons8.com/ios-glyphs/24/ffffff/mac-client.png"
                                                    alt="macOS Apple Silicon"
                                                    width={24}
                                                    height={24}
                                                    style={{ marginRight: 8 }}
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
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    whiteSpace: 'nowrap',
                                                    borderRadius: '6px',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 500,
                                                    height: '48px',
                                                    padding: '0 24px',
                                                    width: '100%',
                                                    backgroundColor: desktopBtnHover2
                                                        ? '#52525b'
                                                        : '#3f3f46',
                                                    color: '#ffffff',
                                                    border: '1px solid #52525b',
                                                    transition: 'all 0.2s ease-in-out',
                                                    transform: desktopBtnHover2
                                                        ? 'scale(1.05)'
                                                        : 'scale(1)',
                                                    outline: 'none',
                                                    textDecoration: 'none',
                                                    boxSizing: 'border-box',
                                                }}
                                            >
                                                <img
                                                    src="https://img.icons8.com/ios-glyphs/24/ffffff/mac-client.png"
                                                    alt="macOS Intel"
                                                    width={24}
                                                    height={24}
                                                    style={{ marginRight: 8 }}
                                                />
                                                Download for Intel Macs (x86_64)
                                            </Link>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Link
                                                href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-windows/AgeLapse-0.4.0.exe"
                                                onMouseEnter={() => setDesktopBtnHover3(true)}
                                                onMouseLeave={() => setDesktopBtnHover3(false)}
                                                onFocus={() => setDesktopBtnHover3(true)}
                                                onBlur={() => setDesktopBtnHover3(false)}
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    whiteSpace: 'nowrap',
                                                    borderRadius: '6px',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 500,
                                                    height: '48px',
                                                    padding: '0 24px',
                                                    width: '100%',
                                                    backgroundColor: desktopBtnHover3
                                                        ? '#52525b'
                                                        : '#3f3f46',
                                                    color: '#ffffff',
                                                    border: '1px solid #52525b',
                                                    transition: 'all 0.2s ease-in-out',
                                                    transform: desktopBtnHover3
                                                        ? 'scale(1.05)'
                                                        : 'scale(1)',
                                                    outline: 'none',
                                                    textDecoration: 'none',
                                                    boxSizing: 'border-box',
                                                }}
                                            >
                                                <img
                                                    src="https://img.icons8.com/ios-glyphs/24/ffffff/windows-10.png"
                                                    alt="Windows"
                                                    width={24}
                                                    height={24}
                                                    style={{ marginRight: 8 }}
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
    )
}