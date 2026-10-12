import React, { createContext, useContext } from 'react';

const DraftLabelsContext = createContext<boolean>(true);

type DraftLabelsProviderProps = {value: boolean;children: React.ReactNode;};

export function DraftLabelsProvider({ value, children }: DraftLabelsProviderProps) {
  return <DraftLabelsContext.Provider value={value}>{children}</DraftLabelsContext.Provider>;
}

export function useDraftLabels() {
  return useContext(DraftLabelsContext);
}