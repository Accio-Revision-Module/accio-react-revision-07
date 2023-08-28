# ReactJS Revision: Building Generic UI Components

## Notification Component (Snackbar/Toast)

- **Concept**: Notification components are used for small alerts or messages to the user. It's useful for feedback about operations.
- **Real-world Example**: Show a toast message when a user successfully logs into the application.

### Code Snippet:

```jsx
import React, { useState, useEffect } from "react";

export const Notification = ({ message, duration = 3000 }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), duration);
  }, [duration]);

  if (!show) return null;

  return <div className="notification">{message}</div>;
};
```

---

## Table Component

- **Concept**: A table component is useful for displaying data in a tabular format.
- **Real-world Example**: Displaying a list of products in an admin dashboard.

### Code Snippet:

```jsx
import React from "react";

export const Table = ({ columns, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col, subIndex) => (
              <td key={subIndex}>{row[col.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
```

---

## Accordion Component

- **Concept**: Accordion components show or hide content based on user interaction.
- **Real-world Example**: FAQ sections often use accordions to toggle visibility of content.

### Code Snippet:

```jsx
import React, { useState } from "react";

export const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};
```

---

## Tabs Component

- **Concept**: Tabs are used for showing different views within the same context.
- **Real-world Example**: User profiles might have tabs for posts, photos, and settings.

### Code Snippet:

```jsx
import React, { useState } from "react";

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tab-headers">
        {tabs.map((tab, index) => (
          <div key={index} onClick={() => setActiveTab(index)}>
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};
```

---

## Carousel Component

- **Concept**: A carousel is a set of rotating banners or images.
- **Real-world Example**: A product page may have a carousel to showcase different images of a single product.

### Code Snippet:

```jsx
import React, { useState } from "react";

export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="carousel">
      <button
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + images.length) % images.length)
        }
      >
        Prev
      </button>
      <img src={images[currentIndex]} alt="" />
      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
      >
        Next
      </button>
    </div>
  );
};
```
