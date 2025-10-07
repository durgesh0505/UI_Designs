# Neumorphism.Avalonia Project Context

## Project Overview
**Name**: Neumorphism.Avalonia
**Version**: 0.11.2
**Type**: .NET Standard 2.1 Library
**Purpose**: Easy to use and customizable Neumorphism Design implementation for Avalonia UI framework

## Technology Stack
- **Framework**: .NET Standard 2.1 (C# 9)
- **UI Framework**: Avalonia UI 11.2.3
- **Dependencies**:
  - Avalonia.Desktop 11.2.3
  - Avalonia.Controls.DataGrid 11.2.3
  - Avalonia.Controls.ItemsRepeater 11.1.5
  - Avalonia.ReactiveUI 11.2.3
  - DialogHost.Avalonia 0.9.1
  - SkiaSharp 3.116.1

## Project Structure

### Core Components
- `NeumorphismTheme.xaml` - Main theme definition
- `NeumorphismTheme.xaml.cs` - Theme code-behind with property handling
- `ColorPaletteResources.cs` - Color palette management
- `ColorPaletteResources.Properties.cs` - Generated color properties

### Key Directories
- `/Accents/` - Base color palettes and system accent colors
- `/Additional/` - Icons dataset and material animation assists
- `/Assists/` - Helper classes for various UI controls (Button, ComboBox, DatePicker, etc.)
- `/Builders/` - Component builders (FloatingButtonBuilder)
- `/Colors/` - Color system implementation with Material Design colors and manipulation
- `/Commands/` - UI commands (SnackbarCommand)
- `/Controls/` - Custom controls (Card, CircularProgress, FloatingButton, etc.)
- `/Converters/` - Value converters for XAML binding
- `/Dialogs/` - Dialog-related components
- `/Enums/` - Type definitions
- `/Events/` - Event handling
- `/Fonts/` - SF Pro Text font family
- `/Models/` - Data models
- `/Properties/` - Assembly properties
- `/Resources/` - Resource definitions
- `/Themes/` - Complete XAML theme definitions for all Avalonia controls

### Key Features
1. **Color System**: Material Design color palette with manipulation utilities
2. **Custom Controls**: Neumorphic-styled controls (Card, FloatingButton, etc.)
3. **Theme Variants**: Support for Light/Dark themes
4. **Comprehensive Styling**: Complete theme coverage for all Avalonia controls
5. **Animation Support**: Material animation assists and transitions
6. **Extensible**: Assist classes for customizing control behavior

### Main Theme Class Properties
- `BaseTheme` (ApplicationTheme) - Light/Dark theme selection
- `PrimaryColor` (PrimaryColor) - Primary color scheme
- `SecondaryColor` (SecondaryColor) - Secondary color scheme

### Color System Architecture
- Material Design color swatches (Red, Blue, Green, etc.)
- Color manipulation utilities (HSL, HSB, LAB, XYZ conversions)
- Automatic color resource generation
- Dynamic theme switching support

## Development Notes
- Uses Avalonia resource system for theming
- XAML-based styling with C# code-behind for dynamic behavior
- Follows Material Design principles adapted for Neumorphism
- Comprehensive converter system for UI binding
- Built-in animation and transition support

## Session Context Loaded
✅ Project structure analyzed
✅ Dependencies identified
✅ Core architecture understood
✅ Development environment ready