---
id: changelog
title: Changelog
sidebar_position: 7
---

### v2.6.0 (Apr 2026)

#### New Features
- Background blur zoom setting

#### Improvements
- Major performance improvements across all platforms: 
  - ~1.5x faster stabilization
  - ~2-3x faster photo import 
- Smoother, more responsive camera
- Reduced Android binary size (~500MB -> ~350MB) by debloating and stripping FFmpeg binary to a minimal version

#### Bug Fixes
- Fix macOS release crash importing TIFF, JP2, and AVIF files
- Fix Android JVM compatibility issues
- Fix duplicated file extension in gallery preview info dialog
- Fix bug affecting changing settings during active stabilization
- Date stamps:
  - Fix date stamp crash when compiling with hundreds of photos
  - Fix FFmpeg drawtext font path escaping on Windows
  - Fix drawtext date stamps not rendering (chained enable expressions)

### v2.5.1 (Apr 2026)

#### Improvements
- Reduced bundled FFmpeg binary size (macOS: 76 MB → 5.5 MB, Windows: 95 MB → 13 MB)

#### Bug Fixes
- Fix image preview exit button UI issue

### v2.5.0 (Apr 2026)

#### New Features
- Light theme (auto-reads system settings OR toggle in Settings -> Appearance)
- Video codec selection (H.264, HEVC, ProRes 422, ProRes 422 HQ, ProRes 4444, VP9)
- Transparent video background support with ProRes 4444 and VP9 alpha
- Blurred video background option
- RAW image support
- Dog and cat project types for pet timelapses
- Linked source folders
- Preserve original files on import (metadata, filenames, byte for byte)
- Date stamp font size setting
- Inspection mode for gallery and image preview (overlay stabilization grid to verify alignment)

#### Improvements
- Consolidate app colours and theme
- Improved import flow with preview dialog and clearer date extraction
- Reduced Android APK size

#### Bug Fixes
- Fixes #25: bug causing .zip exports to fail on certain devices
- Fix photos taken before 2001 sorting incorrectly
- Fix date stamps not syncing correctly in rare cases
- Fix layout overflow on manual stabilization page on mobile
- Fix theme toggle failing to open
- Fix Cmd+A not working in file picker

### v2.4.0

#### New Features
- Customizable font for date stamps.
- Customizable background colour for stabilized output.
- Camera timer. Thanks to all users who requested this.
  - Optional 3s or 10s countdown before taking photos
  - Visual overlay with feedback
- Toggle for automatic video compilation. Thanks to the user who suggested this.
  - Disable auto re-compilation after taking photos
  - Manually compile from the Create tab when ready

#### Improvements
- Added ETA to video compilation step

#### Bug Fixes
- Fixed camera mirroring on macOS
- Fixed Linux camera initialization with proper libmpv bundling

### v2.3.0

#### New Features
- Date stamps on photos, thumbnails and output video (optional)
  - Display capture dates on gallery thumbnails and/or burn them into exported photos and output video
  - Customize format (e.g., `Jan 1, 2024`, `2024-01-01`, `01/01/24`)
  - Configure in the new "Date Stamp" section in Settings

#### Improvements
- Improved manual stabilization page
  - New visual transform tool - drag, resize, and rotate photos directly with your mouse or finger. Thanks to the users who suggested this.
  - Save/reset buttons with unsaved changes warning

#### Bug Fixes
- Fixed bug that caused thumbnails to not automatically refresh after "Manual Stabilization" or "Retry Stabilization" actions.

### v2.2.1
- 8K + custom resolution output support
- Performance optimizations & improvements
- Minor bug fixes

### v2.2.0

#### Improvements
- Massive performance improvements. Stabilization pipeline is 2-4x faster (platform-dependent).

#### New Features
- .HEIC support on Windows devices. Thanks to the user who wrote in and suggested this.
- Bulk image selection in the gallery. 3-dot menu in the upper right -> Select.

#### Bug Fixes
- Fixes #11: deleted photos could remain stuck in the generated video. Thanks @agnosticlines.
- Fixes #16 + #20: incorrect timezone and date metadata, could result in incorrectly broken streaks. Thanks @thelittlekatie
and @Syumza.
- Fixes #23: the built-in camera could fail to initialize on Windows. Thanks @COHEJH.
