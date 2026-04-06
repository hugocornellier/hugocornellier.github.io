/* eslint-disable @typescript-eslint/consistent-type-assertions */
'use client'

import type { JSX } from 'react'
import React, { useEffect, useState } from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import { Download, BookOpen, Monitor, Smartphone, Apple, ChevronDown } from 'lucide-react'

export default function Home(): JSX.Element {
    useEffect(() => {
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
    const [showOlderVersions, setShowOlderVersions] = useState(false)

    const accentColor = '#66AACC'
    const accentHover = '#5599BB'
    const bgDark = '#0a0a0b'
    const bgCard = '#141418'
    const bgCardHover = '#1a1a1f'
    const borderColor = '#2a2a30'
    const textPrimary = '#ffffff'
    const textSecondary = '#a0a0a8'
    const textMuted = '#707078'

    return (
        <Layout wrapperClassName="al-download-page">
            <style>{`
                .al-download-page, .al-download-page .main-wrapper {
                    background: ${bgDark} !important;
                }
                .al-download-page .main-wrapper {
                    display: flex;
                    flex-direction: column;
                    min-height: calc(100vh - 60px);
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .fade-in { animation: fadeIn 0.4s ease-out forwards; }
                .download-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(102, 170, 204, 0.3); }
                .docs-btn:hover { background: ${bgCardHover} !important; border-color: ${accentColor} !important; }
                .platform-btn:hover { background: ${bgCardHover} !important; border-color: ${accentColor} !important; transform: translateY(-1px); }
                .glow { box-shadow: 0 0 60px rgba(102, 170, 204, 0.15); }
                .desktop-grid { grid-template-columns: repeat(2, 1fr); }
                @media (max-width: 480px) { .desktop-grid { grid-template-columns: 1fr !important; } }
            `}</style>

            <main style={{
                backgroundColor: bgDark,
                color: textPrimary,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '48px 24px',
            }}>
                <div style={{
                    maxWidth: '720px',
                    width: '100%',
                    textAlign: 'center',
                }}>
                    {/* Logo */}
                    <div style={{ marginBottom: '32px' }}>
                        <img
                            src="https://i.imgur.com/CmsixvW.png"
                            alt="AgeLapse"
                            style={{
                                maxWidth: '280px',
                                filter: 'drop-shadow(0 4px 20px rgba(102, 170, 204, 0.2))',
                            }}
                        />
                    </div>

                    {/* Tagline */}
                    <p style={{
                        fontSize: '1.25rem',
                        color: textSecondary,
                        lineHeight: 1.7,
                        marginBottom: '8px',
                        fontWeight: 400,
                    }}>
                        Create stabilized <span style={{ color: accentColor }}>"photo-a-day"</span> timelapse projects
                    </p>
                    <p style={{
                        fontSize: '0.95rem',
                        color: textMuted,
                        marginBottom: '48px',
                    }}>
                        100% free and open source
                    </p>

                    {/* CTA Buttons */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        maxWidth: '320px',
                        margin: '0 auto 48px',
                    }}>
                        <button
                            onClick={() => setShowDownloads(!showDownloads)}
                            className="download-btn"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                padding: '16px 32px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: '#000',
                                backgroundColor: accentColor,
                                border: 'none',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            <Download size={20} />
                            {showDownloads ? 'Hide Downloads' : 'Download'}
                            <ChevronDown
                                size={18}
                                style={{
                                    transition: 'transform 0.2s',
                                    transform: showDownloads ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}
                            />
                        </button>

                        <Link
                            href="/docs/intro"
                            className="docs-btn"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                padding: '14px 32px',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                color: textPrimary,
                                backgroundColor: 'transparent',
                                border: `1px solid ${borderColor}`,
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                textDecoration: 'none',
                            }}
                        >
                            <BookOpen size={18} />
                            Documentation
                        </Link>
                    </div>

                    {/* Downloads Section */}
                    {showDownloads && (
                        <div className="fade-in" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                        }}>
                            {/* Desktop */}
                            <div className="glow" style={{
                                backgroundColor: bgCard,
                                borderRadius: '16px',
                                border: `1px solid ${borderColor}`,
                                padding: '32px',
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    marginBottom: '24px',
                                }}>
                                    <Monitor size={20} style={{ color: accentColor }} />
                                    <h2 style={{
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        margin: 0,
                                        color: textPrimary,
                                    }}>Desktop</h2>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                }}>
                                    {/* macOS and Windows row */}
                                    <div className="desktop-grid" style={{
                                        display: 'grid',
                                        gap: '12px',
                                    }}>
                                        <Link
                                            href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-v2.5.1/agelapse-macos-2.5.1-universal.zip"
                                            className="platform-btn"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '10px',
                                                padding: '14px 20px',
                                                backgroundColor: bgDark,
                                                border: `1px solid ${borderColor}`,
                                                borderRadius: '10px',
                                                color: textPrimary,
                                                fontSize: '0.875rem',
                                                fontWeight: 500,
                                                textDecoration: 'none',
                                                transition: 'all 0.2s ease',
                                            }}
                                        >
                                            <Apple size={18} />
                                            macOS <span style={{ color: textMuted, fontWeight: 400 }}>(Universal)</span>
                                        </Link>

                                        <Link
                                            href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-v2.5.1/agelapse-windows-2.5.1-x64.exe"
                                            className="platform-btn"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '10px',
                                                padding: '14px 20px',
                                                backgroundColor: bgDark,
                                                border: `1px solid ${borderColor}`,
                                                borderRadius: '10px',
                                                color: textPrimary,
                                                fontSize: '0.875rem',
                                                fontWeight: 500,
                                                textDecoration: 'none',
                                                transition: 'all 0.2s ease',
                                            }}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                                            </svg>
                                            Windows <span style={{ color: textMuted, fontWeight: 400 }}>(x64)</span>
                                        </Link>
                                    </div>

                                    {/* Linux row - both options side by side */}
                                    <div className="desktop-grid" style={{
                                        display: 'grid',
                                        gap: '12px',
                                    }}>
                                        <Link
                                            href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-v2.5.1/agelapse-linux-2.5.1-x64.deb"
                                            className="platform-btn"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '10px',
                                                padding: '14px 20px',
                                                backgroundColor: bgDark,
                                                border: `1px solid ${borderColor}`,
                                                borderRadius: '10px',
                                                color: textPrimary,
                                                fontSize: '0.875rem',
                                                fontWeight: 500,
                                                textDecoration: 'none',
                                                transition: 'all 0.2s ease',
                                            }}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.002c-.06-.135-.12-.2-.184-.268-.193-.135-.406-.199-.603-.534-.166-.278-.417-.465-.525-.465h-.012c-.126-.003-.209.022-.332.133v.003c-.106.135-.091.2-.124.467-.033.2-.106.467-.148.6-.168.467-.455.867-.918 1.2-.347.199-.578.135-.765.004-.187-.131-.287-.327-.342-.467-.194-.467-.143-.915-.06-1.442-.246-.134-.616-.2-1.012-.2-.26 0-.504.026-.705.135-.142.07-.26.174-.378.311-.472.449-.707.744-1.191 1.008-.376.201-.847.274-1.186.268a.99.99 0 00-.097-.003c-.236 0-.401.03-.54.099-.18-.146-.404-.467-.536-.799a2.093 2.093 0 01-.147-.848c.015-.467.19-.934.464-1.198.298-.32.655-.467 1.079-.534.027-.003.04-.01.048-.014-.025-.198.017-.4.078-.6.107-.262.284-.535.46-.6-.066-.003-.13-.01-.193-.02-.34-.064-.596-.202-.891-.398v.003a2.53 2.53 0 00-.3-.132c-.096-.026-.195-.064-.24-.202v-.003a.559.559 0 01.024-.329c.038-.132.12-.267.195-.334.088-.078.157-.135.262-.135h.01c.047 0 .092.013.135.03.093.027.163.064.24.132.147.134.318.266.476.399.158.135.32.2.496.267l.019.003c.09.027.155.003.208-.064.052-.074.065-.133.06-.267-.022-.468-.039-1.265.07-2.065.048-.349.137-.767.312-1.068l.004-.003c.23-.398.443-.67.857-.936.197-.135.463-.266.787-.4.323-.134.701-.2 1.048-.266l.033-.003c.177-.033.332-.068.465-.133zm4.682 8.527h.003c.143.062.29.1.407.198.128.132.194.266.2.4.012.2-.066.4-.166.535-.2.135-.334.199-.534.266a.792.792 0 00-.2-.064 1.16 1.16 0 01-.197-.132c-.082-.068-.152-.18-.152-.335 0-.066.022-.133.043-.2.035-.066.08-.135.135-.166a.498.498 0 01.2-.135.649.649 0 01.261-.067z"/>
                                            </svg>
                                            Linux .deb <span style={{ color: textMuted, fontWeight: 400 }}>(x64)</span>
                                        </Link>

                                        <Link
                                            href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-v2.5.1/agelapse-linux-2.5.1-x64.flatpak"
                                            className="platform-btn"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '10px',
                                                padding: '14px 20px',
                                                backgroundColor: bgDark,
                                                border: `1px solid ${borderColor}`,
                                                borderRadius: '10px',
                                                color: textPrimary,
                                                fontSize: '0.875rem',
                                                fontWeight: 500,
                                                textDecoration: 'none',
                                                transition: 'all 0.2s ease',
                                            }}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.002c-.06-.135-.12-.2-.184-.268-.193-.135-.406-.199-.603-.534-.166-.278-.417-.465-.525-.465h-.012c-.126-.003-.209.022-.332.133v.003c-.106.135-.091.2-.124.467-.033.2-.106.467-.148.6-.168.467-.455.867-.918 1.2-.347.199-.578.135-.765.004-.187-.131-.287-.327-.342-.467-.194-.467-.143-.915-.06-1.442-.246-.134-.616-.2-1.012-.2-.26 0-.504.026-.705.135-.142.07-.26.174-.378.311-.472.449-.707.744-1.191 1.008-.376.201-.847.274-1.186.268a.99.99 0 00-.097-.003c-.236 0-.401.03-.54.099-.18-.146-.404-.467-.536-.799a2.093 2.093 0 01-.147-.848c.015-.467.19-.934.464-1.198.298-.32.655-.467 1.079-.534.027-.003.04-.01.048-.014-.025-.198.017-.4.078-.6.107-.262.284-.535.46-.6-.066-.003-.13-.01-.193-.02-.34-.064-.596-.202-.891-.398v.003a2.53 2.53 0 00-.3-.132c-.096-.026-.195-.064-.24-.202v-.003a.559.559 0 01.024-.329c.038-.132.12-.267.195-.334.088-.078.157-.135.262-.135h.01c.047 0 .092.013.135.03.093.027.163.064.24.132.147.134.318.266.476.399.158.135.32.2.496.267l.019.003c.09.027.155.003.208-.064.052-.074.065-.133.06-.267-.022-.468-.039-1.265.07-2.065.048-.349.137-.767.312-1.068l.004-.003c.23-.398.443-.67.857-.936.197-.135.463-.266.787-.4.323-.134.701-.2 1.048-.266l.033-.003c.177-.033.332-.068.465-.133zm4.682 8.527h.003c.143.062.29.1.407.198.128.132.194.266.2.4.012.2-.066.4-.166.535-.2.135-.334.199-.534.266a.792.792 0 00-.2-.064 1.16 1.16 0 01-.197-.132c-.082-.068-.152-.18-.152-.335 0-.066.022-.133.043-.2.035-.066.08-.135.135-.166a.498.498 0 01.2-.135.649.649 0 01.261-.067z"/>
                                            </svg>
                                            Linux .flatpak <span style={{ color: textMuted, fontWeight: 400 }}>(x64)</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile */}
                            <div className="glow" style={{
                                backgroundColor: bgCard,
                                borderRadius: '16px',
                                border: `1px solid ${borderColor}`,
                                padding: '32px',
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    marginBottom: '24px',
                                }}>
                                    <Smartphone size={20} style={{ color: accentColor }} />
                                    <h2 style={{
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        margin: 0,
                                        color: textPrimary,
                                    }}>Mobile</h2>
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '12px',
                                }}>
                                    <Link
                                        href="https://apps.apple.com/ca/app/agelapse/id6503668205"
                                        className="platform-btn"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px',
                                            padding: '14px 20px',
                                            backgroundColor: bgDark,
                                            border: `1px solid ${borderColor}`,
                                            borderRadius: '10px',
                                            color: textPrimary,
                                            fontSize: '0.875rem',
                                            fontWeight: 500,
                                            textDecoration: 'none',
                                            transition: 'all 0.2s ease',
                                        }}
                                    >
                                        <Apple size={18} />
                                        App Store
                                    </Link>

                                    <Link
                                        href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-v2.5.1/agelapse-android-2.5.1-universal.apk"
                                        className="platform-btn"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px',
                                            padding: '14px 20px',
                                            backgroundColor: bgDark,
                                            border: `1px solid ${borderColor}`,
                                            borderRadius: '10px',
                                            color: textPrimary,
                                            fontSize: '0.875rem',
                                            fontWeight: 500,
                                            textDecoration: 'none',
                                            transition: 'all 0.2s ease',
                                        }}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.523 15.341a.997.997 0 0 0-.383.318l-3.168-1.833a2.99 2.99 0 0 0 .024-1.65l3.144-1.817a1 1 0 1 0-.5-.865l-3.144 1.817a2.999 2.999 0 1 0 0 3.378l3.168 1.833a1 1 0 1 0 .859-.381zM6 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                            <path d="M18 2H6C3.79 2 2 3.79 2 6v12c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm2 16c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v12z"/>
                                        </svg>
                                        Android (.apk)
                                    </Link>
                                </div>
                            </div>

                            {/* Older Versions */}
                            <div style={{ textAlign: 'center', marginTop: '8px' }}>
                                <button
                                    onClick={() => setShowOlderVersions(!showOlderVersions)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: textMuted,
                                        fontSize: '0.85rem',
                                        cursor: 'pointer',
                                        textDecoration: 'underline',
                                        padding: '8px',
                                    }}
                                >
                                    {showOlderVersions ? 'Hide older versions' : 'Looking for an older version?'}
                                </button>

                                {showOlderVersions && (
                                    <div className="fade-in" style={{
                                        marginTop: '16px',
                                        backgroundColor: bgCard,
                                        borderRadius: '12px',
                                        border: `1px solid ${borderColor}`,
                                        padding: '24px',
                                        textAlign: 'left',
                                    }}>
                                        {[
                                            {
                                                version: '2.5.0',
                                                tag: 'agelapse-v2.5.0',
                                                platforms: [
                                                    { name: 'macOS', file: 'agelapse-macos-2.5.0-universal.zip' },
                                                    { name: 'Windows', file: 'agelapse-windows-2.5.0-x64.exe' },
                                                    { name: 'Linux .deb', file: 'agelapse-linux-2.5.0-x64.deb' },
                                                    { name: 'Linux .flatpak', file: 'agelapse-linux-2.5.0-x64.flatpak' },
                                                    { name: 'Android', file: 'agelapse-android-2.5.0-universal.apk' },
                                                ],
                                            },
                                            {
                                                version: '2.4.0',
                                                tag: 'agelapse-v2.4.0',
                                                platforms: [
                                                    { name: 'macOS', file: 'agelapse-macos-v2.4.0-universal.zip' },
                                                    { name: 'Windows', file: 'agelapse-windows-2.4.0-x64.exe' },
                                                    { name: 'Linux .deb', file: 'agelapse-linux-2.4.0-x64.deb' },
                                                    { name: 'Linux .flatpak', file: 'agelapse-linux-2.4.0-x64.flatpak' },
                                                ],
                                            },
                                            {
                                                version: '2.3.0',
                                                tag: 'agelapse-v2.3.0',
                                                platforms: [
                                                    { name: 'macOS', file: 'agelapse-macos-v2.3.0-universal.zip' },
                                                    { name: 'Windows', file: 'agelapse-windows-2.3.0-x64.exe' },
                                                    { name: 'Linux .deb', file: 'agelapse-linux-2.3.0-x64.deb' },
                                                    { name: 'Linux .flatpak', file: 'agelapse-linux-2.3.0-x64.flatpak' },
                                                ],
                                            },
                                            {
                                                version: '2.2.1',
                                                tag: 'agelapse-v2.2.1',
                                                platforms: [
                                                    { name: 'macOS', file: 'AgeLapse-macos-v2.2.1.zip' },
                                                    { name: 'Windows', file: 'AgeLapse_Setup_2.2.1_x64.exe' },
                                                    { name: 'Linux .deb', file: 'agelapse-2.2.1.deb' },
                                                ],
                                            },
                                        ].map(({ version, tag, platforms }, i) => (
                                            <div key={version} style={{
                                                padding: '12px 0',
                                                borderBottom: i < 3 ? `1px solid ${borderColor}` : 'none',
                                            }}>
                                                <div style={{
                                                    fontSize: '0.9rem',
                                                    fontWeight: 600,
                                                    color: textPrimary,
                                                    marginBottom: '6px',
                                                }}>
                                                    v{version}
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '4px 16px',
                                                }}>
                                                    {platforms.map(({ name, file }) => (
                                                        <Link
                                                            key={name}
                                                            href={`https://github.com/hugocornellier/agelapse/releases/download/${tag}/${file}`}
                                                            style={{
                                                                fontSize: '0.8rem',
                                                                color: accentColor,
                                                                textDecoration: 'none',
                                                            }}
                                                        >
                                                            {name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </Layout>
    )
}
