import { render, screen } from '@testing-library/react';
import App from './App';

test('renders YOIS title', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { name: /YOIS/i });
  expect(titleElement).toBeInTheDocument();
});

test('renders about section', () => {
  render(<App />);
  const aboutSection = screen.getByText(/Sobre mí/i);
  expect(aboutSection).toBeInTheDocument();
});

test('renders contact section', () => {
  render(<App />);
  const contactSection = screen.getByText(/Contacto/i);
  expect(contactSection).toBeInTheDocument();
});

test('renders projects section', () => {
  render(<App />);
  const projectsSection = screen.getByText(/Proyectos Actuales/i);
  expect(projectsSection).toBeInTheDocument();
});

test('renders Cuotaplan project', () => {
  render(<App />);
  const cuotaplanProject = screen.getByText(/Cuotaplan/i);
  expect(cuotaplanProject).toBeInTheDocument();
});

test('renders email link', () => {
  render(<App />);
  const emailLink = screen.getByText(/Escribime/i);
  expect(emailLink).toBeInTheDocument();
});

test('renders website link', () => {
  render(<App />);
  const websiteLink = screen.getByText(/yoisar.com/i);
  expect(websiteLink).toBeInTheDocument();
});
