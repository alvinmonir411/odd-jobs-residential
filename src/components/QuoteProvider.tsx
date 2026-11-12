'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { QuoteModal } from './QuoteModal';

interface QuoteModalContextValue {
  openQuote: (serviceTitle?: string) => void;
}

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(
    undefined,
  );

  const openQuote = useCallback((serviceTitle?: string) => {
    setSelectedService(serviceTitle);
    setQuoteOpen(true);
  }, []);

  const handleCloseQuote = useCallback(() => {
    setQuoteOpen(false);
  }, []);

  return (
    <QuoteModalContext.Provider value={{ openQuote }}>
      {children}
      <QuoteModal
        isOpen={quoteOpen}
        initialService={selectedService}
        onClose={handleCloseQuote}
      />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal(): QuoteModalContextValue {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteProvider');
  }
  return context;
}
