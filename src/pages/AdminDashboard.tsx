import React from 'react';
import { AdminPage } from './AdminPage';

export interface AdminDashboardProps {
  onBackToStore?: () => void;
}

/**
 * Admin Dashboard per il titolare di VELORA.
 * Gestione catalogo prodotti (Bouquet, Piante, Composizioni, Arte Funebre),
 * upload immagini su Cloudinary con anteprima istantanea e sincronizzazione Spring Boot.
 */
export const AdminDashboard: React.FC<AdminDashboardProps> = (props) => {
  return <AdminPage {...props} />;
};

export default AdminDashboard;

