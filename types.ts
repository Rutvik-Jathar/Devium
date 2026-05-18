
import React from 'react';

export interface NavLink {
  name: string;
  path: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  snippet?: React.ReactNode;
}
