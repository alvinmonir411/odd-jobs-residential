'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type RevealDirection = 'up' | 'left' | 'right' | 'zoom';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  direction?: RevealDirection;
}

const HIDDEN_STATE_CLASSES: Record<RevealDirection, string> = {
  up: 'translate-y-6 opacity-0',
  left: '-translate-x-6 opacity-0',
  right: 'translate-x-6 opacity-0',
  zoom: 'scale-[0.95] opacity-0',
};

/**
 * Smoothly reveals content once as it enters the viewport while respecting
 * reduced-motion preferences and ensuring no element remains stuck hidden.
 */
export function ScrollReveal({
  children,
  className = '',
  delayMs = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    let rafId = 0;
    const revealSoon = () => {
      rafId = window.requestAnimationFrame(() => {
        setIsVisible(true);
      });
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealSoon();
      return () => window.cancelAnimationFrame(rafId);
    }

    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.96) {
      revealSoon();
      return () => window.cancelAnimationFrame(rafId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -10px 0px',
      },
    );

    observer.observe(element);

    return () => {
      window.cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  const stateClasses = isVisible
    ? 'translate-x-0 translate-y-0 scale-100 opacity-100'
    : HIDDEN_STATE_CLASSES[direction];

  return (
    <div
      ref={containerRef}
      style={delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined}
      className={`transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${stateClasses} ${className}`}
    >
      {children}
    </div>
  );
}
