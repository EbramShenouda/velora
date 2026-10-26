import React, { useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCatalog } from '../context/CatalogContext';
import { siteConfig } from '../config/siteConfig';
import { BrandLogo } from '../components/layout/BrandLogo';
import { ProductFormModal } from '../components/admin/ProductFormModal';
import { AnnouncementBarEditor } from '../components/admin/AnnouncementBarEditor';
import { Product, CategoryId } from '../types/catalog';
import {
  Lock,
  LogOut,
  ArrowLeft,
  Plus,
  Search,
  Flame,
  Package,
  AlertCircle,
  Edit2,
  Trash2,
  CheckCircle,
  Megaphone,
  Eye,
  Store,
  Key,
} from 'lucide-react';

interface AdminPageProps {
  onBackToStore?: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onBackToStore }) => {
  const { isAuthenticated, user, login, logout, isLoading: authLoading } = useAuth();
  const {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    toggleStock,
    toggleOffer,
    announcement,
  } = useCatalog();

  // Login Form State
  const [usernameInput, setUsernameInput] = useState('admin');
  const [passwordInput, setPasswordInput] = useState('velora2026!');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Admin Dashboard State
  const [activeTab, setActiveTab] = useState<'catalog' | 'announcement'>('catalog');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'stock' | 'out_of_stock' | 'promo' | CategoryId>('all');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Handle Login
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setIsLoggingIn(true);
    try {
      const result = await login(usernameInput, passwordInput);
      if (!result.success) {
        setLoginError(result.error || 'Credenziali non valide.');
      }
    } catch {
      setLoginError('Impossibile accedere al servizio.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  // KPI Calculations
  const stats = useMemo(() => {
    const total = products.length;
    const inStock = products.filter((p) => p.stockQuantity > 0).length;
    const outOfStock = products.filter((p) => p.stockQuantity === 0).length;
    const inPromo = products.filter((p) => p.isPromo).length;
    return { total, inStock, outOfStock, inPromo };
  }, [products]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Search text
      const matchesSearch =
        searchQuery === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.badge.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      // Filter category/type
      if (filterType === 'all') return true;
      if (filterType === 'stock') return p.stockQuantity > 0;
      if (filterType === 'out_of_stock') return p.stockQuantity === 0;
      if (filterType === 'promo') return !!p.isPromo;
      return p.category === filterType;
    });
  }, [products, searchQuery, filterType]);

  const handleOpenCreateModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleSaveProduct = async (productData: Partial<Product>) => {
    if (selectedProduct) {
      await updateProduct(selectedProduct.id, productData);
    } else {
      await addProduct(productData as Omit<Product, 'id'>);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    await deleteProduct(id);
  };

  // Navigates back to storefront
  const navigateBack = () => {
    if (onBackToStore) {
      onBackToStore();
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // =========================================================================
  // 1. LOGIN SCREEN (If not authenticated)
  // =========================================================================
  if (!isAuthenticated && !authLoading) {
    return (
      <div className="min-h-screen bg-cream flex flex-col justify-center items-center p-4 sm:p-6 relative select-none">
        
        {/* Return to website link */}
        <button
          onClick={navigateBack}
          className="absolute top-6 left-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-botanical-950 transition-colors bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full shadow-sm border border-stone-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna al Negozio</span>
        </button>

        <div className="max-w-md w-full bg-white rounded-[2.5rem] p-7 sm:p-10 shadow-2xl border border-stone-200 space-y-6">
          <div className="text-center space-y-2">
            <BrandLogo size="md" variant="dark" />
            <div className="pt-3">
              <span className="px-3 py-1 rounded-full bg-botanical-950 text-petal text-[10px] font-bold uppercase tracking-[0.25em]">
                Pannello Riservato Fiorista
              </span>
              <h2 className="font-serif text-3xl font-semibold text-botanical-950 mt-2">
                Accesso Dashboard
              </h2>
              <p className="text-xs text-stone-500">
                Gestisci catalogo, scatta foto, aggiorna lo stock e le promozioni del giorno.
              </p>
            </div>
          </div>

          {loginError && (
            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-center gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold uppercase tracking-wider text-stone-600 mb-1">
                Username / Identificativo
              </label>
              <input
                type="text"
                required
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                placeholder="admin"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-stone-800 focus:outline-none focus:ring-2 focus:ring-botanical-900 font-medium"
              />
            </div>

            <div>
              <label className="block font-bold uppercase tracking-wider text-stone-600 mb-1">
                Password o PIN Bottega
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-stone-800 focus:outline-none focus:ring-2 focus:ring-botanical-900 font-medium"
              />
            </div>

            {/* Quick Demo Fill Pill */}
            <div className="p-3 rounded-xl bg-botanical-50 border border-botanical-100 text-[11px] text-botanical-900 flex items-center justify-between">
              <span>Credenziali rapide: <strong>admin</strong> / <strong>velora2026!</strong></span>
              <button
                type="button"
                onClick={() => {
                  setUsernameInput('admin');
                  setPasswordInput('velora2026!');
                }}
                className="text-clay underline font-bold"
              >
                Compila
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-4 bg-botanical-950 hover:bg-clay text-white rounded-2xl font-bold uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
            >
              <Lock className="w-4 h-4" />
              <span>{isLoggingIn ? 'Verifica...' : 'Accedi al Pannello →'}</span>
            </button>
          </form>

        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. AUTHENTICATED ADMIN DASHBOARD
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#F6F4EE] text-stone-800 font-sans antialiased pb-24">
      
      {/* Admin Sticky Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-stone-200/80 shadow-sm py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left Brand + Mode */}
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" variant="dark" showTagline={false} />
            <div className="hidden sm:block pl-3 border-l border-stone-300">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-clay block">
                Dashboard Amministrazione
              </span>
              <span className="text-xs text-stone-500 font-medium">
                Connesso come: <strong className="text-botanical-950">{user?.username || 'Titolare'}</strong>
              </span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={navigateBack}
              className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-botanical-950 text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Store className="w-3.5 h-3.5 text-clay" />
              <span className="hidden sm:inline">Vedi Negozio Online</span>
            </button>

            <button
              onClick={logout}
              className="p-2 sm:px-3 sm:py-2 rounded-xl border border-rose-200 hover:bg-rose-50 text-rose-600 text-xs font-bold transition-colors flex items-center gap-1.5"
              title="Disconnetti"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Esci</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Admin Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 space-y-6">
        
        {/* KPI Quick Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">
                Totale Creazioni
              </span>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-botanical-950 mt-0.5">
                {stats.total}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-botanical-50 text-botanical-900 flex items-center justify-center font-bold">
              🌿
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">
                Disponibili (In Stock)
              </span>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-emerald-700 mt-0.5">
                {stats.inStock}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">
                Esauriti
              </span>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-rose-600 mt-0.5">
                {stats.outOfStock}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">
                In Offerta 🔥
              </span>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-clay mt-0.5">
                {stats.inPromo}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-clay flex items-center justify-center">
              <Flame className="w-5 h-5 fill-clay" />
            </div>
          </div>

        </div>

        {/* Section Navigation Tabs */}
        <div className="flex border-b border-stone-300 gap-3 text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('catalog')}
            className={`pb-3 px-2 border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'catalog'
                ? 'border-botanical-950 text-botanical-950 font-bold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Gestione Catalogo Prodotti ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('announcement')}
            className={`pb-3 px-2 border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'announcement'
                ? 'border-botanical-950 text-botanical-950 font-bold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Megaphone className="w-4 h-4" />
            <span>Top Announcement & Promozioni</span>
            {announcement.active && (
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            )}
          </button>
        </div>

        {/* ===================================================================
            TAB 1: CATALOG MANAGEMENT (CRUD)
            =================================================================== */}
        {activeTab === 'catalog' && (
          <div className="space-y-5">
            
            {/* Filter and Search Bar */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cerca per titolo, fiore o categoria..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-cream focus:outline-none focus:ring-1 focus:ring-botanical-900"
                />
              </div>

              {/* Action: Add new product button */}
              <button
                type="button"
                onClick={handleOpenCreateModal}
                className="px-5 py-2.5 rounded-xl bg-botanical-950 hover:bg-clay text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 shrink-0 active:scale-95"
              >
                <Plus className="w-4 h-4" />
                <span>+ Aggiungi Creazione</span>
              </button>
            </div>

            {/* Quick Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-stone-500 font-semibold text-[11px] uppercase mr-1">Filtra:</span>
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 rounded-full font-bold uppercase text-[11px] transition-all ${
                  filterType === 'all'
                    ? 'bg-botanical-950 text-white'
                    : 'bg-white border border-stone-300 text-stone-600 hover:bg-stone-50'
                }`}
              >
                Tutti ({products.length})
              </button>
              <button
                onClick={() => setFilterType('stock')}
                className={`px-3 py-1.5 rounded-full font-bold uppercase text-[11px] transition-all ${
                  filterType === 'stock'
                    ? 'bg-emerald-800 text-white'
                    : 'bg-white border border-stone-300 text-stone-600 hover:bg-stone-50'
                }`}
              >
                In Stock ({stats.inStock})
              </button>
              <button
                onClick={() => setFilterType('out_of_stock')}
                className={`px-3 py-1.5 rounded-full font-bold uppercase text-[11px] transition-all ${
                  filterType === 'out_of_stock'
                    ? 'bg-rose-700 text-white'
                    : 'bg-white border border-stone-300 text-stone-600 hover:bg-stone-50'
                }`}
              >
                Esauriti ({stats.outOfStock})
              </button>
              <button
                onClick={() => setFilterType('promo')}
                className={`px-3 py-1.5 rounded-full font-bold uppercase text-[11px] transition-all ${
                  filterType === 'promo'
                    ? 'bg-clay text-white'
                    : 'bg-white border border-stone-300 text-stone-600 hover:bg-stone-50'
                }`}
              >
                In Offerta 🔥 ({stats.inPromo})
              </button>
              <button
                onClick={() => setFilterType('bouquet')}
                className={`px-3 py-1.5 rounded-full font-bold uppercase text-[11px] transition-all ${
                  filterType === 'bouquet'
                    ? 'bg-botanical-950 text-white'
                    : 'bg-white border border-stone-300 text-stone-600 hover:bg-stone-50'
                }`}
              >
                Bouquet
              </button>
              <button
                onClick={() => setFilterType('piante')}
                className={`px-3 py-1.5 rounded-full font-bold uppercase text-[11px] transition-all ${
                  filterType === 'piante'
                    ? 'bg-botanical-950 text-white'
                    : 'bg-white border border-stone-300 text-stone-600 hover:bg-stone-50'
                }`}
              >
                Piante & Vasi
              </button>
              <button
                onClick={() => setFilterType('composizioni')}
                className={`px-3 py-1.5 rounded-full font-bold uppercase text-[11px] transition-all ${
                  filterType === 'composizioni'
                    ? 'bg-botanical-950 text-white'
                    : 'bg-white border border-stone-300 text-stone-600 hover:bg-stone-50'
                }`}
              >
                Composizioni
              </button>
              <button
                onClick={() => setFilterType('funebre')}
                className={`px-3 py-1.5 rounded-full font-bold uppercase text-[11px] transition-all ${
                  filterType === 'funebre'
                    ? 'bg-stone-800 text-white'
                    : 'bg-white border border-stone-300 text-stone-600 hover:bg-stone-50'
                }`}
              >
                Arte Funebre
              </button>
            </div>

            {/* Products Table (Desktop) / Cards (Mobile) */}
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
              
              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-50 text-stone-500 font-bold uppercase tracking-wider border-b border-stone-200">
                    <tr>
                      <th className="py-3.5 px-4">Foto & Titolo</th>
                      <th className="py-3.5 px-4">Categoria</th>
                      <th className="py-3.5 px-4">Prezzo / Offerta</th>
                      <th className="py-3.5 px-4 text-center">Giacenza Stock</th>
                      <th className="py-3.5 px-4 text-center">Stato Offerta</th>
                      <th className="py-3.5 px-4 text-right">Azioni</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {filteredProducts.map((p) => {
                      const isOutOfStock = p.stockQuantity === 0;
                      return (
                        <tr key={p.id} className="hover:bg-cream/40 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={p.img}
                                alt={p.name}
                                className="w-12 h-12 rounded-xl object-cover shrink-0 border border-stone-200"
                              />
                              <div className="min-w-0">
                                <p className="font-serif text-base font-bold text-botanical-950 leading-tight">
                                  {p.name}
                                </p>
                                <span className="text-[10px] text-stone-500 font-medium">
                                  {p.badge}
                                </span>
                              </div>
                            </div>
                          </td>

                          <td className="py-3 px-4 uppercase text-[11px] font-semibold text-stone-600">
                            {p.category}
                          </td>

                          <td className="py-3 px-4">
                            {p.isPromo ? (
                              <div>
                                <span className="font-bold text-clay text-sm">
                                  {p.price},00 €
                                </span>
                                <span className="text-[10px] text-stone-400 line-through ml-1.5">
                                  {p.originalPrice},00 €
                                </span>
                                <span className="block text-[9px] font-bold text-amber-700">
                                  -{p.promoDiscountPct}% Offerta
                                </span>
                              </div>
                            ) : (
                              <span className="font-bold text-stone-900 text-sm">
                                {p.price},00 €
                              </span>
                            )}
                          </td>

                          {/* Quick Stock Toggle */}
                          <td className="py-3 px-4 text-center">
                            <button
                              type="button"
                              onClick={() => toggleStock(p.id)}
                              className={`px-3 py-1 rounded-full font-bold text-[11px] transition-all inline-flex items-center gap-1.5 shadow-sm ${
                                isOutOfStock
                                  ? 'bg-rose-100 text-rose-800 hover:bg-rose-200'
                                  : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                              }`}
                            >
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  isOutOfStock ? 'bg-rose-600' : 'bg-emerald-600'
                                }`}
                              />
                              <span>{isOutOfStock ? 'Esaurito (0)' : `In Stock (${p.stockQuantity})`}</span>
                            </button>
                          </td>

                          {/* Quick Promo Toggle */}
                          <td className="py-3 px-4 text-center">
                            <button
                              type="button"
                              onClick={() => toggleOffer(p.id, !p.isPromo)}
                              className={`px-3 py-1 rounded-full font-bold text-[11px] transition-all inline-flex items-center gap-1 shadow-sm ${
                                p.isPromo
                                  ? 'bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300'
                                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                              }`}
                            >
                              {p.isPromo ? (
                                <>
                                  <Flame className="w-3 h-3 text-clay fill-clay" />
                                  <span>In Offerta</span>
                                </>
                              ) : (
                                <span>Prezzo Standard</span>
                              )}
                            </button>
                          </td>

                          {/* Edit / Delete Buttons */}
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => handleOpenEditModal(p)}
                                className="p-2 text-stone-600 hover:text-botanical-950 hover:bg-stone-100 rounded-lg transition-colors"
                                title="Modifica Creazione"
                              >
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(p.id)}
                                className="p-2 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                                title="Elimina"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Touch Cards View (Android & iOS) */}
              <div className="lg:hidden divide-y divide-stone-100">
                {filteredProducts.map((p) => {
                  const isOutOfStock = p.stockQuantity === 0;
                  return (
                    <div key={p.id} className="p-4 space-y-3">
                      <div className="flex gap-3">
                        <img
                          src={p.img}
                          alt={p.name}
                          className="w-20 h-20 rounded-xl object-cover shrink-0 border border-stone-200"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] uppercase font-bold text-clay">
                            {p.category} • {p.badge}
                          </span>
                          <h4 className="font-serif text-lg font-bold text-botanical-950 leading-tight">
                            {p.name}
                          </h4>

                          <div className="flex items-baseline gap-2 mt-1">
                            <span className="font-bold text-clay text-base">
                              {p.price},00 €
                            </span>
                            {p.isPromo && (
                              <span className="text-xs text-stone-400 line-through">
                                {p.originalPrice},00 €
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Mobile Actions: Stock Toggle, Offer Toggle, Edit */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-100">
                        <button
                          type="button"
                          onClick={() => toggleStock(p.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                            isOutOfStock
                              ? 'bg-rose-100 text-rose-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {isOutOfStock ? '✕ Esaurito' : `✓ Stock (${p.stockQuantity})`}
                        </button>

                        <button
                          type="button"
                          onClick={() => toggleOffer(p.id, !p.isPromo)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${
                            p.isPromo
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : 'bg-stone-100 text-stone-600'
                          }`}
                        >
                          <Flame className="w-3.5 h-3.5 text-clay" />
                          <span>{p.isPromo ? 'Offerta Attiva' : 'Metti Offerta'}</span>
                        </button>

                        <button
                          onClick={() => handleOpenEditModal(p)}
                          className="px-3.5 py-1.5 rounded-lg bg-botanical-950 text-white text-xs font-bold ml-auto"
                        >
                          Modifica
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12 text-stone-400 text-xs">
                  Nessuna creazione corrisponde ai criteri di ricerca.
                </div>
              )}

            </div>

          </div>
        )}

        {/* ===================================================================
            TAB 2: TOP ANNOUNCEMENT & PROMO EDITOR
            =================================================================== */}
        {activeTab === 'announcement' && (
          <AnnouncementBarEditor />
        )}

      </main>

      {/* Product Form Modal (Create / Edit) */}
      <ProductFormModal
        isOpen={isModalOpen}
        productToEdit={selectedProduct}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveProduct}
        onDelete={handleDeleteProduct}
      />

    </div>
  );
};

