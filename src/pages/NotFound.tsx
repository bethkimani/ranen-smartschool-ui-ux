import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ButtonLink } from '../components/ui/ButtonLink';

export function NotFound() {
  return (
    <PageHero
      title="Page not found"
      description="The page you're looking for may have moved. Let's get you back on track."
      crumbs={[{ label: 'Not found' }]}>
      
      <div className="flex flex-col gap-3 sm:flex-row">
        <ButtonLink to="/" size="lg">
          Back to Home
        </ButtonLink>
        <ButtonLink to="/contact" variant="outlineLight" size="lg">
          Contact the School
        </ButtonLink>
      </div>
    </PageHero>);

}