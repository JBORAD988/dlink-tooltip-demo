# dLinkTooltip

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

---

# 🧠 dlink-tooltip -By JBORAD988

`dlink-tooltip` is a lightweight, highly customizable Angular tooltip library designed to enhance UX without relying on heavy CSS hacks. Ideal for enterprise-level applications where UI clarity and control matter.

---


## 🧪 **Beta Features**

* **Live Tooltip Updates**
  Tooltip content now updates in real-time, ensuring the latest data is always displayed.

* **Responsive Tooltip Positioning**
  Tooltips now dynamically adjust their position during screen zoom or scroll events for improved visibility and user experience.

---

Here’s an updated version of your **Beta Features** section with a new section for a **Live Demo Link**:

---

## 🧪 **Beta Features**

* **Live Tooltip Updates**
  Tooltip content now updates in real-time, ensuring the latest data is always displayed.

* **Responsive Tooltip Positioning**
  Tooltips now dynamically adjust their position during screen zoom or scroll events for improved visibility and user experience.

---

## 🔗 **Live Demo**

Experience the new tooltip features in action:
👉 [View D-Link Live Demo](https://dlink.netlify.app)

---

## 🚀 Why Use `dlink-tooltip`?

Hardcoded CSS tooltips are:

* ❌ Difficult to maintain
* ❌ Not reusable
* ❌ Often break on responsive layouts
* ❌ Limited in positioning and interactivity

**dLink** offers:

* ✅ Smart positioning to avoid clipping
* ✅ Multiple trigger types (hover, click, focus, manual)
* ✅ Rich content support (HTML, templates)
* ✅ Built-in theme system (dark, light, custom)
* ✅ Advanced animation system (fade, slide, scale)
* ✅ Event callbacks and manual control(in future updates)
* ✅ Accessibility features (ARIA, keyboard navigation)
* ✅ Touch gesture support for mobile
* ✅ Auto-hide and persistent tooltip options
* ✅ Adjustable gap, size, alignment, delay, offset
* ✅ Configurable animations and custom styles
* ✅ No external dependencies, built natively with Angular

---

## 🧱 **Installation** *(Recommended: LTS for Best Compatibility)*

```bash
npm install dlink-tooltip
```

> ⚠️ We recommend using a dLink LTS version to avoid dependency conflicts or bugs and ensure smoother integration.

---

## 🔁 Import the Module

```ts
import { dLinkModule } from 'dlink-tooltip';

@NgModule({
  imports: [ dLinkModule ]
})
export class YourModule { }
```

---

## 🌐 Angular Compatibility

| dLink Version | Angular Version |
| ----------------- | --------------- |
| Latest(beta)      | 15.1.6          |
<!-- | 1.2.0             | 14.x.x - 15.x.x |
| 2.0.0             | 16.x.x - 17.x.x |
| Latest            | 17.x.x+         | -->

> 🧪 Latest Version 1.0.1(beta) tested up to Angular 15.1.6 (LTS) <br>
<!-- > ✅ Tested up to Angular 11.0.9 (LTS) -->

---

## ⚙️ Tooltip Directive Usage

### Basic Usage
```html
<!-- Simple tooltip -->
<button dLinkTooltip="This is a tooltip">Hover me</button>
```

### Advanced Usage
```html
<button
  dLinkTooltip="<strong>Rich HTML</strong> content"
  [tooltipHtml]="true"
  tooltipTheme="light"
  tooltipAnimation="scale"
  tooltipTrigger="click"
  [tooltipPosition]="'top-right'"
  [tooltipFontSize]="'14px'"
  [tooltipGap]="8"
  [tooltipAlign]="'left'"
  [tooltipMaxWidth]="'200px'"
  [tooltipClass]="'custom-tooltip'"
  [tooltipSmartPosition]="true"
  [tooltipSpeed]="'fast'"
  [tooltipShowDelay]="200"
  [tooltipHideDelay]="100"
  [tooltipAutoHide]="3000"
  [tooltipPersistent]="false"
  [tooltipShowOnLoad]="false"
  [tooltipOffset]="{x: 10, y: 5}"
  [tooltipTouchGestures]="true"
  tooltipAriaLabel="Additional info"
  (tooltipShow)="onShow()" //Info: In future updates 
  (tooltipHide)="onHide()" //Info: In future updates 
>
  Advanced Tooltip
</button>
```

---

## 📥 Directive Inputs / Properties

### Core Properties
| Input                  | Type                                                                                                     | Default    | Description                                 |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------- |
| `dLinkTooltip`            | `string`                                                                                                 | `''`       | The text/content shown in the tooltip       |
| `tooltipPosition`      | `'top' \| 'bottom' \| 'left' \| 'right' \| 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'top'` | Tooltip placement                           |
| `tooltipTrigger`       | `'hover' \| 'click' \| 'focus'`                                                             | `'hover'`  | How tooltip is triggered                    |
| `tooltipTheme`         | `'dark' \| 'light' \| 'custom'`                                                                         | `'dark'`   | Built-in theme or custom styling           |
| `tooltipAnimation`     | `'fade' \| 'slide' \| 'scale' \| 'none'`                                                                | `'fade'`   | Animation type for show/hide               |
| `tooltipSpeed`         | `'fast' \| 'medium' \| 'slow'`                                                                           | `'medium'` | Animation speed                             |

### Content & Styling
| Input                  | Type                                                                                                     | Default    | Description                                 |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------- |
| `tooltipHtml`          | `boolean`                                                                                                | `false`    | Enable HTML content rendering              |
| `tooltipFontSize`      | `string`                                                                                                 | `'14px'`   | Font size of tooltip content                |
| `tooltipMaxWidth`      | `string`                                                                                                 | `'200px'`  | Max width of the tooltip                    |
| `tooltipAlign`         | `'center' \| 'left' \| 'right'`                                                                          | `'center'` | Tooltip alignment relative to element       |
| `tooltipClass`         | `string`                                                                                                 | `''`       | Custom CSS class for additional styling     |

### Positioning & Layout
| Input                  | Type                                                                                                     | Default    | Description                                 |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------- |
| `tooltipGap`           | `number`                                                                                                 | `8`        | Distance between tooltip and element        |
| `tooltipOffset`        | `{x: number, y: number}`                                                                                 | `{x:0, y:0}` | Additional X/Y offset for fine positioning |
| `tooltipSmartPosition` | `boolean`                                                                                                | `true`     | Auto-adjust if tooltip goes out of viewport |

### Timing & Behavior
| Input                  | Type                                                                                                     | Default    | Description                                 |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------- |
| `tooltipShowDelay`     | `number`                                                                                                 | `0`        | Delay before showing tooltip (ms)           |
| `tooltipHideDelay`     | `number`                                                                                                 | `0`        | Delay before hiding tooltip (ms)            |
| `tooltipAutoHide`      | `number`                                                                                                 | `0`        | Auto-hide after milliseconds (0 = disabled) |
| `tooltipPersistent`    | `boolean`                                                                                                | `false`    | Keeps tooltip visible until manually hidden |
| `tooltipShowOnLoad`    | `boolean`                                                                                                | `false`    | Shows tooltip as soon as component loads    |

### Accessibility & Touch
| Input                  | Type                                                                                                     | Default    | Description                                 |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------- |
| `tooltipTouchGestures` | `boolean`                                                                                                | `true`     | Enable touch gesture support               |
| `tooltipRole`          | `string`                                                                                                 | `'tooltip'`| ARIA role attribute                        |
| `tooltipAriaLabel`     | `string`                                                                                                 | `''`       | ARIA label for accessibility               |

### Output Events
| Event                  | Type                                                                                                     | Description                                 |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `tooltipShow`          | `EventEmitter<void>`                                                                                     | Emitted when tooltip is shown              |
| `tooltipHide`          | `EventEmitter<void>`                                                                                     | Emitted when tooltip is hidden             |

### Public Methods (In Future Updates - currently not available)
| Method                 | Description                                 |
| ---------------------- | ------------------------------------------- |
| `showTooltip()`        | Programmatically show the tooltip          |
| `hideTooltip()`        | Programmatically hide the tooltip          |
| `toggleTooltip()`      | Toggle tooltip visibility                  |

---

## 🎯 Feature Examples

### Trigger Types
```html
<!-- Hover trigger (default) -->
<button dLinkTooltip="Hover tooltip" tooltipTrigger="hover">Hover me</button>

<!-- Click trigger -->
<button dLinkTooltip="Click tooltip" tooltipTrigger="click">Click me</button>

<!-- Focus trigger -->
<input dLinkTooltip="Focus tooltip" tooltipTrigger="focus" placeholder="Focus me">

```

### Themes
```html
<!-- Dark theme (default) -->
<button dLinkTooltip="Dark theme tooltip" tooltipTheme="dark">Dark</button>

<!-- Light theme -->
<button dLinkTooltip="Light theme tooltip" tooltipTheme="light">Light</button>

<!-- Custom theme -->
<button dLinkTooltip="Custom theme tooltip" tooltipTheme="custom" tooltipClass="my-custom-tooltip">Custom</button>
```

### Animations
```html
<!-- Fade animation (default) -->
<button dLinkTooltip="Fade animation" tooltipAnimation="fade">Fade</button>

<!-- Slide animation -->
<button dLinkTooltip="Slide animation" tooltipAnimation="slide">Slide</button>

<!-- Scale animation -->
<button dLinkTooltip="Scale animation" tooltipAnimation="scale">Scale</button>

<!-- No animation -->
<button dLinkTooltip="No animation" tooltipAnimation="none">None</button>
```

### HTML Content
```html
<!-- Plain text -->
<button dLinkTooltip="Plain text tooltip">Plain Text</button>

<!-- HTML content -->
<button dLinkTooltip="<strong>Bold</strong> and <em>italic</em> text" [tooltipHtml]="true">HTML Content</button>

<!-- Rich HTML -->
<button dLinkTooltip="<div style='color: #ff6b6b;'>🎨 Styled HTML</div><br><small>With line breaks</small>" 
        [tooltipHtml]="true">Rich HTML</button>
```

### Event Handling
```typescript
export class MyComponent {
  onTooltipShow() {
    console.log('Tooltip shown!');
  }

  onTooltipHide() {
    console.log('Tooltip hidden!');
  }
}
```

```html
<!-- Info: In future updates currently not available  -->
<button dLinkTooltip="Event tooltip" 
        (tooltipShow)="onTooltipShow()" 
        (tooltipHide)="onTooltipHide()"> 
  Events Tooltip
</button>
```

### Persistent & Auto-hide
```html
<!-- Persistent tooltip -->
<div dLinkTooltip="This tooltip stays visible!" 
     [tooltipPersistent]="true" 
     [tooltipShowOnLoad]="true" 
     tooltipPosition="right">
  Persistent tooltip
</div>

<!-- Auto-hide tooltip -->
<button dLinkTooltip="Auto-hide after 3 seconds" 
        [tooltipAutoHide]="3000">
  Auto Hide
</button>
```

### Positioning & Offset
```html
<!-- All position options -->
<button dLinkTooltip="Top tooltip" tooltipPosition="top">Top</button>
<button dLinkTooltip="Top-left tooltip" tooltipPosition="top-left">Top-Left</button>
<button dLinkTooltip="Top-right tooltip" tooltipPosition="top-right">Top-Right</button>
<button dLinkTooltip="Bottom tooltip" tooltipPosition="bottom">Bottom</button>
<button dLinkTooltip="Bottom-left tooltip" tooltipPosition="bottom-left">Bottom-Left</button>
<button dLinkTooltip="Bottom-right tooltip" tooltipPosition="bottom-right">Bottom-Right</button>
<button dLinkTooltip="Left tooltip" tooltipPosition="left">Left</button>
<button dLinkTooltip="Right tooltip" tooltipPosition="right">Right</button>

<!-- With offset -->
<button dLinkTooltip="Offset tooltip" [tooltipOffset]="{x: 20, y: 10}">Offset</button>
```

### Accessibility
```html
<button dLinkTooltip="Accessible tooltip" 
        tooltipAriaLabel="Additional accessibility information"
        tooltipRole="tooltip">
  Accessible Tooltip
</button>
```

### Complex Example
```html
<button 
  dLinkTooltip="<div style='text-align: center;'><strong>🚀 Advanced Tooltip</strong><br><em>Multiple features combined</em><br><small style='color: #888;'>HTML + Theme + Animation</small></div>"
  [tooltipHtml]="true"
  tooltipTheme="light"
  tooltipAnimation="scale"
  tooltipSpeed="slow"
  tooltipPosition="top"
  [tooltipShowDelay]="300"
  [tooltipHideDelay]="200"
  tooltipMaxWidth="250px"
  [tooltipOffset]="{x: 0, y: -5}">
  🎯 Complex Tooltip
</button>
```

### Custom Styling
```scss
// Custom theme CSS
.my-custom-tooltip {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  border: 2px solid #fff !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
  font-weight: 600 !important;
}
```

---

## 🛠 Development Commands

### Generate Components

```bash
ng generate component component-name --project rx-tooltip
```

> Always use `--project rx-tooltip` to scope to the library

### Build the Library

```bash
ng build rx-tooltip
```

### Publish to npm

```bash
cd dist/rx-tooltip
npm publish
```

### Run Unit Tests

```bash
ng test rx-tooltip
```

---

## 🔗 Additional Resources
* [Angular CLI Docs](https://angular.io/cli)
* [Tooltip Best Practices (UX)](https://uxdesign.cc/tooltips-in-ux-design-best-practices-60c0f3be5f08)
