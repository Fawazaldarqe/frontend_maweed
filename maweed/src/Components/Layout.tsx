import { ReactElement } from 'react';
import { Nav1 } from './Nav1';
interface LayoutProps {
	children: ReactElement;
}
export function Layout({ children }: LayoutProps) {
	return <>
	<Nav1/>
	{children}</>;
}
