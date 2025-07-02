Here's an extensive, topic-wise guide for an AG Grid React interview, with a strong emphasis on TypeScript integration, performance, and common use cases.

-----

# AG Grid React Interview Guide (Extensive Topic-Wise for React & TypeScript)

This document provides a comprehensive guide to AG Grid concepts, specifically tailored for its integration within React applications using TypeScript. It covers fundamental principles, advanced features, performance considerations, and best practices for building robust data grids.

## Table of Contents

1.  [Fundamentals of AG Grid](https://www.google.com/search?q=%231-fundamentals-of-ag-grid)
2.  [Integrating AG Grid with React](https://www.google.com/search?q=%232-integrating-ag-grid-with-react)
3.  [Column Definitions](https://www.google.com/search?q=%233-column-definitions)
4.  [Row Data Management](https://www.google.com/search?q=%234-row-data-management)
5.  [Key Features & Functionality](https://www.google.com/search?q=%235-key-features--functionality)
6.  [Grid API & Column API](https://www.google.com/search?q=%236-grid-api--column-api)
7.  [Server-Side Data (SSRM - Server-Side Row Model)](https://www.google.com/search?q=%237-server-side-data-ssrm---server-side-row-model)
8.  [Performance Optimization](https://www.google.com/search?q=%238-performance-optimization)
9.  [TypeScript Integration with AG Grid React](https://www.google.com/search?q=%239-typescript-integration-with-ag-grid-react)
10. [Custom Components](https://www.google.com/search?q=%2310-custom-components)
11. [Testing AG Grid Components](https://www.google.com/search?q=%2311-testing-ag-grid-components)
12. [Common Patterns & Best Practices](https://www.google.com/search?q=%2312-common-patterns--best-practices)
13. [Common Interview Questions & Scenarios](https://www.google.com/search?q=%2313-common-interview-questions--scenarios)

-----

## 1\. Fundamentals of AG Grid

  * **What is AG Grid?**
      * An enterprise-grade, highly performant, and feature-rich JavaScript data grid.
      * Designed to handle large datasets and provide advanced functionalities like filtering, sorting, grouping, pivoting, and aggregation.
      * Available in both community (free) and enterprise (licensed) versions, with the enterprise version offering more advanced features.
      * Framework-agnostic but provides specific wrappers for React, Angular, Vue, etc.
  * **Why use AG Grid? (Key Advantages)**
      * **Performance:** Optimized for speed and responsiveness, even with millions of rows, through techniques like row virtualization.
      * **Feature-rich:** Comes with almost every conceivable grid feature out-of-the-box.
      * **Customization:** Highly customizable through props, callbacks, and custom cell renderers/editors/filters.
      * **Extensibility:** Allows developers to extend its functionality with custom components.
      * **React Integration:** Provides a dedicated React component (`AgGridReact`) that integrates seamlessly with React's component model.
      * **TypeScript Support:** Excellent TypeScript type definitions.
  * **Core Concepts:**
      * **Grid Options:** A single object passed to the grid component that defines its entire configuration (`columnDefs`, `rowData`, features, callbacks, etc.).
      * **Column Definitions:** An array of objects, each defining a single column in the grid (e.g., header, field, width, sortable, filterable).
      * **Row Data:** The actual data displayed in the grid, typically an array of JavaScript objects.
      * **Grid API & Column API:** Objects that provide methods for programmatic control over the grid and its columns.
      * **Cell Renderers:** React components or functions used to customize how data is displayed within a cell.
      * **Cell Editors:** React components or functions used to customize how data is edited within a cell.

-----

## 2\. Integrating AG Grid with React

AG Grid provides the `AgGridReact` component for seamless integration.

  * **`AgGridReact` Component:**
      * The main React component that renders the AG Grid.
      * It accepts props for `rowData`, `columnDefs`, `gridOptions`, and various event handlers.
      * **Installation:** `npm install ag-grid-community ag-grid-react` (and `ag-grid-enterprise` if using licensed features).
    <!-- end list -->
    ```tsx
    // src/components/MyGrid.tsx
    import React, { useState, useRef, useMemo, useCallback } from 'react';
    import { AgGridReact } from 'ag-grid-react'; // React Grid Component
    import { ColDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community'; // AG Grid types

    import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS
    import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme (e.g., Quartz theme)

    interface IRow {
        make: string;
        model: string;
        price: number;
    }

    const MyGrid: React.FC = () => {
        const gridRef = useRef<AgGridReact<IRow>>(null); // Ref to access the grid instance
        const [rowData, setRowData] = useState<IRow[]>([]); // State for row data

        // Column Definitions: immutable, so use useMemo
        const [columnDefs] = useState<ColDef<IRow>[]>([
            { field: 'make', headerName: 'Make', filter: true, sortable: true },
            { field: 'model', headerName: 'Model' },
            { field: 'price', headerName: 'Price', valueFormatter: p => '$' + p.value.toLocaleString() },
        ]);

        // Default Column Definition: applies to all columns unless overridden
        const defaultColDef = useMemo<ColDef<IRow>>(() => {
            return {
                flex: 1, // Distribute available space evenly
                minWidth: 100,
                filter: true,
                resizable: true,
            };
        }, []);

        // Callback for when the grid is ready (API is available)
        const onGridReady = useCallback((params: GridReadyEvent<IRow>) => {
            // Access Grid API and Column API
            // const gridApi: GridApi<IRow> = params.api;
            // const columnApi: ColumnApi = params.columnApi;

            // Fetch data or set initial data
            fetch('https://www.ag-grid.com/example-assets/row-data.json')
                .then(resp => resp.json())
                .then((data: IRow[]) => setRowData(data));
        }, []);

        return (
            <div className="ag-theme-quartz" style={{ height: 500, width: '100%' }}>
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    onGridReady={onGridReady}
                    rowSelection="multiple" // Enable row selection
                    animateRows={true} // Animate row changes
                />
            </div>
        );
    };

    export default MyGrid;
    ```
  * **`useRef` for Grid API and Column API:**
      * Essential for programmatic interaction with the grid (e.g., getting selected rows, applying filters, resizing columns).
      * The `AgGridReact` ref gives access to the grid instance, which then provides `gridApi` and `columnApi`.
  * **Lifecycle Management in React:**
      * AG Grid manages its own internal state, but you control data and column definitions via React props.
      * **Initialization:** Set initial `rowData` and `columnDefs`.
      * **Updates:** AG Grid efficiently re-renders when `rowData` or `columnDefs` props change. Use `useMemo` for `columnDefs` and `defaultColDef` to prevent unnecessary re-renders.
      * **Cleanup:** AG Grid handles its own destruction when the `AgGridReact` component unmounts.

-----

## 3\. Column Definitions

`columnDefs` is an array of objects where each object configures a column.

  * **Basic Properties:**
      * `field` (string): The property name in your `rowData` object that corresponds to this column.
      * `headerName` (string): The text displayed in the column header.
      * `width`, `minWidth`, `maxWidth` (number): Pixel width.
      * `flex` (number): Allows columns to grow/shrink to fill space.
  * **Functional Properties:**
      * `sortable` (boolean): Enable sorting for this column.
      * `filter` (boolean | string): Enable filtering. Set to `true` for default filter, or `'agTextColumnFilter'`, `'agNumberColumnFilter'`, etc.
      * `resizable` (boolean): Allow users to resize the column.
      * `editable` (boolean | function): Allow direct cell editing. Can be a function for conditional editing.
      * `cellRenderer` (string | React Component | function): Customize cell display.
      * `valueFormatter` (function): Format cell value for display.
      * `valueGetter` (function): Derive a value for the cell from the row data.
      * `cellClass` (string | string[] | function): Apply CSS classes to cells.
      * `tooltipField` (string): Field to use for tooltip.
  * **Column Groups:**
      * Nest `columnDefs` to create hierarchical column headers.
    <!-- end list -->
    ```typescript
    const columnDefs: ColDef<IRow>[] = [
        {
            headerName: 'Product Details',
            children: [ // This creates a column group
                { field: 'make', headerName: 'Car Make', sortable: true, filter: true },
                { field: 'model', headerName: 'Car Model' },
            ]
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'numericColumn', // Built-in type for numeric alignment and formatting
            valueFormatter: params => params.value ? '$' + params.value.toLocaleString() : '',
            editable: true,
            // Custom cell renderer example (see Custom Components section)
            // cellRenderer: MyPriceCellRenderer,
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            editable: true,
            cellEditor: 'agNumberCellEditor', // Use built-in number editor
        }
    ];
    ```
  * **Default Column Definitions (`defaultColDef`):**
      * Applies a set of properties to *all* columns unless overridden by a specific column definition.
      * Useful for setting common properties like `flex`, `resizable`, `filter`, `sortable`.

-----

## 4\. Row Data Management

  * **`rowData` Prop:**
      * The primary way to supply data to the grid. It's an array of objects.
      * AG Grid expects `rowData` to be immutable for best performance.
  * **Updating `rowData`:**
      * When the `rowData` prop changes (i.e., you set a new array reference), AG Grid efficiently reconciles the changes.
      * **`deltaRowDataMode`:**
          * Enable this prop when you have unique IDs for your rows (`getRowId` callback).
          * AG Grid then performs smart updates by comparing row IDs, only updating/animating changed rows. This is highly performant for frequent, small data changes.
    <!-- end list -->
    ```tsx
    // Inside MyGrid component
    const getRowId = useCallback((params: GetRowIdParams<IRow>) => params.data.id, []);

    // In AgGridReact:
    <AgGridReact
        // ... other props
        rowData={rowData}
        deltaRowDataMode={true}
        getRowId={getRowId}
    />
    ```
  * **Row Selection:**
      * `rowSelection`: `'single'` or `'multiple'`.
      * `rowMultiSelectWithClick`: Enable multiple selection with standard click (instead of Ctrl+Click).
      * `checkboxSelection`: Set on `ColDef` to display checkboxes in a specific column for selection.
      * `headerCheckboxSelection`: Set on `ColDef` to display a checkbox in the header for select/deselect all.
      * `onSelectionChanged`: Callback event when row selection changes. Use `gridApi.getSelectedRows()` to get selected data.
  * **Row Pinning:**
      * `pinnedTopRowData` and `pinnedBottomRowData` props for rows that always stay at the top or bottom of the grid, even during scrolling.

-----

## 5\. Key Features & Functionality

AG Grid offers an extensive set of features:

  * **Filtering:**
      * **Built-in Filters:** Text, Number, Date, Set filters (provided by AG Grid). Configured via `filter: true` or `filter: 'agTextColumnFilter'`.
      * **Custom Filters:** Implement your own React components for highly specific filtering logic.
      * **External Filters:** Apply a filter to the entire grid based on external UI elements.
      * `filterParams`: Object to configure built-in filters (e.g., `filterParams: { buttons: ['apply', 'reset'] }`).
  * **Sorting:**
      * `sortable: true` on `ColDef`.
      * Single-column (default) or multi-column sorting (Ctrl+Click).
      * Custom sort comparators (`comparator` on `ColDef`).
  * **Pagination:**
      * `pagination: true`: Enables client-side pagination.
      * `paginationPageSize`: Number of rows per page.
      * `paginationPageSizeSelector`: Array of page sizes for a dropdown.
      * **Client-Side Pagination:** Grid loads all data, then paginates it in the UI.
      * **Server-Side Pagination:** (See SSRM section) Grid requests pages of data from the server as needed.
  * **Row Grouping & Aggregation:**
      * `rowGroup: true` on `ColDef` to group by a column.
      * `aggFunc` (e.g., `'sum'`, `'avg'`, `'count'`) or custom aggregation functions on `ColDef`.
      * `groupDefaultExpanded`: How many levels of groups are expanded by default.
  * **Pivoting:**
      * `enablePivot: true` and `pivot: true` on `ColDef` to transform rows into columns dynamically.
  * **Cell Editing:**
      * `editable: true` on `ColDef`.
      * Built-in editors (`agTextCellEditor`, `agNumberCellEditor`, `agSelectCellEditor`).
      * **Custom Cell Editors:** Create React components for complex editing experiences.
      * `onCellValueChanged` event: Callback after a cell value has been changed.
      * **Validation:** Use `valueSetter` or `cellEditor` logic to validate inputs.
  * **Cell Rendering:**
      * **Custom Cell Renderers:** React components to render complex cell content (e.g., buttons, images, sparklines).
      * `cellRendererSelector`: Dynamically choose a renderer based on row data.
  * **Value Formatters & Getters:**
      * `valueFormatter`: Transforms the data for display in the cell (e.g., adding currency symbols). Does NOT change the underlying data.
      * `valueGetter`: Derives the cell's underlying value from other row data properties. Used for sorting/filtering on computed values.
  * **Exporting:**
      * `gridApi.exportDataAsCsv()`, `gridApi.exportDataAsExcel()` for client-side exports.
  * **Themes:**
      * AG Grid provides several built-in themes (e.g., `ag-theme-quartz`, `ag-theme-alpine`).
      * Custom CSS can override theme variables or provide entirely custom themes.

-----

## 6\. Grid API & Column API

These APIs provide programmatic control over the grid and its columns.

  * **Accessing APIs:**
      * Via the `onGridReady` callback: `params.api` (Grid API) and `params.columnApi` (Column API).
      * Via `useRef`: `gridRef.current.api` and `gridRef.current.columnApi`.
  * **Common Grid API Methods:**
      * `setRowData(data)`: Updates all row data.
      * `getSelectedRows()`: Returns an array of selected row data.
      * `getSelectedNodes()`: Returns an array of selected row nodes (more detailed information).
      * `sizeColumnsToFit()`: Adjusts column widths to fit grid width.
      * `setFilterModel(model)`: Programmatically apply filters.
      * `getFilterModel()`: Get current filter state.
      * `paginationGoToPage(pageIndex)`: Navigate to a specific page.
      * `applyTransaction(transaction)`: Efficiently add, remove, or update rows (especially useful with `deltaRowDataMode`).
      * `flashCells(params)`: Temporarily highlight cells.
  * **Common Column API Methods:**
      * `getAllColumns()`: Get definitions of all columns.
      * `setColumnVisible(key, visible)`: Show/hide columns.
      * `applyColumnState(state)`: Programmatically set column order, width, visibility.
      * `getColumnState()`: Get current column state.

-----

## 7\. Server-Side Data (SSRM - Server-Side Row Model)

For very large datasets where loading all data client-side is not feasible.

  * **When to use it:** When you have hundreds of thousands or millions of rows.
  * **Concepts:**
      * **Lazy Loading:** Data is only fetched from the server as needed (e.g., when scrolling or changing pages).
      * **Infinite Scrolling:** Grid automatically fetches more data as the user scrolls to the end.
      * **Server-Side Filtering, Sorting, Grouping, Pivoting:** These operations are performed on the server, and the grid sends relevant parameters to the server.
  * **Implementing a Server-Side Datasource:**
      * You provide a `dataSource` object to the grid that implements the `IServerSideDatasource` interface.
      * The `getRows(params)` method of the datasource is called by the grid when it needs data.
      * `params` will contain information about requested range, sort models, filter models, row group models, etc.
      * Your backend API should process these parameters and return the requested data along with the `lastRow` count.
    <!-- end list -->
    ```typescript
    // Example (simplified):
    import { IServerSideDatasource, IServerSideGetRowsParams } from 'ag-grid-community';

    const serverSideDatasource: IServerSideDatasource = {
        getRows: (params: IServerSideGetRowsParams) => {
            // Construct your API request based on params.request (startRow, endRow, sortModel, filterModel, etc.)
            const query = {
                startRow: params.request.startRow,
                endRow: params.request.endRow,
                sortModel: params.request.sortModel,
                filterModel: params.request.filterModel,
                // ... other models for grouping, pivot
            };

            fetch('/api/data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(query),
            })
            .then(response => response.json())
            .then(data => {
                // Call successCallback with rows and total row count
                params.successCallback(data.rows, data.lastRow);
            })
            .catch(error => {
                console.error('Error fetching server-side data:', error);
                params.failCallback();
            });
        },
    };

    // In AgGridReact:
    <AgGridReact
        // ...
        rowModelType="serverSide"
        serverSideDatasource={serverSideDatasource}
        // Enable server-side specific features
        enableServerSideSort={true}
        enableServerSideFilter={true}
        // ...
    />
    ```

-----

## 8\. Performance Optimization

  * **Immutable Data Updates:** Always provide new array references for `rowData` and `columnDefs` when they change. AG Grid's internal diffing mechanism relies on this.
  * **`deltaRowDataMode`:** Crucial for efficient updates with changing data, especially when animations are desired. Requires `getRowId`.
  * **Virtualization:** AG Grid automatically virtualizes rows and columns, meaning it only renders what's visible in the viewport. Ensure your grid has explicit `height` and `width` or is in a flex container to enable this.
  * **Efficient Custom Components (Cell Renderers/Editors):**
      * Keep your React custom components (`cellRendererFramework`, `cellEditorFramework`) as light as possible.
      * Avoid complex DOM structures or excessive calculations within them.
      * Use `React.memo` for your custom components if they don't depend on props that change frequently.
  * **Debouncing/Throttling Grid Updates:** If you're frequently updating grid props (e.g., filtering from a search input), debounce the updates to `rowData` or filter models.
  * **Batch Updates (`applyTransaction`):** When making multiple changes to row data (add, remove, update), use `gridApi.applyTransaction` to update the grid in a single batch, which is more efficient than individual `setRowData` calls.
  * **Column & Grid API usage:** Prefer using the API for programmatic changes over prop changes where appropriate (e.g., `setFilterModel` for filters rather than re-rendering the whole grid).

-----

## 9\. TypeScript Integration with AG Grid React

AG Grid provides comprehensive TypeScript type definitions, making development safer and more efficient.

  * **Install Type Definitions:** Usually included with `ag-grid-community` and `ag-grid-react` installations.
  * **Typing `rowData`:** Define an interface for your row data objects.
    ```typescript
    interface ICar {
        id: string; // Crucial for deltaRowDataMode
        make: string;
        model: string;
        price: number;
        year: number;
        // ... other properties
    }
    ```
  * **Typing `AgGridReact`:** Use the generic type parameter for your row data interface.
    ```typescript
    const gridRef = useRef<AgGridReact<ICar>>(null); // Ensures gridApi and rowData are typed
    ```
  * **Typing `ColDef`:** Use the generic type parameter for `ColDef` to ensure `field` and `valueGetter`/`valueFormatter` `params` are correctly typed.
    ```typescript
    import { ColDef, ValueFormatterParams, ICellRendererParams } from 'ag-grid-community';

    const columnDefs: ColDef<ICar>[] = [
        { field: 'make' },
        {
            field: 'price',
            valueFormatter: (params: ValueFormatterParams<ICar, number>) => { // params.data is ICar, params.value is number
                return params.value ? '$' + params.value.toLocaleString() : '';
            }
        },
        {
            headerName: 'Actions',
            cellRenderer: (params: ICellRendererParams<ICar>) => { // params.data is ICar
                return <button onClick={() => alert(`Edit ${params.data?.make}`)}>Edit</button>;
            }
        }
    ];
    ```
  * **Typing `GridReadyEvent`:**
    ```typescript
    import { GridReadyEvent } from 'ag-grid-community';
    const onGridReady = useCallback((params: GridReadyEvent<ICar>) => {
        const api = params.api; // api is now typed as GridApi<ICar>
    }, []);
    ```
  * **Typing Custom Components (Cell Renderers/Editors):**
      * AG Grid provides interfaces like `ICellRendererParams`, `ICellEditorParams`, `IFilterParams`, `IHeaderParams`.
      * Pass your row data interface as a generic type argument to these interfaces. (See Custom Components section).

-----

## 10\. Custom Components

AG Grid excels at allowing you to plug in your own React components for various parts of the grid.

  * **Custom Cell Renderers:**
      * React components to render cell content.
      * Must accept `ICellRendererParams<TData>` as props.
      * If `refresh` method is present, AG Grid calls it to update the cell, otherwise it re-renders the component.
    <!-- end list -->
    ```tsx
    // src/components/PriceCellRenderer.tsx
    import React, { memo } from 'react';
    import { ICellRendererParams } from 'ag-grid-community';

    interface IPriceCellRendererParams extends ICellRendererParams<IRow, number> {} // Params for 'price' field

    const PriceCellRenderer: React.FC<IPriceCellRendererParams> = memo(({ value }) => {
        if (value === undefined || value === null) {
            return <span>-</span>;
        }
        const color = value > 50000 ? 'green' : 'red';
        return <span style={{ color }}>${value.toLocaleString()}</span>;
    });

    export default PriceCellRenderer;

    // Usage in columnDefs:
    // { field: 'price', cellRenderer: PriceCellRenderer }
    ```
  * **Custom Cell Editors:**
      * React components for editing cell content.
      * Must implement `ICellEditorReactComp` interface.
      * Required methods: `getValue()`, `isPopup()`, `isCancelBeforeStart()`, `focusIn()`.
      * Receive `ICellEditorParams<TData>` as props.
  * **Custom Filters:**
      * React components for custom filter UIs.
      * Must implement `IFilterReactComp` interface.
      * Required methods: `isFilterActive()`, `doesFilterPass()`, `getModel()`, `setModel()`, `afterGuiAttached()`.
  * **Custom Header Components:**
      * React components for custom header rendering.
      * Accept `IHeaderParams<TData>` as props.
  * **Registering Custom Components:**
      * Provide them in the `components` or `frameworkComponents` prop of `AgGridReact`.
    <!-- end list -->
    ```tsx
    // In MyGrid.tsx
    const components = useMemo(() => ({
        priceCellRenderer: PriceCellRenderer,
        myCustomEditor: MyCustomEditor, // Assuming MyCustomEditor component exists
    }), []);

    // In AgGridReact:
    <AgGridReact
        // ...
        components={components}
        // ...
    />

    // In ColDef:
    // { field: 'price', cellRenderer: 'priceCellRenderer' }
    // { field: 'quantity', editable: true, cellEditor: 'myCustomEditor' }
    ```

-----

## 11\. Testing AG Grid Components

Testing AG Grid components requires a thoughtful approach, balancing unit tests for custom logic and integration tests for component rendering.

  * **Testing Custom Cell Renderers/Editors/Filters:**
      * These are standard React components. Test them in isolation using `React Testing Library`.
      * Mock the `params` object that AG Grid would pass to them.
    <!-- end list -->
    ```typescript
    // __tests__/PriceCellRenderer.test.tsx
    import { render, screen } from '@testing-library/react';
    import PriceCellRenderer from '../src/components/PriceCellRenderer';

    describe('PriceCellRenderer', () => {
        it('renders price correctly with green color for high value', () => {
            const params = { value: 60000, data: { /* ... */ } } as any; // Mock params
            render(<PriceCellRenderer {...params} />);
            expect(screen.getByText('$60,000')).toHaveStyle('color: green');
        });

        it('renders price correctly with red color for low value', () => {
            const params = { value: 40000, data: { /* ... */ } } as any;
            render(<PriceCellRenderer {...params} />);
            expect(screen.getByText('$40,000')).toHaveStyle('color: red');
        });

        it('renders dash for null/undefined value', () => {
            const params = { value: null, data: { /* ... */ } } as any;
            render(<PriceCellRenderer {...params} />);
            expect(screen.getByText('-')).toBeInTheDocument();
        });
    });
    ```
  * **Testing Grid Interactions (Filtering, Sorting, Selection):**
      * For basic tests, you can render the `AgGridReact` component and interact with the DOM elements (`@testing-library/react`).
      * Use `gridApi` and `columnApi` methods (accessed via `gridRef`) to programmatically trigger and assert grid state changes (e.g., `api.setFilterModel`, `api.getSelectedRows()`).
      * This often involves waiting for grid to render using `waitFor` or `findBy`.
      * For `GridReadyEvent` callback, you might need to mock or ensure it's called in your test setup.
  * **Mocking AG Grid:** For complex components that *contain* an AG Grid, you might mock `AgGridReact` to simplify tests and avoid full grid rendering overhead. This lets you test your component's logic without getting bogged down by AG Grid's internal complexities.

-----

## 12\. Common Patterns & Best Practices

  * **Centralize Column Definitions:** Store `columnDefs` in a separate file or a custom hook, especially for large grids. This promotes reusability and maintainability.
  * **Memoize Props:** Use `useMemo` for `columnDefs`, `defaultColDef`, and `components` to prevent unnecessary re-renders of the `AgGridReact` component. `rowData` should typically be updated with a new array reference from `useState`.
  * **Manage Grid State (Column State, Filter State):**
      * Persist column order, width, and visibility using `gridApi.getColumnState()` and `gridApi.applyColumnState()`. Store this state in `localStorage` or a backend.
      * Similarly, persist filter and sort models using `gridApi.getFilterModel()`/`setFilterModel()` and `gridApi.getSortModel()`/`setSortModel()`.
  * **When to use AG Grid vs. simpler tables:**
      * **AG Grid:** When you need advanced features (filtering, sorting, grouping, editing, large datasets, customization, performance).
      * **Simple HTML Table / UI Library Table:** For basic tabular data display with minimal interactivity and small datasets.
  * **Error Handling:** Implement robust error handling, especially for server-side operations (`IServerSideDatasource` `failCallback`) and external data fetches.
  * **Accessibility:** AG Grid has good built-in accessibility, but ensure custom components also follow ARIA best practices.
  * **Theming:** Stick to built-in themes for consistency unless specific branding is required. Override theme CSS variables for minor adjustments.
  * **Data Transformation:** Use `valueFormatter` for display-only transformations and `valueGetter` when the underlying value for sorting/filtering needs to be derived.

-----

## 13\. Common Interview Questions & Scenarios

  * **"What is AG Grid, and what are its primary advantages over a standard HTML table or a basic UI library table?"**
  * **"How do you integrate AG Grid into a React application using `AgGridReact`?"**
  * **"Explain the role of `columnDefs` and `rowData` in AG Grid. How do you define them?"**
  * **"What is `deltaRowDataMode` and why is it important for performance? What other property is required to use it?"**
  * **"How do you enable and configure features like sorting, filtering, and row selection in AG Grid?"**
  * **"Describe how to implement a custom cell renderer in React for AG Grid. What interface does it need to implement, and what props does it receive?"**
  * **"When would you use `valueFormatter` versus `valueGetter`?"**
  * **"What are the Grid API and Column API? How do you access them, and give examples of common methods you'd use?"**
  * **"Explain the Server-Side Row Model (SSRM). When would you use it, and how does it work conceptually?"**
  * **"What are some key performance considerations when working with AG Grid, especially with large datasets or frequent updates?"**
  * **"How do you ensure strong TypeScript typing when working with AG Grid, particularly for `columnDefs` and custom components?"**
  * **"How would you persist a user's column state (order, width, visibility) between sessions?"**
  * **"Can you combine multiple AG Grid features like grouping, filtering, and pagination simultaneously?"**
  * **"How do you handle cell editing and capture changes made by the user?"**
  * **"How would you test a React component that contains an AG Grid, focusing on testing custom renderers/editors and grid interactions?"**
  * **Coding Scenarios:**
      * Create a simple `AgGridReact` component displaying a list of users (`name`, `email`, `age`), enabling sorting and text filtering on `name` and `email`. Ensure all props and data are correctly typed with TypeScript.
      * Implement a custom cell renderer for an 'Action' column that displays a button to 'View Details' for a row.
      * Modify the previous example to use `deltaRowDataMode` and show how to update a single row's data programmatically.
      * Demonstrate how to export the grid data to CSV using the Grid API.
      * (Advanced) Outline the structure of a `IServerSideDatasource` for a grid that supports server-side pagination and sorting.

-----