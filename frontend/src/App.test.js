import { render, screen } from '@testing-library/react';
import App from './App';

test('renders YOIS title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Hola, soy YOIS/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders about section', () => {
  render(<App />);
  const aboutSection = screen.getByText(/Sobre mí/i);
  expect(aboutSection).toBeInTheDocument();
});

test('renders contact section', () => {
  render(<App />);
  const contactSection = screen.getByText(/¿Hablamos\?/i);
  expect(contactSection).toBeInTheDocument();
});

test('renders projects section', () => {
  render(<App />);
  const projectsSection = screen.getByText(/Proyectos Actuales/i);
  expect(projectsSection).toBeInTheDocument();
});

test('renders cuotaplan project heading', () => {
  render(<App />);
  const cuotaplanHeading = screen.getByRole('heading', { name: /Cuotaplan/i });
  expect(cuotaplanHeading).toBeInTheDocument();
});

test('renders venta rifas project', () => {
  render(<App />);
  const ventaRifasProject = screen.getByText(/Venta Rifas/i);
  expect(ventaRifasProject).toBeInTheDocument();
});

test('renders adminbarrios project', () => {
  render(<App />);
  const adminBarriosProject = screen.getByText(/AdminBarrios/i);
  expect(adminBarriosProject).toBeInTheDocument();
});

test('renders contact email link', () => {
  render(<App />);
  const emailLink = screen.getByRole('link', { name: /📧 me@yoisar.com/i });
  expect(emailLink).toBeInTheDocument();
  expect(emailLink).toHaveAttribute('href', 'mailto:me@yoisar.com');
});

test('renders website link', () => {
  render(<App />);
  const websiteLink = screen.getByRole('link', { name: /🌐 yoisar.com/i });
  expect(websiteLink).toBeInTheDocument();
  expect(websiteLink).toHaveAttribute('href', 'https://www.yoisar.com');
});

test('renders developer description', () => {
  render(<App />);
  const description = screen.getByText(/Desarrollador Fullstack/i);
  expect(description).toBeInTheDocument();
});

test('renders contact button', () => {
  render(<App />);
  const contactButton = screen.getByRole('link', { name: /📧 Contactar/i });
  expect(contactButton).toBeInTheDocument();
});

test('renders view projects button', () => {
  render(<App />);
  const projectsButton = screen.getByRole('link', { name: /🚀 Ver Proyectos/i });
  expect(projectsButton).toBeInTheDocument();
});

test('renders project links', () => {
  render(<App />);
  
  // Test that all 3 project links exist
  const projectLinks = screen.getAllByRole('link', { name: /🔗 Ver Proyecto/i });
  expect(projectLinks).toHaveLength(3);
  
  // Test specific URLs
  expect(projectLinks[0]).toHaveAttribute('href', 'https://cuotaplan.com/index');
  expect(projectLinks[1]).toHaveAttribute('href', 'https://ventarifas.com');
  expect(projectLinks[2]).toHaveAttribute('href', 'https://adminbarrio.com');
});

test('displays dynamic years of experience', () => {
  render(<App />);
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2001;
  const experienceText = screen.getByText(new RegExp(`${yearsOfExperience} años de experiencia`, 'i'));
  expect(experienceText).toBeInTheDocument();
});

test('renders all project technologies', () => {
  render(<App />);
  
  // Check for technology badges
  const reactBadges = screen.getAllByText(/React/i);
  const laravelBadges = screen.getAllByText(/Laravel/i);
  
  expect(reactBadges.length).toBeGreaterThanOrEqual(3); // Should have at least 3 React badges
  expect(laravelBadges.length).toBeGreaterThanOrEqual(3); // Should have at least 3 Laravel badges
});

test('renders project categories', () => {
  render(<App />);
  
  // Check for project category badges
  const fintechBadge = screen.getByText(/FinTech/i);
  const ecommerceBadge = screen.getByText(/E-commerce/i);
  const proptechBadge = screen.getByText(/PropTech/i);
  
  expect(fintechBadge).toBeInTheDocument();
  expect(ecommerceBadge).toBeInTheDocument();
  expect(proptechBadge).toBeInTheDocument();
});
