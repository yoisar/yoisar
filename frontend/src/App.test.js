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

test('renders cuotaplan project', () => {
  render(<App />);
  const cuotaplanProject = screen.getByText(/Cuotaplan/i);
  expect(cuotaplanProject).toBeInTheDocument();
});

test('renders venta rifas project', () => {
  render(<App />);
  const ventaRifasProject = screen.getByText(/Venta Rifas/i);
  expect(ventaRifasProject).toBeInTheDocument();
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
