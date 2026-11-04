import React, { useState, useMemo, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCatalog } from '../context/CatalogContext';
import { siteConfig } from '../config/siteConfig';
import { BrandLogo } from '../components/layout/BrandLogo';
import { ProductFormModal } from '../components/admin/ProductFormModal';
import { AnnouncementBarEditor } from '../components/admin/AnnouncementBarEditor';
import { Product, CategoryId, CustomerOrder } from '../types/catalog';
import { getOptimizedImageUrl } from '../services/cloudinaryService';
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
  Store,
  Key,
  Truck,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  UserCheck,
  RefreshCw,
} from 'lucide-react';

interface AdminPageProps {
  onBackToStore?: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onBackToStore }) => {
  const { isAuthenticated, user, login, changeCredentials, logout, isLoading: authLoading } = useAuth();
  const {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    toggleStock,
    toggleOffer,
    announcement,
    deliverySettings,
    updateDeliverySettings,
    orders,
    refreshOrders,
    updateOrderStatus,
  } = useCatalog();

  // 1. Login Form State (Strictly EMPTY by default, zero precompiled credentials)
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // 2. Admin Dashboard State & Active Tab
  const [activeTab, setActiveTab] = useState<'catalog' | 'announcement' | 'logistics' | 'orders' | 'security'>('catalog');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'stock' | 'out_of_stock' | 'promo' | CategoryId>('all');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // 3. Logistics Settings State
  const [standardFee, setStandardFee] = useState<number>(deliverySettings.standardShippingFee);
  const [freeShippingActive, setFreeShippingActive] = useState<boolean>(deliverySettings.freeShippingEnabled);
  const [freeShippingThreshold, setFreeShippingThreshold] = useState<number>(deliverySettings.freeShippingThreshold);
  const [deliveryArea, setDeliveryArea] = useState<string>(deliverySettings.deliveryArea);
  const [logisticsNotice, setLogisticsNotice] = useState<string | null>(null);
  const [isSavingLogistics, setIsSavingLogistics] = useState(false);

  // 4. Security Credentials State
  const [newUsername, setNewUsername] = useState(user?.username || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securitySuccess, setSecuritySuccess] = useState<string | null>(null);
  const [securityError, setSecurityError] = useState<string | null>(null);
  const [isUpdatingCreds, setIsUpdatingCreds] = useState(false);

  // Sync logistics local state when context changes
  useEffect(() => {
    setStandardFee(deliverySettings.standardShippingFee);
    setFreeShippingActive(deliverySettings.freeShippingEnabled);
    setFreeShippingThreshold(deliverySettings.freeShippingThreshold);
    setDeliveryArea(deliverySettings.deliveryArea);
  }, [deliverySettings]);

  useEffect(() => {
    if (user?.username) {
      setNewUsername(user.username);
    }
  }, [user]);

  // Refresh orders when opening orders tab
  useEffect(() => {
    if (activeTab === 'orders') {
      refreshOrders();
    }
  }, [activeTab]);

  // Handle Clean Login (no demo shortcuts)
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setIsLoggingIn(true);
    try {
      const result = await login(usernameInput.trim(), passwordInput);
      if (!result.success) {
        setLoginError(result.error || 'Credenziali non valide.');
      } else {
        setUsernameInput('');
        setPasswordInput('');
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
    const ordersCount = orders.length;
    return { total, inStock, outOfStock, inPromo, ordersCount };
  }, [products, orders]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        searchQuery === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.badge.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

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

  // Save Logistics Delivery Pricing Settings
  const handleSaveLogistics = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingLogistics(true);
    setLogisticsNotice(null);
    try {
      await updateDeliverySettings({
        standardShippingFee: Number(standardFee),
        freeShippingEnabled: freeShippingActive,
        freeShippingThreshold: Number(freeShippingThreshold),
        deliveryArea: deliveryArea.trim() || 'tutta Roma',
      });
      setLogisticsNotice('✓ Tariffe di consegna e politiche di spedizione aggiornate con successo!');
      setTimeout(() => setLogisticsNotice(null), 4000);
    } catch {
      setLogisticsNotice('Errore durante il salvataggio delle impostazioni di consegna.');
    } finally {
      setIsSavingLogistics(false);
    }
  };

  // Save Admin Security Credentials
  const handleSaveSecurity = async (e: React.FormEvent) => {
    e.preventDefault();
    setSecuritySuccess(null);
    setSecurityError(null);

    if (!currentPassword) {
      setSecurityError('La password attuale è obbligatoria per confermare la modifica.');
      return;
    }
    if (newPassword.length < 6) {
      setSecurityError('La nuova password deve contenere almeno 6 caratteri.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setSecurityError('La nuova password e la conferma non coincidono.');
      return;
    }

    setIsUpdatingCreds(true);
    try {
      const res = await changeCredentials(currentPassword, newUsername, newPassword);
      if (res.success) {
        setSecuritySuccess(res.message || 'Credenziali aggiornate con successo su MongoDB!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setSecurityError(res.error || 'Errore durante l\'aggiornamento delle credenziali.');
      }
    } catch {
      setSecurityError('Impossibile contattare il server per aggiornare le credenziali.');
    } finally {
      setIsUpdatingCreds(false);
    }
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
  // 1. LOGIN SCREEN (Clean & Professional, Zero Prefilled Credentials)
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
            <BrandLogo size="lg" variant="dark" />
            <div className="pt-3">
              <span className="px-3 py-1 rounded-full bg-botanical-950 text-petal text-[10px] font-bold uppercase tracking-[0.25em]">
                Pannello Riservato Fiorista
              </span>
              <h2 className="font-serif text-3xl font-semibold text-botanical-950 mt-2">
                Accesso Dashboard
              </h2>
              <p className="text-xs text-stone-500">
                Gestisci catalogo prodotti, ordini ricevuti, tariffe di consegna e sicurezza.
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
                placeholder="Inserisci username o email..."
                className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-stone-800 focus:outline-none focus:ring-2 focus:ring-botanical-900 font-medium placeholder:text-stone-400"
              />
            </div>

            <div>
              <label className="block font-bold uppercase tracking-wider text-stone-600 mb-1">
                Password Amministratore
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-stone-800 focus:outline-none focus:ring-2 focus:ring-botanical-900 font-medium placeholder:text-stone-400"
              />
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-4 bg-botanical-950 hover:bg-clay text-white rounded-2xl font-bold uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
            >
              <Lock className="w-4 h-4" />
              <span>{isLoggingIn ? 'Verifica in corso...' : 'Accedi al Pannello →'}</span>
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
                Ordini Ricevuti
              </span>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-botanical-950 mt-0.5">
                {stats.ordersCount}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-clay flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">
                Tariffa Consegna
              </span>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-clay mt-0.5">
                {deliverySettings.standardShippingFee.toFixed(2)} €
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-stone-50 text-stone-700 flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
          </div>

        </div>

        {/* Section Navigation Tabs */}
        <div className="flex border-b border-stone-300 gap-2 sm:gap-4 text-xs font-bold uppercase tracking-wider overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('catalog')}
            className={`pb-3 px-2 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'catalog'
                ? 'border-botanical-950 text-botanical-950 font-bold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Catalogo Prodotti ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`pb-3 px-2 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'orders'
                ? 'border-botanical-950 text-botanical-950 font-bold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Ordini Ricevuti ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('logistics')}
            className={`pb-3 px-2 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'logistics'
                ? 'border-botanical-950 text-botanical-950 font-bold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Tariffe & Spedizioni</span>
          </button>

          <button
            onClick={() => setActiveTab('announcement')}
            className={`pb-3 px-2 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'announcement'
                ? 'border-botanical-950 text-botanical-950 font-bold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Megaphone className="w-4 h-4" />
            <span>Top Announcement</span>
            {announcement.active && (
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`pb-3 px-2 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'security'
                ? 'border-botanical-950 text-botanical-950 font-bold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Key className="w-4 h-4" />
            <span>Account & Sicurezza</span>
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
                    ? 'bg-botanical-950 text-white'
                    : 'bg-white border border-stone-300 text-stone-600 hover:bg-stone-50'
                }`}
              >
                Arte Funebre
              </button>
            </div>

            {/* Products Table (Desktop) / Cards (Mobile) */}
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
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
                                src={getOptimizedImageUrl(p.imageUrl || p.img, 150)}
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
                                {p.originalPrice && (
                                  <span className="text-[11px] text-stone-400 line-through ml-1.5">
                                    {p.originalPrice},00 €
                                  </span>
                                )}
                              </div>
                            ) : (
                              <span className="font-bold text-botanical-950 text-sm">
                                {p.price},00 €
                              </span>
                            )}
                          </td>

                          <td className="py-3 px-4 text-center">
                            <button
                              type="button"
                              onClick={() => toggleStock(p.id)}
                              className={`px-3 py-1 rounded-full font-bold text-[11px] transition-all active:scale-95 ${
                                isOutOfStock
                                  ? 'bg-rose-100 text-rose-800 border border-rose-300'
                                  : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                              }`}
                            >
                              {isOutOfStock ? 'Esaurito (0)' : `Disponibile (${p.stockQuantity})`}
                            </button>
                          </td>

                          <td className="py-3 px-4 text-center">
                            <button
                              type="button"
                              onClick={() => toggleOffer(p.id, !p.isPromo)}
                              className={`px-3 py-1 rounded-full font-bold text-[11px] transition-all flex items-center justify-center gap-1 mx-auto ${
                                p.isPromo
                                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                              }`}
                            >
                              <Flame className="w-3.5 h-3.5 text-clay" />
                              <span>{p.isPromo ? `Offerta (-${p.promoDiscountPct || 15}%)` : 'No Sconto'}</span>
                            </button>
                          </td>

                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => handleOpenEditModal(p)}
                                className="p-2 rounded-lg hover:bg-stone-100 text-stone-600 hover:text-botanical-950 transition-colors"
                                title="Modifica"
                              >
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(p.id)}
                                className="p-2 rounded-lg hover:bg-rose-50 text-stone-400 hover:text-rose-600 transition-colors"
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
                          src={getOptimizedImageUrl(p.imageUrl || p.img, 200)}
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
                            {p.originalPrice && p.originalPrice > p.price && (
                              <span className="text-xs text-stone-400 line-through">
                                {p.originalPrice},00 €
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-2 border-t border-stone-100">
                        <button
                          type="button"
                          onClick={() => toggleStock(p.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                            isOutOfStock
                              ? 'bg-rose-100 text-rose-800'
                              : 'bg-emerald-100 text-emerald-900'
                          }`}
                        >
                          {isOutOfStock ? 'Esaurito' : `In Stock (${p.stockQuantity})`}
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
            TAB 2: ORDINI RICEVUTI (MongoDB / Realtime)
            =================================================================== */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-serif text-2xl font-bold text-botanical-950">
                  Registro Ordini Ricevuti
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Ordini confermati dal carrello e sincronizzati con il database MongoDB.
                </p>
              </div>

              <button
                type="button"
                onClick={refreshOrders}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 rounded-xl text-xs font-bold text-botanical-950 flex items-center gap-1.5 self-start sm:self-auto"
              >
                <RefreshCw className="w-3.5 h-3.5 text-clay" />
                <span>Aggiorna Elenco</span>
              </button>
            </div>

            {orders.length === 0 ? (
              <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center text-stone-400 space-y-2">
                <ShoppingBag className="w-10 h-10 mx-auto text-stone-300" />
                <p className="text-sm font-semibold">Nessun ordine presente al momento.</p>
                <p className="text-xs">Quando un cliente conferma un ordine nel carrello, apparirà istantaneamente qui.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((ord) => (
                  <div
                    key={ord.orderId}
                    className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-botanical-950 text-petal">
                            #{ord.orderId}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                            ord.status === 'COMPLETED'
                              ? 'bg-emerald-100 text-emerald-800'
                              : ord.status === 'DELIVERING'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {ord.status}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-400 mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{ord.createdAt ? new Date(ord.createdAt).toLocaleString('it-IT') : 'Recente'}</span>
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-stone-500">Totale Ordine:</span>
                        <p className="font-serif text-xl font-bold text-clay leading-tight">
                          {ord.total.toFixed(2)} €
                        </p>
                      </div>
                    </div>

                    {/* Customer & Delivery Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-stone-50/70 p-4 rounded-xl border border-stone-200/80">
                      <div className="space-y-1.5">
                        <p className="font-bold text-botanical-950 flex items-center gap-1.5">
                          <UserCheck className="w-3.5 h-3.5 text-clay" />
                          <span>Cliente: {ord.customer.fullName}</span>
                        </p>
                        <p className="text-stone-600">
                          Telefono: <strong>{ord.customer.phone}</strong>
                        </p>
                        <p className="text-stone-600 flex items-start gap-1">
                          <MapPin className="w-3.5 h-3.5 text-clay shrink-0 mt-0.5" />
                          <span>{ord.customer.deliveryAddress}</span>
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <p className="text-stone-600 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-stone-400" />
                          <span>Data Consegna: <strong>{ord.customer.deliveryDate}</strong> ({ord.customer.timeSlot})</span>
                        </p>
                        {ord.greetingCardText && ord.greetingCardText !== 'Nessun bigliettino' && (
                          <div className="p-2 bg-white rounded-lg border border-stone-200 text-stone-700 italic">
                            💌 "{ord.greetingCardText}"
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Items List */}
                    <div className="space-y-1.5">
                      <p className="text-[11px] font-bold uppercase text-stone-500">Articoli Ordinati:</p>
                      <div className="space-y-1">
                        {ord.items.map((it, idx) => (
                          <div key={idx} className="flex justify-between text-xs text-stone-700">
                            <span>{it.quantity}x <strong>{it.name}</strong></span>
                            <span className="font-bold text-stone-900">{(it.price * it.quantity).toFixed(2)} €</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions: Contact customer on WhatsApp & Change Status */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-100">
                      <a
                        href={`https://wa.me/${ord.customer.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Contatta su WhatsApp</span>
                      </a>

                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-stone-500 font-semibold">Stato:</span>
                        <select
                          value={ord.status}
                          onChange={(e) =>
                            updateOrderStatus(ord.orderId, e.target.value as CustomerOrder['status'])
                          }
                          className="px-3 py-1.5 rounded-lg border border-stone-300 bg-white font-bold text-botanical-950 focus:outline-none"
                        >
                          <option value="CONFIRMED">Confermato</option>
                          <option value="DELIVERING">In Consegna</option>
                          <option value="COMPLETED">Completato</option>
                          <option value="CANCELLED">Annullato</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ===================================================================
            TAB 3: TARIFFE CONSEGNA & SPEDIZIONI (Configurable from Admin)
            =================================================================== */}
        {activeTab === 'logistics' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm max-w-3xl space-y-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-clay">
                Logistica & Politiche Commerciali
              </span>
              <h3 className="font-serif text-3xl font-bold text-botanical-950 mt-1">
                Configurazione Tariffe di Consegna
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Configura se la consegna ha sempre un costo standard (non azzerabile oltre i 50 €) oppure se attivare la soglia di spedizione gratuita.
              </p>
            </div>

            {logisticsNotice && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{logisticsNotice}</span>
              </div>
            )}

            <form onSubmit={handleSaveLogistics} className="space-y-6 text-xs">
              
              {/* Standard Delivery Fee */}
              <div className="space-y-1.5">
                <label className="block font-bold uppercase tracking-wider text-stone-700">
                  Costo Standard di Consegna a Domicilio (€) *
                </label>
                <p className="text-[11px] text-stone-500">
                  Importo applicato per le consegne a mano su Roma.
                </p>
                <div className="relative max-w-xs">
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    required
                    value={standardFee}
                    onChange={(e) => setStandardFee(parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-base font-bold text-botanical-950 focus:outline-none focus:ring-2 focus:ring-botanical-900"
                  />
                  <span className="absolute right-4 top-3.5 text-stone-400 font-bold">€</span>
                </div>
              </div>

              {/* Free Shipping Toggle Switch */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="pr-4">
                    <span className="font-bold text-sm text-botanical-950 block">
                      Abilita Spedizione Gratuita oltre Soglia di Spesa
                    </span>
                    <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed">
                      Se <strong>disattivata</strong>, il costo di consegna ({standardFee.toFixed(2)} €) viene sempre applicato a tutti gli ordini a domicilio, anche superando 50 € (il ritiro in bottega resta sempre a 0 €).
                    </p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      checked={freeShippingActive}
                      onChange={(e) => setFreeShippingActive(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-12 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-clay" />
                  </label>
                </div>

                {freeShippingActive && (
                  <div className="pt-3 border-t border-stone-200/80 space-y-2 animate-in fade-in">
                    <label className="block font-bold uppercase tracking-wider text-stone-700">
                      Soglia Minima di Spesa per la Spedizione Gratuita (€)
                    </label>
                    <div className="relative max-w-xs">
                      <input
                        type="number"
                        step="1"
                        min="1"
                        value={freeShippingThreshold}
                        onChange={(e) => setFreeShippingThreshold(parseFloat(e.target.value) || 0)}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm font-bold text-botanical-950"
                      />
                      <span className="absolute right-4 top-3 text-stone-400 font-bold">€</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Delivery Area */}
              <div className="space-y-1.5">
                <label className="block font-bold uppercase tracking-wider text-stone-700">
                  Area Geografica Coperta
                </label>
                <input
                  type="text"
                  value={deliveryArea}
                  onChange={(e) => setDeliveryArea(e.target.value)}
                  placeholder="Es. tutta Roma e provincia"
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-xs focus:outline-none focus:ring-1 focus:ring-botanical-900"
                />
              </div>

              <button
                type="submit"
                disabled={isSavingLogistics}
                className="px-7 py-3.5 bg-botanical-950 hover:bg-clay text-white rounded-xl font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 disabled:opacity-50"
              >
                {isSavingLogistics ? 'Salvataggio...' : 'Salva Impostazioni Consegna'}
              </button>
            </form>
          </div>
        )}

        {/* ===================================================================
            TAB 4: TOP ANNOUNCEMENT & PROMO EDITOR
            =================================================================== */}
        {activeTab === 'announcement' && (
          <AnnouncementBarEditor />
        )}

        {/* ===================================================================
            TAB 5: IMPOSTAZIONI ACCOUNT & SICUREZZA (MongoDB Auth & Change Credentials)
            =================================================================== */}
        {activeTab === 'security' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm max-w-2xl space-y-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-clay">
                Sicurezza Bottega & Accesso
              </span>
              <h3 className="font-serif text-3xl font-bold text-botanical-950 mt-1">
                Modifica Credenziali Amministratore
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Aggiorna il nome utente o la password di accesso alla Dashboard. Le credenziali vengono verificate e salvate direttamente su MongoDB con cifratura sicura BCrypt.
              </p>
            </div>

            {securitySuccess && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{securitySuccess}</span>
              </div>
            )}

            {securityError && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-center gap-2 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{securityError}</span>
              </div>
            )}

            <form onSubmit={handleSaveSecurity} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Nuovo Username / Email
                </label>
                <input
                  type="text"
                  required
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  placeholder="Es. fiorista_peter"
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-stone-800 focus:outline-none focus:ring-2 focus:ring-botanical-900 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Password Attuale (per verifica sicurezza) *
                </label>
                <input
                  type="password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Inserisci la password attuale..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-stone-800 focus:outline-none focus:ring-2 focus:ring-botanical-900 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Nuova Password *
                  </label>
                  <input
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Minimo 6 caratteri..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-stone-800 focus:outline-none focus:ring-2 focus:ring-botanical-900 font-medium"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Conferma Nuova Password *
                  </label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Ripeti la nuova password..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-stone-800 focus:outline-none focus:ring-2 focus:ring-botanical-900 font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isUpdatingCreds}
                className="px-7 py-3.5 bg-botanical-950 hover:bg-clay text-white rounded-xl font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 disabled:opacity-50 flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-petal" />
                <span>{isUpdatingCreds ? 'Salvataggio su MongoDB...' : 'Aggiorna Credenziali su MongoDB'}</span>
              </button>
            </form>
          </div>
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

export default AdminPage;
