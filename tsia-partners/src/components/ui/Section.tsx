import React from 'react';
import { cn } from '@/utils/cn';
import Container from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  background?: 'white' | 'grey' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      children,
      background = 'white',
      padding = 'lg',
      containerSize = 'lg',
      ...props
    },
    ref
  ) => {
    const backgrounds = {
      white: 'bg-white',
      grey: 'bg-gradient-to-br from-gray-50 to-gray-100',
      gradient: 'bg-gradient-to-br from-white via-gray-50 to-gray-100',
    };

    const paddings = {
      none: '',
      sm: 'py-12',
      md: 'py-16',
      lg: 'py-20',
    };

    return (
      <section
        ref={ref}
        className={cn(backgrounds[background], paddings[padding], className)}
        {...props}
      >
        <Container size={containerSize}>{children}</Container>
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;