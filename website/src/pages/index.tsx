import React, {useEffect} from 'react';
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

    return (
        <Layout>
            <main
                style={{
                    backgroundColor: '#121212',
                    color: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 'calc(100vh - var(--ifm-navbar-height) - var(--ifm-footer-height))',
                    margin: 0,
                    padding: 0,
                }}>
                <div style={{textAlign: 'center', padding: '20px'}}>
                    <img src="https://i.imgur.com/CmsixvW.png" alt="AgeLapse Logo" width={200} />
                    <h1 style={{fontSize: '2.5em', marginBottom: '20px'}}>Download AgeLapse</h1>
                    <p style={{fontSize: '1.2em', marginBottom: '40px', color: '#bbbbbb'}}>
                        Easily create stabilized "photo-a-day" projects with AgeLapse.
                        <br />
                        <br />
                        100% free and open source.
                    </p>

                    <div style={{marginBottom: '40px'}}>
                        <h2 style={{fontSize: '1.8em', marginBottom: '15px'}}>Mobile</h2>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: '20px',
                            }}>
                            <a
                                href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-android/agelapse-android-v1.5.2.apk"
                                style={linkStyle}>
                                <img
                                    src="https://img.icons8.com/ios-glyphs/30/ffffff/android-os.png"
                                    alt="Android Icon"
                                    style={{marginRight: '8px'}}
                                />
                                Download for Android (.apk)
                            </a>
                            <a
                                href="https://apps.apple.com/ca/app/agelapse/id6503668205"
                                style={linkStyle}>
                                <img
                                    src="https://img.icons8.com/ios-glyphs/30/ffffff/mac-os.png"
                                    alt="iOS Icon"
                                    style={{marginRight: '8px'}}
                                />
                                Download on the App Store
                            </a>
                        </div>
                    </div>

                    <div style={{marginBottom: '40px'}}>
                        <h2 style={{fontSize: '1.8em', marginBottom: '15px'}}>Desktop</h2>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: '20px',
                            }}>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                                <a
                                    href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-mac-arm64/AgeLapse.v0.4.0.Mac.arm64.zip"
                                    style={linkStyle}>
                                    <img
                                        src="https://img.icons8.com/ios-glyphs/30/ffffff/mac-client.png"
                                        alt="MacOS Apple Silicon Icon"
                                        style={{marginRight: '8px'}}
                                    />
                                    Download for Silicon Macs (arm64)
                                </a>
                                <a
                                    href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-mac-x86_64/AgeLapse.v0.4.0.Mac.x86_64.zip"
                                    style={linkStyle}>
                                    <img
                                        src="https://img.icons8.com/ios-glyphs/30/ffffff/mac-client.png"
                                        alt="MacOS Intel Icon"
                                        style={{marginRight: '8px'}}
                                    />
                                    Download for Intel Macs (x86_64)
                                </a>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                                <a
                                    href="https://github.com/hugocornellier/agelapse/releases/download/agelapse-windows/AgeLapse-0.4.0.exe"
                                    style={linkStyle}>
                                    <img
                                        src="https://img.icons8.com/ios-glyphs/30/ffffff/windows-10.png"
                                        alt="Windows Icon"
                                        style={{marginRight: '8px'}}
                                    />
                                    Download for Windows (.exe)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}