import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Content } from '@prismicio/client';
import { client } from '../prismic';

// Define the shape of layout data
type LayoutDataContextType = Content.LayoutDocument | null;

// Create the context
const LayoutContext = createContext<LayoutDataContextType>(null);

// Create the provider component
export const LayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [layout, setLayout] = useState<LayoutDataContextType>(null);

  useEffect(() => {
    const fetchLayoutData = async () => {
      // Fetch the singleton "layout" document
      const layoutDoc = await client.getSingle('layout');
      if (layoutDoc) {
        setLayout(layoutDoc);
      }
    };
    fetchLayoutData();
  }, []);

  return (
    <LayoutContext.Provider value={layout}>
      {children}
    </LayoutContext.Provider>
  );
};

// Create a custom hook to easily access the context
export const useLayoutData = () => {
  return useContext(LayoutContext);
};