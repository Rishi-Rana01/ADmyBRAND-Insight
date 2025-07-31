
### **Project Brief: ADmyBRAND Insights Dashboard**

#### **1. Project Vision & Goal**

To create a powerful, intuitive, and visually appealing web-based dashboard that provides the ADmyBRAND marketing team with at-a-glance insights into key performance indicators. The dashboard will centralize critical data, facilitate trend analysis, and enable data-driven decision-making through interactive visualizations and robust data handling features.

#### **2. Target Audience**

*   **Marketing Managers:** Need a high-level overview of campaign performance and overall marketing ROI.
*   **Data Analysts:** Require detailed, granular data with tools for filtering, sorting, and exporting for deeper analysis.
*   **Company Executives:** Want a quick, digestible snapshot of user growth and revenue metrics.

#### **3. Core Features & Functional Requirements**

**F1: Main Dashboard Layout**
*   **F1.1: KPI Snapshot Cards:** A top-level section displaying the most critical metrics (e.g., Total Revenue, Active Users, Conversion Rate, Growth Rate). Each card will show the primary value, a percentage change over the previous period, and a subtle trend line.
*   **F1.2: Global Theme Toggle:** A persistent UI element, typically in the header, allowing users to instantly switch between Dark and Light modes. The selected theme will persist across sessions.

**F2: Interactive Data Visualizations**
*   **F2.1: Revenue Trends Chart:** An interactive line chart displaying revenue over time.
    *   **Interactivity:** Must support zooming, panning, and detailed tooltips on hover that show the exact date and revenue figure.
    *   **Controls:** Allow users to switch the time-frame (e.g., 30D, 90D, 1Y).
*   **F2.2: User Acquisition Channel Chart:** A bar chart visualizing users acquired from different channels (e.g., Organic Search, Paid Social, Referrals) on a month-over-month basis.
    *   **Drill-Down:** Clicking on a specific channel's bar will filter the *entire dashboard* (or at a minimum, the data table) to reflect data from only that channel.
*   **F2.3: Campaign Performance Breakdown:** A donut chart illustrating the performance distribution across various active marketing campaigns (e.g., by budget spent, conversions generated).

**F3: Advanced Data Table**
*   **F3.1: Comprehensive Data Display:** A paginated table showing granular data (e.g., user details, transaction records, campaign specifics).
*   **F3.2: Advanced Controls:** Must include:
    *   **Column Sorting:** Clickable headers to sort data ascending/descending.
    *   **Global Search:** A real-time search bar to filter rows across all columns.
    *   **Column Filtering:** Dropdowns on specific columns to filter by category (e.g., filter by campaign name).
    *   **Pagination:** Controls to navigate through pages of data.

**F4: Data Export Functionality**
*   **F4.1: Component Export:** Users can export individual charts or the data table as a PNG or JPEG image.
*   **F4.2: Data Export:** The data currently visible in the Advanced Data Table can be exported as a CSV or PDF file, respecting any active filters and sorting.

#### **4. UX & Design System**

*   **Color Palette:**
    *   **Primary (Brand, Links, Active State):** Blue (`#3b82f6`)
    *   **Accent (KPIs, Success, Highlights):** Teal-green (`#10b981`)
    *   **Background (Light Mode):** Light Gray (`#f8fafc`)
    *   **Background (Dark Mode):** Dark Gray (`#0f172a`)
    *   **Text/UI (Light Mode):** Slate Gray (`#334155`)
    *   **Text/UI (Dark Mode):** Light Gray (`#cbd5e1`)
*   **Typography (Sourced from Google Fonts):**
    *   **Headings (`<h1>`, `<h2>`, etc.):** Poppins (sans-serif)
    *   **Body (Paragraphs, Labels):** Inter (sans-serif)
    *   **Monospace (Code, Raw Data):** JetBrains Mono
*   **Animations & Transitions:**
    *   **Page/Component Load:** A smooth fade-in combined with a subtle slide-up effect.
    *   **Chart Rendering:** Data points and bars should animate into view in a staggered or sequential reveal to feel dynamic.
    *   **UI Interactions:** All interactive elements (buttons, toggles) should have smooth property transitions (`background-color`, `transform`).

