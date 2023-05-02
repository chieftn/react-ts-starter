import * as React from 'react';
import { useMatches } from 'react-router-dom';

export type Match = ReturnType<typeof useMatches>[number];
export type BreadcrumbFunction = (match: Match) => React.ReactNode;

export const Breadcrumbs: React.FC = () => {
    const matches: Match[] = useMatches();
    const crumbs = matches
      .filter((match: any) => Boolean(match.handle?.crumb)) // eslint-disable-line @typescript-eslint/no-explicit-any
      .map((match: any) => match.handle.crumb(match)); // eslint-disable-line @typescript-eslint/no-explicit-any

    return (
      <ol>
        {crumbs.map((crumb, index) => (
          <li key={index}>{crumb}</li>
        ))}
      </ol>
    );
  }