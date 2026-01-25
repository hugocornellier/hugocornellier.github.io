---
id: changelog
title: Changelog
sidebar_position: 7
---

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