#### **5. Technical Considerations (Proposed Stack)**

*   **Framework:** **Next.js with TypeScript** (for performance, type safety, and a robust React ecosystem).
*   **Styling:** **Tailwind CSS** (perfectly suited for implementing this type of design system).
*   **UI Components:** **Shadcn/ui** or **Tremor** (provides pre-built, accessible components like tables, charts, and cards that are easy to style with Tailwind).
*   **Charting Library:** **Recharts** (highly customizable and integrates well with React).
*   **Data Fetching/State:** **React Query (TanStack Query)** (for managing server state, caching, and refetching data efficiently).
*   **Data Source:** To be defined. Assumes a **REST or GraphQL API** will provide the necessary data endpoints.

---

### **Step-by-Step Development Plan**

Here is a logical roadmap to build the dashboard, broken into manageable phases.

#### **Phase 1: Project Foundation & Core UI (Sprint 1)**

*Goal: Set up the project skeleton and establish the core visual elements.*

1.  **Project Initialization:** Set up a new Next.js project with TypeScript and Tailwind CSS.
2.  **Directory Structure:** Define a scalable folder structure for components, pages, hooks, and utilities.
3.  **Theme Implementation:**
    *   Configure Tailwind CSS with the specified color palette and fonts.
    *   Implement the Dark/Light mode toggle and state management to make it functional.
4.  **Layout & Navigation:** Create the main application layout (header, sidebar, main content area).
5.  **Component Scaffolding:** Build static, non-functional versions of the core UI components (KPI cards, chart placeholders, empty table) to establish the visual layout.

#### **Phase 2: Data Integration & Core Visualizations (Sprint 2)**

*Goal: Bring the dashboard to life with real (or mock) data.*

1.  **API Service Layer:** Create functions for fetching data from the backend API.
2.  **Integrate React Query:** Set up React Query for efficient data fetching and caching.
3.  **Implement KPI Snapshot Cards (F1.1):** Connect the cards to the data source and display the key metrics.
4.  **Implement Revenue Chart (F2.1):** Use Recharts (or similar) to build the interactive line chart.
5.  **Implement User Acquisition Chart (F2.2):** Build the bar chart. Defer the "drill-down" functionality to Phase 3.

#### **Phase 3: Advanced Functionality & Interactivity (Sprint 3)**

*Goal: Build the most complex interactive features.*

1.  **Build Advanced Data Table (F3):**
    *   Integrate a powerful table component (e.g., TanStack Table).
    *   Implement server-side or client-side sorting, filtering, and pagination.
    *   Add the real-time search input.
2.  **Implement Chart Drill-Down (F2.2):** Create the state management logic so that clicking a bar in the acquisition chart updates the state and filters the data shown in the Advanced Data Table.
3.  **Implement Campaign Pie Chart (F2.3):** Build the final visualization component.

#### **Phase 4: Polish, Export, & Testing (Sprint 4)**

*Goal: Refine the user experience and add final features before release.*

1.  **Implement Export Functionality (F4):**
    *   Add a library like `html-to-image` for exporting components as images.
    *   Integrate a library like `papaparse` (CSV) and `jspdf` (PDF) for data table exports.
2.  **Add Animations & Transitions (Section 4):** Systematically apply the defined fade-in, slide-up, and chart animations to enhance the UX.
3.  **Responsiveness Testing:** Thoroughly test the dashboard on various screen sizes (desktop, tablet, mobile) and fix any layout issues.
4.  **Cross-Browser Testing:** Ensure consistent performance and appearance on major browsers (Chrome, Firefox, Safari, Edge).
5.  **Final QA:** A full round of quality assurance to catch bugs and usability issues.

#### **Phase 5: Deployment & Maintenance**

*Goal: Launch the application and plan for its future.*

1.  **Deployment:** Deploy the application to a hosting provider like Vercel (ideal for Next.js).
2.  **Monitoring:** Set up analytics and error monitoring (e.g., Sentry, LogRocket).
3.  **Documentation:** Create user guides and technical documentation.
4.  **Backlog Creation:** Plan for future features and improvements based on user feedback.