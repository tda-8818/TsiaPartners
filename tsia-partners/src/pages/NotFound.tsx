import React from 'react';
import { Container, Section } from '@/components/ui';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="pt-20">
      <Section padding="lg">
        <Container size="sm">
          <div className="text-center py-20">
            <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-neutral-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Sorry, the page you're looking for doesn't exist.
            </p>
            <a href="/">
              <button className="bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white px-8 py-4 rounded-full font-semibold shadow-md-subtle hover:shadow-lg-subtle hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2">
                <Home size={20} />
                Back to Home
              </button>
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default NotFound;