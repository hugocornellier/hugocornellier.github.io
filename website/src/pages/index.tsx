import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';

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

    return (
        <Layout wrapperClassName="al-download-page">
            <main className="bg-zinc-900 text-white min-h-screen flex flex-col justify-center items-center p-6">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    {/* Logo and Header */}
                    <div className="space-y-6">
                        <div className="flex justify-center">
                            <Image
                                src="https://i.imgur.com/CmsixvW.png"
                                alt="AgeLapse Logo"
                                width={200}
                                height={200}
                                className="drop-shadow-lg"
                            />
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-300">
                                Download AgeLapse
                            </h1>
                            <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                                Easily create stabilized "photo-a-day" projects with AgeLapse.
                                <br />
                                <span className="text-zinc-400 text-lg mt-2 block">100% free and open source.</span>
                            </p>
                        </div>
                    </div>

                    {/* Main Action Buttons */}
                    <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-sm mx-auto">
                        {" "}
                        {/* Added w-full max-w-sm mx-auto and flex-col items-center */}
                        <Button
                            onClick={() => setShowDownloads(!showDownloads)}
                            size="lg"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                        >
                            <Download className="w-5 h-5 mr-2" /> {/* Added Download icon */}
                            {showDownloads ? "Hide Downloads" : "Download"}
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                        >
                            <Link href="/info/docs" target="_blank" rel="noopener noreferrer">
                                <BookOpen className="w-5 h-5 mr-2" /> {/* Added BookOpen icon */}
                                Documentation
                            </Link>
                        </Button>
                    </div>

                    {/* Conditional Download Sections */}
                    {showDownloads && (
                        <div className="space-y-12 mt-12 animate-in fade-in slide-in-from-top-4 duration-500">
                            {/* Mobile Section */}
                            <Card className="bg-zinc-800/50 border-zinc-700 backdrop-blur-sm">
                                <CardContent className="p-8">
                                    <div className="flex items-center justify-center gap-3 mb-6">
                                        <Smartphone className="w-6 h-6 text-zinc-300" />
                                        <h2 className="text-2xl font-semibold text-zinc-100">Mobile</h2>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="bg-zinc-700 hover:bg-zinc-600 text-white border-zinc-600 transition-all duration-200 hover:scale-105"
                                        >
                                            <Link href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-android/agelapse-android-v1.5.2.apk">
                                                <Image
                                                    src="https://img.icons8.com/ios-glyphs/24/ffffff/android-os.png"
                                                    alt="Android"
                                                    width={24}
                                                    height={24}
                                                    className="mr-2"
                                                />
                                                Download for Android (.apk)
                                            </Link>
                                        </Button>
                                        <Button
                                            asChild
                                            size="lg"
                                            className="bg-zinc-700 hover:bg-zinc-600 text-white border-zinc-600 transition-all duration-200 hover:scale-105"
                                        >
                                            <Link href="https://apps.apple.com/ca/app/agelapse/id6503668205">
                                                <Image
                                                    src="https://img.icons8.com/ios-glyphs/24/ffffff/mac-os.png"
                                                    alt="iOS"
                                                    width={24}
                                                    height={24}
                                                    className="mr-2"
                                                />
                                                Download on the App Store
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Desktop Section */}
                            <Card className="bg-zinc-800/50 border-zinc-700 backdrop-blur-sm">
                                <CardContent className="p-8">
                                    <div className="flex items-center justify-center gap-3 mb-6">
                                        <Monitor className="w-6 h-6 text-zinc-300" />
                                        <h2 className="text-2xl font-semibold text-zinc-100">Desktop</h2>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                                        <div className="space-y-4">
                                            <Button
                                                asChild
                                                size="lg"
                                                className="w-full bg-zinc-700 hover:bg-zinc-600 text-white border-zinc-600 transition-all duration-200 hover:scale-105"
                                            >
                                                <Link href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-mac-arm64/AgeLapse.v0.4.0.Mac.arm64.zip">
                                                    <Image
                                                        src="https://img.icons8.com/ios-glyphs/24/ffffff/mac-client.png"
                                                        alt="macOS Apple Silicon"
                                                        width={24}
                                                        height={24}
                                                        className="mr-2"
                                                    />
                                                    Download for Silicon Macs (arm64)
                                                </Link>
                                            </Button>
                                            <Button
                                                asChild
                                                size="lg"
                                                className="w-full bg-zinc-700 hover:bg-zinc-600 text-white border-zinc-600 transition-all duration-200 hover:scale-105"
                                            >
                                                <Link href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-mac-x86_64/AgeLapse.v0.4.0.Mac.x86_64.zip">
                                                    <Image
                                                        src="https://img.icons8.com/ios-glyphs/24/ffffff/mac-client.png"
                                                        alt="macOS Intel"
                                                        width={24}
                                                        height={24}
                                                        className="mr-2"
                                                    />
                                                    Download for Intel Macs (x86_64)
                                                </Link>
                                            </Button>
                                        </div>
                                        <div className="flex items-center">
                                            <Button
                                                asChild
                                                size="lg"
                                                className="w-full bg-zinc-700 hover:bg-zinc-600 text-white border-zinc-600 transition-all duration-200 hover:scale-105"
                                            >
                                                <Link href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-windows/AgeLapse-0.4.0.exe">
                                                    <Image
                                                        src="https://img.icons8.com/ios-glyphs/24/ffffff/windows-10.png"
                                                        alt="Windows"
                                                        width={24}
                                                        height={24}
                                                        className="mr-2"
                                                    />
                                                    Download for Windows (.exe)
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </div>
            </main>
        </Layout>
    );
}